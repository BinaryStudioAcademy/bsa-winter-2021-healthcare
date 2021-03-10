import { UserSex } from '~/common/enums';
import { UserType } from '~/common/enums';

type Geoposition = {
  lat: number
  long: number
};

interface IUser {
  id?: string
  name: string
  surname: string
  birthdate: string
  sex: UserSex
  type: UserType
  phone: string
  email: string
  password: string
  imagePath: string
  geoposition?: Geoposition
  diagnosis?: string
  createdAt?: string
  updatedAt?: string
}

export type { IUser };
