import SnakeCase from './SnakeCase'

/**
 * Convert Object to request variables string
 * @param obj any Object
 */
export default function (obj: any): string {
  if (Object.keys(obj).length === 0) {
    return ''
  }

  const params = []
  const paramsObj = SnakeCase(obj)
  const keys = Object.keys(paramsObj)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    let val = paramsObj[key]

    if (val instanceof Date) {
      val = val.toISOString()
    }

    params.push(`${key}=${val}`)
  }

  return `?${params.join('&')}`
}
