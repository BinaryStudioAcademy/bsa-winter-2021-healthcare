import * as React from 'react';
import { RootState } from 'common/types';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorDetailsActionCreator } from 'store/slices';
import { DataStatus } from 'common/enums';
import { useParams } from 'react-router-dom';
import { ParamTypes } from './common';
import { Appointment, Doctor } from './components';
import { ICreateAppointment } from 'common/interfaces';

import styles from './styles.module.scss';

const DoctorDetails: React.FC = () => {
  const { doctor, dataStatus } = useSelector(
    ({ doctorDetails }: RootState) => ({
      doctor: doctorDetails.doctorDetails,
      dataStatus: doctorDetails.dataStatus,
    }),
  );
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();

  React.useEffect(() => {
    dispatch(DoctorDetailsActionCreator.getDoctorDetailsAsync(id));
  }, []);

  const handleCreateAppointment = (formData:Partial<ICreateAppointment>) => {
    dispatch(DoctorDetailsActionCreator
      .createAppointmentAsync(formData));
  };

  if (dataStatus === DataStatus.PENDING || !doctor) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.doctorsDetailsContainer}>
      <Appointment onCreate={handleCreateAppointment} />
      <Doctor doctor={doctor}/>
    </div>
  );
};

export default DoctorDetails;
