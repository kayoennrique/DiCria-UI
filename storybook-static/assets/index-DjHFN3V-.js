import{j as c}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";import{I as no,a as io}from"./index-ts0_E7E4.js";import{I as co}from"./index-CKR8oQ-q.js";import{T as ao}from"./index-CakAdBbL.js";import{F as so}from"./index-BFmb1hA7.js";import{d as a}from"./styled-components.browser.esm-DDAiM4bh.js";const to=a.div`
  width: ${o=>o.containerwidth||"12.5rem"};
  background-color: ${o=>o.containebgcolor};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,mo=a.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  gap: 0.25rem;

  &:hover {
    border: 0.0775rem solid #333333;
    border-radius: 0.5rem;
  }

  input {
    padding-left: ${o=>o.paddingleft||"1rem"};
  }
`,lo=a(co)`
  background-color: ${o=>o.backgroundcolor||"transparent"};
  color: ${o=>o.color};
  border-radius: ${o=>o.borderradius||"0.5rem"};
  padding: ${o=>o.padding||"0.5rem 1rem"};
  padding-left: 4rem;
  border: ${o=>o.border||"none"};
  width: ${o=>o.width||"100%"};
  outline: ${o=>o.outlineinput||"none"};

  &:focus {
    outline: ${o=>o.outlinefocus||"none"};
  }
`,fo=a(ao)`
  justify-content: center;
  align-items: center;
  display: ${o=>o.display||"flex"};
  font-weight: ${o=>o.fontweight};
  font-size: ${o=>o.fontsizetag||"12px"};
  font-family: Poppins, Helvetica, "sans-serif";
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  width: ${o=>o.width||"6rem"};
  height: ${o=>o.height||"1.5rem"};
  padding: ${o=>o.padding};
  background-color: ${o=>o.bgcolor||"#000"};
  color: ${o=>o.textcolor||"#333333"};
  margin-left: 0.5rem;
  padding-left: 0.5rem;

  &:hover {
    border: none;
  }

  .remove-button {
    display: flex;
    font-size: 13px;
    margin-left: ${o=>o.marginleftremovebutton||"auto"};
    margin-right: 0.25rem;
    color: #333333;

    &:hover {
      background-color: ${o=>o.hoverbgcolorremovebutton||"red"};
      color: white;
      border-radius: 0.25rem;
    }
  }
`,bo=a.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  cursor: default;
  display: flex;
  align-items: center;
  color: #cccccc;
  font-size: ${o=>o.fontsizeclearall||"16px"};
`,uo=a(so)`
  margin-right: 2.65rem;
  transition: 0.2s;

  &:hover {
    color: #2774b3;
  }
`,ho=a.div`
  position: absolute;
  right: 1.875rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 90%;
  background-color: #ccc;
`,po=a.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.25rem;
  cursor: default;
  transition: 0.5s;
  color: #cccccc;

  &:hover {
    color: #2774b3;
  }
