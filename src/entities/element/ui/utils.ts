import { SVG } from 'shared/resources/svg';
import { ElementType } from '../config';

export const mapElementTypeToIconProps = {
  [ElementType.PAPER]: { src: SVG.paper },
  [ElementType.ROCK]: { src: SVG.rock },
  [ElementType.SCISSORS]: { src: SVG.scissors },
};
