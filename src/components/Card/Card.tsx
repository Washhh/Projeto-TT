import React, { ReactNode } from 'react'
import settings from '../../assets/img/settings.png'
import {StyledCard, Title, TitleBox, SubTitle} from './styles'

interface dataProp{
    children: ReactNode,
    title: String,
    subtitle?: String,
    select?: Boolean,
    button?: Boolean
}

export default (props:dataProp) => 
    <StyledCard>

        <TitleBox>
            <div>
                <Title>{props.title}</Title>
                {props.subtitle?<SubTitle>{props.subtitle}</SubTitle>:""}
            </div>
            <div>   
               {props.select?
                    <select className="selectTitle">
                        <option>diário</option>
                        <option>semanal</option>
                    </select> : ""}
                {props.button?<button><img src={settings} alt="" /></button> : ""}
            </div>
        </TitleBox>

        <div className="cardContent">
            {props.children}
        </div>

    </StyledCard>
