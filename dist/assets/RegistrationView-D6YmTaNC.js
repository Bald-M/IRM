import{_ as x}from"./Industry Internship System Logo-DqGK1Jny.js";import{f as y,g as I,h as _,o as R,c as U,b as e,w as l,r as s,u as c,d,a as i,m as h,k,p as S,e as z,_ as C}from"./index-BLqJglMk.js";const B=r=>(S("data-v-d9bca666"),r=r(),z(),r),L={class:"container"},N=B(()=>i("div",{style:{display:"flex","justify-content":"center"}},[i("img",{src:x,class:"industry-internship-system-logo"})],-1)),E={style:{"text-align":"center"}},P=y({__name:"RegistrationView",setup(r){const a=I({email:"",username:"",password:""}),f=_("top"),m=_();return(j,o)=>{const u=s("el-input"),n=s("el-form-item"),p=s("el-radio"),V=s("el-radio-group"),b=s("el-button"),g=s("RouterLink"),w=s("el-text"),v=s("el-form");return R(),U("div",L,[e(v,{model:a,"label-width":"auto",class:"form","label-position":f.value},{default:l(()=>[N,e(n,{label:"Email"},{default:l(()=>[e(u,{modelValue:a.email,"onUpdate:modelValue":o[0]||(o[0]=t=>a.email=t),"prefix-icon":c(h),clearable:"",placeholder:"id@student.wintec.ac.nz"},null,8,["modelValue","prefix-icon"])]),_:1}),e(n,{label:"Username"},{default:l(()=>[e(u,{modelValue:a.username,"onUpdate:modelValue":o[1]||(o[1]=t=>a.username=t),"prefix-icon":c(k),clearable:"",placeholder:"Wintec username"},null,8,["modelValue","prefix-icon"])]),_:1}),e(n,{label:"Password"},{default:l(()=>[e(u,{modelValue:a.password,"onUpdate:modelValue":o[2]||(o[2]=t=>a.password=t),clearable:"",placeholder:"******"},null,8,["modelValue"])]),_:1}),e(n,{label:"Confim Password"},{default:l(()=>[e(u,{modelValue:a.password,"onUpdate:modelValue":o[3]||(o[3]=t=>a.password=t),clearable:"",placeholder:"******"},null,8,["modelValue"])]),_:1}),e(n,{label:"Role"},{default:l(()=>[e(V,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=t=>m.value=t)},{default:l(()=>[e(p,{value:"Student",size:"large",class:"radio"},{default:l(()=>[d("Student")]),_:1}),e(p,{value:"Industry",size:"large",class:"radio"},{default:l(()=>[d("Industry")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,null,{default:l(()=>[e(b,{type:"primary",style:{margin:"0 auto"}},{default:l(()=>[d("Register")]),_:1})]),_:1}),i("div",E,[e(w,{size:"small"},{default:l(()=>[d("Already have an account? "),e(g,{to:"/login"},{default:l(()=>[d("Log in")]),_:1})]),_:1})])]),_:1},8,["model","label-position"])])}}}),W=C(P,[["__scopeId","data-v-d9bca666"]]);export{W as default};
