import React from 'react'
import {
    actionStatusData,
    generalStatusData,
    inspectionStatusData,
    updateTableData,
    inspectionTableData
} from '../mock/Mock'

import { statusData, inspectionTable, updateTable } from '../interfaces/Interfaces'


export const getActionStatusData = async () => {
    return new Promise<Array<statusData>>(resolve => setTimeout(() => {
        resolve(actionStatusData)
    }, 100))
}

export const getGeneralStatusData = async () => {
    return new Promise<Array<statusData>>(resolve => setTimeout(() => {
        resolve(generalStatusData)
    }, 100))
}

export const getInspectionStatusData = async () => {
    return new Promise<Array<statusData>>(resolve => setTimeout(() => {
        resolve(inspectionStatusData)
    }, 100))
}

export const getUpdateTableData = async () => {
    return new Promise<Array<updateTable>>(resolve => setTimeout(() => {
        resolve(updateTableData)
    }, 100))
}

export const getInspectionTableData = async () => {
    return new Promise<Array<inspectionTable>>(resolve => setTimeout(() => {
        resolve(inspectionTableData)
    }, 100))
}