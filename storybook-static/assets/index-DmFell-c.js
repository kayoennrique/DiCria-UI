import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{d as i}from"./styled-components.browser.esm-DDAiM4bh.js";import{I as j,a as R}from"./index-ts0_E7E4.js";const H=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>e.bgcolor};
  width: 100%;
`,z=i.div`
  width: ${e=>e.width};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
`,E=i.div`
  background-color: ${e=>e.bgcolorheader};
  color: ${e=>e.textcolorheader};
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  font-size: ${e=>e.fontsizeheader};
  font-weight: ${e=>e.fontweightheader};
  font-family: ${e=>e.fontfamilyheader};
  cursor: pointer;

  &:hover {
    background: ${e=>e.bgcolorheaderhover};
    transition: 0.5s linear;
    color: ${e=>e.textcolorheaderhover};
  }
`,L=i.div`
  background: ${e=>e.bgcolorcontent};
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  font-weight: ${e=>e.fontweightcontent};
  font-size: ${e=>e.fontsizecontent};
  font-family: ${e=>e.fontfamilycontent};
  color: ${e=>e.textcolorcontent};
`,M=({data:e,multiple:d,activeIndex:o,width:l,fontfamilyheader:f,fontfamilycontent:m,bgcolor:p,bgcolorheader:u,textcolorheader:g,bgcolorheaderhover:y,textcolorheaderhover:h,bgcolorcontent:b,fontsizecontent:T,fontsizeheader:q,fontweightheader:v,fontweightcontent:w,textcolorcontent:A,...$})=>{const[s,a]=c.useState([]),x=t=>{a(r=>d?r.includes(t)?r.filter(k=>k!==t):[...r,t]:r.includes(t)?[]:[t])};return c.useEffect(()=>{o!==void 0&&a([o])},[o]),n.jsx(H,{bgcolor:p,...$,children:e==null?void 0:e.map((t,r)=>n.jsxs(z,{width:l,children:[n.jsxs(E,{onClick:()=>x(r),fontfamilyheader:f,bgcolorheader:u,textcolorheader:g,bgcolorheaderhover:y,textcolorheaderhover:h,fontsizeheader:q,fontweightheader:v,children:[t.title,s.includes(r)?n.jsx(j,{}):n.jsx(R,{})]}),s.includes(r)&&n.jsx(L,{fontfamilycontent:m,bgcolorcontent:b,fontsizecontent:T,fontweightcontent:w,textcolorcontent:A,children:t.children})]},r))})};M.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{\r
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"fontfamily",value:{name:"string",required:!1}},{key:"fontfamilycontent",value:{name:"string",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}]}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"string"},description:""},fontfamilyheader:{required:!1,tsType:{name:"string"},description:""},fontfamilycontent:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},bgcolorheader:{required:!1,tsType:{name:"string"},description:""},textcolorheader:{required:!1,tsType:{name:"string"},description:""},bgcolorheaderhover:{required:!1,tsType:{name:"string"},description:""},textcolorheaderhover:{required:!1,tsType:{name:"string"},description:""},textcolorcontent:{required:!1,tsType:{name:"string"},description:""},bgcolorcontent:{required:!1,tsType:{name:"string"},description:""},fontsizecontent:{required:!1,tsType:{name:"string"},description:""},fontsizeheader:{required:!1,tsType:{name:"string"},description:""},fontweightheader:{required:!1,tsType:{name:"string"},description:""},fontweightcontent:{required:!1,tsType:{name:"string"},description:""}}};export{M as A};