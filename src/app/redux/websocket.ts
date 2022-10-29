import { messageToSubscribe, messageToEmit, SOCKET_URL } from 'shared/config';
import { io, Socket } from 'socket.io-client';
import { Middleware } from 'redux';
import { connectWebsocket } from 'entities/player/model';
import { PlayerActions } from 'shared/types/player';
import { ElementActions } from 'shared/types/element';
import { ValuesMessageToEmit } from 'shared/types/websocketActions';

export const websocketMiddleware: Middleware = (store) => {
  let socket: Socket;
  let listenersAreMapped = false;

  return (next) => (action: PlayerActions | ElementActions) => {
    if (action.type === connectWebsocket.type) {
      socket = io(SOCKET_URL, {
        query: {
          username: action.payload.username,
        },
      });
    }
    if (socket && !listenersAreMapped) {
      Object.values(messageToSubscribe).forEach((type) =>
        socket.on(type, (payload) => store.dispatch({ type, payload })),
      );
      listenersAreMapped = true;
    }

    if (
      Object.values(messageToEmit).includes(action.type as ValuesMessageToEmit)
    ) {
      socket.emit(action.type, action.payload);
    }

    next(action);
  };
};
