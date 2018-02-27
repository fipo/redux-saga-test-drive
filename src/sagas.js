import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from './components/comments/constants'
import { handleGetComments } from './components/comments/actions'

export default function* sagas() {
  yield takeLatest(CONSTANTS.GET_COMMENTS_REQUEST, handleGetComments)
}
