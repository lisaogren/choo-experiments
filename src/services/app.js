import find from 'lodash/find'
import forEach from 'lodash/forEach'
import urlComposer from 'url-composer'

const routes = [
  {
    path: '/',
    title: 'Welcome'
  },
  {
    path: '/todos',
    title: 'Todos'
  },
  {
    path: '/editor',
    title: 'Editor'
  }
]

export default (state, emitter) => {
  state.routes = {
    list: routes
  }

  forEach(routes, route => {
    route.active = false
    route.regex = urlComposer.regex(route.path)

    if (isCurrent(route)) route.active = true
  })

  emitter.on('pushState', () => {
    forEach(routes, item => { item.active = false })

    const route = find(routes, route => isCurrent(route))

    if (route) {
      route.active = true

      emitter.emit('render')
    }
  })
}

function isCurrent (route) {
  return route.regex.test(window.location.pathname)
}
