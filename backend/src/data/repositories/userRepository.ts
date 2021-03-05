import UserModel from '../models/user';
import { User } from '../../../../shared/src/interfaces/user.interface';

export const getAll = () => UserModel.findAll();

export const getById = (id:string) => UserModel.findByPk(id);

export const createUser = (user:User) => UserModel.create(user);

export const updateById = async (id:string, data:User) => {
  const result = await UserModel.update(data, {
    where: { id },
    returning: true
  });
  return result[1];
};

export const deleteById = (id:string) => {
  return UserModel.destroy({
    where: { id }
  });
};
