import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import AccessCreateRequest from '../../lib/requests/AccessCreateRequest'
import User from '../models/User'

const currDate = new Date()
const data = {
  providerId: 'DE-BIN-10010010',
  answers: [{ id: 'login', value: '1234', store: true, validUntil: currDate }]
}

@suite
class AccessCreateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/accesses')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 202])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload with all data' () {
    const exp = {
      provider_id: 'DE-BIN-10010010',
      answers: [{ id: 'login', value: '1234', store: true, valid_until: currDate }]
    }
    assert.deepEqual(this.request.payload, exp)
  }

  @test
  'expected payload with optional data' () {
    const data = {
      providerId: 'DE-BIN-10010010',
      answers: [{ id: 'login', value: '1234' }]
    }

    const exp = {
      provider_id: 'DE-BIN-10010010',
      answers: [{ id: 'login', value: '1234' }]
    }

    const r = new AccessCreateRequest(new User(), data)
    assert.deepEqual(r.payload, exp)
  }

  private get request () {
    return new AccessCreateRequest(new User(), data)
  }
}
