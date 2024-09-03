import{j as i}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{d as n}from"./styled-components.browser.esm-DDAiM4bh.js";import{I as f,a as m}from"./index-ts0_E7E4.js";const b=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: white;
  width: 100%;
`,g=n.div`
  width: ${t=>t.width?t.width:"100%"};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  background: #f9fafb;
`,h=n.div`
  background: #f9fafb;
  color: #374151;
  padding: 1.25rem;

  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  font-family: Poppins, Helvetica, "sans-serif";

  cursor: pointer;

  &:hover {
    background: #efefef;
    transition: 0.5s linear;
    color: #000000;
  }
`,w=n.div`
  background: white;
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  
  font-weight: 100;
  font-size: 16px;
  font-family: Poppins, Helvetica, "sans-serif"
`,y=({data:t,multiple:c,activeIndex:o,width:l})=>{const[s,a]=d.useState([]),p=r=>{a(e=>c?e.includes(r)?e.filter(u=>u!==r):[...e,r]:e.includes(r)?[]:[r])};return d.useEffect(()=>{o!==void 0&&a([o])},[o]),console.log(o),i.jsx(b,{children:t.map((r,e)=>i.jsxs(g,{width:l,children:[i.jsxs(h,{onClick:()=>p(e),children:[r.title,s.includes(e)?i.jsx(f,{}):i.jsx(m,{})]}),s.includes(e)&&i.jsx(w,{children:r.children})]},e))})};y.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id?: number;\r
  title: string;\r
  children: React.ReactNode;\r
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:`{\r
  id?: number;\r
  title: string;\r
  children: React.ReactNode;\r
}[]`},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"string"},description:""}}};export{y as A};
