import html from 'choo/html'

import header from 'components/header'

export default (state, emit) => {
  return html`
    <body>
      ${header(state, emit)}
      <section class="section welcome">
        <div class="container content">
          <h1>Ohai!</h1>
          <hr>
          <p>
            Here you can find some of my experiments using the awesome Choo Choo framework and some other
            very interesting open-source libraries.<br>
            I do this for fun and at the same time maybe come up with some reusable Choo components.
          </p>
          <p>
            <em>
              This site is not affiliated to the <a href="https://choo.io">Choo framework</a>
              or his creator <a href="https://github.com/yoshuawuyts">Yoshua Wuyts</a>.
            </em>
          </p>
        </div>
      </section>
    </body>
  `
}
