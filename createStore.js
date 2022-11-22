function createStore(reducer, initialState) {
    let state = initialState;
    const subscribers = [];
    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(subscriber => subscriber());
    }

    function subscribe(listener) {
        subscribers.push(listener);
    }

    return { getState, dispatch, subscribe };
};

export default createStore;