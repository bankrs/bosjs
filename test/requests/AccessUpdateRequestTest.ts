import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import AccessUpdateRequest from '../../lib/requests/AccessUpdateRequest'
import User from '../models/User'

const data = [
  { id: 'login1', value: '111', store: true },
  { id: 'login2', value: '222', store: false }
]

@suite
class AccessUpdateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/accesses/123')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
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
  'expected payload with all data' () {
    const exp = {
      challenge_answers: [
        { id: 'login1', value: '111', store: true },
        { id: 'login2', value: '222', store: false }
      ]
    }
    assert.deepEqual(this.request.payload, exp)
  }

  @test
  'expected payload with optional data' () {
    const data = [
      { id: 'login1', value: '111' }
    ]

    const exp = {
      challenge_answers: [
        { id: 'login1', value: '111' }
      ]
    }

    const r = new AccessUpdateRequest(new User(), 123, data)
    assert.deepEqual(r.payload, exp)
  }

  private get request () {
    return new AccessUpdateRequest(new User(), 123, data)
  }
}
