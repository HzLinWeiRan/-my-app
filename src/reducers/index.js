import { combineReducers } from 'redux';

const initialState = {
    text: 'Use Redux',
    completed: false,
    id: 0
};

function todos(state = initialState, action) {
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
    todos
});

export default rootReducer;
