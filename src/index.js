import 'font-awesome/scss/font-awesome.scss'
import 'index.scss'

import choo from 'choo'

import main from 'pages/main'
import todos from 'pages/todos'
import editor from 'pages/editor'

import appService from 'services/app'

import todosStore from 'components/todos/store'

const app = choo()

app.route('/', main)
app.route('/todos', todos)
app.route('/editor', editor)

app.use(appService)
app.use(todosStore)

app.mount('body')
