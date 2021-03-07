import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'services/services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { UserState } from 'common/interfaces';

interface EditUser{
  edit:boolean,
  user?:UserState,
}

interface StateType {
  value: number,
  users: UserState[]
  editUser: EditUser,
}

const initialState: StateType = {
  value: 0,
  users: [
    {
      id:"1",
      name:"2",
      surname:"2",
      birthday:"3",
      phone:"4",
      password:"5",
      email:"6",
      imagePath:"7",
      geoposition:"8",
      diagnosis:"9",
      createdAt:"10",
      updatedAt:"11"
    },
    {
      id:"2",
      name:"2",
      surname:"2",
      birthday:"3",
      phone:"4",
      password:"5",
      email:"6",
      imagePath:"7",
      geoposition:"8",
      diagnosis:"9",
      createdAt:"10",
      updatedAt:"11"
    },
  ],
  editUser:{
    edit:false
  }
};

const { reducer, actions } = createSlice({
  name: ReducerName.COUNTER,
  initialState,
  reducers: {
    showEdit: (state, action: PayloadAction<string>)=>{
        action.payload ?
          state .editUser = {
            edit:true,
            user:state.users.filter((user)=> user.id === action.payload)[0]
            } :
          state.editUser = {
            edit:false
            }
        console.log(state);
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

const getUsers = (amount: number): AppThunk => (dispatch) => {
  const data = userApi.getUsers(amount);
  console.log(data);
};

const CounterActionCreator = {
  ...actions,
  incrementAsync,
};

const UsersActionCreator = {
  ...actions,
  getUsers,
};

export { CounterActionCreator, UsersActionCreator, reducer };
