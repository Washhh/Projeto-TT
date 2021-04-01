// eslint-disable-next-line no-use-before-define
import React from 'react';
import RightBlock from './graphicsContent/RightBlock/RightBlock';
import LeftBlock from './graphicsContent/LeftBlock/LeftBlock';
import { StyledGraphicsContent } from './styles';

export default React.memo(() => (
  <StyledGraphicsContent className="graphics">
    <LeftBlock />
    <RightBlock />
  </StyledGraphicsContent>
));
