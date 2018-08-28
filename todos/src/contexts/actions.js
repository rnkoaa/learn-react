export function add(todo) {

}

export function getAll() {

}

export function get(id) {

}

export function remove(id) {

}

export function update(id, updatedTodo) {

}

export function toggleModal(isOpen) {
    return {
        isOpen
    };
}

export function createTodo() {
    return function (setState) {
        console.log("Create Todos Clicked.")

        setState(prevState => {
            // // Shallow clone our todos, so that we do not modify the state
            const clonedTodos = [...prevState.todos];
            console.log("clonedTodos, ", clonedTodos);
            clonedTodos.push({
                _id: new Date().getTime(),
                title: "Bike 100miles",
                status: "Not Done",
                createdAt: new Date().getTime(),
                updatedAt: new Date().getTime()
            })
            console.log("2, clonedTodos, ", clonedTodos);
            console.log(prevState);
            return {
                todos: clonedTodos
            };
        });
    };
}

export function deleteTodo(newTodo) {
    return function (setState) {
        setState(prevState => {
            // Shallow clone our todos, so that we do not modify the state
            const clonedTodos = [...prevState.todos];

            return {
                todos: clonedTodos.push(newTodo),
            };
        });
    };
}