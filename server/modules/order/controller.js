import Order from './model'

export const createOrder = async (req, res) => {
  const { title, description, price, image } = req.body
  const newOrder = new Order({ title, description, price, image })

  try {
    return res.status(201)
              .json({ order: await newOrder.save() })
  } catch (e) {
    return res.status(e.status)
              .json({ error: true, message: 'error creating order' })
  }
}

export const getAllOrders = async (req, res) => {
  try {
    return res.status(200)
              .json({ orders: await Order.find({}) })
  } catch (e) {
    return res.status(e.status)
              .json({ error: true, message: 'error getAllOrder' })
  }
}
