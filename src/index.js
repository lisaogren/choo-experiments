import 'font-awesome/scss/font-awesome.scss'
import 'index.scss'

import choo from 'choo'
import main from 'pages/main'

import todosStore from 'components/todos/store'

const app = choo()

app.route('/', main)

app.use(todosStore)

app.mount('body')
