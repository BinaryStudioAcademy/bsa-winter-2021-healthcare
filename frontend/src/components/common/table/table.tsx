import React from 'react';
import { useTable } from 'react-table';
import { Column } from 'common/interfaces';
import styles from './styles.module.scss';
import { CustomRecord } from 'common/types';

interface IProps {
  columns: Column[];
  data: unknown[];
}

const Table: React.FC<IProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: data as CustomRecord[],
  });

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key } = headerGroup.getHeaderGroupProps();
            return (
              <tr {...headerGroup.getHeaderGroupProps()} key={key}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()} key={column.id}>
                      <div>{column.render('Header')}</div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key } = row.getRowProps();
            return (
              <tr {...row.getRowProps()} key={key}>
                {row.cells.map((cell) => {
                  const { key } = cell.getCellProps();
                  return (
                    <td {...cell.getCellProps()} key={key}>
                      <div>{cell.render('Cell')}</div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
