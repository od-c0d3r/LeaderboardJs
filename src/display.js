import { getScores } from './api.js';

export default function showData(data) {
  const table = document.getElementById('table');
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>`;
  data.forEach((scoreObj) => {
    const score = document.createElement('tr');
    score.innerHTML = `
            <td>${scoreObj.user}</td>
            <td>${scoreObj.score}</td>
        `;
    table.appendChild(score);
  });
}

getScores().then((data) => showData(data.result));
