import Store from './store.model'

export const createStore = async (req, res, next) => {
  const { title, address, storeCoordinates, shippingRegion, flowers } = req.body
  const newStore = new Store({ title, address, storeCoordinates, shippingRegion, flowers })

  try {
    return res
      .status(201)
      .json({ store: await newStore.save() })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export const getAllStores = async (req, res, next) => {
  try {
    return res
      .status(200)
      .json({ stores: await Store.find({}) })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}
