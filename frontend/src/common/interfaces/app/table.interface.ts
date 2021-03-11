interface Column {
    Header: string,
    accessor: string,
    Cell?:(value?: unknown, row?:unknown)=>string|JSX.Element,
}

export type { Column };
