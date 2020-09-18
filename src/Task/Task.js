import React, { useState } from 'react'

export default function Task({tasks}) {
    const [add,setadd]=useState(false);
    const [task,setTask]=useState(false);
    const [name,setName]=useState("");
    const [discription,setDis]=useState("")

    const back=<div style={{top:'0',left:'0',bottom:'0',position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.7)',display:'flex',justifyContent:'center',alignItems:'center',}}>
        <div className="card" style={{width:'300px',height:"auto",padding:'10px',display:'flex',flexDirection:'column'}}>
            <div style={{width:'100%',marginBottom:'5px'}}>
            <button style={{float:'right',backgroundColor:'transparent',border:'none'}} onClick={()=>setTask(false)}><i className="fa fa-close" ></i></button>
            </div>
            
            <input className="form-control" style={{marginBottom:'5px'}} placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
            <textarea className="form-control" row='4' col='50' placeholder="Discription" onChange={(e)=>setDis(e.target.value)}></textarea>
        </div>
    </div>
    return (
        <div style={{border:'solid blueviolet 1px',width:'200px',margin:'10px',display:'flex',flexDirection:'column'}}>
            {task?back:null}
            <div style={{width:'100%',padding:'5px'}}>
                <span>TaskBar</span>
                <button style={{float:'right'}} onClick={()=>setadd(!add)} >B</button>
            </div >
            {add?<div style={{width:'100%',padding:'5px',border:'solid black 1px',}} onClick={()=>setTask(true)}>
                ADD
            </div>:null}

        </div>
    )
}
