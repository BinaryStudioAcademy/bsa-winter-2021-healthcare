import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'services/services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { UserState } from 'common/interfaces';

interface StateType {
  editUser:boolean,
//   user:UserState,
}

const initialState: StateType = {
  editUser:false
};

const { reducer, actions } = createSlice({
  name: ReducerName.COUNTER,
  initialState,
  reducers: {
    showEdit: (state)=>{
        state.editUser = !state.editUser;
    }
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// const getUsers = (amount: number): AppThunk => (dispatch) => {
//   const data = userApi.getUsers(amount);
//   console.log(data);
// };

const EditUserActionCreator = {
  ...actions,
//   getUsers,
};

export { EditUserActionCreator, reducer };
