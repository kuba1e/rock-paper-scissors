import {
  PlayerActions,
  PlayersStatus,
  PlayerStatus,
} from 'shared/types/player';
import { getInitialPlayersStatus, updatePlayerStatus } from '../utils';
import * as actions from './actions';

type State = {
  connectedPlayers: string[];
  userName: string | null;
  isConnected: boolean;
  playersStatus: PlayersStatus | null;
};

const initialState: State = {
  connectedPlayers: [],
  userName: null,
  isConnected: false,
  playersStatus: null,
};

export const player = (state = initialState, action: PlayerActions) => {
  switch (action.type) {
    case actions.connectWebsocket.type:
      return {
        ...state,
        userName: action.payload?.username,
      };
    case actions.firstPlayerConnected.type:
      return {
        ...state,
        isConnected: true,
      };
    case actions.secondPlayerConnected.type:
      return {
        ...state,
        playersStatus: updatePlayerStatus(state.playersStatus)(
          action.payload?.username,
        )(PlayerStatus.ONLINE),
      };
    case actions.secondPlayerDisconnected.type:
      return {
        ...state,
        playersStatus: updatePlayerStatus(state.playersStatus)(
          action.payload?.username,
        )(PlayerStatus.OFFLINE),
      };
    case actions.playersReceived.type:
      return {
        ...state,
        connectedPlayers: action.payload as string[],
        playersStatus: getInitialPlayersStatus(action.payload)(state.userName),
      };

    case actions.opponentMadeChoice.type:
      return {
        ...state,
        playersStatus: updatePlayerStatus(state.playersStatus)(
          action.payload.username,
        )(PlayerStatus.MADE_CHOICE),
      };
    case actions.gameFinished.type:
      return {
        ...state,
        playersStatus: getInitialPlayersStatus(state.connectedPlayers)(
          state.userName,
        ),
      };
    default:
      return state;
  }
};
