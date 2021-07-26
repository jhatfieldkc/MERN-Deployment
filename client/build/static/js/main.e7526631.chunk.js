(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),r=n.n(s),l=(n(25),n(26),n(2)),i=n(5),o=n(0),j=function(e){var t=e.pet;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("h3",{children:["Name: ",t.name]}),Object(o.jsxs)("h3",{children:["Type: ",t.type]}),Object(o.jsxs)("h3",{children:[Object(o.jsx)(l.a,{to:"/pet/".concat(t._id),children:Object(o.jsx)("button",{className:"btn btn-secondary",children:"details"})})," ","\xa0",Object(o.jsx)(l.a,{to:"/pet/update/".concat(t._id),children:Object(o.jsx)("button",{className:"btn btn-info",children:"edit"})})]})]})})},b=n(4),h=n.n(b),u=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){h.a.get("http://localhost:8000/api/pet").then((function(e){return s(e.data)})).catch((function(e){return console.log("Error",e)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Main page"}),a?a.map((function(e,t){return Object(o.jsx)(j,{pet:e},t)})):"",Object(o.jsx)(l.a,{to:"/pet/create",children:Object(o.jsx)("button",{className:"btn btn-success",children:"Add new pet"})})]})},d=n(6),O=n(8),p=function(e){var t=e.myForm,n=e.error,c=e.onChangeHandler,a=e.submitHandler;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{onSubmit:a,className:"container",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",name:"name",className:"form-control",value:t.name,onChange:c})," ",n.name?Object(o.jsx)("span",{className:"text-danger",children:n.name.message}):""," ",Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Type"}),Object(o.jsx)("input",{type:"text",name:"type",className:"form-control",value:t.type,onChange:c}),n.type?Object(o.jsx)("span",{className:"text-danger",children:n.type.message}):""," ",Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Description"}),Object(o.jsx)("input",{type:"text",name:"description",className:"form-control",value:t.description,onChange:c}),n.description?Object(o.jsx)("span",{className:"text-danger",children:n.description.message}):""," ",Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Skill 1:(opt)"}),Object(o.jsx)("input",{type:"text",name:"skillOne",className:"form-control",value:t.skillOne,onChange:c}),Object(o.jsx)("label",{children:"Skill 2:(opt)"}),Object(o.jsx)("input",{type:"text",name:"skillTwo",className:"form-control",value:t.skillTwo,onChange:c}),Object(o.jsx)("label",{children:"Skill 3:(opt)"}),Object(o.jsx)("input",{type:"text",name:"skillThree",className:"form-control",value:t.skillThree,onChange:c})]}),Object(o.jsx)("input",{type:"submit",value:"Add Pet",className:"btn btn-success"})]}),Object(o.jsx)("br",{}),Object(o.jsx)(l.a,{to:"/",children:"back to home"})]})},x=function(e){var t=Object(c.useState)({name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""}),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)({}),j=Object(i.a)(r,2),b=j[0],u=j[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p,{myForm:a,error:b,onChangeHandler:function(e){s(Object(O.a)(Object(O.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))},submitHandler:function(e){e.preventDefault(),h.a.post("http://localhost:8000/api/pet/create",a).then((function(e){e.data.error?u(e.data.error.errors):Object(l.c)("/")})).catch((function(e){return console.log(e)}))}})})},m=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){h.a.get("http://localhost:8000/api/pet/".concat(e._id)).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[e]),Object(o.jsx)(o.Fragment,{children:a?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h1",{children:["Details about: ",a.name]}),Object(o.jsx)("div",{className:"container text-left",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h4",{children:["Pet type: ",a.type]}),Object(o.jsxs)("h4",{children:["Description: ",a.description]}),Object(o.jsx)("h4",{children:"Skills:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:a.skillOne}),Object(o.jsx)("li",{children:a.skillTwo}),Object(o.jsx)("li",{children:a.skillThree})]})]})}),Object(o.jsxs)("button",{className:"btn btn-danger",onClick:function(){h.a.delete("http://localhost:8000/api/pet/delete/".concat(a._id)).then((function(){return Object(l.c)("/")})).catch((function(e){return console.log(e)}))},children:["Adopt ",a.name]})," ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)(l.a,{to:"/",children:"back to home"})]}):""})},f=function(e){var t=Object(c.useState)({}),n=Object(i.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){h.a.get("http://localhost:8000/api/pet/".concat(e._id)).then((function(e){return s(e.data)})).catch((function(e){return console.log("Something wrong while update",e)}))}),[]);var r=Object(c.useState)({}),j=Object(i.a)(r,2),b=j[0],u=j[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p,{myForm:a,error:b,onChangeHandler:function(e){s(Object(O.a)(Object(O.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))},submitHandler:function(t){t.preventDefault(),h.a.put("http://localhost:8000/api/pet/update/".concat(e._id),a).then((function(e){e.data.error?u(e.data.error.errors):Object(l.c)("/")})).catch((function(e){return console.log(e)}))}})})};n(52);var g=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Belt exam2!"}),Object(o.jsxs)(l.b,{children:[Object(o.jsx)(u,{path:"/"}),Object(o.jsx)(x,{path:"/pet/create"}),Object(o.jsx)(m,{path:"/pet/:_id"}),Object(o.jsx)(f,{path:"/pet/update/:_id"})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),v()}},[[53,1,2]]]);
//# sourceMappingURL=main.e7526631.chunk.js.map