import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

import User from '../../modules/user/model'
import config from '../../config/config'

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader('Authorization'),
  secretOrKey: config.JWT_SECRET,
}

const jwtStrategy = new Strategy(jwtOpts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id)

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  } catch (e) {
    return done(e, false)
  }
})

passport.use(jwtStrategy)
