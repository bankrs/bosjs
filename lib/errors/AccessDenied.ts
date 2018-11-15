import Exception from './Exception'
import ErrorFactory from './ErrorFactory' // eslint-disable-line no-unused-vars

const defaultMessage = 'Access denied'

export default class AccessDenied extends Exception {
  public constructor (code?: string, errorFactory?: ErrorFactory) {
    let msg = defaultMessage

    if (errorFactory) {
      const codeMsg = errorFactory.getMessage(code || '')

      if (codeMsg === '') {
        console.warn(`Not found message for error code "${code}"`)
      } else {
        msg = codeMsg
      }
    }

    super(msg)
  }
}
