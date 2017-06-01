import faker from 'faker'

class UserSeed {
  single(attrs) {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.userName(),
      phone: faker.internet.email(),
      providerId: faker.random.number.toString(),
      provider: 'facebook',
      ...attrs,
    }
  }

  list(attrs, count = 10) {
    const users = []

    Array.from({ length: count }).map(() => {
      const fakeUser = {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        providerId: faker.random.number().toString(),
        provider: 'facebook',
      }
      return users.push(fakeUser)
    })

    return users
  }
}

export default new UserSeed()
