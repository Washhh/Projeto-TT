/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  actionStatusData,
  generalStatusData,
  inspectionStatusData,
  updateTableData,
  inspectionTableData,
} from '../mock/Mock';

import {
  statusDataType,
  inspectionTableDataType,
  updateTableDataType,
} from '../interfaces/Interfaces';

export const getActionStatusData = async () => {
  return new Promise<Array<statusDataType>>((resolve) =>
    setTimeout(() => {
      resolve(actionStatusData);
    }, 100)
  );
};

export const getGeneralStatusData = async () => {
  return new Promise<Array<statusDataType>>((resolve) =>
    setTimeout(() => {
      resolve(generalStatusData);
    }, 100)
  );
};

export const getInspectionStatusData = async () => {
  return new Promise<Array<statusDataType>>((resolve) =>
    setTimeout(() => {
      resolve(inspectionStatusData);
    }, 100)
  );
};

export const getUpdateTableData = async () => {
  return new Promise<Array<updateTableDataType>>((resolve) =>
    setTimeout(() => {
      resolve(updateTableData);
    }, 100)
  );
};

export const getInspectionTableData = async () => {
  return new Promise<Array<inspectionTableDataType>>((resolve) =>
    setTimeout(() => {
      resolve(inspectionTableData);
    }, 100)
  );
};
