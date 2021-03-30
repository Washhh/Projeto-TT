export interface statusData {
    id: string,
    label: string,
    value: number,
    color: string
}

export interface inspectionTable {
    id: number,
    name: string,
    planned: number,
    realized: number,
    time: string,
    date: string
}

export interface updateTable {
    id: number,
    pending: boolean,
    realized: boolean,
    title: string,
    responsible: string,
    date: string
}