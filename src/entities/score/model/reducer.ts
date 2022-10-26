import * as actions from 'entities/player/model';
import { PlayerActions } from 'shared/types/player';
import { getInitialPlayersScore } from '../utils';
import { getPlayersResult } from './utils';

export type PlayerScore = {
  username: string;
  score: number;
};

type State = {
  playersScores: PlayerScore[];
};

const initialState: State = {
  playersScores: [],
};

export const score = (state = initialState, action: PlayerActions) => {
  switch (action.type) {
    case actions.gameFinished.type:
      return {
        ...state,
        playersScores: getPlayersResult(action.payload.results)(
          state.playersScores,
        ),
      };
    case actions.playersReceived.type:
      return {
        ...state,
        playersScores: getInitialPlayersScore(action.payload),
      };
    case actions.secondPlayerConnected.type:
      return {
        ...state,
        playersScores: getInitialPlayersScore(
          state.playersScores.map((player) => player.username),
        ),
      };
    default:
      return state;
  }
};
