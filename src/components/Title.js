import React from 'react';


const Title = props => 
    <div>
        <h1>{props.title}</h1> 
        <p>Number: {props.taskNumber}</p>
    </div>

export default Title;