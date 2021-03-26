enum UsersApiPath {
  ROOT = '/',
  $ID = '/:id',
  TYPE = '/type',
  TYPE_$TYPE = '/type/:type',
  DOCTOR_DETAILS = '/doctor-details',
  DOCTOR_DETAILS_$ID = '/doctor-details/:id',
  CURRENT_USER = '/current-user',
  FILTER_BY_NAME = '/filter-by-name',
  FILTER_BY_$NAME = '/filter-by-name/:name',
}

export { UsersApiPath };
