import html from 'choo/html'

export default (emit, todo) => {
  return html`
    <div class="card todos-show">
      <div class="card-content">
        <p class="title">
          ${todo.content}
        </p>
      </div>
      <div class="card-footer">
        <button class="card-footer-item button is-white" onclick=${edit}>
          Edit
        </button>
        <button class="card-footer-item button is-white" onclick=${remove}>
          Delete
        </button>
      </div>
    </div>
  `

  function edit () {
    emit('todos:edit', todo)
  }

  function remove () {
    emit('todos:delete', todo)
  }
}
