import React from 'react'


const Input = ({handleChange, ...otherProps}) => (
    <div className="input-container">
        <input onChange={handleChange} {...otherProps}/>
    </div>
);


export default Input;