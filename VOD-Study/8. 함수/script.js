import { watchHistory } from "./modules/watchHistory.js";
import { calculateTotalWatchTime } from "./modules/calculateTotalWatchtime.js";
import { watchCountByGenres } from "./modules/watchCountByGenres.js";
import { analyzeAverageWatchTimeByDay } from "./modules/analyzeAverageWatchTimeByDay.js";

const totalWatchTime = calculateTotalWatchTime(watchHistory)
console.log(`총 시청 시간: ${totalWatchTime}`)

const genreCounts = watchCountByGenres(watchHistory)
console.log(`장르별 시청 횟수`)
console.log(genreCounts)

const averageWatchTimeByDay = analyzeAverageWatchTimeByDay(watchHistory)
console.log(`요일별 평균 시청 시간`)
console.log(averageWatchTimeByDay)

const filterPopularVideos = watchHistory.filter((video) => video.watchTime >= 150)
console.log(filterPopularVideos)

const videoTitles = watchHistory.map((video) => video.title)
console.log(videoTitles)

// 화면 바인딩 DataSet 코드
const dataOutput = document.getElementById('data-output');
dataOutput.textContent = `총 ${watchHistory.length}개의 시청 기록이 있습니다.`;

const totalTimeOutput = document.getElementById('total-time-output');
totalTimeOutput.textContent = `${totalWatchTime}분`;

const genreRankingOutput = document.getElementById('genre-ranking-output');

let genreHTML = "<div class='genre-ranking'>";
for (const [genre, count] of  Object.entries(genreCounts)) {
  genreHTML += `<div class='genre-item'><span class='genre-name'>${genre}</span>: <span class='genre-count'>${count}회</span></div>`;
}
genreHTML += "</div>";
genreRankingOutput.innerHTML = genreHTML;

const dayAverageOutput = document.getElementById('day-average-output');
let dayHTML = "<div>";
for (const day in averageWatchTimeByDay) {
  dayHTML += `<div>${day}: ${averageWatchTimeByDay[day]}분</div>`;
}
dayHTML += "</div>";

dayAverageOutput.innerHTML = dayHTML;