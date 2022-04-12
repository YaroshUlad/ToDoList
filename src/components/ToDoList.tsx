import React from "react";
import {ObjectsInTaskArrayType} from "../App";
import {Button} from "./Button";

type ToDoListPropsType = {
    title: string
    data: Array<ObjectsInTaskArrayType>
}

export const ToDoList = (props: ToDoListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <input type="button" value={'+'}/>
            </div>
            <div>
                <ol>
                    {props.data.map((el, index) => {
                        return (
                            <li key={el.id} value={index + 1}>
                                <input type="checkbox" checked={el.isDone}/>
                                <input type="button" value={'x'}/>
                                {el.title}
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div>
                <Button buttonTitle={'All'} callBack={() => {
                }}/>
                <Button buttonTitle={'Active'} callBack={() => {
                }}/>
                <Button buttonTitle={'Completed'} callBack={() => {
                }}/>
            </div>
        </div>
    )
}

/*
import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterButtonType, ObjectsInTasksType} from "../App";
import {Button} from "./Button";

type ToDoListPropsType = {
    data: Array<ObjectsInTasksType>
    title: string
    addNewTaskFromInput: (value: string) => void
    changeIsDoneProperty: (id: number) => void
    deleteTask: (id: number) => void
    setFilter: (filterName: FilterButtonType) => void
}

export const ToDoList = (props: ToDoListPropsType) => {
    const [inputTaskValue, setInputTaskValue] = useState('')
    const onChangeInputTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTaskValue(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            props.addNewTaskFromInput(inputTaskValue)
            setInputTaskValue('')
        }
    }
    const onClickButtonHandler = () => {
        props.addNewTaskFromInput(inputTaskValue)
        setInputTaskValue('')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input onChange={onChangeInputTaskHandler}
                       onKeyPress={onKeyPressHandler}
                       value={inputTaskValue}/>
                <input type="button" value={'+'} onClick={onClickButtonHandler}/>
            </div>
            <ol>
                {props.data.map((el, index) => {
                    const checkBoxOnChangeHandler = () => {
                        props.changeIsDoneProperty(el.id)
                    }
                    const onClickDeleteTaskHandler = () => {
                        props.deleteTask(el.id)
                    }
                    return (
                        <li key={el.id} value={index + 1}>
                            <input type="checkbox" checked={el.isDone} onChange={checkBoxOnChangeHandler}/>
                            <input type="button" onClick={onClickDeleteTaskHandler} value={'x'}/>
                            {el.title}
                        </li>
                    )
                })}
            </ol>
            <div>
                <Button buttonTitile={'All'} callBack={() => props.setFilter('All')}/>
                <Button buttonTitile={'Active'} callBack={() => props.setFilter('Active')}/>
                <Button buttonTitile={'Completed'} callBack={() => props.setFilter('Completed')}/>
            </div>
        </div>
    )
}
*/


/*
import React, {useState} from "react";
import {TextInput} from "./TextInput";
import {Button} from "./Button";
import {Checkbox} from "./Checkbox";

type ObjectInDataType = {
    id: number
    title: string
    isDone: boolean
}
type ToDoListPropsType = {
    title: string
    ID: number
    data: Array<ObjectInDataType>
    deleteTask: (buttonTitle: string, id: number) => void
    checkBox: (checkBoxId: number) => void
    addTask: (textInput: string) => void
}

export const ToDoList = (props: ToDoListPropsType) => {

    // ___________________get copy Data for filter_______________
    let filteredData = props.data
    // ____________________ set filter_______________________
    const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All')

    const setFilterButton = (buttonTitle: string, ID: number) => {
        if (buttonTitle === 'All' || buttonTitle === 'Active' || buttonTitle === 'Completed') {
            setFilter(buttonTitle)
        }
    }
    if (filter === 'Active') {
        filteredData = props.data.filter(el => !el.isDone)
    }
    if (filter === 'Completed') {
        filteredData = props.data.filter(el => el.isDone)
    }
    //______________________lift info about checkbox changes to App__________________

    const checkBoxChanges = (checkBoxId: number) => {
        props.checkBox(checkBoxId)
    }

    //____________________Create state for Text input_________________
    const [inputValue, setInputValue] = useState<string>('')
    const inputValueHandler = (inputValue: string) => {
        setInputValue(inputValue)
    }
    //_____________________lift state to App for Data's state_____________
    const addInputValueToData = () => {
        setInputValue('')
        props.addTask(inputValue)
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <TextInput callBack={inputValueHandler} value={inputValue}/>
                <Button buttonID={props.ID + 101} buttonTitle={"+"} callBack={addInputValueToData}/>
            </div>
            <ol>
                {filteredData.map((el, index) => {
                    return (
                        <li value={index + 1} key={el.id}>
                            <Checkbox isDone={el.isDone}
                                      callBack={() => checkBoxChanges(el.id)}/>
                            <Button buttonID={el.id}
                                    buttonTitle={'x'}
                                    callBack={props.deleteTask}/>
                            {el.title}
                        </li>
                    )
                })}
            </ol>
            <div>
                <Button buttonID={props.ID + 201} buttonTitle={'All'} callBack={setFilterButton}/>
                <Button buttonID={props.ID + 202} buttonTitle={'Active'} callBack={setFilterButton}/>
                <Button buttonID={props.ID + 203} buttonTitle={'Completed'} callBack={setFilterButton}/>
            </div>


        </div>
    )
}
*/


/*import React, {useState} from "react";
import {Button} from "./Button";
import {Checkbox} from "./Checkbox";

export type ObjectsInDataArray = {
    id: number
    title: string
    isDone: boolean
}

export type ToDoListPropsType = {
    title: string
    data: Array<ObjectsInDataArray>
    callbackCheck: (id: number, isDone: boolean) => void
    callbackDelete: (id: number) => void
}

export const ToDoList = (props: ToDoListPropsType) => {
    let data1 = props.data
    const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All')

    if (filter === 'Active') {
        data1 = data1.filter(el => !el.isDone)
    }
    if (filter === 'Completed') {
        data1 = data1.filter(el => el.isDone)
    }


    const buttonCallBack = (buttonName: string, buttonId: number) => {
        if (buttonName === 'All' || buttonName === 'Active' || buttonName === 'Completed') {
            setFilter(buttonName)
        }
        if (buttonName === 'x') {
            props.callbackDelete(buttonId)
        }
    }

    const checkBoxCallBack = (id: number, isDone: boolean) => {
        props.callbackCheck(id, isDone)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <form>
                <input type="text"/>
                <input type="button" value={'+'}/>
            </form>
            <ol>
                {data1.map((el, index) => {
                    return (
                        <li value={index + 1} key={el.id}>
                            <Checkbox Id={el.id} isDone={el.isDone} callBack={checkBoxCallBack}/>
                            <Button buttonTitle={'x'} id={el.id} callBack={buttonCallBack}/>
                            {el.title}
                        </li>
                    )
                })}
            </ol>
            <Button buttonTitle={'All'} id={201} callBack={buttonCallBack}/>
            <Button buttonTitle={'Active'} id={202} callBack={buttonCallBack}/>
            <Button buttonTitle={'Completed'} id={203} callBack={buttonCallBack}/>

        </div>
    )
}*/


/*
import React from "react";
import {Button} from "./Button";
import {Checkbox} from "./Checkbox";


type ToDoListPropsType = {
    title: string,
    callBack: (buttonName: string, buttonID: number) => void
    data: Array<ObjectsInDataArrayType>,
    callBackBox: (boxId: number) => void
}

export type ObjectsInDataArrayType = {
    id: number,
    title: string,
    isDone: boolean
}

export const ToDoList = (props: ToDoListPropsType) => {


    const onClickHandler = (buttonName: string, buttonID: number) => {
        console.log(buttonName)
        props.callBack(buttonName, buttonID)
    }

    const checkBoxHandler = (boxId: number) => {
        console.log('from todo check', boxId)
        props.callBackBox(boxId)
    }

    const textInputHandler = (value: string) => {
        console.log(value)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input id={'testInput'} type='text'/>
                <input type="button" value={'+'}/>
                {/!*<Button buttonID={101} buttonTitle={'+'} callBack={onClickHandler}/>*!/}
            </div>
            <ol>
                {props.data.map((el, index) => {
                    return (
                        <li key={index} value={index + 1}>
                            <Checkbox boxID={el.id} isDone={el.isDone} callBack={checkBoxHandler}/>
                            {el.title}
                            <Button buttonTitle={'x'} callBack={onClickHandler} buttonID={el.id}/>
                        </li>
                    )
                })}
            </ol>
            <div>
                <Button buttonTitle={'All'} callBack={onClickHandler} buttonID={102}/>
                <Button buttonTitle={'Active'} callBack={onClickHandler} buttonID={103}/>
                <Button buttonTitle={'Completed'} callBack={onClickHandler} buttonID={104}/>
            </div>
        </div>
    )
}
*/


/*import React from "react";
import {Button} from "./Button";

type ToDoListPropsType = {
    title: string,
    callBack: (buttonName: string, id: number) => void,
    dataState:Array<ObjectsInDataState>
}
export type ObjectsInDataState = {
    id: number,
    title: string,
    isDone: boolean
}

export const ToDoList = (props: ToDoListPropsType) => {
    const onClickHandler = (buttonName: string,id:number) => {
        props.callBack(buttonName,id)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <span>
                    <input type="text"/>
                    <Button title={'+'} callBack={onClickHandler} id={44444}/>
                </span>
            </div>
            <div>
                <ul>
                    {props.dataState.map((el,index)=>{
                        return (
                            <li key={index+1}>
                                <span><input type="checkbox" checked={el.isDone}/>{el.title}
                                    {<Button title={'x'} callBack={onClickHandler} id={el.id}/>}
                                    </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <Button title={'All'} callBack={onClickHandler} id={34444}/>
                <Button title={'Active'} callBack={onClickHandler} id={4444444}/>
                <Button title={'Completed'} callBack={onClickHandler} id={5444444}/>
            </div>
        </div>
    )
}*/

/*
import React, {useState} from "react";
import {Button} from "./Button";

type ToDoListPropsType = {
    title: string,
    arr: Array<ObjectInDataArray>
}
export type ObjectInDataArray = {
    id: number,
    title: string,
    isDone: boolean
}
type FilterNameType = 'All' | 'true' | 'false'

export const ToDoList = (props: ToDoListPropsType) => {

    // ------------ filter for Active Tasks --------------------------
    let isDoneFilter: Array<ObjectInDataArray>
    let [filterName, setFilterName] = useState<FilterNameType>('All')

    const foo = (name: FilterNameType) => {
        setFilterName(name)
    }

    if (filterName === 'All') {
        isDoneFilter = props.arr
    } else if (filterName === 'false') {
        isDoneFilter = props.arr.filter(el => el.isDone === false)
    } else {
        isDoneFilter = props.arr.filter(el => el.isDone === true)
    }
    // ----------------------------------------------------------------

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <Button titleButton={'+'} callBack={() => console.log('+')}/>
            </div>
            <div>
                <ul>
                    {isDoneFilter.map((el) => {
                        return (
                            <li key={el.id}><span><input type="checkbox" checked={el.isDone}/>{el.title}</span></li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <span><Button titleButton={'All'} callBack={() => foo('All')}/></span>
                <span><Button titleButton={'Active'} callBack={() => foo('false')}/></span>
                <span><Button titleButton={'Completed'} callBack={() => foo('true')}/></span>
            </div>
        </div>
    )
}
*/


/*
import React, {useState} from "react";

type ToDoListPropsType = {
    mainTitle?: string,
    arr: Array<ArrayPropsType>
}
type ArrayPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const ToDoList = (props: ToDoListPropsType) => {


    return (
        <div>
            <h1>{props.mainTitle}</h1>
            <h3>What to learn</h3>
            <div>
                <span><input type="text"/>
                <button>+</button></span>
            </div>
            <ol>
                {props.arr.map((el) => {
                    return (
                        <li value={el.id} key={el.id}><input type='checkbox' checked={el.isDone} />{el.title}</li>
                    )
                })
                }
            </ol>
        </div>
    )
}*/
