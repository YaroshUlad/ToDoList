import React, {useState} from 'react';
import {Button} from "./components/Button";
import {MutableSpan} from "./components/MutableSpan";
import {AddNewItem} from "./components/addNewItem";

const App8 = () => {
    const [title, setTitle] = useState('First')
    const [input, setInput] = useState('')
    const [isTrue, setIsTrue] = useState(false)

    return (
        <div>
            8 week
            <Button buttonTitle={'+'} callback={() => {
                console.log('Button')
            }}/>

            <MutableSpan editModeChanger={() => setIsTrue(!isTrue)}
                         titleValue={title}
                         inputValue={input}
                         isEditModeOn={isTrue}
                         onChangeCallback={(n) => setInput(n)}
                         renameCallback={(n) => setTitle(n)}/>

            <AddNewItem newItemValue={input}
                        setNewItem={setInput}
                        addNewItem={(n) => console.log(n)}/>
        </div>
    );
};

export default App8;