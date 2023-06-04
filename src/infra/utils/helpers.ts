/**
 * String limit
 * @param str
 * @param limit
 */
export const strLimit = (str: string, limit: number = 100): string => {
  if (str.length <= limit) {
    return str
  }

  return str.slice(0, limit)
}
