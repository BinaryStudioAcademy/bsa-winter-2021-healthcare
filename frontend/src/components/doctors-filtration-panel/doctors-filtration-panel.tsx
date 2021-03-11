import * as React from 'react';
import styles from './doctors-filtration.module.scss';
import clsx from 'clsx';
import location from 'assets/images/location.svg';
import specialty from 'assets/images/specialty.svg';
import clinic from 'assets/images/clinic.svg';
import record from 'assets/images/record.svg';
import wallet from 'assets/images/wallet.svg';
import star from 'assets/images/star.svg';
import { TextInput, Checkbox } from 'components/common';
import { DoctorType, ClinicType, AppointmentType, PaymentType, DoctorAssessment, InputType, InputColor } from 'common/enums';
import Details from 'components/common/details/details';

const DoctorsFiltration: React.FC = () => {
  return (
    <>
    <div className={clsx(styles.panel)}>
      <div className={clsx(styles.filters)}>
        <div className={clsx(styles.filterHeader)}>Filter by</div>
        <div className={clsx(styles.commonFilter)}>
          <TextInput
            type={InputType.SEARCH}
            color={InputColor.GRAY_LIGHT}
            label=""
            name="Search"
            value=""
            placeholder="Type a doctor name..."
            onChange={() => ""}
          />
        </div>
        <Details
          icon={location}
          title="Location"
        >
          <TextInput
            type={InputType.TEXT}
            color={InputColor.GRAY_LIGHT}
            label=""
            name="City"
            value=""
            placeholder="City..."
            onChange={() => ""}
          />
          <TextInput
            type={InputType.TEXT}
            color={InputColor.GRAY_LIGHT}
            label=""
            name="District"
            value=""
            placeholder="District..."
            onChange={() => ""}
          />
        </Details>
        <Details
          icon={specialty}
          title="Specialty"
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
          title="Type of clinic"
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
          title="Type of reception"
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
          title="Payment"
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
          title="Doctor's assessment"
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
    </>
  )
}

export default DoctorsFiltration;
