import { css, ThemeArg } from '@emotion/react';
import { ButtonSizes, ButtonVariants } from './Button';

const primaryVariantStyles = ({ theme }: ThemeArg) => css`
  color: ${theme.colors.ui.secondary};
  background-color: ${theme.colors.ui.primary};

  &:focus,
  &:hover,
  &.active {
    background-color: ${theme.colors.ui.primary};
  }
`;

const textVariant = ({ theme }: ThemeArg) => css`
  padding: 0;
  color:  ${theme.colors.ui.text};

  &:focus,
  &:hover,
  &.active {
    color: ${theme.colors.ui.primary};
  }
`;

export function getVariantStyles(variant: ButtonVariants) {
  switch (variant) {
    case ButtonVariants.primary: {
      return primaryVariantStyles;
    }

    case ButtonVariants.text: {
      return textVariant;
    }

    default: {
      return undefined;
    }
  }
}

export function getSizeStyles(size: ButtonSizes, childrenIsIcon: boolean) {
  switch (size) {
    case ButtonSizes.default: {
      if (childrenIsIcon) {
        return css`
          min-height: 40px;
          min-width: 40px;
        `;
      }

      return css`
        padding: 10px 16px;
        height: 40px;
      `;
    }

    case ButtonSizes.compact: {
      if (childrenIsIcon) {
        return css`
          min-width: 32px;
          min-height: 32px;
        `;
      }

      return css`
        padding: 6px 16px;
        height: 32px;
      `;
    }

    default: {
      return undefined;
    }
  }
}
