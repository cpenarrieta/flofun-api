import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  providerId: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }],
}, { timestamps: true })

UserSchema.statics.findOrCreate = async (args) => {
  try {
    const user = await this.findOne({
      providerId: args.providerId,
    })

    if (!user) {
      return await this.create(args)
    }
    // TODO update new fields (avatar, name, etc)

    return user
  } catch (err) {
    return err
  }
}

export default mongoose.model('User', UserSchema)
