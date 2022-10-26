import { useState, useEffect, useCallback, ChangeEvent, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { PortalModal } from 'shared/ui/PortalModal';
import { connectWebsocket } from 'entities/player/model';
import { TextField } from 'shared/ui/TextField';
import {
  getPlayerNameFromLocalStorage,
  savePlayerNameToLocalStorage,
} from './config';
import { Button } from 'shared/ui/Button';
import { ButtonVariants } from 'shared/ui/Button/Button';

function SetPlayerName() {
  const dispatch = useDispatch();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userName = getPlayerNameFromLocalStorage();

    if (userName) {
      dispatch(connectWebsocket({ username: userName }));
      return;
    }
    setIsModalOpened(true);
  }, [dispatch]);

  const handleChangeUserName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    [],
  );

  const handleSaveUserName = useCallback(() => {
    dispatch(connectWebsocket({ username: userName }));
    savePlayerNameToLocalStorage(userName);
    setIsModalOpened(false);
    setUserName('');
  }, [userName, dispatch]);

  return (
    <PortalModal isOpened={isModalOpened}>
      <Overlay />
      <Wrapper>
        <TextFieldWrapper>
          <TextField
            value={userName}
            onChange={handleChangeUserName}
            label="Please, enter your nickname"
            placeholder="nickname"
          />
        </TextFieldWrapper>
        <ButtonsWrapper>
          <Button variant={ButtonVariants.primary} onClick={handleSaveUserName}>
            Save
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    </PortalModal>
  );
}

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;
const Wrapper = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  background: ${({ theme }) => theme.colors.background.main};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  transform: translate(-50%, -50%);
  outline: none;
  width: 600px;
  height: 150px;
  padding: 16px;
`;

const TextFieldWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 0;
`;

const ButtonsWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export default memo(SetPlayerName);
