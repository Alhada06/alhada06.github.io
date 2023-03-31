import{a as ue,r as g,e as ne,o as d,f as m,i as s,h as ce,u as l,t as p,w as O,v as V,j as x,k as D,l as y,m as de,p as me,q as E,s as fe,x as ve,y as A,F as j,z as G,A as pe,B as ge,T as be,C as he,D as ke,E as _e}from"./entry.54235bd2.js";import ae from"./Icon.ebbfd834.js";import{i as $}from"./IntersectingSection.2811d10c.js";import{_ as xe}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.4021cfed.js";const Se={class:"container flex flex-row items-center"},ye={class:"h-5 w-full overflow-hidden rounded-sm border-b-2 border-r-2 border-bgbluelighter bg-transparent"},we=s("div",{class:"absolute animate-ripple bg-gradient-to-l from-white ease-linear"},null,-1),qe=[we],Ee={class:"justify-center pl-2"},$e=ue({__name:"TheProgressBar",props:{limit:{type:Number,required:!0}},setup(e){const i=e,t=g(0),n=ne(()=>t.value.toFixed()),u=setInterval(()=>{t.value<i.limit?t.value+=.1:clearInterval(u)},10);return(o,f)=>(d(),m("div",Se,[s("div",ye,[s("div",{class:"relative z-10 h-5 overflow-hidden bg-blue-700",style:ce({width:l(t)+"%"})},qe,4)]),s("div",Ee,p(l(n))+"%",1)]))}}),De=["onSubmit"],Ce={class:"md:flex md:items-center md:justify-center"},Fe={class:"mb-3 pb-4 text-center font-bold capitalize text-blue-800 dark:text-white"},Ne={class:"-mx-3 mb-6 flex flex-wrap"},Te={class:"mb-6 w-full px-3 md:mb-0"},Re={class:"mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white",for:"grid-first-name"},Ie={class:"-mx-3 mb-6 flex flex-wrap"},Qe={class:"w-full px-3"},ze=s("label",{class:"mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white",for:"grid-password"}," E-mail ",-1),Oe={class:"-mx-3 mb-6 flex flex-wrap"},Ve={class:"w-full px-3"},Ae={class:"mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white",for:"grid-password"},je={class:"md:flex md:items-center md:justify-center"},Ge={class:"focus:shadow-outline w-1/2 rounded bg-blue-900 py-2 px-4 font-bold text-white shadow hover:bg-blue-800 focus:outline-none",type:"submit"},Le={key:0},Me={key:1},Pe={class:"mt-2 py-3 md:flex md:items-center md:justify-center"},Ue={key:0,class:"flex-row items-center rounded bg-green-600 p-2 text-white"},Be={__name:"TheContactForm",setup(e){const i=g({name:"",email:"",message:"",from_name:"alhada06.github.io",subject:ne(()=>"Contact from "+i.value.name),access_key:"6214d9b4-c46f-4e98-9501-6e52ec230c79"}),t=g(!1),n=g(!1),u=a=>{a&&(n.value=a,i.value.name="",i.value.email="",i.value.message="",setTimeout(()=>{n.value=!1},3e3))},o=async()=>{var v;console.log(i.value),t.value=!0;const{data:a,error:r,pending:c}=await me("mail",()=>$fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:i.value}));t.value=c.value,u((v=a.value)==null?void 0:v.success),console.log(c.value),console.log(a.value),console.log(r.value)},f=g(null);return g(null),(a,r)=>{const c=ae;return d(),m("form",{id:"forms",ref_key:"forms",ref:f,class:"w-full max-w-lg",onSubmit:de(o,["prevent"])},[s("div",Ce,[s("div",Fe,p(a.$t("contact-me")),1)]),s("div",Ne,[s("div",Te,[s("label",Re,p(a.$t("name")),1),O(s("input",{id:"grid-first-name","onUpdate:modelValue":r[0]||(r[0]=v=>l(i).name=v),class:"mb-3 block w-full appearance-none rounded border border-blue-800/30 bg-white/70 py-3 px-4 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90",type:"text",name:"name",placeholder:"Jane",required:""},null,512),[[V,l(i).name]])])]),s("div",Ie,[s("div",Qe,[ze,O(s("input",{id:"email","onUpdate:modelValue":r[1]||(r[1]=v=>l(i).email=v),class:"mb-3 block w-full appearance-none rounded border border-blue-800/30 bg-white/70 py-3 px-4 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90",type:"email",name:"email",required:""},null,512),[[V,l(i).email]])])]),s("div",Oe,[s("div",Ve,[s("label",Ae,p(a.$t("message")),1),O(s("textarea",{id:"message","onUpdate:modelValue":r[2]||(r[2]=v=>l(i).message=v),class:"no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-blue-800/30 bg-white/70 py-3 px-4 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90",name:"message",required:""},null,512),[[V,l(i).message]])])]),s("div",je,[s("button",Ge,[l(t)?(d(),m("span",Le,[x(c,{size:"32px",name:"svg-spinners:3-dots-scale"})])):(d(),m("span",Me,p(a.$t("send")),1))])]),s("div",Pe,[l(n)?(d(),m("span",Ue,[x(c,{name:"material-symbols:check-circle-outline",size:"24px"}),D(" Email sent successfully!")])):y("",!0)])],40,De)}}};var R={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Skill"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Skill"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"iconSize"},arguments:[],directives:[]}]}}],loc:{start:0,end:72}};R.loc.source={body:`fragment Skill on Skill {
  sys {
    id
  }
  name
  icon
  iconSize
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function C(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){C(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){C(n,i)}),e.definitions&&e.definitions.forEach(function(n){C(n,i)})}var L={};(function(){R.definitions.forEach(function(i){if(i.name){var t=new Set;C(i,t),L[i.name.value]=t}})})();function Y(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function We(e,i){var t={kind:e.kind,definitions:[Y(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=L[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=L[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=Y(e,a);r&&t.definitions.push(r)}),t}We(R,"Skill");var S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"skillCollectionQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"skillCollection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Skill"},directives:[]}]}}]}}]}}],loc:{start:0,end:141}};S.loc.source={body:`#import "../fragments/skill.fragment.gql"

query skillCollectionQuery {
  skillCollection {
    total
    items {
      ...Skill
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Z={};function Je(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return Z[t]?!1:(Z[t]=!0,!0)})}S.definitions=S.definitions.concat(Je(R.definitions));function F(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){F(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){F(n,i)}),e.definitions&&e.definitions.forEach(function(n){F(n,i)})}var M={};(function(){S.definitions.forEach(function(i){if(i.name){var t=new Set;F(i,t),M[i.name.value]=t}})})();function ee(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function He(e,i){var t={kind:e.kind,definitions:[ee(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=M[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=M[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=ee(e,a);r&&t.definitions.push(r)}),t}He(S,"skillCollectionQuery");var I={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"experienceEntryQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"experienceCollection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"precentage"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:116}};I.loc.source={body:`query experienceEntryQuery {
  experienceCollection {
    total
    items {
      name
      precentage
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function N(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){N(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){N(n,i)}),e.definitions&&e.definitions.forEach(function(n){N(n,i)})}var P={};(function(){I.definitions.forEach(function(i){if(i.name){var t=new Set;N(i,t),P[i.name.value]=t}})})();function ie(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function Ke(e,i){var t={kind:e.kind,definitions:[ie(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=P[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=P[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=ie(e,a);r&&t.definitions.push(r)}),t}Ke(I,"experienceEntryQuery");var w={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"menuCollectionQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"menuCollection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:157}};w.loc.source={body:`query menuCollectionQuery($locale: String) {
  menuCollection(locale: $locale) {
    total
    items {
      name
      sys {
        id
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function T(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){T(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){T(n,i)}),e.definitions&&e.definitions.forEach(function(n){T(n,i)})}var U={};(function(){w.definitions.forEach(function(i){if(i.name){var t=new Set;T(i,t),U[i.name.value]=t}})})();function te(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function Xe(e,i){var t={kind:e.kind,definitions:[te(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=U[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=U[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=te(e,a);r&&t.definitions.push(r)}),t}Xe(w,"menuCollectionQuery");const h=e=>(he("data-v-7b767089"),e=e(),ke(),e),Ye={class:"mb-[500px] ml-6 scroll-pt-16"},Ze=h(()=>s("div",null,null,-1)),ei=h(()=>s("h2",{id:"0",class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 1 ",-1)),ii=h(()=>s("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),ti=[ei,ii],ni=h(()=>s("h2",{id:"1",class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 2 ",-1)),ai=h(()=>s("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),si=[ni,ai],ri=h(()=>s("h2",{id:"2",class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 3 ",-1)),oi=h(()=>s("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),li=[ri,oi],ui=h(()=>s("h2",{class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 4 ",-1)),ci=h(()=>s("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),di=[ui,ci],mi={key:0,class:"m-4 w-1/2 p-8"},fi={class:"flex justify-center"},vi={key:0},pi={key:1},gi={key:2},bi={__name:"index",async setup(e){let i,t;const n=_e(),u=g(null),o=g(null);E(o,([{isIntersecting:k}],_)=>{$.value.Section1=k},{rootMargin:"0px 0px -80% 0px"});const f=g(null);E(f,([{isIntersecting:k}],_)=>{$.value.Section2=k},{rootMargin:"0px 0px -80% 0px"});const a=g(null);E(a,([{isIntersecting:k}],_)=>{$.value.Section3=k},{rootMargin:"0px 0px -80% 0px"});const r=g(null);E(r,([{isIntersecting:k}],_)=>{$.value.Section4=k},{rootMargin:"0px 0px -80% 0px"});const{locale:c}=fe(),{data:v,refresh:B}=([i,t]=ve(()=>pe(w,{locale:c.value})),i=await i,t(),i),{result:se}=A(w,()=>({locale:c.value}),{prefetch:!1}),{result:q}=A(I,null,{prefetch:!1}),{result:Q}=A(S,null,{prefetch:!1});return(k,_)=>{var W,J,H,K,X;const re=$e,oe=Be,le=ae;return d(),m("div",{ref_key:"root",ref:u},[s("article",Ye,[s("h1",{ref:"head",class:"ml-4 py-4 pl-8 text-4xl text-blue-800 dark:text-white",onClick:_[0]||(_[0]=(...b)=>l(B)&&l(B)(...b))}," My article - "+p(l(n).myVar),513),Ze,s("section",{ref_key:"section1",ref:o,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},ti,512),s("section",{ref_key:"section2",ref:f,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},si,512),s("section",{ref_key:"section3",ref:a,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},li,512),s("section",{id:"3",ref_key:"section4",ref:r,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},di,512),l(q)?(d(),m("div",mi,[(d(!0),m(j,null,G((W=l(q))==null?void 0:W.experienceCollection.items,b=>(d(),m("div",{key:b.name},[x(be,{name:"fade",mode:"out-in",appear:""},{default:ge(()=>[x(re,{limit:b.precentage},null,8,["limit"])]),_:2},1024)]))),128))])):y("",!0),s("div",fi,[x(oe)])]),l(v)?(d(),m("div",vi,[D(" async: "+p(l(v))+"---- ",1),(d(!0),m(j,null,G((H=(J=l(se))==null?void 0:J.menuCollection)==null?void 0:H.items,(b,z)=>(d(),m("div",{key:z},p(b.name),1))),128))])):y("",!0),l(q)?(d(),m("div",pi,"--- experience data:"+p(l(q)),1)):y("",!0),D(" "+p(l(Q))+"---- ",1),l(Q)?(d(),m("div",gi,[(d(!0),m(j,null,G((X=(K=l(Q))==null?void 0:K.skillCollection)==null?void 0:X.items,(b,z)=>(d(),m("div",{key:z},[x(le,{name:b.icon,size:b.iconSize},null,8,["name","size"]),D("--- "+p(b.sys.id),1)]))),128))])):y("",!0)],512)}}},yi=xe(bi,[["__scopeId","data-v-7b767089"]]);export{yi as default};
