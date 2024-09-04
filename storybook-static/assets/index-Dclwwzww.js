import{j as s}from"./jsx-runtime-DEdD30eg.js";import{d as a}from"./styled-components.browser.esm-DDAiM4bh.js";const d=a.a`
  color: ${e=>e.textcolorlink};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  text-decoration: none;
  font-family: Poppins, Helvetica, "sans-serif";
  letter-spacing: 1px;

  &:hover {
    color: ${e=>e.texthoverlink};
    text-decoration: ${({disabled:e})=>e?"none":"underline"};
  }

  &[aria-disabled='true'] {
    color: #888;
    cursor: not-allowed;
    pointer-events: none;
    text-decoration: none;
  }
`,c=({children:e,href:t,disabled:o,textcolorlink:r,texthoverlink:n,...i})=>s.jsx(d,{href:o?void 0:t,"aria-disabled":o,disabled:o,textcolorlink:r,texthoverlink:n,...i,children:e});c.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},textcolorlink:{required:!1,tsType:{name:"string"},description:""},texthoverlink:{required:!1,tsType:{name:"string"},description:""}}};export{c as L};
