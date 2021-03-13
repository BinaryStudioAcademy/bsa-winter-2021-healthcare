import { CellValue } from 'react-table';

interface Column {
    Header: string,
    accessor: string,
    Cell?:(value?: CellValue)=>string|JSX.Element,
}

export type { Column };
