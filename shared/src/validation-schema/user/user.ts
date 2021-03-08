import * as yup from 'yup';
import 'yup-phone';
import { RegisterPayloadKey, UserType, UserSex } from '../../common/enums'

const validationUserSchema = yup.object().shape({
  [RegisterPayloadKey.NAME]: yup.string().required(),
  [RegisterPayloadKey.SURNAME]: yup.string().required(),
  [RegisterPayloadKey.SEX]: yup.mixed<UserSex>().oneOf(Object.values(UserSex)),
  [RegisterPayloadKey.BIRTH_DATE]: yup.date().required(),
  [RegisterPayloadKey.EMAIL]: yup.string().required().email(),
  [RegisterPayloadKey.PASSWORD]: yup.string().required().min(6),
  [RegisterPayloadKey.RETYPE_PASSWORD]: yup.string().oneOf([yup.ref(RegisterPayloadKey.PASSWORD), null], 'Passwords must match'),
  [RegisterPayloadKey.PHONE]: yup.string().required().phone(),
  [RegisterPayloadKey.TYPE]: yup.mixed<UserType>().oneOf(Object.values(UserType)),
  [RegisterPayloadKey.IMAGE_PATH]: yup.string().url(),
  // [RegisterPayloadKey.AVATAR]: yup.mixed().defined().test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   value => (value.type === ContentType.PNG) || (value.type === ContentType.JPG)
  // )
});

export { validationUserSchema };
