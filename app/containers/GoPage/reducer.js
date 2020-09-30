/*
 *
 * GoPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GO_ACTION,
  GO_RESULT_ACTION,
  GO_ERROR_ACTION,
} from './constants';

export const initialState = {
  go: false,
  goResult: false,
  goError: false,
};

/* eslint-disable default-case, no-param-reassign */
const goPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GO_ACTION:
        draft.go = action.payload;
        break;
      case GO_RESULT_ACTION:
        draft.goResult = action.payload;
        draft.goError = initialState.goError;
        break;
      case GO_ERROR_ACTION:
        draft.goError = action.payload;
        draft.goResult = initialState.goResult;
        break;
    }
  });

export default goPageReducer;
