import * as React from 'react';
import { useForm } from 'react-hook-form';
import styles from './doctors-filtration.module.scss';
import location from 'assets/images/location.svg';
import specialty from 'assets/images/specialty.svg';
import clinic from 'assets/images/clinic.svg';
import { TextInput, Checkbox } from 'components/common';
import { DoctorType, ClinicType, InputType, InputColor, DoctorFiltration } from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';
import { DEFAULT_VALUES } from './common/constants/payload-default-values'
import Details from 'components/common/details/details';

const DoctorsFiltration: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<IDoctorFiltrationPayload>({
    defaultValues: DEFAULT_VALUES,
    mode: "onChange"
  });

  const handleSubmitForm = (formData: IDoctorFiltrationPayload) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
    <div className={styles.panel}>
      <div className={styles.filters}>
        <div className={styles.filterHeader}>Filter by</div>
        <div className={styles.commonFilter}>
          <TextInput
            name={DoctorFiltration.DOCTOR_NAME}
            label="Search by doctor's name"
            hasHiddenLabel={false}
            placeholder="Type a doctor's name..."
            type={InputType.SEARCH}
            color={InputColor.WHITE}
            control={control}
            errors={errors}
            />
        </div>
        <Details
          icon={location}
          title="Location"
        >
          <TextInput
            name={DoctorFiltration.CITY}
            label={DoctorFiltration.CITY}
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
          title="Specialty"
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
          title="Type of clinic"
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
