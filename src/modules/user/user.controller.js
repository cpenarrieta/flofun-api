import Joi from 'joi'

import User from './user.model'

export const validation = {
  createUser: {
    body: {
      providerId: Joi.string().required(),
      provider: Joi.string().required(),
      name: Joi.string(),
      email: Joi.string(),
      phone: Joi.string(),
      avatar: Joi.string(),
      code: Joi.string(),
      codeValid: Joi.boolean(),
    },
  },
}

export const createUser = async (req, res, next) => {
  const { providerId, provider, name, email, phone, avatar, code, codeValid } = req.body
  const newUser = new User({ providerId, provider, name, email, phone, avatar, code, codeValid })

  try {
    return res.status(201).json({ user: await newUser.save() })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export const getAllUsers = async (req, res, next) => {
  try {
    return res.status(200).json({ users: await User.find({}) })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export const me = (req, res) =>
  res.status(200).json({
    _id: req.user._id,
    name: req.user.name,
    avatar: req.user.avatar,
    provider: req.user.provider,
    email: req.user.email,
    phone: req.user.phone,
  })
