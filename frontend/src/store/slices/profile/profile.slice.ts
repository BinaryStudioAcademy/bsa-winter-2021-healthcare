import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  notification as notificationService,
  diagnosis as diagnosisService,
  userApi,
  documentApi,
} from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import {
  IDocument,
  IUserTypeDoctor,
  IEditUserPayload,
  IDiagnosis,
  IUserWithPermissions,
} from 'common/interfaces';
import { AuthActionCreator } from 'store/slices';
import { HttpError } from 'exceptions';

interface IState {
  user: IUserWithPermissions | null;
  diagnoses: IDiagnosis[];
}

const initialState: IState = {
  user: null,
  diagnoses: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.PROFILE,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserWithPermissions>) => {
      state.user = action.payload;
    },
    editDocumentStatus: (state, action: PayloadAction<IDocument>) => {
      (state.user as IUserTypeDoctor).doctor.document = action.payload;
    },
    setDiagnoses: (state, action: PayloadAction<IDiagnosis[]>) => {
      state.diagnoses = action.payload;
    },
    addDiagnosis: (state, action: PayloadAction<IDiagnosis>) => {
      state.diagnoses = [action.payload, ...state.diagnoses];
    },
  },
});

const getUser = (id: string): AppThunk => async (dispatch) => {
  try {
    const user = await userApi.getUser(id);
    dispatch(actions.setUser(user));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const editUserInProfile = (userData: IEditUserPayload): AppThunk => async (
  dispatch,
  getState,
) => {
  try {
    const user = await userApi.editUser(userData.id as string, userData);

    dispatch(actions.setUser(user));

    const { auth } = getState();
    if (auth.user?.id === user.id) {
      dispatch(AuthActionCreator.setUser(user));
    }
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const editUserDocument = (payload: IDocument): AppThunk => async (dispatch) => {
  try {
    const document = await documentApi.editDocument(payload.id, payload);

    dispatch(actions.editDocumentStatus(document));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getAllDiagnoses = (userId: string): AppThunk => async (dispatch) => {
  try {
    const diagnoses = await diagnosisService.getAllByUserId(userId);
    dispatch(actions.setDiagnoses(diagnoses));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addDiagnosis = (userId: string, diagnosis: string): AppThunk => async (
  dispatch,
) => {
  try {
    const response = await diagnosisService.create(userId, diagnosis);
    dispatch(actions.addDiagnosis(response));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const ProfileActionCreator = {
  ...actions,
  getUser,
  editUserInProfile,
  editUserDocument,
  getAllDiagnoses,
  addDiagnosis,
};

export { ProfileActionCreator, reducer };
