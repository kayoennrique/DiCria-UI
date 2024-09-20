import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";import{d as i}from"./styled-components.browser.esm-DDAiM4bh.js";import{I as b,a as h}from"./index-ts0_E7E4.js";const w=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>e.bgcolor};
  width: 100%;
`,A=i.div`
  width: ${e=>e.width?e.width:"100%"};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  background: black;
`,v=i.div`
  background: #f9fafb;
  color: #374151;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  font-family: ${e=>e.fontfamily||"inherit"};
  cursor: pointer;

  &:hover {
    background: #efefef;
    transition: 0.5s linear;
    color: #000000;
  }
`,T=i.div`
  background: white;
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  font-weight: 100;
  font-size: 16px;
  font-family: ${e=>e.fontfamilycontent||"inherit"};
`,k=({data:e,multiple:c,activeIndex:o,width:d,fontfamily:f,fontfamilycontent:m,bgcolor:u,...p})=>{const[s,a]=l.useState([]),g=t=>{a(r=>c?r.includes(t)?r.filter(y=>y!==t):[...r,t]:r.includes(t)?[]:[t])};return l.useEffect(()=>{o!==void 0&&a([o])},[o]),n.jsx(w,{bgcolor:u,...p,children:e==null?void 0:e.map((t,r)=>n.jsxs(A,{width:d,children:[n.jsxs(v,{onClick:()=>g(r),fontfamily:f,children:[t.title,s.includes(r)?n.jsx(b,{}):n.jsx(h,{})]}),s.includes(r)&&n.jsx(T,{fontfamilycontent:m,children:t.children})]},r))})};k.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{\r
  id?: number;\r
  title: string;\r
  children: React.ReactNode;\r
  fontfamily?: string;\r
  fontfamilycontent?: string;\r
} & HTMLAttributes<HTMLDivElement>`,elements:[{name:"signature",type:"object",raw:`{\r
  id?: number;\r
  title: string;\r
  children: React.ReactNode;\r
  fontfamily?: string;\r
  fontfamilycontent?: string;\r
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"fontfamily",value:{name:"string",required:!1}},{key:"fontfamilycontent",value:{name:"string",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}]}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""},fontfamilycontent:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""}}};export{k as A};
