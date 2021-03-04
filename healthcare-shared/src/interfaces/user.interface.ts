import { UserSex } from '../common/enums/user/usersex.enum';
import { UserType } from '../common/enums/user/usertype.enum';

type Geoposition = {
    lat:number
    long:number
};

export interface User {
    id?: string
    name: string
    surname: string
    birthdate: Date
    sex: UserSex
    type: UserType
    phone: string
    email: string
    password?: string
    imagePath: string
    geoposition?: Geoposition
    diagnosis?: string
    createdAt: Date
    updatedAt: Date
};
