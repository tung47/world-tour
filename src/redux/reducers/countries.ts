import {
  CountriesAction,
  CountriesState,
  FETCH_COUNTRIES_SUCCEED,
  FETCH_COUNTRIES_FAIL,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
} from '../../types'

function countriesReducer(
  state: CountriesState = {
    inCart: [],
    countries: [],
    error: null,
  },
  action: CountriesAction
): CountriesState {
  switch (action.type) {
  case FETCH_COUNTRIES_SUCCEED: {
    const { countries } = action.payload
    return { ...state, countries: [...countries] }
  }

  case FETCH_COUNTRIES_FAIL: {
    const { error } = action.payload
    return { ...state, error: error }
  }

  case ADD_COUNTRY: {
    const { country } = action.payload
    return { ...state, inCart: [...state.inCart, country] }
  }

  case REMOVE_COUNTRY: {
    const { name } = action.payload

    const newInCart = state.inCart.filter((country) => country.name !== name)
    return { ...state, inCart: [...newInCart] }
  }

  default:
    return state
  }
}

export default countriesReducer
