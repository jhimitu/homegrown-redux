// takes in an object of reducers
function combineReducers(reducers) {
    // skeleton reducer - a function call with state and an action
    return (state = {}, action) => {
        // the new state we want to return after calling all reducers
        const newState = {};
        // call each reducer and set its value in the new state object
        for (let reducer in reducers) {
            // this state[reducer] is initially undefined when passed in
            newState[reducer] = reducers[reducer](state[reducer], action)
        }
        return newState;
    }
}

export default combineReducers;