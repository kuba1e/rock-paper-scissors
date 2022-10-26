import { EVENTS_TO_EMIT } from 'shared/config';
import { createAction } from 'shared/lib';

export const chooseElement = createAction<string>(
  EVENTS_TO_EMIT.CHOOSE_ELEMENT,
);
