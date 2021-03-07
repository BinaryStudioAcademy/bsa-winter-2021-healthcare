import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer, editUserReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.EDIT_USER]: editUserReducer,
    [ReducerName.USERS]: counterReducer,
    [ReducerName.COUNTER]: counterReducer,
  },
});

export { store };
