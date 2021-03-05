import { db } from '../models/index';
import { User } from '../../../../healthcare-shared/src/interfaces/user.interface';

export const getAll = () => db.User.findAll();

export const getById = (id:string) => db.User.findById(id);

export const updateById = async (id:string, data:User) => {
  const result = await db.User.update(data, {
    where: { id },
    returning: true
  });
  return result[1];
};

export const deleteById = (id:string) => {
  return db.User.destroy({
    where: { id }
  });
};
