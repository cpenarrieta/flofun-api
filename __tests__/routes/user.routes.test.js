import { expect } from 'chai'

import User from '../../src/modules/user/user.model'
import server from '../../__mocks__/utils/server.mock'
import UserSeed from '../../__mocks__/seeds/user.seeds'

const ENDPOINT = '/api/user'

describe(`POST ${ENDPOINT}`, () => {
  before(async () => {
    await User.remove()
    await User.insertMany(UserSeed.list())
  })

  it('should return an array of users', done => {
    server.get(ENDPOINT).end((err, res) => {
      const { status, body } = res
      expect(status).to.equal(200)
      expect(body).to.haveOwnProperty('users')
      expect(body.users.length).to.equal(10)
      done()
    })
  })
})
