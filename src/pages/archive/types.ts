export interface FilterQueryStrings {
    sort: string;
    page: number;
    startPrice: number|null;
    endPrice: number|null;
    onlyWithImage: boolean;
    onlyWithPrice: boolean;
    search: string;
}