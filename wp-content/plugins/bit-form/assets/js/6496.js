"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[6496],{14383:(e,t,a)=>{a.d(t,{FP:()=>i,Mm:()=>l,T5:()=>r,WK:()=>n,mG:()=>c,wX:()=>o});var s=a(87462),l=(a(35637),a(39492),function(e,t,a,l,n,i,r){var o=[].concat(e);if(r)o[i]=(0,s.Z)({},e[i],l),o.push({editItegration:!0}),t([].concat(o)),n.push(a);else{var c=[].concat(o);c.push(l),c.push({newItegration:!0}),t(c),n.push(a)}}),n=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},i=function(e,t,a,l,n){var i=(0,s.Z)({},t);n?l?i.relatedlists[n-1].upload_field_map.splice(e,0,{}):i.relatedlists[n-1].field_map.splice(e,0,{}):l?i.upload_field_map.splice(e,0,{}):i.field_map.splice(e,0,{}),a((0,s.Z)({},i))},r=function(e,t,a,l,n){var i=(0,s.Z)({},t);n?l?i.relatedlists[n-1].upload_field_map.length>1&&i.relatedlists[n-1].upload_field_map.splice(e,1):i.relatedlists[n-1].field_map.length>1&&i.relatedlists[n-1].field_map.splice(e,1):l?i.upload_field_map.length>1&&i.upload_field_map.splice(e,1):i.field_map.length>1&&i.field_map.splice(e,1),a((0,s.Z)({},i))},o=function(e,t,a,l,n,i){var r=(0,s.Z)({},a);i?n?r.relatedlists[i-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[i-1].field_map[t][e.target.name]=e.target.value:n?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(i?r.relatedlists[i-1].field_map[t].customValue="":r.field_map[t].customValue=""),l((0,s.Z)({},r))},c=function(e,t,a,l,n){var i=(0,s.Z)({},a);n?i.relatedlists[n-1].field_map[t].customValue=e.target.value:i.field_map[t].customValue=e.target.value,l((0,s.Z)({},i))}},85813:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(35637),l=a(85893);function n(e){var t=e.step,a=e.saveConfig,n=e.edit,i=e.disabled;return n?(0,l.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,l.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:i,children:(0,s.__)("Update","bitform")})}):(0,l.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,l.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,l.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform")," ✔"]})]})}},28434:(e,t,a)=>{a.d(t,{GQ:()=>f,P_:()=>o,Rx:()=>d,Tf:()=>h,WK:()=>r,j0:()=>b});var s=a(87462),l=a(35637),n=a(39492),i=a(52249),r=function(){var e={},t=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");t&&t.forEach((function(t){var a=t.split("=");a[1]&&(e[a[0]]=a[1])})),localStorage.setItem("__bitforms_zohoAnalytics",JSON.stringify(e)),window.close()},o=function(e,t,a,n,r,o){if(e.dataCenter&&e.clientId&&e.clientSecret)if((0,i.Iy)(e.ownerEmail)){r(!0);var d="https://accounts.zoho."+e.dataCenter+"/oauth/v2/auth?scope=ZohoAnalytics.metadata.read,ZohoAnalytics.data.read,ZohoAnalytics.data.create,ZohoAnalytics.data.update,ZohoAnalytics.usermanagement.read,ZohoAnalytics.share.create&response_type=code&client_id="+e.clientId+"&prompt=Consent&access_type=offline&redirect_uri="+encodeURIComponent(window.location.href)+"/redirect",u=window.open(d,"zohoAnalytics","width=400,height=609,toolbar=off"),m=setInterval((function(){if(u.closed){clearInterval(m);var a={},i=!1,d=localStorage.getItem("__bitforms_zohoAnalytics");if(d&&(i=!0,a=JSON.parse(d),localStorage.removeItem("__bitforms_zohoAnalytics")),a.code&&!a.error&&a&&i){var f=(0,s.Z)({},e);f.accountServer=a["accounts-server"],c(a,f,t,n,r,o)}else{var p=a.error?"Cause: "+a.error:"";o({show:!0,msg:(0,l.__)("Authorization failed","bitform")+" "+p+". "+(0,l.__)("please try again","bitform")}),r(!1)}}}),500)}else a({ownerEmail:(0,i.Iy)(e.ownerEmail)?"":(0,l.__)("Email is invalid","bitform")});else a({dataCenter:e.dataCenter?"":(0,l.__)("Data center cann't be empty","bitform"),clientId:e.clientId?"":(0,l.__)("Client ID cann't be empty","bitform"),clientSecret:e.clientSecret?"":(0,l.__)("Secret key cann't be empty","bitform")})},c=function(e,t,a,i,r,o){var c=(0,s.Z)({},e);c.dataCenter=t.dataCenter,c.clientId=t.clientId,c.clientSecret=t.clientSecret,c.redirectURI=encodeURIComponent(window.location.href)+"/redirect",(0,n.Z)(c,"bitforms_zanalytics_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);n.tokenDetails=e.data,a(n),i(!0),o({show:!0,msg:(0,l.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?o({show:!0,msg:""+(0,l.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,l.__)("please try again","bitform")}):o({show:!0,msg:(0,l.__)("Authorization failed. please try again","bitform")});r(!1)}))},d=function(e,t,a,l,n,i){var r=(0,s.Z)({},t),o=e.target,c=o.name,d=o.value;switch(r[c]=d,c){case"workspace":r=u(r,l,a,n,i);break;case"table":r=m(r,l,a,n,i)}a((0,s.Z)({},r))},u=function(e,t,a,l,n){var i,r,o,c,d=(0,s.Z)({},e);if(d.table="",d.field_map=[{formField:"",zohoFormField:""}],null!=d&&null!=(i=d.default)&&null!=(r=i.tables)&&r[e.workspace]){if(1===Object.keys(null==d||null==(o=d.default)||null==(c=o.tables)?void 0:c[e.workspace]).length){var u,m,f,_,v;d.table=null==d||null==(u=d.default)||null==(m=u.tables)?void 0:m[e.workspace][0].viewName,null!=d&&null!=(f=d.default)&&null!=(_=f.tables)&&null!=(v=_.headers)&&v[d.table]||b(t,d,a,l,n)}}else h(t,d,a,l,n);return e.default.users||p(t,e,a,l,n),d},m=function(e,t,a,l,n){var i,r,o,c=(0,s.Z)({},e);return c.field_map=[{formField:"",zohoFormField:""}],null!=c&&null!=(i=c.default)&&null!=(r=i.tables)&&null!=(o=r.headers)&&o[e.table]||b(t,c,a,l,n),c},f=function(e,t,a,i,r){i(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};(0,n.Z)(o,"bitforms_zanalytics_refresh_workspaces").then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);n.default||(n.default={}),e.data.workspaces&&(n.default.workspaces=e.data.workspaces),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),r({show:!0,msg:(0,l.__)("Workspaces refreshed","bitform")}),a((0,s.Z)({},n))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:""+(0,l.__)("Workspaces refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,l.__)("please try again","bitform")}):r({show:!0,msg:(0,l.__)("Workspaces refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},p=function(e,t,a,i,r){i(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};(0,n.Z)(o,"bitforms_zanalytics_refresh_users").then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);n.default||(n.default={}),e.data.users&&(n.default.users=e.data.users),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),r({show:!0,msg:(0,l.__)("Users refreshed","bitform")}),a((0,s.Z)({},n))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:""+(0,l.__)("Users refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,l.__)("please try again","bitform")}):r({show:!0,msg:(0,l.__)("Users refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},h=function(e,t,a,i,r){var o=t.workspace;if(o){i(!0);var c={formID:e,workspace:o,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};(0,n.Z)(c,"bitforms_zanalytics_refresh_tables").then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);e.data.tables&&(n.default.tables||(n.default.tables={}),n.default.tables[o]=e.data.tables),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),r({show:!0,msg:(0,l.__)("Tables refreshed","bitform")}),a((0,s.Z)({},n))}else r({show:!0,msg:(0,l.__)("Tables refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))}},b=function(e,t,a,i,r){var o=t.workspace,c=t.table;if(c){i(!0);var d={formID:e,workspace:o,table:c,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};(0,n.Z)(d,"bitforms_zanalytics_refresh_table_headers").then((function(e){if(e&&e.success){var n=(0,s.Z)({},t);e.data.table_headers?(n.default.tables.headers||(n.default.tables.headers={}),n.default.tables.headers[c]=e.data.table_headers,r({show:!0,msg:(0,l.__)("Table Headers refreshed","bitform")})):r({show:!0,msg:(0,l.__)("Zoho didn't provide column names for this table","bitform")}),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),a((0,s.Z)({},n))}else r({show:!0,msg:(0,l.__)("Table Headers refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))}}},3837:(e,t,a)=>{a.d(t,{Z:()=>g});var s=a(35637),l=a(68381),n=a(87462),i=a(67294),r=a(97707),o=a(8692),c=a(23921),d=a(38762),u=a(48281),m=a(85893);function f(e){var t,a,l,f,p,h,b,_,v,x=e.analyticsConf,w=e.setAnalyticsConf,y=e.formFields,g=(0,i.useState)(!1),j=g[0],N=g[1],Z=(0,i.useState)({show:!1}),k=Z[0],C=Z[1],A={read:[{apiName:"ZOHO_READ",displayLabel:"Read Access"},{apiName:"ZOHO_EXPORT",displayLabel:"Export Data"}],write:[{apiName:"ZOHO_ADDROW",displayLabel:"Add Row"},{apiName:"ZOHO_UPDATEROW",displayLabel:"Modify Row"},{apiName:"ZOHO_DELETEROW",displayLabel:"Delete Row"},{apiName:"ZOHO_DELETEALLROWS",displayLabel:"Delete All"}],import:[{apiName:"ZOHO_IMPORT_APPEND",displayLabel:"Only Append Rows"},{apiName:"ZOHO_IMPORT_ADDORUPDATE",displayLabel:"Add or Update Rows"},{apiName:"ZOHO_IMPORT_DELETEALLADD",displayLabel:"Delete All Rows and Add New Rows"}],share:[{apiName:"ZOHO_SHARE",displayLabel:"Share View / Child Reports"}]},D=function(e,t){var a=(0,n.Z)({},x);"criteria"===t&&(a.actions.update.criteria=e),"insert"===t&&(a.actions.update.insert=e),w((0,n.Z)({},a))},O=function(e,t,a){var s,l=(0,n.Z)({},x);if(null!=(s=l.actions)&&s.share||(l.actions.share={}),l.actions.share.permissions||(l.actions.share.permissions={read:["ZOHO_READ"]}),"parent"===e){l.actions.share.permissions[t]||(l.actions.share.permissions[t]=[]);var i=A[t].map((function(e){return e.apiName}));i.every((function(e){return l.actions.share.permissions[t].includes(e)}))?"read"===t?l.actions.share.permissions.read=["ZOHO_READ"]:delete l.actions.share.permissions[t]:l.actions.share.permissions[t]=i}else if("value"===e){l.actions.share.permissions[a]||(l.actions.share.permissions[a]=[]);var r=l.actions.share.permissions[a].indexOf(t);-1!==r?(l.actions.share.permissions[a].splice(r,1),l.actions.share.permissions[a].length||delete l.actions.share.permissions[a]):l.actions.share.permissions[a].push(t)}else l.actions.share[e]=t;w((0,n.Z)({},l))};return(0,i.useEffect)((function(){var e,t;if(!j&&(null==(e=x.actions)||null==(t=e.update)||!t.criteria)){var a=(0,n.Z)({},x);delete a.actions.update,w((0,n.Z)({},a))}}),[j]),(0,m.jsxs)("div",{className:"pos-rel",children:[(0,m.jsxs)("div",{className:"d-flx flx-wrp",children:[(0,m.jsx)(u.Z,{action:function(){var e;if(null==(e=x.actions)||!e.update){var t=(0,n.Z)({},x);t.actions.update={insert:!0,criteria:""},w((0,n.Z)({},t))}N(!0)},children:(0,m.jsx)(c.Z,{onChange:function(e){return function(e,t){var a,s=(0,n.Z)({},x);"update"===t&&(!e.target.checked||null!=s&&null!=(a=s.actions)&&a.update?delete s.actions.update:(s.actions.update={insert:!0,criteria:""},N(!0))),w((0,n.Z)({},s))}(e,"update")},checked:"update"in(null==x?void 0:x.actions),className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:(0,s.__)("Update Row","bitofrm"),subTitle:(0,s.__)("Control how the row gets updated.","bitform")})}),(0,m.jsx)(c.Z,{checked:(null==x||null==(t=x.actions)||null==(a=t.share)?void 0:a.email)||!1,onChange:function(){return C({show:"share"})},className:"wdt-200 mt-4 mr-2",value:"user_share",title:(0,s.__)("Share Table","bitofrm"),subTitle:(0,s.__)("Share Table with users pushed to Zoho Analytics.","bitform")})]}),(0,m.jsx)(d.Z,{md:!0,show:j,setModal:N,title:(0,s.__)("Update Row","bitform"),children:(0,m.jsx)("div",{className:"o-a",children:(null==x||null==(l=x.actions)?void 0:l.update)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("small",{children:(0,s.__)("Enter the criteria to update rows. Please use the below format.","bitform")}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsxs)("small",{children:[(0,s.__)("Example","bitform"),": ",'("Table Name"."Department" = \'Finance\' and "Table Name"."Salary" < 9000 or "Table Name"."Country" = \'USA\')']}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("small",{children:(0,s.__)("Here Department, Salary and Country are Zoho Analytics table column name","bitform")}),(0,m.jsx)("span",{className:"icn-btn ml-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Supported Arithmetic Operators: ( +, -, *, / ) and Supported Relational Operators: ( =, !=, <, >, <=, >=, LIKE, NOT LIKE, IN, NOT IN, BETWEEN )","bitform")+"'","--tt-wrap":"wrap","--tt-width":"225px",fontSize:15},children:(0,m.jsx)("span",{className:"btcd-icn icn-information-outline"})}),(0,m.jsx)("textarea",{name:"",rows:"5",className:"btcd-paper-inp mt-1",onChange:function(e){return D(e.target.value,"criteria")},value:null==(f=x.actions)||null==(p=f.update)?void 0:p.criteria})]}),(0,m.jsx)("div",{className:"font-w-m mt-3",children:(0,s.__)("Update Preferance","bitform")}),(0,m.jsx)("small",{children:"insert new row if the above criteria doesn't met?"}),(0,m.jsxs)("div",{children:[(0,m.jsx)(o.Z,{onChange:function(){return D(!0,"insert")},radio:!0,checked:null==(h=x.actions.update)?void 0:h.insert,name:"up-row",title:(0,s.__)("Yes","bitform")}),(0,m.jsx)(o.Z,{onChange:function(){return D(!1,"insert")},radio:!0,checked:!(null!=(b=x.actions.update)&&b.insert),name:"up-row",title:(0,s.__)("No","bitform")})]})]})})}),(0,m.jsx)(d.Z,{md:!0,show:"share"===k.show,setModal:function(){return C({show:!1})},title:(0,s.__)("Share Settings","bitform"),children:(0,m.jsxs)("div",{className:"o-a",style:{height:"95%"},children:[(0,m.jsx)("div",{className:"mt-2 mb-1",children:(0,s.__)("Enter Email Addresses","bitform")}),(0,m.jsx)(r.Z,{className:"btcd-paper-drpdwn w-9 mr-2",placeholder:"Input Email Address(s)",defaultValue:null==x||null==(_=x.actions)||null==(v=_.share)?void 0:v.email,onChange:function(e){return O("email",e)},options:function(){var e,t=[{title:"Zoho Analytics Users",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];return(null==x||null==(e=x.default)?void 0:e.users.length)>0&&(t[0].childs=x.default.users.map((function(e){return{label:e,value:e}}))),t[1].childs=y.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),t}(),customValue:!0}),(0,m.jsx)("small",{children:(0,s.__)("you can select analytics users or select form fields value or even can input custom email address as well","bitform")}),(0,m.jsx)("div",{className:"btcd-hr mt-2"}),(0,m.jsx)("div",{className:"mt-2 mb-1 font-w-m",children:(0,s.__)("Permissions Settings","bitform")}),(0,m.jsx)("div",{className:"btcd-hr mt-2"}),Object.keys(A).map((function(e){return(0,m.jsxs)("div",{children:[(0,m.jsx)(o.Z,{className:"font-w-m btcd-ttc",onChange:function(){return O("parent",e)},title:e+" Options",checked:A[e].map((function(e){return e.apiName})).every((function(t){var a,s,l,n;return null==x||null==(a=x.actions)||null==(s=a.share)||null==(l=s.permissions)||null==(n=l[e])?void 0:n.includes(t)}))}),(0,m.jsx)("div",{className:"flx",children:A[e].map((function(t){var a,s,l,n;return(0,m.jsx)(o.Z,{className:"scl-7",value:"true",title:(0,m.jsx)("span",{children:t.displayLabel}),sqr:!0,checked:(null==(a=x.actions)||null==(s=a.share)||null==(l=s.permissions)||null==(n=l[e])?void 0:n.indexOf(t.apiName))>=0,onChange:function(){return O("value",t.apiName,e)},disabled:"ZOHO_READ"===t.apiName||!1},t.apiName)}))}),(0,m.jsx)("div",{className:"btcd-hr mt-2"})]},e)}))]})})]})}var p=a(28434),h=a(2804),b=a(54017),_=a(23312),v=a(80410),x=a(88530),w=function(e,t,a){var s=(0,n.Z)({},t);s.field_map.splice(e,0,{}),a(s)};function y(e){var t=e.i,a=e.formFields,l=e.field,i=e.analyticsConf,r=e.setAnalyticsConf,o=(0,h.sJ)(b.hi).isPro,c=function(e,t){var a=(0,n.Z)({},i);a.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(a.field_map[t].customValue=""),r(a)};return(0,m.jsxs)("div",{className:"flx flx-around mt-2 mr-1",children:[(0,m.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:function(e){return c(e,t)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),(0,m.jsx)("optgroup",{label:"Form Fields",children:a.map((function(e){return"file-up"!==e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,m.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bitform")}),(0,m.jsx)("optgroup",{label:"General Smart Codes "+(o?"":"(PRO)"),children:o&&(null==v.C?void 0:v.C.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===l.formField&&(0,m.jsx)(x.Z,{onChange:function(e){return function(e,t){var a=(0,n.Z)({},i);a.field_map[t].customValue=e.target.value,r(a)}(e,t)},label:(0,s.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:l.customValue,placeholder:(0,s.__)("Custom Value","bitform")}),(0,m.jsxs)("select",{className:"btcd-paper-inp",name:"zohoFormField",value:l.zohoFormField||"",onChange:function(e){return c(e,t)},children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),Object.values(i.default.tables.headers[i.table]).map((function(e){return(0,m.jsx)("option",{value:e,children:e},e+"-1")}))]})]}),(0,m.jsx)("button",{onClick:function(){return w(t,i,r)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,m.jsx)("button",{onClick:function(){return function(e){var t=(0,n.Z)({},i);t.field_map.length>1&&t.field_map.splice(e,1),r(t)}(t)},className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:(0,m.jsx)(_.Z,{})})]})}function g(e){var t,a,n,i,r,o,c=e.formID,d=e.formFields,u=e.handleInput,h=e.analyticsConf,b=e.setAnalyticsConf,_=e.isLoading,v=e.setisLoading,x=e.setSnackbar;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:(0,s.__)("Workspace:","bitform")}),(0,m.jsxs)("select",{onChange:u,name:"workspace",value:h.workspace,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Workspace","bitform")}),(null==h||null==(t=h.default)?void 0:t.workspaces)&&h.default.workspaces.map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,p.GQ)(c,h,b,v,x)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh Analytics Workspaces","bitform")+"'"},type:"button",disabled:_,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:(0,s.__)("Table:","bitform")}),(0,m.jsxs)("select",{onChange:u,name:"table",value:h.table,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,s.__)("Select Table","bitform")}),(null==h||null==(a=h.default)||null==(n=a.tables)?void 0:n[h.workspace])&&h.default.tables[h.workspace].map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,p.Tf)(c,h,b,v,x)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Analytics Tables"'},type:"button",disabled:_,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("small",{style:{color:"red",marginLeft:105},children:(0,s.__)("** Zoho Analytics doesn't support data INSERT / UPDATE in other integration table","bitform")}),_&&(0,m.jsx)(l.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(i=h.default)||null==(r=i.tables)||null==(o=r.headers)?void 0:o[h.table])&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Fields","bitform")}),(0,m.jsx)("button",{onClick:function(){return(0,p.j0)(c,h,b,v,x)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,s.__)("Refresh Analytics Table Headers","bitform")+"'"},type:"button",disabled:_,children:"↻"})]}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,s.__)("Zoho Fields","bitform")})})]}),h.field_map.map((function(e,t){return(0,m.jsx)(y,{i:t,field:e,analyticsConf:h,formFields:d,setAnalyticsConf:b},"analytics-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return w(h.field_map.length,h,b)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,s.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(f,{analyticsConf:h,setAnalyticsConf:b,formFields:d})]})]})}},8692:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(85893);const l=function(e){var t=e.className,a=e.disabled,l=e.checked,n=e.onChange,i=e.radio,r=e.name,o=e.title,c=e.value,d=e.sqr;return(0,s.jsxs)("label",{className:"btcd-ck-wrp "+t,children:[o,(0,s.jsx)("input",{type:i?"radio":"checkbox",checked:l,onChange:n,name:r,value:c,disabled:a}),(0,s.jsx)("span",{className:"btcd-mrk "+(!d&&"br-50")+" "+(i?"rdo":"ck")})]})}},88530:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(85893);const l=function(e){var t=e.label,a=e.onChange,l=e.value,n=e.disabled,i=e.type,r=e.textarea,o=e.className;return(0,s.jsxs)("label",{className:"btcd-mt-inp "+o,children:[!r&&(0,s.jsx)("input",{type:void 0===i?"text":i,onChange:a,placeholder:" ",disabled:n,value:l}),r&&(0,s.jsx)("textarea",{type:void 0===i?"text":i,onChange:a,placeholder:" ",disabled:n,value:l}),(0,s.jsx)("span",{children:t})]})}},48281:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(40523),l=a(85893);function n(e){var t=e.action,a=e.children;return(0,l.jsxs)("div",{className:"action-btn-wrapper",children:[(0,l.jsx)("div",{className:"action-btn",tabIndex:"0",role:"button",onClick:t,onKeyPress:t,children:(0,l.jsx)(s.Z,{})}),a]})}}}]);