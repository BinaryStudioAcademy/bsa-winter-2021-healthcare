import { CellValue, UseTableRowProps } from 'react-table';
import { IUser } from '../user';

interface Column {
  Header: string;
  accessor: string;
  Cell?: (
    value?: CellValue,
    row?: UseTableRowProps<IUser>,
  ) => string | JSX.Element | null;
}

export type { Column };
