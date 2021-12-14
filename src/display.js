export default function showData(data) {
  const table = document.getElementById('table');
  data.forEach((scoreObj) => {
    const score = document.createElement('tr');
    score.innerHTML = `
            <td>${scoreObj.name}</td>
            <td>${scoreObj.score}</td>
        `;
    table.appendChild(score);
  });
}