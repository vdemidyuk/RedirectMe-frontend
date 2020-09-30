/*
 *
 * GoPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GO_ACTION,
  GO_ERROR_ACTION,
  GO_RESULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function goAction(payload) {
  return {
    type: GO_ACTION,
    payload,
  };
}

export function goErrorAction(payload) {
  return {
    type: GO_ERROR_ACTION,
    payload,
  };
}

export function goResultAction(payload) {
  return {
    type: GO_RESULT_ACTION,
    payload,
  };
}
