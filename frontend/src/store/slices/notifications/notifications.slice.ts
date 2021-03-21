import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { INotification } from 'common/interfaces';
import { notification } from 'services';
import { HttpError } from 'exceptions';

interface IState {
  notifications: INotification[];
}

const initialState: IState = {
  notifications: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.NOTIFICATIONS,
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<INotification[]>) => {
      state.notifications = action.payload;
    },
  },
});

const getNotifications = (): AppThunk => async (dispatch) => {
  try {
    const notifications = await notification.getNotifications();
    dispatch(actions.setNotifications(notifications));
  } catch (error) {
    if (error instanceof HttpError) {
      notification.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const NotificationsActionCreator = {
  ...actions,
  getNotifications,
};

export { NotificationsActionCreator, reducer };
