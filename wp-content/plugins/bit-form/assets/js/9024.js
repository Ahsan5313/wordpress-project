"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[9024,5186],{14383:(e,t,a)=>{a.d(t,{FP:()=>i,Mm:()=>l,T5:()=>r,WK:()=>n,mG:()=>d,wX:()=>c});var s=a(87462),l=(a(35637),a(39492),function(e,t,a,l,n,i,r){var c=[].concat(e);if(r)c[i]=(0,s.Z)({},e[i],l),c.push({editItegration:!0}),t([].concat(c)),n.push(a);else{var d=[].concat(c);d.push(l),d.push({newItegration:!0}),t(d),n.push(a)}}),n=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},i=function(e,t,a,l,n){var i=(0,s.Z)({},t);n?l?i.relatedlists[n-1].upload_field_map.splice(e,0,{}):i.relatedlists[n-1].field_map.splice(e,0,{}):l?i.upload_field_map.splice(e,0,{}):i.field_map.splice(e,0,{}),a((0,s.Z)({},i))},r=function(e,t,a,l,n){var i=(0,s.Z)({},t);n?l?i.relatedlists[n-1].upload_field_map.length>1&&i.relatedlists[n-1].upload_field_map.splice(e,1):i.relatedlists[n-1].field_map.length>1&&i.relatedlists[n-1].field_map.splice(e,1):l?i.upload_field_map.length>1&&i.upload_field_map.splice(e,1):i.field_map.length>1&&i.field_map.splice(e,1),a((0,s.Z)({},i))},c=function(e,t,a,l,n,i){var r=(0,s.Z)({},a);i?n?r.relatedlists[i-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[i-1].field_map[t][e.target.name]=e.target.value:n?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(i?r.relatedlists[i-1].field_map[t].customValue="":r.field_map[t].customValue=""),l((0,s.Z)({},r))},d=function(e,t,a,l,n){var i=(0,s.Z)({},a);n?i.relatedlists[n-1].field_map[t].customValue=e.target.value:i.field_map[t].customValue=e.target.value,l((0,s.Z)({},i))}},35186:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(87462),l=a(67294),n=a(97707),i=a(7480),r=a(41238),c=a(39492),d=a(35637),o=a(59348),u=a(75257),m=a(23312),p=a(85893);function f(e){e.formID;var t,a=e.formFields,f=e.webHooks,h=e.setWebHooks,b=(e.step,e.setstep),v=e.setSnackbar,_=e.create,x=e.isInfo,g=function(e){return null==e?void 0:e.match(/(\?|&)([^=]+)=([^&]+|)/gi)},j=(0,l.useState)(!1),N=j[0],k=j[1],Z=function(e,t,a){var l=(0,s.Z)({},f);""!==t?l.url="key"===e?l.url.replace(a,""+a.charAt(0)+t+"="+a.split("=")[1]):l.url.replace(a,a.split("=")[0]+"="+t):null===a.match(/\?/g)?l.url=l.url.replace(a,""):l.url=l.url.replace(a+"&","?"),h(l)},w=function(e){var t=(0,s.Z)({},f);t[e.target.name]=e.target.value,h((0,s.Z)({},t))};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{style:(0,s.Z)({},{width:x&&900}),children:[(0,p.jsx)("div",{className:"flx ",children:(0,p.jsxs)("div",{className:"w-7 mr-2 mb-4",children:[(0,p.jsx)("div",{className:"f-m",children:(0,d.__)("Integration name","bitform")}),(0,p.jsx)("input",{name:"name",onChange:function(e){return w(e)},className:"btcd-paper-inp mt-1",type:"text",value:f.name,disabled:x})]})}),(0,p.jsxs)("div",{className:"flx",children:[(0,p.jsxs)("div",{className:"w-7 mr-2",children:[(0,p.jsx)("div",{className:"f-m",children:(0,d.__)("Link:","bitform")}),(0,p.jsx)("input",{name:"url",onChange:function(e){return w(e)},className:"btcd-paper-inp mt-1",type:"text",value:f.url,disabled:x}),(null==f?void 0:f.apiConsole)&&(0,p.jsxs)("small",{className:"d-blk mt-2",children:[(0,d.__)("To got Webhook , Please Visit","bitform")," ",(0,p.jsx)("a",{className:"btcd-link",href:f.apiConsole,target:"_blank",rel:"noreferrer",children:(0,d.__)(f.type+" Dashboard","bitform")})]})]}),(0,p.jsxs)("div",{className:"w-3",children:[(0,p.jsx)("div",{className:"f-m",children:(0,d.__)("Method:","bitform")}),(0,p.jsx)("select",{name:"method",onChange:function(e){return w(e)},defaultValue:f.method,className:"btcd-paper-inp mt-1",disabled:x,children:["GET","POST","PUT","PATCH","OPTION","DELETE","TRACE","CONNECT"].map((function(e,t){return(0,p.jsx)("option",{value:e,children:e},"method-"+2*t)}))})]})]}),!x&&(0,p.jsxs)(o.Z,{onClick:function(){return e=f,k(!0),void(0,c.Z)({hookDetails:e},"bitforms_test_webhook").then((function(e){if(e&&e.success)v({show:!0,msg:""+e.data}),k(!1);else if(e&&e.data){var t="string"===typeof e.data?e.data:"Unknown error";v({show:!0,msg:t+". "+(0,d.__)("please try again","bitform")}),k(!1)}else v({show:!0,msg:(0,d.__)("Webhook tests failed. please try again","bitform")}),k(!1)}));var e},className:"btn btcd-btn-o-blue",children:[(0,d.__)("Test Webhook","bitform"),N&&(0,p.jsx)(u.Z,{size:14,clr:"#022217",className:"ml-2"})]}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{className:"f-m",children:(0,d.__)("Add Url Parameter: (optional)","bitform")}),(0,p.jsx)("div",{className:"btcd-param-t-wrp mt-1",children:(0,p.jsxs)("div",{className:"btcd-param-t",children:[(0,p.jsxs)("div",{className:"tr",children:[(0,p.jsx)("div",{className:"td",children:(0,d.__)("Key","bitform")}),(0,p.jsx)("div",{className:"td",children:(0,d.__)("Value","bitform")})]}),null!==g(f.url)&&(null==(t=g(f.url))?void 0:t.map((function(e,t){return(0,p.jsxs)("div",{className:"tr",children:[(0,p.jsx)("div",{className:"td",children:(0,p.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(t){return Z("key",t.target.value,e)},type:"text",value:e.split("=")[0].substr(1),disabled:x})}),(0,p.jsx)("div",{className:"td",children:(0,p.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(t){return Z("val",t.target.value,e)},type:"text",value:e.split("=")[1],disabled:x})}),!x&&(0,p.jsxs)("div",{className:"flx p-atn",children:[(0,p.jsx)(o.Z,{onClick:function(){return function(e){var t=(0,s.Z)({},f);t.url=t.url.replace(e,""),h(t)}(e)},icn:!0,children:(0,p.jsx)(m.Z,{size:16})}),(0,p.jsx)(n.Z,{options:a.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:function(t){return function(e,t){var a=(0,s.Z)({},f),l=t.split("=");l[1]=e,a.url=a.url.replace(t,l.join("=")),h(a)}(t,e)},defaultValue:e.split("=")[1]})]})]},"fu-1"+3*t)}))),!x&&(0,p.jsx)(o.Z,{onClick:function(){return function(){var e=(0,s.Z)({},f);null!==e.url.match(/\?/g)?e.url+="&key=value":e.url+="?key=value",h(e)}()},className:"add-pram",icn:!0,children:(0,p.jsx)(i.Z,{size:"14",className:"icn-rotate-45"})})]})}),_&&(0,p.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),void b(2)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",children:[(0,d.__)("Next","bitform"),(0,p.jsx)(r.Z,{className:"ml-1 rev-icn"})]})]})})}},40096:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(35637),l=a(85893);function n(e){e.step;var t=e.saveConfig,a=e.edit,n=e.disabled;return a?(0,l.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,l.jsx)("button",{onClick:t,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:n,children:(0,s.__)("Save","bitform")})}):(0,l.jsxs)("div",{className:"txt-center",style:{marginLeft:210},children:[(0,l.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,l.jsxs)("button",{onClick:t,className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform"),"✔"]})]})}},49024:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(87462),l=a(67294),n=a(5977),i=a(35001),r=a(14383),c=a(35186),d=a(40096),o=a(85893);const u=function(e){var t=e.formFields,a=e.setIntegration,u=e.integrations,m=e.allIntegURL,p=(0,n.k6)(),f=(0,n.UO)(),h=f.id,b=f.formID,v=(0,l.useState)((0,s.Z)({},u[h])),_=v[0],x=v[1],g=(0,l.useState)({show:!1}),j=g[0],N=g[1];return(0,o.jsxs)("div",{style:{width:900},children:[(0,o.jsx)(i.Z,{snack:j,setSnackbar:N}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)(c.default,{formID:b,formFields:t,webHooks:_,setWebHooks:x,setSnackbar:N})}),(0,o.jsx)(d.Z,{edit:!0,saveConfig:function(){return(0,r.Mm)(u,a,m,_,p,h,1)}}),(0,o.jsx)("br",{})]})}},59348:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(85893);const l=function(e){var t=e.className,a=e.type,l=e.onClick,n=e.icn,i=e.children,r=e.style;return(0,s.jsx)("button",{style:r,className:(n?"icn-btn":"btn")+"  "+t,type:a||"button",onClick:l,"aria-label":"btcd-button",children:i})}}}]);