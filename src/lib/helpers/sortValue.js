export default (currentValue, arrLength, action) => {
  switch (action) {
    case 'up':
      return arrLength === currentValue ? currentValue : currentValue + 2
    case 'down':
      return currentValue <= 0 ? currentValue : currentValue - 2
    default:
      return currentValue
  }
}
