import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import TeamSendInviteRequest from '../../lib/requests/TeamSendInviteRequest'
import User from '../models/User'

@suite
class TeamSendInviteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/team/invite')
  }

  @test
  'request method is POST' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
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
  'expected payload' () {
    assert.deepEqual(this.request.payload, { email: 'user@mail.com' })
  }

  private get request () {
    return new TeamSendInviteRequest(new User(), 'user@mail.com')
  }
}
