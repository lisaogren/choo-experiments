import html from 'choo/html'

import header from 'components/header'
import editor from 'components/editor'

export default (state, emit) => {
  return html`
    <body>
      ${header(state, emit)}
      ${editor(state, emit)}
    </body>
  `
}
