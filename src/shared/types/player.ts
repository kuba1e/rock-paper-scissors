import { GetActionType } from 'shared/lib/actionCreator';
import * as actions from '../../entities/player/model/actions';

export type PlayerInfo = {
  name: string;
  status: PlayerStatus;
};

export type PlayersStatus = PlayerInfo[];

export enum PlayerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  MADE_CHOICE = 'madeChoice',
}

export type PlayerActions = GetActionType<typeof actions>;
