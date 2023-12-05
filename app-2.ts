
import {
    decrementadorAction,
    dividirAction,
    incrementadorAction,
    multiplicadorAction,
    resetAction
} from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";

//Utilizar la accion
//El reducer recibe dos parametros 
//state  --> estado anterior
//action --> Es la accion que nosotros queremos que realice
function reducer(state = 10, action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;

        default:
            return state;
    }
    return state;
}


//Usar el reducer
let valorReducer = reducer(10, incrementadorAction);
console.log('incrementadorAction--->', valorReducer); //11

let valorReducer2 = reducer(10, decrementadorAction);
console.log('decrementadorAction--->', valorReducer2); //9

let valorReducer3 = reducer(10, multiplicadorAction);
console.log('multiplicadorAction--->', valorReducer3); //9

let valorReducer4 = reducer(10, dividirAction) // 1.4285714285714286;
console.log('dividirAction--->', valorReducer4);

let valorReducer5 = reducer(10, resetAction) // 0
console.log('resetAction--->', valorReducer5);

