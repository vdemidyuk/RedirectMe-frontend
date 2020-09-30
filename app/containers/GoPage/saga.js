import { takeLatest, select, call, put } from 'redux-saga/effects';
import request, { initPost } from 'utils/request';

import { goErrorAction, goResultAction } from './actions';
import { GO_ACTION } from './constants';
import { makeSelectGo } from './selectors';

export function* go() {
  const goLink = yield select(makeSelectGo());
  const requestURL = `${process.env.API_BASE_URL}/v1/link/process`;

  try {
    const result = yield call(request, requestURL, initPost({ link: goLink }));

    yield put(goResultAction(result));
  } catch (err) {
    yield put(goErrorAction(err));
  }
}

export default function* goPageSaga() {
  yield takeLatest(GO_ACTION, go);
}
