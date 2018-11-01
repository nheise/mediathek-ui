const m = require('mithril')

function mainLayout() {
  return function(){ return [ m('div.container', [ m( 'Hello' ) ] ) ] };
}

function mainLayoutView() {
  return { view: mainLayout() };
}

m.route.prefix("/mediathek")
m.route( document.body, "/", {
  "/": mainLayoutView( ),
});