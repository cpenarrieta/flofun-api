import Store from './model'

export const createStore = async (req, res) => {
  const { title, address, storeCoordinates, shippingRegion, flowers } = req.body
  const newStore = new Store({ title, address, storeCoordinates, shippingRegion, flowers })

  try {
    return res
      .status(201)
      .json({ store: await newStore.save() })
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'error creating store' })
  }
}

export const getAllStores = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ stores: await Store.find({}) })
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'error getAllStore' })
  }
}
