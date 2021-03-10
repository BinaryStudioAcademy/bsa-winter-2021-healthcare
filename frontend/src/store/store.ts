import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer, authReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.USERS]: counterReducer,
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.AUTH]: authReducer,
  },
});

export { store };
