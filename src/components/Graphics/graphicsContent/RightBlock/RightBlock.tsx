// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import Status from '../Status/Status';
import Update from './Update/Update';
import { Context } from '../../../Context/Context';
import { StyledRightBlock } from './styles';

export default React.memo(() => {
  const { generalStatus } = useContext(Context);

  return (
    <StyledRightBlock className="rightBlock">
      <Status
        data={generalStatus}
        title="Plano de ação"
        subtitle="status geral"
        display={false}
      />
      <Update />
    </StyledRightBlock>
  );
});
