import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification as notificationService, permissionApi } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IPermission } from 'common/interfaces';
import { HttpError } from 'exceptions';

interface IState {
  permissions: IPermission[];
}

const initialState: IState = {
  permissions: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.PERMISSIONS,
  initialState,
  reducers: {
    addPermissions: (state, action: PayloadAction<IPermission[]>) => {
      state.permissions = action.payload;
    },
  },
});

const getPermissions = (): AppThunk => async (dispatch) => {
  try {
    const response = await permissionApi.getPermissions();
    dispatch(actions.addPermissions(response));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};
const deletePermissionForUser = (
  userId: string,
  permissionId: string,
): AppThunk => async () => {
  try {
    await permissionApi.deletePermissionForUser({ userId, permissionId });
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};
const addPermissionForUser = (
  userId: string,
  permissionId: string,
): AppThunk => async () => {
  try {
    await permissionApi.addPermissionForUser({ userId, permissionId });
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const PermissionsActionCreator = {
  ...actions,
  getPermissions,
  addPermissionForUser,
  deletePermissionForUser,
};

export { PermissionsActionCreator, reducer };
