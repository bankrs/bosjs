import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperRegistrationRequest from '../../lib/requests/DeveloperRegistrationRequest'
import User from '../models/User'

@suite
class DeveloperRegistrationRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(new DeveloperRegistrationRequest('', '').endpoint, '/v1/developers')
  }

  @test
  'request method is POST' () {
    assert.strictEqual(new DeveloperRegistrationRequest('', '').method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(new DeveloperRegistrationRequest('', '').successCodes, [201])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(new DeveloperRegistrationRequest('', '').errorCodes, [400, 409])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new DeveloperRegistrationRequest('', '')

    assert.deepEqual(request.expectedCodes, [201, 400, 409])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }

  @test
  'expected payload' () {
    assert.deepEqual(
      new DeveloperRegistrationRequest('john@doe.net', 'password').payload,
      { email: 'john@doe.net', password: 'password' }
    )
  }
}
