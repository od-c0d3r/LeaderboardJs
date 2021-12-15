import './style.scss';
import './darkmode.js';
import showData from './display.js';
import { getScores, postScore } from './api.js';

document.addEventListener('submit', (e) => {
  const [name, score, errors] = ['nameInput', 'scoreInput', 'errors'].map((id) => document.getElementById(id));
  if (score.value > 0) {
    postScore({ user: name.value, score: score.value })
    document.forms[0].reset();
  } else {
    errors.innerHTML = '* Please, enter new score';
  }
  e.preventDefault();
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'refreshBtn') getScores().then((data) => showData(data.result));
});
