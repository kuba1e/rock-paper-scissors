import { RootState } from 'app/redux';

export const getPlayerName = (state: RootState) => state.player.userName;

export const getIsPlayerConnected = (state: RootState) =>
  state.player.isConnected;

export const getConnectedPlayers = (state: RootState) =>
  state.player.connectedPlayers;

export const getPlayerStatus = (state: RootState) => state.player.playersStatus;
