import * as React from 'react';
import phoneIcon from 'assets/images/icons/phone.svg';
import checkIcon from 'assets/images/icons/check.svg';

import styles from './styles.module.scss';

/*  type Props = {
  doctor:IUserTypeDoctor
}  */
const doctor = {
  imagePath: '/images/photo.jpg',
  name: 'Vasilisa',
  surname: 'Frolova',
  department: 'Pediatrician',
  phone: '+10666666666',
  about: 'Капитан Испаньолы, мужественный и честный человек, занимающийся не только навигацией, но обустройством быта на корабле. Этот требовательный и сухой человек был нанят сквайром Трелони. Стреляет отвратительно, но зато прекрасно владеет холодным оружием.',
  specializations: [{
    id: '1',
    text: 'Conditions Treated',
  },
  {
    id: '2',
    text: 'Chest Wall Deformities',
  },
  {
    id: '3',
    text: 'General Pediatric Surgery',
  },
  {
    id: '4',
    text: 'Neonatal Minimally Invasive Surgery',
  },
  {
    id: '5',
    text: 'Pediatric Adrenal Masses',
  },
  {
    id: '6',
    text: 'Pediatric Parathyroid Tumors',
  },
  {
    id: '7',
    text: 'Pediatric Thyroid Tumors',
  },
  {
    id: '8',
    text: 'Thoracic Pediatric Surgery',
  }]
};
const DoctorDetails: React.FC = () => {

  return (
    <div className={styles.doctorsDetailsContainer}>

      <div className={styles.personalDataContainer}>
        <img className={styles.doctorImage} src={doctor.imagePath} alt={doctor.name} />
        <div className={styles.personalDataBody}>
          <span className={styles.department}>{doctor.department}</span>
          <div className={styles.phone}>
            <img src={phoneIcon} alt="phone-icon" />
            <span className={styles.phoneNumber}>{doctor.phone}</span>
          </div>
          <span className={styles.name}>{doctor.name} {doctor.surname}</span>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <span className={styles.aboutTitle}>About {doctor.name} {doctor.surname}</span>
        <div className={styles.aboutBody}>{doctor.about}</div>
      </div>

      <div className={styles.conditionsContainer}>
        <div className={styles.conditionsTitle}>
          <img src={checkIcon} alt="check-icon" />
          <span className={styles.titleText}>Conditions Treated</span>
        </div>
        <ul className={styles.conditionsList}>
          {doctor.specializations.map(spec =>
            <li key={spec.id}>{spec.text}</li>
          )}
        </ul>
      </div>

    </div>
  );
};

export default DoctorDetails;
