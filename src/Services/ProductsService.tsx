import http from "../http-setup";
import { Params } from 'Interfaces/Product';

const getAll = (data : Params ) => {
    return http.get("/product", {params: data} );
};

const getAllWithItems = async ( Payload: Params ) => {
    const response = await getAll(Payload);
    const Data = await response.data;
    const Items = (Data.items <= 0) ? [] : Data.items;
    return { Data, Items };
};

export {
    getAll,
    getAllWithItems,
};
