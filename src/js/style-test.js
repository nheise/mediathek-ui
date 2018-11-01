const m = require("mithril")

module.exports = {
  oninit: vnode => {
  },
  view: vnode => {
    return m("div.styletest", 
            m('div.root', '1'),
            m('div.half'),
            m('div', '2'),
            m('div.half'),
            m('div', '3'),
            m('div', '4'),
            m('div.half'),
            m('div', '5'),
            m('div.half'),
            m('div', '6'),
            m('div.half'),
            m('div', '7'),
            m('div.root', '1'),
            m('div.half'),
            m('div', '2'),
            m('div.half'),
            m('div', '3'),
            m('div', '4'),
            m('div.half'),
            m('div', '5'),
            m('div.half'),
            m('div', '6'),
            m('div.half'),
            m('div', '7')
            )
  }
}

/*
Copyright 2018 [heisemedia] All Rights Reserved.
*/
