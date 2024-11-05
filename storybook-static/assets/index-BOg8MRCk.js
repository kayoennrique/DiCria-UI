import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as f}from"./index-DJO9vBfz.js";import{d as s}from"./styled-components.browser.esm-WJtJfqrr.js";import{T as u}from"./index-BByzK5B4.js";const x=s.div`
  display: flex;
  align-items: center;
`,y=s.input`
  width: ${({size:e})=>e||"18px"};
  height: ${({size:e})=>e||"18px"};
  accent-color: ${e=>e.backgroundcolor};
  border-radius: ${e=>e.borderradius};
`,o=f.forwardRef(({id:e,size:t,borderradius:i,children:a,fontsize:d,fontcolor:n,disabled:c=!1,backgroundcolor:p,...l},m)=>r.jsxs(x,{children:[r.jsx(y,{size:t,borderradius:i,ref:m,id:e,backgroundcolor:p,type:"checkbox",disabled:c,...l}),r.jsx(u,{as:"label",color:n,size:d,htmlFor:e,children:a})]}));o.displayName="CheckBox";o.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{backgroundcolor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},fontsize:{required:!1,tsType:{name:"string"},description:""},fontcolor:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{o as C};
