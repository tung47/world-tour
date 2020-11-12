import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

// Country Constants
export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'
export const FETCH_COUNTRIES_SUCCEED = 'FETCH_COUNTRIES_SUCCEED'
export const FETCH_COUNTRIES_FAIL = 'FETCH_COUNTRIES_FAIL'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

// UI Constants
export const HANDLE_INPUT_TO_SAGA = 'HANDLE_INPUT_TO_SAGA'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const TOGGLE_MENU = 'TOGGLE_MENU'

// Props Types
export type Country = {
  name: string
  flag: string
  population: number
  languages: { name: string }[]
  region: string
}

export type Params = {
  name: string
}

export type AsyncAction<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

// Country Actions Types
export type FetchCountriesRequestAction = {
  type: typeof FETCH_COUNTRIES_REQUEST
}

export type FetchCountriesSucceedAction = {
  type: typeof FETCH_COUNTRIES_SUCCEED
  payload: {
    countries: Country[]
  }
}

export type FetchCountriesFailAction = {
  type: typeof FETCH_COUNTRIES_FAIL
  payload: {
    error: string
  }
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    name: string
  }
}

export type CountriesAction =
  | FetchCountriesRequestAction
  | FetchCountriesSucceedAction
  | FetchCountriesFailAction
  | AddCountryAction
  | RemoveCountryAction

// UI Actions Types
export type SearchCountryAction = {
  type: typeof SEARCH_COUNTRY
  payload: {
    searchKey: string
  }
}

export type HandleInputToSagaAction = {
  type: typeof HANDLE_INPUT_TO_SAGA
  payload: {
    searchKey: string
  }
}

export type ToggleMenuAction = {
  type: typeof TOGGLE_MENU
  payload: {
    isMenuOpened: boolean
  }
}

export type UiAction =
  | SearchCountryAction
  | HandleInputToSagaAction
  | ToggleMenuAction

// States Types
export type CountriesState = {
  inCart: Country[]
  countries: Country[]
  error?: string | null
}

export type UiState = {
  searchKey: string
  isMenuOpened: boolean
}

export type AppState = {
  countries: CountriesState
  ui: UiState
}
