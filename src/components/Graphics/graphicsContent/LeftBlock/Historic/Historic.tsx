// eslint-disable-next-line no-use-before-define
import React from 'react';
import chart from '../../../../../assets/img/Chart.png';
import iconGreen from '../../../../../assets/icons/green.png';
import iconOrange from '../../../../../assets/icons/orange.png';
import Card from '../../../../Card/Card';
import { StyledHistoricContent, HistoricBase, Paragraph } from './styles';

export default React.memo(() => (
  <Card title="Histórico de eventos" button select>
    <StyledHistoricContent className="historic">
      <img className="graphic" src={chart} alt="" />
      <HistoricBase>
        <Paragraph>
          <img src={iconGreen} alt="" />
          Inspeções realizadas
        </Paragraph>
        <Paragraph>
          <img src={iconOrange} alt="" />
          Planos de ação criados
        </Paragraph>
      </HistoricBase>
    </StyledHistoricContent>
  </Card>
));
