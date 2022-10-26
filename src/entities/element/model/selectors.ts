import { RootState } from 'app/redux';

export const getChosenElement = (state: RootState) =>
  state.element.chosenElement;
