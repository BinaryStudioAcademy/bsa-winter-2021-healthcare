import * as React from 'react';
import { Button } from 'components/common';
import { InfoBlock, CardField, SecButton } from 'common/types';
import { ButtonProps } from 'common/interfaces';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  imagePath?:string
  headerFields?:CardField[]
  infoBlocks?:InfoBlock[]
  mainButton?: ButtonProps
  secButton?: SecButton
}

const Card: React.FC<Props> = ({
  imagePath,
  headerFields,
  infoBlocks,
  mainButton,
  secButton
}) => {
  return(
  <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imagePath} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
        {headerFields && headerFields.map(field=>{
          return(
            <span
              key={field.label}
              className={clsx(styles[field.fieldType], styles[field.label])}>
                {field.label}
            </span>
          )
        })}
        </div>
        <div className={styles.cardInfoBlocks}>
          {infoBlocks && infoBlocks.map(infoBlock => {
            return (
              <div className={styles.infoItem} key={infoBlock.icon}>
                <span className={clsx(styles.icon, styles[infoBlock.icon])}></span>
                <span className={styles.text}>{infoBlock.label}</span>
              </div>
            )
          })}
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.mainButton}>
            {mainButton &&
            <Button
              label={mainButton.label}
              hasHiddenLabel={mainButton.hasHiddenLabel}
              type={mainButton.type}
              color={mainButton.color}
              styleType={mainButton.styleType}
            />}
          </div>
          {secButton &&
          <div className={styles.secButton}>
            <span className={clsx(styles.icon, styles[secButton.icon])}></span>
          </div>}
        </div>
      </div>
    </div>
  )
};

export default  Card;
