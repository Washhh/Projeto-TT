import React, { Component } from 'react'
import vector from '../../../../../../assets/icons/vector.png'
import { updateTable } from '../../../../../../interfaces/Interfaces'
import {StyledTable,TableContent,Title,SubTitle,Pending,Realized} from './styles'

interface propsType {
    data: updateTable[]
}

export default React.memo((props: propsType) => {

    const createTable = () => {
        return (
            <StyledTable>
                <tbody>
                    {createRows()}
                </tbody>
            </StyledTable>
        )
    }

    const createRows = () => {
        return props.data.map(data => {
            return (
                <tr key={data.id} className="rows">
                    <tr>
                        <td><Title>{data.title}</Title></td>
                        <td>{data.pending ? <p><Pending>PENDENTE</Pending> <img src={vector} alt="" /></p> : ""}<Realized>{data.realized ? " REALIZADO" : ""}</Realized></td>
                    </tr>
                    <tr>
                        <td><SubTitle>responsável: {data.responsible}</SubTitle></td>
                        <td><SubTitle>{data.date}</SubTitle></td>
                    </tr>
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

