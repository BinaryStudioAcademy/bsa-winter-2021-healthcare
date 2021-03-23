import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import {
  InputColor,
  ButtonType,
  ButtonColor,
  ButtonStyleType,
} from 'common/enums';
// import { message as messageValidationSchema } from 'validation-schemas';
import { IMember } from 'common/interfaces';
import { Button } from 'components/common';
import { SelectAsync } from '../../components';
import { ChatsActionCreator } from 'store/slices';

import styles from './styles.module.scss';

enum MemberPayloadKey {
  MEMBER = 'member',
}

interface IMemberPayload {
  [MemberPayloadKey.MEMBER]: IMember | null;
}

interface Props {
  className?: string;
}

const AddMemberForm: React.FC<Props> = ({ className }) => {

  const DEFAULT_VALUES: IMemberPayload = {
    [MemberPayloadKey.MEMBER]: null,
  };

  const { handleSubmit, errors, control, reset, formState: { isDirty } } = useForm<IMemberPayload>({
    // resolver: yupResolver(messageValidationSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const loadOptions = (inputValue: string, callback: any) => {
    dispatch(ChatsActionCreator.loadFilteredMembersAsOptions(inputValue, callback));
  };

  const onSubmit = (formData: IMemberPayload) => {
    formData.member && dispatch(ChatsActionCreator.addMember(formData.member));
    reset();
  };

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
        <SelectAsync
          name={MemberPayloadKey.MEMBER}
          placeholder="Type a name..."
          loadOptions={loadOptions}
          color={InputColor.WHITE}
          control={control}
          errors={errors}
        />
      </div>
    </form>
  );
};

export default AddMemberForm;
