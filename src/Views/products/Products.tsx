import React from "react";
import { Details } from 'Interfaces/Product';
import { useProducts } from "../../Hooks";
import { CustomPagination, Product, EmptyListing, LoadingOverlay } from "../../components";

export const Products = () => {
    const { Products, Loading, Error } = useProducts();
    return (
        <>
            <section className="listing">
                <div className="container">
                    <ul className="listing__elements">
                        {Products && Products.map((Details: Details, ProductKey: number) => <Product info={Details} index={ProductKey} key={ProductKey} />)}
                    </ul>
                    {Error && <EmptyListing />}
                    {Loading && <LoadingOverlay />}
                    <div className="pagination">
                        {(!Error && !Loading) && <CustomPagination/>}
                    </div>
                </div>
            </section>
        </>
    );
};
