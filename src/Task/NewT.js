import React, { useState } from 'react'
import Header from '../Layout/header'
import Task from './Task'
import {Consumer} from './Context'

function NewT({setlogged}){
    
    return(
        <Consumer>
            {value=>{
                const {list,add,update,newL}=value
                //const list={lists:[1,2]}
                return(
                    <div >
                        <Header setlogged={setlogged}/>
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            {list?list.map((obj,index)=>(
                                <Task tasks={obj} addN={add} update={update} id={index}/>
                            )):null}
                        </div>

                        <i style={{bottom:'15px',right:'15px',position:'fixed'}} onClick={()=>{
                            newL()
                        }} className="fa fa-plus-circle fa-3x"></i>
                </div>
                )
            }
             
            }
        </Consumer>
       
    )
}

export default NewT;