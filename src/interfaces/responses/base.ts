interface IPagination {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: {
        previous: string | null;
        current: string;
        next: string;
    };
}

export interface IBaseResponseIndex<T> {
    meta: IPagination;
    data: T[];
}

export interface IBaseResponseDetail<T> {
    meta: unknown;
    data: T;
}
