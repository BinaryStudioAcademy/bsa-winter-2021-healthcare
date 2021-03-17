import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { IClinic } from 'common/interfaces';
import { clinicApi, notificationService } from 'services';
import { AppThunk } from 'common/types';
import { HttpError } from 'exceptions';

type ClinicsState = {
  clinics: IClinic[];
};

const initialState: ClinicsState = {
  clinics: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.CLINICS,
  initialState,
  reducers: {
    setClinics: (state, action: PayloadAction<IClinic[]>) => {
      state.clinics = action.payload;
    },
  },
});

const getClinics = (): AppThunk => async (dispatch) => {
  try {
    const clinics = await clinicApi.getClinics();
    dispatch(actions.setClinics(clinics));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const ClinicsActionCreator = {
  ...actions,
  getClinics,
};

export { ClinicsActionCreator, reducer };
