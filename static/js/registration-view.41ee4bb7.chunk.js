(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{111:function(e,a,t){e.exports={formBox:"Registration_formBox__1cprU",formLabel:"Registration_formLabel__3hCjV",formSpan:"Registration_formSpan__p6ltK",formInput:"Registration_formInput__3iCPj",formBtn:"Registration_formBtn__1MmCV"}},115:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(4),r=t(35),o=t(36),i=t(38),c=t(37),l=t(11),m=t(10),p=t(111),h=t.n(p),b=t(2),j=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={name:"",email:"",password:""},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(s.a)({},n,r))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Registration page"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",className:h.a.formBox,children:[Object(b.jsxs)("label",{className:h.a.formLabel,children:[Object(b.jsx)("span",{className:h.a.formSpan,children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",value:a,onChange:this.handleChange,className:h.a.formInput})]}),Object(b.jsxs)("label",{className:h.a.formLabel,children:[Object(b.jsx)("span",{className:h.a.formSpan,children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange,className:h.a.formInput})]}),Object(b.jsxs)("label",{className:h.a.formLabel,children:[Object(b.jsx)("span",{className:h.a.formSpan,children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,className:h.a.formInput})]}),Object(b.jsx)("button",{type:"submit",className:h.a.formBtn,children:"Register"})]})]})}}]),t}(n.Component),u={onRegister:m.a.register},f=Object(l.b)(null,u)(j);a.default=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(f,{})})}}}]);
//# sourceMappingURL=registration-view.41ee4bb7.chunk.js.map