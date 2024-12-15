import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{d as u,Y as f}from"./styled-components.browser.esm-WJtJfqrr.js";const m=u.a`
  color: ${e=>e.textcolorlink};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  text-decoration: none;
  font-family: ${e=>e.fontfamily};
  letter-spacing: 1px;
  border-radius: ${e=>e.borderadius};
  background-color: ${e=>e.bgcolorbr};

  &:hover {
    color: ${e=>e.texthoverlink};
    text-decoration: ${e=>e.textdecorationhoverlink};
  }

  &[aria-disabled='true'] {
    color: #888;
    cursor: not-allowed;
    pointer-events: none;
    text-decoration: none;
  }
`,x=({children:e,href:t,disabled:r,textcolorlink:i,texthoverlink:n,textdecorationhoverlink:s,fontfamily:a,borderadius:d,bgcolorbr:l,...c})=>o.jsx(f,{shouldForwardProp:p=>!["bgcolorbr","borderadius","fontfamily","textcolorlink","texthoverlink","textdecorationhoverlink"].includes(p),children:o.jsx(m,{href:r?void 0:t,"aria-disabled":r,disabled:r,bgcolorbr:l,borderadius:d,fontfamily:a,textcolorlink:i,texthoverlink:n,textdecorationhoverlink:s,...c,children:e})});x.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},textcolorlink:{required:!1,tsType:{name:"string"},description:""},texthoverlink:{required:!1,tsType:{name:"string"},description:""},textdecorationhoverlink:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""},bgcolorbr:{required:!1,tsType:{name:"string"},description:""},borderadius:{required:!1,tsType:{name:"string"},description:""}}};export{x as L};
