import React from 'react';
import { AppReducer } from "../../Providers/AppReducer";
import { ActionTypes } from "../../Providers/AppProviders.types";

const products_mock:any = [{
    active: false,
    description: "Ad aut est repellendus quia aut eveniet sed dolor ut.",
    id: 1,
    image: "https://picsum.photos/640/480?random=5097",
    name: "Gorgeous Plastic Shirt",
    promo: false,
    rating: 4
}, {
    active: false,
    description: "Ad aut est repellendus quia aut eveniet sed dolor ut.",
    id: 3,
    image: "https://picsum.photos/640/480?random=5097",
    name: "Gorgeous Plastic Shirt",
    promo: false,
    rating: 4
}, {
    active: false,
    description: "Ad aut est repellendus quia aut eveniet sed dolor ut.",
    id: 2,
    image: "https://picsum.photos/640/480?random=5097",
    name: "Gorgeous Plastic Shirt",
    promo: false,
    rating: 4
}];

describe('Login', () => {
    it('returns new state for "update" type', () => {
        const initialState = { Products: [] };
        const updateAction = { type: ActionTypes.setState, payload: { Products: products_mock } };
        const updatedState = AppReducer(initialState, updateAction);
        expect(updatedState).toEqual({ Products: products_mock });
    });
});
