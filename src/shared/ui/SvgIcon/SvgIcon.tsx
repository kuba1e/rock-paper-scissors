import { memo } from 'react';
import { ReactSVG } from 'react-svg';

type Props = {
  src: string;
};

function SvgIcon({ src, ...props }: Props) {
  return <ReactSVG src={src} {...props} />;
}

export default memo(SvgIcon) ;
