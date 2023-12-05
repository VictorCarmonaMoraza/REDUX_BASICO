
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
    if (action.type === 'INCREMENTAR') {
        return state += 1;
    }
    return state;
}

//Utilizar la accion
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

//Usar el reducer
let valorReducer = reducer(10, incrementadorAction);
console.log(valorReducer);
