import React, { useState } from 'react'
import Header from '../Layout/header'
import Task from './Task'
import {Consumer} from './Context'

function NewT({setlogged}){
    
    return(
        <Consumer>
            {value=>{
                const {list,add,update}=value
                //const list={lists:[1,2]}
                return(
                    <div >
                        <Header setlogged={setlogged}/>
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            {list?list.map((obj)=>(
                                <Task tasks={obj} addN={add} update={update}/>
                            )):null}
                        </div>

                        <i style={{bottom:'15px',right:'15px',position:'fixed'}} onClick={()=>{
                            
                        }} className="fa fa-plus-circle fa-3x"></i>
                </div>
                )
            }
             
            }
        </Consumer>
       
    )
}

export default NewT;