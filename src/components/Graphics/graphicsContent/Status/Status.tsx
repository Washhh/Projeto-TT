import React from 'react'
import GraphicData from './nivo/GraphicData'
import iconGreen from '../../../../assets/icons/green.png'
import iconOrange from '../../../../assets/icons/orange.png'
import iconRed from '../../../../assets/icons/red.png'
import Card from '../../../Card/Card'
import { statusData } from '../../../../interfaces/Interfaces'
import {Paragraph,StyledStatus,BaseStatus} from './styles'

interface propstype {
    data: statusData[],
    title: String,
    subtitle: String,
    display: Boolean,
    view?: Boolean,
    value?: Number[],
    label?: String[]
}

let index = 0;

export default React.memo((props: propstype) => {
    const colors = [iconGreen, iconOrange, iconRed, iconGreen, iconOrange, iconRed]

    const newParagraph = () => {
        index = 0
        return (
            props.data?.map(data => {
                index++
                return (
                    <Paragraph><img src={colors[index - 1]} alt="" /> {data.label} - {data.value}%</Paragraph>
                )
            })
        )
    }
    return (
        <Card title={props.title} subtitle={props.subtitle} button={true}>
            <StyledStatus>

                <div className="middle"><GraphicData data={props.data}></GraphicData></div>

                {props.display ?
                    <BaseStatus>
                        <div>
                            {newParagraph()}
                            {props.view ? <h3>visualizar detalhes</h3> : ""}
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
                    : ""}

            </StyledStatus>

        </Card>
    )
})