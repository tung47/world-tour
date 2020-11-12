import { takeLatest, call, put } from 'redux-saga/effects'

import { FETCH_COUNTRIES_REQUEST, Country } from './../../types'
import { fetchCountriesSucceed, fetchCountriesFail } from '../actions'

export async function getAllCountries() {
  const URL = 'https://restcountries.eu/rest/v2/all'
  const cacheStorage = await caches.open('AllCountries')
  let cacheResponse = await cacheStorage.match(URL)

  if (!cacheResponse || !cacheResponse.ok) {
    await cacheStorage.add(URL)
    cacheResponse = await cacheStorage.match(URL)
  }

  return await cacheResponse?.json()
}

function* fetchCountries() {
  try {
    const allCountries: Country[] = yield call(getAllCountries)

    // sort countries name in ascending order
    allCountries.sort((a, b) => (a.name > b.name ? 1 : -1))

    yield put(fetchCountriesSucceed(allCountries))
  } catch (exception) {
    yield put(fetchCountriesFail(exception))
  }
}

export default [takeLatest(FETCH_COUNTRIES_REQUEST, fetchCountries)]
