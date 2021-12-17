function compare(a, b) {
  if (+a.score < +b.score) {
    return -1;
  }
  if (+a.score > +b.score) {
    return 1;
  }
  return 0;
}

function getTable() {
  return document.getElementById('table');
}

export function updateTable(data) {
  const table = getTable();
  const score = document.createElement('tr');
  score.innerHTML = `
            <td>${data.user}</td>
            <td>${data.score}</td>
        `;
  table.appendChild(score);
}

export function showData(data, sorted = false) {
  const arr = sorted ? data.sort(compare) : data;
  const table = getTable();
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>`;
  arr.forEach((scoreObj) => {
    const score = document.createElement('tr');
    score.innerHTML = `
            <td>${scoreObj.user}</td>
            <td>${scoreObj.score}</td>
        `;
    table.appendChild(score);
  });
}
