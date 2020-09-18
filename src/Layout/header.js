import React, { useState } from 'react'
import  firebase from "firebase";

function Header({setlogged}){
    const [Name,setname]=useState(firebase.auth().currentUser.displayName);
   // setname(firebase.auth().currentUser.displayName)
    return(
        <div style={{backgroundColor:"blueviolet",padding:'10px',display:'flex',flexDirection:'row'}}>
            <div style={{color:'white',fontSize:'22px',fontWeight:'900'}}>Taskbar</div>
            <div style={{color:'white',fontSize:'22px',fontWeight:'900',marginLeft:'5px'}}>Taskbar</div>
            <span onClick={()=>{ firebase.auth().signOut()
                setlogged(false)}}>Logout </span>

            <span>
               Hi  {Name!==''?Name:null}
            </span>
        </div>
    )
}

export default Header;