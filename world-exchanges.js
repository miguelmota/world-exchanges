(function(root) {
  'use strict';

  var exchanges = {
    "AMS": {
      "Close": "16:40",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Euronext Amsterdam (AMS)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "ASE": {
      "Close": "10:00",
      "DST": "Mar–Oct",
      "Delta": "+2",
      "Lunch": "No",
      "Name": "Amman Stock Exchange (ASE)",
      "Open": "08:00",
      "Zone": "EET"
    },
    "ASX": {
      "Close": "06:12",
      "DST": "Oct–Apr",
      "Delta": "+10",
      "Lunch": "No",
      "Name": "Australian Securities Exchange (ASX)",
      "Open": "23:50",
      "Zone": "AEST"
    },
    "BCBA": {
      "Close": "20:00",
      "DST": "",
      "Delta": "-3",
      "Lunch": "No",
      "Name": "Buenos Aires Stock Exchange (BCBA)",
      "Open": "14:00",
      "Zone": "ART"
    },
    "BME": {
      "Close": "16:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Spanish Stock Exchange (BME)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "BMV": {
      "Close": "21:00",
      "DST": "Apr–Oct",
      "Delta": "-6",
      "Lunch": "No",
      "Name": "Mexican Stock Exchange (BMV)",
      "Open": "14:30",
      "Zone": "CST"
    },
    "BSE": {
      "Close": "16:00",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Budapest Stock Exchange (BSE)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "BX": {
      "Close": "15:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Berne eXchange (BX)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "Bovespa": {
      "Close": "20:00",
      "DST": "Oct–Feb",
      "Delta": "-3",
      "Lunch": "No",
      "Name": "Bolsa de Valores de São Paulo (Bovespa)",
      "Open": "13:00",
      "Zone": "BRT"
    },
    "CSE": {
      "Close": "16:00",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Copenhagen Stock Exchange (CSE)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "EPA": {
      "Close": "16:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Euronext Paris (EPA)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "FSX": {
      "Close": "21:00 (Eurex)\n19:00 (floor)\n16:30 (Xetra)",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Frankfurt Stock Exchange (FSX)\nXetra / Eurex",
      "Open": "07:00 (Eurex)\n07:00 (floor)\n08:00 (Xetra)",
      "Zone": "CET"
    },
    "GPW": {
      "Close": "16:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Warsaw Stock Exchange (GPW)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "HKEX": {
      "Close": "08:00",
      "DST": "",
      "Delta": "+8",
      "Lunch": "04:00–05:00",
      "Name": "Hong Kong Stock Exchange (HKEX)",
      "Open": "01:20",
      "Zone": "HKT"
    },
    "HKFE": {
      "Close": "08:00",
      "DST": "",
      "Delta": "+8",
      "Lunch": "04:00–05:00",
      "Name": "Hong Kong Futures Exchange (HKFE)",
      "Open": "01:15",
      "Zone": "HKT"
    },
    "IDX": {
      "Close": "09:00",
      "DST": "",
      "Delta": "+7",
      "Lunch": "No",
      "Name": "Indonesia Stock Exchange (IDX)",
      "Open": "02:30",
      "Zone": "WIB"
    },
    "ISE": {
      "Close": "16:30",
      "DST": "Mar–Oct",
      "Delta": "+0",
      "Lunch": "No",
      "Name": "Irish Stock Exchange (ISE)",
      "Open": "08:00",
      "Zone": "GMT"
    },
    "JSE": {
      "Close": "15:00",
      "DST": "",
      "Delta": "+2",
      "Lunch": "No",
      "Name": "Johannesburg Stock Exchange (JSE)",
      "Open": "07:00",
      "Zone": "SAST"
    },
    "KRX": {
      "Close": "06:00",
      "DST": "",
      "Delta": "+9",
      "Lunch": "No",
      "Name": "Korea Stock Exchange (KRX)",
      "Open": "00:00",
      "Zone": "KST"
    },
    "KSE": {
      "Close": "10:30",
      "DST": "",
      "Delta": "+5",
      "Lunch": "No",
      "Name": "Karachi Stock Exchange (KSE)",
      "Open": "04:30",
      "Zone": "PKT"
    },
    "LSE": {
      "Close": "16:30",
      "DST": "Mar–Oct",
      "Delta": "+0",
      "Lunch": "No",
      "Name": "London Stock Exchange (LSE)",
      "Open": "08:00",
      "Zone": "GMT"
    },
    "LuxSE": {
      "Close": "16:35",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Luxembourg Stock Exchange (LuxSE)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "MICEX": {
      "Close": "15:45",
      "DST": "",
      "Delta": "+3",
      "Lunch": "No",
      "Name": "Moscow Interbank Currency Exchange (MICEX)",
      "Open": "07:00",
      "Zone": "MSK"
    },
    "MSE": {
      "Close": "11:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Malta Stock Exchange (Borza ta' Malta) (MSE)",
      "Open": "08:30",
      "Zone": "CET"
    },
    "MTA": {
      "Close": "16:25",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Milan Stock Exchange (MTA)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "MYX": {
      "Close": "09:00",
      "DST": "",
      "Delta": "+8",
      "Lunch": "04:30–06:30",
      "Name": "Bursa Malaysia (MYX)",
      "Open": "01:00",
      "Zone": "MYT"
    },
    "NASDAQ": {
      "Close": "21:00",
      "DST": "Mar–Nov",
      "Delta": "-5",
      "Lunch": "No",
      "Name": "NASDAQ",
      "Open": "14:30",
      "Zone": "EST"
    },
    "NSE": {
      "Close": "15:00",
      "DST": "",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Nigerian Stock Exchange (NSE)",
      "Open": "09:00",
      "Zone": "WAT"
    },
    "NYSE": {
      "Close": "21:00",
      "DST": "Mar–Nov",
      "Delta": "-5",
      "Lunch": "No",
      "Name": "New York Stock Exchange (NYSE)",
      "Open": "14:30",
      "Zone": "EST"
    },
    "NZSX": {
      "Close": "05:00",
      "DST": "Sep–Apr",
      "Delta": "+12",
      "Lunch": "No",
      "Name": "New Zealand Stock Market (NZSX)",
      "Open": "22:00",
      "Zone": "NZST"
    },
    "OMX": {
      "Close": "16:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Stockholm Stock Exchange (OMX)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "OMXR": {
      "Close": "14:00",
      "DST": "Mar–Oct",
      "Delta": "+2",
      "Lunch": "No",
      "Name": "Riga Stock Exchange (OMXR)",
      "Open": "08:00",
      "Zone": "EET"
    },
    "OSE": {
      "Close": "15:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Oslo Stock Exchange (OSE)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "PSE": {
      "Close": "07:30",
      "DST": "",
      "Delta": "+8",
      "Lunch": "04:00–05:30",
      "Name": "Philippine Stock Exchange (PSE)",
      "Open": "01:30",
      "Zone": "PHT"
    },
    "SET": {
      "Close": "09:30",
      "DST": "",
      "Delta": "+7",
      "Lunch": "05:30–07:30",
      "Name": "Stock Exchange of Thailand (SET)",
      "Open": "03:00",
      "Zone": "ICT"
    },
    "SGX": {
      "Close": "09:00",
      "DST": "",
      "Delta": "+8",
      "Lunch": "No",
      "Name": "Singapore Exchange (SGX)",
      "Open": "01:00",
      "Zone": "SGT"
    },
    "SIX": {
      "Close": "16:30",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Swiss Exchange (SIX)",
      "Open": "08:00",
      "Zone": "CET"
    },
    "SSE": {
      "Close": "07:00",
      "DST": "",
      "Delta": "+8",
      "Lunch": "03:30–05:00",
      "Name": "Shanghai Stock Exchange (SSE)",
      "Open": "01:30",
      "Zone": "CST"
    },
    "SZSE": {
      "Close": "07:00",
      "DST": "",
      "Delta": "+8",
      "Lunch": "03:30–05:00",
      "Name": "Shenzhen Stock Exchange (SZSE)",
      "Open": "01:30",
      "Zone": "CST"
    },
    "TADAWUL": {
      "Close": "12:30",
      "DST": "",
      "Delta": "+3",
      "Lunch": "No",
      "Name": "Saudi Stock Exchange (TADAWUL)",
      "Open": "08:00",
      "Zone": "AST"
    },
    "TASE": {
      "Close": "14:25",
      "DST": "Mar–Oct",
      "Delta": "+2",
      "Lunch": "No",
      "Name": "Tel Aviv Stock Exchange (TASE)",
      "Open": "07:00",
      "Zone": "IST"
    },
    "TSE": {
      "Close": "06:00",
      "DST": "",
      "Delta": "+9",
      "Lunch": "02:30–03:30",
      "Name": "Tokyo Stock Exchange (TSE)",
      "Open": "00:00",
      "Zone": "JST"
    },
    "TSX": {
      "Close": "21:00",
      "DST": "Mar–Nov",
      "Delta": "-5",
      "Lunch": "No",
      "Name": "Toronto Stock Exchange (TSX)",
      "Open": "14:30",
      "Zone": "EST"
    },
    "TWSE": {
      "Close": "05:30",
      "DST": "",
      "Delta": "+8",
      "Lunch": "No",
      "Name": "Taiwan Stock Exchange (TWSE)",
      "Open": "01:00",
      "Zone": "CST"
    },
    "UX": {
      "Close": "15:30",
      "DST": "Mar–Oct",
      "Delta": "+2",
      "Lunch": "No",
      "Name": "Ukrainian Exchange (UX)",
      "Open": "08:00",
      "Zone": "EET"
    },
    "Wiener Börse AG": {
      "Close": "16:35",
      "DST": "Mar–Oct",
      "Delta": "+1",
      "Lunch": "No",
      "Name": "Wiener Börse AG",
      "Open": "07:55",
      "Zone": "CET"
    }
  };

  function isDateInRange(currentDate, minDate, maxDate) {
    return (currentDate > minDate && currentDate < maxDate);
  }

  function toUTCDate(date) {
    return new Date((Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds())));
  }

  function worldExchanges(symbol) {
    var exchange;

    for (var s in exchanges) {
      if (exchanges.hasOwnProperty(s)) {
        if (s.toUpperCase() === (symbol+'').toUpperCase()) {
          exchange = exchanges[s];
        }
      }
    }

    if (typeof exchange === 'undefined') {
      throw new Error('Exchange does not exist.');
    }

    var openTimeSplit = exchange.Open.split(':');
    var closeTimeSplit = exchange.Close.split(':');
    var openTimeHours = openTimeSplit[0];
    var openTimeMinutes = openTimeSplit[1];
    var closeTimeHours = closeTimeSplit[0];
    var closeTimeMinutes = closeTimeSplit[1];

    function getName() {
      return exchange.Name;
    }

    function isOpen(date) {
      var now = date || new Date();
      var exchangeOpen = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), openTimeHours, openTimeMinutes, 0));
      var exchangeClose = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), closeTimeHours, closeTimeMinutes, 0));
      return isDateInRange(now, exchangeOpen, exchangeClose);
    }

    function isClosed(date) {
      return !isOpen(date);
    }

    function getOpenTime() {
      var now = new Date();
      return (new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), openTimeHours, openTimeMinutes, 0))).toISOString();
    }

    function getCloseTime() {
      var now = new Date();
      return (new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), closeTimeHours, closeTimeMinutes, 0))).toISOString();
    }

    function getTimezone() {
      return exchange.Zone;
    }

    function getTimezoneDelta() {
      return exchange.Delta;
    }

    return {
      getName: getName,
      isOpen: isOpen,
      isClosed: isClosed,
      getOpenTime: getOpenTime,
      getCloseTime: getCloseTime,
      getTimezone: getTimezone,
      getTimezoneDelta: getTimezoneDelta
    };
  }

  worldExchanges.getList = function() {
    return Object.keys(exchanges);
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = worldExchanges;
    }
    exports.worldExchanges = worldExchanges;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return worldExchanges;
    });
  } else {
    root.worldExchanges = worldExchanges;
  }

})(this);
