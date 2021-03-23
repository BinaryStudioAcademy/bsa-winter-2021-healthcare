import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { ReducerName } from 'common/enums';
import {
  userReducer,
  authReducer,
  doctorsReducer,
  clinicsReducer,
  notificationReducer,
  mapReducer,
  profileReducer,
  doctorDetailsReducer,
  permissionsReducer,
  messagesReducer,
} from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.USERS]: userReducer,
    [ReducerName.AUTH]: authReducer,
    [ReducerName.CLINICS]: clinicsReducer,
    [ReducerName.TOASTR]: toastrReducer,
    [ReducerName.DOCTORS]: doctorsReducer,
    [ReducerName.USERS]: userReducer,
    [ReducerName.NOTIFICATIONS]: notificationReducer,
    [ReducerName.MAP]: mapReducer,
    [ReducerName.PROFILE]: profileReducer,
    [ReducerName.DOCTOR_DETAILS]: doctorDetailsReducer,
    [ReducerName.PERMISSIONS]: permissionsReducer,
    [ReducerName.MESSAGES]: messagesReducer,
  },
});

export { store };
