import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperCreateRequest from '../../lib/requests/DeveloperCreateRequest'
import User from '../models/User'

@suite
class DeveloperCreateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(new DeveloperCreateRequest('', '').endpoint, '/v1/developers')
  }

  @test
  'request method' () {
    assert.strictEqual(new DeveloperCreateRequest('', '').method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(new DeveloperCreateRequest('', '').successCodes, [201])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(new DeveloperCreateRequest('', '').errorCodes, [400, 409])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new DeveloperCreateRequest('', '')

    assert.deepEqual(request.expectedCodes, [201, 400, 409])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }

  @test
  'expected payload' () {
    assert.deepEqual(
      new DeveloperCreateRequest('john@doe.net', 'password').payload,
      { email: 'john@doe.net', password: 'password' }
    )
  }
}
