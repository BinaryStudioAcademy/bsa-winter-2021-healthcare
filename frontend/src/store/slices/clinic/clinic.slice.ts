import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clinicApi } from 'services';
import { ClinicKey, ClinicType, ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IClinic } from 'common/interfaces';

interface IState {
  clinics: IClinic[];
}

const initialState: IState = {
  clinics: [
      {
        [ClinicKey.ID]: '1',
        [ClinicKey.NAME]: 'first',
        [ClinicKey.ADDRESS]: 'string',
        [ClinicKey.IMAGE_PATH]: 'string',
        [ClinicKey.CLINIC_TYPE]: ClinicType.PRIVATE,
        [ClinicKey.CREATED_AT]: 'string',
        [ClinicKey.UPDATED_AT]: 'string',
      }
  ],
};

const { reducer, actions } = createSlice({
  name: ReducerName.CLINIC,
  initialState,
  reducers: {
    addClinic:(state, action: PayloadAction<IClinic[]>) => {
      state.clinics = [...state.clinics, ...action.payload];
    },
  },
});

const getClinics = (): AppThunk => async (dispatch) => {
  const response = await clinicApi.getClinics();
  dispatch(actions.addClinic(response))
};

const addClinic = (clinicInfo: IClinic): AppThunk => async (dispatch) => {
    const response = await clinicApi.addClinic(clinicInfo);
    dispatch(actions.addClinic([response]));
};

const ClinicsActionCreator = {
  ...actions,
  getClinics,
  addClinic,
};

export { ClinicsActionCreator, reducer };
