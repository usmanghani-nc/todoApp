import React from 'react'


const Button = ({children,...otherProps}) => (
<div className="cus-btn">
 <button {...otherProps}>{children}</button>
</div>    

);

export default Button;