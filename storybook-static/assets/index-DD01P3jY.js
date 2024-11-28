import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as w}from"./index-DJO9vBfz.js";import{d as i,Y as x}from"./styled-components.browser.esm-WJtJfqrr.js";const $=i.span`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-left: ${e=>e.paddingleft||"3rem"};
  }

  svg {
    position: absolute;
    left: 0.76rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`,I=i.input`
  background-color: ${e=>e.backgroundcolor||"#ececec"}; 
  color: ${e=>e.color||"#000"};  
  border-radius: ${e=>e.borderradius||"0.5rem"}; 
  padding: ${e=>e.padding||"0.5rem 1rem"}; 
  padding-left: 4rem; 
  border: ${e=>e.border||"1px solid transparent"};
  width: ${e=>e.width||"13rem"}; 
  outline: ${e=>e.outlineinput||"1px solid #020617"}; 

  &::placeholder {
    color: ${e=>e.placeholdercolor}; 
    margin-left: 0.5rem;
  }
  &:focus {
    outline: ${e=>e.outlinefocus||"2px solid #2774b3"}; 
  }
  &:disabled {
    background-color: ${e=>e.disabledbgcolor||"#555"};
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);    
    left: 0.605rem; 
  }
`,k=w.forwardRef(({color:e,placeholder:t,placeholdercolor:s,backgroundcolor:o,borderradius:a,padding:d,border:l,width:p,outlinefocus:c,outlineinput:u,paddingleft:m,disabledbgcolor:g,icon:n,value:f,onChange:b,id:y,type:T,...h},q)=>r.jsx(x,{shouldForwardProp:v=>!["backgroundcolor","borderradius","disabledbgcolor","placeholdercolor","width","color"].includes(v),children:r.jsxs($,{paddingleft:m,children:[n&&r.jsx("span",{children:n}),r.jsx(I,{backgroundcolor:o,disabledbgcolor:g,placeholdercolor:s,borderradius:a,padding:d,border:l,width:p,placeholder:t,color:e,outlineinput:u,outlinefocus:c,value:f,onChange:b,id:y,type:T,...h,ref:q})]})}));k.__docgenInfo={description:"",methods:[],displayName:"Input",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},placeholdercolor:{required:!1,tsType:{name:"string"},description:""},backgroundcolor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},paddingleft:{required:!1,tsType:{name:"string"},description:""},outlineinput:{required:!1,tsType:{name:"string"},description:""},outlinefocus:{required:!1,tsType:{name:"string"},description:""},disabledbgcolor:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | readonly string[] | number | undefined",elements:[{name:"string"},{name:"unknown"},{name:"number"},{name:"undefined"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""}}};export{k as I};
