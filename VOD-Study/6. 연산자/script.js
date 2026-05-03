import { watchHistory } from "./modules/watchHistory.js";

const totalWatchTime = watchHistory[0].watchTime + watchHistory[1].watchTime + watchHistory[2].watchTime + watchHistory[3].watchTime + watchHistory[4].watchTime
console.log(`총 시청 시간은 ${totalWatchTime}분입니다.`)

const testGenre = watchHistory[1].genre
console.log(testGenre)
console.log(testGenre === "범죄" || testGenre === "스릴러")

const result = testGenre === "범죄" || testGenre === "스릴러" ? "19세 이상 시청이 권장됩니다." : "전 연령 시청이 가능합니다."
console.log(result)