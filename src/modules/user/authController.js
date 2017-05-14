import User from './model'
import { createToken } from '../auth/createToken'
import { facebookAuth } from './utils/facebookAuth'
import { googleAuth } from './utils/googleAuth'

export const authFacebook = async (req, res) => auth(req.body.token, res, facebookAuth)

export const authGoogle = async (req, res) => auth(req.body.token, res, googleAuth)

export const authPhone = async (req, res) => {

}

const auth = async (token, res, callback) => {
  try {
    const userInfo = await callback(token)
    let user = await User.findOne({
      providerId: userInfo.providerId,
    })
    if (!user) {
      user = await User.create(userInfo)
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
      },
      token: createToken(user),
    })
  } catch (err) {
    return res.status(400).json({ error: true, errorMessage: err.message })
  }
}