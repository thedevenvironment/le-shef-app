/**
 * Format Number
 * -
 */
export function formatNumber(number: number) {
  const numberString = number.toString()
  return numberString.padStart(2, '0')
}
