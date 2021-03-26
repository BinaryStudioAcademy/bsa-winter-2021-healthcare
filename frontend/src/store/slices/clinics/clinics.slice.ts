import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { IClinic, ICity, IClinicPayload } from 'common/interfaces';
import {
  clinicApi,
  notification as notificationService,
  cityApi,
  uploadFile as uploadFileService,
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
    addClinic: (state, action: PayloadAction<IClinic>) => {
      state.clinics = [...state.clinics, action.payload];
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
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addClinic = (
  clinicInfo: IClinicPayload,
  cityValue?: string,
): AppThunk => async (dispatch) => {
  try {
    const updatedClinic: IClinicPayload = {
      ...clinicInfo,
    };
    if (clinicInfo.cityId === '' && cityValue !== '') {
      const response = await cityApi.addCity({ name: cityValue });
      dispatch(actions.addCity(response));
      updatedClinic.cityId = response.id;
    }

    const response = await clinicApi.addClinic(updatedClinic);
    dispatch(actions.addClinic(response));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
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
      return notificationService.error(`Error ${error.status}`, error.messages);
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
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const uploadClinicImageAsync = (file: File): AppThunk => async () => {
  try {
    const path = uploadFileService.addImage(file);
    return path;
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
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
  uploadClinicImageAsync,
};

export { ClinicsActionCreator, reducer };
