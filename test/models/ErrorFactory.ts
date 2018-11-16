interface errorObj {
    [key: string]: string
}

export default class ErrorFactory {
  public constructor (private readonly errors: errorObj) {}

  public getMessage (code: string): string {
    return this.errors[code] || ''
  }
}
