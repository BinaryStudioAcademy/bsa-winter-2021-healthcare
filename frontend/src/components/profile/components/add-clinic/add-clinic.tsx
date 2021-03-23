import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IUserTypeDoctor } from 'common/interfaces';
import { RootState } from 'common/types';
import { ClinicsActionCreator } from 'store/slices';
import { Select } from 'components/common';
import { createOptions } from 'helpers';
import { getClinicsName } from './helpers';
import { InputColor } from 'common/enums';
import { DEFAULT_VALUE_FOR_CLINIC_SELECT } from './constants';

type Props = {
  user: IUserTypeDoctor;
};

const AddClinic: React.FC<Props> = ({ user }) => {
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));
  const dispatch = useDispatch();

  /*eslint-disable no-console*/
  console.log(clinics, user);
  /*eslint-disable no-console*/

  const { control, errors, getValues } = useForm({
    defaultValues: DEFAULT_VALUE_FOR_CLINIC_SELECT,
    mode: 'onChange',
  });

  const clinicsNamesOptions = createOptions<string>(
    Object.values(getClinicsName(clinics)),
  );
  const handleChange = () => console.log(getValues());
  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics());
  }, []);

  return (
    <form onChange={handleChange}>
      <Select
        name={'doctorsClinic'}
        label="Select your clinic:"
        hasHiddenLabel={false}
        placeholder="Clinics"
        options={clinicsNamesOptions}
        color={InputColor.GRAY_LIGHT}
        control={control}
        errors={errors}
      />
    </form>
  );
};

export default AddClinic;
