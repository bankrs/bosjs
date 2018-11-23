import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import UserPasswordResetRequest from '../../lib/requests/UserPasswordResetRequest'
import User from '../models/User'

@suite
class UserPasswordResetRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/users/reset_password')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400, 401])
  }

  @test
  'expected payload' () {
    const exp = { username: 'user@mail.com', password: 'new1234567' }
    assert.deepEqual(this.request.payload, exp)
  }

  private get request () {
    return new UserPasswordResetRequest(new User(), 'user@mail.com', 'new1234567')
  }
}
