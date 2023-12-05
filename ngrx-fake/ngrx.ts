//Acciones
 export interface Action {
    type: string;
    payload?: any;     //--> Son los parametros que nosotros le enviamos a la accion
}

//INterface de Reducer
export interface Reducer<T>{
    (state:T, action:Action): T
}