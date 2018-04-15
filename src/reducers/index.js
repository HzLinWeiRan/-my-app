import { combineReducers } from 'redux';

const initialState = {
    text: 'Use Redux',
    completed: false,
    id: 0
};

function todos(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case 'test':
        return {
            ...state,
            id: action.id
        };
    default:
        return state;
    }
}
function todos2(state = initialState, action) {
    switch (action.type) {
    case 'test':
        return {
            ...state,
            id: state.id + 1
        };
    default:
        return state;
    }
}
const rootReducer = combineReducers({
    todos,
    todos2
});

export default rootReducer;
