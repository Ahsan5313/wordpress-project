"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[3523],{23523:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(87462),s=a(12902),n=a(67294),i=a(5977),r=a(73727),o=a(2804),m=a(54017),c=a(41238),u=a(35637),d=a(80410),p=a(38762),h=a(93429),b=a(85893);const f=function(){var e=(0,n.useState)({title:"New Template",sub:"Email Subject",body:"Email Body"}),t=e[0],a=e[1],f=(0,o.FV)(m.u),x=f[0],j=f[1],v=(0,o.sJ)(m.uJ),y=(0,n.useState)(!1),_=y[0],N=y[1],g=(0,i.UO)(),w=g.formType,C=g.formID,k=(0,i.k6)(),T=(0,o.sJ)(m.hi).isPro,S=function(e){var t=e.target,s=t.name,n=t.value;a((function(e){var t;return(0,l.Z)({},e,((t={})[s]=n,t))}))};return(0,b.jsxs)("div",{style:{width:900},children:[(0,b.jsx)(p.Z,{show:_,setModal:N,title:(0,u.__)("Browse Template","bitform"),children:(0,b.jsx)("h4",{className:"txt-dp",children:(0,u.__)("Email Templates Coming soon","bitform")})}),(0,b.jsxs)(r.OL,{to:"/form/settings/"+w+"/"+C+"/email-templates",className:"btn btcd-btn-o-gray",children:[(0,b.jsx)(c.Z,{className:"mr-1"}),(0,u.__)("Back","bitfrom")]}),(0,b.jsx)("button",{id:"secondary-update-btn",onClick:function(){var e=(0,s.ZP)(x,(function(e){e.push(t),e.push({updateTem:1})}));j(e),k.push("/form/settings/"+w+"/"+C+"/email-templates")},className:"btn blue f-right",type:"button",children:(0,u.__)("Save Template","bitform")}),(0,b.jsxs)("div",{className:"mt-3 flx",children:[(0,b.jsxs)("b",{style:{width:103},children:[(0,u.__)("Template Name:","bitform")," "]}),(0,b.jsx)("input",{onChange:S,name:"title",type:"text",className:"btcd-paper-inp w-9",placeholder:"Name",value:t.title})]}),(0,b.jsxs)("div",{className:"mt-3 flx",children:[(0,b.jsx)("b",{style:{width:100},children:"Subject:"}),(0,b.jsx)("input",{onChange:S,name:"sub",type:"text",className:"btcd-paper-inp w-7",placeholder:"Email Subject Here",value:t.sub}),(0,b.jsxs)("select",{onChange:function(e){var t=e.target.value;a((function(e){return(0,l.Z)({},e,{sub:e.sub+t})})),setTimeout((function(){t=""}),100)},className:"btcd-paper-inp ml-2",style:{width:150},children:[(0,b.jsx)("option",{value:"",children:(0,u.__)("Add field","bitform")}),(0,b.jsx)("optgroup",{label:"Form Fields",children:null!==v&&v.map((function(e){return!e.type.match(/^(file-up|recaptcha)$/)&&(0,b.jsx)("option",{value:"${"+e.key+"}",children:e.name},e.key)}))}),(0,b.jsx)("optgroup",{label:"General Smart Codes "+(T?"":"(PRO)"),children:T&&(null==d.C?void 0:d.C.map((function(e){return(0,b.jsx)("option",{value:"${"+e.name+"}",children:e.label},"ff-rm-"+e.name)})))})]})]}),(0,b.jsxs)("div",{className:"mt-3",children:[(0,b.jsx)("b",{children:(0,u.__)("Body:","bitform")}),(0,b.jsx)("label",{htmlFor:"mail-tem-"+C,className:"mt-2 w-10",children:(0,b.jsx)(h.Z,{id:"mail-tem-"+C,formFields:v,value:t.body,onChangeHandler:function(e){a((function(t){return(0,s.ZP)(t,(function(t){t.body=e}))}))},width:"100%"})})]})]})}}}]);