import { ReactNode, memo } from 'react';
import styled from '@emotion/styled';

type Props = {
  name?: string;
  children?: ReactNode;
};

function Player({ name, children }: Props) {
  return (
    <Root>
      <Wrapper>
        <PlayerName>{name}</PlayerName>
      </Wrapper>
      {children}
    </Root>
  );
}

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerName = styled('h5')`
  font-size: 3rem;
`;

export default memo(Player);
