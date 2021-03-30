(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{24:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),u=n(9),l=n(3),i=n(8),s=n.n(i),m=n(11),d="All",f="Active",p="Completed",b="https://mate-api.herokuapp.com",E=function(e,t){return fetch("".concat(b).concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},v=function(e,t){return fetch("".concat(b).concat(e),t)},h=function(e,t){return E(e,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})},j=function(e,t){return E(e,{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})},O=function(e){return h("/todos",{userId:1178,title:e,completed:!1})},g=function(e){return t="/todos/".concat(e),E(t,{method:"DELETE"});var t},C=function(e){var t=e.map((function(e){return t="/todos/".concat(e.id),v(t,{method:"DELETE"});var t}));Promise.all(t).then((function(e){return Promise.all(e.map((function(e){return e.json()})))}))},k=function(e,t){switch(Object.keys(t)[0]){case"title":return j("/todos/".concat(e),{title:t.title});case"completed":return j("/todos/".concat(e),{completed:t.completed})}},y=function(e){var t=e.map((function(e){return t="/todos/".concat(e.id),n={completed:e.completed},v(t,{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)});var t,n}));Promise.all(t).then((function(e){return Promise.all(e.map((function(e){return e.json()})))}))},N=r.a.createContext({isLoadingError:!1,setLoadingError:function(){}}),x=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(l.a)(n,2),o=c[0],u=c[1],i=Object(a.useMemo)((function(){return{isLoadingError:o,setLoadingError:u}}),[o]);return r.a.createElement(N.Provider,{value:i},t)},T=r.a.createContext({todos:[],setTodos:function(){}}),w=function(e){var t=e.children,n=function(e){var t=Object(a.useState)(e),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useContext)(N).setLoadingError,u=function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!1),e.prev=1,e.next=4,E("/todos");case 4:t=e.sent,n=t.filter((function(e){return 1178===e.userId})),c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),[r,function(e){c(e)}]}([]),c=Object(l.a)(n,2),o=c[0],u=c[1],i=Object(a.useMemo)((function(){return{todos:o,setTodos:u}}),[o]);return r.a.createElement(T.Provider,{value:i},t)},S=(n(30),n(31),n(32),n(7)),P=n(23),L=r.a.memo((function(e){var t=e.userName,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],u=c[1],i=Object(a.useState)(!1),d=Object(l.a)(i,2),f=d[0],p=d[1],b=Object(a.useContext)(T).setTodos,E=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!1),e.prev=1,e.next=4,O(t.title);case 4:n=e.sent,b((function(e){return[].concat(Object(P.a)(e),[Object(S.a)(Object(S.a)({},t),{},{id:n.id})])})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),p(!0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"todos"),t&&r.a.createElement("span",{className:"signature"},t),f&&r.a.createElement("span",{className:"posted"},"Error! Todo is not posted!"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:function(e){p(!1),u(e.target.value)},onKeyDown:function(e){if("Enter"===e.key){if(e.preventDefault(),!o.trim())return;E({id:+new Date,title:o,completed:!1}),u("")}}})))}));L.defaultProps={userName:""};var D=function(){return r.a.createElement("p",null,"Server Error")},F=n(15),M=n.n(F),J=r.a.memo((function(){var e=Object(a.useContext)(T),t=e.todos,n=e.setTodos,c=Object(a.useMemo)((function(){return function(e){return!!e.length&&e.every((function(e){return e.completed}))}(t)}),[t]),o=Object(a.useCallback)((function(e){var a=t.map((function(t){return Object(S.a)(Object(S.a)({},t),{},{completed:!e})}));n(a),y(a)}),[t,n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",id:"toggle-all",className:M()("toggle-all"),checked:c,onChange:function(){return o(c)}}),r.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))})),A=n(1),I=r.a.memo((function(e){var t=e.id,n=e.title,c=e.completed,o=e.onCompletedTodos,u=e.onRemoveTodo,i=e.onTitleChange,s=Object(a.useState)(!1),m=Object(l.a)(s,2),d=m[0],f=m[1],p=Object(a.useState)(n),b=Object(l.a)(p,2),E=b[0],v=b[1],h=Object(a.useCallback)((function(e){switch(e.key){case"Enter":var n=e.target.value;i(n,t),k(t,{title:n}),f(!1);break;case"Escape":f(!1)}}),[d]);return r.a.createElement("li",{key:t,className:M()({completed:c,editing:d}),onDoubleClick:function(){return f((function(e){return!e}))},onBlur:function(e){return function(e){var n=e.value;i(n,t),k(t,{title:n}),f(!1)}(e.target)}},r.a.createElement("div",{className:"view"},r.a.createElement("input",{type:"checkbox",className:"toggle",checked:c,onChange:function(e){return o(e,t)}}),r.a.createElement("label",null,n),r.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return u(t)}})),r.a.createElement("input",{type:"text",className:"edit",value:E,onChange:function(e){return v(e.target.value)},onKeyDown:function(e){return h(e)}}))})),U=function(){var e=Object(A.d)().pathname,t=Object(a.useContext)(T),n=t.todos,c=t.setTodos,o=Object(a.useCallback)((function(e,t){var a=e.target.checked,r=n.map((function(e){return e.id!==t?e:Object(S.a)(Object(S.a)({},e),{},{completed:a})}));c(r),k(t,{completed:a})}),[n,c]),u=Object(a.useCallback)((function(e){var t=n.filter((function(t){return t.id!==e}));c(t),g(e)}),[n,c]),l=Object(a.useMemo)((function(){switch(e){case"/":return n;case"/completed":return n.filter((function(e){return e.completed}));case"/active":return n.filter((function(e){return!e.completed}));default:return n}}),[n,e]),i=function(e,t){if(e){var a=n.map((function(n){return n.id!==t?n:Object(S.a)(Object(S.a)({},n),{},{title:e})}));c(a)}};return n.length?r.a.createElement("ul",{className:"todo-list"},l.map((function(e){var t=e.id,n=e.title,a=e.completed;return r.a.createElement(I,{key:t,id:t,title:n,completed:a,onCompletedTodos:o,onRemoveTodo:u,onTitleChange:i})}))):null},B=r.a.memo((function(){var e=Object(a.useContext)(T),t=e.todos,n=e.setTodos,c=Object(a.useMemo)((function(){return function(e){return e.length?e.filter((function(e){return!1===e.completed})).length:0}(t)}),[t]);return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"todo-count"},"".concat(c," items left")),r.a.createElement("ul",{className:"filters"},r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:"selected",to:"/active"},f)),r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:"selected",to:"/completed"},p)),r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:"selected",to:"/",exact:!0},d))),r.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){var e=t.filter((function(e){return!e.completed})),a=t.filter((function(e){return e.completed}));n(e),C(a)}},"Clear completed"))})),H=function(){var e=Object(a.useContext)(T).todos,t=Object(a.useContext)(N).isLoadingError,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],u=c[1],i=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/users/".concat(1178));case 2:t=e.sent,u(t.name);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),r.a.createElement("section",{className:"todoapp"},r.a.createElement(L,{userName:o}),t?r.a.createElement(D,null):e.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"main"},r.a.createElement(J,null),r.a.createElement(U,null)),r.a.createElement(B,null)))};o.a.render(r.a.createElement(u.a,null,r.a.createElement(x,null,r.a.createElement(w,null,r.a.createElement(H,null)))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6baa97c1.chunk.js.map