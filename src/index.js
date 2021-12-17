import './style.scss';
import './card.scss';
import './modules/darkmode.js';
import { getGameIdLocal, setGameLocal } from './modules/storage.js';
import { showData, updateTable } from './modules/display.js';
import { createNewGame, getScores, postScore } from './modules/api.js';

document.addEventListener('submit', (e) => {
  const [name, score, errors] = ['nameInput', 'scoreInput', 'errors'].map((id) => document.getElementById(id));
  if (score.value > 0) {
    postScore({ user: name.value, score: score.value });
    updateTable({ user: name.value, score: score.value });
    document.forms[0].reset();
    errors.innerHTML = '';
  } else {
    errors.innerHTML = '* Please, enter new score';
  }
  e.preventDefault();
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'refreshBtn') getScores().then((data) => showData(data.result));
  if (e.target.id === 'sortBtn') {
    console.log(e);
    getScores().then((data) => showData(data.result, true));
  }
});

window.addEventListener('load', () => {
  if (!getGameIdLocal()) {
    createNewGame().then((data) => {
      const id = data.result.split('').splice(14, 20).join('');
      setGameLocal(id);
      return true;
    });
  }
  getScores().then((data) => showData(data.result));
});
