require('./index.scss')

const choo = require('choo')

const app = choo()

app.route('/', require('./pages/main'))

// app.use(require('./services/users'))

app.mount('body')
