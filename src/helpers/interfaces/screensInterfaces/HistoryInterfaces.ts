

export type HistoryProps = {
    founded: Founded;
    majorEvents: MajorEvent[];
}

export type Founded = {
    year: number;
    by: string;
}

export type MajorEvent = {
    year: number;
    event: string;
    outcome: string;
    description : string;
};