import { ResponsivePie } from '@nivo/pie'
import React from 'react'

import { statusData } from '../../../../../interfaces/Interfaces'

interface propstype {
    data: statusData[]
}
export default React.memo((props:propstype) => {
    
    return(
        <ResponsivePie
            data={props.data}
            enableRadialLabels={false}
            enableSliceLabels={false}
            isInteractive={false}
            fit={false}
            margin={{ top: 0, right: 0, bottom: 0, left: 0}}
            innerRadius={0.85}
            colors={["#7FC008", "#DB8C28", "#EB5757"]}
            borderWidth={0}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={0}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
        />
)})