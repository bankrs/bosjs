const camelMask = /(.)([A-Z]+)/g

function isObject (k: any): boolean {
  return typeof k === 'object' && k !== null && !(k instanceof Date)
}

function toSnake (str: string): string {
  return str.replace(camelMask, (_, prev: string, upper: string) => {
    return prev + '_' + upper.toLowerCase()
  })
}

function keysToSnake (obj: any): any {
  const newObj: any = {}
  const keys = Object.keys(obj)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const val = obj[key]
    let newKey = key

    if ((/[A-Z]/).test(key)) {
      newKey = toSnake(key).toLowerCase()
    }

    if (val instanceof Array) {
      newObj[newKey] = []

      for (let j = 0; j < val.length; j++) {
        const sObj = keysToSnake(val[j])
        newObj[newKey].push(sObj)
      }

      continue
    }

    if (isObject(val)) {
      const sObj = keysToSnake(val)
      newObj[newKey] = sObj
      continue
    }

    newObj[newKey] = val
  }

  return newObj
}

/**
 * Convert Object (Array of objects) camelcase keys to snakecase keys
 * @param obj any Object
 */
export default function (obj: any): any {
  if (obj instanceof Array) {
    const arrObj: any = []

    for (let i = 0; i < obj.length; i++) {
      const sObj = keysToSnake(obj[i])
      arrObj.push(sObj)
    }

    return arrObj
  }

  return keysToSnake(obj)
}
