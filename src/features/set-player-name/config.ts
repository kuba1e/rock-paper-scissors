export const getPlayerNameFromLocalStorage = () => {
  const playerName = localStorage.getItem('playerName');

  if (!playerName) {
    return;
  }
  return JSON.parse(playerName);
};
export const savePlayerNameToLocalStorage = (playerName: string) =>
  localStorage.setItem('playerName', JSON.stringify(playerName));
