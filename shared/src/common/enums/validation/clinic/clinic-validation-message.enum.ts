import { ContentType } from '../../file/content-type.enum'

const ClinicValidationMessage = {
  NAME_REQUIRED: 'Name is required',
  ADDRESS_REQUIRED: 'Address is required',
  IMAGE_INCORRECT: `User avatar must be ${ContentType.PNG} or ${ContentType.JPG} format`,
  IMAGE_REQUIRED: 'User avatar is required',
} as const;

export { ClinicValidationMessage }
