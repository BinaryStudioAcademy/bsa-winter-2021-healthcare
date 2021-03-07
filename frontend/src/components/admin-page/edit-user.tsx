import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';

function EditUser() {
const { user } = useSelector(({ users }: RootState) => ({
    user: users.editUser.user,
  }));
    return (
        <div>

        </div>
    )
}

export default EditUser
