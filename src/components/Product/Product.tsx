import React from 'react';
import { Details } from "../../Interfaces/Product";
import { useProducts } from "../../Hooks";

export const Product = (props: { info: Details, index: number }) => {
    const { updateSingle } = useProducts();

    return (
        <>
            <li className="product" onClick={updateSingle(props.info, props.index)} key={props.info.id} data-active={props.info.active} data-promo={props.info.promo}>
                <div className="product__image">
                    <img src={props.info.image} alt={props.info.name}/>
                </div>
                <div className="product__details">
                    <h2 className="heading">{props.info.name}</h2>
                    <div className="product__desc">
                        <p>{props.info.description}</p>
                    </div>
                    <div className="rating" data-rating={props.info.rating}>
                        <span className="rating__star"></span>
                        <span className="rating__star"></span>
                        <span className="rating__star"></span>
                        <span className="rating__star"></span>
                        <span className="rating__star"></span>
                    </div>
                    <a href="#" className="button button--solid button--blue button--xl">Show details</a>
                </div>
            </li>
        </>
    );
};
