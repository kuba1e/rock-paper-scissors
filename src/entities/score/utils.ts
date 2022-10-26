import { PlayerScore } from './model';

export const getInitialPlayersScore = (players: string[]): PlayerScore[] =>
  players.map((player) => ({
    username: player,
    score: 0,
  }));
