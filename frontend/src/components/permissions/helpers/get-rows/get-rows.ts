import { CellValue } from 'react-table';
import { Column } from 'common/interfaces';
import { PermissionName } from 'common/enums';
import { EditPermissionElement } from 'components/permissions/components';

const getRows = (): Column[] => {
  return [
    {
      Header: 'Applicant',
      accessor: 'Applicant',
      Cell: ({ row }: CellValue) => {
        return `${row.original.name} ${row.original.surname}`;
      },
    },
    {
      Header: PermissionName.CREATE_CLINIC,
      accessor: PermissionName.CREATE_CLINIC,
      Cell: ({ row }: CellValue): CellValue => {
        return EditPermissionElement({
          user: row.original,
          nameOfPermission: PermissionName.CREATE_CLINIC,
        });
      },
    },
    {
      Header: PermissionName.CREATE_USER,
      accessor: PermissionName.CREATE_USER,
      Cell: ({ row }: CellValue): CellValue => {
        return EditPermissionElement({
          user: row.original,
          nameOfPermission: PermissionName.CREATE_USER,
        });
      },
    },
    {
      Header: PermissionName.EDIT_USER,
      accessor: PermissionName.EDIT_USER,
      Cell: ({ row }: CellValue): CellValue => {
        return EditPermissionElement({
          user: row.original,
          nameOfPermission: PermissionName.EDIT_USER,
        });
      },
    },
    {
      Header: PermissionName.EDIT_PERMISSIONS,
      accessor: PermissionName.EDIT_PERMISSIONS,
      Cell: ({ row }: CellValue): CellValue => {
        return EditPermissionElement({
          user: row.original,
          nameOfPermission: PermissionName.EDIT_PERMISSIONS,
        });
      },
    },
    {
      Header: PermissionName.MAP_MANIPULATION,
      accessor: PermissionName.MAP_MANIPULATION,
      Cell: ({ row }: CellValue): CellValue => {
        return EditPermissionElement({
          user: row.original,
          nameOfPermission: PermissionName.MAP_MANIPULATION,
        });
      },
    },
  ];
};

export { getRows };
