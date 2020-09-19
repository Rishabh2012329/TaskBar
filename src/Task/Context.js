import React, { Component } from 'react'
import firebase, { firestore } from 'firebase'

const Context =React.createContext();

export class Contexts extends Component {
    state={
        list:[[],],
        add:(name,discription,id)=>this.addN(name,discription,id),
        update:(obj,name,discription,id)=>this.update(obj,name,discription,id),
        newL:()=>this.newlist()
    }
    addN=(name,discription,id)=>{
        let list=this.state.list;
        list[id].push({name,discription,id})
        this.setState({list:list},()=>console.log(this.state.list))
    }
    newlist=()=>{
        let {list}=this.state;
        list.push([]);
        this.setState({list:list})
    }
    update=(obj,name,discription,id)=>{
        let {list}=this.state;
        let nlist=list[id].map(tsk=>(
           tsk.name===obj?{name:name,discription:discription}:tsk
        ))
        list[id]=nlist
        console.log(nlist)
        this.setState({list:list})
    }

    componentDidMount(){
        if(firebase.auth().currentUser){
        var uid=firebase.auth().currentUser.uid
        const db=firestore();
            db.collection('Inter').doc(uid).get().then((data)=>
                data.forEach((doc)=>(
                    this.setState({list:doc.data()})
                )
                )
            )
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>

        )
    }
}

export  const Consumer = Context.Consumer