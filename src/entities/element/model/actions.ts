import { EVENTS_TO_EMIT } from 'shared/config';
import { createAction } from 'shared/lib/actionCreator';

export const chooseElement = createAction<
  string,
  typeof EVENTS_TO_EMIT.CHOOSE_ELEMENT
>(EVENTS_TO_EMIT.CHOOSE_ELEMENT);
