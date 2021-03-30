import React from 'react'
import RightBlock from './graphicsContent/RightBlock/RightBlock'
import LeftBlock from './graphicsContent/LeftBlock/LeftBlock'
import {StyledGraphicsContent} from './styles'

export default React.memo(() =>
    <StyledGraphicsContent className="graphics">
        <LeftBlock></LeftBlock>
        <RightBlock></RightBlock>
    </StyledGraphicsContent>
)

