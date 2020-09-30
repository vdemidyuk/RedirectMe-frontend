/*
 *
 * HistoryPage actions
 *
 */

import {
  DEFAULT_ACTION,
  RESET_NEW_LINK_FLAG_ACTION,
  STORAGE_INITIALIZED_FLAG_ACTION,
  RESET_STORAGE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function resetNewLinkFlagAction() {
  return {
    type: RESET_NEW_LINK_FLAG_ACTION,
  };
}

export function storageInitializedFlagAction(payload) {
  return {
    type: STORAGE_INITIALIZED_FLAG_ACTION,
    payload,
  };
}

export function resetStorageAction() {
  return {
    type: RESET_STORAGE,
  };
}
