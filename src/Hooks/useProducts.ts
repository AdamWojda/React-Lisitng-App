import React, { useContext } from "react";
import { StateContext, DispatchContext } from "Providers/AppProviders";
import { ActionTypes, IState } from "Providers/AppProviders.types";
import { Details } from "Interfaces/Product";

export const useProducts = () => {
    const {
        Modal,
        Products,
        AllPages,
        Error,
        Loading,
        ActivePage,
        currProduct,
        callService,
    }:IState = useContext(StateContext);

    const appDispatch = useContext(DispatchContext);

    const setPromo = (Checked: boolean) => {
        appDispatch({ type: ActionTypes.setReqData, payload: { promo: !Checked ? true : undefined, page: 1 } });
        callService({ promo: !Checked ? true : undefined, page: 1 });
        appDispatch({ type: ActionTypes.setState, payload: { ActivePage: 1 } });
    };

    const setActive = (Checked: boolean) => {
        appDispatch({ type: ActionTypes.setReqData, payload: { active: !Checked ? true : undefined, page: 1 } });
        callService({ active: !Checked ? true : undefined, page: 1 });
        appDispatch({ type: ActionTypes.setState, payload: { ActivePage: 1 } });
    };

    const setFilter = (FilterWord: string) => {
        appDispatch({ type: ActionTypes.setReqData, payload: { search: FilterWord, page: 1 } });
        callService({ search: FilterWord, page: 1 });
        appDispatch({ type: ActionTypes.setState, payload: { ActivePage: 1 } });
    };

    const setPage = async (Event: any, Value: number) => {
        appDispatch({ type: ActionTypes.setReqData, payload: { page: Value } });
        callService({ page: Value });
        appDispatch({ type: ActionTypes.setState, payload: { ActivePage: Value } });
    };

    const updateSingle = (product: Details, index: number) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            appDispatch({ type: ActionTypes.setState, payload: { currProduct: product, Modal: true } });
        }
    };

    return {
        Modal,
        Products,
        AllPages,
        Loading,
        Error,
        ActivePage,
        currProduct,
        appDispatch,
        updateSingle,
        setFilter,
        setActive,
        setPromo,
        setPage
    };
};
