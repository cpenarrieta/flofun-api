const devConfig = {}

const testConfig = {}

const prodConfig = {}

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig
    case 'test':
      return testConfig
    case 'production':
      return prodConfig
    default:
      return devConfig
  }
}

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8080,
  DB_URL: process.env.DB_URL,
  MONGOOSE_DEBUG: true,
  RAVEN_ID: process.env.RAVEN_ID,
  JWT_SECRET: process.env.JWT_SECRET,
  twilio: {
    accountSid: process.env.TWILIO_SID,
    authToken: process.env.TWILIO_TOKEN,
    twilioPhone: process.env.TWILIO_PHONE,
  },
}

export default {
  ...config,
  ...envConfig(process.env.NODE_ENV),
}
