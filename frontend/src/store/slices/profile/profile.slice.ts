import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification, userApi, documentApi } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IDocument, IUser, IUserTypeDoctor, IEditUserPayload } from 'common/interfaces';
import { AuthActionCreator } from 'store/slices';
import { HttpError } from 'exceptions';

interface IState {
  user: IUser | null;
}

const initialState: IState = {
  user: null,
};

const { reducer, actions } = createSlice({
  name: ReducerName.PROFILE,
  initialState,
  reducers: {
    setUser:(state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    editeDocumentStatus:(state, action: PayloadAction<IDocument>) => {
      (state.user as IUserTypeDoctor).doctor.document = action.payload;
    },
  },
});

const getUser = (id:string): AppThunk => async (dispatch) => {
  try{
    const user = await userApi.getUser(id);
    dispatch(actions.setUser(user));
  } catch (error) {
    if (error instanceof HttpError) {
      notification.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const editeUserInProfile = (userData: IEditUserPayload): AppThunk => async (dispatch, getState) => {
  try {
    const user = await userApi.editUser((userData.id as string), userData);
    dispatch(actions.setUser(user));
    const { auth } = getState();
    if (auth.user?.id === user.id){
      dispatch(AuthActionCreator.setUser(user));
    }
  } catch(error) {
    if (error instanceof HttpError) {
      notification.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const editUserDocument = (payload:IDocument):AppThunk => async (dispatch) => {
  try{
    const document = await documentApi.editDocument(payload.id, payload);
    dispatch(actions.editeDocumentStatus(document));
  } catch (error) {
    if (error instanceof HttpError) {
      notification.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const ProfileActionCreator = {
  ...actions,
  getUser,
  editeUserInProfile,
  editUserDocument,
};

export { ProfileActionCreator, reducer };
