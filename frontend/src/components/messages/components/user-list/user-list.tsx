import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { MessagesActionCreator } from 'store/slices';
import { User, AddUserForm, HorizontalLine  } from '..';
import { IUser  } from 'common/interfaces';
import { getDefaultAvatar } from 'helpers';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const UserList: React.FC<Props> = ({ className }) => {

  const { users, selectedUserId } = useSelector(({ messages: { users, selectedUser } }: RootState) => ({
    users,
    selectedUserId: selectedUser?.id,
  }));

  const dispatch = useDispatch();

  const handlerSelectUser = React.useCallback(
    (id: string) => dispatch(MessagesActionCreator.selectUser(id)),
    [dispatch],
  );

  return (
    <div className={clsx(styles.userList, className)}>
      <AddUserForm />
      <HorizontalLine />
      {users.map((user: IUser) => (
        <User
          key={user.id}
          label={user.name}
          avatar={user.imagePath ?? getDefaultAvatar(user)}
          isSelected={user.id === selectedUserId}
          id={user?.id ?? ''}
          onClick={handlerSelectUser}
        />
      ))}

    </div>
  );
};

export default UserList;
