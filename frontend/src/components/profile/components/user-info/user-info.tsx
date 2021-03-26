import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IUserWithPermissions } from 'common/interfaces/user';
import { BindingCb, InputChangeEvent, RootState } from 'common/types';
import { getFormattedDate } from 'helpers';
import { IOption, IProfession, IUserTypeDoctor } from 'common/interfaces';
import { ProfileActionCreator } from 'store/slices';
import { Button, Select } from 'components/common';
import Documents from '../documents/documents';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonIcon,
  DateFormat,
  InputColor,
  ButtonType,
  ProfessionKey,
  PermissionName,
} from 'common/enums';
import styles from './styles.module.scss';
import AddClinic from '../add-clinic/add-clinic';
import { checkHasPermission, getDefaultAvatar } from 'helpers';
import { getProfessionOptions } from './helpers';
import { DEFAULT_FILE_IDX } from 'common/constants';
import { DEFAULT_PROFESSION_VALUE } from './common/constants';

type Props = {
  user: IUserWithPermissions;
  isDoctor: boolean;
  onEdit: BindingCb;
};

const UserInfo: React.FC<Props> = ({ user, isDoctor, onEdit }) => {
  const { authUser } = useSelector(({ auth: { user: authUser } }: RootState) => ({
    authUser,
  }));

  const birthdate = getFormattedDate(user.birthdate, DateFormat.D_MMMM_YYYY);
  const hasPermissionToEdit = checkHasPermission(
    [PermissionName.EDIT_USER],
    authUser?.permissions ?? [],
  );
  const dispatch = useDispatch();
  const { handleSubmit, errors, control } = useForm<IProfession>({
    defaultValues: DEFAULT_PROFESSION_VALUE,
    mode: 'onChange',
  });

  const { professions } = useSelector(({ profile }: RootState) => ({
    professions: profile.professions,
  }));

  const professionOptions: IOption<string>[] = getProfessionOptions(professions);

  React.useEffect(() => {
    if (isDoctor) {
      dispatch(ProfileActionCreator.getAllProfessions());
    }
  }, [isDoctor]);

  const handleUploadFile = (evt: InputChangeEvent) => {
    const file = (evt.target.files as FileList)[DEFAULT_FILE_IDX];
    dispatch(ProfileActionCreator.uploadDocument(file));
  };

  const handleSubmitProfessionForm = (profession: IProfession) => {
    dispatch(ProfileActionCreator.addSelectedProfession(profession.id, user.id as string));
  };

  return (
    <div className={styles.mainInfo}>
      <div className={styles.infoHeader}>
        <span className={styles.title}>Profile</span>
        {user?.id === authUser?.id && <Button
          label="Edit"
          icon={ButtonIcon.EDIT}
          hasHiddenLabel={true}
          color={ButtonColor.GRAY_LIGHT}
          styleType={ButtonStyleType.MEDIUM_ROUND}
          onClick={onEdit}
        />}
      </div>
      <div className={styles.infoBloks}>
        <div className={styles.photo}>
          <img
            className={styles.image}
            src={user.imagePath ?? getDefaultAvatar(user)}
            alt={user.name}
          />
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
            <a href={`tel:${user.phone}`} className={styles.text}>{user.phone}</a>
          </div>
          <div className={styles.item}>
            <span className={clsx(styles.icon, styles.email)}></span>
            <a href={`mailto:${user.email}`} className={styles.text}>{user.email}</a>
          </div>
        </div>
      </div>

      { isDoctor && (
        <>
          <div className={styles.actionWrapper}>
            <form className={styles.selectFormWrapper} onSubmit={handleSubmit(handleSubmitProfessionForm)}>
              <div className={styles.selectWrapper}>
                <Select
                  name={ProfessionKey.ID}
                  label="Select specialty:"
                  hasHiddenLabel={false}
                  placeholder={(user as IUserTypeDoctor).doctor?.profession?.name ?? 'Select'}
                  options={professionOptions}
                  color={InputColor.GRAY_LIGHT}
                  control={control}
                  errors={errors}
                />
              </div>
              <div className={styles.selectSubmitWrapper}>
                <Button
                  type={ButtonType.SUBMIT}
                  styleType={ButtonStyleType.WITHOUT_BORDER}
                  color={ButtonColor.PRIMARY_DARK}
                  label={'Save'}
                  hasHiddenLabel={false}
                />
              </div>
            </form>

            <AddClinic user={user as IUserTypeDoctor} />
            <label className={styles.uploadDocumentLabel} htmlFor="uploadFile">
              <span className={styles.uploadDocument}>Upload document</span>
              <input
                className={clsx(styles.inputDocument, 'visually-hidden')}
                name="uploadFile"
                type="file"
                id="uploadFile"
                hidden
                onChange={handleUploadFile}
              />
            </label>
          </div>
        </>
      )}

      {isDoctor && (user as IUserTypeDoctor).doctor?.document && (
        <Documents
          document={(user as IUserTypeDoctor).doctor.document}
          hasPermissionToEdit={hasPermissionToEdit}
        />
      )}
    </div>
  );
};

export default UserInfo;
