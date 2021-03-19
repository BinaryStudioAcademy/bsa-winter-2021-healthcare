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

import  { HorizontalLine, Message, Member } from './components';

import styles from './styles.module.scss';
import avatar from 'assets/images/phone.svg';

const Chats: React.FC = () => {

  return (
    <div className={styles.container}>

      <div className={styles.memberList}>

        <Member label="Giana Levin" info="00:00" avatar={avatar} isSelected={true} />
        <Member label="Jakob Rosser" avatar={avatar}/>
        <Member label="Jaylon Curtis" avatar={avatar} />
        <Member label="Dulce Mango" avatar={avatar}/>
        <Member label="Erin Dorwart" avatar={avatar} />
        <Member label="Jakob Rosser" avatar={avatar}/>
        <Member label="Leo Torff" avatar={avatar} />

      </div>

      <div className={styles.chat}>

        <div className={clsx(styles.headMessageList)}>
          <span>Giana Levin</span>
        </div>

        <div className={styles.messageList}>

          <Message avatar={avatar} message="Ut nunc aliquam, amet, aliquet adipiscing mi gravida." time="13:33" />
          <Message avatar={avatar} isOutcoming={true} message="Lorem ipsum dolor sit amet, adipiscing elit. Dictum?" time="10:33" />

          <HorizontalLine label="Today" />

          <Message avatar={avatar} isOutcoming={true} message="Lorem ipsum dolor sit amet, adipiscing elit. Dictum?" time="10:33" />
          <Message avatar={avatar} message="Ut nunc aliquam, amet, aliquet adipiscing mi gravida." time="13:43" />

          <HorizontalLine label="09 Mar" />

          <Message avatar={avatar} message="Ut nunc aliquam, amet, aliquet adipiscing mi gravida." time="13:43" />
          <Message avatar={avatar} isOutcoming={true} message="Lorem ipsum dolor sit amet, adipiscing elit. Dictum?" time="10:33" />

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
