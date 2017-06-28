import html from 'choo/html'

export default (state, emit) => {
  const routes = state.routes.list

  return html`
    <nav class="tabs is-boxed">
      <div class="container">
        <ul>
          ${routes.map(route => link(route))}
        </ul>
      </div>
    </nav>
  `

  function link (route) {
    const isActive = route.active ? 'is-active' : ''

    return html`
      <li class="${isActive}">
        <a href="${route.path}" onclick=${setActive}>${route.title}</a>
      </li>
    `

    function setActive (e) {
      emit('app:route', route)
    }
  }
}
