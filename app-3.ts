import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";
import { incrementadorAction } from './contador/contador.actions';

//Aqui definiremos el Store
class Store<T>{

    private state: T;

    constructor(
        private reducer: Reducer<T>,
        state: T
    ) {
        this.state = state;
    }

    //Funcion de Store
    getState() {
        return this.state;
    }

    /**
     * Dispara una accion
     * @param action: interfaz 
     */
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

//Creacion de instancia de Store
/**
 * Primer paramnetro es la funcion a ejecutar
 * Segudno parametro es el valor inicial
 */
const store = new Store(contadorReducer, 10);

console.log(store.getState());

store.dispatch(incrementadorAction);
console.log(store.getState());