(this.webpackJsonplayout=this.webpackJsonplayout||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/White_Zombie.e1282860.svg"},21:function(e,t,a){e.exports=a(39)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(14),o=a.n(l),i=(a(26),a(3)),c=(a(27),a(20));a(28);function s(e){var t=e.text,a=e.type,n=Object(c.a)(e,["text","type"]);return r.a.createElement("div",{className:"cool",style:{border:"white 1px solid"}},r.a.createElement("div",{className:"text"},t),r.a.createElement("input",Object.assign({type:a||"text",className:"input"},n,{required:!0})))}a(12);var u=a(4),d=a.n(u);function m(e){var t=e.Slog,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),p=m[0],f=m[1];return r.a.createElement("div",null,r.a.createElement("style",null,"body{background:blueviolet;}"),r.a.createElement("div",{className:"Contain"},r.a.createElement("div",{className:"tex"},"Login!"),r.a.createElement("div",{className:"par"},r.a.createElement(s,{text:"Email",onChange:function(e){c(e.target.value)},placeholder:"email",type:"email"})),r.a.createElement("div",{className:"par"},r.a.createElement(s,{text:"Password",onChange:function(e){f(e.target.value)},placeholder:"password",type:"password"})),r.a.createElement("div",{style:{width:"320px",maxWidth:"320px"}},r.a.createElement("span",{style:{marginRight:"3px",color:"white"}},"Show password"),r.a.createElement("input",{type:"checkbox"}),r.a.createElement("button",{style:{backgroundColor:"transparent",border:"none",float:"right",color:"white"},onClick:function(){return function(){var e=d.a.auth();o?e.sendPasswordResetEmail(o).then((function(){alert("A email has been sent at your email address")})).catch((function(e){alert(e)})):alert("plz enter email  and then click on ForgetPassword")}()}},"Forgetpassword?")),r.a.createElement("button",{onClick:function(e){e.preventDefault(),""!==o&&""!==p?d.a.auth().signInWithEmailAndPassword(o,p).then((function(){alert("logged IN"),t(!0)})).catch((function(e){return alert(e)})):alert("email or password is empty")},className:"button"},"Login")))}function p(e){var t=e.Slog,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),p=m[0],f=m[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),b=g[0],v=g[1];return r.a.createElement("div",null,r.a.createElement("style",null,"body{background:blueviolet;}"),r.a.createElement("div",{className:"Contain"},r.a.createElement("div",{className:"tex"},"SignUp!"),r.a.createElement("div",{className:"par"},r.a.createElement(s,{text:"UserName",onChange:function(e){return c(e.target.value)},placeholder:"username"})),r.a.createElement("div",{className:"par"},r.a.createElement(s,{text:"EmailAddress",onChange:function(e){return f(e.target.value)},placeholder:"email",type:"email"})),r.a.createElement("div",{className:"par"},r.a.createElement(s,{text:"Password",onChange:function(e){return v(e.target.value)},placeholder:"password",type:"password"})),r.a.createElement("button",{className:"button",onClick:function(e){e.preventDefault(),o.length<7?""!==p&&""!==b&&""!==o?d.a.auth().createUserWithEmailAndPassword(p,b).then((function(){d.a.auth().currentUser.updateProfile({displayName:o}),t(!0),alert("userlogged in")})).catch((function(e){return alert(e)})):alert("email,password or userName is empty"):alert("userName should be of less than 6 characters")}},"Signup")))}var f=a(15),h=a.n(f);var g=function(e){var t=e.setlogged,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){d.a.auth().currentUser.displayName&&c(d.a.auth().currentUser.displayName)})),r.a.createElement("div",{style:{backgroundColor:"blueviolet",padding:"10px",display:"flex",flexDirection:"row",alignItems:"center",width:"100%",maxWidth:"100%",overflow:"hidden"}},r.a.createElement("img",{src:h.a,style:{width:"35px",height:"35px"}}),r.a.createElement("div",{style:{color:"white",fontSize:"22px",fontWeight:"900",marginLeft:"5px"}},"Taskbar"),r.a.createElement("span",{onClick:function(){d.a.auth().signOut(),t(!1)},style:{width:"100%",textAlign:"right"}},r.a.createElement("span",{style:{color:"white",fontSize:"22px",fontWeight:"800",width:"60px",height:"100%",padding:"5px",paddingRight:"10px"},id:"logout"},"Logout")),r.a.createElement("div",{style:{color:"white",fontSize:"22px",fontWeight:"800",width:"150px",height:"100%",padding:"5px",paddingRight:"10px",marginRight:"4px",display:"flex",flexDirection:"row"}},"Hi ",""!==o?o:null))};function b(e){var t=e.tasks,a=e.addN,l=e.update,o=e.id,c=Object(n.useState)(!1),s=Object(i.a)(c,2),u=s[0],d=s[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),f=p[0],h=p[1],g=Object(n.useState)(""),b=Object(i.a)(g,2),v=b[0],E=b[1],x=Object(n.useState)(""),y=Object(i.a)(x,2),w=y[0],N=y[1],k=Object(n.useState)(!1),j=Object(i.a)(k,2),C=j[0],O=j[1],S=Object(n.useState)(""),W=Object(i.a)(S,2),D=W[0],I=W[1],A=r.a.createElement("div",{style:{top:"0",left:"0",bottom:"0",position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.7)",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"card",style:{width:"300px",height:"auto",padding:"10px",display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{width:"100%",marginBottom:"5px"}},r.a.createElement("button",{style:{float:"right",backgroundColor:"transparent",border:"none"},onClick:function(){return h(!1)}},r.a.createElement("i",{className:"fa fa-close"}))),r.a.createElement("input",{className:"form-control",style:{marginBottom:"5px"},placeholder:"Name",value:v,onChange:function(e){return E(e.target.value)}}),r.a.createElement("textarea",{className:"form-control",row:"4",col:"50",placeholder:"Discription",value:w,onChange:function(e){return N(e.target.value)}}),r.a.createElement("button",{className:"btn btn-dark form-control",style:{marginTop:"3px"},onClick:function(){""!==v?(a(v,w,o),E(""),N("")):alert("name  is required")}},"Submit")));return r.a.createElement("div",{style:{border:"solid blueviolet 1px",width:"200px",margin:"10px",display:"flex",flexDirection:"column"}},f?A:null,r.a.createElement("div",{style:{width:"100%",padding:"5px"}},r.a.createElement("span",null,"TaskBar"),r.a.createElement("button",{style:{float:"right",border:"none",backgroundColor:"transparent"},onClick:function(){return d(!u)}},r.a.createElement("i",{className:"fa fa-ellipsis-v"}))),C?r.a.createElement("div",{style:{top:"0",left:"0",bottom:"0",position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.7)",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"card",style:{width:"300px",height:"auto",padding:"10px",display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{width:"100%",marginBottom:"5px"}},r.a.createElement("button",{style:{float:"right",backgroundColor:"transparent",border:"none"},onClick:function(){return O(!1)}},r.a.createElement("i",{className:"fa fa-close"}))),r.a.createElement("input",{className:"form-control",style:{marginBottom:"5px"},placeholder:"Name",value:v,onChange:function(e){return E(e.target.value)}}),r.a.createElement("textarea",{className:"form-control",row:"4",col:"50",placeholder:"Discription",value:w,onChange:function(e){return N(e.target.value)}}),r.a.createElement("button",{className:"btn btn-dark form-control",style:{marginTop:"3px"},onClick:function(){l(D,v,w,o)}},"Submit"))):null,u?r.a.createElement("div",{id:"add",style:{width:"100%",padding:"5px",border:"solid black 1px",backgroundColor:"blueviolet",color:"white"},onClick:function(){return h(!0)}},"ADD"):null,t.map((function(e){return r.a.createElement("div",{onClick:function(){O(!0),E(e.name),N(e.discription),I(e.name)}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"95%",padding:"5px",alignItems:"center"}},r.a.createElement("div",{style:{border:"solid blueviolet 1px",width:"25px",height:"25px",borderRadius:"15px"}}),r.a.createElement("span",{style:{fontSize:"16px",fontWeight:"50",marginLeft:"5px"}},e.name)),r.a.createElement("div",{style:{fontSize:"13px",fontWeight:"50",display:"flex",flexWrap:"wrap",flexDirection:"column",width:"95%",height:"auto",color:"purple",wordBreak:"break-all",marginLeft:"10px"}},e.discription))})))}var v=a(16),E=a(17),x=a(19),y=a(18),w=r.a.createContext(),N=function(e){Object(x.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={list:[[]],add:function(t,a,n){return e.addN(t,a,n)},update:function(t,a,n,r){return e.update(t,a,n,r)},newL:function(){return e.newlist()}},e.addN=function(t,a,n){var r=e.state.list;r[n].push({name:t,discription:a,id:n}),e.setState({list:r},(function(){return console.log(e.state.list)}))},e.newlist=function(){var t=e.state.list;t.push([]),e.setState({list:t})},e.update=function(t,a,n,r){var l=e.state.list,o=l[r].map((function(e){return e.name===t?{name:a,discription:n}:e}));l[r]=o,console.log(o),e.setState({list:l})},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(d.a.auth().currentUser){var t=d.a.auth().currentUser.uid;Object(u.firestore)().collection("Inter").doc(t).get().then((function(t){return t.forEach((function(t){return e.setState({list:t.data()})}))}))}}},{key:"render",value:function(){return r.a.createElement(w.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=w.Consumer;var j=function(e){var t=e.setlogged;return r.a.createElement(k,null,(function(e){var a=e.list,n=e.add,l=e.update,o=e.newL;return r.a.createElement("div",null,r.a.createElement(g,{setlogged:t}),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},a?a.map((function(e,t){return r.a.createElement(b,{tasks:e,addN:n,update:l,id:t})})):null),r.a.createElement("i",{style:{bottom:"15px",right:"15px",position:"fixed"},onClick:function(){o()},className:"fa fa-plus-circle fa-3x"}))}))};d.a.initializeApp({apiKey:"AIzaSyC7qIcfA0jbocN5vb8PAW_WMJ-XlSN-TYY",authDomain:"auth-866d7.firebaseapp.com",databaseURL:"https://auth-866d7.firebaseio.com",projectId:"auth-866d7",storageBucket:"auth-866d7.appspot.com",messagingSenderId:"777932976155",appId:"1:777932976155:web:23d38cba17d4c9b40708be",measurementId:"G-K4NBLF2TV9"}),d.a.analytics();var C=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],u=c[1],f=Object(n.useState)(!1),h=Object(i.a)(f,2),g=h[0],b=h[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){e&&b(!0)}))})),r.a.createElement(N,null,r.a.createElement("div",null,g?r.a.createElement(j,{setlogged:b}):r.a.createElement("div",null,r.a.createElement("style",null,"body{background:blueviolet;}"),a?r.a.createElement(m,{Slog:b}):null,s?r.a.createElement(p,{Slog:b}):null,!1===a&&!1===s?r.a.createElement("div",{className:"Contain"},r.a.createElement("button",{onClick:function(){return l(!0)},className:"button"},"Login"),r.a.createElement("button",{onClick:function(){return u(!0)},className:"button"},"SignUp")):r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("button",{className:"button",style:{},onClick:function(){l(!1),u(!1)}},"Back")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.33472872.chunk.js.map