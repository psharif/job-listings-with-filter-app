const reducer = (state, action) => {
    switch(action.type) {
        // Adds a filter to the filter list. 
        case "ADD_FILTER":
            if(state.indexOf(action.text) === -1) {
                return [...state, action.text];
            } else return state; 
        // Removes a filter from the filter list.
        case "DELETE_FILTER":
            if(state.indexOf(action.text) !== -1) {
                return state.filter(f => f !== action.text);
            } else return state; 
        // Clears the filters in the filter list. 
        case "CLEAR_FILTERS" : 
            return [];
        default: 
            return state; 
    }
}

export default reducer; 