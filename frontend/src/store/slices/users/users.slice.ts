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
  id: '',
  name: '',
  surname: '',
  sex: UserSex.FEMALE,
  type: UserType.PATIENT,
  birthdate: '',
  phone: '',
  password: '',
  email: '',
  imagePath: '',
  diagnosis: '',
  createdAt: '',
  updatedAt: '',
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
    {
      id: '2',
      name: '2',
      surname: '2',
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
    console.log(response);
  };
  asyncFetch();
};
const editUser = (userInfo: IRegisterPayload): AppThunk => (dispatch) => {
  console.log(userInfo);
  // const asyncFetch = async () => {
  //   const response = await userApi.getUsers();
  //   console.log(response);
  // };
  // asyncFetch()
};
const addUser = (userInfo: IRegisterPayload): AppThunk => (dispatch) => {
  console.log(userInfo);
  const asyncFetch = async () => {
    const response = await userApi.registerUser({...DEFAULT_USER_INSTANCE,...userInfo});
    console.log(response);
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
  addUser,
  editUser,
};

export { CounterActionCreator, UsersActionCreator, reducer };
