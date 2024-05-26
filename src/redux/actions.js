import { ADD_TODO , TOOGLE_TODO ,REMOVE_TODO, MARK_COMPLETED, MARK_INCOMPLETE, FILTER_TODOS, MARK_ALL_COMPLETE, UPDATE_SEARCH_ITEM} from "./actionType";

export const addTodo = (text) => ({
    type : ADD_TODO,
    payload:{text}


});

export const toggleTodo = (id) => ({
    type:TOOGLE_TODO,
    payload:{id}

});

export const removeTodo = (id) => ({
    type:REMOVE_TODO,
    payload:{id}
});

export const markCompleted = (id) => ({
    type:MARK_COMPLETED,
    payload:{id}

});

export const markIncomplete = (id) => ({
    type:MARK_INCOMPLETE,
    payload:{id}

});

export const filterTodo =  (filter) => ({
    type:FILTER_TODOS,
    payload:{filter}
});

export const markAllcomplete = () => ({
    type:MARK_ALL_COMPLETE,
});

export const updateSearchTerm = (searchTerm) => ({
    type:UPDATE_SEARCH_ITEM,
    payload:{searchTerm}

})