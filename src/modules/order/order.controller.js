import Order from './order.model'

export const createOrder = async (req, res, next) => {
  const { title, description, price, image } = req.body
  const newOrder = new Order({ title, description, price, image })

  try {
    return res.status(201).json({ order: await newOrder.save() })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export const getAllOrders = async (req, res, next) => {
  try {
    return res.status(200).json({ orders: await Order.find({}) })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}
