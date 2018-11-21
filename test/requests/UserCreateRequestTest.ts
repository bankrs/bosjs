import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import UserCreateRequest from '../../lib/requests/UserCreateRequest'
import User from '../models/User'

@suite
class UserCreateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/users')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 201])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    const exp = { username: 'user@mail.com', password: '1234567' }
    assert.deepEqual(this.request.payload, exp)
  }

  private get request () {
    return new UserCreateRequest(new User(), 'user@mail.com', '1234567')
  }
}
