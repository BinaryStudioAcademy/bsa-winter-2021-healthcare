import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.USERS]: counterReducer,
    [ReducerName.COUNTER]: counterReducer,
  },
});

export { store };
