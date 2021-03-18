import * as React from 'react';
import { useForm } from 'react-hook-form';
import styles from './filtration.module.scss';
import { TextInput, Checkbox, Details } from 'components/common';
import { DoctorType, ClinicType, InputType, InputColor, DoctorFiltration, Icon } from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';
import { getTruthyEntities } from 'helpers';
import { DEFAULT_FILTER_VALUE } from '../common/constants';

const doctorSpecialties = Object.keys(DoctorType).map((key) => key.toLocaleLowerCase());
const clinicTypes = Object.keys(ClinicType).map((key) => key.toLocaleLowerCase());

const Filtration: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<IDoctorFiltrationPayload>({
    defaultValues: DEFAULT_FILTER_VALUE,
    mode: "onBlur",
  });

  const handleSubmitForm = (formData: IDoctorFiltrationPayload) => {
    const filterPayload: IDoctorFiltrationPayload = {
      ...formData,
      specialty: getTruthyEntities(...formData.specialty),
      typeOfClinic: getTruthyEntities(...formData.typeOfClinic),
    };

    return filterPayload;
  };

  return (
    <form onBlur={handleSubmit(handleSubmitForm)}>
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
              name={DoctorFiltration.CITY.toLocaleLowerCase()}
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
            {doctorSpecialties.map((doctorSpecialty, index) => (
              <div className={styles.filterCheckbox} key={doctorSpecialty}>
                <Checkbox
                  name={DoctorFiltration.SPECIALTY + `[${index}]`}
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
            {clinicTypes.map((clinicType, index) => (
              <div className={styles.filterCheckbox} key={clinicType}>
                <Checkbox
                  name={DoctorFiltration.TYPE_OF_CLINIC + `[${index}]`}
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

export default Filtration;
