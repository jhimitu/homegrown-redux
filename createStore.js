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
        return function unsubscribe() {
            // get the index of the subscriber that was passed in
            const index = subscribers.indexOf(listener);
            // remove that subscriber from the list
            subscribers.splice(index, 1);
        }
    }

    return { getState, dispatch, subscribe };
};

export default createStore;