export const EVENTS_TO_EMIT = {
  CHOOSE_ELEMENT: 'choose',
  GET_PLAYERS: 'get_players',
};

export const EVENTS_TO_SUBSCRIBE = {
  FIRST_PLAYER_CONNECTED: 'connect',
  SECOND_PLAYER_CONNECTED: 'connected',
  SECOND_PLAYER_DISCONNECTED: 'disconnected',
  PLAYERS_RECEIVED: 'players_received',
  OPPONENT_MADE_CHOICE: 'opponent_made_choice',
  GAME_FINISHED: 'game_finished',
};

export const messageToEmit = Object.assign({}, EVENTS_TO_EMIT);
export const messageToSubscribe = Object.assign({}, EVENTS_TO_SUBSCRIBE);
