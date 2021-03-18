import { IUser, IUserTypeDoctor } from 'common/interfaces';

type UserGeneric = IUser | IUserTypeDoctor | null;

export type { UserGeneric };
