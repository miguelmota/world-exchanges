var test = require('tape');
var worldExchanges = require('../world-exchanges');

test('worldExchanges', function (t) {
  'use strict';

  t.plan(24);

  var now = new Date();

  function UTCDate(H,M,S) {
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), H, M, S));
  }

  function UTCYMD() {
    return [now.getUTCFullYear(), ('0'+(now.getUTCMonth()+1)).slice(-2), ('0'+now.getUTCDate()).slice(-2)].join('-');
  }

  t.throws(function() { worldExchanges(); } , Error);
  t.throws(function() { worldExchanges('abc'); } , Error);
  t.equal(worldExchanges('NYSE').isOpen(UTCDate(14,0,0)), false);
  t.equal(worldExchanges('NYSE').isOpen(UTCDate(14,30,1)), true);
  t.equal(worldExchanges('NYSE').isOpen(UTCDate(20,59,59)), true);
  t.equal(worldExchanges('NYSE').isOpen(UTCDate(21,0)), false);

  t.equal(worldExchanges('TSE').isOpen(UTCDate(0,0,0)), false);
  t.equal(worldExchanges('TSE').isOpen(UTCDate(0,0,1)), true);
  t.equal(worldExchanges('TSE').isOpen(UTCDate(5,59,59)), true);
  t.equal(worldExchanges('TSE').isOpen(UTCDate(6,0,0)), false);

  t.equal(worldExchanges('NYSE').isClosed(UTCDate(14,0,0)), true);
  t.equal(worldExchanges('NYSE').isClosed(UTCDate(14,30,1)), false);
  t.equal(worldExchanges('NYSE').isClosed(UTCDate(20,59,59)), false);
  t.equal(worldExchanges('NYSE').isClosed(UTCDate(21,0)), true);

  t.equal(worldExchanges('TSE').isClosed(UTCDate(0,0,0)), true);
  t.equal(worldExchanges('TSE').isClosed(UTCDate(0,0,1)), false);
  t.equal(worldExchanges('TSE').isClosed(UTCDate(5,59,59)), false);
  t.equal(worldExchanges('TSE').isClosed(UTCDate(6,0,0)), true);

  t.equal(worldExchanges('NYSE').getOpenTime(), UTCYMD() + 'T14:30:00.000Z');
  t.equal(worldExchanges('NYSE').getCloseTime(), UTCYMD() + 'T21:00:00.000Z');
  t.equal(worldExchanges('NYSE').getTimezone(), 'EST');
  t.equal(worldExchanges('NYSE').getTimezoneDelta(), '-5');
  t.equal(worldExchanges('NYSE').getName(), 'New York Stock Exchange (NYSE)');

  t.deepEqual(worldExchanges.getList(), [
              'AMS',
              'ASE',
              'ASX',
              'BCBA',
              'BME',
              'BMV',
              'BSE',
              'BX',
               'Bovespa',
               'CSE',
               'EPA',
               'FSX',
               'GPW',
               'HKEX',
               'HKFE',
               'IDX',
               'ISE',
               'JSE',
               'KRX',
               'KSE',
               'LSE',
               'LuxSE',
               'MICEX',
               'MSE',
               'MTA',
               'MYX',
               'NASDAQ',
               'NSE',
               'NYSE',
               'NZSX',
               'OMX',
               'OMXR',
               'OSE',
               'PSE',
               'SET',
               'SGX',
               'SIX',
               'SSE',
               'SZSE',
               'TADAWUL',
               'TASE',
               'TSE',
               'TSX',
               'TWSE',
               'UX',
               'Wiener Börse AG']);
});
