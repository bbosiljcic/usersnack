/*
 * this function takes an array of strings and joins them together in a phonetical way
 *
 * e.g.: Value1, Value2 and Value3 instead of
 * Value1, Value2, Value3 that would be achieved in a regular .join(',')
 */

export default function joinArrayPhonetically(array) {
  if (!array || !array.length) return '';

  if (array.length === 1) return array[0];

  return array.reduce((acc, value, index) => {
    if (index === 0) return value;
    const separator = index === array.length - 1 ? ' and ' : ', '
    return `${acc}${separator}${value}`
  }, '')
}
