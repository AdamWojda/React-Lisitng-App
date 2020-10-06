export interface Params {
    limit: number;
    search?: string;
    page?: number;
    promo?: boolean;
    active?: boolean;
}

export interface ReceivedData {
    Products: Array<Details>,
    AllPages: number,
    ActivePage: number,
    currProduct: Details,
    setActivePage?: any,
    setCurrProduct?: any,
    updateContext?: any,
}

export interface RequestData {
    getError: boolean,
    Loading?: boolean,
}

export interface Details {
    id: number;
    name?: string;
    image?: string;
    promo?: string;
    rating?: string;
    active?: string;
    description?: string;
    items?: string;
}



