import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import StatsUsersRequest from '../../lib/requests/StatsUsersRequest'
import User from '../models/User'

@suite
class StatsUsersRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/stats/users?from_date=2017-05-30&to_date=2017-05-31')
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
    return new StatsUsersRequest(new User(), new Date('2017-05-30'), new Date('2017-05-31'))
  }
}
