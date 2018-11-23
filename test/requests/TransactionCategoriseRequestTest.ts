import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import TransactionCategoriseRequest from '../../lib/requests/TransactionCategoriseRequest'
import User from '../models/User'

const data = [
  { id: 1, categoryId: 11 },
  { id: 2, categoryId: 22 }
]

@suite
class TransactionCategoriseRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/transactions/categorise')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.PUT)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    const exp = [
      { id: 1, category_id: 11 },
      { id: 2, category_id: 22 }
    ]
    assert.deepEqual(this.request.payload, exp)
  }

  private get request () {
    return new TransactionCategoriseRequest(new User(), data)
  }
}
