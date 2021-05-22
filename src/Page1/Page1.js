import React, {useState,useEffect,useRef} from 'react';
import Form from './Form.js'
import uuid from 'react-uuid';


function Page1(){

    const [text, setText] = useState([]);
    const isDelete = useRef(false);

    console.log(isDelete.current)

    function deleteText(index){
        isDelete.current = true
        setText([...text.slice(0,index),...text.slice(index+1)])
    }



    let result= text.map((elem,i) => {
    if(i === text.length - 1 && !isDelete.current){
        return <p className='text text-new'key={uuid(2)}>
        {elem}
        <button onClick={()=>deleteText(i)}>delete</button>
    </p>
    } else {
       return <p className='text text-old' key={uuid(2)}>
        {elem}
        <button onClick={()=>deleteText(i)}>delete</button>
    </p> 
    }
    
})

    
console.log(text)
console.log(result)

return (
        
    <div className="page page-one">
        <div className="page-one__inner">
          <Form text={text} addText={setText} deleteText={isDelete} />
          <p className="page-one__container">{result}</p>  
        </div>
    </div>

    )
}

export default Page1;