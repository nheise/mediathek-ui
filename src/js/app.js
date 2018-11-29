const m = require('mithril')

function mainLayout() {
  return function(){ return m('div.container', [ m( breadCrum ), m( directory ) ] ) }
}

function mainLayoutView() {
  return { view: mainLayout() }
}

const breadCrum = {
  view: vnode => m('nav', m('ol', [ m('li', m('a[href=#]', '..')), m('li', 'dir1') ] ) )
}

const files = [
  {name: 'file1'},
  {name: 'file2'},
  {name: 'file3'},
  {name: 'file4'},
]

const directory = {
  view: vnode => m('div.directory', files.map( f => m( file, f ) ) )
}

const file = {
  view: vnode => m('a[href=#]', vnode.attrs.name )
}

m.request({
  method: 'GET',
  url: 'http://localhost:3000/mediathek-api/directories//',
})
.then(function(result) {
  console.log(result)
})

//m.route.prefix('/mediathek/#!')
m.route( document.body, '/', {
  "/": mainLayoutView( ),
});