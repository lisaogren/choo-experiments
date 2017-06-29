import html from 'choo/html'

import forEach from 'lodash/forEach'

import dominus from 'dominus'
import megamark from 'megamark'
import hljs from 'highlight.js'

import 'highlight.js/styles/solarized_dark.css'

export default (state, emit) => {
  const result = html`<div class="content result"></div>`

  result.innerHTML = megamark(state.editor.content)

  forEach(dominus('pre', result), el => hljs.highlightBlock(el))

  const textarea = html`
    <textarea id="editor-textarea" class="textarea" placeholder="Enter some markdown! :)" onkeyup=${change}>${state.editor.content}</textarea>
  `

  textarea.isSameNode = (target) => (target && target.id === 'editor-textarea')

  return html`
    <div class="editor-component">
      <section class="section">
        <div class="container">
          <h1 class="title">Markdown Editor</h1>
          <hr>
          <form>
            ${textarea}
          </form>
        </div>
      </section>
      <section class="section">
        <div class="container">
          ${result}
        </div>
      </section>
    </div>
  `

  function change (e) {
    const value = e.currentTarget.value

    emit('editor:change', value)
  }
}
