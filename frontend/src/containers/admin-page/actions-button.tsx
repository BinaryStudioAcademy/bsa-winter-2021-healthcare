import React from 'react';
import downloadIcon from 'assets/images/admin-page/vectordownload.svg';
import pdfIcon from 'assets/images/admin-page/vectorpdf.svg';
import editIcon from 'assets/images/admin-page/vectoredit.svg';
import historyIcon from 'assets/images/admin-page/vectorhistory.svg';
import styles from './styles.module.scss';

function ActionsButton() {
  return (
    <div >
      <div>
        <img src={editIcon} />
      </div>
      <div>
        <img src={pdfIcon} />
      </div>
      <div>
        <img src={downloadIcon} />
      </div>
      <div>
        <img src={historyIcon} />
      </div>
    </div>
  );
}

export default ActionsButton;
