import { GetActionType } from 'shared/lib';
import * as actions from '../../entities/element/model/actions';

export type ElementActions = GetActionType<typeof actions>;
