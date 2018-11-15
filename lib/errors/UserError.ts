import Exception from './Exception'
import ErrorFactory from './ErrorFactory' // eslint-disable-line no-unused-vars

const defaultMessage = 'Request error'

/**
 * Thrown as a result of an error caused by invalid input from the user.
 */
export default class UserError extends Exception {
  public constructor (actualCode: number, code: string, errorFactory?: ErrorFactory) {
    let msg = defaultMessage

    if (errorFactory) {
      const codeMsg = errorFactory.getMessage(code)

      if (codeMsg === '') {
        console.warn(`Not found message for error code "${code}"`)
      } else {
        msg = codeMsg
      }
    }

    super(msg)
  }
}
