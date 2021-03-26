import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, DateFormat, Icon, NoDataLabel } from 'common/enums';
import { IUserTypeDoctor } from 'common/interfaces';
import { RootState } from 'common/types';
import { Details, Link, NoDataPlaceholder } from 'components/common';
import { getFormattedDate } from 'helpers';
import { ProfileActionCreator } from 'store/slices';
import styles from './appointments.module.scss';

const Appointments: React.FC = () => {
  const dispatch = useDispatch();
  const { appointments, user } = useSelector(({ profile }: RootState) => ({
    appointments: profile.appointments,
    user: profile.user,
  }));

  React.useEffect(() => {
    dispatch(
      ProfileActionCreator.getAllAppointments(
        (user as IUserTypeDoctor).doctor?.id,
      ),
    );
  }, []);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.container}>
        <div className={styles.infoHeader}>
          <span className={styles.title}>Appointments</span>
        </div>
        <div className={styles.appointmentContainer}>
          {appointments.length ? (
            appointments.map((appointment) => {
              return (
                <div key={appointment.id} className={styles.item}>
                  <Details
                    icon={Icon.APPOINTMENT}
                    title={`${appointment.user.name} ${appointment.user.surname}`}
                  >
                    <div className={styles.appointmentInfo}>
                      <div className={styles.leftInfo}>
                        <div>Type: {appointment.type}</div>
                        <div>
                          <Link
                            to={`${AppRoute.USER_PROFILE}/${appointment.user.id}`}
                          >
                            User Profile
                          </Link>
                        </div>
                      </div>
                      <div className={styles.rightInfo}>
                        Date:{' '}
                        {getFormattedDate(
                          appointment.date,
                          DateFormat.D_MMMM_YYYY_H_MM_SS,
                        )}
                      </div>
                    </div>
                  </Details>
                </div>
              );
            })
          ) : (
            <NoDataPlaceholder label={NoDataLabel.NO_APPOINTMENTS} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
