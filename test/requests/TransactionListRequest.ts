import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import TransactionListRequest from '../../lib/requests/TransactionListRequest'
import User from '../models/User'

const currDate = new Date()
const filters = {
  accessId: 11,
  accountId: 22,
  since: currDate,
  limit: 50,
  offset: 10
}

@suite
class TransactionListRequestTest {
  @test
  'expected endpoint' () {
    const exp = `/v1/transactions?access_id=11&account_id=22&since=${currDate.toISOString()}&limit=50&offset=10`
    assert.strictEqual(this.request.endpoint, exp)
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
    const r = new TransactionListRequest(new User(), { accountId: 22, limit: 100 })
    assert.equal(r.endpoint, '/v1/transactions?account_id=22&limit=100')
  }

  @test
  'expected no filters' () {
    const r = new TransactionListRequest(new User(), {})
    assert.equal(r.endpoint, '/v1/transactions')
  }

  private get request () {
    return new TransactionListRequest(new User(), filters)
  }
}
