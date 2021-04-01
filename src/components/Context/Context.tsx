/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import {
  getActionStatusData,
  getGeneralStatusData,
  getInspectionStatusData,
  getInspectionTableData,
  getUpdateTableData,
} from '../../services/Services';
import {
  statusDataType,
  inspectionTableDataType,
  updateTableDataType,
} from '../../interfaces/Interfaces';

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextData {
  actionStatus: statusDataType[];
  generalStatus: statusDataType[];
  inspectionStatus: statusDataType[];
  updateTable: updateTableDataType[];
  inspectionTable: inspectionTableDataType[];
  getActionStatus: () => void;
  getGeneralStatus: () => void;
  getInspectionStatus: () => void;
  getUpdateTable: () => void;
  getInspectionTable: () => void;
}

export const Context = createContext({} as ContextData);

export function ContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const [actionStatus, setActionStatus] = useState<statusDataType[]>([]);
  const [generalStatus, setGeneralStatus] = useState<statusDataType[]>([]);
  const [inspectionStatus, setInspectionStatus] = useState<statusDataType[]>(
    []
  );
  const [updateTable, setUpdateTable] = useState<updateTableDataType[]>([]);
  const [inspectionTable, setInspectionTable] = useState<
    inspectionTableDataType[]
  >([]);

  const getActionStatus = async () => {
    const response = await getActionStatusData();
    setActionStatus(response);
  };

  const getGeneralStatus = async () => {
    const response = await getGeneralStatusData();
    setGeneralStatus(response);
  };

  const getInspectionStatus = async () => {
    const response = await getInspectionStatusData();
    setInspectionStatus(response);
  };

  const getUpdateTable = async () => {
    const response = await getUpdateTableData();
    setUpdateTable(response);
  };

  const getInspectionTable = async () => {
    const response = await getInspectionTableData();
    setInspectionTable(response);
  };

  useEffect(() => {
    getActionStatus();
    getGeneralStatus();
    getInspectionStatus();
    getUpdateTable();
    getInspectionTable();
  }, []);

  return (
    <Context.Provider
      value={{
        getActionStatus,
        getGeneralStatus,
        getInspectionStatus,
        getUpdateTable,
        getInspectionTable,
        actionStatus,
        generalStatus,
        inspectionStatus,
        updateTable,
        inspectionTable,
      }}
    >
      {children}
    </Context.Provider>
  );
}
