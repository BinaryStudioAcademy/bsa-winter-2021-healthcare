import clsx from "clsx";
import { DateChangeEvent, DatePayload } from "common/types";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./datepicker-custom-styles.scss";
import styles from './styles.module.scss';


interface Props {
  onChange: DateChangeEvent;
  selectedDate: DatePayload;
  isDisabled?: boolean;
  hasError?: boolean;
}

const DateInput: React.FC<Props> = ({ onChange, isDisabled, hasError, selectedDate }) => (
  <DatePicker
    calendarClassName={clsx(isDisabled && styles.disabled, hasError && styles.error)}
    selected={selectedDate}
    onChange={onChange}
    disabled
    inline
  />
);

export default DateInput;
