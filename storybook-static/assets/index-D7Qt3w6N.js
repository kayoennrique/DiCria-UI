import{j as i}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{d as n}from"./styled-components.browser.esm-DDAiM4bh.js";import{I as y,a as g}from"./index-ts0_E7E4.js";const h=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: white;
  width: 100%;
`,b=n.div`
  width: ${r=>r.width?r.width:"100%"};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  background: #f9fafb;
`,w=n.div`
  background: #f9fafb;
  color: #374151;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  font-family: ${r=>r.fontfamily||"inherit"}; // Corrigido para fontfamily
  cursor: pointer;

  &:hover {
    background: #efefef;
    transition: 0.5s linear;
    color: #000000;
  }
`,A=n.div`
  background: white;
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  font-weight: 100;
  font-size: 16px;
  font-family: ${r=>r.fontfamilycontent||"inherit"}; // Corrigido para fontfamilycontent
`,k=({data:r,multiple:c,activeIndex:o,width:l,fontfamily:f,fontfamilycontent:m})=>{const[a,s]=d.useState([]),p=t=>{s(e=>c?e.includes(t)?e.filter(u=>u!==t):[...e,t]:e.includes(t)?[]:[t])};return d.useEffect(()=>{o!==void 0&&s([o])},[o]),i.jsx(h,{children:r.map((t,e)=>i.jsxs(b,{width:l,children:[i.jsxs(w,{onClick:()=>p(e),fontfamily:f,children:[t.title,a.includes(e)?i.jsx(y,{}):i.jsx(g,{})]}),a.includes(e)&&i.jsx(A,{fontfamilycontent:m,children:t.children})]},e))})};k.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id?: number;\r
  title: string;\r
  children: React.ReactNode;\r
  fontfamily?: string;\r
  fontfamilycontent?: string;\r
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"fontfamily",value:{name:"string",required:!1}},{key:"fontfamilycontent",value:{name:"string",required:!1}}]}}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""},fontfamilycontent:{required:!1,tsType:{name:"string"},description:""}}};export{k as A};
