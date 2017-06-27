import partial from 'lodash/partial'
import html from 'choo/html'

import add from './add'
import show from './show'
import edit from './edit'

const cards = {
  add,
  show,
  edit
}

export default (options) => {
  const { data, type, emit } = options

  const card = partial(cards[type], emit)

  return html`
    <div class="column is-3">
      ${card(data)}
    </div>
  `
}
