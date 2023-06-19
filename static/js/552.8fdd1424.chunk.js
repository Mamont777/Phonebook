"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[552],{4552:function(n,e,t){t.r(e),t.d(e,{default:function(){return Hn}});var r,o,i,a,s,x,p,c=t(5206),d=t(9434),l=t(2791),u=t(3634),b=t(3433),g=t(6916),f=function(n){return n.filter},h=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},v=function(n){return n.contacts.showModal},Z=function(n){return n.contacts.deleteId},w=function(n){return n.contacts.items},j=((0,g.P1)(w,(function(n){(0,b.Z)(n.items).sort((function(n,e){return n.name.localeCompare(e.name)}))})),(0,g.P1)([w,f],(function(n,e){return n?n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())})):[]}))),y=t(5861),k=t(9439),P=t(4687),z=t.n(P),C=t(7425),I=t(4373),S=t(9126),q=t(5984),O=(t(5462),t(6727)),A=t(168),E=t(7691),_=E.ZP.div(r||(r=(0,A.Z)(["\n  position: relative;\n  width: 400px;\n  margin: 30px auto;\n  font-weight: 700;\n  font-size: 20px;\n  background-color: beige;\n  text-align: center;\n  border-radius: 20px;\n  box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);\n  text-shadow: -1px 4px 4px rgba(0, 0, 0, 0.6);\n\n  h1,\n  h2 {\n    text-align: center;\n    text-shadow: -1px 4px 4px rgba(0, 0, 0, 0.6);\n  }\n"]))),L=E.ZP.form(o||(o=(0,A.Z)(["\n  padding-bottom: 15px;\n  border-radius: 5px;\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),N=E.ZP.label(i||(i=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0 25px 0;\n  padding-top: 15px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),R=E.ZP.input(a||(a=(0,A.Z)(["\n  display: flex;\n  margin: 5px 10px 20px 10px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 4px 4px 16px 2px rgba(166, 179, 28, 0.62) inset;\n  -webkit-box-shadow: 4px 4px 16px 2px rgba(166, 179, 28, 0.62) inset;\n  -moz-box-shadow: 4px 4px 16px 2px rgba(166, 179, 28, 0.62) inset;\n  box-sizing: border-box;\n"]))),$=E.ZP.button(s||(s=(0,A.Z)(["\n  margin-bottom: 15px;\n  background-color: #c2fbd7;\n  border-radius: 100px;\n  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;\n  color: green;\n  cursor: pointer;\n  display: inline-block;\n  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;\n  padding: 7px 20px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 250ms;\n  border: 0;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  &:hover {\n    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;\n    transform: scale(1.05) rotate(-1deg);\n  }\n\n  &:active {\n    background: rgb(33, 147, 90);\n    box-shadow: 0 3px rgb(33, 147, 90) inset;\n  }\n"]))),M=E.ZP.div(x||(x=(0,A.Z)(["\n  margin-right: 8px;\n"]))),T=E.ZP.div(p||(p=(0,A.Z)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n"])),(function(n){return n.top}),(function(n){return n.left})),X=t(3329),F={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},G=O.Ry().shape({name:O.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces").required("Name is required"),number:O.Z_().matches(/^\+\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Invalid phone number. The number must start with a plus sign and contain valid digits and separators").required("Number is required")});var K,B,D,H,V,J,Q,U,W,Y,nn=function(){var n=(0,d.I0)(),e=(0,d.v9)(w),t=(0,l.useState)(""),r=(0,k.Z)(t,2),o=r[0],i=r[1],a=(0,l.useState)(""),s=(0,k.Z)(a,2),x=s[0],p=s[1],b=(0,l.useState)({}),g=(0,k.Z)(b,2),f=g[0],h=g[1],m=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":p(r)}},v=function(t){e.find((function(n){return n.name===t.name}))?c.Am.error("".concat(t.name," is already in contacts"),F):(n((0,u.uK)(t)),h({}))},Z=function(){var n=(0,y.Z)(z().mark((function n(e){var t,r;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,G.validate({name:o,number:x},{abortEarly:!1});case 4:t={id:(0,q.x0)(10),name:o,number:x},v(t),j(),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),n.t0 instanceof O.p8&&(r={},n.t0.inner.forEach((function(n){r[n.path]=n.message})),h(r)),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),j=function(){i(""),p("")};return(0,X.jsxs)(_,{children:[(0,X.jsxs)(L,{onSubmit:Z,validationSchema:G,children:[(0,X.jsxs)(N,{children:[(0,X.jsx)(T,{top:"18px",left:"152px",children:(0,X.jsx)(I.M0G,{size:"16"})}),"Name",(0,X.jsx)(R,{type:"text",name:"name",required:!0,value:o,onChange:m})]}),(0,X.jsxs)(N,{children:[(0,X.jsx)(T,{top:"143px",left:"140px",children:(0,X.jsx)(S.lfG,{size:"16"})}),"Number",(0,X.jsx)(R,{type:"tel",name:"number",required:!0,value:x,onChange:m})]}),(0,X.jsxs)($,{type:"submit",children:[(0,X.jsx)(M,{children:(0,X.jsx)(C.zOC,{size:"16"})}),"Add contact"]})]}),Object.keys(f).length>0&&(0,X.jsx)("div",{children:Object.values(f).map((function(n,e){return(0,X.jsx)("div",{children:n},e)}))}),(0,X.jsx)(c.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})]})},en=t(4808),tn=t(3728),rn=E.ZP.label(K||(K=(0,A.Z)(["\n  position: relative;\n  align-items: center;\n  text-shadow: -1px 4px 4px rgba(0, 0, 0, 0.6);\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0 25px 0;\n  padding-top: 15px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),on=(0,E.ZP)(tn.Vph)(B||(B=(0,A.Z)(["\n  position: absolute;\n  margin-right: 220px;\n  bottom: 58px;\n"]))),an=E.ZP.input(D||(D=(0,A.Z)(["\n  margin: 20px auto 0 auto;\n  width: 350px;\n  padding: 8px 16px;\n  border: 0px;\n  border-radius: 8px;\n  box-shadow: rgb(139, 167, 147) 1px 1px 3px inset,\n    rgb(255, 255, 255) -1px -1px 5px inset;\n  font-style: italic;\n"]))),sn=function(){var n=(0,d.I0)(),e=(0,d.v9)(f);return(0,X.jsxs)(rn,{children:[(0,X.jsx)(on,{size:"18"}),"Find contacts by name",(0,X.jsx)(an,{type:"text",value:e,onChange:function(e){n((0,en.x)(e.currentTarget.value))},placeholder:"search"})]})},xn=t(1538),pn=t(6036),cn=E.ZP.li(H||(H=(0,A.Z)(["\n  margin: 10px;\n  padding: 5px;\n  justify-content: space-between;\n"]))),dn=E.ZP.div(V||(V=(0,A.Z)(["\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 17px;\n"]))),ln=E.ZP.span(J||(J=(0,A.Z)(["\n  flex-grow: 1;\n  margin-right: 10px;\n"]))),un=E.ZP.button(Q||(Q=(0,A.Z)(["\n  background-color: #c2fbd7;\n  border-radius: 100px;\n  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;\n  color: green;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;\n  padding: 7px 20px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 250ms;\n  border: 0;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  &:hover {\n    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;\n    transform: scale(1.05) rotate(-1deg);\n  }\n\n  &:active {\n    background: rgb(33, 147, 90);\n    box-shadow: 0 3px rgb(33, 147, 90) inset;\n  }\n"]))),bn=(0,E.ZP)(pn._LP)(U||(U=(0,A.Z)(["\n  margin-left: 5px;\n"]))),gn=E.ZP.div(W||(W=(0,A.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 22px;\n  text-shadow: 0 0 1px #000000;\n"]))),fn=function(n){var e=n.id,t=n.name,r=n.number,o=n.randomColor,i=(0,d.I0)(),a=function(){return i((0,xn.$)(e))};return(0,X.jsx)(cn,{children:(0,X.jsxs)(dn,{children:[(0,X.jsx)(gn,{style:{background:"".concat(o)},children:t[0]}),(0,X.jsxs)(ln,{children:[t,": ",r]}),(0,X.jsxs)(un,{type:"button",onClick:function(){return i(a)},children:["Delete ",(0,X.jsx)(bn,{size:"16"})]})]})})},hn=E.ZP.ul(Y||(Y=(0,A.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 30px auto;\n  width: 400px;\n  font-weight: 600;\n  font-size: 20px;\n  background-color: beige;\n  text-align: center;\n  border-radius: 20px;\n  box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);\n  text-shadow: -1px 4px 4px rgba(0, 0, 0, 0.6);\n"])));var mn,vn,Zn,wn,jn,yn,kn,Pn,zn,Cn,In,Sn,qn=function(){var n=(0,d.v9)(j);return(0,X.jsx)(hn,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number,o="#".concat(Math.floor(16777215*Math.random()).toString(16));return(0,X.jsx)(fn,{id:e,name:t,number:r,randomColor:o},e)}))})},On=t(4164),An=E.ZP.div(mn||(mn=(0,A.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1200;\n"]))),En=E.ZP.div(vn||(vn=(0,A.Z)(["\n  background-color: lightcyan;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: -1px -5px 7px 10px rgb(0 0 0 / 21%);\n"]))),_n=document.querySelector("#modal-root"),Ln=function(n){var e=n.children,t=(0,d.I0)(),r=(0,d.v9)(v),o=(0,l.useCallback)((function(){t((0,xn.$)())}),[t]);return(0,l.useEffect)((function(){var n=function(n){"Escape"===n.code&&o()};return r&&window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r,o]),r?(0,On.createPortal)((0,X.jsx)(An,{children:(0,X.jsxs)(En,{children:[e," "]})}),_n):null},Nn=E.ZP.div(Zn||(Zn=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Rn=E.ZP.div(wn||(wn=(0,A.Z)(["\n  width: 250px;\n  height: 100px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  box-shadow: 0px 1px 7px 6px rgba(0, 0, 0, 0.12),\n    0px 4px 3px 3px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);\n  background-color: #dbdbdb;\n"]))),$n=E.ZP.div(jn||(jn=(0,A.Z)(["\n  text-align: center;\n  font-weight: bold;\n"]))),Mn=E.ZP.div(yn||(yn=(0,A.Z)(["\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n"]))),Tn=E.ZP.button(kn||(kn=(0,A.Z)(["\n  margin-right: 10px;\n  background-color: #4caf50;\n  color: #fff;\n"]))),Xn=E.ZP.button(Pn||(Pn=(0,A.Z)(["\n  background-color: #f44336;\n  color: #fff;\n"]))),Fn=function(n){var e=n.id,t=(0,d.I0)();return(0,X.jsx)(Nn,{children:(0,X.jsxs)(Rn,{children:[(0,X.jsx)($n,{children:"Are you sure you want to delete this contact?"}),(0,X.jsxs)(Mn,{children:[(0,X.jsx)(Tn,{type:"button",onClick:function(){t((0,u.GK)(e)),t((0,xn.$)(e))},children:"OK"}),(0,X.jsx)(Xn,{type:"button",onClick:function(){t((0,xn.$)(e))},children:"No"})]})]})})},Gn=(0,E.F4)(zn||(zn=(0,A.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n"]))),Kn=E.ZP.div(Cn||(Cn=(0,A.Z)(["\n  text-align: center;\n"]))),Bn=E.ZP.h1(In||(In=(0,A.Z)(["\n  text-align: center;\n  margin-top: 10px;\n  animation: "," 0.5s ease-in-out forwards;\n  transform: translateX(-100%);\n"])),Gn),Dn=E.ZP.div(Sn||(Sn=(0,A.Z)(["\n  animation: "," 0.5s ease-in-out forwards;\n  transform: translateX(-100%);\n"])),Gn),Hn=function(){var n=(0,d.I0)(),e=(0,d.v9)(h),t=(0,d.v9)(m),r=(0,d.v9)(v),o=(0,d.v9)(Z);return(0,l.useEffect)((function(){n((0,u.yF)())}),[n]),(0,X.jsxs)(Kn,{children:[(0,X.jsx)(Bn,{children:"Phonebook"}),(0,X.jsxs)(Dn,{children:[(0,X.jsx)(nn,{}),(0,X.jsx)(Bn,{children:"Contacts"}),(0,X.jsx)(sn,{}),(0,X.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"10px"}}),e&&!t&&(0,X.jsx)("b",{style:{textAlign:"center"},children:"Request in progress..."}),(0,X.jsx)(qn,{}),r&&(0,X.jsx)(Ln,{children:(0,X.jsx)(Fn,{id:o})}),(0,X.jsx)(c.Ix,{})]})]})}}}]);
//# sourceMappingURL=552.8fdd1424.chunk.js.map