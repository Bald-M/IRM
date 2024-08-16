import{d as M,r as O,a as v,o as T,c as C,b as e,e as P,w as a,f as u,u as V,g as I,h as x,i as l,j as S,v as k,t as U,_ as z}from"./index-5iNKbduB.js";import{H as j}from"./Header-D_k9chGL.js";const H={class:"container"},W={class:"tool"},q=M({__name:"HomeView",setup(G){const i=O({declaration:"Yes",averageGrade:"",areaOfStudy:"",programmeOfStudy:"",qualificationType:""}),N=v("top"),t=v(!1),_=v(),y=r=>{switch(r){case!0:t.value=!0;break;case!1:t.value=!1;break}},c=v("Lock"),D=r=>{switch(r){case"Edit":c.value="Lock",t.value=!1;break;case"Lock":c.value="Edit",t.value=!0;break}},b=v(!1),h=r=>{r==="Others"?b.value=!0:b.value=!1},A=()=>{localStorage.removeItem("authToken"),location.reload()};return(r,o)=>{const f=u("el-button"),E=u("el-badge"),g=u("el-text"),d=u("el-radio"),m=u("el-radio-group"),p=u("el-space"),s=u("el-form-item"),w=u("el-input"),B=u("el-form");return T(),C("div",H,[e(j),P("div",W,[e(E,{"is-dot":""},{default:a(()=>[e(f,{icon:V(I)},null,8,["icon"])]),_:1}),e(E,null,{default:a(()=>[e(f,{icon:V(x)},null,8,["icon"])]),_:1})]),e(B,{model:i,"label-width":"auto",class:"form","label-position":N.value},{default:a(()=>[e(s,null,{default:a(()=>[e(p,{wrap:"",direction:"vertical"},{default:a(()=>[e(g,{size:"large"},{default:a(()=>[l(" I understand and agree that Wintec partner internships and industry projects are unpaid voluntary work for a minimum of 300 hours made up of 2 days a week over the 16 weeks of semester. ")]),_:1}),e(m,{modelValue:i.declaration,"onUpdate:modelValue":o[2]||(o[2]=n=>i.declaration=n)},{default:a(()=>[e(d,{value:"Yes",onChange:o[0]||(o[0]=n=>y(!1))},{default:a(()=>[l("Yes")]),_:1}),e(d,{value:"No",onChange:o[1]||(o[1]=n=>y(!0))},{default:a(()=>[l("No")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,null,{default:a(()=>[e(p,{direction:"vertical"},{default:a(()=>[e(g,{size:"large"},{default:a(()=>[l(" What is your average grade (your estimate if ok)? ")]),_:1}),e(m,{modelValue:i.averageGrade,"onUpdate:modelValue":o[3]||(o[3]=n=>i.averageGrade=n)},{default:a(()=>[e(d,{value:"C",disabled:t.value},{default:a(()=>[l("C grade")]),_:1},8,["disabled"]),e(d,{value:"B",disabled:t.value},{default:a(()=>[l("B grade")]),_:1},8,["disabled"]),e(d,{value:"A",disabled:t.value},{default:a(()=>[l("A grade")]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,null,{default:a(()=>[e(p,{direction:"vertical"},{default:a(()=>[e(g,{size:"large"},{default:a(()=>[l(" What is your Programme of study ")]),_:1}),e(m,{modelValue:i.programmeOfStudy,"onUpdate:modelValue":o[4]||(o[4]=n=>i.programmeOfStudy=n)},{default:a(()=>[e(d,{value:"Bachelor of Applied Information Technology",disabled:t.value},{default:a(()=>[l("Bachelor of Applied Information Technology")]),_:1},8,["disabled"]),e(d,{value:"Postgraduate Diploma in Applied Information Technology",disabled:t.value},{default:a(()=>[l("Postgraduate Diploma in Applied Information Technology")]),_:1},8,["disabled"]),e(d,{value:"Masters",disabled:t.value},{default:a(()=>[l("Masters")]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,null,{default:a(()=>[e(p,{direction:"vertical"},{default:a(()=>[e(g,{size:"large"},{default:a(()=>[l(" What is your Area of study ")]),_:1}),e(m,{modelValue:i.areaOfStudy,"onUpdate:modelValue":o[5]||(o[5]=n=>i.areaOfStudy=n),onChange:h},{default:a(()=>[e(d,{value:"Network Engineering",disabled:t.value},{default:a(()=>[l("Network Engineering")]),_:1},8,["disabled"]),e(d,{value:"Software Engineering",disabled:t.value},{default:a(()=>[l("Software Engineering")]),_:1},8,["disabled"]),e(d,{value:"Others",disabled:t.value},{default:a(()=>[l("Others")]),_:1},8,["disabled"])]),_:1},8,["modelValue"]),S(e(w,{modelValue:_.value,"onUpdate:modelValue":o[6]||(o[6]=n=>_.value=n),clearable:""},null,8,["modelValue"]),[[k,b.value]])]),_:1})]),_:1}),e(s,null,{default:a(()=>[e(p,{direction:"vertical"},{default:a(()=>[e(g,{size:"large"},{default:a(()=>[l(" Qualification Type (if other please be specific, eg Postgraduate BA) ")]),_:1}),e(m,{modelValue:i.qualificationType,"onUpdate:modelValue":o[7]||(o[7]=n=>i.qualificationType=n)},{default:a(()=>[e(d,{value:"Degree - SE - Software Engineering",disabled:t.value},{default:a(()=>[l("Degree - SE - Software Engineering")]),_:1},8,["disabled"]),e(d,{value:"Degree - NE - Networking Engineering",disabled:t.value},{default:a(()=>[l("Degree - NE - Networking Engineering")]),_:1},8,["disabled"]),e(d,{value:"Postgraduate Diploma - SE - Software Engineering",disabled:t.value},{default:a(()=>[l("Postgraduate Diploma - SE - Software Engineering")]),_:1},8,["disabled"]),e(d,{value:"Postgraduate Diploma - NE - Network Engineering",disabled:t.value},{default:a(()=>[l("Postgraduate Diploma - NE - Network Engineering")]),_:1},8,["disabled"]),e(d,{value:"Masters - SE - Software Engineering",disabled:t.value},{default:a(()=>[l("Masters - SE - Software Engineering")]),_:1},8,["disabled"]),e(d,{value:"Masters - NE - Network Engineering",disabled:t.value},{default:a(()=>[l("Masters - NE - Network Engineering")]),_:1},8,["disabled"]),e(d,{value:"Masters - Database or Data Analytics",disabled:t.value},{default:a(()=>[l("Masters - Database or Data Analytics")]),_:1},8,["disabled"]),e(d,{value:"Masters - BA or Project Management",disabled:t.value},{default:a(()=>[l("Masters - BA or Project Management")]),_:1},8,["disabled"])]),_:1},8,["modelValue"]),S(e(w,{modelValue:_.value,"onUpdate:modelValue":o[8]||(o[8]=n=>_.value=n),clearable:""},null,8,["modelValue"]),[[k,b.value]])]),_:1})]),_:1}),e(s,null,{default:a(()=>[e(f,{type:"primary"},{default:a(()=>[l("Submit")]),_:1}),e(f,{type:"primary",onClick:o[9]||(o[9]=n=>D(c.value))},{default:a(()=>[l(U(c.value),1)]),_:1}),e(f,{type:"primary",onClick:A},{default:a(()=>[l("Sign Out")]),_:1})]),_:1})]),_:1},8,["model","label-position"])])}}}),$=z(q,[["__scopeId","data-v-7a030c7b"]]);export{$ as default};