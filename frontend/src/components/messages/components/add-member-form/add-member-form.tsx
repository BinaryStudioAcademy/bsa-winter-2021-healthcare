import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';
import clsx from 'clsx';
import {
  InputType,
  InputColor,
  ButtonType,
  ButtonColor,
  ButtonStyleType,
  MemberKey,
} from 'common/enums';
import { TextInput, Button } from 'components/common';
import { MessagesActionCreator } from 'store/slices';
// import { debounce } from 'common/helpers';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

let startedSetTimeout = false;
const debounce = (fn: () => void, delayTimeout: number) => {
  !startedSetTimeout && window.setTimeout(() => {
    fn();
    startedSetTimeout = false;
  }, delayTimeout);
  startedSetTimeout = true;
};

const AddMemberForm: React.FC<Props> = ({ className }) => {

  const DEFAULT_VALUES = {
    [MemberKey.NAME]: null,
  };

  const { handleSubmit, errors, control, formState: { isDirty }, getValues } = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const memberValue: string | undefined = useWatch({ control, name: MemberKey.NAME });

  const dispatch = useDispatch();

  const onSubmit = React.useCallback(() => {
    const name = getValues()[MemberKey.NAME] || '*';
    dispatch(MessagesActionCreator.loadFilteredMembersAsChats(name));
  }, []);

  const DELAY_TIMEOUT = 1000;
  // const handleDebounce = React.useCallback(() => {
  //   debounce(()=> console.log('memberValue = ', memberValue), DELAY_TIMEOUT); // eslint-disable-line
  // }, []);

  React.useEffect(() => {
    // memberValue?.length && console.log('memberValue = ', memberValue); // eslint-disable-line
    memberValue?.length && debounce(onSubmit, DELAY_TIMEOUT);
  }, [memberValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.addMemberForm, className)}>
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
          name={MemberKey.NAME}
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

export default AddMemberForm;
