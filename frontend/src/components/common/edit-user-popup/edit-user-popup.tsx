import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { uploadFile as uploadFileService } from 'services';
import { InputChangeEvent } from 'common/types';

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

  const { handleSubmit, errors, control } = useForm<IEditUserPayload>({
    resolver: yupResolver(validationEditUser),
    defaultValues: userWithDate,
    mode: 'onChange',
  });

  const [image, setImage] = React.useState<string | undefined>(undefined);

  const handleUploadFile = (event: InputChangeEvent) => {
    const file = event.target.files![0];
    if (file) {
      uploadFileService.addImage(file).then(path => {
        control.setValue(EditUserPayloadKey.IMAGE_PATH, path);
        setImage(path);
      });
    }
  };

  const handleFormSubmit = (userData: IEditUserPayload) => {
    setImage(undefined);
    onEditUser(userData);
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

          <div className={styles.inputBlock}>
            <TextInput
              name={EditUserPayloadKey.IMAGE_PATH}
              label="Avatar"
              hasHiddenLabel={false}
              type={InputType.HIDDEN}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            {image ? <img src={image}></img> : <>
              <Button
                type={ButtonType.BUTTON}
                label=""
                hasHiddenLabel={true}
                styleType={ButtonStyleType.WITHOUT_BORDER}
                color={ButtonColor.PRIMARY_DARK}
              >
                <label htmlFor="uploadFile" className={styles.fileLabel}>
                  Change avatar
                </label>
              </Button>

              <input name="uploadFile" type="file" id="uploadFile" hidden onChange={handleUploadFile} />
            </>}
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
