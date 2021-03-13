import * as React from 'react';
import styles from './styles.module.scss';

type Props = {
  url:string
}

const CardImage: React.FC<Props> = ({url}) => (
  <div className={styles.imageContainer}>
    <img className={styles.cardImage} src={url} />
  </div>
);

export { CardImage };
