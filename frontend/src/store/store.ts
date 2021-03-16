import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { ReducerName } from 'common/enums';
import { counterReducer, authReducer, doctorsReducer, clinicReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.AUTH]: authReducer,
    [ReducerName.CLINICS]: clinicReducer,
    [ReducerName.TOASTR]: toastrReducer,
    [ReducerName.DOCTORS]: doctorsReducer
  },
});

export { store };
