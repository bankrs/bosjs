import {suite, test} from 'mocha-typescript';
import {assert} from 'chai';

import UserError from '../../lib/errors/UserError';

interface errorObj {
    [key: string]: string
}

class ErrorFactory {
    public constructor(private readonly errors: errorObj) {}

    public getMessage(code: string): string {
        return this.errors[code] || ''
    }
}

@suite
class UserErrorTest
{
    @test
    'created errors have correct error messages'()
    {
        const errorFactory = new ErrorFactory({
            'email_invalid': 'Invalid email address',
            'developer_login_invalid': 'Invalid developer credentials'
        });

        let e = new UserError(400, 'email_invalid', errorFactory);

        assert.strictEqual(e.message, 'Invalid email address');
        assert.strictEqual(e.code, 400);

        e = new UserError(401, 'developer_login_invalid', errorFactory);
        assert.strictEqual(e.message, 'Invalid developer credentials');
        assert.strictEqual(e.code, 401)
    }

    @test
    'created error for unknown error codes has correct message'()
    {
        const e = new UserError(400, 'email_invalid');

        assert.strictEqual(e.message, 'Request error');
        assert.strictEqual(e.code, 400)
    }
}
