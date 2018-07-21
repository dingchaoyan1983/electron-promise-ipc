'use strict';

if (process.type === 'renderer') {
  module.exports = require('./renderer');
} else {
  module.exports = require('./mainProcess');
}
//# sourceMappingURL=index.js.map