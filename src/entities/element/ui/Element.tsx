import {memo} from 'react'
import styled from '@emotion/styled';

import { Loader } from 'shared/ui/Loader';
import { SvgIcon } from 'shared/ui/SvgIcon';

type Props = {
  before?: React.ReactNode;
  after?: React.ReactNode;
  isElementChosen?: boolean;
};

function Element({ before, after, isElementChosen }: Props) {
  return (
    <Root>
      {before}
      <Wrapper>
        {!before && !isElementChosen ? (
          <Loader width={100} height={100} />
        ) : null}
        {!before && isElementChosen ? <EmptyElement /> : null}
        {after}
      </Wrapper>
    </Root>
  );
}

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  min-height: 200px;
  min-width: 300px;
`;

const Wrapper = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const EmptyElement = styled('div')`
  width: 170px;
  height: 170px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background.success};
`;

export const ElementIcon = styled(SvgIcon)`
  svg {
    width: 150px;
    height: 150px;
  }
`;
export default memo(Element);
