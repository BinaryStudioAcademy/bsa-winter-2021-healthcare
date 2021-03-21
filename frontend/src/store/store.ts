import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { ReducerName } from 'common/enums';
import {
  userReducer,
  authReducer,
  doctorsReducer,
  clinicsReducer,
  profileReducer,
  appointmentReducer,
} from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.USERS]: userReducer,
    [ReducerName.AUTH]: authReducer,
    [ReducerName.CLINICS]: clinicsReducer,
    [ReducerName.TOASTR]: toastrReducer,
    [ReducerName.DOCTORS]: doctorsReducer,
    [ReducerName.USERS]: userReducer,
    [ReducerName.PROFILE]: profileReducer,
    [ReducerName.APPOINTMENTS]: appointmentReducer,
  },
});

export { store };
