/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import GraphicData from './nivo/GraphicData';
import iconGreen from '../../../../assets/icons/green.png';
import iconOrange from '../../../../assets/icons/orange.png';
import iconRed from '../../../../assets/icons/red.png';
import Card from '../../../Card/Card';
import { statusDataType } from '../../../../interfaces/Interfaces';
import { Paragraph, StyledStatus, BaseStatus } from './styles';

interface propstype {
  data: statusDataType[];
  title: string;
  subtitle: string;
  display: boolean;
  view?: boolean;
  value?: number[];
  label?: string[];
}

let index = 0;

export default React.memo((props: propstype) => {
  const colors = [
    iconGreen,
    iconOrange,
    iconRed,
    iconGreen,
    iconOrange,
    iconRed,
  ];

  const newParagraph = function paragraph(): JSX.Element[] {
    index = 0;
    return props.data?.map((data) => {
      index += 1;
      return (
        <Paragraph key={data.id}>
          <img src={colors[index - 1]} alt="" /> {data.label} - {data.value}%
        </Paragraph>
      );
    });
  };
  return (
    <Card title={props.title} subtitle={props.subtitle} button>
      <StyledStatus>
        <div className="middle">
          <GraphicData data={props.data} />
        </div>

        {props.display ? (
          <BaseStatus>
            <div>
              {newParagraph()}
              {props.view ? <h3>visualizar detalhes</h3> : ''}
            </div>

            <div>
              <p className="titleData">Média de tempo</p>
              <div className="rightBase">
                <div>
                  <Paragraph>Hoje</Paragraph>
                  <Paragraph>Últimos 7 dias</Paragraph>
                  <Paragraph>Últimos 30 dias</Paragraph>
                </div>
                <div>
                  <Paragraph>10 min</Paragraph>
                  <Paragraph>10 min</Paragraph>
                  <Paragraph>10 min</Paragraph>
                </div>
              </div>
            </div>
          </BaseStatus>
        ) : (
          ''
        )}
      </StyledStatus>
    </Card>
  );
});
