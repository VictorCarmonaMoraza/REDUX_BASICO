
//Acciones
interface Action {
    type: string;
    payload?: any;     //--> Son los parametros que nosotros le enviamos a la accion
}

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

        default:
            return state;
    }
    return state;
}

//Utilizar la accion
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

//Usar el reducer
let valorReducer = reducer(10, incrementadorAction);
console.log('incrementadorAction--->', valorReducer); //11

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

let valorReducer2 = reducer(10, decrementadorAction);
console.log('decrementadorAction--->', valorReducer2); //9

const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 12
};

let valorReducer3 = reducer(10, multiplicadorAction);
console.log('multiplicadorAction--->', valorReducer3); //9

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 7
};

let valorReducer4 = reducer(10, dividirAction);
console.log('dividirAction--->', valorReducer4);