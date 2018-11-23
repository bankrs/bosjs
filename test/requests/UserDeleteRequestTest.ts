import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import UserDeleteRequest from '../../lib/requests/UserDeleteRequest'
import User from '../models/User'

@suite
class UserDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/users')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.DELETE)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 202])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400, 401])
  }

  @test
  'expected payload' () {
    const exp = { password: '1234567' }
    assert.deepEqual(this.request.payload, exp)
  }

  private get request () {
    return new UserDeleteRequest(new User(), '1234567')
  }
}
