export const watchHistory = []

const genres = ["드라마", "범죄", "SF", "스릴러", "다큐", "애니메이션", "로맨스", "액션"];
const categories = ["영화", "시리즈", "다큐멘터리", "애니메이션"];
const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

for (let i=1; i<=100; i++) {
  const randomGenre = genres[Math.floor(Math.random() * genres.length)]
  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  const randomDay = days[Math.floor(Math.random() * days.length)]
  const randomWatchtime = Math.floor(Math.random() * 180) + 30

  const video = {
    title: `${i}번째 영상`,
    genre: randomGenre,
    category: randomCategory,
    watchTime: randomWatchtime,
    day: randomDay
  }

  watchHistory.push(video)
}