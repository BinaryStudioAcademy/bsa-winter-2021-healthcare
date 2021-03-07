import React from 'react';
import { useTable } from 'react-table';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { Column } from 'common/interfaces';
import ActionsButton from './actions-button';
import styles from './styles.module.scss';

interface IProps {
  columns: Column[],
  data: any,
  edit: (id:string)=>string,
}

function Table({ columns, data, edit }: IProps) {
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
    <div className={styles.table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={'key'}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={'key'}>
                  <div>{column.render('Header')}</div>
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
                          <ActionsButton edit={edit} />
                        </td>
                      ))
                    : (item = (
                        <td {...cell.getCellProps()} key={'key'}>
                          <div>{cell.render('Cell')}</div>
                        </td>
                      ));
                  return item;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
