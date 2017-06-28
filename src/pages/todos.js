import html from 'choo/html'

import header from 'components/header'
import todos from 'components/todos'
import footer from 'components/footer'

export default (state, emit) => {
  return html`
    <body>
      ${header(state, emit)}
      <main>
        ${todos(state, emit)}
      </main>
      ${footer()}
    </body>
  `
}
