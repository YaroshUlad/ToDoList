import React, {useState} from "react";
import {ObjectsInDataState, ToDoList} from "./components/ToDoList";

type FilterButtonNameType = 'All' | 'Active' | 'Completed'

const App = () => {

    //_________________ Принимаем состояние информации _________________
    let [datas, setData] = useState<Array<ObjectsInDataState>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "Redux", isDone: false}
    ])
    let filteredData = datas

    // _______________ принимаем имя кнопки и фикируем ее состояние ________________
    let [buttonName, setButtonName] = useState<string>('+')
    let [filterName, setFilterName] = useState<FilterButtonNameType>('All')
    const foo = (buttoName: string, id: number) => {
        if (buttoName !== 'All' && buttoName !== 'Active' && buttoName !== 'Completed') {
            if (buttoName === 'x') {
                setData(datas.filter(el => el.id !== id)) 
            }
            setButtonName(buttoName)

        } else {
            setFilterName(buttoName)
        }
    }


//________________создаем состояние кнопок для фильтрации____
    if (filterName === 'Active') {
        filteredData = datas.filter(el => el.isDone === false)
    } else if (filterName === 'Completed') {
        filteredData = datas.filter(el => el.isDone === true)
    } else if (filterName !== 'All' || 'Active' || 'Completed') {
        filteredData = datas
    }
    // ________________________Удаляем элементы массива_____________________________


    return (
        <div>
            <ToDoList dataState={filteredData} title={'What to Learn'} callBack={foo}/>
        </div>
    )
}

export default App


/*
import React from "react";
import {ObjectInDataArray, ToDoList} from "./components/ToDoList";

const App = () => {
    const arr1:Array<ObjectInDataArray> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false}
    ]
    const arr2:Array<ObjectInDataArray> = [
        {id: 1, title: "Soul", isDone: true},
        {id: 2, title: "Escape", isDone: true},
        {id: 3, title: "Saw", isDone: true},
        {id: 4, title: "Goal", isDone: true},
        {id: 5, title: "Green mile", isDone: false},
    ]
    return (
        <div>
            <ToDoList title={'What to Learn'} arr={arr1}/>
            <ToDoList title={'Movies'} arr={arr2}/>
        </div>
    )
}

export default App



*/


/*
import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./components/ToDoList";
import {TopCars} from "./components/TopCars";
import {Button} from "./components/Button";
import {ToDoLIst2} from "./components/ToDoLIst2";
import {TopCars2} from "./components/TopCars2";
import {FilterComponent} from "./components/FilterComponent";

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])



    return (
        <div className="App">
            {/!*<ToDoList mainTitle={'Main Title 1'} arr={arr1}/>*!/}
            {/!*<ToDoList mainTitle={'Main Title 2'} arr={arr2}/>*!/}
            {/!*<TopCars arr={arr3}/>*!/}
            {/!*<ToDoLIst2 title={'Title'} arr={arr2}/>*!/}
            {/!*<TopCars2 arr={arr3}/>*!/}
            {/!*<div>*!/}
            {/!*<h1>{a}</h1>*!/}
            {/!*<div>*!/}
            {/!*    <Button titleButton={'stupid button'} callBack={counter}/>*!/}
            {/!*    <Button titleButton={'to 0'} callBack={zero}/>*!/}
            {/!*</div>*!/}
            <FilterComponent dataArray={money}/>


        </div>
    );
}

export default App;
*/


/*

const arr1 = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: false}
]

const arr2 = [
    {id: 1, title: "HTML&CSS222", isDone: true},
    {id: 2, title: "JS222", isDone: true},
    {id: 3, title: "ReactJS2222", isDone: true},
    {id: 4, title: "Rest API22222", isDone: true},
    {id: 5, title: "GraphQL22222", isDone: false},
]

const arr3 = [
    {manufact: 'BMW', model: 'X5'},
    {manufact: 'Lada', model: '2101'},
    {manufact: 'Renault', model: 'Scenic'},
    {manufact: 'Citroen', model: 'Picasso'},
    {manufact: 'Jeep', model: '4x4'}

]*/
