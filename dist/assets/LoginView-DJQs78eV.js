import{_ as g}from"./Industry Internship System Logo-lRtv42H_.js";import{d as x,r as V,a as h,o as y,c as v,e,w as o,k,f as t,u as N,g as i,b as c,m as I,p as S,l as E,_ as L}from"./index-D93mnq8a.js";const T=a=>(S("data-v-29b71123"),a=a(),E(),a),B={class:"container"},C=T(()=>c("div",{style:{display:"flex","justify-content":"center"}},[c("img",{src:g,class:"industry-internship-system-logo"})],-1)),R={style:{"text-align":"center"}},j=x({__name:"LoginView",setup(a){const p=k("$router"),s=V({email:"",password:""}),m=h("top"),_=()=>{localStorage.setItem("authToken","TESTJSONWEBTOKEN123"),p.push("/student/home")};return(z,l)=>{const d=t("el-input"),n=t("el-form-item"),u=t("el-button"),f=t("RouterLink"),w=t("el-text"),b=t("el-form");return y(),v("div",B,[e(b,{model:s,"label-width":"auto",class:"form","label-position":m.value},{default:o(()=>[C,e(n,{label:"Email",class:"mt-2"},{default:o(()=>[e(d,{modelValue:s.email,"onUpdate:modelValue":l[0]||(l[0]=r=>s.email=r),"prefix-icon":N(I),clearable:"",placeholder:"id@student.wintec.ac.nz"},null,8,["modelValue","prefix-icon"])]),_:1}),e(n,{label:"Password"},{default:o(()=>[e(d,{modelValue:s.password,"onUpdate:modelValue":l[1]||(l[1]=r=>s.password=r),type:"password",clearable:"",placeholder:"******"},null,8,["modelValue"])]),_:1}),e(n,null,{default:o(()=>[e(u,{type:"primary",onClick:_},{default:o(()=>[i("Log In")]),_:1})]),_:1}),c("div",R,[e(w,{size:"small"},{default:o(()=>[i("No account? "),e(f,{to:"/registration"},{default:o(()=>[i("Register Now ")]),_:1})]),_:1})])]),_:1},8,["model","label-position"])])}}}),J=L(j,[["__scopeId","data-v-29b71123"]]);export{J as default};
