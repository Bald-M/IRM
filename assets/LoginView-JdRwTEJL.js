import{_ as b}from"./Industry Internship System Logo-DqGK1Jny.js";import{d as v,r as p,a as V,o as U,c as E,b as e,w as t,k as O,f as r,e as m,i as d,p as I,l as T,_ as N}from"./index-D2IkmHoD.js";const S=n=>(I("data-v-eb8fca3e"),n=n(),T(),n),B={class:"container"},C=S(()=>m("div",{style:{display:"flex","justify-content":"center"}},[m("img",{src:b,class:"industry-internship-system-logo"})],-1)),L={style:{display:"flex","flex-flow":"row-reverse"}},k={style:{"text-align":"center"}},q=v({__name:"LoginView",setup(n){const _=O("$router"),a=p({emailOrUsername:"",password:""}),f=p({emailOrUsername:[{required:!0,message:"This field is required",trigger:"blur"},{validator:(h,o,s)=>{const l=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,i=/^[a-zA-Z0-9_]+$/;return o?l.test(o)||i.test(o)?s():s(new Error("Invalid email or username")):s(new Error("Please enter email or username"))},trigger:"blur"}],password:[{required:!0,message:"This field is requried",trigger:"blur"}]}),w=V("top"),g=()=>{localStorage.setItem("authToken","TESTJSONWEBTOKEN123"),_.push("/student/home")};return(h,o)=>{const s=r("el-input"),l=r("el-form-item"),i=r("RouterLink"),c=r("el-text"),x=r("el-button"),y=r("el-form");return U(),E("div",B,[e(y,{model:a,rules:f,"label-width":"auto",class:"form","label-position":w.value,"status-icon":""},{default:t(()=>[C,e(l,{label:"Email / Username",class:"mt-2",prop:"emailOrUsername"},{default:t(()=>[e(s,{modelValue:a.emailOrUsername,"onUpdate:modelValue":o[0]||(o[0]=u=>a.emailOrUsername=u),clearable:"",placeholder:"id@student.wintec.ac.nz"},null,8,["modelValue"])]),_:1}),e(l,{label:"Password",prop:"password"},{default:t(()=>[e(s,{modelValue:a.password,"onUpdate:modelValue":o[1]||(o[1]=u=>a.password=u),type:"password",clearable:"",placeholder:"******","show-password":""},null,8,["modelValue"])]),_:1}),m("div",L,[e(c,{size:"small"},{default:t(()=>[e(i,{to:"/",style:{color:"#6B7280"}},{default:t(()=>[d("Forgot password?")]),_:1})]),_:1})]),e(l,{class:"mt-1"},{default:t(()=>[e(x,{type:"primary",onClick:g},{default:t(()=>[d("Log In")]),_:1})]),_:1}),m("div",k,[e(c,{size:"small"},{default:t(()=>[d("No account yet? "),e(i,{to:"/registration"},{default:t(()=>[d("Create account ")]),_:1})]),_:1})])]),_:1},8,["model","rules","label-position"])])}}}),j=N(q,[["__scopeId","data-v-eb8fca3e"]]);export{j as default};