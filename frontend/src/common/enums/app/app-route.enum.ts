enum AppRoute {
  ROOT = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  CLINICS = '/clinics',
  USERS = '/users',
  DOCTORS = '/doctors',
  CLINIC = '/clinic',
  USER_PROFILE = '/user-profile',
  USER_PROFILE_$ID = '/user-profile/:id',
  DIAGNOSES = '/diagnoses',
  USER_PROFILE_$ID_DIAGNOSES = '/user-profile/:id/diagnoses',
  MY_CHATS = '/my-chats',
  NOTIFICATIONS = '/notifications',
  MAP = '/map',
  DOCTOR_DETAILS_$ID = '/doctor-details/:id',
  DOCTOR_DETAILS = '/doctor-details',
  PERMISSIONS = '/permissions',
  NOT_FOUND = '/not-found',
}

export { AppRoute };
