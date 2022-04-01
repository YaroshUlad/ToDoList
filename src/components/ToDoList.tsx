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
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <Button buttonID={101} buttonTitle={'+'} callBack={onClickHandler}/>
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
