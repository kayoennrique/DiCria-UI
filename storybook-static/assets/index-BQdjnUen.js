import{j as d}from"./jsx-runtime-DEdD30eg.js";import{d as l}from"./styled-components.browser.esm-DDAiM4bh.js";const c=l.a`
  color: ${e=>e.textcolorlink};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  text-decoration: none;
  font-family: ${e=>e.fontfamily};
  letter-spacing: 1px;

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
`,p=({children:e,href:o,disabled:t,textcolorlink:r,texthoverlink:n,textdecorationhoverlink:i,fontfamily:a,...s})=>d.jsx(c,{href:t?void 0:o,"aria-disabled":t,disabled:t,fontfamily:a,textcolorlink:r,texthoverlink:n,textdecorationhoverlink:i,...s,children:e});p.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},textcolorlink:{required:!1,tsType:{name:"string"},description:""},texthoverlink:{required:!1,tsType:{name:"string"},description:""},textdecorationhoverlink:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""}}};export{p as L};
