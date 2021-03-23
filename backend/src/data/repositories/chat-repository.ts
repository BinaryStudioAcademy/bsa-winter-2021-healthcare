import { Sequelize, Op } from 'sequelize';
import { MemberModel, MessageModel } from '../models';
import { IMember, IMessage } from '~/common/interfaces';

class ChatRepository {
  public getMembersAsChats(userId: string): Promise<IMember[] | null> {
    // MemberModel.findAll({
    //   // logging: console.log,
    //   attributes: {
    //     exclude: ['to'],
    //   },
    //   where: {
    //     [Op.or]: [
    //       {
    //         [Op.and]: [
    //           { to: memberId },
    //           { userId },
    //         ],
    //       },
    //       {
    //         [Op.and]: [
    //           { to: userId },
    //           { userId: memberId },
    //         ],
    //       },
    //     ],
    //   },
    //   order: [
    //     ['createdAt', 'ASC'],
    //   ],
    // });

    return new Promise((resolve) => {

      resolve(
        [
          {
            id: userId,
            name: 'Андрій Петринчин',
            avatarPath: 'https://www.pikpng.com/pngl/b/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
          }, {
            id: '222',
            name: 'Jakob Rosser',
            avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
          }, {
            id: '333',
            name: 'Jaylon Curtis',
            avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
          }, {
            id: '444',
            name: 'Dulce Mango',
            avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
          }, {
            id: '555',
            name: 'Erin Dorwart',
            avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
          }, {
            id: '666',
            name: 'Jakob Rosser',
            avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
          }, {
            id: '777',
            name: 'Leo Torff',
            avatarPath: 'https://www.shareicon.net/data/32x32/2016/01/12/702204_users_512x512.png',
          },
        ],
      );
    });

  }

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
