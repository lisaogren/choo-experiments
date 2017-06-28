import html from 'choo/html'

import header from 'components/header'

export default (state, emit) => {
  return html`
    <body>
      ${header(state, emit)}
      <section class="section">
        <div class="container content">
          <h1>Choo Choo experiments</h1>
          <hr>
          <p>
            A little collection of my Choo Choo experiments, enjoy! <span class="emojione emojione-1f609" title=":wink:">😉</span>
          </p>
        </div>
      </section>
    </body>
  `
}
