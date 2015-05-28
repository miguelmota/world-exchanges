var page = require('webpage').create();

var url = 'http://en.wikipedia.org/wiki/List_of_stock_exchange_opening_times';

page.open(url, function() {
  page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function() {
    var table = page.evaluate(function() {
      function parsePage(body) {
        var table = {};

        $('.jquery-tablesorter').each(function () {
            var rootHeaders = [];
            var headers = [];
            $(this).find('thead').find('tr').eq(0).each(function (el, i) {
                $(this).find('th').each(function (el, i) {
                    var text = ($(this).text() || '').trim().replace(/\[.*/gim, '');
                    rootHeaders.push(text);
                });
            });
            $(this).find('thead').find('tr').eq(1).each(function (el, i) {
                $(this).find('th').each(function (el, i) {
                    var text = ($(this).text() || '').trim().replace(/\[.*/gim, '');
                    if (text.charCodeAt(0) === 916) {
                        text = 'Delta';
                    }
                    headers.push(text);
                });
            });
            $(this).find('tbody').find('tr').each(function (i, el) {
                var name;
                $(this).find('td').each(function (i, el) {
                    var text = ($(this).text() || '').trim();
                    text = (text||'').replace(/−/gi,'-');
                    if (i === 0) {
                        var matches = text.match(/\(([^()'"]*)\).*$/mgi);
                        name = matches ? matches[matches.length - 1] : text;
                        name = name.replace(/[()]/gi,'');
                        if (!name) {
                          name = text;
                        }
                        table[name] = {};
                    }
                    table[name][headers[i]] = text;
                });
            });
        });

        return table;
      }

      return parsePage();
    });

    console.log(JSON.stringify(table));
    phantom.exit();
  });
});

