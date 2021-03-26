import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  Icon,
  DateFormat,
  NoDataLabels,
} from 'common/enums';
import { RootState } from 'common/types';
import { Button, Details, NoData } from 'components/common';
import { ProfileActionCreator } from 'store/slices';
import { getFormattedDate } from 'helpers';
import AddDiagnosisPopup from '../add-diagnosis-popup/add-diagnosis-popup';

import styles from './diagnoses.module.scss';

type Props = {
  userId: string;
  isDoctor: boolean;
};

const Diagnoses: React.FC<Props> = ({ userId, isDoctor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { diagnoses } = useSelector(({ profile }: RootState) => ({
    diagnoses: profile.diagnoses,
  }));

  React.useEffect(() => {
    dispatch(ProfileActionCreator.getAllDiagnoses());
  }, []);

  const handleTogglePopup = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.container}>
          <div className={styles.infoHeader}>
            <span className={styles.title}>Diagnoses</span>
            {isDoctor && (
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

            {!diagnoses.length && <NoData label={NoDataLabels.NO_DIAGNOSES} />}

            {diagnoses.map((diagnosis) => {
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
            })}
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
