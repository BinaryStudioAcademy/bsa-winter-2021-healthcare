import { Op } from 'sequelize';
import { MessageModel } from '../models';
import { IMessage } from '~/common/interfaces';
import { MessageKey, SortType } from '~/common/enums';

class Messages {

  public getMessagesByUserId(toUserId: string, userId: string): Promise<IMessage[]> {
    return MessageModel.findAll({

      attributes: {
        exclude: [MessageKey.TO],
      },

      where: {
        [Op.or]: [
          {
            [Op.and]: [
              { [MessageKey.TO]: toUserId },
              { [MessageKey.USER_ID]: userId },
            ],
          },
          {
            [Op.and]: [
              { [MessageKey.TO]: userId },
              { [MessageKey.USER_ID]: toUserId },
            ],
          },
        ],
      },

      order: [
        [MessageKey.CREATED_AT, SortType.DESC],
      ],

    });
  }

  public createMessage(message: IMessage): Promise<IMessage> {
    return MessageModel.create(message);
  }
}

export { Messages };
