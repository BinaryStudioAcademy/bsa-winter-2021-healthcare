import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import {
  InputType,
  InputColor,
  UserKey,
} from 'common/enums';
import { TextInput } from 'components/common';
import { MessagesActionCreator } from 'store/slices';
import { debounce } from 'helpers';
import { DELAY_TIMEOUT, DEAULT_SEARCH_VALUE } from './common/constants';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const AddUserForm: React.FC<Props> = ({ className }) => {

  const { errors, control, getValues } = useForm({
    defaultValues: {
      [UserKey.NAME]: '',
    },
  });

  const dispatch = useDispatch();

  const handleFormSubmit = React.useCallback(() => {
    const name = getValues()[UserKey.NAME] || DEAULT_SEARCH_VALUE;
    dispatch(MessagesActionCreator.loadFilteredUsersAsChats(name));
  }, []);

  const handleChange = React.useCallback(debounce(handleFormSubmit, DELAY_TIMEOUT), []);

  return (
    <form onChange={handleChange} className={clsx(styles.addUserForm, className)}>
      <div className={styles.inputText}>
        <TextInput
          name={UserKey.NAME}
          placeholder="Type a name..."
          type={InputType.SEARCH}
          label="Name"
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
