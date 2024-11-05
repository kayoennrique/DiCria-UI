import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{d as p}from"./styled-components.browser.esm-WJtJfqrr.js";const m=p.a`
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
`,u=({children:e,href:o,disabled:r,textcolorlink:t,texthoverlink:i,textdecorationhoverlink:n,fontfamily:s,borderadius:a,bgcolorbr:d,...c})=>l.jsx(m,{href:r?void 0:o,"aria-disabled":r,disabled:r,bgcolorbr:d,borderadius:a,fontfamily:s,textcolorlink:t,texthoverlink:i,textdecorationhoverlink:n,...c,children:e});u.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},textcolorlink:{required:!1,tsType:{name:"string"},description:""},texthoverlink:{required:!1,tsType:{name:"string"},description:""},textdecorationhoverlink:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""},bgcolorbr:{required:!1,tsType:{name:"string"},description:""},borderadius:{required:!1,tsType:{name:"string"},description:""}}};export{u as L};
