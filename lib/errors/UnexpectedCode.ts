import Exception from './Exception'

export default class UnexpectedCode extends Exception {
  public constructor (actualCode: number, expectedCodes: number[]) {
    super(`Unexpected status code ${actualCode}. Expected ${expectedCodes.join(', ')}.`)
  }
}
