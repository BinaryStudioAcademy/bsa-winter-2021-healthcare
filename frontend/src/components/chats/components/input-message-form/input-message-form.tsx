import * as React from 'react';
import clsx from 'clsx';
import {
  // InputType,
  // InputColor,
  ButtonType,
  ButtonColor,
  ButtonStyleType,
} from 'common/enums';
import { Button } from 'components/common';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const InputMessageForm: React.FC<Props> = ({ className }) => (
  <div className={clsx(styles.inputMessageForm, className)}>
    <div>Input Message</div>
    <div className={styles.submitBtn}>
      <Button
        label="Send"
        hasHiddenLabel={false}
        type={ButtonType.SUBMIT}
        color={ButtonColor.PRIMARY_DARK}
        styleType={ButtonStyleType.WITHOUT_BORDER}
      />
    </div>
  </div>
);

export default InputMessageForm;
