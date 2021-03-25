import React from 'react';
import clsx from 'clsx';
import { IUser } from 'common/interfaces/user';
import { BindingCb, InputChangeEvent } from 'common/types';
import { getFormattedDate } from 'helpers';
import { Button } from 'components/common';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonIcon,
  DateFormat,
} from 'common/enums';
import styles from './styles.module.scss';
import Documents from '../documents/documents';
import { IUserTypeDoctor } from 'common/interfaces';
import { useDispatch } from 'react-redux';
import { ProfileActionCreator } from 'store/slices';

const DEFAULT_FILE_IDX = 0;

type Props = {
  user: IUser;
  isDoctor: boolean;
  onEdit: BindingCb;
};

const UserInfo: React.FC<Props> = ({ user, isDoctor, onEdit }) => {
  const birthdate = getFormattedDate(user.birthdate, DateFormat.D_MMMM_YYYY);
  const dispatch = useDispatch();

  const handleUploadFile = (event: InputChangeEvent) => {
    const file = (event.target.files as FileList)[DEFAULT_FILE_IDX];
    dispatch(ProfileActionCreator.uploadDocument(file));
  };

  return (
    <div className={styles.mainInfo}>
      <div className={styles.infoHeader}>
        <span className={styles.title}>My Profile</span>
        <Button
          label="Edit"
          icon={ButtonIcon.EDIT}
          hasHiddenLabel={true}
          color={ButtonColor.GRAY_LIGHT}
          styleType={ButtonStyleType.MEDIUM_ROUND}
          onClick={onEdit}
        />
      </div>
      <div className={styles.infoBloks}>
        <div className={styles.photo}>
          <img className={styles.image} src={user.imagePath} alt={user.name} />
        </div>
        <div className={styles.mainUserInfo}>
          <div className={styles.card}>{user.type}</div>
          <span className={styles.name}>
            {user.name} {user.surname}
          </span>
          <span className={styles.sex}>{user.sex}</span>
          <span className={styles.dateLabel}>Date of Birth</span>
          <span className={styles.date}>{birthdate}</span>
        </div>
        <div className={styles.secUserInfo}>
          <div className={styles.item}>
            <span className={clsx(styles.icon, styles.phone)}></span>
            <span className={styles.text}>{user.phone}</span>
          </div>
          <div className={styles.item}>
            <span className={clsx(styles.icon, styles.email)}></span>
            <span className={styles.text}>{user.email}</span>
          </div>
        </div>
      </div>

      { isDoctor && (
        <label htmlFor="uploadFile" className={styles.uploadWrapper}>
          <span className={styles.uploadDocument}>Upload document</span>
          <input className={clsx(styles.inputDocument, 'visually-hidden')} name="uploadFile" type="file" id="uploadFile" hidden onChange={handleUploadFile} />
        </label>
      )}

      { isDoctor && (user as IUserTypeDoctor).doctor?.document && (
        <Documents document={(user as IUserTypeDoctor).doctor.document} />
      )}
    </div>
  );
};

export default UserInfo;
