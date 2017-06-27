import html from 'choo/html'

import nav from './nav'

export default (state, emit) => {
  return html`
    <section class="hero is-primary is-bold">
      <div class="hero-head">
        ${nav(state, emit)}
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Welcome to Choo Choo</h1>
          <h2 class="subtitle">The sturdy frontend framework</h2>
        </div>
      </div>
    </section>
  `
}
