import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';

type Props = {
  open: boolean
}

const Modal: React.FC<Props> = ({ open=false }) => {    
  const [isOpen, setIsOpen] = React.useState(open);
  return(
      <div className={ clsx({
        [styles.modalContainer]: true,
        [styles.open]: isOpen,
        [styles.close]: !isOpen
      })}>
        <div className={styles.modalBody}>
          <span 
            className={styles.closeSymbol}
            onClick={()=> setIsOpen(false)}
            >&#10005;</span>
        </div>
      </div>
    )
};

export default Modal;
