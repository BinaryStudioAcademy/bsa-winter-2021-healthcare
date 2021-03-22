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
  MessageKey,
} from 'common/enums';
import { IMessagePayload } from 'common/interfaces';
import { RootState } from 'common/types';
import { TextInput, Button } from 'components/common';
import { ChatsActionCreator } from 'store/slices';
import styles from './styles.module.scss';

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
    dispatch(ChatsActionCreator.sendMessage({ ...formData, to: selectedMemberId }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.inputMessageForm, className)}>
      <div className={styles.inputText}>
        <TextInput
          name={MessageKey.TEXT}
          label="Name"
          hasHiddenLabel={true}
          placeholder="Type a message"
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
