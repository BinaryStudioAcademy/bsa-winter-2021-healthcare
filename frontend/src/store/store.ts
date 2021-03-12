import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import {
  counterReducer,
  authReducer,
  clinicReducer
} from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.AUTH]: authReducer,
    [ReducerName.CLINICS]: clinicReducer
  },
});

export { store };
