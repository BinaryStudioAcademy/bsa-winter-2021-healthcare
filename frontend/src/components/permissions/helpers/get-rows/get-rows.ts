import { CellValue } from 'react-table';
import { Control, FieldValues } from 'react-hook-form';
import { Column } from 'common/interfaces';
import { ButtonColor, ButtonStyleType, ButtonType, PermissionName } from 'common/enums';
import { Button, Checkbox } from 'components/common';

interface IProps {
  control: Control<FieldValues>
}

const getRows = ({ control }: IProps): Column[] => {
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
      Cell: (): CellValue =>
        Checkbox({
          control,
          name: PermissionName.CREATE_CLINIC,
          label: '',
        }),
    },
    {
      Header: PermissionName.CREATE_USER,
      accessor: PermissionName.CREATE_USER,
      Cell: (): CellValue =>
        Checkbox({
          control,
          name: PermissionName.CREATE_USER,
          label: '',
        }),
    },
    {
      Header: PermissionName.EDIT_USER,
      accessor: PermissionName.EDIT_USER,
      Cell: (): CellValue =>
        Checkbox({
          control,
          name: PermissionName.EDIT_USER,
          label: '',
        }),
    },
    {
      Header: PermissionName.EDIT_PERMISSIONS,
      accessor: PermissionName.EDIT_PERMISSIONS,
      Cell: (): CellValue =>
        Checkbox({
          control,
          name: PermissionName.EDIT_PERMISSIONS,
          label: '',
        }),
    },
    {
      Header: 'Actions',
      accessor: 'Actions',
      Cell: () =>
        Button({
          label: 'Save',
          hasHiddenLabel: false,
          type: ButtonType.BUTTON,
          onClick: ()=>null,
          color: ButtonColor.PRIMARY_DARK,
          styleType: ButtonStyleType.WITHOUT_BORDER,
        }),
    },
  ];
};

export { getRows };
