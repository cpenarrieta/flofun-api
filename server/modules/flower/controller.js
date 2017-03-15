import Flower from './model'

export const createFlower = async (req, res) => {
  const { title, description, price, image } = req.body
  const newFlower = new Flower({ title, description, price, image })

  try {
    return res.status(201)
              .json({ flower: await newFlower.save() })
  } catch (e) {
    return res.status(e.status)
              .json({ error: true, message: 'error creating flower' })
  }
}

export const getAllFlower = async (req, res) => {
  try {
    return res.status(200)
              .json({ flowers: await Flower.find({}) })
  } catch (e) {
    return res.status(e.status)
              .json({ error: true, message: 'error getAllFlower' })
  }
}
