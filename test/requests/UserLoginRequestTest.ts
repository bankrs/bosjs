import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import UserLoginRequest from '../../lib/requests/UserLoginRequest'
import User from '../models/User'

@suite
class UserLoginRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/users/login')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400, 401])
  }

  @test
  'expected payload' () {
    const exp = { username: 'user@mail.com', password: '1234567' }
    assert.deepEqual(this.request.payload, exp)
  }

  private get request () {
    return new UserLoginRequest(new User(), 'user@mail.com', '1234567')
  }
}
