import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperLogoutRequest from '../../lib/requests/DeveloperLogoutRequest'
import User from '../models/User'

@suite
class DeveloperLogoutRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(new DeveloperLogoutRequest(new User()).endpoint, '/v1/developers/logout')
  }

  @test
  'request method' () {
    assert.strictEqual(new DeveloperLogoutRequest(new User()).method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(new DeveloperLogoutRequest(new User()).successCodes, [204, 401, 403])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(new DeveloperLogoutRequest(new User()).errorCodes, [])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new DeveloperLogoutRequest(new User())

    assert.deepEqual(request.expectedCodes, [204, 401, 403])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }
}
