import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  Icon,
  DateFormat,
  UserType,
  NoDataLabel,
} from 'common/enums';
import { RootState } from 'common/types';
import { Button, Details, NoDataPlaceholder } from 'components/common';
import { ProfileActionCreator } from 'store/slices';
import { getFormattedDate } from 'helpers';
import AddDiagnosisPopup from '../add-diagnosis-popup/add-diagnosis-popup';

import styles from './diagnoses.module.scss';

type Props = {
  userId: string;
};

const Diagnoses: React.FC<Props> = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { diagnoses, authorizedUser } = useSelector(
    ({ profile, auth }: RootState) => ({
      diagnoses: profile.diagnoses,
      authorizedUser: auth.user,
    }),
  );

  React.useEffect(() => {
    dispatch(ProfileActionCreator.getAllDiagnoses(userId));
  }, []);

  const handleTogglePopup = () => setIsModalOpen(!isModalOpen);

  const hasDiagnoses = Boolean(diagnoses.length);

  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.container}>
          <div className={styles.infoHeader}>
            <span className={styles.title}>Diagnoses</span>
            {authorizedUser?.type === UserType.DOCTOR && (
              <div className={styles.addButton}>
                <Button
                  label="Add"
                  hasHiddenLabel={false}
                  type={ButtonType.SUBMIT}
                  color={ButtonColor.GRAY_LIGHT}
                  styleType={ButtonStyleType.WITH_BORDER}
                  onClick={handleTogglePopup}
                />
              </div>
            )}
          </div>
          <div className={styles.diagnosesContainer}>

            {hasDiagnoses
              ? diagnoses.map(diagnosis => {
                return (
                  <div key={diagnosis.id} className={styles.item}>
                    <Details icon={Icon.SPECIALTY} title={diagnosis.diagnosis}>
                      <div className={styles.diagnosisInfo}>
                        <div className={styles.name}>{diagnosis.description}</div>
                        <div className={styles.time}>
                          {getFormattedDate(
                            diagnosis.createdAt,
                            DateFormat.D_MMMM_YYYY_H_MM_SS,
                          )}
                        </div>
                      </div>
                    </Details>
                  </div>
                );
              })
              : <NoDataPlaceholder label={NoDataLabel.NO_DIAGNOSES} />}

          </div>
        </div>
      </div>

      <AddDiagnosisPopup
        userId={userId}
        onClose={handleTogglePopup}
        isOpen={isModalOpen}
      />
    </>
  );
};

export default Diagnoses;
