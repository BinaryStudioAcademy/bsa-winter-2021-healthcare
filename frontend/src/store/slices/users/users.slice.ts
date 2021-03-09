import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'services/services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IUser, UserType, UserSex, IRegisterPayload } from 'healthcare-shared';

interface IState {
  value: number;
  users: IUser[];
  editUser?: IUser;
}
const DEFAULT_USER_INSTANCE = {
  'id': '',
  'name': '',
  'surname': '',
  'sex': UserSex.FEMALE,
  'type': UserType.PATIENT,
  'birthdate': new Date().toString(),
  'phone': '',
  'password': '',
  'email': '',
  'imagePath': '',
  'diagnosis': '',
  'createdAt': '',
  'updatedAt': '',
};

const initialState: IState = {
  value: 0,
  users: [
    {
      id: '1',
      name: '1',
      surname: '1',
      sex: UserSex.FEMALE,
      type: UserType.DOCTOR,
      birthdate: 'asd',
      phone: '4',
      password: '5',
      email: '6',
      imagePath: '7',
      diagnosis: '9',
      createdAt: 'asd',
      updatedAt: 'asd',
    },
  ],
};

const { reducer, actions } = createSlice({
  name: ReducerName.COUNTER,
  initialState,
  reducers: {
    setEditUser: (state, action: PayloadAction<string>) => {
      state.editUser = {
        ...state.users
          .concat()
          .filter((user: IUser) => user.id === action.payload)[0],
      };
    },
    addUsers:(state, action: PayloadAction<IUser[]>) => {

      state.users = [state.users[0], ...action.payload];
    },
    editUser:(state, action: PayloadAction<{id:string|undefined,data:IUser}>) => {
      const id = action.payload.id;
      state.users = [...state.users.map((user:IUser)=> user.id === id ? action.payload.data : user)];
    },
    dltUser:(state, action: PayloadAction<string>) => {
      state.users = [...state.users.filter((user:IUser)=> user.id !== action.payload)];
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(actions.incrementByAmount(amount));
  }, 1000);
};

const getUsers = (): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    const response = await userApi.getUsers();
    dispatch(actions.addUsers(response))
  };
  asyncFetch();
};
const getUser = (id:string): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    const response = await userApi.getUser(id);
  };
  asyncFetch();
};
const editUser = (userInfo: IUser): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    const response = await userApi.editUser(userInfo.id, {...userInfo});
    response ? dispatch(actions.editUser({id:userInfo.id, data:{...userInfo}})) : null;
  };
  asyncFetch()
};
const addUser = (userInfo: IRegisterPayload): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    await userApi.registerUser({...DEFAULT_USER_INSTANCE,...userInfo});
  };
  asyncFetch();
};
const deleteUser = (id: string): AppThunk => (dispatch) => {
  dispatch(actions.dltUser(id));
  const asyncFetch = async () => {
    await userApi.deleteUser(id);
  };
  asyncFetch();
};

const CounterActionCreator = {
  ...actions,
  incrementAsync,
};

const UsersActionCreator = {
  ...actions,
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
};

export { CounterActionCreator, UsersActionCreator, reducer };
