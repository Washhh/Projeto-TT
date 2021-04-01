// eslint-disable-next-line no-use-before-define
import React from 'react';
import Panel from '../Panel/Panel';
import Graphics from '../Graphics/Graphics';
import { StyledContent } from './styles';

export default function content(): JSX.Element {
  return (
    <StyledContent>
      <Panel />
      <div className="contentGraphic">
        <div className="title">
          <h1>Painel de controle</h1>
        </div>
        <Graphics />
      </div>
    </StyledContent>
  );
}
