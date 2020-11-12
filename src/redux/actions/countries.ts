import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCEED,
  FETCH_COUNTRIES_FAIL,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  Country,
  CountriesAction,
} from '../../types'

export function fetchCountriesRequest(): CountriesAction {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  }
}

export function fetchCountriesSucceed(countries: Country[]): CountriesAction {
  return {
    type: FETCH_COUNTRIES_SUCCEED,
    payload: {
      countries: countries,
    },
  }
}

export function fetchCountriesFail(error: string): CountriesAction {
  return {
    type: FETCH_COUNTRIES_FAIL,
    payload: {
      error: error,
    },
  }
}

export function addCountry(country: Country): CountriesAction {
  return {
    type: ADD_COUNTRY,
    payload: {
      country: country,
    },
  }
}

export function removeCountry(name: string): CountriesAction {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      name: name,
    },
  }
}
