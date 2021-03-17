import { CellValue } from 'react-table';
import { Column } from 'common/interfaces';
import { PermissionName } from 'common/enums';
import { Checkbox } from 'components/common';
import { IPermission } from 'common/interfaces/permission';

interface IProps {
  handleChangePermission: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const checkPermission = (row: CellValue, name: string) => {
  const permissions = row.original.permissions.map(
    (permission: IPermission) => permission.name,
  );

  return permissions.includes(name) ? true : false
};

const getRows = ({ handleChangePermission }: IProps): Column[] => {
  return [
    {
      Header: 'Applicant',
      accessor: 'Applicant',
      Cell: ({ row }: CellValue) =>
        `${row.original.name} ${row.original.surname}`,
    },
    {
      Header: PermissionName.CREATE_CLINIC,
      accessor: PermissionName.CREATE_CLINIC,
      Cell: ({ row }: CellValue): CellValue =>
        Checkbox({
          isChecked: checkPermission(row, PermissionName.CREATE_CLINIC),
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangePermission(e),
          name: PermissionName.CREATE_CLINIC,
          label: '',
        }),
    },
    {
      Header: PermissionName.CREATE_USER,
      accessor: PermissionName.CREATE_USER,
      Cell: ({ row }: CellValue): CellValue =>
        Checkbox({
          isChecked: checkPermission(row, PermissionName.CREATE_USER),
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangePermission(e),
          name: PermissionName.CREATE_USER,
          label: '',
        }),
    },
    {
      Header: PermissionName.EDIT_USER,
      accessor: PermissionName.EDIT_USER,
      Cell: ({ row }: CellValue): CellValue =>
        Checkbox({
          isChecked: checkPermission(row, PermissionName.EDIT_USER),
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangePermission(e),
          name: PermissionName.EDIT_USER,
          label: '',
        }),
    },
    {
      Header: PermissionName.EDIT_PERMISSIONS,
      accessor: PermissionName.EDIT_PERMISSIONS,
      Cell: ({ row }: CellValue): CellValue =>
        Checkbox({
          isChecked: checkPermission(row, PermissionName.EDIT_PERMISSIONS),
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangePermission(e),
          name: PermissionName.EDIT_PERMISSIONS,
          label: '',
        }),
    },
  ];
};

export { getRows };
