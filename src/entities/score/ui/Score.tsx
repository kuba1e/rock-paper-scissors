import {memo} from 'react'
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { PlayerScore } from '../model';

type Props = {
  playersScore: PlayerScore[];
};

function Score({ playersScore }: Props) {
  return (
    <Root>
      <ItemsList>
        {playersScore.map((player, index) => (
          <ListItem key={index}>
            <Title>{player.username}</Title>
            <Subtitle>{player.score}</Subtitle>
          </ListItem>
        ))}
      </ItemsList>
    </Root>
  );
}

const flexStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Root = styled('div')`
  min-width: 200px;
  height: 75px;
  ${flexStyles}
`;

const ItemsList = styled('ul')`
  display: flex;
  gap: 10px;
`;

const ListItem = styled('li')`
  padding: 10px;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.ui.border};
  ${flexStyles}
`;

const Title = styled('h5')`
  font-size: 3rem;
`;
const Subtitle = styled('h6')`
  font-size: 2rem;
`;
export default memo(Score);
