import html from 'choo/html'

import header from './header'
import nav from './nav'

export default (state, emit) => {
  return html`
    <section class="hero is-primary is-bold">
      <div class="hero-head">
        ${header()}
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Welcome to Choo Experiments</h1>
          <h2 class="subtitle">
            A little collection of my Choo Choo experiments, enjoy! <span class="emojione emojione-1f609" title=":wink:">😉</span>
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        ${nav(state, emit)}
      </div>
    </section>
  `
}
