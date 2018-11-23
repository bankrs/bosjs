import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import TeamSwitchRequest from '../../lib/requests/TeamSwitchRequest'
import User from '../models/User'

@suite
class TeamSwitchRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/team/switch?team_id=123')
  }

  'expected endpoint without team id' () {
    assert.strictEqual(this.requestWithoutId.endpoint, '/v1/developers/team/switch')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.POST)
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
    assert.deepEqual(this.request.payload, {})
  }

  private get request () {
    return new TeamSwitchRequest(new User(), '123')
  }

  private get requestWithoutId () {
    return new TeamSwitchRequest(new User())
  }
}
