import React, { useEffect, useState } from 'react'
import  firebase from "firebase";
import img from './White_Zombie.svg'
function Header({setlogged}){
    const [Name,setname]=useState("");
   // setname(firebase.auth().currentUser.displayName)

   useEffect(()=>{
       if(firebase.auth().currentUser.displayName){
           setname(firebase.auth().currentUser.displayName)
       }
   })
    return(
        <div style={{backgroundColor:"blueviolet",padding:'10px',display:'flex',flexDirection:'row',alignItems:'center',width:'100%',maxWidth:'100%',overflow:'hidden'}}>
            <img src={img} style={{width:'35px',height:'35px'}}/>
            <div style={{color:'white',fontSize:'22px',fontWeight:'900',marginLeft:'5px'}}>Taskbar</div>
            <span onClick={()=>{ firebase.auth().signOut()
                setlogged(false)}} style={{width:'100%',textAlign:'right'}}><span style={{color:'white',fontSize:'22px',fontWeight:"800",width:'60px',height:'100%',padding:"5px",paddingRight:'10px'}} id='logout'>Logout</span></span>
            <div style={{color:'white',fontSize:'22px',fontWeight:"800",width:'150px',height:'100%',padding:"5px",paddingRight:'10px',marginRight:'4px',display:'flex',flexDirection:'row'}} >
               Hi {Name!==''?Name:null}
            </div>
        </div>
    )
}

export default Header;