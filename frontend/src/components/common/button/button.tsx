import * as React from 'react';
import clsx from 'clsx';
import {
  AppRoute,
  ButtonColor,
  ButtonIcon,
  ButtonStyleType,
  ButtonType,
} from 'common/enums';
import { ButtonClickCallback } from 'common/types';
import Link from '../link/link';

import styles from './styles.module.scss';

interface Props {
  type?: ButtonType;
  styleType: ButtonStyleType;
  color: ButtonColor;
  label: string;
  onClick?: ButtonClickCallback;
  hasHiddenLabel: boolean;
  isDisabled?: boolean;
  icon?: ButtonIcon;
  href?: AppRoute | string;
}

const Button: React.FC<Props> = ({
  type = ButtonType.BUTTON,
  styleType,
  color,
  label,
  isDisabled,
  hasHiddenLabel,
  icon,
  href,
  onClick,
}) => {
  return href ? (
    <Link
      to={href}
      className={clsx(
        styles.btn,
        styles.btnLink,
        styles[styleType],
        styles[color],
        icon && styles[icon],
      )}
    >
      {hasHiddenLabel ? (
        <span className="visually-hidden">{label}</span>
      ) : (
        label
      )}
      {icon && <span className={clsx(styles.buttonIcon, styles[icon])}></span>}
    </Link>
  ) : (
    <button
      className={clsx(
        styles.btn,
        styles[styleType],
        styles[color],
        icon && styles[icon],
      )}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {hasHiddenLabel ? (
        <span className="visually-hidden">{label}</span>
      ) : (
        label
      )}
      {icon && <span className={clsx(styles.buttonIcon, styles[icon])}></span>}
    </button>
  );
};

export default Button;
