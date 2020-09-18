import React, { Component } from 'react'
import firebase, { firestore } from 'firebase'

const Context =React.createContext();

export class Contexts extends Component {
    state={
        list:[]
    }

    componentDidMount(){
        var uid=firebase.auth().currentUser.uid
        const db=firestore();
        db.collection('Inter').doc(uid).get().then((data)=>
            data.forEach((doc)=>(
                this.setState({list:doc.data()})
            )
            )
         )
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