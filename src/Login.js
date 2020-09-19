import React, {  useState } from 'react'
import Input from './Layout/Input'
import './Layout/login.css'
import firebase from 'firebase'

export default function Login({Slog}) {
    const [email,setemail]=useState('')
    const [password,setpass]=useState('')

    function sub(e){
        e.preventDefault();
        email!==""&&password!==""?
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            alert('logged IN')
            Slog(true)
        }).catch(err=>alert(err)):alert('email or password is empty')
    }
    function reset(){
        var auth = firebase.auth();
        
        if(email){
            auth.sendPasswordResetEmail(email).then(function() {
            alert("A email has been sent at your email address")
            }).catch(function(error) {
            // An error happened.
            });
        }
        else{
            alert('plz enter email  and then click on ForgetPassword')
        }


    }
    return (
        <div>
            <style>{`body{background:blueviolet;}`}</style>
            <div className="Contain">
               <div className='tex'>Login!</div>
                <div className='par'>
                    <Input text="Email"  onChange={e=>{
                        setemail(e.target.value)
                    }} placeholder="email" type='email'/>
                </div>
                
                <div className='par'>
                    <Input text="Password" onChange={e=>{
                        setpass(e.target.value)
                    }} placeholder="password" type='password' />
                </div>
                <div style={{width:'38%',alignItems:'center'}}>
                    <span style={{marginRight:'3px',color:'white'}}>Show password</span><input type="checkbox"/>
                    <button style={{backgroundColor:'transparent',border:'none',float:'right',color:'white'}} onClick={()=>reset}>Forgetpassword?</button>
                </div>
                <button onClick={sub} className="button">Login</button>
            </div>
        </div>
    )
}
