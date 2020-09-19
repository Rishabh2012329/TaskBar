import React, { Component } from 'react'
import firebase, { firestore } from 'firebase'

const Context =React.createContext();

export class Contexts extends Component {
    state={
        list:[[],],
        add:(name,discription)=>this.addN(name,discription),
        update:(obj,name)=>this.update(obj,name),
    }
    addN=(name,discription)=>{
        let list=this.state.list;
        list[0].push({name,discription})
        this.setState({list:list},()=>console.log(this.state.list))
    }

    update=(obj,name)=>{
        let {list}=this.state;
        console.log(name)
        let nlist=list[0].map(tsk=>(
           tsk.name===obj?{name:name}:tsk
        ))
        list[0]=nlist
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