import { configureStore } from '@reduxjs/toolkit';
import { middleware } from 'redux/storeConfig/middleware';
// import { persistStore } from 'redux-persist';
// import { todosPersistConfig } from 'redux/todos/todos-persistConfig';
import todosReducer from './todos/todos-reducer';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    // todos: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware,
});

// const persistor = persistStore(store);

export { store };
// export { store, persistor };
