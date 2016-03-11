var ae = require('after-effects');
var aeJSON = require('./..');

ae.options({
  errorHandling: true,
  es5Shim: true,
  aeQuery: true
});

module.exports = function(t) {
  ae.execute(aeJSON)
  .then((json) => {
    t.ok(json, 'received json');
    t.equal(typeof json, 'object', 'received an object from');

    global.jsonFromAE = json;
    
    t.end();
  })
  .catch(function(err) {
    throw err;
  });
};