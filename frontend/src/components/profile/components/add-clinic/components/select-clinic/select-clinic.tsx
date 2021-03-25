import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IDoctorDetails, IUserTypeDoctor } from 'common/interfaces';
import { RootState } from 'common/types';
import { DoctorsActionCreator } from 'store/slices';
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
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));
  const dispatch = useDispatch();

  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: DEFAULT_VALUE_FOR_CLINIC_SELECT,
    resolver: yupResolver(addDoctorToClinicValidation),
    mode: 'onSubmit',
  });

  const clinicsNamesOptions = createOptions<string>(
    Object.values(getClinicsName(clinics)),
  );
  const handleSubmitForm = (data: DoctorsClinic) => {
    const clinicName = data.name;
    const clinic = getClinicByName(clinicName, clinics);

    dispatch(
      clinic &&
        DoctorsActionCreator.addDoctorToClinic(user.id as string, clinic.id),
    );
  };

  React.useEffect(() => {
    doctorDetails &&
      doctorDetails.doctor.clinic &&
      setValue(ClinicKey.NAME, doctorDetails.doctor.clinic.name);
  }, [doctorDetails]);

  return (
    <form
      className={styles.addClinicForm}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Select
        name={ClinicKey.NAME}
        label="Select your clinic:"
        hasHiddenLabel={false}
        placeholder="Clinics"
        options={clinicsNamesOptions}
        color={InputColor.GRAY_LIGHT}
        control={control}
        errors={errors}
      />
      <div className={styles.submitBtn}>
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
