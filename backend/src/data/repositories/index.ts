import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { DocumentRepository } from './document-repository';

const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const documentRepository = new DocumentRepository();

export {
  userRepository,
  clinicRepository,
  documentRepository
}
