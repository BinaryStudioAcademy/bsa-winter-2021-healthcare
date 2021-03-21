import { Sequelize, Op } from 'sequelize';
import { MemberModel } from '../models';
import { IMember } from '~/common/interfaces';

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
            [Op.like]: `%${name}%`,
          },
          surname: {
            [Op.like]: `%${name}%`,
          },
        },
      },
    });
  }
}

export { ChatRepository };
