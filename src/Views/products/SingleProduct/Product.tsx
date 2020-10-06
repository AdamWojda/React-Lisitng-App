import React from "react";
import { useProducts } from "../../../Hooks";
import {Details} from "../../../Interfaces/Product";
import {ActionTypes} from "../../../Providers/AppProviders.types";

export const SingleProduct = () => {
    const { appDispatch, currProduct, Modal } = useProducts();
    const modalClass = Modal ? 'modal active' : 'modal';
    const handleClick = () => {
        appDispatch({ type: ActionTypes.setState, payload: { Modal: false, currProduct: {} } });
    };
    return (
        <>
            <div className={modalClass}>
            { currProduct &&
                <div className="container">
                    <div className="modal__wrapper">
                        <div className="modal__controls">
                            <a className="modal__close" href="#" onClick={handleClick}>
                                <img src="img/cross.svg" alt="close"/>
                            </a>
                        </div>

                        <div className="modal__image">
                            <img src={currProduct.image} alt={currProduct.name}/>
                        </div>

                        <div className="modal__content">
                            <div className="heading h1">{currProduct.name}</div>
                            <div className="modal__text">{currProduct.description}</div>
                        </div>

                    </div>
                <div className="modal__background"></div>
            </div>}
            </div>
        </>
  );
};
