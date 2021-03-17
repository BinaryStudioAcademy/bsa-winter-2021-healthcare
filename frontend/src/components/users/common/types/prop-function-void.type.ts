import { IEditUserPayload, IRegisterPayload, IUser } from 'common/interfaces';

type EditUserCb = (userData: IEditUserPayload) => void;
type CreateUserCb = (userData: IRegisterPayload) => void;
type DeleteUserCb = (id: string) => void;
type ShowFormCb = (user?: IUser) => void;
type HideFormCb = () => void;

export type { EditUserCb, CreateUserCb, ShowFormCb, HideFormCb, DeleteUserCb };
