import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Player } from 'entities/player/ui';
import { SetPlayerName } from 'features/set-player-name';
import { getPlayers } from 'entities/player/model';
import {
  getConnectedPlayers,
  getIsPlayerConnected,
  getPlayerName,
  getPlayerStatus,
} from 'entities/player/model/selectors';
import styled from '@emotion/styled';
import { Element } from 'entities/element/ui';
import { ChooseElement } from 'features/choose-element';
import { mapPlayerStatusToTextContent } from 'entities/player/config';
import { getPlayersScore } from 'entities/score';
import { Score } from 'entities/score/ui';
import { PlayerStatus } from 'shared/types/player';

export function PlayerRoom() {
  const dispatch = useDispatch();

  const playerName = useSelector(getPlayerName);
  const isPlayerConnected = useSelector(getIsPlayerConnected);
  const connectedPlayers = useSelector(getConnectedPlayers);
  const playersStatus = useSelector(getPlayerStatus);
  const playersScore = useSelector(getPlayersScore);

  useEffect(() => {
    if (!isPlayerConnected || connectedPlayers.length > 1) {
      return;
    }

    const timeOutId = setInterval(() => {
      dispatch(getPlayers());
      if (connectedPlayers.length > 1) {
        clearInterval(timeOutId);
      }
    }, 1000);
    return () => clearInterval(timeOutId);
  }, [dispatch, isPlayerConnected, connectedPlayers]);

  return (
    <Wrapper>
      <Score playersScore={playersScore} />
      <PlayersList>
        {connectedPlayers.map((player, index) => {
          if (player === playerName) {
            return (
              <PlayerItem key={index}>
                <Player name={player}>
                  <Element before={<ChooseElement />} />
                </Player>
              </PlayerItem>
            );
          }
          return (
            <PlayerItem key={index}>
              <Player name={player}>
                <Element
                  after={
                    <p>
                      {
                        mapPlayerStatusToTextContent[
                          playersStatus?.find(
                            (playerStatus) => playerStatus.name === player,
                          )?.status as PlayerStatus
                        ]
                      }
                    </p>
                  }
                  isElementChosen={
                    playersStatus?.find(
                      (playerStatus) => playerStatus.name === player,
                    )?.status === PlayerStatus.MADE_CHOICE
                  }
                />
              </Player>
            </PlayerItem>
          );
        })}
      </PlayersList>
      <SetPlayerName />
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(174, 205, 238);
  background: linear-gradient(
    90deg,
    rgba(174, 205, 238, 1) 30%,
    rgba(233, 158, 148, 1) 100%
  );
`;

const PlayersList = styled('ul')`
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: space-between;
`;

const PlayerItem = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;
