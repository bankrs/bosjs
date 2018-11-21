import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import SnakeCase from '../../lib/util/SnakeCase'

@suite
class SnakeCaseTest {
  @test
  'object keys to snakecase' () {
    const o = {
      appId: null,
      name: 'John',
      LastName: 'Doe',
      lastRequest: new Date()
    }

    const s = SnakeCase(o)
    assert.equal(s.app_id, null)
    assert.equal(s.name, 'John')
    assert.equal(s.last_name, 'Doe')
    assert.instanceOf(s.last_request, Date)
  }

  @test
  'nested object keys to snakecase' () {
    const o = {
      appId: '123',
      userInfo: {
        firstName: 'John',
        LastName: 'Doe',
        accountData: [
          {
            idNumber: 111,
            LastRequestDate: new Date()
          },
          {
            idNumber: 222,
            lastRequestDate: new Date()
          }
        ]
      }
    }

    const s = SnakeCase(o)
    assert.equal(s.app_id, '123')
    assert.equal(s.user_info.first_name, 'John')
    assert.equal(s.user_info.last_name, 'Doe')
    assert.instanceOf(s.user_info.account_data, Array)
    assert.equal(s.user_info.account_data[0].id_number, 111)
    assert.instanceOf(s.user_info.account_data[0].last_request_date, Date)
    assert.equal(s.user_info.account_data[1].id_number, 222)
    assert.instanceOf(s.user_info.account_data[1].last_request_date, Date)
  }

  @test
  'array of objects keys to snakecase' () {
    const a = [{ appId: 11, LastName: 'Doe' }]

    const s = SnakeCase(a)
    assert.equal(s[0].app_id, 11)
    assert.equal(s[0].last_name, 'Doe')
  }
}
