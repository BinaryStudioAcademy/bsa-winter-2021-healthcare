import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  EditUserPayloadKey,
  InputColor,
  InputType,
  UserSex,
  UserType,
} from 'common/enums';
import styles from './styles.module.scss';
import { IEditUserPayload, IUser } from 'common/interfaces';
import { editUser as validationEditUser } from 'validation-schemas';
import { Button, DateInput, Select, TextInput, Modal } from 'components/common';
import { createOptions } from 'helpers';
import { EditUserCb, HideFormCb } from 'components/users/common/types';
import { InputChangeEvent } from 'common/types';
import camera from 'assets/images/camera.svg';
import { ProfileActionCreator } from 'store/slices';
import { DEFAULT_FILE_IDX } from 'common/constants';
import { getDefaultAvatar } from 'helpers';

type Props = {
  user: IUser;
  onEditUser: EditUserCb;
  onFormHide: HideFormCb;
  isShow: boolean;
};

const genderOptions = createOptions<string>(Object.values(UserSex));
const userTypeOptions = createOptions<string>(Object.values(UserType));

const EditUserPopup: React.FC<Props> = ({ user, isShow, onEditUser, onFormHide }) => {
  const userWithDate: IEditUserPayload = {
    ...user,
    birthdate: new Date(user.birthdate),
  };

  const dispatch = useDispatch();

  const { handleSubmit, errors, control } = useForm<IEditUserPayload>({
    resolver: yupResolver(validationEditUser),
    defaultValues: userWithDate,
    mode: 'onChange',
  });

  const handleUploadFile = (evt: InputChangeEvent) => {
    const file = (evt.target.files as FileList)[DEFAULT_FILE_IDX];
    dispatch(ProfileActionCreator.uploadImage(file));
  };

  const handleFormSubmit = (userData: IEditUserPayload) => {
    onEditUser({ ...userData, imagePath: user.imagePath });
  };

  return (
    <Modal isShow={isShow}>
      <div className={styles.editContainer}>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={styles.editForm}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Edit user</h2>
            <button
              className={styles.closeButton}
              onClick={onFormHide}
              type="button"
            >
              &#10060;
              <span className="visually-hidden">Close edit user popup</span>
            </button>
          </div>

          <div>
            <label htmlFor="uploadFile">
              <div className={styles.imageContainer} style={{ backgroundImage: `url(${user.imagePath ?? getDefaultAvatar(user)})` }}>
                <div className={styles.photoEditContainer}>
                  <img src={camera} alt="camera" width="20" height="20" loading="lazy" />
                </div>
              </div>
              <input className="visually-hidden" name="uploadFile" type="file" id="uploadFile" hidden onChange={handleUploadFile} />
            </label>
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={EditUserPayloadKey.NAME}
              label="Name"
              hasHiddenLabel={false}
              placeholder="Name"
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={EditUserPayloadKey.SURNAME}
              label="Surname"
              hasHiddenLabel={false}
              placeholder="Surname"
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <Select
              name={EditUserPayloadKey.SEX}
              label="Gender"
              hasHiddenLabel={false}
              placeholder="Gender"
              options={genderOptions}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <DateInput
              name={EditUserPayloadKey.BIRTHDATE}
              label="Birthday"
              hasHiddenLabel={false}
              placeholder="Birthday"
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={EditUserPayloadKey.EMAIL}
              label="Email"
              hasHiddenLabel={false}
              placeholder="Email"
              type={InputType.EMAIL}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={EditUserPayloadKey.PHONE}
              label="Phone"
              hasHiddenLabel={false}
              placeholder="Phone"
              type={InputType.PHONE}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <Select
              name={EditUserPayloadKey.TYPE}
              label="Status"
              hasHiddenLabel={false}
              placeholder="Status"
              options={userTypeOptions}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.submitBtn}>
            <Button
              label="Edit"
              hasHiddenLabel={false}
              type={ButtonType.SUBMIT}
              color={ButtonColor.PRIMARY_DARK}
              styleType={ButtonStyleType.WITHOUT_BORDER}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditUserPopup;
