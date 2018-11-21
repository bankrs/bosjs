import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ToParams from '../../lib/util/ToParams'

@suite
class ToParamsTest {
  @test
  'object to params string' () {
    const date = new Date()
    const o = { accessId: 11, accountId: 22, date: date }
    const p = ToParams(o)
    assert.equal(p, `?access_id=11&account_id=22&date=${date.toISOString()}`)
  }
}
