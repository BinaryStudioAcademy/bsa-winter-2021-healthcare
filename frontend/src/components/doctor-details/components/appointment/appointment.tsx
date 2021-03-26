import * as React from 'react';
import { DateInput, Radio, Button } from 'components/common';
import { InputColor, AppointmentTime, CreateAppointmentKey } from 'common/enums';
import { ICreateAppointment } from 'common/interfaces';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createdAppointment as createdAppointmentSchema } from 'validation-schemas';
import { createOptions } from 'helpers';
import { ButtonColor, ButtonStyleType, ButtonType, ButtonIcon } from 'common/enums';
import { CreateAppointmentCb } from '../../common';
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
  const {
    handleSubmit,
    register,
    watch,
    errors,
    control,
  } = useForm<Partial<ICreateAppointment>>({
    resolver: yupResolver(createdAppointmentSchema),
  });
  const time = watch( CreateAppointmentKey.TIME, undefined);

  const handleFormSubmit = (formData:Partial<ICreateAppointment>) => {
    onCreate(formData);
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
          name={CreateAppointmentKey.DATE}
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
            name={CreateAppointmentKey.TIME}
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
