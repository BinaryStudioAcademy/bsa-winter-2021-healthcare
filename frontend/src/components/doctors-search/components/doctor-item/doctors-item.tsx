import * as React from 'react';
import phoneIcon from 'assets/images/icons/phone.svg';
import locationIcon from 'assets/images/icons/location.svg';
import chatIcon from 'assets/images/icons/chat.svg';
import { Card, CardBody, CardImage, CardHeader, CardMain, CardFooter } from 'components/common';
import { IUserTypeDoctor } from 'common/interfaces';
import { ClinicType } from 'common/enums';
import { Button } from 'components/common';
import { ButtonType, ButtonColor, ButtonStyleType } from 'common/enums';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  user:IUserTypeDoctor
}

const DoctorItem: React.FC<Props> = ({user}) => {

  const { clinicType } = user.doctor.clinic;

  return (
    <Card>
      <CardImage url={user.imagePath} />
      <CardBody>
        <CardHeader>
          <span className={styles.department}>{user.doctor.department}</span>
          <span className={styles.name}>{user.name} {user.surname}</span>
          <span className={styles.clinicName}>{user.doctor.clinic.name}</span>
          <div className={clsx({
            [styles.clinicType]: true,
            [styles.private]: clinicType === ClinicType.PRIVATE,
            [styles.state]: clinicType === ClinicType.STATE
          })}>{user.doctor.clinic.clinicType} clinic</div>
        </CardHeader>
        <CardMain>
          <div className={styles.infoItem}>
            <img src={locationIcon} width="16" height="22" loading="lazy" alt="location-icon"/>
            <span className={styles.text}>{user.doctor.clinic.address}</span>
          </div>
          <div className={styles.infoItem}>
            <img src={phoneIcon} width="20" height="20" loading="lazy" alt="phone-icon"/>
            <span className={styles.text}>{user.phone}</span>
          </div>
        </CardMain>
        <CardFooter>
          <div className={styles.button}>
            <Button
              label="Make an appointment"
              hasHiddenLabel={false}
              type={ButtonType.SUBMIT}
              color={ButtonColor.PRIMARY_DARK}
              styleType={ButtonStyleType.WITHOUT_BORDER}
            />
          </div>
          <div className={styles.icon}>
            <img src={chatIcon} width="23" height="21" loading="lazy" alt="chat-icon"/>
          </div>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default DoctorItem;
