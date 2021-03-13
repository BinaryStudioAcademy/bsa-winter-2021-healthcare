import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer, authReducer } from './slices';
import { reducer as toastrReducer } from 'react-redux-toastr';

const store = configureStore({
  reducer: {
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.AUTH]: authReducer,
    [ReducerName.TOASTR]: toastrReducer,
  },
});

export { store };
