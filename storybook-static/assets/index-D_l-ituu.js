import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as C}from"./index-DJO9vBfz.js";import{d as r,Y as R}from"./styled-components.browser.esm-WJtJfqrr.js";import{F}from"./index-CcZkhzg9.js";const N=r.div`
  display: ${e=>e.display}; 
  justify-content: center; 
  align-items: center; 
  font-weight: ${e=>e.fontweight};
  font-size: ${e=>e.fontsize};
  font-family: ${e=>e.fontfamily};
  border-radius: .5rem;
  border: 1px solid ${e=>e.active?e.activeoutlinecolor:e.outlinecolor};
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: ${e=>e.width};
  height: ${e=>e.height};
  padding: ${e=>e.padding};
  background-color: ${e=>e.active?e.activebgcolor:e.bgcolor};
  color: ${e=>e.active?e.activetextcolor:e.textcolor};

  &:hover {
    background-color: ${e=>e.active?e.bgcolor:e.activebgcolor};
    color: ${e=>e.active?e.textcolor:e.activetextcolor};
    border: 1px solid ${e=>e.active?e.outlinecolor:e.activeoutlinecolor};
  }
  
  .remove-button {
    margin-left: ${e=>e.marginleftremovebutton};
   
  }
  &:hover { 
    background-color: ${e=>e.hoverbgcolorremovebutton};
}
  `;r.span`
  display: flex;
  font-size: 13px;
  margin-left: ${e=>e.marginleftremovebutton||"auto"};
  margin-right: .25rem;
  
  &:hover {    
    background-color: ${e=>e.hoverbgcolorremovebutton||"red"};
    color: white;
}
`;const E=r.span`
  cursor: pointer;
`,S=({text:e,active:n=!1,activebgcolor:a,hoverbgcolor:s,bgcolor:c,textcolor:l,activetextcolor:d,outlinecolor:u,activeoutlinecolor:g,display:m,width:f,height:p,padding:v,fontsize:y,fontweight:h,icon:i,fontfamily:b,removable:T=!1,onRemove:q,marginleftremovebutton:x,hoverbgcolorremovebutton:$,...w})=>{const[o,j]=C.useState(n),k=()=>{j(!o)};return t.jsx(R,{shouldForwardProp:z=>!["bgcolor","activebgcolor","hoverbgcolor","textcolor","textactivecolor","outlinecolor","activeoutlinecolor","display","width","height","padding","fontsize","fontweight"].includes(z),children:t.jsxs(N,{...w,bgcolor:c,activebgcolor:a,hoverbgcolor:s,textcolor:l,activetextcolor:d,outlinecolor:u,activeoutlinecolor:g,onClick:k,active:o,display:m,width:f,height:p,padding:v,fontsize:y,fontweight:h,fontfamily:b,text:e,children:[t.jsxs("span",{children:[i&&t.jsx("span",{children:i}),e]}),T&&t.jsx(E,{onClick:q,className:"remove-button",marginleftremovebutton:x,hoverbgcolorremovebutton:$,children:t.jsx(F,{})})]})})};S.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},text:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgcolor:{required:!1,tsType:{name:"string"},description:""},activebgcolor:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},activetextcolor:{required:!1,tsType:{name:"string"},description:""},hoverbgcolor:{required:!1,tsType:{name:"string"},description:""},outlinecolor:{required:!1,tsType:{name:"string"},description:""},activeoutlinecolor:{required:!1,tsType:{name:"string"},description:""},display:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},fontsize:{required:!1,tsType:{name:"string"},description:""},fontweight:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},removable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},marginleftremovebutton:{required:!1,tsType:{name:"string"},description:""},hoverbgcolorremovebutton:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""}}};export{S as T};
