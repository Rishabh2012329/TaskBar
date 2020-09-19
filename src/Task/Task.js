import React, { useState } from 'react'

export default function Task({tasks,addN,update,id}) {
    const [add,setadd]=useState(false);
    const [task,setTask]=useState(false);
    const [name,setName]=useState("");
    const [discription,setDis]=useState("");
    const [updat,setupd]=useState(false)
    const [old,setold]=useState('')

    const back=<div style={{top:'0',left:'0',bottom:'0',position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.7)',display:'flex',justifyContent:'center',alignItems:'center',}}>
        <div className="card" style={{width:'300px',height:"auto",padding:'10px',display:'flex',flexDirection:'column'}}>
            <div style={{width:'100%',marginBottom:'5px'}}>
            <button style={{float:'right',backgroundColor:'transparent',border:'none'}} onClick={()=>setTask(false)}><i className="fa fa-close" ></i></button>
            </div>
            
            <input className="form-control" style={{marginBottom:'5px'}} placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <textarea className="form-control" row='4' col='50' placeholder="Discription" value={discription} onChange={(e)=>setDis(e.target.value)}></textarea>
            <button className="btn btn-dark form-control" style={{marginTop:'3px'}} onClick={()=>sub()}>Submit</button>
        </div>
    </div> 
    
    

    function sub(){
        if(name!==""){
            addN(name,discription,id)
            setName('')
            setDis("")
        }
        else{
            alert('name  is required')
        }
    }
    return (
        <div style={{border:'solid blueviolet 1px',width:'200px',margin:'10px',display:'flex',flexDirection:'column'}}>
            {task?back:null}
            <div style={{width:'100%',padding:'5px'}}>
                <span>TaskBar</span>
                <button style={{float:'right',border:'none',backgroundColor:'transparent'}} onClick={()=>setadd(!add)} ><i className="fa fa-ellipsis-v"></i></button>
            </div >

            {updat?<div style={{top:'0',left:'0',bottom:'0',position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.7)',display:'flex',justifyContent:'center',alignItems:'center',}}>
        <div className="card" style={{width:'300px',height:"auto",padding:'10px',display:'flex',flexDirection:'column'}}>
            <div style={{width:'100%',marginBottom:'5px'}}>
            <button style={{float:'right',backgroundColor:'transparent',border:'none'}} onClick={()=>setupd(false)}><i className="fa fa-close" ></i></button>
            </div>
            
            <input className="form-control" style={{marginBottom:'5px'}} placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <textarea className="form-control" row='4' col='50' placeholder="Discription" value={discription} onChange={(e)=>setDis(e.target.value)}></textarea>
            <button className="btn btn-dark form-control" style={{marginTop:'3px'}} onClick={()=>{update(old,name,discription,id)}}>Submit</button>
        </div>
    </div>:null}

            {add?<div id="add" style={{width:'100%',padding:'5px',border:'solid black 1px',backgroundColor:'blueviolet',color:'white'}} onClick={()=>setTask(true)}>
                ADD
            </div>:null}
            {tasks.map((obj)=>(<div onClick={()=>{setupd(true);setName(obj.name);setDis(obj.discription);setold(obj.name)}}><div style={{display:'flex',flexDirection:'row',width:'95%',padding:'5px',alignItems:'center'}}> 
                <div style={{border:'solid blueviolet 1px',width:'25px',height:'25px',borderRadius:'15px'}}></div>
                <span style={{fontSize:'16px',fontWeight:'50',marginLeft:'5px'}}>{obj.name}</span>
            </div>
            
            
                <div style={{fontSize:'13px',fontWeight:'50',display:'flex',flexWrap:'wrap',flexDirection:'column',width:'95%',height:'auto',color:'purple',wordBreak:'break-all',marginLeft:'10px'}}>
                    {obj.discription}
                </div>
                </div>))
          
                }
        </div>
    )
}
