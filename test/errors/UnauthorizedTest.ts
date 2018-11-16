import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import Unauthorized from '../../lib/errors/Unauthorized'
import Exception from '../../lib/errors/Exception'

@suite
class UnauthorizedTest {
  @test
  'is a subtype of Error' () {
    assert.instanceOf(new Unauthorized(), Error)
  }

  @test
  'is a subtype of Exception' () {
    assert.instanceOf(new Unauthorized(), Exception)
  }

  @test
  'has correct name' () {
    assert.strictEqual(new Unauthorized().name, 'Unauthorized')
  }

  @test
  'has correct message' () {
    assert.strictEqual(new Unauthorized().message, 'Invalid token')
  }

  @test
  'has correct stack trace' () {
    const e = new Error()
    const u = new Unauthorized()

    if (e.stack && u.stack) {
      assert.include(
        e.stack.split('\n').slice(2).join('\n'),
        u.stack.split('\n').slice(2).join('\n')
      )
    }
  }

  @test
  'first line of stack trace contains the exception name' () {
    const u = new Unauthorized()

    if (u.stack) {
      assert.strictEqual(u.stack.split('\n')[0], 'Unauthorized')
    }
  }
}
