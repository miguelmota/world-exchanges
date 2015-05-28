# world-exchanges

> Get opening and closing times of world exchanges.

Data from *[List of stock exchange opening times](https://en.wikipedia.org/wiki/List_of_stock_exchange_opening_times)* Wikipedia page.

[![NPM](https://nodei.co/npm/world-exchanges.png)](https://nodei.co/npm/world-exchanges)

# Install

```bash
npm install world-exchanges
```

# Usage

```javascript
var worldExchanges = require('world-exchanges');

console.log(new Date()); // "Thu May 28 2015 13:43:31 GMT-0700 (PDT)"
console.log(worldExchanges('NYSE').isOpen(/* optional Date */)); // false
console.log(worldExchanges('NYSE').isClosed(/* optional Date */)); // true
console.log(worldExchanges('NYSE').getOpenTime()); // "2015-05-28T14:30:00.000Z" (always in GMT)
console.log(worldExchanges('NYSE').getCloseTime()); // "2015-05-28T21:00:00.000Z" (always in GMT)
console.log(worldExchanges('NYSE').getTimezone()); // "EST"
console.log(worldExchanges('NYSE').getTimezoneDelta()); // "-5"
console.log(worldExchanges('NYSE').getName()); // "New York Stock Exchange (NYSE)"
console.log(worldExchanges.getList()); // ['AMS', 'ASE', 'ASX', 'BCBA', ...]
```

# Test

```bash
npm test
```

Crawl Wikipedia page and save data to JSON file.

```bash
npm run-script crawl
```

# License

MIT
