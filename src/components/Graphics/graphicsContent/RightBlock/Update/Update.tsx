import React, { useContext } from 'react'
import UpdateTable from './UpdateTable/UpdateTable'
import Card from '../../../../Card/Card'
import { Context } from '../../../../Context/Context'
import {StyledUpdate} from './styles'

export default React.memo(() => {
    const { updateTable } = useContext(Context)

    return (
        <Card title="Planos de acação" subtitle="atualizações" button={true}>
            <StyledUpdate className="update">
                <div className="updateSearch">
                    <input type="text" />
                    <select name="select">
                        <option value="1">pendentes</option>
                        <option value="2">não-pendentes</option>
                    </select>
                </div>
                <div className="updateTable">
                    <UpdateTable data={updateTable}></UpdateTable>
                </div>
            </StyledUpdate>
        </Card>
    )
})