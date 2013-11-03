var Q = require('q');

module.exports = wrap(validate);

function validate(key, keyDisplayName, object) {
  if (object[key].match(/\W/)) {
    return keyDisplayName + ' must be alphanumeric';
  }
}

function wrap(makePromise) {
  return function () {
    var cb = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0, -1);
    var promise = makePromise.apply(null, args);
    Q.when(promise).nodeify(cb);
  };
}
