const locale = /*navigator.language || navigator.browserLanguage || */'de-DE';

const MESSAGES = require( "i18n/" + locale + ".js" );
var IntlMessageFormat = require("intl-messageformat");

module.exports = function( key, object ) {
  return new IntlMessageFormat(MESSAGES[key], locale).format( object );
};