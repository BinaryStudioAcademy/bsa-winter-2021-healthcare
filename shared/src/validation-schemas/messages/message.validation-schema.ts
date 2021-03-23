import * as yup from 'yup';
import {
  MessageKey,
  MessageValidationMessage,
} from '~/common/enums';

const message = yup.object().shape({
  [MessageKey.TEXT]: yup
    .string()
    .required(MessageValidationMessage.TEXT_REQUIRED),
  [MessageKey.TO]: yup
    .string()
    .required(MessageValidationMessage.TO_REQUIRED)
    .uuid(MessageValidationMessage.TO_UUID),
});

export { message };
