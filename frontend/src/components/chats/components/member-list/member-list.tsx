import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { ChatsActionCreator } from 'store/slices';
import { Member } from '../../components';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const MemberList: React.FC<Props> = ({ className }) => {
  const { members, selectedMemberId } = useSelector(({ chats: { members, selectedMember } }: RootState) => ({
    members,
    selectedMemberId: selectedMember?.id,
  }));

  const dispatch = useDispatch();

  const handlerSelectMember = React.useCallback(
    (id: string) => dispatch(ChatsActionCreator.selectMember(id)),
    [dispatch],
  );

  return (
    <div className={clsx(styles.memberList, className)}>
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
