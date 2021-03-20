import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import {
  InputType,
  InputColor,
  ButtonType,
  ButtonColor,
  ButtonStyleType,
} from 'common/enums';
import { RootState } from 'common/types';
import { TextInput, Button } from 'components/common';
import { ChatsActionCreator } from 'store/slices';

import styles from './styles.module.scss';

enum MessagePayloadKey {
  TO = 'to',
  TEXT = 'text',
}

interface IMessagePayload {
  [MessagePayloadKey.TO]: string;
  [MessagePayloadKey.TEXT]: string;
}

interface Props {
  className?: string;
}

const InputMessageForm: React.FC<Props> = ({ className }) => {
  const { selectedMemberId = '' } = useSelector(({ chats: { selectedMember } }: RootState) => ({
    selectedMemberId: selectedMember?.id,
  }));

  const DEFAULT_VALUES: IMessagePayload = {
    to: selectedMemberId,
    text: '',
  };
  const { handleSubmit, errors, control, reset, formState: { isDirty } } = useForm<IMessagePayload>({
    // resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = (formData: IMessagePayload) => {
    dispatch(ChatsActionCreator.sendMessage(formData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.inputMessageForm, className)}>
      <div className={styles.inputText}>
        <TextInput
          name={MessagePayloadKey.TEXT}
          label="Name"
          hasHiddenLabel={true}
          placeholder="Input Message"
          type={InputType.TEXT}
          color={InputColor.WHITE}
          control={control}
          errors={errors}
        />
      </div>
      <div className={styles.submitBtn}>
        <Button
          label="Send"
          hasHiddenLabel={false}
          type={ButtonType.SUBMIT}
          color={ButtonColor.PRIMARY_DARK}
          styleType={ButtonStyleType.WITHOUT_BORDER}
          isDisabled={!isDirty}
        />
      </div>
    </form>
  );
};

export default InputMessageForm;
