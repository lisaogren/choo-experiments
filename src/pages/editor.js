import html from 'choo/html'

import header from 'components/header'
import editor from 'components/editor'
import footer from 'components/footer'

export default (state, emit) => {
  return html`
    <body>
      ${header(state, emit)}
      <main>
        ${editor(state, emit)}
      </main>
      ${footer()}
    </body>
  `
}
