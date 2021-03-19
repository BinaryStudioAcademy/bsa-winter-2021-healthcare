import * as React from 'react';
import clsx from 'clsx';
import { Member } from '../../components';

import styles from './styles.module.scss';

import avatar from 'assets/images/phone.svg';

const members = [ // stor -> chats -> members
  {
    id: '111',
    name: 'Giana Levin',
    avatar: avatar,
  }, {
    id: '222',
    name: 'Jakob Rosser',
    avatar: avatar,
  }, {
    id: '333',
    name: 'Jaylon Curtis',
    avatar: avatar,
  }, {
    id: '444',
    name: 'Dulce Mango',
    avatar: avatar,
  }, {
    id: '555',
    name: 'Erin Dorwart',
    avatar: avatar,
  }, {
    id: '666',
    name: 'Jakob Rosser',
    avatar: avatar,
  }, {
    id: '777',
    name: 'Leo Torff',
    avatar: avatar,
  },
];

const selectedMemberId = '111';  // stor -> chats -> selectedMemberId

interface Props {
  className?: string;
}

const MemberList: React.FC<Props> = ({ className }) => (
  <div className={clsx(styles.memberList, className)}>
    {members.map((member) => <Member key={member.id} label={member.name} avatar={member.avatar} isSelected={member.id === selectedMemberId} id={member.id} />)}
  </div>
);

export default MemberList;
