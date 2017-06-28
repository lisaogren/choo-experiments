export default (state, emitter) => {
  state.editor = {
    content: ''
  }

  emitter.on('editor:change', content => {
    state.editor.content = content

    emitter.emit('render')
  })
}
