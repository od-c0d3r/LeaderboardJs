const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'
const GAME_ID = 'c1G9vyVIErBZnFe8cXpl';

function gamePostOptions() {
  return {
    method: 'POST',
    body: JSON.stringify({ name: 'newGame' }),
    headers: {
      'Content-type': 'application/json; charset=-8',
    },
  };
}

function scorePostOptions(obj) {
  console.log(obj)
  return {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
}

export async function createNewGame() {
  const newGame = await fetch(`${API}games/`, gamePostOptions())
  return newGame.json()
}

export async function postScore(scoreObj) {
  const response = await fetch(`${API}games/${GAME_ID}/scores/`, scorePostOptions(scoreObj))
  return response.json()
}

export async function getScores() {
  const response = await fetch(`${API}games/${GAME_ID}/scores/`);
  return response.json()
}
