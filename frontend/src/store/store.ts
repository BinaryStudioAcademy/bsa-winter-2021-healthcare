import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { ReducerName } from 'common/enums';
import {
  userReducer,
  authReducer,
  doctorsReducer,
  clinicsReducer,
} from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.AUTH]: authReducer,
    [ReducerName.CLINICS]: clinicsReducer,
    [ReducerName.TOASTR]: toastrReducer,
    [ReducerName.DOCTORS]: doctorsReducer,
    [ReducerName.USERS]: userReducer,
  },
});

export { store };
