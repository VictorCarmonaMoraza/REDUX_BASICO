//Acciones
 export interface Action {
    type: string;
    payload?: any;     //--> Son los parametros que nosotros le enviamos a la accion
}