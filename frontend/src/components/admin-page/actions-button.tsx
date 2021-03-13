import * as React from 'react';
import styles from './styles.module.scss';
import { IUser } from 'common/interfaces';
import Button from '../common/button/button';
import { ButtonColor, ButtonIcon, ButtonStyleType } from 'common/enums';

interface IProps {
  edit: (user?: IUser) => void;
  deleteUser: (id: string) => void;
  value: IUser;
}

const ActionsButton: React.FC<IProps> = ({ edit, value, deleteUser }) => {
  const handleUserBtnEdit = () => edit(value);
  const handleUserBtnDelete = () => deleteUser(value.id as string);
  return (
    <div className={styles.iconsDiv}>
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
      <Button
        styleType={ButtonStyleType.WITHOUT_BORDER}
        color={ButtonColor.WHITE}
        icon={ButtonIcon.PDF}
        label={'Delete'}
        isDisabled={false}
        hasHiddenLabel={true}
        onClick={handleUserBtnDelete}
      />
    </div>
  );
};

export default ActionsButton;
