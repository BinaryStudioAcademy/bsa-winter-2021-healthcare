import { useSelector } from 'react-redux';
import { IUserWithPermissions } from 'common/interfaces';
import { RootState } from 'common/types';

const getUserFromState = ():IUserWithPermissions | null => {
  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));
  return user;
};

export { getUserFromState };
