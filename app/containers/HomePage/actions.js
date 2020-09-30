/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  LINK_COPY_ACTION,
  LINK_NEW_ACTION,
  LINK_SUBMIT_ERROR_ACTION,
  LINK_SUBMIT_RESULT_ACTION,
  LINK_SUBMIT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function linkCopyAction() {
  return {
    type: LINK_COPY_ACTION,
  };
}

export function linkNewAction() {
  return {
    type: LINK_NEW_ACTION,
  };
}

export function linkSubmitAction(payload) {
  return {
    type: LINK_SUBMIT_ACTION,
    payload,
  };
}

export function linkSubmitErrorAction(payload) {
  return {
    type: LINK_SUBMIT_ERROR_ACTION,
    payload,
  };
}

export function linkSubmitResultAction(payload) {
  return {
    type: LINK_SUBMIT_RESULT_ACTION,
    payload,
  };
}
