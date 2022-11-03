import { ElementType } from 'entities/element/config';
import {
  EVENTS_TO_EMIT,
  EVENTS_TO_SUBSCRIBE,
  PlayerActions,
} from 'shared/config';
import { createAction } from 'shared/lib/actionCreator';

export const connectWebsocket = createAction<
  { username: string },
  typeof PlayerActions.CONNECT_WEBSOCKET
>(PlayerActions.CONNECT_WEBSOCKET);

export const getPlayers = createAction<void, typeof EVENTS_TO_EMIT.GET_PLAYERS>(
  EVENTS_TO_EMIT.GET_PLAYERS,
);

export const firstPlayerConnected = createAction<
  void,
  typeof EVENTS_TO_SUBSCRIBE.FIRST_PLAYER_CONNECTED
>(EVENTS_TO_SUBSCRIBE.FIRST_PLAYER_CONNECTED);

export const secondPlayerConnected = createAction<
  { username: string },
  typeof EVENTS_TO_SUBSCRIBE.SECOND_PLAYER_CONNECTED
>(EVENTS_TO_SUBSCRIBE.SECOND_PLAYER_CONNECTED);

export const secondPlayerDisconnected = createAction<
  { username: string },
  typeof EVENTS_TO_SUBSCRIBE.SECOND_PLAYER_CONNECTED
>(EVENTS_TO_SUBSCRIBE.SECOND_PLAYER_CONNECTED);

export const playersReceived = createAction<
  string[],
  typeof EVENTS_TO_SUBSCRIBE.PLAYERS_RECEIVED
>(EVENTS_TO_SUBSCRIBE.PLAYERS_RECEIVED);

export const opponentMadeChoice = createAction<
  { username: string },
  typeof EVENTS_TO_SUBSCRIBE.OPPONENT_MADE_CHOICE
>(EVENTS_TO_SUBSCRIBE.OPPONENT_MADE_CHOICE);

export const gameFinished = createAction<
  {
    results: {
      username: string;
      choice: ElementType;
    }[];
  },
  typeof EVENTS_TO_SUBSCRIBE.GAME_FINISHED
>(EVENTS_TO_SUBSCRIBE.GAME_FINISHED);
