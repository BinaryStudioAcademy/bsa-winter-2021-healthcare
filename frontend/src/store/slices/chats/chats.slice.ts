import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { notification as notificationService, userApi } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
// import { IEditUserPayload, IUser } from 'common/interfaces';
// import { HttpError } from 'exceptions';

type Message = {
  id: string;
  to: string;
  text: string;
  createdAt: string,
  updatedAt: string,
};

type Member = {
  id: string,
  name: string,
  avatarPath: string,
};

interface IState {
  messages: Message[];
  members: Member[];
  selectedMember?: Member;
}

const initialState: IState = {
  messages: [
    {
      id: '1122334455',
      to: '4d2c19a7-f15c-4fed-aed7-52072b3bd091',
      text: 'Lorem ipsum dolor sit amet, adipiscing elit. Dictum?',
      createdAt: '2021-03-20T15:52:12.866Z',
      updatedAt: '',
    },
    {
      id: '5544332211',
      to: '54321',
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
    // addUsers: (state, action: PayloadAction<IUser[]>) => {
    //   state.users = [...state.users, ...action.payload];
    // },
    // editUser: (
    //   state,
    //   action: PayloadAction<{ id: string | undefined; data: IUser[] }>,
    // ) => {
    //   const id = action.payload.id;
    //   state.users = state.users.map((user: IUser) =>
    //     user.id === id ? action.payload.data[0] : user,
    //   );
    // },
    addMember: (state, action: PayloadAction<any>) => {
      state.messages.push({ ...action.payload, id: Date.now(), createdAt: new Date().toISOString(), updatedAt: '' });
    },
    selectMember: (state, action: PayloadAction<string>) => {
      state.selectedMember = state.members.find(
        (member: Member) => member.id === action.payload,
      );
    },
  },
});

// const getUsers = (): AppThunk => async (dispatch) => {
//   try {
//     const response = await userApi.getUsers();
//     dispatch(actions.addUsers(response));
//   } catch (error) {
//     if (error instanceof HttpError) {
//       notificationService.error(`Error ${error.status}`, error.messages);
//     }
//     throw error;
//   }
// };
// const editUser = (userInfo: IEditUserPayload): AppThunk => async (dispatch) => {
//   try {
//     const response: IUser[] = await userApi.editUser(
//       userInfo.id as string,
//       userInfo,
//     );
//     response
//       ? dispatch(actions.editUser({ id: userInfo.id, data: response }))
//       : null;
//   } catch (error) {
//     if (error instanceof HttpError) {
//       notificationService.error(`Error ${error.status}`, error.messages);
//     }
//     throw error;
//   }
// };
// const addUser = (userInfo: IUser): AppThunk => async (dispatch) => {
//   try {
//     const response = await userApi.registerUser(userInfo);
//     dispatch(actions.addUsers([response]));
//   } catch (error) {
//     if (error instanceof HttpError) {
//       notificationService.error(`Error ${error.status}`, error.messages);
//     }
//     throw error;
//   }
// };

const sendMessage = (formData: any): AppThunk => dispatch => {
  dispatch(actions.addMember(formData));
};

const selectMember = (id: string): AppThunk => dispatch => {
  dispatch(actions.selectMember(id));
};

const ChatsActionCreator = {
  ...actions,
  // getUsers,
  // addUser,
  // editUser,
  selectMember,
  sendMessage,
};

export { ChatsActionCreator, reducer };
