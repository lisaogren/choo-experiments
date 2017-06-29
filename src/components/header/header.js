import html from 'choo/html'

export default () => {
  return html`
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item">
            <img src="/images/choochoo.png" alt="Cute little locomotive" title="">
            <span>Choo Experiments</span>
          </a>
        </div>
        <div class="nav-right">
          <span class="nav-item">
            <a href="https://github.com/RasCarlito/choo-experiments">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>View on Github</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  `
}
