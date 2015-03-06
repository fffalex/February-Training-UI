define([
  'underscore',
  'config'
], function(config) {
  var globals = {
  };
  _.extend(globals, config);
  return globals;
});