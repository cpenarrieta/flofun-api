import twilio from 'twilio'
import config from './config'

export default new twilio(config.twilio.accountSid, config.twilio.authToken)
