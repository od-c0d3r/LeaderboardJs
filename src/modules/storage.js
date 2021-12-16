export function setGameLocal(id) {
  localStorage.setItem('gameId', id);
  return true;
}

export function getGameIdLocal() {
  return localStorage.getItem('gameId') || '';
}
