export interface statusDataType {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface inspectionTableDataType {
  id: number;
  name: string;
  planned: number;
  realized: number;
  time: string;
  date: string;
}

export interface updateTableDataType {
  id: number;
  pending: boolean;
  realized: boolean;
  title: string;
  responsible: string;
  date: string;
}
