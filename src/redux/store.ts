import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

let initState: AppState = {
  countries: {
    inCart: [],
    countries: [],
    error: null,
  },
  ui: {
    searchKey: '',
    isMenuOpened: false,
  },
}

const savedState = localStorage.getItem('state') || ''
if (savedState) {
  initState = JSON.parse(savedState)
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
