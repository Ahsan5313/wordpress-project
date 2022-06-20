"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[5894],{33037:(e,t,a)=>{a.d(t,{Co:()=>h,P_:()=>f,Pd:()=>p,Rx:()=>i,de:()=>c,kS:()=>u});var s=a(87462),r=a(35637),l=a(39492),n=a(52249),i=function(e,t,a,r,l,n,i,c,h){var u=(0,s.Z)({},t);if(i){var f=(0,s.Z)({},c);f[e.target.name]="",h((0,s.Z)({},f))}switch(u[e.target.name]=e.target.value,e.target.name){case"spreadsheetId":u=o(u,r,a,l,n);break;case"worksheetName":u=d(u,r,a,l,n)}a((0,s.Z)({},u))},o=function(e,t,a,s,r){var l,i,o,d,c=(0,n.p$)(e);if(c.worksheetName="",c.headerRow="A1",c.field_map=[{formField:"",googleSheetField:""}],null!=c&&null!=(l=c.default)&&null!=(i=l.worksheets)&&i[e.spreadsheetId]){if(1===Object.keys(null==c||null==(o=c.default)||null==(d=o.worksheets)?void 0:d[e.spreadsheetId]).length){var f,m,p,b,_;c.worksheetName=null==c||null==(f=c.default)||null==(m=f.worksheets)?void 0:m[e.spreadsheetId][0].properties.title,null!=c&&null!=(p=c.default)&&null!=(b=p.worksheets)&&null!=(_=b.headers)&&_[c.worksheetName]||u(t,c,a,s,r)}}else h(t,c,a,s,r);return c},d=function(e,t,a,r,l){var n,i,o,d=(0,s.Z)({},e);return d.headerRow="A1",d.field_map=[{formField:"",googleSheetField:""}],null!=d&&null!=(n=d.default)&&null!=(i=n.worksheets)&&null!=(o=i.headers)&&o[e.worksheetName]||u(t,d,a,r,l),d},c=function(e,t,a,n,i){n(!0);var o={formID:e,id:t.id,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};(0,l.Z)(o,"bitforms_gsheet_refresh_spreadsheets").then((function(e){if(e&&e.success){var l=(0,s.Z)({},t);l.default||(l.default={}),e.data.spreadsheets&&(l.default.spreadsheets=e.data.spreadsheets),e.data.tokenDetails&&(l.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,r.__)("Spreadsheet refreshed","bitform")}),a((0,s.Z)({},l))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?i({show:!0,msg:(0,r.g)((0,r.__)("Spreadsheet refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):i({show:!0,msg:(0,r.__)("Spreadsheet refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))},h=function(e,t,a,n,i){var o=t.spreadsheetId;if(o){n(!0);var d={formID:e,spreadsheetId:o,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,l.Z)(d,"bitforms_gsheet_refresh_worksheets").then((function(e){if(e&&e.success){var l=(0,s.Z)({},t);e.data.worksheets&&(l.default.worksheets||(l.default.worksheets={}),l.default.worksheets[o]=e.data.worksheets),e.data.tokenDetails&&(l.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,r.__)("Worksheets refreshed","bitform")}),a((0,s.Z)({},l))}else i({show:!0,msg:(0,r.__)("Worksheets refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))}},u=function(e,t,a,n,i){var o=t.spreadsheetId,d=t.worksheetName,c=t.header,h=t.headerRow;if(o||d||c||h){n(!0);var u={formID:e,spreadsheetId:o,worksheetName:d,header:c,headerRow:h,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,l.Z)(u,"bitforms_gsheet_refresh_worksheet_headers").then((function(e){if(e&&e.success){var l,c=(0,s.Z)({},t);(null==(l=e.data.worksheet_headers)?void 0:l.length)>0?(c.default.headers||(c.default.headers={}),c.default.headers[o]||(c.default.headers[o]={}),c.default.headers[o][d]||(c.default.headers[o][d]={}),c.default.headers[o][d][h]=e.data.worksheet_headers,e.data.tokenDetails&&(c.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,r.__)("Worksheet Headers refreshed","bitform")})):i({show:!0,msg:(0,r.__)("No Worksheet headers found. Try changing the header row number or try again","bitform")}),e.data.tokenDetails&&(c.tokenDetails=e.data.tokenDetails),a((0,s.Z)({},c))}else i({show:!0,msg:(0,r.__)("Worksheet Headers refresh failed. please try again","bitform")});n(!1)})).catch((function(){return n(!1)}))}},f=function(e,t,a,l,n,i){if(e.clientId&&e.clientSecret){n(!0);var o="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/drive&access_type=offline&prompt=consent&response_type=code&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.googleRedirectURL)+"&client_id="+e.clientId,d=window.open(o,"googleSheet","width=400,height=609,toolbar=off"),c=setInterval((function(){if(d.closed){clearInterval(c);var a={},o=!1,h=localStorage.getItem("__bitforms_googleSheet");if(h&&(o=!0,a=JSON.parse(h),localStorage.removeItem("__bitforms_googleSheet")),a.code&&!a.error&&a&&o){var u=(0,s.Z)({},e);u.accountServer=a["accounts-server"],m(a,u,t,l,n,i)}else{var f=a.error?"Cause: "+a.error:"";i({show:!0,msg:(0,r.__)("Authorization failed","bitform")+" "+f+". "+(0,r.__)("please try again","bitform")}),n(!1)}}}),500)}else a({clientId:e.clientId?"":(0,r.__)("Client ID cann't be empty","bitform"),clientSecret:e.clientSecret?"":(0,r.__)("Secret key cann't be empty","bitform")})},m=function(e,t,a,n,i,o){var d=(0,s.Z)({},e);d.clientId=t.clientId,d.clientSecret=t.clientSecret,d.redirectURI=bits.googleRedirectURL,(0,l.Z)(d,"bitforms_gsheet_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var l=(0,s.Z)({},t);l.tokenDetails=e.data,a(l),n(!0),o({show:!0,msg:(0,r.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?o({show:!0,msg:""+(0,r.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,r.__)("please try again","bitform")}):o({show:!0,msg:(0,r.__)("Authorization failed. please try again","bitform")});i(!1)}))},p=function(e){return!((e.field_map?e.field_map.filter((function(e){return!e.formField&&!e.googleSheetField})):[]).length>0)}},80735:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(35637),r=a(68381),l=a(99440),n=a(33037),i=a(2804),o=a(54017),d=a(23312),c=a(80410),h=a(88530),u=a(85893);function f(e){var t,a,r,n,f=e.i,m=e.formFields,p=e.field,b=e.sheetConf,_=e.setSheetConf,g=(0,i.sJ)(o.hi).isPro;return(0,u.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,u.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,u.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:p.formField||"",onChange:function(e){return(0,l.wX)(e,f,b,_)},children:[(0,u.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),(0,u.jsx)("optgroup",{label:"Form Fields",children:m.map((function(e){return"file-up"!==e.type&&(0,u.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,u.jsx)("option",{value:"custom",children:(0,s.__)("Custom...","bitform")}),(0,u.jsx)("optgroup",{label:"General Smart Codes "+(g?"":"(PRO)"),children:g&&(null==c.C?void 0:c.C.map((function(e){return(0,u.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===p.formField&&(0,u.jsx)(h.Z,{onChange:function(e){return(0,l.mG)(e,f,b,_)},label:(0,s.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:p.customValue,placeholder:(0,s.__)("Custom Value","bitform")}),(0,u.jsxs)("select",{className:"btcd-paper-inp",name:"googleSheetField",value:p.googleSheetField||"",onChange:function(e){return(0,l.wX)(e,f,b,_)},children:[(0,u.jsx)("option",{value:"",children:(0,s.__)("Select Field","bitform")}),(null==(t=b.default)||null==(a=t.headers)||null==(r=a[b.spreadsheetId])||null==(n=r[b.worksheetName])?void 0:n[b.headerRow])&&Object.values(b.default.headers[b.spreadsheetId][b.worksheetName][b.headerRow]).map((function(e,t){return(0,u.jsx)("option",{value:e,children:e},"gsheet-"+2*t)}))]})]}),(0,u.jsx)("button",{onClick:function(){return(0,l.FP)(f,b,_)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,u.jsx)("button",{onClick:function(){return(0,l.T5)(f,b,_)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,u.jsx)(d.Z,{})})]})}function m(e){var t,a,i,o,d,c,h,m=e.formID,p=e.formFields,b=e.handleInput,_=e.sheetConf,g=e.setSheetConf,v=e.isLoading,w=e.setisLoading,x=e.setSnackbar;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("br",{}),(0,u.jsx)("b",{className:"wdt-150 d-in-b",children:(0,s.__)("Spreadsheets:","bitform")}),(0,u.jsxs)("select",{onChange:b,name:"spreadsheetId",value:_.spreadsheetId,className:"btcd-paper-inp w-6",children:[(0,u.jsx)("option",{value:"",children:(0,s.__)("Select Spreadsheet","bitform")}),(null==_||null==(t=_.default)?void 0:t.spreadsheets)&&Object.keys(_.default.spreadsheets).map((function(e){return(0,u.jsx)("option",{value:_.default.spreadsheets[e].spreadsheetId,children:_.default.spreadsheets[e].spreadsheetName},e)}))]}),(0,u.jsx)("button",{onClick:function(){return(0,n.de)(m,_,g,w,x)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Spreadsheet"'},type:"button",disabled:v,children:"↻"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("b",{className:"wdt-150 d-in-b",children:"Worksheet:"}),(0,u.jsxs)("select",{onChange:b,name:"worksheetName",value:_.worksheetName,className:"btcd-paper-inp w-6",children:[(0,u.jsx)("option",{value:"",children:(0,s.__)("Select Worksheet","bitform")}),(null==_||null==(a=_.default)||null==(i=a.worksheets)?void 0:i[_.spreadsheetId])&&_.default.worksheets[_.spreadsheetId].map((function(e){return(0,u.jsx)("option",{value:e.properties.title,children:e.properties.title},e.properties.sheetId)}))]}),(0,u.jsx)("button",{onClick:function(){return(0,n.Co)(m,_,g,w,x)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Sheet Worksheets"'},type:"button",disabled:v,children:"↻"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("b",{className:"wdt-150 d-in-b",children:(0,s.__)("Header Row:","bitform")}),(0,u.jsx)("input",{type:"text",min:"1",className:"btcd-paper-inp w-6",placeholder:"Header Row",onChange:b,value:_.headerRow,name:"headerRow"}),(0,u.jsx)("button",{onClick:function(){return(0,n.kS)(m,_,g,w,x)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Worksheet Headers"'},type:"button",disabled:v,children:"↻"}),(0,u.jsx)("br",{}),(0,u.jsx)("small",{className:"mt-3 d-blk",style:{marginLeft:155,lineHeight:1.8},children:(0,s.__)("By default, first row of the worksheet is considered as header row. This can be used if tabular data starts from any row other than the first row.","bitform")}),(0,u.jsx)("br",{}),v&&(0,u.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(o=_.default)||null==(d=o.headers)||null==(c=d[_.spreadsheetId])||null==(h=c[_.worksheetName])?void 0:h[_.headerRow])&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)("b",{className:"wdt-100",children:(0,s.__)("Map Fields","bitform")})}),(0,u.jsx)("div",{className:"btcd-hr mt-1"}),(0,u.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,u.jsx)("div",{className:"txt-dp",children:(0,u.jsx)("b",{children:(0,s.__)("Form Fields","bitform")})}),(0,u.jsx)("div",{className:"txt-dp",children:(0,u.jsx)("b",{children:(0,s.__)("Google Fields","bitform")})})]}),_.field_map.map((function(e,t){return(0,u.jsx)(f,{i:t,field:e,sheetConf:_,formFields:p,setSheetConf:g},"sheet-m-"+(t+9))})),(0,u.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,u.jsx)("button",{onClick:function(){return(0,l.FP)(_.field_map.length,_,g)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]})]})}},99440:(e,t,a)=>{a.d(t,{FP:()=>n,Mm:()=>r,T5:()=>i,WK:()=>l,mG:()=>d,wX:()=>o});var s=a(87462),r=(a(35637),a(39492),function(e,t,a,r,l,n,i){var o=[].concat(e);if(i)o[n]=(0,s.Z)({},e[n],r),o.push({editItegration:!0}),t([].concat(o)),l.push(a);else{var d=[].concat(o);d.push(r),d.push({newItegration:!0}),t(d),l.push(a)}}),l=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},n=function(e,t,a,r,l){var n=(0,s.Z)({},t);l?r?n.relatedlists[l-1].upload_field_map.splice(e,0,{}):n.relatedlists[l-1].field_map.splice(e,0,{}):r?n.upload_field_map.splice(e,0,{}):n.field_map.splice(e,0,{}),a((0,s.Z)({},n))},i=function(e,t,a,r,l){var n=(0,s.Z)({},t);l?r?n.relatedlists[l-1].upload_field_map.length>1&&n.relatedlists[l-1].upload_field_map.splice(e,1):n.relatedlists[l-1].field_map.length>1&&n.relatedlists[l-1].field_map.splice(e,1):r?n.upload_field_map.length>1&&n.upload_field_map.splice(e,1):n.field_map.length>1&&n.field_map.splice(e,1),a((0,s.Z)({},n))},o=function(e,t,a,r,l,n){var i=(0,s.Z)({},a);n?l?i.relatedlists[n-1].upload_field_map[t][e.target.name]=e.target.value:i.relatedlists[n-1].field_map[t][e.target.name]=e.target.value:l?i.upload_field_map[t][e.target.name]=e.target.value:i.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(n?i.relatedlists[n-1].field_map[t].customValue="":i.field_map[t].customValue=""),r((0,s.Z)({},i))},d=function(e,t,a,r,l){var n=(0,s.Z)({},a);l?n.relatedlists[l-1].field_map[t].customValue=e.target.value:n.field_map[t].customValue=e.target.value,r((0,s.Z)({},n))}},85813:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(35637),r=a(85893);function l(e){var t=e.step,a=e.saveConfig,l=e.edit,n=e.disabled;return l?(0,r.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,r.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:n,children:(0,s.__)("Update","bitform")})}):(0,r.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,r.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,r.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform")," ✔"]})]})}},88530:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(85893);const r=function(e){var t=e.label,a=e.onChange,r=e.value,l=e.disabled,n=e.type,i=e.textarea,o=e.className;return(0,s.jsxs)("label",{className:"btcd-mt-inp "+o,children:[!i&&(0,s.jsx)("input",{type:void 0===n?"text":n,onChange:a,placeholder:" ",disabled:l,value:r}),i&&(0,s.jsx)("textarea",{type:void 0===n?"text":n,onChange:a,placeholder:" ",disabled:l,value:r}),(0,s.jsx)("span",{children:t})]})}}}]);