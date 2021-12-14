export default function showData(data) {
    let table = document.getElementById('table');
    data.forEach(scoreObj => {
        let score = document.createElement('tr');
        score.innerHTML = 
        `
            <td>${scoreObj.name}</td>
            <td>${scoreObj.score}</td>
        `
        table.appendChild(score)
    });
}