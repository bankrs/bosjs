import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import StatsMAURequest from '../../lib/requests/StatsMAURequest'
import User from '../models/User'

@suite
class StatsMAURequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/stats/mau?from_date=2017-01-01&to_date=2017-12-01')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.GET)
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
    return new StatsMAURequest(new User(), new Date('2017-01-01'), new Date('2017-12-01'))
  }
}
