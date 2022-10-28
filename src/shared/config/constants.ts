export const PlayerActions = {
  CONNECT_WEBSOCKET: 'connect_websocket' as const,
};

export const EVENTS_TO_EMIT = {
  CHOOSE_ELEMENT: 'choose' as const,
  GET_PLAYERS: 'get_players' as const,
};

export const EVENTS_TO_SUBSCRIBE = {
  FIRST_PLAYER_CONNECTED: 'connect' as const,
  SECOND_PLAYER_CONNECTED: 'connected' as const,
  SECOND_PLAYER_DISCONNECTED: 'disconnected' as const,
  PLAYERS_RECEIVED: 'players_received' as const,
  OPPONENT_MADE_CHOICE: 'opponent_made_choice' as const,
  GAME_FINISHED: 'game_finished' as const,
};

export const messageToEmit = Object.assign({}, EVENTS_TO_EMIT);
export const messageToSubscribe = Object.assign({}, EVENTS_TO_SUBSCRIBE);
