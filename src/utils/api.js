const forEach = require('lodash/forEach')
const partial = require('lodash/partial')
const http = require('xhr')
const urlComposer = require('url-composer')
const Promise = require('bluebird')

const config = {
  host: 'http://localhost:1337',
  services: {
    getAnswers: {
      path: '/answers',
      method: 'get'
    },
    getQuestions: {
      path: '/questions',
      method: 'get'
    },
    getTeams: {
      path: '/teams',
      method: 'get'
    },
    getUsers: {
      path: '/users',
      method: 'get'
    }
  }
}

function request (serviceName, options = {}) {
  const service = config.services[serviceName]
  const {params, query, data} = options

  if (!service) {
    throw new Error(`[api] Inexisting api service '${serviceName}'`)
  }

  return new Promise((resolve, reject) => {
    const url = urlComposer.build({
      host: config.host,
      path: service.path,
      params,
      query
    })

    const options = {
      json: true,
      body: data,
      headers: {
        'x-requested-with': 'XMLHttpRequest'
      }
    }

    http[service.method || 'get'](url, options, (err, res, body) => {
      if (err) return reject(err)

      resolve(body)
    })
  })
}

const api = {
  request
}

forEach(config.services, (service, name) => {
  api[name] = partial(request, name)
})

module.exports = api
