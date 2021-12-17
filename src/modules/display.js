function compare(a, b) {
  if (+a.score < +b.score) {
    return -1;
  }
  if (+a.score > +b.score) {
    return 1;
  }
  return 0;
}

function getElementWith(id) {
  return document.getElementById(id);
}

function createElementWith(id) {
  return document.createElement(id);
}

function htmlScore(obj) {
  return `<td>${obj.user}</td><td>${obj.score}</td>`
}

export function updateTable(data) {
  const table = getElementWith('table');
  const score = createElementWith('tr')
  score.innerHTML = htmlScore(data);
  table.appendChild(score);
}

export function showData(data, sorted = false) {
  const arr = sorted ? data.sort(compare) : data;
  const table = getElementWith('table');
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>`;
  arr.forEach((scoreObj) => {
    const score = createElementWith('tr');
    score.innerHTML = htmlScore(scoreObj)
    table.appendChild(score);
  });
}
