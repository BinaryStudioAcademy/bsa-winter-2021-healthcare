import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';

const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();

export {
  userRepository,
  clinicRepository
}
