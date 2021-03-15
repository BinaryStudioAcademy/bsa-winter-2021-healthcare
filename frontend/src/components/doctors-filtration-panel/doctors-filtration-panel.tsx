import * as React from 'react';
import { useForm } from 'react-hook-form';
import styles from './doctors-filtration.module.scss';
import clsx from 'clsx';
import location from 'assets/images/location.svg';
import specialty from 'assets/images/specialty.svg';
import clinic from 'assets/images/clinic.svg';
import record from 'assets/images/record.svg';
import wallet from 'assets/images/wallet.svg';
import star from 'assets/images/star.svg';
import { TextInput, Checkbox } from 'components/common';
import { DoctorType, ClinicType, AppointmentType, PaymentType, DoctorAssessment, InputType, InputColor, DoctorFiltration } from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';
import Details from 'components/common/details/details';

const DEFAULT_VALUES: IDoctorFiltrationPayload = {
  [DoctorFiltration.SEARCH]: '',
  [DoctorFiltration.CITY]: '',
  [DoctorFiltration.DISTRICT]: '',
  [DoctorFiltration.SPECIALTY]: DoctorType.SURGEON,
  [DoctorFiltration.TYPE_OF_CLINIC]: ClinicType.STATE,
  [DoctorFiltration.TYPE_OF_RECEPTION]: AppointmentType.OFFLINE,
  [DoctorFiltration.PAYMENT]: PaymentType.CLINIC_PRICE,
  [DoctorFiltration.DOCTORS_ASSESSMENT]: DoctorAssessment.NORMAL
}

const DoctorsFiltration: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<IDoctorFiltrationPayload>({
    defaultValues: DEFAULT_VALUES,
    mode: "onChange"
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className={clsx(styles.panel)}>
      <div className={clsx(styles.filters)}>
        <div className={clsx(styles.filterHeader)}>Filter by</div>
        <div className={clsx(styles.commonFilter)}>
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
          <TextInput
            name={DoctorFiltration.DISTRICT}
            label=""
            hasHiddenLabel={false}
            placeholder="District..."
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
          <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorType.PEDIATRICIAN}
              label={DoctorType.PEDIATRICIAN}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorType.ENDOCRINOLOGIST}
              label={DoctorType.ENDOCRINOLOGIST}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorType.DENTIST}
              label={DoctorType.DENTIST}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorType.SURGEON}
              label={DoctorType.SURGEON}
            />
          </div>
          <div className={clsx(styles.filterCheckbox)}>
          <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorType.DERMATOLOGIST}
              label={DoctorType.DERMATOLOGIST}
            />
          </div>
        </Details>
        <Details
          icon={clinic}
          title={DoctorFiltration.TYPE_OF_CLINIC}
        >
          <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={ClinicType.PRIVATE}
              label={ClinicType.PRIVATE}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={ClinicType.STATE}
              label={ClinicType.STATE}
            />
          </div>
        </Details>
        <Details
          icon={record}
          title={DoctorFiltration.TYPE_OF_RECEPTION}
        >
          <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={AppointmentType.ONLINE}
              label={AppointmentType.ONLINE}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={AppointmentType.OFFLINE}
              label={AppointmentType.OFFLINE}
            />
          </div>
        </Details>
        <Details
          icon={wallet}
          title={DoctorFiltration.PAYMENT}
        >
          <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={PaymentType.GUARANTEE_PROGRAM}
              label={PaymentType.GUARANTEE_PROGRAM}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={PaymentType.CLINIC_PRICE}
              label={PaymentType.CLINIC_PRICE}
            />
          </div>
        </Details>
        <Details
          icon={star}
          title={DoctorFiltration.DOCTORS_ASSESSMENT}
        >
          <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorAssessment.WITHOUT_ASSESSMENT}
              label={DoctorAssessment.WITHOUT_ASSESSMENT}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorAssessment.NORMAL}
              label={DoctorAssessment.NORMAL}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorAssessment.GOOD}
              label={DoctorAssessment.GOOD}
            />
          </div>
            <div className={clsx(styles.filterCheckbox)}>
            <Checkbox
              onChange={() => ""}
              isChecked={true}
              name={DoctorAssessment.VERY_GOOD}
              label={DoctorAssessment.VERY_GOOD}
            />
          </div>
        </Details>
      </div>
    </div>
    </form>
  )
}

export default DoctorsFiltration;
