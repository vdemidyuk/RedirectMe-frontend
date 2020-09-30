import { takeLatest, select, call, put } from 'redux-saga/effects';
import request, { initPost } from 'utils/request';

import { makeSelectLinkSubmitting } from 'containers/HomePage/selectors';
import { linkSubmitResultAction, linkSubmitErrorAction } from './actions';
import { LINK_SUBMIT_ACTION } from './constants';

export function* linkSubmit() {
  const newLink = yield select(makeSelectLinkSubmitting());
  const requestURL = `${process.env.API_BASE_URL}/v1/link/create`;

  try {
    const result = yield call(
      request,
      requestURL,
      initPost({ link: newLink.uri }),
    );
    yield put(linkSubmitResultAction(result));
  } catch (err) {
    yield put(linkSubmitErrorAction(err));
  }
}

export default function* homePageSaga() {
  yield takeLatest(LINK_SUBMIT_ACTION, linkSubmit);
}
