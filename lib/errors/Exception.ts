/**
 * Base class for exceptions.
 * Unlike standard Error the instanceof operator works correctly with this one.
 */
export default class Exception implements Error {
    /**
     * Name of this exception.
     */
    public readonly name: string;

    /**
     * Stack trace of this exception.
     */
    public readonly stack: string | undefined;

    /**
     * Captured error.
     */
    private readonly error: Error;

    /**
     * Set the error message.
     *
     * @param message Error message.
     */
    public constructor (public readonly message = '', public readonly code = 0) {
      const groups = /^\s?function ([^(]*)\(/.exec(this.constructor.toString())
      this.name = groups && groups[1] ? groups[1] : 'Exception'
      this.error = new Error()
    }
}

// Set correct prototype chain
Exception.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Exception,
    writable: true,
    enumerable: false,
    configurable: true
  }
})

// Stack trace lazy getter
Object.defineProperty(Exception.prototype, 'stack', { get: function () {
  const lines = this.error.stack.split('\n')
  let skip = 1

  lines[0] = this.name
  for (; !lines[skip].match(`new ${this.name}`) && skip < lines.length - 1; ++skip);
  lines.splice(1, skip)

  return lines.join('\n')
} })
