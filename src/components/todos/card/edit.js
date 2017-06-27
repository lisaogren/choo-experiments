import defer from 'lodash/defer'

import html from 'choo/html'

import serialize from 'utils/form-serialize'

export default (emit, todo) => {
  defer(() => {
    const el = document.querySelector(`#todo-${todo.id}`)

    if (el) el.focus()
  })

  return html`
    <form onsubmit=${save}>
      <div class="card todos-edit">
        <div class="card-content">
          <textarea class="textarea" id="todo-${todo.id}" name="content" placeholder="Enter todo text" required="required">${todo.content}</textarea>
        </div>
        <div class="card-footer">
          <button type="submit" class="card-footer-item button is-primary">
            Save
          </button>
          <button class="card-footer-item button is-white" onclick=${discard}>
            Discard
          </button>
        </div>
      </div>
    </form>
  `

  function save (e) {
    e.preventDefault()

    const data = serialize(e.currentTarget)

    emit('todos:save', { todo, data })
  }

  function discard (e) {
    e.preventDefault()

    emit('todos:edit:discard', todo)
  }
}
