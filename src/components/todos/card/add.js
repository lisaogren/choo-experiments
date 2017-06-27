import html from 'choo/html'

export default (emit) => {
  return html`
    <div class="card todos-add">
      <button class="button is-white" onclick=${add}>
        <i class="fa fa-plus"></i>
      </button>
    </div>
  `

  function add () {
    emit('todos:add')
  }
}
