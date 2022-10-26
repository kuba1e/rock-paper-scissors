import { ElementType } from 'entities/element/config';
import { EVENTS_TO_EMIT, EVENTS_TO_SUBSCRIBE } from 'shared/config';
import { createAction } from 'shared/lib';

export const connectWebsocket = createAction<{ username: string }>(
  'CONNECT_WEBSOCKET',
);

export const getPlayers = createAction<void>(EVENTS_TO_EMIT.GET_PLAYERS);

export const firstPlayerConnected = createAction<void>(
  EVENTS_TO_SUBSCRIBE.FIRST_PLAYER_CONNECTED,
);

export const secondPlayerConnected = createAction<{ username: string }>(
  EVENTS_TO_SUBSCRIBE.SECOND_PLAYER_CONNECTED,
);

export const secondPlayerDisconnected = createAction<{ username: string }>(
  EVENTS_TO_SUBSCRIBE.SECOND_PLAYER_CONNECTED,
);

export const playersReceived = createAction<any>(
  EVENTS_TO_SUBSCRIBE.PLAYERS_RECEIVED,
);

export const opponentMadeChoice = createAction<{ username: string }>(
  EVENTS_TO_SUBSCRIBE.OPPONENT_MADE_CHOICE,
);

export const gameFinished = createAction<
  {
    username: string;
    choice: ElementType;
  }[]
>(EVENTS_TO_SUBSCRIBE.GAME_FINISHED);
