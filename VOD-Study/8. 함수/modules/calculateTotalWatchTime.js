export const calculateTotalWatchTime = (history) => {
  let total = 0;

  for (let i=0; i<history.length; i++) {
    total += history[i].watchTime
  }

  return total
}