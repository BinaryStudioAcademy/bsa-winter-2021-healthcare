import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { IClinic, ICity } from 'common/interfaces';
import {
  clinicApi,
  notification as notificationService,
  cityApi,
} from 'services';
import { AppThunk } from 'common/types';
import { HttpError } from 'exceptions';

type ClinicsState = {
  clinics: IClinic[];
  cities: ICity[];
};

const initialState: ClinicsState = {
  clinics: [],
  cities: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.CLINICS,
  initialState,
  reducers: {
    setClinics: (state, action: PayloadAction<IClinic[]>) => {
      state.clinics = action.payload;
    },
    addClinic: (state, action: PayloadAction<IClinic[]>) => {
      state.clinics = [...state.clinics, ...action.payload];
    },
    setCities: (state, action: PayloadAction<ICity[]>) => {
      state.cities = action.payload;
    },
    addCity: (state, action: PayloadAction<ICity>) => {
      state.cities = [...state.cities, action.payload];
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

const addClinic = (clinicInfo: IClinic, cityValue?: string): AppThunk => async (
  dispatch,
) => {
  try {
    if (clinicInfo.cityId === ' ' && cityValue !== '') {
      const response = await cityApi.addCity({ name: cityValue });
      dispatch(actions.addCity(response));
      clinicInfo.cityId=response.id;
    }

    const response = await clinicApi.addClinic(clinicInfo);
    dispatch(actions.addClinic([response]));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const getCities = (): AppThunk => async (dispatch) => {
  try {
    const cities = await cityApi.getCities();
    dispatch(actions.setCities(cities));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addCity = (cityName: Partial<ICity>): AppThunk => async (dispatch) => {
  try {
    const response = await cityApi.addCity(cityName);
    dispatch(actions.addCity(response));
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
  addClinic,
  getCities,
  addCity,
};

export { ClinicsActionCreator, reducer };
