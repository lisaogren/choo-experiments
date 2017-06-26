const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
    <body>
      <section class="hero is-primary is-bold">
        <div class="hero-head">
          <header class="nav">
            <div class="container">
              <div class="nav-left">
                <a href="/" class="nav-item">
                  <img src="/images/choochoo.png" alt="Cute little locomotive" title="">
                  <span>Choo App</span>
                </a>
              </div>
            </div>
          </header>
        </div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">Welcome to Choo Choo</h1>
            <h2 class="subtitle">The sturdy frontend framework</h2>
          </div>
        </div>
      </section>
    </body>
  `
}
