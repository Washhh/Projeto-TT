import React, { useContext } from 'react'
import InspectionTable from './InspectionTable/InspectionTable'
import Card from '../../../../Card/Card'
import { Context } from '../../../../Context/Context'
import {StyledInspections} from './styles'

export default React.memo(() => {

    const { inspectionTable } = useContext(Context)

    return (
        <Card title="Inspeções agendadas" select={true}>
            <StyledInspections>
                <div className="inspectionSearch">
                    <input type="text" placeholder="Pesquise" />
                </div>
                <div className="inspectionTable">
                    <InspectionTable data={inspectionTable}></InspectionTable>
                </div>
            </StyledInspections>
        </Card>
    )
})