import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName, DataStatus } from 'common/enums';
import { AppThunk } from 'common/types';
import { userApi } from 'services';
import { IUserTypeDoctor } from 'common/interfaces'

type DoctorsState = {
  doctors: IUserTypeDoctor[]
  dataStatus: DataStatus
};

const initialState: DoctorsState = {
  doctors: [],
  dataStatus: DataStatus.PENDING
};

const { reducer, actions } = createSlice({
  name: ReducerName.DOCTORS,
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<IUserTypeDoctor[]>) => {
      state.doctors = action.payload;
      state.dataStatus = DataStatus.SUCCESS;
    },
  },
});

const getDoctorsAsync = (): AppThunk => async (dispatch) => {
  const doctors = await userApi.getDoctors();
  dispatch(actions.setDoctors(doctors));
};

const DoctorsActionCreator = {
  ...actions,
  getDoctorsAsync
};

export { DoctorsActionCreator, reducer };
