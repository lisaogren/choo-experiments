import get from 'lodash/get'
import last from 'lodash/last'
import remove from 'lodash/remove'
import extend from 'lodash/extend'

const defaultState = {
  list: []
}

export default (state, emitter) => {
  if (!state.todos) state.todos = extend({}, defaultState)

  emitter.on('todos:add', () => {
    state.todos.list.push({
      id: get(last(state.todos.list), 'id', 0) + 1,
      content: '',
      editing: true
    })

    emitter.emit('render')
  })

  emitter.on('todos:save', ({ todo, data }) => {
    todo.content = data.content
    todo.editing = false

    emitter.emit('render')
  })

  emitter.on('todos:edit', todo => {
    todo.editing = true

    emitter.emit('render')
  })

  emitter.on('todos:edit:discard', todo => {
    todo.editing = false

    emitter.emit('render')
  })

  emitter.on('todos:delete', todo => {
    remove(state.todos.list, { id: todo.id })

    emitter.emit('render')
  })
}
