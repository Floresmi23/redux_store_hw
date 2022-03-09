const rootReducer=(state, action)=>{

    if(action.type==='ADD_ITEM'){
        let newList = state.list;
        newList.push(action.item)

        let newState = {
            ...state,
            list:newList
        }

        localStorage['store'] = JSON.stringify(newState)

        return newState;
    }

    return state;
}

export default rootReducer;