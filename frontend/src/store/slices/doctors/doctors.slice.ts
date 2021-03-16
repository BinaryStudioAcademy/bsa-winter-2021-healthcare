import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName, DataStatus } from 'common/enums';
import { AppThunk } from 'common/types';
import { userApi, notificationService } from 'services';
import { IDoctorDetails, IUserTypeDoctor } from 'common/interfaces';
import { HttpError } from 'exceptions';
import {
  DoctorDetailsKey,
  DoctorKey,
  UserKey,
  UserSex,
  UserType,
} from 'healthcare-shared/common/enums';

type DoctorsState = {
  doctors: IUserTypeDoctor[];
  doctorDetails: IDoctorDetails;
  dataStatus: DataStatus;
};

const initialState: DoctorsState = {
  doctors: [],
  doctorDetails: {
    [UserKey.NAME]: '',
    [UserKey.SURNAME]: '',
    [UserKey.IMAGE_PATH]: '',
    [UserKey.PHONE]: '',
    [UserKey.BIRTHDATE]: '',
    [UserKey.SEX]: UserSex.MALE,
    [UserKey.TYPE]: UserType.DOCTOR,
    [UserKey.EMAIL]: '',
    [UserKey.PASSWORD]: '',
    [UserKey.CREATED_AT]: '',
    [UserKey.UPDATED_AT]: '',
    doctor: {
      [DoctorKey.DEPARTMENT]: '',
      [DoctorKey.ABOUT]: '',
    },
    [DoctorDetailsKey.SPECIALIZATIONS]: [],
  },
  dataStatus: DataStatus.PENDING,
};

const { reducer, actions } = createSlice({
  name: ReducerName.DOCTORS,
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<IUserTypeDoctor[]>) => {
      state.doctors = action.payload;
      state.dataStatus = DataStatus.SUCCESS;
    },
    setDoctorDetail: (state, action: PayloadAction<IDoctorDetails>) => {
      state.doctorDetails = action.payload;
      state.dataStatus = DataStatus.SUCCESS;
    },
  },
});

const getDoctorsAsync = (): AppThunk => async (dispatch) => {
  try {
    const doctors = await userApi.getDoctors();
    dispatch(actions.setDoctors(doctors));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
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
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const DoctorsActionCreator = {
  ...actions,
  getDoctorsAsync,
  getDoctorDetailsAsync,
};

export { DoctorsActionCreator, reducer };
