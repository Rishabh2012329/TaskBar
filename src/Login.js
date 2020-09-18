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
                <button onClick={sub} className="button">Login</button>
            </div>
        </div>
    )
}
