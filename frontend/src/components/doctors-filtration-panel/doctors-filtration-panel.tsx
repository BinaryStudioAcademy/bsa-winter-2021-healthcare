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
  [DoctorFiltration.SPECIALTY]: DoctorType.SURGEON,
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

  const onSubmit = (data: IDoctorFiltrationPayload) => {
    console.log(data);
  };

  const onCheckboxChange = (name: keyof IDoctorCheckbox) => {
    setCheckboxesValues({
      ...checkboxesValues,
      [name]: !checkboxesValues[name]
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              onChange={() => onCheckboxChange(DoctorType.PEDIATRICIAN)}
              isChecked={checkboxesValues[DoctorType.PEDIATRICIAN]}
              name={DoctorType.PEDIATRICIAN}
              label={DoctorType.PEDIATRICIAN}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={() => onCheckboxChange(DoctorType.ENDOCRINOLOGIST)}
              isChecked={checkboxesValues[DoctorType.ENDOCRINOLOGIST]}
              name={DoctorType.ENDOCRINOLOGIST}
              label={DoctorType.ENDOCRINOLOGIST}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={() => onCheckboxChange(DoctorType.DENTIST)}
              isChecked={checkboxesValues[DoctorType.DENTIST]}
              name={DoctorType.DENTIST}
              label={DoctorType.DENTIST}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={() => onCheckboxChange(DoctorType.SURGEON)}
              isChecked={checkboxesValues[DoctorType.SURGEON]}
              name={DoctorType.SURGEON}
              label={DoctorType.SURGEON}
              control={control}
            />
          </div>
          <div className={styles.filterCheckbox}>
          <Checkbox
              onChange={() => onCheckboxChange(DoctorType.DERMATOLOGIST)}
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
              onChange={() => onCheckboxChange(ClinicType.PRIVATE)}
              isChecked={checkboxesValues[ClinicType.PRIVATE]}
              name={ClinicType.PRIVATE}
              label={ClinicType.PRIVATE}
              control={control}
            />
          </div>
            <div className={styles.filterCheckbox}>
            <Checkbox
              onChange={() => onCheckboxChange(ClinicType.STATE)}
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
