import {initState} from "./initState";
import {createStore} from "redux";
import rootReducer from "../reducers";


function configureStore(state=initState){
    const checkStore = localStorage.getItem('');

    if(checkStore){
        const localStore = JSON.parse(localStorage[''])
        return createStore(rootReducer, localStore)
    }else{
        return createStore(rootReducer, state)
    }


}

export default configureStore;