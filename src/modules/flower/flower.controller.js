import Joi from 'joi'

import Flower from './flower.model'

export const validation = {
  createFlower: {
    body: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.string().required(),
      image: Joi.string().required(),
    },
  },
  getAllFlower: {
    body: {
      address: Joi.string(),
    },
  },
}

export const createFlower = async (req, res, next) => {
  const { title, description, price, image } = req.body
  const newFlower = new Flower({ title, description, price, image })

  try {
    return res.status(201).json({ flower: await newFlower.save() })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export const getAllFlower = async (req, res, next) => {
  try {
    return res.status(200).json({ flowers: await Flower.find({}) })
  } catch (err) {
    err.status = 400
    return next(err)
  }
}
