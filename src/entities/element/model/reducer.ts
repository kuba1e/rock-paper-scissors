import { gameFinished } from 'entities/player/model';
import { ElementActions } from 'shared/types/element';
import * as actions from './actions';

type State = {
  chosenElement: string | null;
};

const initialState: State = {
  chosenElement: null,
};

export const element = (state = initialState, action: ElementActions) => {
  switch (action.type) {
    case actions.chooseElement.type:
      return {
        ...state,
        chosenElement: action.payload,
      };
    case gameFinished.type:
      return {
        ...state,
        chosenElement: null,
      };
    default:
      return state;
  }
};
