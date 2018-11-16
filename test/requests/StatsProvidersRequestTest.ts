import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import StatsProvidersRequest from '../../lib/requests/StatsProvidersRequest'
import User from '../models/User'

@suite
class StatsProvidersRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/stats/providers?from_date=2017-05-30&to_date=2017-05-31')
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
    assert.deepEqual(this.request.expectedCodes, [200, 400])
    assert.deepEqual(this.request.expectedCodes, this.request.successCodes.concat(this.request.errorCodes))
  }

  private get request () {
    return new StatsProvidersRequest(new User(), new Date('2017-05-30'), new Date('2017-05-31'))
  }
}
