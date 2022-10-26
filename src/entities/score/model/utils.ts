import { ElementType } from 'entities/element/config';
import { winningCombination } from '../config';
import { PlayerScore } from './reducer';

export const getPlayersResult =
  (
    playersChoices: {
      username: string;
      choice: ElementType;
    }[],
  ) =>
  (playersScores: PlayerScore[]) => {
    const winnersNames = playersChoices.reduce(
      (winners, playerChoice, _, array) => {
        const isPlayerWin = array
          .filter((player) => player.username !== playerChoice.username)
          .every(
            (player) =>
              player.choice === winningCombination[playerChoice.choice],
          );
        if (isPlayerWin) {
          winners.push(playerChoice.username);
        }

        return winners;
      },
      [] as string[],
    );

    return playersScores.map((playerScore) => {
      if (!winnersNames.includes(playerScore.username)) {
        return playerScore;
      }
      return {
        username: playerScore.username,
        score: ++playerScore.score,
      };
    });
  };
