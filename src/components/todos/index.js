import last from 'lodash/last'

import html from 'choo/html'

import columnize from 'utils/columnizer'
import card from './card'

import './index.scss'

export default (state, emit) => {
  const todos = state.todos.list

  const groups = columnize({ list: todos })
  const group = last(groups)

  const addTodo = { type: 'add' }

  if (group.length < 4) group.push(addTodo)
  else groups.push([addTodo])

  return html`
    <section class="section todos-component">
      <div class="container">
        <h1 class="title">Todos</h1>
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
