(this["webpackJsonpintugine-assignment"]=this["webpackJsonpintugine-assignment"]||[]).push([[4],{81:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return a}))},82:function(e,n,t){e.exports={login:"login_login__3ui9-",Input:"login_Input__IWHAu",InputElement:"login_InputElement__31NI6",ErrorMessage:"login_ErrorMessage__3-rsf"}},89:function(e,n,t){"use strict";t.r(n);var a=t(8),l=t(9),r=t(11),i=t(10),u=t(12),c=t(0),o=t.n(c),s=t(81),m=t(82),p=t.n(m),g=t(29),b=t(15),h=function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(u)))).state={name:null,email:null},t.handleOnChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.onSubmitHandler=function(e){e.preventDefault();var n=t.state,a=n.name,l=n.email;t.props.login(a,l)},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:p.a.login},o.a.createElement("h1",null,"Login"),o.a.createElement("form",{onSubmit:this.onSubmitHandler},o.a.createElement("div",{className:p.a.Input},o.a.createElement("input",{type:"text",name:"name",onChange:this.handleOnChange,className:p.a.InputElement,placeholder:"Name",required:!0})),o.a.createElement("div",{className:p.a.Input},o.a.createElement("input",{type:"email",name:"email",onChange:this.handleOnChange,className:p.a.InputElement,placeholder:"Email address",required:!0})),o.a.createElement("button",{className:p.a.example_b},"login")))}}]),n}(c.Component),f=Object(b.b)(null,(function(e){return{login:function(n,t){return e(g.b(n,t))}}}))(h),d=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null))}}]),n}(c.Component);n.default=d}}]);
//# sourceMappingURL=4.d57e17be.chunk.js.map