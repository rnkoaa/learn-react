import React from 'react';
import createStateContext from "react-state-context";
import * as todoActions from "./actions";

const TodoContext = createStateContext(todoActions, {
    todos: [{
            _id: "1",
            title: "Create Todo",
            status: "Done",
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        },
        {
            _id: "2",
            title: "Delete Todo",
            status: "Not Done",
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        },
        {
            _id: "3",
            title: "Build Lego",
            status: "Not Done",
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        },
        {
            _id: "4",
            title: "Run Marathon",
            status: "Not Done",
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        }
    ],
});

export default TodoContext;