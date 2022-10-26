import { combineReducers } from 'redux';

import { player } from 'entities/player/model';
import { element } from 'entities/element/model';
import { score } from 'entities/score/model';

export const reducers = {
  player,
  element,
  score,
};

export const rootReducer = combineReducers(reducers);
