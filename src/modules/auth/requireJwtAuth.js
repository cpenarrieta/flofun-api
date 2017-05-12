import passport from 'passport'

import './passportStrategy'

export const requireJwtAuth = passport.authenticate('jwt', { session: false })
