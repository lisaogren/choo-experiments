import forEach from 'lodash/forEach'

import html from 'choo/html'

import card from './card'

import './index.scss'

export default (state, emit) => {
  const todos = state.todos.list

  const groups = []
  let group = []

  groups.push(group)

  forEach(todos, (todo, i) => {
    if (i % 4 === 0 && i !== 0) {
      group = []
      groups.push(group)
    }

    group.push(todo)
  })

  const addTodo = { type: 'add' }

  if (group.length < 4) group.push(addTodo)
  else groups.push([addTodo])

  return html`
    <section class="section todos-component">
      <div class="container content">
        <h1>Todos</h1>
        <hr>
        ${groups.map(group => row(group))}
      </div>
    </section>
  `

  function row (group) {
    return html`
      <div class="columns">
        ${group.map(data => {
          if (data.type === 'add') return card({ type: 'add', emit })

          return card({ type: data.editing ? 'edit' : 'show', data, emit })
        })}
      </div>
    `
  }
}
