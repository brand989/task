import axios from 'axios';
import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOOGLE_TODO } from './types';


axios.defaults.xsrfHeaderName = 'X-CRSFTOKEN';
axios.default.xsrfCookieName = 'crsftoken';

export const getTodos = () => dispatch => {
    axios.get('api/todoapp/')
        .then(result => {
            dispatch({
                type: GET_TODO_LIST,
                payload: result.data
            })
        }).catch(err => console.log(err))

}


export const deleteTodo = (id) => dispatch => {
    axios.delete(`api/todoapp/${id}/`)
        .then(result => {
            dispatch({
                type: DELETE_TODO,
                payload: id
            }).catch(err => console.log(err))
        })

}


export const toogleTodo = (todo) => dispatch => {
    todo.done = !todo.done;

    axios.put(`api/todoapp/${todo.id}/`, todo)
        .then(result => {
            dispatch({
                type: TOOGLE_TODO,
                payload: result.data
            }).catch(err => console.log(err))
        })

}


export const addTodo = (todo) => dispatch => {

    axios.post(`api/todoapp/`, todo)
        .then(result => {
            dispatch({
                type: ADD_TODO,
                payload: result.data
            })
        }).catch(err => console.log(err))
}