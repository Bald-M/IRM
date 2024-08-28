import{d as k,a as t,b as s,o as r,c as u,f as i,e as a,w as n,F as c,A as v,u as M,g as z,B as x,_ as R}from"./index-Dg9tyo6E.js";const P={class:"container"},U={class:"select-section"},D={class:"table-section mt-2"},B={class:"pagination-section mt-3"},O=k({__name:"StudentsListView",setup(G){const g=t(""),m=t(""),b=t(""),_=t(""),f=t(""),A=t(10),S=t("default"),y=t(!0),E=t(!1),V=[{value:"Bachelor",label:"Bachelor"},{value:"Postgraduate",label:"Postgraduate"},{value:"Master",label:"Master"}],h=[{value:"Software Engineering",label:"Software Engineering"},{value:"Networking Engineering",label:"Networing Engineering"},{value:"Database or Data Analytics",label:"Database or Data Analytics"}],I=[{value:"Available",label:"Available"},{value:"Ready for IRM Interview",label:"Ready for IRM Interview"},{value:"IRM Interview Scheduled",label:"IRM Interview Scheduled"}],N=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}];return(H,l)=>{const d=s("el-option"),p=s("el-select"),L=s("el-input"),o=s("el-table-column"),w=s("el-button"),T=s("el-table"),C=s("el-pagination");return r(),u("div",P,[i("div",U,[i("div",null,[a(p,{modelValue:g.value,"onUpdate:modelValue":l[0]||(l[0]=e=>g.value=e),placeholder:"Programme",size:"large",class:"select"},{default:n(()=>[(r(),u(c,null,v(V,e=>a(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a(p,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value=e),placeholder:"Specialisation",size:"large",class:"select"},{default:n(()=>[(r(),u(c,null,v(h,e=>a(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a(p,{modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]=e=>b.value=e),placeholder:"Internship Status",size:"large",class:"select"},{default:n(()=>[(r(),u(c,null,v(I,e=>a(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),i("div",null,[a(L,{modelValue:_.value,"onUpdate:modelValue":l[3]||(l[3]=e=>_.value=e),size:"large",placeholder:"Type something","prefix-icon":M(x)},null,8,["modelValue","prefix-icon"])])]),i("div",D,[a(T,{data:N,style:{width:"100%"}},{default:n(()=>[a(o,{fixed:"",prop:"date",label:"NAME",width:"120"}),a(o,{prop:"name",label:"STUDENT ID",width:"120"}),a(o,{prop:"state",label:"SPECIALIZATION",width:"120"}),a(o,{prop:"city",label:"PROGRAMME",width:"120"}),a(o,{prop:"address",label:"EMAIL",width:"120"}),a(o,{prop:"zip",label:"PHONE NUMBER",width:"120"}),a(o,{prop:"zip",label:"STATUS",width:"120"}),a(o,{fixed:"right",label:"OPERATIONS","min-width":"120"},{default:n(()=>[a(w,{link:"",type:"primary",size:"large"},{default:n(()=>[z(" DELETE ")]),_:1}),a(w,{link:"",type:"primary",size:"large"},{default:n(()=>[z("Edit")]),_:1})]),_:1})]),_:1})]),i("div",B,[a(C,{"current-page":f.value,"onUpdate:currentPage":l[4]||(l[4]=e=>f.value=e),"page-size":A.value,"onUpdate:pageSize":l[5]||(l[5]=e=>A.value=e),"page-sizes":[100,200,300,400],size:S.value,disabled:E.value,background:y.value,layout:"total, sizes, prev, pager, next, jumper",total:400},null,8,["current-page","page-size","size","disabled","background"])])])}}}),j=R(O,[["__scopeId","data-v-9a3d2069"]]);export{j as default};