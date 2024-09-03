import{j as o}from"./jsx-runtime-DEdD30eg.js";import{R as x}from"./index-RYns6xqu.js";import{d as r}from"./styled-components.browser.esm-DDAiM4bh.js";import{T as f}from"./index-CHCaRuU-.js";const h=r.div`
  display: flex;
  align-items: center;
`,u=r.input`
  width: ${({size:e})=>e||"18px"};
  height: ${({size:e})=>e||"18px"};
  accent-color: ${e=>e.backgroundcolor};
  border-radius: ${e=>e.borderradius};
`,a=x.forwardRef(({id:e,size:s,borderradius:t,children:c,fontsize:d,fontcolor:i,disabled:l=!1,backgroundcolor:p,...n},m)=>o.jsxs(h,{children:[o.jsx(u,{size:s,borderradius:t,ref:m,id:e,backgroundcolor:p,type:"checkbox",disabled:l,...n}),o.jsx(f,{as:"label",color:i,size:d,htmlFor:e,children:c})]}));a.displayName="CheckBox";a.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{a as C};
