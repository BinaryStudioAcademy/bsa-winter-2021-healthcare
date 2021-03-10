import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer, registrationReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.REGISTRATION]: registrationReducer,
  },
});

export { store };
