import React, { useState } from 'react';
import { useProducts } from "../../Hooks";
import { Text, Checkbox } from "../Input";
import {AppRoute} from "../../Routing/AppRoute.enum";
import {Link} from "react-router-dom";

export const Header = () => {
    const { setFilter, setPromo, setActive } = useProducts();
    const [ FilterWord, setFilterWord ] = useState('');
    const [ PromoChecked, setPromoChecked ] = useState(false);
    const [ ActiveChecked, setActiveChecked ] = useState(false);

    const updateFilter = () => {
        setFilter(FilterWord);
    };

    const updatePromo = () => {
        setPromo(PromoChecked);
        setPromoChecked(!PromoChecked);
    };

    const updateActive = () => {
        setActive(ActiveChecked);
        setActiveChecked(!ActiveChecked)
    };

    const updateTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value;
        return setFilterWord(userInput);
    };

    const updateOnEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            updateFilter();
        }
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <h1 className="heading heading--logo">
                            <Link className="heading__link" to={AppRoute.home}>join.tsh.io</Link></h1>
                    </div>
                    <div className="header__search">
                        <Text value={FilterWord} onChange={updateTitle} onButtonClick={updateFilter} onKeyDown={updateOnEnter} />
                    </div>
                    <div className="header__filters">
                        <div className="filters">
                            <div className="filters__single filters__single--active">
                                <Checkbox checked={ActiveChecked} onChange={updateActive} />
                                <p>Active</p>
                            </div>
                            <div className="filters__single filters__single--promo">
                                <Checkbox checked={PromoChecked} onChange={updatePromo} />
                                <p>Promo</p>
                            </div>
                        </div>
                    </div>
                    <div className="header__account">
                        <Link className="header__account__trigger button button--bordered button--white button--m button--auto" to={AppRoute.login}> Log in </Link>
                    </div>
                </div>
            </header>
        </>
    );
};
