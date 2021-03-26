import { AppThunk } from 'common/types';
import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { ICoordsSet } from 'common/interfaces';
import { notification as notificationService, mapApi } from 'services';
import { HttpError } from 'exceptions';

const initialState = {};

const selectArea = (coords: ICoordsSet): AppThunk => async () => {
  try {
    const response = await mapApi.sendSelectedCoords(coords);
    return response;
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const { reducer, actions } = createSlice({
  name: ReducerName.MAP,
  initialState,
  reducers: {},
});

const MapActionCreator = {
  ...actions,
  selectArea,
};

export { MapActionCreator, reducer };
