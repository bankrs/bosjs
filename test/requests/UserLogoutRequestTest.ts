import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import UserLogoutRequest from '../../lib/requests/UserLogoutRequest'
import User from '../models/User'

@suite
class UserLogoutRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/users/logout')
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
    assert.isEmpty(this.request.payload)
  }

  private get request () {
    return new UserLogoutRequest(new User())
  }
}
