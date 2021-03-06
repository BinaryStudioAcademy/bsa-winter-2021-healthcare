import React from 'react';
import { useTable } from 'react-table';
import { RootState } from 'common/types';
import { Column } from 'common/interfaces';
import ActionsButton from './actions-button';

interface IProps {
  columns: Column[];
  data: any;
}

function Table({ columns, data }: IProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={'key'}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={'key'}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={'key'}>
              {row.cells.map((cell) => {
                let item;
                cell.column.Header === 'Actions'
                  ? (item = (
                      <td>
                        <ActionsButton />
                      </td>
                    ))
                  : (item = (
                      <td {...cell.getCellProps()} key={'key'}>
                        {cell.render('Cell')}
                      </td>
                    ));
                return item;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
