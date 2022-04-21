import React from 'react';
import {Input} from "./Input/Input";

type ToDoListPropsType = {
    toDoListTitle: string

}

export const ToDoList: React.FC<ToDoListPropsType> = ({
                                                          toDoListTitle
                                                      }) => {
    return (
        <div>
            <h3>{toDoListTitle}</h3>
            <Input/>
        </div>
    );
};
