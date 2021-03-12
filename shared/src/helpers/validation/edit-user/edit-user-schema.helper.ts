import * as yup from 'yup';
import { EditUserPayloadKey, ContentType, UserSex, UserType } from '../../../common/enums';

const validationEditUserSchema = yup.object().shape({
  [EditUserPayloadKey.NAME]: yup.string().required(),
  [EditUserPayloadKey.SURNAME]: yup.string().required(),
  [EditUserPayloadKey.EMAIL]: yup.string().required().email(),
  [EditUserPayloadKey.PASSWORD]: yup.string().required().min(6),
  [EditUserPayloadKey.RETYPE_PASSWORD]: yup.string().oneOf([yup.ref(EditUserPayloadKey.PASSWORD), null], 'Passwords must match'),
  [EditUserPayloadKey.PHONE]: yup.string().required(),
  [EditUserPayloadKey.TYPE]: yup.string().oneOf([UserType.DOCTOR,UserType.PATIENT],'Please choose your type'),
  [EditUserPayloadKey.SEX]: yup.string().oneOf([UserSex.FEMALE,UserSex.MALE],'Please choose your gender'),
  [EditUserPayloadKey.BIRTHDATE]:yup.string().transform((value,originalValue)=>originalValue).required(),
  // [RegisterPayloadKey.AVATAR]: yup.mixed().defined().test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   value => (value.type === ContentType.PNG) || (value.type === ContentType.JPG)
  // )
});

export { validationEditUserSchema };
