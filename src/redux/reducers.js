import { ADD_TODO } from "./actionType";

const initialstate = {
    todos : [],
    filter:"ALL",
    searchTerm:"",



}
const todoReducer = (state = initialstate ,action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos:[...state.todos, {text: action.payload.text, completed : false}]
                filter: state.filter,
                searchTerm:state.searchTerm
            }
            
            break;
    
        default:
            break;
    }

}

export default todoReducer;