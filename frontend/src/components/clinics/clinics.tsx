import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { ClinicsActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import { Button } from 'components/common';
import { Clinic, AddClinicPopup } from './components';
import { IClinic } from 'common/interfaces';
import { DEFAULT_CLINIC_VALUE } from './components/common/constants';
import { ButtonColor, ButtonStyleType, ButtonType, PermissionName } from 'common/enums';
import { checkHasPermission } from 'helpers';

const Clinics: React.FC = () => {
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));

  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));

  const hasPermissionToAddCLinic = checkHasPermission([PermissionName.CREATE_CLINIC], user?.permissions ?? []);

  const [isShowPopUp, setIsShowPopUp] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCreateClinic = (clinicInfo: IClinic) => {
    dispatch(
      ClinicsActionCreator.addClinic({
        ...DEFAULT_CLINIC_VALUE,
        ...clinicInfo,
      }),
    );
    handleHidePopUp();
  };

  const handleShowPopUp = () => setIsShowPopUp(true);
  const handleHidePopUp = () => setIsShowPopUp(false);
  const clinicCreationSidebar = (
    <div className={styles.filterWrapper}>
      <Button
        label="Add"
        hasHiddenLabel={false}
        type={ButtonType.BUTTON}
        onClick={handleShowPopUp}
        color={ButtonColor.PRIMARY_DARK}
        styleType={ButtonStyleType.WITHOUT_BORDER}
      />
    </div>
  );

  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics());
  }, []);

  return (
    <>
      <div className={styles.clinicsPageWrapper}>
        { hasPermissionToAddCLinic && clinicCreationSidebar }
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
        onFormHide={handleHidePopUp}
        isOpen={isShowPopUp}
      />
    </>
  );
};

export default Clinics;
