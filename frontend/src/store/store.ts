import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { userReducer, authReducer, doctorsReducer, clinicReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.CLINIC]: clinicReducer,
    [ReducerName.USERS]: userReducer,
    [ReducerName.DOCTORS]: doctorsReducer,
    [ReducerName.AUTH]: authReducer
  },
});

export { store };
