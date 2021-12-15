import { getScores } from './api.js';

function compare( a, b ) {
  if ( +a.score < +b.score ){
    return -1;
  }
  if ( +a.score > +b.score ){
    return 1;
  }
  return 0;
}

export default function showData(data) {
  const table = document.getElementById('table');
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>`;
  data.sort(compare).forEach((scoreObj) => {
    const score = document.createElement('tr');
    score.innerHTML = `
            <td>${scoreObj.user}</td>
            <td>${scoreObj.score}</td>
        `;
    table.appendChild(score);
  });
}

getScores().then((data) => showData(data.result));
