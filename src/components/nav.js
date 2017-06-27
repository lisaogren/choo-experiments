import html from 'choo/html'

export default (state, emit) => {
  return html`
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
  `
}
