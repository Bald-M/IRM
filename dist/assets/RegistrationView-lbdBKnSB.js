import{_ as h}from"./Industry Internship System Logo-DqGK1Jny.js";import{d as v,r as m,a as x,b as r,o as P,c as q,e,w as o,g as d,u as I,f as p,n as C,p as R,m as S,_ as T}from"./index-Dg9tyo6E.js";const k=i=>(R("data-v-76d6d80c"),i=i(),S(),i),z={class:"container"},U=k(()=>p("div",{style:{display:"flex","justify-content":"center"}},[p("img",{src:h,class:"industry-internship-system-logo"})],-1)),B={style:{"text-align":"center"}},E=v({__name:"RegistrationView",setup(i){const a=m({email:"",password:"",confirmedPassword:"",role:""}),c=m({email:[{required:!0,message:"This field is required",trigger:"blur"},{type:"email",message:"Invalid email address",trigger:"blur"}],password:[{required:!0,message:"This field is requried",trigger:"blur"},{min:8,message:"Password must be at least 8 characters long and contain a mix of uppercase, lowercase, and special characters",trigger:"blur"}],confirmedPassword:[{required:!0,message:"This field is required",trigger:"blur"},{validator:(f,s,n)=>{s!==a.password&&n(new Error("Passwords do not match"))},trigger:"blur"}],role:[{required:!0,message:"This field is requried",trigger:"blur"}]}),_=x("top");return(f,s)=>{const n=r("el-radio"),g=r("el-radio-group"),l=r("el-form-item"),u=r("el-input"),w=r("el-button"),b=r("RouterLink"),V=r("el-text"),y=r("el-form");return P(),q("div",z,[e(y,{model:a,rules:c,"label-width":"auto",class:"form","label-position":_.value,"status-icon":""},{default:o(()=>[U,e(l,{label:"Role",prop:"role",class:"mt-2"},{default:o(()=>[e(g,{modelValue:a.role,"onUpdate:modelValue":s[0]||(s[0]=t=>a.role=t)},{default:o(()=>[e(n,{value:"Student",size:"large",class:"radio"},{default:o(()=>[d("Student")]),_:1}),e(n,{value:"Industry",size:"large",class:"radio"},{default:o(()=>[d("Industry")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(l,{label:"Email",prop:"email"},{default:o(()=>[e(u,{modelValue:a.email,"onUpdate:modelValue":s[1]||(s[1]=t=>a.email=t),"prefix-icon":I(C),clearable:"",placeholder:"id@student.wintec.ac.nz"},null,8,["modelValue","prefix-icon"])]),_:1}),e(l,{label:"Password",prop:"password"},{default:o(()=>[e(u,{modelValue:a.password,"onUpdate:modelValue":s[2]||(s[2]=t=>a.password=t),type:"password",clearable:"",placeholder:"******","show-password":""},null,8,["modelValue"])]),_:1}),e(l,{label:"Confim Password",prop:"confirmedPassword"},{default:o(()=>[e(u,{modelValue:a.confirmedPassword,"onUpdate:modelValue":s[3]||(s[3]=t=>a.confirmedPassword=t),type:"password",clearable:"",placeholder:"******","show-password":""},null,8,["modelValue"])]),_:1}),e(l,null,{default:o(()=>[e(w,{type:"primary",style:{margin:"0 auto"}},{default:o(()=>[d("Create Account")]),_:1})]),_:1}),p("div",B,[e(V,{size:"small"},{default:o(()=>[d("Already have an account? "),e(b,{to:"/login"},{default:o(()=>[d("Log in")]),_:1})]),_:1})])]),_:1},8,["model","rules","label-position"])])}}}),j=T(E,[["__scopeId","data-v-76d6d80c"]]);export{j as default};
