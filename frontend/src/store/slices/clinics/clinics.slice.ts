import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { IClinic } from 'common/interfaces';

import { clinicApi } from 'services';
import { AppThunk } from 'common/types';


type ClinicsState = {
  clinics: IClinic[]
};

const initialState: ClinicsState = {
  clinics: []
};

const { reducer, actions } = createSlice({
  name: ReducerName.CLINICS,
  initialState,
  reducers: {
    setClinics: (state, action: PayloadAction<IClinic[]>) => {
      state.clinics = action.payload;
    }
  }
});

const getClinics = (): AppThunk => async (dispatch) => {
  const clinics = await clinicApi.getClinics();
  dispatch(actions.setClinics(clinics));
}

const ClinicsActionCreator = {
  ...actions,
  getClinics
};

export { ClinicsActionCreator, reducer };
