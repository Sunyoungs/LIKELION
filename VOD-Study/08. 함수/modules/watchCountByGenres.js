export function watchCountByGenres(history) {
  const genreCount = {}

  for (let i=0; i<history.length; i++) {
    const genre = history[i].genre

    if (Object.hasOwn(genreCount, genre)) {
      genreCount[genre]++
    } else {
      genreCount[genre] = 1
    }
  }

  return genreCount
}