"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[1194],{11194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(87462),s=a(67294),i=(a(78774),a(5977)),l=a(80160),n=a(35637),d=a(35001),c=a(33231),m=a(14383),o=a(85813),b=a(52315),u=a(16670),x=a(96288),p=a(85893);const f=function(e){var t=e.formFields,a=e.setIntegration,f=e.integrations,h=e.allIntegURL,v=(0,i.k6)(),j=(0,s.useState)(!1),g=j[0],k=j[1],y=(0,s.useState)(1),_=y[0],N=y[1],w=(0,s.useState)({show:!1}),q=w[0],C=w[1],Z=(0,s.useState)({name:"Rapidmail",type:"Rapidmail",username:"",password:"",field_map:[{formField:"",rapidmailFormField:""}],recipientsFields:[{key:"email",label:"Email",required:!0},{key:"firstname",label:"First name",required:!1},{key:"lastname",label:"Last name",required:!1},{key:"gender",label:"Gender",required:!1},{key:"title",label:"Title",required:!1},{key:"zip",label:"Zip",required:!1},{key:"birthdate",label:"Birthdate",required:!1},{key:"extra1",label:"Extra field 1",required:!1},{key:"extra2",label:"Extra field 2",required:!1},{key:"extra3",label:"Extra field 3",required:!1},{key:"extra4",label:"Extra field 4",required:!1},{key:"extra5",label:"Extra field 5",required:!1},{key:"extra6",label:"Extra field 6",required:!1},{key:"extra7",label:"Extra field 7",required:!1},{key:"extra8",label:"Extra field 8",required:!1},{key:"extra9",label:"Extra field 9",required:!1},{key:"extra10",label:"Extra field 10",required:!1}],actions:{}}),S=Z[0],E=Z[1];return document.querySelector(".btcd-s-wrp").scrollTop=0,(0,p.jsxs)("div",{children:[(0,p.jsx)(d.Z,{snack:q,setSnackbar:C}),(0,p.jsx)("div",{className:"txt-center w-9 mt-2",children:(0,p.jsx)(c.Z,{step:3,active:_})}),(0,p.jsx)(b.default,{rapidmailConf:S,setRapidmailConf:E,step:_,setstep:N,isLoading:g,setIsLoading:k,setSnackbar:C}),(0,p.jsxs)("div",{className:"btcd-stp-page",style:(0,r.Z)({},2===_&&{width:900,height:"auto",overflow:"visible"}),children:[(0,p.jsx)(x.Z,{formFields:t,handleInput:function(e){return(0,u.Rx)(e,S,E,k,C)},rapidmailConf:S,setRapidmailConf:E,isLoading:g,setIsLoading:k,setSnackbar:C}),(0,p.jsxs)("button",{onClick:function(){return e=3,void((0,u.Pd)(S)?S.field_map.length>0&&N(e):l.ZP.error("Please map mandatory fields"));var e},disabled:!(null!=S&&S.recipient_id),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,n.__)("Next","bitform")," "," ",(0,p.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(0,p.jsx)(o.Z,{step:_,saveConfig:function(){(0,m.Mm)(f,a,h,S,v)}})]})}},52315:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(87462),s=a(67294),i=a(35637),l=a(75257),n=a(41238),d=a(16670),c=a(85893);function m(e){var t=e.rapidmailConf,a=e.setRapidmailConf,m=e.step,o=e.setstep,b=e.isLoading,u=e.setIsLoading,x=e.setSnackbar,p=e.isInfo,f=(0,s.useState)(!1),h=f[0],v=f[1],j=(0,s.useState)({username:"",password:""}),g=j[0],k=j[1],y=function(e){var s=(0,r.Z)({},t),i=(0,r.Z)({},g);i[e.target.name]="",s[e.target.name]=e.target.value,k(i),a(s)};return(0,c.jsxs)("div",{className:"btcd-stp-page",style:(0,r.Z)({},{width:1===m&&900},{height:1===m&&"100%"}),children:[(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("b",{children:(0,i.__)("Integration Name:","bitform")})}),(0,c.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:null==t?void 0:t.name,type:"text",placeholder:(0,i.__)("Integration Name...","bitform"),disabled:p}),(0,c.jsxs)("small",{className:"d-blk mt-5",children:[(0,i.__)("To get Username and Password , Please Visit","bitform")," ",(0,c.jsx)("a",{className:"btcd-link",href:"https://my.rapidmail.com/api/v3/userlist.html#/",target:"_blank",rel:"noreferrer",children:(0,i.__)("Create API User","bitform")})]}),(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("b",{children:(0,i.__)("User Name:","bitform")})}),(0,c.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"username",value:null==t?void 0:t.username,type:"text",placeholder:(0,i.__)("User name...","bitform"),disabled:p}),(0,c.jsx)("div",{style:{color:"red"},children:g.username}),(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("b",{children:(0,i.__)("Password:","bitform")})}),(0,c.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"password",value:null==t?void 0:t.password,type:"text",placeholder:(0,i.__)("Password...","bitform"),disabled:p}),(0,c.jsx)("div",{style:{color:"red"},children:g.password}),!p&&(0,c.jsxs)("div",{children:[(0,c.jsxs)("button",{onClick:function(){return(0,d.P_)(t,a,k,v,u,x)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:h||b,children:[h?(0,i.__)("Authorized ✔","bitform"):(0,i.__)("Authorize","bitform"),b&&(0,c.jsx)(l.Z,{size:"20",clr:"#022217",className:"ml-2"})]}),(0,c.jsx)("br",{}),(0,c.jsxs)("button",{onClick:function(){(null==t||!t.default)&&(0,d.YG)(t,a,u,x),o(2),document.querySelector(".btcd-s-wrp").scrollTop=0},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!h,children:[(0,i.__)("Next","bitform"),(0,c.jsx)(n.Z,{className:"ml-1 rev-icn"})]})]})]})}},33231:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),s=a(85893);const i=function(e){var t=e.step,a=e.active,i=e.className;return(0,s.jsx)("div",{className:"d-in-b "+i,children:(0,s.jsxs)("div",{className:"flx flx-center",children:[Array(a).fill(0).map((function(e,t){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),a-1!==t&&(0,s.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-a!==0&&(0,s.jsx)("div",{className:"btcd-stp-line"}),Array(t-a).fill(0).map((function(e,i){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:i+a+1}),t-a-1!==i&&(0,s.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(i+23))}))]})})}}}]);