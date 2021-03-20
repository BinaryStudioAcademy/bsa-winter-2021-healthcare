import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { IDiagnosis } from 'common/interfaces';
import { AppThunk } from 'common/types';
import { HttpError } from 'exceptions';
import {
  diagnosis as diagnosisService,
  notification as notificationService,
} from 'services';

type DiagnosesState = {
  diagnoses: IDiagnosis[];
};

const initialState: DiagnosesState = {
  diagnoses: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.DIAGNOSES,
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<IDiagnosis[]>) => {
      state.diagnoses = action.payload;
    },
    create: (state, action: PayloadAction<IDiagnosis>) => {
      state.diagnoses = [action.payload, ...state.diagnoses];
    },
  },
});

const getAllByUserId = (userId: string): AppThunk => async (dispatch) => {
  try {
    const diagnoses = await diagnosisService.getAllByUserId(userId);
    dispatch(actions.getAll(diagnoses));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const create = (userId: string, diagnosis: string): AppThunk => async (
  dispatch,
) => {
  try {
    const newDiagnoses = await diagnosisService.create(userId, diagnosis);
    dispatch(actions.create(newDiagnoses));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const DiagnosesActionCreator = {
  ...actions,
  getAllByUserId,
  create,
};

export { DiagnosesActionCreator, reducer };
