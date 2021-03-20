import { AppThunk } from 'common/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName, MapKey } from 'common/enums';
import { IMap } from 'common/interfaces';
import { notification as notificationService, mapApi } from 'services';
import { HttpError } from 'exceptions';

type MapState = {
  selectedCoords: IMap;
};

const initialState: MapState = {
  selectedCoords: {
    [MapKey.MAX_LAT]: 0,
    [MapKey.MAX_LNG]: 0,
    [MapKey.MIN_LNG]: 0,
    [MapKey.MIN_LAT]: 0,
  },
};

const selectArea = (coords: IMap): AppThunk => async (dispatch) => {
  try {
    const response = await mapApi.sendSelectedCoords(coords);
    dispatch(actions.selectArea(response));
  } catch (error) {
    if (error instanceof HttpError) {
      notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const { reducer, actions } = createSlice({
  name: ReducerName.MAP,
  initialState,
  reducers: {
    selectArea: (state, action: PayloadAction<IMap>) => {
      state.selectedCoords = action.payload;
    },
  },
});

const MapActionCreator = {
  ...actions,
  selectArea,
};

export { MapActionCreator, reducer };
