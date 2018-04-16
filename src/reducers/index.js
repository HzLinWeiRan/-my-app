import { combineReducers } from 'redux';
import apis from '@/fetch';

// 初始化状态
const initialState = {
    apis
};

function root(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case 'CHANGE_LANG':
        return {
            lang: action.payload
        };
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    root
});

export default rootReducer;
