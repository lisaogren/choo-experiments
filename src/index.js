import 'font-awesome/scss/font-awesome.scss'
import 'index.scss'

import choo from 'choo'

import appService from 'services/app'

import todosStore from 'components/todos/store'
import editorStore from 'components/editor/store'

const app = choo()

appService.init(app)

app.use(todosStore)
app.use(editorStore)

app.mount('body')
