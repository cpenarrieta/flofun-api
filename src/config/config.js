import secrets from './secrets'

const config = {
  DB_URL: process.env.DB_URL || 'mongodb://localhost/flofun',
  JWT_SECRET: process.env.JWT_SECRET || secrets.JWT_SECRET,
  twilio: {
    accountSid: process.env.TWILIO_SID || secrets.accountSid,
    authToken: process.env.TWILIO_TOKEN || secrets.authToken,
    twilioPhone: process.env.TWILIO_PHONE || secrets.twilioPhone,
  },
}

export default config
