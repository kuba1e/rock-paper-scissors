import { PlayersStatus, PlayerStatus } from 'shared/types/player';

export const getInitialPlayersStatus =
  (players: string[]) => (userName: string | null) =>
    players
      .filter((playerName) => playerName !== userName)
      .map((player) => ({
        name: player,
        status: PlayerStatus.ONLINE,
      })) as PlayersStatus;

export const updatePlayerStatus =
  (playersStatus: PlayersStatus | null) =>
  (username: string | null) =>
  (newStatus: PlayerStatus) =>
    playersStatus?.map((playerStatus) => {
      if (playerStatus.name !== username) {
        return playerStatus;
      }
      return {
        ...playerStatus,
        status: PlayerStatus.MADE_CHOICE,
      };
    }) as PlayersStatus;
