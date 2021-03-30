import React, { useContext } from 'react'
import Historic from './Historic/Historic'
import Status from '../Status/Status'
import Inspections from './Inspections/Inspections'
import { Context } from '../../../Context/Context'
import {StyledLeftBlock} from './styles'

export default React.memo(() => {
    const { actionStatus, inspectionStatus } = useContext(Context)

    return (
        <StyledLeftBlock className="leftBlock">
            <Historic></Historic>
            <div className="boxStatus">
                <Status data={inspectionStatus} title="Inspeções" subtitle="status do dia" display={true}></Status>
                <Status data={actionStatus} title="Plano de ação" subtitle="status do dia" display={true} view={true}></Status>
            </div>
            <Inspections></Inspections>
        </StyledLeftBlock>
    )
})