/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  // LINK_COPY_ACTION,
  LINK_NEW_ACTION,
  LINK_SUBMIT_ERROR_ACTION,
  LINK_SUBMIT_RESULT_ACTION,
  LINK_SUBMIT_ACTION,
} from './constants';

export const initialState = {
  copied: false,
  link: false,
  submitting: false,
  submitError: false,
  submitResult: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LINK_SUBMIT_ACTION:
        draft.submitting = action.payload;
        break;
      case LINK_SUBMIT_RESULT_ACTION:
        draft.submitting = initialState.submitting;
        draft.submitResult = action.payload;
        draft.submitError = initialState.submitError;
        break;
      case LINK_SUBMIT_ERROR_ACTION:
        draft.submitting = initialState.submitting;
        draft.submitResult = initialState.submitResult;
        // console.log('action', action)
        draft.submitError = action.payload;
        break;
      case LINK_NEW_ACTION:
        // draft = initialState;
        draft.submitting = initialState.submitting;
        draft.submitResult = initialState.submitResult;
        draft.submitError = initialState.submitError;
        draft.link = initialState.link;
        break;
    }
  });

export default homePageReducer;
