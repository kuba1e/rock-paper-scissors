import { css,  ThemeArg } from '@emotion/react';
import styled from '@emotion/styled';
import {
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  memo,
  MutableRefObject,
  useCallback,
  useState,
} from 'react';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  label?: string;
  placeholder?: string;
  className?: string;
  rightContent?: JSX.Element;
  leftContent?: JSX.Element;
  hasError?: boolean;
  isActive?: boolean;
  readOnly?: boolean;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  maxLength?: number;
  disabled?: boolean;
  outerRef?: MutableRefObject<HTMLDivElement | null>;
};

const TextField = ({
  value = '',
  label,
  placeholder,
  rightContent,
  leftContent,
  inputRef,
  outerRef,
  isActive = false,
  disabled = false,
  className = '',
  maxLength,
  onChange,
  onClick,
  onBlur = () => null,
  onFocus = () => null,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus(event);
    },

    [onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur(event);
    },
    [onBlur],
  );

  return (
    <Wrapper
      className={className}
      isFocused={isFocused || isActive}
      disabled={disabled}
      onClick={onClick}
      ref={outerRef}
    >
      {label ? <LabelWrapper>{label}</LabelWrapper> : null}
      {leftContent ? leftContent : null}
      <StyledInput
        ref={inputRef}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {rightContent ? rightContent : null}
    </Wrapper>
  );
};

const mapStyles = {
  focus: `${({ theme }:ThemeArg) => css`
    border-color: ${theme.colors.ui.border};
  `}`,
};

const Wrapper = styled('div')<{
  isFocused?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  position: relative;
  height: 32px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.background.disabled};
  background-color: ${({ theme }) => theme.colors.background.main};
  ${({ isFocused }) => isFocused && mapStyles.focus};
`;

const StyledInput = styled('input')`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  border-radius: 6px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.ui.primary};
  background-color: ${({ theme }) => theme.colors.background.main};
  &:focus {
    border: none;
    outline: none;
  }
`;

const LabelWrapper = styled('label')`
  position: absolute;
  height: 16px;
  bottom: calc(100% + 3px);
  left: 0;
  color: ${({ theme }) => theme.colors.ui.text};
  font-size: 12px;
  font-weight: 600;
`;

export default memo(TextField);
