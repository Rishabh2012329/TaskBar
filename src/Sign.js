import React, {  useState } from 'react'
import Input from './Layout/Input'
import './Layout/login.css'
import firebase from 'firebase'


export default function SignIN({Slog}) {
    const [UserName,setuser]=useState('');
    const [email,setemail]=useState('');
    const [password,setpass]=useState('');

        function sub(e){
            e.preventDefault();
            if(UserName.length<7){
            email!==""&&password!==""&&UserName!==""?
            firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
                var user=firebase.auth().currentUser;
                user.updateProfile({
                    displayName:UserName
                })
                Slog(true)
                alert('userlogged in')
            }).catch(err=>alert(err)):alert('email,password or userName is empty')
        }
        else{
            alert('userName should be of less than 6 characters')
        }
        }
        return (
        <div>
            <style>{`body{background:blueviolet;}`}</style>
            <div className="Contain">
               <div className='tex'>SignUp!</div>
                <div className='par'>
                    <Input text="UserName" onChange={e=>setuser(e.target.value)} placeholder="username"/>
                </div>
                
                <div className='par'>
                    <Input text="EmailAddress" onChange={e=>setemail(e.target.value)} placeholder="email" type='email'/>
                </div>
                
                <div className='par'>
                    <Input text="Password" onChange={e=>setpass(e.target.value)} placeholder="password" type='password'/>
                </div>
                <button className="button" onClick={sub}>Signup</button>
            </div>
        </div>
    )
}