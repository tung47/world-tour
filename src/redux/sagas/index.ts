import { all } from 'redux-saga/effects'

import countriesSagas from './countries'
import uiSagas from './ui'
import statesSagas from './states'

export default function* rootSaga() {
  yield all([...countriesSagas, ...uiSagas, ...statesSagas])
}
