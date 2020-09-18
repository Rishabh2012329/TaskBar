import React from 'react'
import './Input.css'

export default function Input({text,type,...otherprops}) {
    return (
        <div className="cool">
            <div className="text">{text}</div>       
            <input type={type||'text'} className='input'  {...otherprops} required/>
        </div>
    )
    
}
