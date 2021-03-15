import ActionsButton from 'components/admin-page/components/actions-button/actions-button'
import { CellValue } from 'react-table';
import { PropFunctionType } from 'components/admin-page/types/prop-function-void.type';
import { Column, IUser } from 'common/interfaces';

interface IProps {
  onUserDelete: PropFunctionType<string>;
  onFormShow: PropFunctionType<IUser>;
}

const getRows = ({ onFormShow, onUserDelete }: IProps): Column[] => {
  return [
    {
      Header: 'Id',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Surname',
      accessor: 'surname',
    },
    {
      Header: 'Sex',
      accessor: 'sex',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Password',
      accessor: 'password',
    },
    {
      Header: 'ImagePath',
      accessor: 'imagePath',
    },
    {
      Header: 'CreatedAt',
      accessor: 'createdAt',
      Cell: ({ row }: CellValue):CellValue => (
        new Date(row.original.createdAt).toLocaleDateString()
      ),
    },
    {
      Header: 'UpdatedAt',
      accessor: 'updatedAt',
      Cell: ({ row }: CellValue):CellValue => (
        new Date(row.original.updatedAt).toLocaleDateString()
      ),
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({row})=>ActionsButton({onUserEdit:onFormShow,user:row.original,onUserDelete}),
    },
  ];
};

export { getRows };
