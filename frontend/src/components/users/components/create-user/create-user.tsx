import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  InputColor,
  InputType,
  RegisterPayloadKey,
  UserSex,
  UserType,
} from 'common/enums';
import { IRegisterPayload } from 'common/interfaces';
import { userRegister as validationUserSchema } from 'validation-schemas';
import styles from './styles.module.scss';
import { Button, DateInput, Select, TextInput, Modal } from 'components/common';
import { createOptions } from 'helpers';
import { CreateUserCb, HideFormCb } from 'components/users/common/types';

type Props = {
  onCreateUser: CreateUserCb;
  onFormHide: HideFormCb;
  isShow:boolean;
};

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.SEX]: UserSex.MALE,
  [RegisterPayloadKey.BIRTH_DATE]: '',
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.TYPE]: UserType.PATIENT,
};

const genderOptions = createOptions<string>(Object.values(UserSex));
const userTypeOptions = createOptions<string>(Object.values(UserType));

const CreateUserPopup: React.FC<Props> = ({ onCreateUser, onFormHide, isShow }) => {
  const { handleSubmit, errors, control } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const handleFormSubmit = (userData: IRegisterPayload) =>
    onCreateUser(userData);

  return (
    <Modal isShow={isShow}>
      <div className={styles.editContainer}>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={styles.createForm}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Add user</h2>
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
              name={RegisterPayloadKey.NAME}
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
              name={RegisterPayloadKey.SURNAME}
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
              name={RegisterPayloadKey.SEX}
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
              name={RegisterPayloadKey.BIRTH_DATE}
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
              name={RegisterPayloadKey.EMAIL}
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
              name={RegisterPayloadKey.PASSWORD}
              label="Password"
              hasHiddenLabel={false}
              placeholder="Password"
              type={InputType.PASSWORD}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={RegisterPayloadKey.RETYPE_PASSWORD}
              label="Retype password"
              hasHiddenLabel={false}
              placeholder="Retype password"
              type={InputType.PASSWORD}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={RegisterPayloadKey.PHONE}
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
              name={RegisterPayloadKey.TYPE}
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
              name={RegisterPayloadKey.IMAGE_PATH}
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
              label="Add"
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

export default CreateUserPopup;
