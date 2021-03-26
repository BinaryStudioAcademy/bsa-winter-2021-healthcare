import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUserTypeDoctor } from 'common/interfaces';
import { RootState } from 'common/types';
import { ProfileActionCreator } from 'store/slices';
import { SelectClinic } from './components';

type Props = {
  user: IUserTypeDoctor;
};

const AddClinic: React.FC<Props> = ({ user }) => {
  const { doctorDetails } = useSelector(({ profile }: RootState) => ({
    doctorDetails: profile.doctorDetails,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ProfileActionCreator.getClinics());
    user.id && dispatch(ProfileActionCreator.getDoctorDetailsAsync(user.id));
  }, [user]);

  return <SelectClinic user={user} doctorDetails={doctorDetails} />;
};

export default AddClinic;
