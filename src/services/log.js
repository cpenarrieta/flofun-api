import Raven from 'raven'
import PrettyError from 'pretty-error'

import config from '../config/config'
import APIError, { RequiredError } from './error'

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

export default function logErrorService(err, req, res, next) {
  if (!err) {
    return new APIError(
      'Error with the server!',
      500,
      true,
    )
  }

  if (isProd) {
    const raven = new Raven.Client(config.RAVEN_ID)
    raven.captureException(err)
  }

  if (isDev) {
    const pe = new PrettyError()
    pe.skipNodeFiles()
    pe.skipPackage('express')

    // eslint-disable-next-line no-console
    console.log(pe.render(err))
  }

  const error = {
    message: err.message || 'Internal Server Error.',
  }

  if (err.errors) {
    error.errors = {}
    const { errors } = err
    if (Array.isArray(errors)) {
      error.errors = RequiredError.makePretty(errors)
    } else {
      Object.keys(errors).forEach(key => {
        error.errors[key] = errors[key].message
      })
    }
  }

  res.status(err.status || 500).json(error)

  return next()
}
