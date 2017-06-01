import User from './user.model'

export const createUser = async (req, res, next) => {
  const { title, description, price, image } = req.body
  const newUser = new User({ title, description, price, image })

  try {
    return res
      .status(201)
      .json({ user: await newUser.save() })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export const getAllUsers = async (req, res, next) => {
  try {
    return res
      .status(200)
      .json({ users: await User.find({}) })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export const me = (req, res) => res.status(200)
  .json({
    _id: req.user._id,
    name: req.user.name,
    avatar: req.user.avatar,
    provider: req.user.provider,
    email: req.user.email,
    phone: req.user.phone,
  })
