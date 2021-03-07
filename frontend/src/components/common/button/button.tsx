import clsx from 'clsx';
import { ButtonNames } from 'common/enums';
import * as React from 'react';
import styles from './styles.module.scss';

interface ButtonTypes {
  [ButtonNames.SIGN_IN]: string;
  [ButtonNames.SIGN_IN_GOOGLE]: string;
  [ButtonNames.APPOINTMENT]: string;
  [ButtonNames.COVID]: string;
  [ButtonNames.READ_ALL]: string;
}

const BUTTON_TEXT: ButtonTypes = {
  [ButtonNames.SIGN_IN]: 'Sign in',
  [ButtonNames.SIGN_IN_GOOGLE]: 'Sign in with Google',
  [ButtonNames.APPOINTMENT]: 'Make an appointment',
  [ButtonNames.COVID]: 'COVID 19 Help',
  [ButtonNames.READ_ALL]: 'Read all reviews',
};

interface ButtonType {
  btnType: keyof ButtonTypes;
  fill: boolean;
  border: boolean;
  onClick(): void;
}

export const Button: React.FC<ButtonType> = ({ fill, border, btnType, onClick }) => {

  const btnBackground = fill ? styles.filled : '';
  const btnBorder = border ? styles.bordered : '';

  return (
    <button
      className={clsx(styles.btn, styles[btnType], btnBackground, btnBorder)}
      type='button'
      onClick={onClick}>
      {BUTTON_TEXT[btnType]}
    </button>
  );
}
