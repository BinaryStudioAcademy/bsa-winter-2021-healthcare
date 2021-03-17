import * as React from 'react';
import styles from './styles.module.scss';
import { IUser } from 'common/interfaces';
import { Button } from 'components/common';
import { ButtonColor, ButtonIcon, ButtonStyleType } from 'common/enums';
import { DeleteUserCb, ShowFormCb } from 'components/users/common/types/prop-function-void.type';

type Props = {
  onUserEdit: ShowFormCb;
  onUserDelete: DeleteUserCb;
  user: IUser;
};

const ActionsButton: React.FC<Props> = ({ onUserEdit, user, onUserDelete }) => {
  const handleUserBtnEdit = () => onUserEdit(user);
  const handleUserBtnDelete = () => onUserDelete(user.id as string);
  return (
    <div className={styles.icons}>
      <Button
        styleType={ButtonStyleType.WITHOUT_BORDER}
        color={ButtonColor.WHITE}
        icon={ButtonIcon.EDIT}
        label={'Edit'}
        isDisabled={false}
        hasHiddenLabel={true}
        onClick={handleUserBtnEdit}
      />
      <Button
        styleType={ButtonStyleType.WITHOUT_BORDER}
        color={ButtonColor.WHITE}
        icon={ButtonIcon.DELETE}
        label={'Delete'}
        isDisabled={false}
        hasHiddenLabel={true}
        onClick={handleUserBtnDelete}
      />
    </div>
  );
};

export default ActionsButton;
