import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  notification as notificationService,
  diagnosis as diagnosisService,
  uploadFile as uploadFileService,
  userApi,
  documentApi,
  professionApi,
  appointment as appointmentService,
  clinicApi,
  doctorApi,
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
  IProfession,
  IAppointmentWithUser,
  IClinic,
  IDoctorDetails,
} from 'common/interfaces';
import { AuthActionCreator } from 'store/slices';
import { HttpError } from 'exceptions';

interface IState {
  user: IUserWithPermissions | null;
  diagnoses: IDiagnosis[];
  professions: IProfession[];
  appointments: IAppointmentWithUser[];
  clinics: IClinic[];
  doctorDetails: IDoctorDetails | null;
}

const initialState: IState = {
  user: null,
  diagnoses: [],
  professions: [],
  appointments: [],
  clinics: [],
  doctorDetails: null,
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
    editImagePath: (state, action: PayloadAction<string>) => {
      (state.user as IUserWithPermissions).imagePath = action.payload;
    },
    setProfessions: (state, action: PayloadAction<IProfession[]>) => {
      state.professions = action.payload;
    },
    selectProfession: (state, action: PayloadAction<IProfession>) => {
      (state.user as IUserTypeDoctor).doctor.profession = action.payload;
    },
    setAppointments: (state, action: PayloadAction<IAppointmentWithUser[]>) => {
      state.appointments = action.payload;
    },
    uploadDocuments: (state, action: PayloadAction<IDocument>) => {
      (state.user as IUserTypeDoctor).doctor.document = action.payload;
    },
    setClinics: (state, action: PayloadAction<IClinic[]>) => {
      state.clinics = action.payload;
    },
    setDoctorDetail: (state, action: PayloadAction<IDoctorDetails>) => {
      state.doctorDetails = action.payload;
    },
  },
});

const getUser = (id: string): AppThunk => async (dispatch) => {
  try {
    const user = await userApi.getUser(id);
    dispatch(actions.setUser(user));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const uploadImage = (file: File): AppThunk => async (dispatch) => {
  try {
    const path = await uploadFileService.addImage(file);
    dispatch(actions.editImagePath(path));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
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
      return notificationService.error(`Error ${error.status}`, error.messages);
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
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getAllDiagnoses = (userId: string): AppThunk => async (dispatch) => {
  try {
    const diagnoses = await diagnosisService.getAllDiagnoses(userId);
    dispatch(actions.setDiagnoses(diagnoses));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
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
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getAllAppointments = (doctorId: string): AppThunk => async (dispatch) => {
  try {
    const appointments = await appointmentService.getAllById(doctorId);
    dispatch(actions.setAppointments(appointments));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
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
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getAllProfessions = (): AppThunk => async (dispatch) => {
  try {
    const professions = await professionApi.getAllProfessions();
    dispatch(actions.setProfessions(professions));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addSelectedProfession = (id: string, userId: string): AppThunk => async (
  dispatch,
) => {
  try {
    const profession = await professionApi.addSelectedProfession(id, userId);
    dispatch(actions.selectProfession(profession));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getClinics = (): AppThunk => async (dispatch) => {
  try {
    const clinics = await clinicApi.getClinics();
    dispatch(actions.setClinics(clinics));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getDoctorDetailsAsync = (id: string): AppThunk => async (dispatch) => {
  try {
    const doctorDetails = await userApi.getDoctorDetails(id);
    dispatch(actions.setDoctorDetail(doctorDetails));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addDoctorToClinic = (
  doctorId: string,
  clinicId: string,
): AppThunk => async () => {
  try {
    await doctorApi.addDoctorToClinic({ doctorId, clinicId });
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
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
  uploadImage,
  getAllProfessions,
  addSelectedProfession,
  getAllAppointments,
  uploadDocument,
  getClinics,
  getDoctorDetailsAsync,
  addDoctorToClinic,
};

export { ProfileActionCreator, reducer };
