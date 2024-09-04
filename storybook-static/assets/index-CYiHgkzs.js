import{j as a}from"./jsx-runtime-DEdD30eg.js";import{d}from"./styled-components.browser.esm-DDAiM4bh.js";const c=d.a`
  color: ${e=>e.textcolorlink};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  text-decoration: none;
  font-family: Poppins, Helvetica, "sans-serif";
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
`,l=({children:e,href:o,disabled:t,textcolorlink:r,texthoverlink:n,textdecorationhoverlink:i,...s})=>a.jsx(c,{href:t?void 0:o,"aria-disabled":t,disabled:t,textcolorlink:r,texthoverlink:n,textdecorationhoverlink:i,...s,children:e});l.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},textcolorlink:{required:!1,tsType:{name:"string"},description:""},texthoverlink:{required:!1,tsType:{name:"string"},description:""},textdecorationhoverlink:{required:!1,tsType:{name:"string"},description:""}}};export{l as L};
