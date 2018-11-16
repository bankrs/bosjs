import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import StatsProviderPingRequest from '../../lib/requests/StatsProviderPingRequest'
import User from '../models/User'

@suite
class StatsProviderPingRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/stats/provider_ping?id=DE-BIN-10010010')
  }

  @test
  'request method is GET' () {
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
    return new StatsProviderPingRequest(new User(), 'DE-BIN-10010010')
  }
}
