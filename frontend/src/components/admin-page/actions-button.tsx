import React from 'react';
import downloadIcon from 'assets/images/admin-page/vectordownload.svg';
import pdfIcon from 'assets/images/admin-page/vectorpdf.svg';
import editIcon from 'assets/images/admin-page/vectoredit.svg';
import historyIcon from 'assets/images/admin-page/vectorhistory.svg';
import styles from './styles.module.scss';

interface IProps {
  edit: (id: string) => void,
  deleteUser: (id:string)=> void,
  id: string,
}

function ActionsButton({ edit, id, deleteUser }: IProps) {
  return (
    <div className={styles.iconsDiv}>
      <div onClick={() => edit(id)} className={styles.iconDiv}>
        <img src={editIcon} />
      </div>
      <button onClick={() => deleteUser(id)}>DELETE</button>
      <div className={styles.iconDiv}>
        <img src={pdfIcon} />
      </div>
      <div className={styles.iconDiv}>
        <img src={downloadIcon} />
      </div>
      <div className={styles.iconDiv}>
        <img src={historyIcon} />
      </div>
    </div>
  );
}

export default ActionsButton;
