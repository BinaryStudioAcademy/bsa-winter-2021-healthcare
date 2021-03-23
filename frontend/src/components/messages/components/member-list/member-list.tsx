import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { MessagesActionCreator } from 'store/slices';
import { Member, AddMemeberForm, HorizontalLine  } from '../../components';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const MemberList: React.FC<Props> = ({ className }) => {
  React.useEffect(() => {
    dispatch(MessagesActionCreator.loadMembersAsChats());
  }, []);

  const { members, selectedMemberId } = useSelector(({ messages: { members, selectedMember } }: RootState) => ({
    members,
    selectedMemberId: selectedMember?.id,
  }));

  const dispatch = useDispatch();

  const handlerSelectMember = React.useCallback(
    (id: string) => dispatch(MessagesActionCreator.selectMember(id)),
    [dispatch],
  );

  return (
    <div className={clsx(styles.memberList, className)}>
      <AddMemeberForm />
      <HorizontalLine />
      {members.map((member) => (
        <Member
          key={member.id}
          label={member.name}
          avatar={member.avatarPath}
          isSelected={member.id === selectedMemberId}
          id={member.id}
          onClick={handlerSelectMember}
        />
      ))}

    </div>
  );
};

export default MemberList;
