import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {ApiRequest, Method} from '../lib/ApiRequest'

@suite
class ApiRequestTest {
  @test
  'default method is GET' () {
    assert.strictEqual(new class extends ApiRequest {}(null).method, Method.GET)
  }

  @test
  'default success codes' () {
    assert.deepEqual(new class extends ApiRequest {}(null).successCodes, [200])
  }

  @test
  'default error codes' () {
    assert.deepEqual(new class extends ApiRequest {}(null).errorCodes, [400])
  }

  @test
  'expected codes combine success and error codes' () {
    const request = new class extends ApiRequest {}(null)

    assert.deepEqual(request.expectedCodes, [200, 400])
    assert.deepEqual(request.expectedCodes, request.successCodes.concat(request.errorCodes))
  }
}
