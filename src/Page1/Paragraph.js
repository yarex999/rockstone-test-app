import React from 'react';
import uuid from 'react-uuid'

function Paragraph({value}){
    console.log(value)
    return (
        <div key={uuid(5)}>
            {value}
        </div>
    )
}

export default Paragraph;