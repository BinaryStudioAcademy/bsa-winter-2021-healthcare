import { UserSex } from '~/common/enums';
import { UserType } from '~/common/enums';

type Geoposition = {
    lat:number
    long:number
};

export interface IUser {
    id?: string
    name: string
    surname: string
    birthdate: Date
    sex: UserSex
    type: UserType
    phone: string
    email: string
    password: string
    imagePath: string
    geoposition?: Geoposition
    diagnosis?: string
    createdAt: Date
    updatedAt: Date
}
