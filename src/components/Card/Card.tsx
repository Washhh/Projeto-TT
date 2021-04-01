/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import settings from '../../assets/img/settings.png';
import { StyledCard, Title, TitleBox, SubTitle } from './styles';

interface dataProp {
  children: ReactNode;
  title: string;
  subtitle?: string;
  select?: boolean;
  button?: boolean;
}

export default function card(props: dataProp): JSX.Element {
  const { title, subtitle, select, button, children } = props;
  return (
    <StyledCard>
      <TitleBox>
        <div>
          <Title>{title}</Title>
          {subtitle ? <SubTitle>{subtitle}</SubTitle> : ''}
        </div>
        <div>
          {select ? (
            <select className="selectTitle">
              <option>diário</option>
              <option>semanal</option>
            </select>
          ) : (
            ''
          )}
          {button ? (
            <button type="button">
              <img src={settings} alt="" />
            </button>
          ) : (
            ''
          )}
        </div>
      </TitleBox>

      <div className="cardContent">{children}</div>
    </StyledCard>
  );
}
