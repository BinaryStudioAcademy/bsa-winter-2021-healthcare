import * as React from 'react';
import Clinic from './components/clinic/clinic';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { ClinicsActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import { Modal } from 'components/common';
import AddClinic from './components/add-clinic/add-clinic';
import { IClinic } from 'common/interfaces';
import { DEFAULT_CLINIC_VALUE } from './components/add-clinic/common';
import { Button } from 'components/common';
import { ButtonColor, ButtonStyleType, ButtonType } from 'common/enums';

const Clinics: React.FC = () => {
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));
  const [showPopUp, setShowPopUp] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCreateClinic = (clinicInfo: IClinic) => {
    dispatch(
      ClinicsActionCreator.addClinic({
        ...DEFAULT_CLINIC_VALUE,
        ...clinicInfo,
      }),
    );
    hidePopUpHandler();
  };

  const showPopUpHandler = () => setShowPopUp(true);
  const hidePopUpHandler = () => setShowPopUp(false);

  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics());
  }, []);

  return (
    <>
      <div className={styles.clinicsPageWrapper}>
        <Modal isShow={showPopUp}>
          <AddClinic
            onCreateClinic={handleCreateClinic}
            onFormHide={hidePopUpHandler}
          />
        </Modal>
        <div className={styles.filterWrapper}>
          <Button
            label="Add"
            hasHiddenLabel={false}
            type={ButtonType.BUTTON}
            onClick={showPopUpHandler}
            color={ButtonColor.PRIMARY_DARK}
            styleType={ButtonStyleType.WITHOUT_BORDER}
          />
        </div>
        <div className={styles.clinicsWrapper}>
          <div className={styles.clinicsContainer}>
            {clinics.map((clinic) => (
              <Clinic key={clinic.id} clinic={clinic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clinics;
