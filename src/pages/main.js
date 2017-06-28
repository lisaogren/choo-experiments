import html from 'choo/html'

import header from 'components/header'
import footer from 'components/footer'

export default (state, emit) => {
  return html`
    <body>
      ${header(state, emit)}
      <main>
        <section class="section welcome">
          <div class="container">
            <h1 class="title">Ohai!</h1>
            <hr>
            <div class="content">
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
          </div>
        </section>
      </main>
      ${footer()}
    </body>
  `
}
