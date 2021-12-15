import { getScores, postScore } from './api';
import showData from './display';
import './style.scss';


document.addEventListener('submit', e => {
    const [name, score] = ['nameInput', 'scoreInput'].map(id => document.getElementById(id).value);
    postScore({ user: name, score: score }).then(data => {
        console.log(data);
    });
    document.forms[0].reset();
    e.preventDefault();
});

document.addEventListener('click', e => {
    if (e.target.id == 'refreshBtn') {
        getScores().then(data => {
            showData(data.result)
        });
    }
})