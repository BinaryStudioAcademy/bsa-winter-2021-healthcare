import * as React from 'react';
import { RootState } from 'common/types';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorsActionCreator, AppointmentActionCreator } from 'store/slices';
import { DataStatus, AppointmentType } from 'common/enums';
import { useParams } from 'react-router-dom';
import { ParamTypes } from './common';
import { Appointment, Doctor } from './components';
import { ICreateAppointment } from 'common/interfaces';

import styles from './styles.module.scss';

const DoctorDetails: React.FC = () => {
  const { doctorDetails, dataStatus } = useSelector(
    ({ doctors }: RootState) => ({
      doctorDetails: doctors.doctorDetails,
      dataStatus: doctors.dataStatus,
    }),
  );
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();

  React.useEffect(() => {
    dispatch(DoctorsActionCreator.getDoctorDetailsAsync(id));
  }, []);

  const handleCreateAppointment = (date:string) => {
    const AppointmentData:ICreateAppointment = {
      date,
      type: AppointmentType.ONLINE,
      cost: 500,
      subject: 'Problems with spine',
      doctorId: (doctorDetails?.id as string),
    };
    dispatch(AppointmentActionCreator.createAppointment(AppointmentData));
  };

  if (dataStatus === DataStatus.PENDING || !doctorDetails) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.doctorsDetailsContainer}>
      <Appointment onCreate={handleCreateAppointment} />
      <Doctor doctorDetails={doctorDetails}/>
    </div>
  );
};

export default DoctorDetails;
