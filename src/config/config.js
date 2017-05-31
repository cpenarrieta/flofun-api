import secrets from './secrets'

const devConfig = {

}

const testConfig = {

}

const prodConfig = {

}

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
  PORT: process.env.PORT || 8080,
  DB_URL: process.env.DB_URL || 'mongodb://localhost/flofun',
  MONGOOSE_DEBUG: true,
  JWT_SECRET: process.env.JWT_SECRET || secrets.JWT_SECRET,
  twilio: {
    accountSid: process.env.TWILIO_SID || secrets.accountSid,
    authToken: process.env.TWILIO_TOKEN || secrets.authToken,
    twilioPhone: process.env.TWILIO_PHONE || secrets.twilioPhone,
  },
}

export default {
  ...config,
  ...envConfig(process.env.NODE_ENV),
}
