import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{R as f,r as b}from"./index-DJO9vBfz.js";import{d as w,Y as C}from"./styled-components.browser.esm-WJtJfqrr.js";const y=w.input`
  width: ${e=>e.width||"50px"};
  height: ${e=>e.height||"50px"};
  padding: ${e=>e.padding||"0"};
  border: ${e=>e.border||"none"};
  cursor: pointer;
  border-radius: ${e=>e.borderradius||"50%"};
  appearance: none;
  background-color: ${e=>e.backgroundcolor||"transparent"};

  &::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: inherit;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: inherit;
  }
`,T=f.forwardRef(({initialColor:e="#000",onChange:t,width:o,height:a,backgroundcolor:i,border:s,borderradius:d,padding:p,...c},u)=>{const[l,g]=b.useState(e),m=r=>{const h=r.target.value;g(h),t&&t(r)};return n.jsx(C,{shouldForwardProp:r=>!["width","height","backgroundcolor","border","borderradius","padding"].includes(r),children:n.jsx(y,{type:"color",value:l,onChange:m,width:o,height:a,backgroundcolor:i,border:s,borderradius:d,padding:p,ref:u,...c})})});T.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{initialColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#000"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},backgroundcolor:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""}}};export{T as C};
