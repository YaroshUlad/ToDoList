import React, {useState} from 'react';
import {ToDoList} from "./ToDoList/ToDoList";
import {AddItemForm} from "./AddItemForm/AddItemForm";
import {v1} from "uuid";

type FilterValueType = 'All' | 'Completed' | 'Active'

type ToDoListType = {
    id: string
    title: string
    filter: 'All' | 'Completed' | 'Active'
}


type TasksType = {
    id: string
    title: string
    isDone: boolean
}

const App = () => {

    const a = v1()
    const b = v1()
    const [toDoLists, setToDoLists] = useState<Array<ToDoListType>>([
        {id: a, title: 'What to learn', filter: 'All'},
        {id: b, title: 'What to Buy', filter: 'All'}

    ])
    const [tasksForToDoLists, setTasksForToDoLists] = useState({
        [a]: [{id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "ReactJS", isDone: false}],
        [b]: [{id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "ReactJS", isDone: false}]
    })

    const addNewToDoList = (newToDoListTitle: string) => {
        let toDoListId = v1()
        let filterValue: FilterValueType = 'All'
        let newToDoList = {id: toDoListId, title: newToDoListTitle, filter: filterValue}
        setToDoLists([newToDoList, ...toDoLists])
        let newArrayForTasks: Array<TasksType> = [{id: v1(), title: "ReactJS", isDone: false}]
        setTasksForToDoLists(
            {...tasksForToDoLists, [toDoListId]: newArrayForTasks}
        )
        console.log(tasksForToDoLists)
    }

    const newToDoListTitleHandler = (newItemTitle: string, toDolistId: string) => {
        setToDoLists(toDoLists.map(el => {
            if (el.id === toDolistId) {
                el.title = newItemTitle
            }
            return el
        }))
    }

    const deleteToDoList = (toDoListId: string) => {
        setToDoLists(toDoLists.filter(el => el.id !== toDoListId))
        delete tasksForToDoLists[toDoListId]
        setTasksForToDoLists({...tasksForToDoLists})
    }

    const addNewTaskToToDoList = (taskTitle: string, toDoListId: string) => {
        let toDoListTasks = tasksForToDoLists[toDoListId]
        const newTask = {id: v1(), title: taskTitle, isDone: false}
        toDoListTasks = [newTask, ...toDoListTasks]
        setTasksForToDoLists({...tasksForToDoLists, [toDoListId]: toDoListTasks})
    }

    const removeTask = (taskId: string, toDoListId: string) => {
        const toDoListTasks = tasksForToDoLists[toDoListId]
        const newToDoListTasks = toDoListTasks.filter(el => el.id !== taskId)
        setTasksForToDoLists({...tasksForToDoLists, [toDoListId]: newToDoListTasks})
    }

    const isDoneChanger = (taskId: string, newIsDone: boolean, toDoListId: string) => {
        const taskArray = tasksForToDoLists[toDoListId]
        const newTaskArray = taskArray.map(el => el.id === taskId ? {...el, isDone: newIsDone} : el)
        setTasksForToDoLists({...tasksForToDoLists, [toDoListId]: newTaskArray})
    }

    const renameTask = (taskId: string, newTaskTitle: string, toDoListId: string) => {
        const taskArray = tasksForToDoLists[toDoListId]
        const newTaskArray = taskArray.map(el => el.id === taskId ? {...el, title: newTaskTitle} : el)
        setTasksForToDoLists({...tasksForToDoLists, [toDoListId]: newTaskArray})
    }

    const filterChanger = (filter: FilterValueType, toDoListId: string) => {
        setToDoLists(toDoLists.map(el => el.id === toDoListId ? {...el, filter} : el))
    }


    return (
        <div>
            <AddItemForm callBack={addNewToDoList}/>
            {toDoLists.map(el => {
                let filteredTasks = tasksForToDoLists[el.id]
                if (el.filter === 'Active') {
                    filteredTasks = tasksForToDoLists[el.id].filter(el => !el.isDone)
                }
                if (el.filter === 'Completed') {
                    filteredTasks = tasksForToDoLists[el.id].filter(el => el.isDone)
                }
                return (
                    <ToDoList
                        id={el.id}
                        key={el.id}
                        title={el.title}
                        data={filteredTasks}
                        removeTask={removeTask}
                        renameTask={renameTask}
                        isDoneChanger={isDoneChanger}
                        filterChanger={filterChanger}
                        deleteToDoList={deleteToDoList}
                        addNewTask={addNewTaskToToDoList}
                        renameToDoList={newToDoListTitleHandler}

                    />
                )
            })}
            {/*<ToDoList/>*/}
        </div>
    );
};

export default App;