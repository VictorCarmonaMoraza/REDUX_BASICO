import { Action } from "../ngrx-fake/ngrx";


export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

export const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

export const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 12
};

export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 7
};

export const resetAction: Action = {
    type: 'RESET',
};

