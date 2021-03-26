import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  notification as notificationService,
  messagesApi,
  userApi,
} from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IUser, IMessage, IMessagePayload } from 'common/interfaces';
import { HttpError } from 'exceptions';

interface IMessages {
  messages: IMessage[];
  users: IUser[];
  selectedUser?: IUser;
}

const initialState: IMessages = {
  messages: [],
  users: [],
  selectedUser: undefined,
};

const { reducer, actions } = createSlice({
  name: ReducerName.MESSAGES,
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.unshift(action.payload);
    },

    setMessages: (state, action: PayloadAction<IMessage[]>) => {
      state.messages = action.payload;
    },

    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
      state.messages = [];
    },

    selectUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = state.users.find(
        (user: IUser) => user.id === action.payload,
      );
    },
  },
});

const sendMessage = (formData: IMessagePayload): AppThunk => async (
  dispatch,
) => {
  try {
    const response = await messagesApi.sendMessage(formData);
    dispatch(actions.addMessage(response));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const selectUser = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.selectUser(id));

    const response = await messagesApi.loadUserMessages(id);
    dispatch(actions.setMessages(response));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const loadFilteredUsersAsChats = (name: string): AppThunk => async (
  dispatch,
) => {
  try {
    const response = await userApi.filterUsersByName(name);
    dispatch(actions.setUsers(response));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const MessagesActionCreator = {
  ...actions,
  selectUser,
  sendMessage,
  loadFilteredUsersAsChats,
};

export { MessagesActionCreator, reducer };
