import { User } from './user-repository';
import { Clinic} from './clinic-repository';
import { Geolocation } from './geolocation-repository';
import { Diagnosis } from './diagnosis.repository';
import { Document } from './document-repository';
import { DoctorRepository } from './doctor-repository';
import { PermissionRepository } from './permission-repository';


const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
const diagnosis = new Diagnosis();
const document = new Document();
const doctorRepository = new DoctorRepository();
const permissionRepository = new PermissionRepository();


export { user, clinic, geolocation, diagnosis, document, doctorRepository, permissionRepository };
