import * as React from 'react';
import clsx from 'clsx';
import {
  // InputType,
  // InputColor,
  ButtonType,
  ButtonColor,
  ButtonStyleType,
} from 'common/enums';
import  { Button } from 'components/common';

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

          <div className={clsx(styles.message, styles.in)}>
            <img src={avatar} />
            <div>
              Ut nunc aliquam, amet, aliquet adipiscing mi gravida.
            </div>
            <span>10:08</span>
          </div>

          <div className={clsx(styles.message, styles.out)}>
            <img src={avatar} />
            <div>
              Lorem ipsum dolor sit amet, adipiscing elit. Dictum?
            </div>
            <span>9:52</span>
          </div>

          <div className={styles.hr}>
            <span>Today</span>
          </div>

          <div className={clsx(styles.message, styles.out)}>
            <img src={avatar} />
            <div>
              Ut nunc aliquam, amet, aliquet adipiscing mi gravida.
            </div>
            <span>08:32</span>
          </div>

          <div className={clsx(styles.message, styles.in)}>
            <img src={avatar} />
            <div>
              Lorem ipsum dolor sit amet, adipiscing elit. Dictum?
            </div>
            <span>08:28</span>
          </div>

          <div className={styles.hr}>
            <span>09 Mar</span>
          </div>

          <div className={clsx(styles.message, styles.in)}>
            <img src={avatar} />
            <div>
              Ut nunc aliquam, amet, aliquet adipiscing mi gravida.
            </div>
            <span>10:08</span>
          </div>

          <div className={clsx(styles.message, styles.out)}>
            <img src={avatar} />
            <div>
              Lorem ipsum dolor sit amet, adipiscing elit. Dictum?
            </div>
            <span>9:52</span>
          </div>

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
