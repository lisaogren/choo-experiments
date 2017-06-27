import html from 'choo/html'

import header from 'components/header'
import todos from 'components/todos'

export default (state, emit) => {
  return html`
    <body>
      ${header(state, emit)}
      ${todos(state, emit)}
    </body>
  `
}
