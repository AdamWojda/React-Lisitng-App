import React, { useEffect, useReducer, Reducer, Dispatch } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Params } from "../Interfaces/Product";
import { getAllWithItems } from "../Services/ProductsService";
import { AppProvidersProps, IAction, IState, ActionTypes } from './AppProviders.types';
import { AppReducer, initialState } from "./AppReducer";

const StateContext = React.createContext({});
const DispatchContext = React.createContext<Dispatch<any>>(() => {});

const AppProviders = ({children}: AppProvidersProps) => {
    const [ appState, appDispatch ] = useReducer<Reducer<IState, IAction>>(AppReducer, initialState);
    const { Error, Loading, ReqData, Products, AllPages, ActivePage, currProduct, Modal } = appState;
    const callService = async (Payload: Params) => {
        appDispatch({ type: ActionTypes.setState, payload: { Loading: true } });
        try {
            const { Data, Items } = await getAllWithItems({...ReqData, ...Payload});
            if(Items.length === 0) {
                appDispatch({ type: ActionTypes.setState, payload: { Error: true } });
            }
            appDispatch({ type: ActionTypes.setState, payload: { Products: Items, AllPages: Data.pageCount } });
        } catch (Error) {
            appDispatch({ type: ActionTypes.setState, payload: { Error: true } });
        }
        appDispatch({ type: ActionTypes.setState, payload: { Loading: false } });
    };

    useEffect(() => {
        callService({ limit: 8 });
        appDispatch({ type: ActionTypes.setReqData, payload: { limit: 8 } });
    }, []);

    const Context = {
        Error,
        Modal,
        Loading,
        ReqData,
        Products,
        AllPages,
        ActivePage,
        currProduct,
        callService
    };

    return (
        <DispatchContext.Provider value={ appDispatch }>
            <StateContext.Provider value={ Context }>
                <Router>{children}</Router>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

export { AppProviders, StateContext, DispatchContext };
