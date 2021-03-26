import * as React from 'react';
import { useForm } from 'react-hook-form';
import styles from './filtration.module.scss';
import { TextInput, Checkbox, Details } from 'components/common';
import {
  DoctorType,
  ClinicType,
  InputType,
  InputColor,
  DoctorFiltration,
  Icon,
} from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';
import { DEFAULT_FILTER_VALUE } from '../common/constants';
import { doctorSpecialtiesToReadable, clinicTypesToReadable } from '../../common';
import { useDispatch } from 'react-redux';
import { DoctorsActionCreator } from 'store/slices';
import { debounce } from 'helpers';

const doctorSpecialties = Object.values(DoctorType);
const clinicTypes = Object.values(ClinicType);

const Filtration: React.FC = () => {
  const { control, errors, register, getValues } = useForm<IDoctorFiltrationPayload>({
    defaultValues: DEFAULT_FILTER_VALUE,
    mode: 'onChange',
  });
  const DELAY_TIMEOUT = 1000;
  const dispatch = useDispatch();

  const dispatchFilterData = () => {
    dispatch(DoctorsActionCreator.getDoctorsAsync(getValues()));
  };

  const handleChange = React.useCallback(debounce(dispatchFilterData, DELAY_TIMEOUT), []);

  return (
    <form className={styles.panel} onChange={handleChange}>
      <div className={styles.filters}>
        <div className={styles.filterHeader}>Filter by</div>
        <div className={styles.commonFilter}>
          <TextInput
            name={DoctorFiltration.DOCTOR_NAME}
            label="Search by doctor's name"
            hasHiddenLabel
            placeholder="Type a doctor's name..."
            type={InputType.SEARCH}
            color={InputColor.WHITE}
            control={control}
            errors={errors}
          />
        </div>
        <Details icon={Icon.LOCATION} title="Location">
          <TextInput
            name={DoctorFiltration.CITY}
            label={DoctorFiltration.CITY}
            hasHiddenLabel
            placeholder="City..."
            type={InputType.TEXT}
            color={InputColor.WHITE}
            control={control}
            errors={errors}
          />
        </Details>
        <Details
          icon={Icon.SPECIALTY}
          title="Specialty"
        >
          {doctorSpecialties.map((doctorSpecialty) => (
            <div className={styles.filterCheckbox} key={doctorSpecialty}>
              <Checkbox
                name={DoctorFiltration.SPECIALTY}
                value={doctorSpecialty}
                label={doctorSpecialtiesToReadable[doctorSpecialty]}
                register={register}
                errors={errors}
              />
            </div>
          ))}
        </Details>
        <Details
          icon={Icon.CLINIC}
          title="Type of clinic"
        >
          {clinicTypes.map((clinicType) => (
            <div className={styles.filterCheckbox} key={clinicType}>
              <Checkbox
                name={DoctorFiltration.TYPE_OF_CLINIC}
                value={clinicType}
                label={clinicTypesToReadable[clinicType]}
                register={register}
                errors={errors}
              />
            </div>
          ))}
        </Details>
      </div>
    </form>
  );
};

export default Filtration;
