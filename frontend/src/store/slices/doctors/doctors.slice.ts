import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'common/types';
import { userApi, notificationService } from 'services';
import { IDoctorDetails, IUserTypeDoctor } from 'common/interfaces';
import { HttpError } from 'exceptions';
import { ReducerName, DataStatus } from 'common/enums';

type DoctorsState = {
  doctors: IUserTypeDoctor[];
  doctorDetails: IDoctorDetails | null;
  dataStatus: DataStatus;
};

const initialState: DoctorsState = {
  doctors: [],
  doctorDetails: null,
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
