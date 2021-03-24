import { Sequelize, Op } from 'sequelize';
import { MemberModel, MessageModel } from '../models';
import { IMember, IMessage } from '~/common/interfaces';
import { MessageKey, MemberKey, SortType } from '~/common/enums';

class MessagesRepository {

  public getMembersByName(name: string): Promise<IMember[] | null> {
    return MemberModel.findAll({

      attributes: [
        'id',
        ['imagePath', MemberKey.AVATAR_PATH],
        [Sequelize.fn('concat', Sequelize.col(MemberKey.NAME), ' ', Sequelize.col('surname')), MemberKey.NAME],
      ],

      where: {
        [Op.or]: {
          [MemberKey.NAME]: {
            [Op.iLike]: `%${name}%`,
          },
          surname: {
            [Op.iLike]: `%${name}%`,
          },
        },
      },
    });
  }

  public getMessagesByMemberId(memberId: string, userId: string): Promise<IMessage[] | null> {
    return MessageModel.findAll({

      attributes: {
        exclude: [MessageKey.TO],
      },

      where: {
        [Op.or]: [
          {
            [Op.and]: [
              { [MessageKey.TO]: memberId },
              { [MessageKey.USER_ID]: userId },
            ],
          },
          {
            [Op.and]: [
              { [MessageKey.TO]: userId },
              { [MessageKey.USER_ID]: memberId },
            ],
          },
        ],
      },

      order: [
        [MessageKey.CREATED_AT, SortType.DESC],
      ],

    });
  }

  public createMessage(message: IMessage): Promise<IMessage | null> {
    return MessageModel.create(message);
  }
}

export { MessagesRepository };
