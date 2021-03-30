import { createContext, ReactNode, useEffect, useState } from "react";
import {
    getActionStatusData,
    getGeneralStatusData,
    getInspectionStatusData,
    getInspectionTableData,
    getUpdateTableData
} from '../../services/Services'
import { statusData, inspectionTable, updateTable } from '../../interfaces/Interfaces'

interface ContextProviderProps {
    children: ReactNode
}

interface ContextData {
    actionStatus: statusData[],
    generalStatus: statusData[],
    inspectionStatus: statusData[],
    updateTable: updateTable[],
    inspectionTable: inspectionTable[],
    getActionStatus: () => void,
    getGeneralStatus: () => void,
    getInspectionStatus: () => void,
    getUpdateTable: () => void,
    getInspectionTable: () => void
}

export const Context = createContext({} as ContextData)

export function ContextProvider({ children }: ContextProviderProps) {
    const [actionStatus, setActionStatus] = useState<statusData[]>([])
    const [generalStatus, setGeneralStatus] = useState<statusData[]>([])
    const [inspectionStatus, setInspectionStatus] = useState<statusData[]>([])
    const [updateTable, setUpdateTable] = useState<updateTable[]>([])
    const [inspectionTable, setInspectionTable] = useState<inspectionTable[]>([])

    const getActionStatus = async () => {
        const response = await getActionStatusData()
        setActionStatus(response)
    }

    const getGeneralStatus = async () => {
        const response = await getGeneralStatusData()
        setGeneralStatus(response)
    }

    const getInspectionStatus = async () => {
        const response = await getInspectionStatusData()
        setInspectionStatus(response)

    }

    const getUpdateTable = async () => {
        const response = await getUpdateTableData()
        setUpdateTable(response)
    }

    const getInspectionTable = async () => {
        const response = await getInspectionTableData()
        setInspectionTable(response)
    }

    useEffect(() => {
        getActionStatus()
        getGeneralStatus()
        getInspectionStatus()
        getUpdateTable()
        getInspectionTable()
    }, [])

    return (
        <Context.Provider value={{
            getActionStatus,
            getGeneralStatus,
            getInspectionStatus,
            getUpdateTable,
            getInspectionTable,
            actionStatus,
            generalStatus,
            inspectionStatus,
            updateTable,
            inspectionTable
        }}>
            {children}
        </Context.Provider>
    )

}

