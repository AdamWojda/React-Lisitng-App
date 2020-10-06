import React from 'react';
import { Pagination } from "@material-ui/lab";
import { useProducts } from "../../Hooks";

export const CustomPagination = () => {
    const { AllPages, ActivePage, setPage } = useProducts();
    return (
        <>
            <Pagination count={AllPages} page={ActivePage} onChange={setPage} color="primary" size="large" />
        </>
    );
};
