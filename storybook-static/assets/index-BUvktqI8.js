import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as x}from"./index-DJO9vBfz.js";import{d as o,Y as D}from"./styled-components.browser.esm-WJtJfqrr.js";import{I as k}from"./index-CCnh4U-y.js";const n=o.span`
  position: relative;
  display: flex;
  align-items: center;
`,$=o(k)`
  background-color: ${e=>e.backgroundcolor||"#ececec"}; 
  color: ${e=>e.color||"#717171"};  
  border-radius: ${e=>e.borderradius||"0.5rem"}; 
  padding: ${e=>e.padding}; 
  border: ${e=>e.border||"1px solid transparent"};
  width: ${e=>e.width}; 
  
  &:focus {
    outline: ${e=>e.outlinefocus||"2px solid #2774b3"}; 
  }
  
  &:disabled {
    background-color: ${e=>e.disabledbgcolor||"#555"};
  }
`,j=({onChange:e,id:d,icon:i,backgroundcolor:a,disabledbgcolor:c,borderradius:l,padding:p,border:u,width:g,outlinefocus:m,placeholder:f,color:b,...y})=>{const[h,q]=x.useState(""),T=s=>{const t=s.target.value;q(t),e&&e(t)};return r.jsx(D,{shouldForwardProp:s=>!["backgroundcolor","disabledbgcolor","width","border","padding","borderradius","outlinefocus"].includes(s),children:r.jsxs(n,{children:[i&&r.jsx("span",{children:i}),r.jsx(n,{children:r.jsx($,{type:"date",value:h,onChange:T,id:d,backgroundcolor:a,color:b,disabledbgcolor:c,width:g,border:u,padding:p,borderradius:l,placeholder:f,outlinefocus:m,...y})})]})})};j.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},backgroundcolor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},disabledbgcolor:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedDate: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedDate"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},outlinefocus:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{j as D};
