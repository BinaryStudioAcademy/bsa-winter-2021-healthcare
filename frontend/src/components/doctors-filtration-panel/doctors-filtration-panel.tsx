import * as React from 'react';
import { useForm } from 'react-hook-form';
import styles from './doctors-filtration.module.scss';
import location from 'assets/images/location.svg';
import specialty from 'assets/images/specialty.svg';
import clinic from 'assets/images/clinic.svg';
import { TextInput, Checkbox } from 'components/common';
import { DoctorType, ClinicType, InputType, InputColor, DoctorFiltration } from 'common/enums';
import { IDoctorFiltrationPayload, IDoctorCheckbox } from 'common/interfaces';
import Details from 'components/common/details/details';

const DEFAULT_VALUES: IDoctorFiltrationPayload = {
  [DoctorFiltration.SEARCH]: '',
  [DoctorFiltration.CITY]: '',
  [DoctorFiltration.SPECIALTY]: [],
  [DoctorFiltration.TYPE_OF_CLINIC]: ClinicType.STATE
}

const CHECKBOXES_DEFAULT_VALUES: IDoctorCheckbox = {
  [DoctorType.PEDIATRICIAN]: false,
  [DoctorType.ENDOCRINOLOGIST]: false,
  [DoctorType.DENTIST]: false,
  [DoctorType.SURGEON]: false,
  [DoctorType.DERMATOLOGIST]: false,
  [ClinicType.PRIVATE]: false,
  [ClinicType.STATE]: false
}

const DoctorsFiltration: React.FC = () => {
  const [checkboxesValues, setCheckboxesValues] = React.useState(CHECKBOXES_DEFAULT_VALUES);

  const { handleSubmit, control, errors } = useForm<IDoctorFiltrationPayload>({
    defaultValues: DEFAULT_VALUES,
    mode: "onChange"
  });

  const handleSubmitForm = (data: IDoctorFiltrationPayload) => {
    console.log(data);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxesValues({
      ...checkboxesValues,
      [event.target.name]: !checkboxesValues[event.target.name as keyof IDoctorCheckbox]
    })
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
    <div className={styles.panel}>
      <div className={styles.filters}>
        <div className={styles.filterHeader}>Filter by</div>
        <div className={styles.commonFilter}>
          <TextInput
            name={DoctorFiltration.SEARCH}
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
          title={DoctorFiltration.LOCATION}
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
              onChange={handleCheckboxChange}
              isChecked={checkboxesValues[DoctorType.PEDIATRICIAN]}
              name={DoctorType.PEDIATRICIAN}
              label={DoctorType.PEDIATRICIAN}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={handleCheckboxChange}
              isChecked={checkboxesValues[DoctorType.ENDOCRINOLOGIST]}
              name={DoctorType.ENDOCRINOLOGIST}
              label={DoctorType.ENDOCRINOLOGIST}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={handleCheckboxChange}
              isChecked={checkboxesValues[DoctorType.DENTIST]}
              name={DoctorType.DENTIST}
              label={DoctorType.DENTIST}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={handleCheckboxChange}
              isChecked={checkboxesValues[DoctorType.SURGEON]}
              name={DoctorType.SURGEON}
              label={DoctorType.SURGEON}
              control={control}
            />
          </div>
          <div className={styles.filterCheckbox}>
          <Checkbox
              onChange={handleCheckboxChange}
              isChecked={checkboxesValues[DoctorType.DERMATOLOGIST]}
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
              onChange={handleCheckboxChange}
              isChecked={checkboxesValues[ClinicType.PRIVATE]}
              name={ClinicType.PRIVATE}
              label={ClinicType.PRIVATE}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={handleCheckboxChange}
              isChecked={checkboxesValues[ClinicType.STATE]}
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
