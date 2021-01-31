import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOOGLE_TODO } from '../actions/types';

const initalState = {
    todos: []
};

export default function (state = initalState, action){
    switch(action.type){
        case GET_TODO_LIST:
            return {
                ...state,
                todos: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };    
        case TOOGLE_TODO:
            return {
                ...state,
                todos: [...state.todos]
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };    

        default:
            return state;
    }
}