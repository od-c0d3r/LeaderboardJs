const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'
const GAME_ID = 'c1G9vyVIErBZnFe8cXpl';
const GAME_POST_OPTIONS =
{
  method: 'POST',
  body: JSON.stringify({ name: 'newGame' }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};
const SCORE_POST_OPTIONS =
{
  method: 'POST',
  body: JSON.stringify({
    user: "Text",
    score: 100
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

async function createNewGame() {
  const newGame = await fetch(`${API}games/`, GAME_POST_OPTIONS)
  return newGame.json()
}

async function postScore() {
  const scores = await fetch(`${API}games/${GAME_ID}/scores/`, SCORE_POST_OPTIONS)
  return scores.json()
}

async function getScores() {
  const scores = await fetch(`${API}games/${GAME_ID}/scores/`)
  return scores.json()
}
