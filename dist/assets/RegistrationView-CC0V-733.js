import{_ as x}from"./Industry Internship System Logo-DqGK1Jny.js";import{f as v,g as p,h as P,o as q,c as I,b as e,w as o,r,u as c,d as i,a as u,m as R,k as U,p as k,e as S,_ as T}from"./index-DrrwGA3W.js";const z=n=>(k("data-v-06f8c5f1"),n=n(),S(),n),C={class:"container"},B=z(()=>u("div",{style:{display:"flex","justify-content":"center"}},[u("img",{src:x,class:"industry-internship-system-logo"})],-1)),E={style:{"text-align":"center"}},L=v({__name:"RegistrationView",setup(n){const a=p({email:"",username:"",password:"",confirmedPassword:"",role:""}),_=p({email:[{required:!0,message:"This field is required",trigger:"blur"},{type:"email",message:"Invalid email address",trigger:"blur"}],password:[{required:!0,message:"This field is requried",trigger:"blur"},{min:8,message:"Password must be at least 8 characters long and contain a mix of uppercase, lowercase, and special characters",trigger:"blur"}],confirmedPassword:[{required:!0,message:"This field is required",trigger:"blur"},{validator:(g,s,t)=>{s!==a.password&&t(new Error("Passwords do not match"))},trigger:"blur"}],role:[{required:!0,message:"This field is requried",trigger:"blur"}]}),f=P("top");return(g,s)=>{const t=r("el-input"),d=r("el-form-item"),m=r("el-radio"),w=r("el-radio-group"),b=r("el-button"),V=r("RouterLink"),y=r("el-text"),h=r("el-form");return q(),I("div",C,[e(h,{model:a,rules:_,"label-width":"auto",class:"form","label-position":f.value,"status-icon":""},{default:o(()=>[B,e(d,{label:"Email",prop:"email"},{default:o(()=>[e(t,{modelValue:a.email,"onUpdate:modelValue":s[0]||(s[0]=l=>a.email=l),"prefix-icon":c(R),clearable:"",placeholder:"id@student.wintec.ac.nz"},null,8,["modelValue","prefix-icon"])]),_:1}),e(d,{label:"Username"},{default:o(()=>[e(t,{modelValue:a.username,"onUpdate:modelValue":s[1]||(s[1]=l=>a.username=l),"prefix-icon":c(U),clearable:"",placeholder:"Wintec username"},null,8,["modelValue","prefix-icon"])]),_:1}),e(d,{label:"Password",prop:"password"},{default:o(()=>[e(t,{modelValue:a.password,"onUpdate:modelValue":s[2]||(s[2]=l=>a.password=l),type:"password",clearable:"",placeholder:"******","show-password":""},null,8,["modelValue"])]),_:1}),e(d,{label:"Confim Password",prop:"confirmedPassword"},{default:o(()=>[e(t,{modelValue:a.confirmedPassword,"onUpdate:modelValue":s[3]||(s[3]=l=>a.confirmedPassword=l),type:"password",clearable:"",placeholder:"******","show-password":""},null,8,["modelValue"])]),_:1}),e(d,{label:"Role",prop:"role"},{default:o(()=>[e(w,{modelValue:a.role,"onUpdate:modelValue":s[4]||(s[4]=l=>a.role=l)},{default:o(()=>[e(m,{value:"Student",size:"large",class:"radio"},{default:o(()=>[i("Student")]),_:1}),e(m,{value:"Industry",size:"large",class:"radio"},{default:o(()=>[i("Industry")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(b,{type:"primary",style:{margin:"0 auto"}},{default:o(()=>[i("Register")]),_:1})]),_:1}),u("div",E,[e(y,{size:"small"},{default:o(()=>[i("Already have an account? "),e(V,{to:"/login"},{default:o(()=>[i("Log in")]),_:1})]),_:1})])]),_:1},8,["model","rules","label-position"])])}}}),W=T(L,[["__scopeId","data-v-06f8c5f1"]]);export{W as default};