import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  Icon,
  InputColor,
  InputType,
  DiagnosisKey,
} from 'common/enums';
import { IDiagnosis, IUser } from 'common/interfaces';
import { RootState } from 'common/types';
import { Button, Details, TextInput } from 'components/common';
import { ProfileActionCreator } from 'store/slices';

import styles from './diagnoses.module.scss';

type Props = {
  user: IUser;
};

const Diagnoses: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control, errors } = useForm<IDiagnosis>({
    defaultValues: {
      diagnosis: '',
    },
    mode: 'onChange',
  });

  const { diagnoses } = useSelector(({ profile }: RootState) => ({
    diagnoses: profile.diagnoses,
  }));

  const handleAddDiagnosis = ({ diagnosis }: IDiagnosis) => {
    dispatch(ProfileActionCreator.addDiagnosis(user.id as string, diagnosis));
    reset();
  };

  React.useEffect(() => {
    dispatch(ProfileActionCreator.getAllDiagnoses(user.id as string));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoHeader}>
        <span className={styles.title}>Diagnoses</span>
      </div>
      <div className={styles.diagnosesContainer}>
        {diagnoses.map((diagnosis) => {
          return (
            <div key={diagnosis.id} className={styles.item}>
              <Details icon={Icon.SPECIALTY} title={diagnosis.diagnosis}>
                <div className={styles.diagnosisInfo}>
                  <div className={styles.name}>{diagnosis.diagnosis}</div>
                  <div className={styles.time}>
                    {moment(diagnosis.createdAt).format('DD-MM-YYYY hh:mm:ss')}
                  </div>
                </div>
              </Details>
            </div>
          );
        })}
      </div>
      <div className={styles.diagnosisForm}>
        <form onSubmit={handleSubmit(handleAddDiagnosis)}>
          <div>
            <TextInput
              name={DiagnosisKey.DIAGNOSIS}
              label="Diagnoses"
              hasHiddenLabel={false}
              placeholder="Diagnosis..."
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div>
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
    </div>
  );
};

export { Diagnoses };
