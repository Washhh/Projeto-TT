import React, { Component } from 'react'
import Panel from '../Panel/Panel'
import Graphics from '../Graphics/Graphics'
import {StyledContent} from './styles'

export default () =>
    <StyledContent>
        <Panel></Panel>
        <div className="contentGraphic">
            <div className="title">
                <h1>Painel de controle</h1>
            </div>
            <Graphics></Graphics>
        </div>
    </StyledContent>