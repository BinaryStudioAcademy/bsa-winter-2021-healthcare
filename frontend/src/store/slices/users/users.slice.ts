import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notificationService, userApi, documentApi } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk, UserGeneric } from 'common/types';
import { IDocument, IEditUserPayload, IUser, IUserTypeDoctor } from 'common/interfaces';
import { HttpError } from 'exceptions';

interface IState {
  users: IUser[];
  userInProfile: UserGeneric;
}

const initialState: IState = {
  users: [],
  userInProfile: null,
};

const { reducer, actions } = createSlice({
  name: ReducerName.USERS,
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = [...state.users, ...action.payload];
    },    
    editUser: (
      state,
      action: PayloadAction<{ id: string | undefined; data: IUser }>,
    ) => {
      const id = action.payload.id;
      state.users = state.users.map((user: IUser) =>
        user.id === id ? action.payload.data : user,
      );
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(
        (user: IUser) => user.id !== action.payload,
      );
    },
    setUserToProfile:(state, action: PayloadAction<UserGeneric>) => {
      state.userInProfile = action.payload;
    },
    editeDocumentStatus:(state, action: PayloadAction<IDocument>) => {
      (state.userInProfile as IUserTypeDoctor).doctor.document = action.payload; 
    },
  },
});

const getUsers = (): AppThunk => async (dispatch) => {
  try {
    const response = await userApi.getUsers();
    dispatch(actions.addUsers(response));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getUser = (id:string): AppThunk => async (dispatch) => {
  try{
    const user = await userApi.getUser(id);
    dispatch(actions.setUserToProfile(user));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const editUser = (userInfo: IEditUserPayload): AppThunk => async (dispatch) => {
  try {
    const response: IUser = await userApi.editUser(
      userInfo.id as string,
      userInfo,
    );
    response
      ? dispatch(actions.editUser({ id: userInfo.id, data: response }))
      : null;
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addUser = (userInfo: IUser): AppThunk => async (dispatch) => {
  try {
    const response = await userApi.registerUser(userInfo);
    dispatch(actions.addUsers([response]));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};
const deleteUser = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.deleteUser(id));
    await userApi.deleteUser(id);
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const editUserDocument = (documentId:string, payload:IDocument):AppThunk => async (dispatch) => {
  try{
    const document = await documentApi.editDocument(documentId, payload);
    dispatch(actions.editeDocumentStatus(document));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const UsersActionCreator = {
  ...actions,
  getUsers,
  addUser,
  editUser,
  deleteUser,
  getUser,
  editUserDocument,
};

export { UsersActionCreator, reducer };
