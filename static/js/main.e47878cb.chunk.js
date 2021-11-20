(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(e,t,n){},15:function(e,t,n){e.exports={form:"Form_form__2K8QP"}},16:function(e,t,n){e.exports={submitBtn:"Button_submitBtn__3ZqGn"}},18:function(e,t,n){e.exports={h1:"SectionH1_h1__3EExo"}},19:function(e,t,n){e.exports={contact:"Contacts_contact__l_NgR"}},20:function(e,t,n){e.exports={h2:"SectionH2_h2__2W9ug"}},29:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),o=n(7),i=n.n(o),s=n(4),u=n(5),b=n(14),j=n.n(b),l=n(9),d=n(22),O=n(2),h=Object(s.b)("contacts/addContact"),m=Object(s.b)("contacts/deleteContact"),f=Object(s.b)("contacts/filterContacts"),x=Object(s.c)([],(c={},Object(l.a)(c,h,(function(e,t){return[].concat(Object(d.a)(e),[t.payload])})),Object(l.a)(c,m,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),c)),p=Object(s.c)("",Object(l.a)({},f,(function(e,t){return t.payload}))),v=Object(O.b)({contacts:x,filter:p}),C={key:"root",storage:j.a},g=Object(u.g)(C,v),_=Object(s.a)({reducer:g,devtools:!0,middleware:Object(s.d)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})}),y={store:_,persistor:Object(u.h)(_)},k=(n(29),n(30),n(13)),N=n(40),w=n(15),A=n.n(w),B=n(16),S=n.n(B),z=n(0);function F(e){var t=e.type,n=e.text;return Object(z.jsx)("button",{className:S.a.submitBtn,type:t,children:n})}var L=n(11),Z=n.n(L);function q(e){var t=e.value,n=e.onChange;return Object(z.jsxs)("label",{className:Z.a.nameLabel,children:["Name",Object(z.jsx)("input",{className:Z.a.inputField,onChange:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t})]})}function E(e){var t=e.value,n=e.onChange;return Object(z.jsxs)("label",{className:"nameLabel",children:["Number",Object(z.jsx)("input",{onChange:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:t})]})}var J=n(3);function D(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(k.a)(r,2),i=o[0],s=o[1],u=Object(J.b)(),b=function(){c(""),s("")},j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":s(a);break;default:return}};return Object(z.jsxs)("form",{className:A.a.form,name:"addContact",onSubmit:function(e){e.preventDefault(),u(h({name:n,number:i,id:Object(N.a)()})),b()},children:[Object(z.jsx)(q,{value:n,onChange:j,name:"name"}),Object(z.jsx)(E,{value:i,onChange:j,name:"number"}),Object(z.jsx)(F,{type:"submit",text:"Add contact"})]})}var H=n(18),M=n.n(H);function P(e){var t=e.title,n=e.children;return Object(z.jsxs)("section",{children:[Object(z.jsx)("h1",{className:M.a.h1,children:t}),Object(z.jsx)("div",{children:n})]})}var G=n(19),I=n.n(G);function K(e){var t=e.type,n=e.text,c=e.id,a=e.onClick;return Object(z.jsx)("button",{type:t,onClick:function(){return a(c)},children:n})}var Q=function(e){return e.filter},R=function(e){var t=e.contacts,n=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(n.trim().toLowerCase())}))};function W(){var e=Object(J.c)(R),t=Object(J.b)();return Object(z.jsx)("ul",{children:e.map((function(e){return Object(z.jsxs)("li",{className:I.a.contact,children:[e.name,": ",e.number," ",Object(z.jsx)(K,{type:"button",text:"Delete",id:e.id,onClick:function(){t(m(e.id))}})]},e.id)}))})}var $=n(20),T=n.n($);function U(e){var t=e.title,n=e.children;return Object(z.jsxs)("section",{children:[Object(z.jsx)("h2",{className:T.a.h2,children:t}),Object(z.jsx)("div",{children:n})]})}function V(){var e=Object(J.b)(),t=Object(J.c)(Q);return Object(z.jsxs)("label",{children:["Find contacts by name",Object(z.jsx)("input",{name:"filter",type:"text",onChange:function(t){e(f(t.target.value))},value:t})]})}function X(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(P,{title:"Phonebook",children:Object(z.jsx)(D,{})}),Object(z.jsxs)(U,{title:"Contacts",children:[Object(z.jsx)(V,{}),Object(z.jsx)(W,{})]})]})}var Y=n(21);i.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(J.a,{store:y.store,children:Object(z.jsx)(Y.a,{loading:null,persistor:y.persistor,children:Object(z.jsx)(X,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e47878cb.chunk.js.map