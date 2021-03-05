import * as yup from 'yup';
import 'yup-phone';
import { RegisterPayloadKey } from '../../../common/enums/register/register-payload.enum'
import { RegisterAvatarType } from '../../../common/enums/register/register-avatar-type.enum'

const validationUserSchema = yup.object().shape({
  [RegisterPayloadKey.NAME]: yup.string().defined(),
  [RegisterPayloadKey.SURNAME]: yup.string().defined(),
  [RegisterPayloadKey.EMAIL]: yup.string().defined().email(),
  [RegisterPayloadKey.PASSWORD]: yup.string().defined().min(6),
  [RegisterPayloadKey.RETYPE_PASSWORD]: yup.string().oneOf([yup.ref(RegisterPayloadKey.PASSWORD), null], 'Passwords must match'),
  [RegisterPayloadKey.PHONE]: yup.string().phone().defined(),
  [RegisterPayloadKey.IS_STAFF]: yup.boolean().defined(),
  [RegisterPayloadKey.AVATAR]: yup.mixed().defined().test(
    "fileFormat",
    "Unsupported Format",
    value => (value.type === RegisterAvatarType.PNG) || (value.type === RegisterAvatarType.JPG)
  )
});

export default validationUserSchema;
