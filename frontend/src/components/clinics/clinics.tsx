import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { ClinicsActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import { Button } from 'components/common';
import { Clinic, AddClinicPopup } from './components';
import { IClinicPayload } from 'common/interfaces';
import { ButtonColor, ButtonStyleType, ButtonType } from 'common/enums';

const Clinics: React.FC = () => {
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));
  const [isShowPopUp, setIsShowPopUp] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCreateClinic = (clinicInfo: IClinicPayload) => {
    dispatch(ClinicsActionCreator.addClinic(clinicInfo));
    handleTogglePopUp();
  };

  const handleTogglePopUp = () => setIsShowPopUp(!isShowPopUp);

  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics());
  }, []);

  return (
    <>
      <div className={styles.clinicsPageWrapper}>
        <div className={styles.filterWrapper}>
          <Button
            label="Add"
            hasHiddenLabel={false}
            type={ButtonType.BUTTON}
            onClick={handleTogglePopUp}
            color={ButtonColor.PRIMARY_DARK}
            styleType={ButtonStyleType.WITHOUT_BORDER}
          />
        </div>
        <div className={styles.clinicsWrapper}>
          <div className={styles.clinicsContainer}>
            {clinics.map((clinic) => (
              <Clinic key={clinic?.id} clinic={clinic} />
            ))}
          </div>
        </div>
      </div>
      <AddClinicPopup
        onCreateClinic={handleCreateClinic}
        onFormHide={handleTogglePopUp}
        isOpen={isShowPopUp}
      />
    </>
  );
};

export default Clinics;