`,xo=a.ul`
  position: absolute;
  font-family: Poppins, Helvetica, "sans-serif";
  width: 100%;
  max-height: 9.375rem;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 9999;
  border-radius: 0.5rem;

  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 0.5rem; /* Largura da barra de rolagem */
  }

  /* Estilizando o polegar da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #bbb; /* Cor do polegar */
    border-radius: 0.5rem; /* Bordas arredondadas do polegar */
  }

  /* Mudando a cor da barra de rolagem quando o mouse está sobre ela */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999; /* Cor do polegar quando hover */
  }

  /* Estilizando a borda da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 0.5rem;
  }
`,B=a.li`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
    color: #2774b3;
    font-weight: bold;
    font-size: 16px;
  }
`,wo=({options:o,placeholder:U,containerwidth:G,containebgcolor:J,icon:K,inputstyled:e,tagstyled:r,hideinputonselect:Q,fontsizeclearall:V,...X})=>{var k,C,$,T,I,j,z,S,q,L;const[h,w]=l.useState(""),[b,u]=l.useState(o),[s,p]=l.useState([]),[g,f]=l.useState(!1),d=l.useRef(null),x=o,Z=n=>{const i=n.target.value;w(i),u(x.filter(t=>t.toLowerCase().includes(i.toLowerCase())))},y=n=>{s.includes(n)||p([...s,n]),w(""),f(!1),u(b.filter(i=>i!==n))},oo=n=>{p(s.filter(m=>m!==n));const i=[...b],t=x.indexOf(n);i.splice(t,0,n),u(i.filter(m=>m.toLowerCase().includes(h.toLowerCase()))),f(!1)},ro=()=>{p([]),u(x.filter(n=>n.toLowerCase().includes(h.toLowerCase())))},eo=n=>{n.stopPropagation(),f(i=>!i)},v=n=>{n.stopPropagation(),f(i=>!i)};return l.useEffect(()=>{const n=i=>{d.current&&!d.current.contains(i.target)&&f(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),c.jsxs(to,{icon:K,containerwidth:G,containebgcolor:J,options:o,onClick:v,ref:d,...X,children:[c.jsxs(mo,{children:[s.map(n=>{var i,t,m,E,R,A,D,O,F,P,N,Y,H,M,W,_;return c.jsx(fo,{onRemove:()=>oo(n),text:n,active:!0,removable:!0,className:"remove-button",bgcolor:(i=r==null?void 0:r.tag)==null?void 0:i.bgcolor,color:(t=r==null?void 0:r.tag)==null?void 0:t.color,activebgcolor:(m=r==null?void 0:r.tag)==null?void 0:m.activebgcolor,hoverbgcolor:(E=r==null?void 0:r.tag)==null?void 0:E.hoverbgcolor,textcolor:(R=r==null?void 0:r.tag)==null?void 0:R.textcolor,activetextcolor:(A=r==null?void 0:r.tag)==null?void 0:A.activetextcolor,outlinecolor:(D=r==null?void 0:r.tag)==null?void 0:D.outlinecolor,activeoutlinecolor:(O=r==null?void 0:r.tag)==null?void 0:O.activeoutlinecolor,display:(F=r==null?void 0:r.tag)==null?void 0:F.display,width:(P=r==null?void 0:r.tag)==null?void 0:P.width,height:(N=r==null?void 0:r.tag)==null?void 0:N.height,padding:(Y=r==null?void 0:r.tag)==null?void 0:Y.padding,fontsizetag:(H=r==null?void 0:r.tag)==null?void 0:H.fontsizetag,fontweight:(M=r==null?void 0:r.tag)==null?void 0:M.fontweight,marginleftremovebutton:(W=r==null?void 0:r.tag)==null?void 0:W.marginleftremovebutton,hoverbgcolorremovebutton:(_=r==null?void 0:r.tag)==null?void 0:_.hoverbgcolorremovebutton},n)}),s.length>0&&c.jsx(bo,{options:o,fontsizeclearall:V,onClick:ro,children:c.jsx(uo,{})}),(!Q||s.length===0)&&c.jsx(lo,{type:"text",value:h,onChange:Z,onClick:eo,placeholder:U,id:(k=e==null?void 0:e.input)==null?void 0:k.id,placeholdercolor:(C=e==null?void 0:e.input)==null?void 0:C.placeholdercolor,backgroundcolor:($=e==null?void 0:e.input)==null?void 0:$.backgroundcolor,color:(T=e==null?void 0:e.input)==null?void 0:T.color,borderradius:(I=e==null?void 0:e.input)==null?void 0:I.borderradius,border:(j=e==null?void 0:e.input)==null?void 0:j.border,width:(z=e==null?void 0:e.input)==null?void 0:z.width,outlineinput:(S=e==null?void 0:e.input)==null?void 0:S.outlineinput,outlinefocus:(q=e==null?void 0:e.input)==null?void 0:q.outlinefocus,paddingleft:(L=e==null?void 0:e.input)==null?void 0:L.paddingleft}),c.jsx(po,{onClick:v,children:g?c.jsx(no,{size:18}):c.jsx(io,{size:18})}),c.jsx(ho,{})]}),g&&c.jsx(xo,{children:b.length>0?b.map((n,i)=>c.jsx(B,{onMouseDown:()=>y(n),children:n},i)):c.jsx(B,{children:"Não encontrado"})})]})};wo.__docgenInfo={description:"",methods:[],displayName:"DropdownSearch",props:{inputstyled:{required:!1,tsType:{name:"DropdownSearchInputTagProps"},description:""},tagstyled:{required:!1,tsType:{name:"DropdownSearchInputTagProps"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},containerwidth:{required:!1,tsType:{name:"string"},description:""},containebgcolor:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideinputonselect:{required:!1,tsType:{name:"boolean"},description:""},fontsizeclearall:{required:!1,tsType:{name:"string"},description:""}}};export{wo as D};
