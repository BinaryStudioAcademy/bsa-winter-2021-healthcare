import * as React from "react";
import { ButtonColor, ButtonStyleType, AppRoute } from "common/enums";
import { Button } from "components/common";
import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = {
  subtitle?: string;
  title: string;
  label?: string;
  btnLabel?: string;
  btnHref?: AppRoute;
  imagePath: string;
};

const Card: React.FC<Props> = ({
  subtitle,
  title,
  label,
  btnLabel,
  btnHref,
  imagePath,
  children
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imagePath} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
          <span className={styles.subtitle}>{subtitle}</span>
          <span className={styles.title}>{title}</span>
          {label && <span className={clsx(styles.label, styles[label])}>{label}</span>}
        </div>
        <div className={styles.cardInfoBlocks}>{children}</div>
        <div className={styles.cardFooter}>
          { btnLabel && <div className={styles.button}>
            <Button
              label={btnLabel}
              href={btnHref}
              hasHiddenLabel={false}
              color={ButtonColor.PRIMARY_DARK}
              styleType={ButtonStyleType.WITHOUT_BORDER}
            />
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
