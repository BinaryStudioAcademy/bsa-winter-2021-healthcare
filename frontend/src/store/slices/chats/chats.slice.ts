import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification as notificationService, chatApi } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IMember, IMessage, IMessagePayload } from 'common/interfaces';
import { HttpError } from 'exceptions';

interface IChats {
  messages: IMessage[];
  members: IMember[];
  selectedMember?: IMember;
}

const initialState: IChats = {
  messages: [
    {
      id: '1122334455',
      userId: '4d2c19a7-f15c-4fed-aed7-52072b3bd091',
      text: 'Lorem ipsum dolor sit amet, adipiscing elit. Dictum?',
      createdAt: '2021-03-20T15:52:12.866Z',
      updatedAt: '',
    },
    {
      id: '5544332211',
      userId: '54321',
      text: 'Ut nunc aliquam, amet, aliquet adipiscing mi gravida.',
      createdAt: '2021-03-20T15:54:12.866Z',
      updatedAt: '',
    },
  ],

  members: [
    {
      id: '111',
      name: 'Giana Levin',
      avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
    }, {
      id: '222',
      name: 'Jakob Rosser',
      avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
    }, {
      id: '333',
      name: 'Jaylon Curtis',
      avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
    }, {
      id: '444',
      name: 'Dulce Mango',
      avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
    }, {
      id: '555',
      name: 'Erin Dorwart',
      avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
    }, {
      id: '666',
      name: 'Jakob Rosser',
      avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
    }, {
      id: '777',
      name: 'Leo Torff',
      avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
    },
  ],

  selectedMember: {
    id: '111',
    name: 'Giana Levin',
    avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702174_users_512x512.png',
  },
};

const { reducer, actions } = createSlice({
  name: ReducerName.CHATS,
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
    },

    setMessages: (state, action: PayloadAction<IMessage[]>) => {
      state.messages = action.payload;
    },

    addMember: (state, action: PayloadAction<IMember>) => {
      !state.members.some(member => member.id === action.payload.id) && state.members.unshift(action.payload);
    },

    selectMember: (state, action: PayloadAction<string>) => {
      state.selectedMember = state.members.find(
        (member: IMember) => member.id === action.payload,
      );
    },

  },
});

const sendMessage = (formData: IMessagePayload): AppThunk => async dispatch => {
  try {
    const response = await chatApi.sendMessage(formData);
    dispatch(actions.addMessage(response));

  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addMember = (member: IMember): AppThunk => dispatch => {
  dispatch(actions.addMember(member));
  dispatch(selectMember(member.id));
};

const selectMember = (id: string): AppThunk => async dispatch => {
  try {
    dispatch(actions.selectMember(id));

    const response = await chatApi.loadMemberMessages(id);
    dispatch(actions.setMessages(response));

  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const loadFilteredMembersAsOptions = (name: string, callback: any): AppThunk => async () => {
  try {
    const response = await chatApi.getMembersByName(name);
    callback(response.map((member: IMember) => ({
      label: member.name,
      value: member,
    })));

  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const ChatsActionCreator = {
  ...actions,
  addMember,
  selectMember,
  sendMessage,
  loadFilteredMembersAsOptions,
};

export { ChatsActionCreator, reducer };
