import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as z}from"./index-RYns6xqu.js";import{d as r,Y as C}from"./styled-components.browser.esm-DDAiM4bh.js";import{F as R}from"./index-BFmb1hA7.js";const F=r.div`
  display: ${e=>e.display}; 
  justify-content: center; 
  align-items: center; 
  font-weight: ${e=>e.fontweight};
  font-size: ${e=>e.fontsize};
  font-family: Poppins, Helvetica, "sans-serif";
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
`;const N=r.span`
  cursor: pointer;
`,E=({text:e,active:n=!1,activebgcolor:s,hoverbgcolor:a,bgcolor:c,textcolor:l,activetextcolor:d,outlinecolor:u,activeoutlinecolor:g,display:m,width:f,height:p,padding:v,fontsize:h,fontweight:b,icon:o,removable:y=!1,onRemove:T,marginleftremovebutton:x,hoverbgcolorremovebutton:q,...$})=>{const[i,w]=z.useState(n),j=()=>{w(!i)};return t.jsx(C,{shouldForwardProp:k=>!["bgcolor","activebgcolor","hoverbgcolor","textcolor","textactivecolor","outlinecolor","activeoutlinecolor","display","width","height","padding","fontsize","fontweight"].includes(k),children:t.jsxs(F,{...$,bgcolor:c,activebgcolor:s,hoverbgcolor:a,textcolor:l,activetextcolor:d,outlinecolor:u,activeoutlinecolor:g,onClick:j,active:i,display:m,width:f,height:p,padding:v,fontsize:h,fontweight:b,text:e,children:[t.jsxs("span",{children:[o&&t.jsx("span",{children:o}),e]}),y&&t.jsx(N,{onClick:T,className:"remove-button",marginleftremovebutton:x,hoverbgcolorremovebutton:q,children:t.jsx(R,{})})]})})};E.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},text:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgcolor:{required:!1,tsType:{name:"string"},description:""},activebgcolor:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},activetextcolor:{required:!1,tsType:{name:"string"},description:""},hoverbgcolor:{required:!1,tsType:{name:"string"},description:""},outlinecolor:{required:!1,tsType:{name:"string"},description:""},activeoutlinecolor:{required:!1,tsType:{name:"string"},description:""},display:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},fontsize:{required:!1,tsType:{name:"string"},description:""},fontweight:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},removable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},marginleftremovebutton:{required:!1,tsType:{name:"string"},description:""},hoverbgcolorremovebutton:{required:!1,tsType:{name:"string"},description:""}}};export{E as T};
