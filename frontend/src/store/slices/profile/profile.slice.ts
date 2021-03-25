import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  notification as notificationService,
  diagnosis as diagnosisService,
  uploadFile as uploadFileService,
  userApi,
  documentApi,
} from 'services';
import { DocumentStatus, ReducerName, DocumentKey } from 'common/enums';
import { AppThunk } from 'common/types';
import {
  IDocument,
  IUserTypeDoctor,
  IEditUserPayload,
  IDiagnosis,
  IUserWithPermissions,
  IDiagnosisPayload,
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
    addDiagnosis: (state, action: PayloadAction<IDiagnosis[]>) => {
      state.diagnoses = [...action.payload, ...state.diagnoses];
    },
    uploadDocuments: (state, action: PayloadAction<IDocument>) => {
      (state.user as IUserTypeDoctor).doctor.document = action.payload;
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

const getAllDiagnoses = (): AppThunk => async (dispatch) => {
  try {
    const diagnoses = await diagnosisService.getAllDiagnoses();
    dispatch(actions.setDiagnoses(diagnoses));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addDiagnosis = (diagnosis: IDiagnosisPayload): AppThunk => async (
  dispatch,
) => {
  try {
    const response = await diagnosisService.create(diagnosis);
    dispatch(actions.addDiagnosis([response]));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const uploadDocument = (file: File): AppThunk => async (dispatch) => {
  try {
    const path = await uploadFileService.addImage(file);
    const document = await documentApi.uploadDocument({
      [DocumentKey.IMAGE_PATH]: path,
      [DocumentKey.STATUS]: DocumentStatus.IN_REVIEW,
    });
    dispatch(actions.uploadDocuments(document));
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
  uploadDocument,
};

export { ProfileActionCreator, reducer };
