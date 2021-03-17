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
import { Button, DateInput, Select, TextInput } from 'components/common';
import { createOptions } from 'helpers';
import { EditUserCb, HideFormCb } from 'components/users/common/types';

type Props = {
  user: IUser;
  onEditUser: EditUserCb;
  onFormHide: HideFormCb;
};

const genderOptions = createOptions<string>(Object.values(UserSex));
const userTypeOptions = createOptions<string>(Object.values(UserType));

const EditUserPopup: React.FC<Props> = ({ user, onEditUser, onFormHide }) => {
  const userWithDate: IEditUserPayload = {
    ...user,
    birthdate: new Date(user.birthdate),
  };

  const { handleSubmit, errors, control } = useForm<IEditUserPayload>({
    resolver: yupResolver(validationEditUser),
    defaultValues: userWithDate,
    mode: 'onChange',
  });

  const handleFormSubmit = (userData: IEditUserPayload) => onEditUser(userData);

  return (
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

        <div className={styles.inputBlock} style={{ display: 'none' }}>
          <TextInput
            name={EditUserPayloadKey.IMAGE_PATH}
            label="Avatar"
            hasHiddenLabel={true}
            type={InputType.HIDDEN}
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
  );
};

export default EditUserPopup;
