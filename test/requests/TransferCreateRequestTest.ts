import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import TransferCreateRequest from '../../lib/requests/TransferCreateRequest'
import User from '../models/User'

const currDate = new Date()
const data = {
  from: '2',
  to: { iban: 'DE54200411110704357300', name: 'Jane Doe', bankAccessId: 2, bankAccountId: 3 },
  type: 'regular',
  schedule: { start: currDate, until: currDate, frequency: 'monthly', interval: 2, byDay: 20 },
  amount: { value: '12.00', currency: 'EUR' },
  entryDate: currDate,
  usage: '',
  challengeAnswers: [{ id: 'pin', value: 'qwe', store: true, validUntil: currDate }]
}

@suite
class TransferCreateRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/transfers')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 201])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload with all data' () {
    const exp = {
      from: '2',
      to: { iban: 'DE54200411110704357300', name: 'Jane Doe', bank_access_id: 2, bank_account_id: 3 },
      type: 'regular',
      schedule: { start: currDate, until: currDate, frequency: 'monthly', interval: 2, by_day: 20 },
      amount: { value: '12.00', currency: 'EUR' },
      entry_date: currDate,
      usage: '',
      challenge_answers: [{ id: 'pin', value: 'qwe', store: true, valid_until: currDate }]
    }
    assert.deepEqual(this.request.payload, exp)
  }

  @test
  'expected payload with optional data' () {
    const data = {
      from: '2',
      to: { iban: 'DE54200411110704357300', name: 'Jane Doe', bankAccessId: 2, bankAccountId: 3 },
      schedule: { start: currDate, until: currDate, frequency: 'daily' },
      amount: { value: '12.00', currency: 'EUR' }
    }

    const exp = {
      from: '2',
      to: { iban: 'DE54200411110704357300', name: 'Jane Doe', bank_access_id: 2, bank_account_id: 3 },
      schedule: { start: currDate, until: currDate, frequency: 'daily' },
      amount: { value: '12.00', currency: 'EUR' }
    }

    const r = new TransferCreateRequest(new User(), data)
    assert.deepEqual(r.payload, exp)
  }

  private get request () {
    return new TransferCreateRequest(new User(), data)
  }
}
