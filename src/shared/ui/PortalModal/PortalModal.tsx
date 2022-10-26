import styled from "@emotion/styled";
import { ReactNode, useEffect, useState, memo } from "react";
import { createPortal } from "react-dom";

type Props = { isOpened: boolean;
  closeOnOutsideClick?: boolean;
  hideBackdrop?:boolean
  onClose?: () => void;
  children: ReactNode | string;
  }

function PortalModal ({onClose,closeOnOutsideClick,isOpened,hideBackdrop,children}:Props) {

  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpened) {
      const div = document.createElement('div');
      document.body.appendChild(div);
      setTarget(div);
      return () => {
        document.body.removeChild(div);
      };
    }
    return () => {};
  }, [isOpened]);

  if (!isOpened || !target) {
    return null;
  }

  const handleOutSideClick = () => {
    if (!closeOnOutsideClick) {
      return;
    }

    if (onClose) {
      onClose();
    }
  };

  return createPortal(
    hideBackdrop ? (
      children
    ) :
    (<Backdrop onClick={handleOutSideClick}>
      {children}
    </Backdrop>),
    target,
  );
}

const Backdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;



export default memo(PortalModal)