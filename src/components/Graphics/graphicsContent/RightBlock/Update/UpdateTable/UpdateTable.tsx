// eslint-disable-next-line no-use-before-define
import React from 'react';
import vector from '../../../../../../assets/icons/vector.png';
import { updateTableDataType } from '../../../../../../interfaces/Interfaces';
import {
  StyledTable,
  TableContent,
  Title,
  SubTitle,
  Pending,
  Realized,
} from './styles';

interface propsType {
  data: updateTableDataType[];
}

export default React.memo((props: propsType) => {
  const createRows = function rows(): JSX.Element[] {
    return props.data.map((data) => {
      return (
        <tr key={data.id} className="rows">
          <td>
            <Title>{data.title}</Title>
            <SubTitle>responsável: {data.responsible}</SubTitle>
          </td>
          <td>
            {data.pending ? (
              <p>
                <Pending>PENDENTE</Pending> <img src={vector} alt="" />
                <Realized>{data.realized ? ' REALIZADO' : ''}</Realized>
              </p>
            ) : (
              <p>
                <Realized>{data.realized ? ' REALIZADO' : ''}</Realized>
              </p>
            )}
            <SubTitle>{data.date}</SubTitle>
          </td>
        </tr>
      );
    });
  };
  const createTable = function table(): JSX.Element {
    return (
      <StyledTable>
        <tbody>{createRows()}</tbody>
      </StyledTable>
    );
  };

  return <TableContent>{createTable()}</TableContent>;
});
