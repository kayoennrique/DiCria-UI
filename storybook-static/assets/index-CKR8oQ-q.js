import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as w}from"./index-RYns6xqu.js";import{d as t,Y as I}from"./styled-components.browser.esm-DDAiM4bh.js";const R=t.span`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-left: ${o=>o.paddingleft||"3rem"};
  }

  svg {
    position: absolute;
    left: 0.76rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`,Y=t.input`
  background-color: ${o=>o.backgroundcolor||"#ececec"}; 
  color: ${o=>o.color||"#000"};  
  border-radius: ${o=>o.borderradius||"0.5rem"}; 
  padding: ${o=>o.padding||"0.5rem 1rem"}; 
  padding-left: 4rem; 
  border: ${o=>o.border||"1px solid transparent"};
  width: ${o=>o.width||"13rem"}; 
  outline: ${o=>o.outlineinput||"1px solid #020617"}; 

  &::placeholder {
    color: ${o=>o.placeholdercolor}; 
    margin-left: 0.5rem;
  }
  &:focus {
    outline: ${o=>o.outlinefocus||"2px solid #2774b3"}; 
  }
  &:disabled {
    background-color: ${o=>o.disabledbgcolor||"#555"};
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);    
    left: 0.605rem; 
  }
`,v=w.forwardRef(({color:o,placeholder:d,placeholdercolor:n,backgroundcolor:i,borderradius:l,padding:a,border:s,width:c,outlinefocus:p,outlineinput:u,paddingleft:m,disabledbgcolor:b,icon:e,value:f,onChange:g,id:h,type:x,...$},j)=>r.jsx(I,{shouldForwardProp:k=>!["backgroundcolor","borderradius","disabledbgcolor","placeholdercolor","width","color"].includes(k),children:r.jsxs(R,{paddingleft:m,children:[e&&r.jsx("span",{children:e}),r.jsx(Y,{value:f,onChange:g,id:h,type:x,color:o,backgroundcolor:i,borderradius:l,padding:a,border:s,width:c,outlineinput:u,outlinefocus:p,disabledbgcolor:b,placeholder:d,placeholdercolor:n,...$,ref:j})]})}));v.__docgenInfo={description:"",methods:[],displayName:"Input"};export{v as I};
