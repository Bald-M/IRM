import{_ as b}from"./Industry Internship System Logo-DqGK1Jny.js";import{d as v,r as p,a as V,b as r,o as U,c as E,e,w as t,f as m,g as d,k as O,p as I,l as T,_ as N}from"./index-BRMxl0QJ.js";const S=n=>(I("data-v-79e6bc60"),n=n(),T(),n),q={class:"container"},B=S(()=>m("div",{style:{display:"flex","justify-content":"center"}},[m("img",{src:b,class:"industry-internship-system-logo"})],-1)),C={style:{display:"flex","flex-flow":"row-reverse"}},L={style:{"text-align":"center"}},k=v({__name:"LoginView",setup(n){const _=O("$router"),a=p({emailOrUsername:"",password:""}),f=p({emailOrUsername:[{required:!0,message:"This field is required",trigger:"blur"},{validator:(h,s,o)=>{const l=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,i=/^[a-zA-Z0-9_]+$/;return s?l.test(s)||i.test(s)?o():o(new Error("Invalid email or username")):o(new Error("Please enter email or username"))},trigger:"blur"}],password:[{required:!0,message:"This field is requried",trigger:"blur"}]}),w=V("top"),g=()=>{localStorage.setItem("authToken","TESTJSONWEBTOKEN123"),_.push("/student/home")};return(h,s)=>{const o=r("el-input"),l=r("el-form-item"),i=r("RouterLink"),c=r("el-text"),x=r("el-button"),y=r("el-form");return U(),E("div",q,[e(y,{model:a,rules:f,"label-width":"auto",class:"form","label-position":w.value,"status-icon":""},{default:t(()=>[B,e(l,{label:"Email / Username",class:"mt-2",prop:"emailOrUsername"},{default:t(()=>[e(o,{modelValue:a.emailOrUsername,"onUpdate:modelValue":s[0]||(s[0]=u=>a.emailOrUsername=u),clearable:"",placeholder:"id@student.wintec.ac.nz"},null,8,["modelValue"])]),_:1}),e(l,{label:"Password",prop:"password"},{default:t(()=>[e(o,{modelValue:a.password,"onUpdate:modelValue":s[1]||(s[1]=u=>a.password=u),type:"password",clearable:"",placeholder:"******","show-password":""},null,8,["modelValue"])]),_:1}),m("div",C,[e(c,{size:"small"},{default:t(()=>[e(i,{to:"/reset-password/request",style:{color:"#6B7280"}},{default:t(()=>[d("Forgot password?")]),_:1})]),_:1})]),e(l,{class:"mt-1"},{default:t(()=>[e(x,{type:"primary",onClick:g},{default:t(()=>[d("Log In")]),_:1})]),_:1}),m("div",L,[e(c,{size:"small"},{default:t(()=>[d("No account yet? "),e(i,{to:"/registration"},{default:t(()=>[d("Create account ")]),_:1})]),_:1})])]),_:1},8,["model","rules","label-position"])])}}}),j=N(k,[["__scopeId","data-v-79e6bc60"]]);export{j as default};
