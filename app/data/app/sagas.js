import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchReposSuccess, fetchReposFail } from './actions'
import { API_URL, FETCH_REPOS } from './constants'
import request from 'common/request'

export function* fetchReposRequest(action) {
  const requestURL = `${API_URL}/${action.payload}/repos`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    })
    if (response) {
      let repos = null
      yield response.json().then(result => {
        repos = result
      })
      yield put(fetchReposSuccess(repos))
    }
  } catch (err) {
    yield put(fetchReposFail(err))
  }
}

export default function* watchFetchReposRequestc() {
  yield takeLatest(FETCH_REPOS, fetchReposRequest)
}
