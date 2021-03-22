import * as React from 'react';
import { DateInput, Radio, Button } from 'components/common';
import { InputColor, AppointmentTime } from 'common/enums';
import { useForm } from 'react-hook-form';
import { createOptions } from 'helpers';
import { ButtonColor, ButtonStyleType, ButtonType, ButtonIcon } from 'common/enums';
import {
  AppointmentFormPaiload,
  AppointmentFormKey,
  CreateAppointmentCb,
} from '../../common';
import { setTimeToDate } from 'helpers';
import calendarIcon from 'assets/images/calendar.svg';
import clockIcon from 'assets/images/clock.svg';
import styles from './styles.module.scss';

const timeOptions = createOptions<string>(
  Object.values(AppointmentTime),
  (appointmentHours) => ({
    value: appointmentHours,
    label: appointmentHours,
  }),
);

type Props = {
  onCreate: CreateAppointmentCb;
};

const Appointment: React.FC<Props> = ({ onCreate }) => {
  const { handleSubmit, register, watch, errors, control } = useForm<AppointmentFormPaiload>();
  const time = watch( AppointmentFormKey.TIME, undefined);

  const handleFormSubmit = (formData:AppointmentFormPaiload) => {
    const appointmentDate = setTimeToDate(formData.date, formData.time);      
    onCreate(appointmentDate);
  };

  return (
    <div className={styles.appointmentContainer}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.headerBlock}>
          <img
            src={calendarIcon}
            width="24"
            height="24"
            loading="lazy"
            alt="phone-icon"
          />
          <span className={styles.text}>Select the day</span>
        </div>
        <DateInput
          name={AppointmentFormKey.DATE}
          label="Select the day"
          hasHiddenLabel={true}          
          color={InputColor.GRAY_LIGHT}
          control={control}
          errors={errors}
          isInline={true}
        />      
        <div className={styles.headerBlock}>
          <img
            src={clockIcon}
            width="24"
            height="24"
            loading="lazy"
            alt="phone-icon"
          />
          <span className={styles.text}>Select the time</span>
        </div>
        <div className={styles.radio}>
          <Radio
            options={timeOptions}
            register={register}
            value={time}
            name={AppointmentFormKey.TIME}
            errors={errors}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <Button
              label={'Make an appointment'}
              hasHiddenLabel={false}
              color={ButtonColor.PRIMARY_DARK}
              styleType={ButtonStyleType.WITHOUT_BORDER}
              type={ButtonType.SUBMIT}
            />
          </div>
          <Button
            label={'Chat'}
            hasHiddenLabel={true}
            color={ButtonColor.GRAY_LIGHT}
            styleType={ButtonStyleType.LARGE_ROUND}
            icon={ButtonIcon.CHAT}
            type={ButtonType.BUTTON}
          />
        </div>        
      </form>
    </div>
  );
};

export default Appointment;
