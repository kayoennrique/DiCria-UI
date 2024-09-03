import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as i}from"./styled-components.browser.esm-DDAiM4bh.js";const a=i.a`
  color: ${({disabled:e})=>e?"#888":"#0d6efd"};
  text-decoration: none;
  font-family: Poppins, Helvetica, "sans-serif";
  letter-spacing: 1px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  &:hover {
    text-decoration: ${({disabled:e})=>e?"none":"underline"};
    color: ${({disabled:e})=>e?"#fff":"#2774b3"};
  }

  &[aria-disabled='true'] {
    color: #888;
    cursor: not-allowed;
    pointer-events: none;
    text-decoration: none;
  }
`,s=({children:e,href:t,disabled:o,...r})=>n.jsx(a,{href:o?void 0:t,"aria-disabled":o,disabled:o,...r,children:e});s.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};export{s as L};
