export const precipitationMap = (precipitation) => {
  if (precipitation.snow) {
    if (precipitation.snow['1h'] !== undefined) {
      return { length: '1h', amount: precipitation.snow['1h'] }
    }

    if (precipitation.snow['3h'] !== undefined) {
      return { length: '3h', amount: precipitation.snow['3h'] }
    }
  } else if (precipitation.rain) {
    if (precipitation.rain['1h'] !== undefined) {
      return { length: '1h', amount: precipitation.rain['1h'] }
    }
    if (precipitation.rain['3h'] !== undefined) {
      return { length: '3h', amount: precipitation.rain['3h'] }
    }
  }
  return { length: '1h', amount: 0 }
}
