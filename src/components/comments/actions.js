import { call, put } from 'redux-saga/effects'
import * as CONSTANTS from './constants'

const api = url => fetch(url).then(response => response.json())

export const getComments = () => ({
  type: CONSTANTS.GET_COMMENTS_REQUEST
})

export function* handleGetComments(action) {
  try {
    const comments = yield call(api, 'https://5a94c7a65d50d80012d016d9.mockapi.io/api/comments')
    yield put({ type: CONSTANTS.GET_COMMENTS_SUCCESS, payload: comments })
  } catch (e) {
    console.error(e)
  } finally {
  }
}
