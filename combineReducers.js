function combineReducers(reducers) {
    return (state = {}, action) => {
        const newState = {};
        for (let reducer in reducers) {
            newState[reducer] = reducers[reducer](state[reducer], action)
        }
        return newState;
    }
}

export default combineReducers;