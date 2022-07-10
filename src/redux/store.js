import { configureStore } from '@reduxjs/toolkit';
import { middleware } from 'redux/storeConfig/middleware';
import { persistStore, persistReducer } from 'redux-persist';
import { todosPersistConfig } from 'redux/todos/todos-persistConfig';
import todosReducer from './todos/todos-reducer';

const store = configureStore({
  reducer: {
    todos: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
