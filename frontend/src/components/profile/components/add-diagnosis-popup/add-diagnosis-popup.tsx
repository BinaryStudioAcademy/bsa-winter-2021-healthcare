import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { IDiagnosisPayload } from 'common/interfaces';
import { DEFAULT_DIAGNOSIS_VALUE } from 'components/profile/common';
import { ProfileActionCreator } from 'store/slices';
import { addDiagnosis as addDiagnosisValidationSchema } from 'validation-schemas';
import { Button, Modal, TextInput } from 'components/common';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  DiagnosisKey,
  InputColor,
  InputType,
} from 'common/enums';

import styles from './add-diagnosis-popup.module.scss';
import { BindingCb } from 'common/types';

type Props = {
  userId: string;
  isOpen: boolean;
  onClose: BindingCb;
};

const AddDiagnosisPopup: React.FC<Props> = ({ userId, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const { handleSubmit, reset, control, errors } = useForm<IDiagnosisPayload>({
    resolver: yupResolver(addDiagnosisValidationSchema),
    defaultValues: DEFAULT_DIAGNOSIS_VALUE,
    mode: 'onChange',
  });

  const handleAddDiagnosis = ({
    diagnosis,
    description,
  }: IDiagnosisPayload) => {
    dispatch(
      ProfileActionCreator.addDiagnosis({ diagnosis, description, userId }),
    );
    reset();
    onClose();
  };

  return (
    <Modal isShow={isOpen}>
      <div className={styles.diagnosisForm}>
        <div className={styles.closeButton}>
          <button type="button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleAddDiagnosis)}
        >
          <div className={styles.textInput}>
            <TextInput
              name={DiagnosisKey.DIAGNOSIS}
              label="Diagnosis name"
              hasHiddenLabel={false}
              placeholder="Diagnosis..."
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.textInput}>
            <TextInput
              name={DiagnosisKey.DESCRIPTION}
              label="Description"
              hasHiddenLabel={false}
              placeholder="Description..."
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.submitButton}>
            <Button
              label="Add"
              hasHiddenLabel={false}
              type={ButtonType.SUBMIT}
              color={ButtonColor.GRAY_LIGHT}
              styleType={ButtonStyleType.WITH_BORDER}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddDiagnosisPopup;
