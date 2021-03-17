import ActionsButton from 'components/users/components/actions-button/actions-button';
import { CellValue } from 'react-table';
import { DeleteUserCb, ShowFormCb } from 'components/users/common/types/prop-function-void.type';
import { Column } from 'common/interfaces';
import { UserKey } from 'common/enums';

type Props = {
  onUserDelete: DeleteUserCb;
  onFormShow: ShowFormCb;
};

const getRows = ({ onFormShow, onUserDelete }: Props): Column[] => {
  return [
    {
      Header: UserKey.ID,
      accessor: UserKey.ID,
    },
    {
      Header: UserKey.NAME,
      accessor: UserKey.NAME,
    },
    {
      Header: UserKey.SURNAME,
      accessor: UserKey.SURNAME,
    },
    {
      Header: UserKey.BIRTHDATE,
      accessor: UserKey.BIRTHDATE,
      Cell: ({ row }: CellValue): CellValue =>
        new Date(row.original.birthdate).toLocaleDateString(),
    },
    {
      Header: UserKey.SEX,
      accessor: UserKey.SEX,
    },
    {
      Header: UserKey.TYPE,
      accessor: UserKey.TYPE,
    },
    {
      Header: UserKey.PHONE,
      accessor: UserKey.PHONE,
    },
    {
      Header: UserKey.EMAIL,
      accessor: UserKey.EMAIL,
    },
    {
      Header: UserKey.PASSWORD,
      accessor: UserKey.PASSWORD,
    },
    {
      Header: UserKey.IMAGE_PATH,
      accessor: UserKey.IMAGE_PATH,
    },
    {
      Header: UserKey.CREATED_AT,
      accessor: UserKey.CREATED_AT,
      Cell: ({ row }: CellValue): CellValue =>
        new Date(row.original.createdAt).toLocaleDateString(),
    },
    {
      Header: UserKey.UPDATED_AT,
      accessor: UserKey.UPDATED_AT,
      Cell: ({ row }: CellValue): CellValue =>
        new Date(row.original.updatedAt).toLocaleDateString(),
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) =>
        ActionsButton({
          onUserEdit: onFormShow,
          user: row.original,
          onUserDelete,
        }),
    },
  ];
};

export { getRows };
