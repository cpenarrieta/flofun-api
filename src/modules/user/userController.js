import User from './model'

export const createUser = async (req, res) => {
  const { title, description, price, image } = req.body
  const newUser = new User({ title, description, price, image })

  try {
    return res
      .status(201)
      .json({ user: await newUser.save() })
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'error creating user' })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ users: await User.find({}) })
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'error getAllUser' })
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
