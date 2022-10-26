import { PlayerStatus } from 'shared/types/player';

export const mapPlayerStatusToTextContent = {
  [PlayerStatus.MADE_CHOICE]: 'Player made choice',
  [PlayerStatus.ONLINE]: 'Player online',
  [PlayerStatus.OFFLINE]: 'Player offline',
};
