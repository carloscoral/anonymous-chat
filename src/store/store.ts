import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { systemReducer } from './system/reducers/systemReducer';
import { uiReducer } from './system/reducers/uiReducer';
import { chatReducer } from './chat/reducers/chatReducer'

const composeEnhancers =
  (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers( {
  system: systemReducer,
  ui: uiReducer,
  chat: chatReducer
} );

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
);
