export function analyzeAverageWatchTimeByDay(history) {
  const dayGroups = {}

  for (let i=0; i<history.length; i++) {
    const day = history[i].day
    const watchTime = history[i].watchTime

    if (!Object.hasOwn(dayGroups, day)) {
      dayGroups[day] = {
        total: 0,
        count: 0
      }
    }

    dayGroups[day].total += watchTime
    dayGroups[day].count++
  }

  const averageByDay = {}

  for (const day in dayGroups) {
    averageByDay[day] = (dayGroups[day].total / dayGroups[day].count).toFixed(1)
  }

  return averageByDay
}