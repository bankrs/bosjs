import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ScheduledTransactionListRequest from '../../lib/requests/ScheduledTransactionListRequest'
import User from '../models/User'

const filters = { accessId: 111, accountId: 222 }

@suite
class ScheduledTransactionListRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/scheduled_transactions?access_id=111&account_id=222')
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
  'expected payload' () {
    assert.isEmpty(this.request.payload)
  }

  @test
  'expected optional filters' () {
    const r = new ScheduledTransactionListRequest(new User(), { accountId: 222 })
    assert.equal(r.endpoint, '/v1/scheduled_transactions?account_id=222')
  }

  @test
  'expected no filters' () {
    const r = new ScheduledTransactionListRequest(new User(), {})
    assert.equal(r.endpoint, '/v1/scheduled_transactions')
  }

  private get request () {
    return new ScheduledTransactionListRequest(new User(), filters)
  }
}
