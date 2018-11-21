import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ProviderSearchRequest from '../../lib/requests/ProviderSearchRequest'
import User from '../models/User'

@suite
class ProviderSearchRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/providers?q=bank%201')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.GET)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = this.request

    assert.deepEqual(request.expectedCodes, [200, 400])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, {})
  }

  private get request () {
    return new ProviderSearchRequest(new User(), ' bank 1  ')
  }
}
