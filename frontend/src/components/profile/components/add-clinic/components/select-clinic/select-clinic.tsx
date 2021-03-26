import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IDoctorDetails, IUserTypeDoctor } from 'common/interfaces';
import { RootState } from 'common/types';
import { ProfileActionCreator } from 'store/slices';
import { Button, Select } from 'components/common';
import { createOptions } from 'helpers';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  ClinicKey,
  InputColor,
} from 'common/enums';
import { DEFAULT_VALUE_FOR_CLINIC_SELECT } from 'components/profile/components/add-clinic/constants';
import {
  getClinicByName,
  getClinicsName,
} from 'components/profile/components/add-clinic/helpers';
import { addDoctorToClinic as addDoctorToClinicValidation } from 'validation-schemas/doctor/add-doctor-to-clinic';
import styles from './styles.module.scss';
import { DoctorsClinic } from 'components/profile/components/add-clinic/common';

type Props = {
  doctorDetails: IDoctorDetails | null;
  user: IUserTypeDoctor;
};

const SelectClinic: React.FC<Props> = ({ user, doctorDetails }) => {
  const { clinics } = useSelector(({ profile }: RootState) => ({
    clinics: profile.clinics,
  }));
  const dispatch = useDispatch();

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: DEFAULT_VALUE_FOR_CLINIC_SELECT,
    resolver: yupResolver(addDoctorToClinicValidation),
    mode: 'onSubmit',
  });

  const clinicsNamesOptions = createOptions<string>(
    getClinicsName(clinics),
    (clinicName) => {
      const clinic = getClinicByName(clinicName, clinics);
      const clinicId = clinic && clinic.id;
      return {
        value: clinicId as string,
        label: clinicName,
      };
    },
  );

  const handleSubmitForm = (data: DoctorsClinic) => {
    dispatch(
      ProfileActionCreator.addDoctorToClinic(user.id as string, data.name),
    );
  };

  React.useEffect(() => {
    doctorDetails?.doctor?.clinic && setValue(ClinicKey.NAME, doctorDetails.doctor?.clinic?.id);
  }, [doctorDetails]);

  return (
    <form
      className={styles.selectFormWrapper}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className={styles.selectWrapper}>
        <Select
          name={ClinicKey.NAME}
          label="Select clinic:"
          hasHiddenLabel={false}
          placeholder="Select"
          options={clinicsNamesOptions}
          color={InputColor.GRAY_LIGHT}
          control={control}
          errors={errors}
        />
      </div>
      <div className={styles.selectSubmitWrapper}>
        <Button
          label="Save"
          hasHiddenLabel={false}
          type={ButtonType.SUBMIT}
          color={ButtonColor.PRIMARY_DARK}
          styleType={ButtonStyleType.WITHOUT_BORDER}
        />
      </div>
    </form>
  );
};

export { SelectClinic };
