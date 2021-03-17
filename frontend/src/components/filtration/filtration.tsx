import * as React from 'react';
import { useForm } from 'react-hook-form';
import styles from './filtration.module.scss';
import { TextInput, Checkbox, Details } from 'components/common';
import { DoctorType, ClinicType, InputType, InputColor, DoctorFiltration, Icon } from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';
import { DEFAULT_VALUES } from './common/constants/payload-default-values'

const doctorSpecialties = Object.keys(DoctorType);
const clinicTypes = Object.keys(ClinicType);

const Filtration: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<IDoctorFiltrationPayload>({
    defaultValues: DEFAULT_VALUES,
    mode: "onChange",
  });

  const handleSubmitForm = (formData: IDoctorFiltrationPayload) => formData;

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className={styles.panel}>
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
          <Details
            icon={Icon.LOCATION}
            title="Location"
          >
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
                  name={doctorSpecialty}
                  label={doctorSpecialty}
                  control={control}
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
                  name={clinicType}
                  label={clinicType}
                  control={control}
                />
              </div>
            ))}
          </Details>
        </div>
      </div>
    </form>
  )}

export { Filtration };
