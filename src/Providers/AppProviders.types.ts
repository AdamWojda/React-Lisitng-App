import { ReactNode } from 'react';
import { Details } from "../Interfaces/Product";

export enum ActionTypes {
    setState = 'setState',
    setReqData = 'setReqData',
}

export type AppProvidersProps = {
    children: ReactNode;
};

export interface IState {
    Modal?: boolean,
    Error?: boolean,
    Loading?: boolean,
    ReqData?: object,
    AllPages?: number,
    ActivePage?: number,
    currProduct?: Details,
    Products?: Array<Details>,
    callService?: any,
}

export interface IAction {
    type: ActionTypes;
    payload: {
        limit?: number,
        Error?: boolean,
        Loading?: boolean,
        ReqData?: object,
        AllPages?: number,
        ActivePage?: number,
        currProduct?: Details,
        Products?: Array<Details>,
    };
}
