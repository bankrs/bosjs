import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import RepeatedTransactionListRequest from '../../lib/requests/RepeatedTransactionListRequest'
import User from '../models/User'

const filters = { accessId: 111, accountId: 222 }

@suite
class RepeatedTransactionListRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/repeated_transactions?access_id=111&account_id=222')
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
  'expected payload' () {
    assert.isEmpty(this.request.payload)
  }

  @test
  'expected optional filters' () {
    const r = new RepeatedTransactionListRequest(new User(), { accountId: 222 })
    assert.equal(r.endpoint, '/v1/repeated_transactions?account_id=222')
  }

  @test
  'expected no filters' () {
    const r = new RepeatedTransactionListRequest(new User(), {})
    assert.equal(r.endpoint, '/v1/repeated_transactions')
  }

  private get request () {
    return new RepeatedTransactionListRequest(new User(), filters)
  }
}
