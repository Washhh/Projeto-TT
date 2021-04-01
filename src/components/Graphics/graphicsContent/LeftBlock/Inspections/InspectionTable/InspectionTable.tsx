// eslint-disable-next-line no-use-before-define
import React from 'react';
import { inspectionTableDataType } from '../../../../../../interfaces/Interfaces';
import { StyledTable, TableContent } from './styles';

interface propsType {
  data: inspectionTableDataType[];
}

export default React.memo((props: propsType) => {
  const createRows = function rows(): JSX.Element[] {
    return props.data.map((data) => {
      return (
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.planned === -1 ? '-' : data.planned}</td>
          <td>{data.realized === -1 ? '-' : data.realized}</td>
          <td>
            {data.time} {data.date}
          </td>
        </tr>
      );
    });
  };

  const createTable = function table(): JSX.Element {
    return (
      <StyledTable>
        <thead>
          <tr key="unic">
            <th>NOME</th>
            <th>PLANEJADO</th>
            <th>REALIZADO</th>
            <th>ÚLTIMA ATUALIZAÇÃO</th>
          </tr>
        </thead>
        <tbody className="tableBody">{createRows()}</tbody>
      </StyledTable>
    );
  };

  return <TableContent>{createTable()}</TableContent>;
});
