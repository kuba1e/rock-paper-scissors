import { RootState } from 'app/redux';

export const getPlayersScore = (state: RootState) => state.score.playersScores;
