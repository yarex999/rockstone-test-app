import React, {useState} from 'react';

function Form({text,addText,deleteText}){
    const [value, setValue] = useState([])
    
    function handleChange(e){
        deleteText.current = false;
        setValue(value => e.target.value );
    }

    function newText(){
        addText([...text, value])
        setValue('');
    }
    
    return (

        <div className="page-one__form">
            <textarea value={value} onChange={(e)=>handleChange(e)} />
            <button className="pulse" onClick={newText}>add</button>
        </div>
    )
}

export default Form;