import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';

type Props = {
  open: boolean
  close: () => void
}

const Modal: React.FC<Props> = ({ open=false, close }) => {    
  return(
      <div className={ clsx({
        [styles.modalContainer]: true,
        [styles.open]: open,
        [styles.close]: !open
      })}>
        <div className={styles.modalBody}>
          <span 
            className={styles.closeSymbol}
            onClick={()=> close()}
            >&#10005;</span>
        </div>
      </div>
    )
};

export default Modal;
