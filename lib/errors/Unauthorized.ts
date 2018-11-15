import Exception from './Exception'

const defaultMessage = 'Invalid token'

export default class Unauthorized extends Exception {
  public constructor () {
    super(defaultMessage)
  }
}
