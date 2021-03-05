import * as userRepository from '../../data/repositories/userRepository';
import { User } from '../../../../shared/src/interfaces/user.interface';

export const getAllUsers = () => userRepository.getAll();

export const createNewUser = (user:User) => userRepository.createUser(user);

export const getUserById = (id:string) => userRepository.getById(id);

export const updateUser = (id:string, data:User) => userRepository.updateById(id, data);

export const deleteUser = (id:string) => userRepository.deleteById(id);