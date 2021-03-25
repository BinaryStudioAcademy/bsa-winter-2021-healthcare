import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUserTypeDoctor } from 'common/interfaces';
import { RootState } from 'common/types';
import { ClinicsActionCreator, DoctorsActionCreator } from 'store/slices';
import { SelectClinic } from './components';

type Props = {
  user: IUserTypeDoctor;
};

const AddClinic: React.FC<Props> = ({ user }) => {
  const { doctorDetails } = useSelector(({ doctors }: RootState) => ({
    doctorDetails: doctors.doctorDetails,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics());
    user.id && dispatch(DoctorsActionCreator.getDoctorDetailsAsync(user.id));
  }, [user]);

  return <SelectClinic user={user} doctorDetails={doctorDetails} />;
};

export default AddClinic;
