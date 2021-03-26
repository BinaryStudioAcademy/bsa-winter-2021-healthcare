import * as yup from 'yup';
import { UserKey } from '~/common/enums';

const addProfessionIdToDoctor = yup.object().shape({
  [UserKey.ID]: yup.string(),
});

export { addProfessionIdToDoctor };
