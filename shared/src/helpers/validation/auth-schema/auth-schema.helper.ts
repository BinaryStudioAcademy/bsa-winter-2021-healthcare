import * as yup from 'yup';
import 'yup-phone';
import { RegisterPayloadKey } from '../../../common/enums'
// import { RegisterPayloadKey, RegisterAvatarType } from '../../../common/enums'

const validationUserSchema = yup.object().shape({
  [RegisterPayloadKey.NAME]: yup.string().required(),
  [RegisterPayloadKey.SURNAME]: yup.string().required(),
  [RegisterPayloadKey.EMAIL]: yup.string().required().email(),
  [RegisterPayloadKey.PASSWORD]: yup.string().required().min(6),
  [RegisterPayloadKey.RETYPE_PASSWORD]: yup.string().oneOf([yup.ref(RegisterPayloadKey.PASSWORD), null], 'Passwords must match'),
  [RegisterPayloadKey.PHONE]: yup.string().required().phone(),
  [RegisterPayloadKey.IS_STAFF]: yup.boolean().defined(),
  // [RegisterPayloadKey.AVATAR]: yup.mixed().defined().test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   value => (value.type === RegisterAvatarType.PNG) || (value.type === RegisterAvatarType.JPG)
  // )
});

export { validationUserSchema };
