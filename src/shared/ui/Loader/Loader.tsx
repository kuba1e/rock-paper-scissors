import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const loader = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

type Props = {
  width?: string | number;
  height?: string | number;
};

const Loader = styled('div')<Props>`
  width: ${({ width }) => width ?? 20}px;
  height: ${({ height }) => height ?? 20}px;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid black;
    border-color: ${({ theme }) =>
      `${theme.colors.ui.text} ${theme.colors.background.disabled} ${theme.colors.background.disabled} ${theme.colors.background.disabled}`};
    animation: ${loader} 1.2s linear infinite;
  }
`;

export default Loader;
