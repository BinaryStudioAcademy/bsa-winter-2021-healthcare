import { AppRoute, DateFormat, Icon } from 'common/enums';
import { IUserTypeDoctor } from 'common/interfaces';
import { RootState } from 'common/types';
import { Details, Link } from 'components/common';
import { getFormattedDate } from 'helpers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
                  <Details icon={Icon.APPOINTMENT} title={appointment.subject}>
                    <div className={styles.appointmentInfo}>
                      <div>Type: {appointment.type}</div>
                      <div>Cost: {appointment.cost}</div>
                      <div>
                        Date:{' '}
                        {getFormattedDate(
                          appointment.date,
                          DateFormat.D_MMMM_YYYY_H_MM_SS,
                        )}
                      </div>
                      <div>
                        <Link
                          to={`${AppRoute.USER_PROFILE}/${appointment.userId}`}
                        >
                          User Profile
                        </Link>
                      </div>
                    </div>
                  </Details>
                </div>
              );
            })
          ) : (
            <p>There is no information here yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
