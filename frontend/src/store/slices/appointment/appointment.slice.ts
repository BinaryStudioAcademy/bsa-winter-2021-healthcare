import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IAppointment, ICreateAppointment } from 'common/interfaces';
import { HttpError } from 'exceptions';
import { appointment } from 'services';

interface IState {
  appointments: IAppointment[];
}

const initialState: IState = {
  appointments: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.APPOINTMENTS,
  initialState,
  reducers: {
  },
});

const createAppointment = (payload:ICreateAppointment): AppThunk => async (_, getState) => {
  try {
    const { auth } = getState();
    payload.userId = auth.user?.id;
    const data = await appointment.createAppointment(payload);
    // eslint-disable-next-line no-console
    console.log(data);
  } catch (error) {
    if (error instanceof HttpError) {
      notification.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const AppointmentActionCreator = {
  ...actions,
  createAppointment,
};

export { AppointmentActionCreator, reducer };
