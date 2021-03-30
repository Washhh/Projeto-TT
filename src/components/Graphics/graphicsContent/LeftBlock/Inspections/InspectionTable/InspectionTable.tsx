import React from 'react'
import { inspectionTable } from '../../../../../../interfaces/Interfaces'
import {StyledTable,TableContent} from './styles'

interface propsType {
    data: inspectionTable[]
}

export default React.memo((props: propsType) => {

    const createTable = () => {
        return (
            <StyledTable>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>PLANEJADO</th>
                        <th>REALIZADO</th>
                        <th>ÚLTIMA ATUALIZAÇÃO</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {createRows()}
                </tbody>
            </StyledTable>
        )
    }

    const createRows = () => {
        return props.data.map(data => {
            return (
                <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.planned === -1 ? '-' : data.planned}</td>
                    <td>{data.realized === -1 ? '-' : data.realized}</td>
                    <td >{data.time} {data.date}</td>
                </tr>
            )
        })
    }

    return (
        <TableContent>
            {createTable()}
        </TableContent>
    )
})
