import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';

import AccessDenied from '../../lib/errors/AccessDenied';
import Exception from '../../lib/errors/Exception';

@suite
class AccessDeniedTest {
	@test
	'is a subtype of Error'() {
		assert.instanceOf(new AccessDenied, Error);
	}

	@test
	'is a subtype of Exception'() {
		assert.instanceOf(new AccessDenied, Exception);
	}

	@test
	'has correct name'() {
		assert.strictEqual(new AccessDenied().name, 'AccessDenied');
	}

	@test
	'has correct message'() {
		assert.strictEqual(new AccessDenied().message, 'Access denied');
	}

	@test
	'has correct stack trace'() {
		const e = new Error()
		const a = new AccessDenied()

		if (e.stack && a.stack) {
			assert.include(
				e.stack.split("\n").slice(2).join("\n"),
				a.stack.split("\n").slice(2).join("\n")
			);
		}
	}

	@test
	'first line of stack trace contains the exception name'() {
		const a = new AccessDenied('access_denied')

		if (a.stack) {
			assert.strictEqual(a.stack.split("\n")[0], 'AccessDenied');
		}
	}
}
