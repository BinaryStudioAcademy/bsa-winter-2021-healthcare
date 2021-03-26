import { IUser } from 'common/interfaces';
import { UserSex, UserType } from 'common/enums';
import defaultDoctorMan from 'assets/images/default-doctor-man.jpg';
import defaultDoctorWoman from 'assets/images/default-doctor-woman.jpg';
import defaultPatientMan from 'assets/images/default-patient-man.jpg';
import defaultPatientWoman from 'assets/images/default-patient-woman.jpg';

const getDefaultAvatar = (user: IUser): string => {
  return (
    (user.sex === UserSex.MALE ? (
      user.type === UserType.DOCTOR ? defaultDoctorMan : defaultPatientMan
    ) : (
      user.type === UserType.DOCTOR ? defaultDoctorWoman : defaultPatientWoman
    ))
  );
};

export { getDefaultAvatar };
