/*
 *
 * HistoryPage reducer
 *
 */
import produce from 'immer';
import { LINK_SUBMIT_RESULT_ACTION } from 'containers/HomePage/constants';
import {
  DEFAULT_ACTION,
  RESET_NEW_LINK_FLAG_ACTION,
  STORAGE_INITIALIZED_FLAG_ACTION,
  RESET_STORAGE,
} from './constants';

export const initialState = {
  newLinkFlag: false,
  links: [],
  storageInitializedFlag: false,
};

/* eslint-disable default-case, no-param-reassign */
const historyPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case RESET_NEW_LINK_FLAG_ACTION:
        draft.newLinkFlag = initialState.newLinkFlag;
        break;
      case LINK_SUBMIT_RESULT_ACTION:
        draft.newLinkFlag = !initialState.newLinkFlag;
        draft.links.push(action.payload);
        break;
      case STORAGE_INITIALIZED_FLAG_ACTION:
        draft.links = action.payload;
        draft.storageInitializedFlag = !initialState.storageInitializedFlag;
        break;
      case RESET_STORAGE:
        draft.links = initialState.links;
        draft.newLinkFlag = !initialState.newLinkFlag;
        break;
    }
  });

export default historyPageReducer;
