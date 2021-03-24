import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { ClinicsActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import { Button } from 'components/common';
import { Clinic, AddClinicPopup } from './components';
import { IClinicPayload } from 'common/interfaces';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  PermissionName,
} from 'common/enums';
import { checkHasPermission } from 'helpers';

const Clinics: React.FC = () => {
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));

  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));

  const hasPermissionToAddClinic = checkHasPermission(
    [PermissionName.CREATE_CLINIC],
    user?.permissions ?? [],
  );

  const [isShowPopUp, setIsShowPopUp] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCreateClinic = (clinicInfo: IClinicPayload, nameValue:string) => {
    dispatch(
      ClinicsActionCreator.addClinic({
        ...DEFAULT_CLINIC_VALUE,
        ...clinicInfo,
      }, nameValue),
    );
    handleHidePopUp();
  };

  const handleTogglePopUp = () => setIsShowPopUp(!isShowPopUp);

  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics());
  }, []);

  return (
    <>
      <div className={styles.clinicsPageWrapper}>
        {hasPermissionToAddClinic && (
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
        )}
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
