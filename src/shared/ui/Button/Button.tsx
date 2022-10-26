import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, memo } from 'react';
import { getSizeStyles, getVariantStyles } from './utils';

export enum ButtonVariants {
  'primary' = 'primary',
  'text' = 'text',
}

export enum ButtonSizes {
  'default' = 'default',
  'compact' = 'compact',
}

export type Props = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  active?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'>;

export const Button: React.FC<Props> = ({
  children,
  variant = ButtonVariants.primary,
  size = ButtonSizes.default,
  prefix,
  suffix,
  active = false,
  ...rest
}) => {
  const childrenIsIcon = !prefix && !suffix && typeof children !== 'string';

  let className = rest.className ?? '';

  if (active) {
    className += 'active';
  }

  return (
    <Wrapper
      {...rest}
      className={className}
      variant={variant}
      size={size}
      childrenIsIcon={childrenIsIcon}
    >
      {prefix && <PrefixWrapper>{prefix}</PrefixWrapper>}
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {suffix && <SuffixWrapper>{suffix}</SuffixWrapper>}
    </Wrapper>
  );
};

type WrapperProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
  childrenIsIcon: boolean;
};

const Wrapper = styled('button')<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  -webkit-appearance: none;
  border: none;
  outline: none;
  border-radius: 6px;
  line-height: 18px;
  transition: all 200ms cubic-bezier(0.5, 0, 0.1, 1);
  letter-spacing: 0.64px;
  font-weight: 600;
  ${({ size, childrenIsIcon }) => getSizeStyles(size, childrenIsIcon)};
  ${({ variant }) => getVariantStyles(variant)};

  &[disabled] {
    cursor: not-allowed;
  }
`;

const ChildrenWrapper = styled('span')`
  div {
    display: flex;
  }
`;

const BasePrefixWrapper = styled('div')`
  display: flex;
  align-items: center;

  div {
    display: flex;
  }
`;

const PrefixWrapper = styled(BasePrefixWrapper)`
  margin-right: 8px;
`;

const SuffixWrapper = styled(BasePrefixWrapper)`
  margin-left: 8px;
`;

export default memo(Button);
