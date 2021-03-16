import * as React from 'react';
import { useForm } from 'react-hook-form';
import styles from './doctors-filtration.module.scss';
import location from 'assets/images/location.svg';
import specialty from 'assets/images/specialty.svg';
import clinic from 'assets/images/clinic.svg';
import { TextInput, Checkbox } from 'components/common';
import { DoctorType, ClinicType, InputType, InputColor, DoctorFiltration } from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';
import Details from 'components/common/details/details';

const DEFAULT_VALUES: IDoctorFiltrationPayload = {
  [DoctorFiltration.DOCTOR_NAME]: '',
  [DoctorFiltration.CITY]: '',
  [DoctorFiltration.SPECIALTY]: [],
  [DoctorFiltration.TYPE_OF_CLINIC]: ClinicType.STATE
}

const DoctorsFiltration: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<IDoctorFiltrationPayload>({
    defaultValues: DEFAULT_VALUES,
    mode: "onChange"
  });

  const handleSubmitForm = (data: IDoctorFiltrationPayload) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
    <div className={styles.panel}>
      <div className={styles.filters}>
        <div className={styles.filterHeader}>Filter by</div>
        <div className={styles.commonFilter}>
          <TextInput
            name={DoctorFiltration.DOCTOR_NAME}
            label=""
            hasHiddenLabel={false}
            placeholder="Type a doctor name..."
            type={InputType.SEARCH}
            color={InputColor.WHITE}
            control={control}
            errors={errors}
            />
        </div>
        <Details
          icon={location}
          title="location"
        >
          <TextInput
            name={DoctorFiltration.CITY}
            label=""
            hasHiddenLabel={false}
            placeholder="City..."
            type={InputType.TEXT}
            color={InputColor.WHITE}
            control={control}
            errors={errors}
          />
        </Details>
        <Details
          icon={specialty}
          title={DoctorFiltration.SPECIALTY}
        >
          <div className={styles.filterCheckbox}>
            <Checkbox
              name={DoctorType.PEDIATRICIAN}
              label={DoctorType.PEDIATRICIAN}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              name={DoctorType.ENDOCRINOLOGIST}
              label={DoctorType.ENDOCRINOLOGIST}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              name={DoctorType.DENTIST}
              label={DoctorType.DENTIST}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              name={DoctorType.SURGEON}
              label={DoctorType.SURGEON}
              control={control}
            />
          </div>
          <div className={styles.filterCheckbox}>
          <Checkbox
              name={DoctorType.DERMATOLOGIST}
              label={DoctorType.DERMATOLOGIST}
              control={control}
            />
          </div>
        </Details>
        <Details
          icon={clinic}
          title={DoctorFiltration.TYPE_OF_CLINIC}
        >
          <div className={styles.filterCheckbox}>
            <Checkbox
              name={ClinicType.PRIVATE}
              label={ClinicType.PRIVATE}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              name={ClinicType.STATE}
              label={ClinicType.STATE}
              control={control}
            />
          </div>
        </Details>
      </div>
    </div>
    </form>
  )
}

export default DoctorsFiltration;
