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

import  { HorizontalLine, Message } from './components';

import styles from './styles.module.scss';
import avatar from 'assets/images/phone.svg';

const Chats: React.FC = () => {

  return (
    <div className={styles.container}>

      <div className={styles.memberList}>

        <div className={clsx(styles.member, styles.selected)}>
          <img src={avatar} />
          <span>Giana Levin</span>
          00:00
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Jakob Rosser</span>
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Jaylon Curtis</span>
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Jakob Rosser</span>
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Jaylon Curtis</span>
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Jakob Rosser</span>
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Jakob Rosser</span>
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Jaylon Curtis</span>
        </div>

        <div className={styles.member}>
          <img src={avatar} />
          <span>Last Jaylon Curtis</span>
        </div>

      </div>

      <div className={styles.chat}>

        <div className={clsx(styles.headMessageList)}>
          <span>Giana Levin</span>
        </div>

        <div className={styles.messageList}>

          <Message avatar={avatar} message={{ text: 'Ut nunc aliquam, amet, aliquet adipiscing mi gravida.', createAt: '2021-03-19T13:43:38.447Z' }} />

          <Message avatar={avatar} isOutcoming={true} message={{ text: 'Lorem ipsum dolor sit amet, adipiscing elit. Dictum?', createAt: '2021-03-19T10:33:38.447Z' }} />

          <HorizontalLine label="Today" />

          <Message avatar={avatar} isOutcoming={true} message={{ text: 'Lorem ipsum dolor sit amet, adipiscing elit. Dictum?', createAt: '2021-03-19T10:33:38.447Z' }} />

          <Message avatar={avatar} message={{ text: 'Ut nunc aliquam, amet, aliquet adipiscing mi gravida.', createAt: '2021-03-19T13:43:38.447Z' }} />

          <HorizontalLine label="09 Mar" />

          <Message avatar={avatar} message={{ text: 'Ut nunc aliquam, amet, aliquet adipiscing mi gravida.', createAt: '2021-03-19T13:43:38.447Z' }} />

          <Message avatar={avatar} isOutcoming={true} message={{ text: 'Lorem ipsum dolor sit amet, adipiscing elit. Dictum?', createAt: '2021-03-19T10:33:38.447Z' }} />

        </div>

        <div className={clsx(styles.inputMessageForm)}>
          <div>Ut nunc aliquam, amet, aliquet adipiscing mi gravida.</div>
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

      </div>
    </div>
  );
};

export default Chats;
