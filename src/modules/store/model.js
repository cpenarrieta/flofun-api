import mongoose, { Schema } from 'mongoose'

const StoreSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  storeCoordinates: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  shippingRegion: [{
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  }],
  flowers: [{
    type: Schema.Types.ObjectId,
    ref: 'Flower',
  }],
}, { timestamps: true })

export default mongoose.model('Store', StoreSchema)
