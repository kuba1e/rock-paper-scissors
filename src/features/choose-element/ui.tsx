import { memo, useCallback } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { chooseElement, getChosenElement } from 'entities/element/model';
import { Button } from 'shared/ui';
import { ButtonVariants } from 'shared/ui/Button/Button';
import { ElementType } from 'entities/element/config';
import { ElementIcon } from 'entities/element/ui';
import { mapElementTypeToIconProps } from 'entities/element/ui/utils';
import { getPlayerStatus } from 'entities/player/model';
import { PlayerStatus } from 'shared/types/player';

type Props = {
  readOnly?: boolean;
};

const elements = ['paper', 'rock', 'scissors'];

function ChooseElement({ readOnly }: Props) {
  const dispatch = useDispatch();

  const chosenElement = useSelector(getChosenElement);
  const playersStatus = useSelector(getPlayerStatus);

  const isSomePlayerMadeChoice = playersStatus?.some(
    (player) => player.status === PlayerStatus.MADE_CHOICE,
  );

  const isIconDisabled = !!isSomePlayerMadeChoice && !!chosenElement;

  const handleChooseElement = useCallback(
    (element: string) => {
      dispatch(chooseElement(element));
    },
    [dispatch],
  );

  return (
    <IconsWrapper readOnly={readOnly}>
      {elements.map((element, index) => (
        <IconButtonWrapper
          key={index}
          isChosen={element === chosenElement}
          disabled={isIconDisabled}
        >
          <Button
            variant={ButtonVariants.text}
            onClick={() => handleChooseElement(element)}
            disabled={isIconDisabled}
          >
            <ElementIcon
              {...mapElementTypeToIconProps[element as ElementType]}
            />
          </Button>
        </IconButtonWrapper>
      ))}
    </IconsWrapper>
  );
}

const IconButtonWrapper = styled('div')<{
  isChosen: boolean;
  disabled: boolean;
}>`
  padding: 10px;
  border-radius: 6px;
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.background.disabled};
    `}

  ${({ isChosen, theme }) =>
    isChosen &&
    css`
      background-color: ${theme.colors.background.success};
    `}
`;

const IconsWrapper = styled('div')<{ readOnly?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${({ readOnly }) =>
    readOnly &&
    css`
      pointer-events: none;
    `}
`;

export default memo(ChooseElement);
