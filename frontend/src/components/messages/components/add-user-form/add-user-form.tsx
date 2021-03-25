import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import {
  InputType,
  InputColor,
  ButtonType,
  ButtonColor,
  ButtonStyleType,
  UserKey,
} from 'common/enums';
import { TextInput, Button } from 'components/common';
import { MessagesActionCreator } from 'store/slices';
import { debounce } from 'common/helpers';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const AddUserForm: React.FC<Props> = ({ className }) => {

  const { handleSubmit, errors, control, formState: { isDirty }, getValues } = useForm({
    defaultValues: {
      [UserKey.NAME]: null,
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const handleFormSubmit = React.useCallback(() => {
    const name = getValues()[UserKey.NAME] || '*';
    dispatch(MessagesActionCreator.loadFilteredUsersAsChats(name));
  }, []);

  const DELAY_TIMEOUT = 1000;
  const handleChange = React.useCallback(debounce(handleFormSubmit, DELAY_TIMEOUT), []);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} onChange={handleChange} className={clsx(styles.addUserForm, className)}>
      <div className={styles.submitBtn}>
        <Button
          label="New chat"
          hasHiddenLabel={false}
          type={ButtonType.SUBMIT}
          color={ButtonColor.PRIMARY_DARK}
          styleType={ButtonStyleType.WITHOUT_BORDER}
          isDisabled={!isDirty}
        />
      </div>
      <div className={styles.inputText}>
        <TextInput
          name={UserKey.NAME}
          placeholder="Type a name..."
          type={InputType.TEXT}
          label=""
          hasHiddenLabel={true}
          color={InputColor.WHITE}
          control={control}
          errors={errors}
        />
      </div>
    </form>
  );
};

export default AddUserForm;
