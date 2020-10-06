import React from 'react';
import { Header, Footer } from "../components";
import { ReactChildren } from "../Interfaces/ReactChildren";

export const Layout = (props: ReactChildren) => {
    return (
        <div>
            <Header/>
                <div>
                    {props.children}
                </div>
            <Footer/>
        </div>
    );
};
