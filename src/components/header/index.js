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
          <h1 class="title">Welcome to Choo Choo</h1>
          <h2 class="subtitle">The sturdy frontend framework</h2>
        </div>
      </div>
      <div class="hero-foot">
        ${nav(state, emit)}
      </div>
    </section>
  `
}
