import { Sequelize, Op } from 'sequelize';
import { MemberModel, MessageModel } from '../models';
import { IMember, IMessage } from '~/common/interfaces';

class ChatRepository {
  public getMembersByName(name: string): Promise<IMember[] | null> {
    return MemberModel.findAll({
      attributes: [
        'id',
        ['imagePath', 'avatarPath'],
        [Sequelize.fn('concat', Sequelize.col('name'), ' ', Sequelize.col('surname')), 'name'],
      ],
      where: {
        [Op.or]: {
          name: {
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
      // logging: console.log,
      attributes: {
        exclude: ['to'],
      },
      where: {
        [Op.or]: [
          {
            [Op.and]: [
              { to: memberId },
              { userId },
            ],
          },
          {
            [Op.and]: [
              { to: userId },
              { userId: memberId },
            ],
          },
        ],
      },
      order: [
        ['createdAt', 'ASC'],
      ],
    });
  }

  public createMessage(message: IMessage): Promise<IMessage | null> {
    return MessageModel.create(message);
  }
}

export { ChatRepository };
