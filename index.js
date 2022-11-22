import createStore from "./createStore";

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER_NAME':
            return {
                ...state,
                name: action.payload,
            };
        case 'SET_DISPLAY_MODE':
            return {
                ...state,
                displayMode: action.payload,
            };
        default: return state;
    }
}

const initialState = { name: 'Meee', displayMode: 'dark'};
const store = createStore(reducer, initialState);

console.log(store.getState());

store.dispatch({type: 'SET_USER_NAME', payload: 'Jhia'});

console.log(store.getState());

store.dispatch({type: 'SET_DISPLAY_MODE', payload: 'light'});

console.log(store.getState());