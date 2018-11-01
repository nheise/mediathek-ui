var m = require( "mithril/mithril" );
var stream = require("mithril/stream");

var mu = {};

mu.control = {};
mu.control.dropdown = function( selection ) {
  let open = stream( false );
  function noticeAnyNextClick() {
      setTimeout(
      () => document.addEventListener("click", closeOnAnyClick ),
      10);
  }
  function closeOnAnyClick(event) {
      document.removeEventListener("click", closeOnAnyClick );
      if(open()) {
        open(false);
        m.redraw();
      }
  }
  function whenNotOpenOpenItAndHookForAnyNextClick() {
    if(!open()) {
      open(true);
      noticeAnyNextClick();
    }
  }
  return {
    open: open,
    selection: selection,
    doOpen: whenNotOpenOpenItAndHookForAnyNextClick,
    select: value => { return event => selection( value ); }
  };
};

module.exports = mu;
