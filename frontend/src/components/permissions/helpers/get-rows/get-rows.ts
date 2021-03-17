import { CellValue } from 'react-table';
import { Column } from 'common/interfaces';
import { PermissionName } from 'common/enums';
import { Checkbox } from 'components/common';

const getRows = (): Column[] => {
  return [
    {
      Header: 'Applicant',
      accessor: 'Applicant',
      Cell: ({ row }) => `${row.original.name} ${row.original.surname}`,
    },
    {
      Header: PermissionName.CREATE_CLINIC,
      accessor: PermissionName.CREATE_CLINIC,
      Cell: ({ row }: CellValue): CellValue =>
        Checkbox({
          isChecked: false,
          onChange: () => null,
          name: row.original.name,
          label: '',
        }),
    },
    {
      Header: PermissionName.CREATE_USER,
      accessor: PermissionName.CREATE_USER,
      Cell: ({ row }: CellValue): CellValue =>
        Checkbox({
          isChecked: true,
          onChange: () => null,
          name: row.original.name,
          label: '',
        }),
    },
    {
      Header: PermissionName.EDIT_USER,
      accessor: PermissionName.EDIT_USER,
      Cell: ({ row }: CellValue): CellValue =>
        Checkbox({
          isChecked: false,
          onChange: () => null,
          name: row.original.name,
          label: '',
        }),
    },
  ];
};

export { getRows };
