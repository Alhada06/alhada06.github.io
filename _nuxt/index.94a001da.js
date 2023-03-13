import{T as le,j as G,k as pe,l as Ie,m as Ae,p as be,S as Ce,K as c,O as P,L as Oe,q as re,r as S,e as de,o as T,f as k,s as h,h as De,u as _,t as b,i as Se,v as Le,w as Re,x as we,y as Q,F as Y,z as W,A as M,B,C as ae,D as J,E as Fe,G as Pe,H as Me,I as Be}from"./entry.baeadc4c.js";import{u as U,i as q,_ as Ue}from"./IntersectingSection.bfb9ab2b.js";import qe from"./Icon.40a412d0.js";import"./config.bfbe01ab.js";function Ve(t){return typeof t=="object"&&t!==null}function $e(t,e){if(!Boolean(t))throw new Error(e??"Unexpected invariant triggered.")}const Ge=/\r\n|[\n\r]/g;function X(t,e){let s=0,i=1;for(const n of t.body.matchAll(Ge)){if(typeof n.index=="number"||$e(!1),n.index>=e)break;s=n.index+n[0].length,i+=1}return{line:i,column:e+1-s}}function je(t){return he(t.source,X(t.source,t.start))}function he(t,e){const s=t.locationOffset.column-1,i="".padStart(s)+t.body,n=e.line-1,r=t.locationOffset.line-1,o=e.line+r,u=e.line===1?s:0,l=e.column+u,x=`${t.name}:${o}:${l}
`,p=i.split(/\r\n|[\n\r]/g),v=p[n];if(v.length>120){const E=Math.floor(l/80),O=l%80,f=[];for(let g=0;g<v.length;g+=80)f.push(v.slice(g,g+80));return x+oe([[`${o} |`,f[0]],...f.slice(1,E+1).map(g=>["|",g]),["|","^".padStart(O)],["|",f[E+1]]])}return x+oe([[`${o-1} |`,p[n-1]],[`${o} |`,v],["|","^".padStart(l)],[`${o+1} |`,p[n+1]]])}function oe(t){const e=t.filter(([i,n])=>n!==void 0),s=Math.max(...e.map(([i])=>i.length));return e.map(([i,n])=>i.padStart(s)+(n?" "+n:"")).join(`
`)}function Ke(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class te extends Error{constructor(e,...s){var i,n,r;const{nodes:o,source:u,positions:l,path:x,originalError:p,extensions:v}=Ke(s);super(e),this.name="GraphQLError",this.path=x??void 0,this.originalError=p??void 0,this.nodes=ce(Array.isArray(o)?o:o?[o]:void 0);const E=ce((i=this.nodes)===null||i===void 0?void 0:i.map(f=>f.loc).filter(f=>f!=null));this.source=u??(E==null||(n=E[0])===null||n===void 0?void 0:n.source),this.positions=l??(E==null?void 0:E.map(f=>f.start)),this.locations=l&&u?l.map(f=>X(u,f)):E==null?void 0:E.map(f=>X(f.source,f.start));const O=Ve(p==null?void 0:p.extensions)?p==null?void 0:p.extensions:void 0;this.extensions=(r=v??O)!==null&&r!==void 0?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),p!=null&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,te):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const s of this.nodes)s.loc&&(e+=`

`+je(s.loc));else if(this.source&&this.locations)for(const s of this.locations)e+=`

`+he(this.source,s);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function ce(t){return t===void 0||t.length===0?void 0:t}function m(t,e,s){return new te(`Syntax Error: ${s}`,{source:t,positions:[e]})}var Z;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Z||(Z={}));var a;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(a||(a={}));class ze{constructor(e){const s=new le(a.SOF,0,0,0,0);this.source=e,this.lastToken=s,this.token=s,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==a.EOF)do if(e.next)e=e.next;else{const s=Ye(this,e.end);e.next=s,s.prev=e,e=s}while(e.kind===a.COMMENT);return e}}function Qe(t){return t===a.BANG||t===a.DOLLAR||t===a.AMP||t===a.PAREN_L||t===a.PAREN_R||t===a.SPREAD||t===a.COLON||t===a.EQUALS||t===a.AT||t===a.BRACKET_L||t===a.BRACKET_R||t===a.BRACE_L||t===a.PIPE||t===a.BRACE_R}function L(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function K(t,e){return me(t.charCodeAt(e))&&fe(t.charCodeAt(e+1))}function me(t){return t>=55296&&t<=56319}function fe(t){return t>=56320&&t<=57343}function C(t,e){const s=t.source.body.codePointAt(e);if(s===void 0)return a.EOF;if(s>=32&&s<=126){const i=String.fromCodePoint(s);return i==='"'?`'"'`:`"${i}"`}return"U+"+s.toString(16).toUpperCase().padStart(4,"0")}function d(t,e,s,i,n){const r=t.line,o=1+s-t.lineStart;return new le(e,s,i,r,o,n)}function Ye(t,e){const s=t.source.body,i=s.length;let n=e;for(;n<i;){const r=s.charCodeAt(n);switch(r){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++t.line,t.lineStart=n;continue;case 13:s.charCodeAt(n+1)===10?n+=2:++n,++t.line,t.lineStart=n;continue;case 35:return We(t,n);case 33:return d(t,a.BANG,n,n+1);case 36:return d(t,a.DOLLAR,n,n+1);case 38:return d(t,a.AMP,n,n+1);case 40:return d(t,a.PAREN_L,n,n+1);case 41:return d(t,a.PAREN_R,n,n+1);case 46:if(s.charCodeAt(n+1)===46&&s.charCodeAt(n+2)===46)return d(t,a.SPREAD,n,n+3);break;case 58:return d(t,a.COLON,n,n+1);case 61:return d(t,a.EQUALS,n,n+1);case 64:return d(t,a.AT,n,n+1);case 91:return d(t,a.BRACKET_L,n,n+1);case 93:return d(t,a.BRACKET_R,n,n+1);case 123:return d(t,a.BRACE_L,n,n+1);case 124:return d(t,a.PIPE,n,n+1);case 125:return d(t,a.BRACE_R,n,n+1);case 34:return s.charCodeAt(n+1)===34&&s.charCodeAt(n+2)===34?tt(t,n):He(t,n)}if(G(r)||r===45)return Je(t,n,r);if(pe(r))return st(t,n);throw m(t.source,n,r===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:L(r)||K(s,n)?`Unexpected character: ${C(t,n)}.`:`Invalid character: ${C(t,n)}.`)}return d(t,a.EOF,i,i)}function We(t,e){const s=t.source.body,i=s.length;let n=e+1;for(;n<i;){const r=s.charCodeAt(n);if(r===10||r===13)break;if(L(r))++n;else if(K(s,n))n+=2;else break}return d(t,a.COMMENT,e,n,s.slice(e+1,n))}function Je(t,e,s){const i=t.source.body;let n=e,r=s,o=!1;if(r===45&&(r=i.charCodeAt(++n)),r===48){if(r=i.charCodeAt(++n),G(r))throw m(t.source,n,`Invalid number, unexpected digit after 0: ${C(t,n)}.`)}else n=H(t,n,r),r=i.charCodeAt(n);if(r===46&&(o=!0,r=i.charCodeAt(++n),n=H(t,n,r),r=i.charCodeAt(n)),(r===69||r===101)&&(o=!0,r=i.charCodeAt(++n),(r===43||r===45)&&(r=i.charCodeAt(++n)),n=H(t,n,r),r=i.charCodeAt(n)),r===46||pe(r))throw m(t.source,n,`Invalid number, expected digit but got: ${C(t,n)}.`);return d(t,o?a.FLOAT:a.INT,e,n,i.slice(e,n))}function H(t,e,s){if(!G(s))throw m(t.source,e,`Invalid number, expected digit but got: ${C(t,e)}.`);const i=t.source.body;let n=e+1;for(;G(i.charCodeAt(n));)++n;return n}function He(t,e){const s=t.source.body,i=s.length;let n=e+1,r=n,o="";for(;n<i;){const u=s.charCodeAt(n);if(u===34)return o+=s.slice(r,n),d(t,a.STRING,e,n+1,o);if(u===92){o+=s.slice(r,n);const l=s.charCodeAt(n+1)===117?s.charCodeAt(n+2)===123?Xe(t,n):Ze(t,n):et(t,n);o+=l.value,n+=l.size,r=n;continue}if(u===10||u===13)break;if(L(u))++n;else if(K(s,n))n+=2;else throw m(t.source,n,`Invalid character within String: ${C(t,n)}.`)}throw m(t.source,n,"Unterminated string.")}function Xe(t,e){const s=t.source.body;let i=0,n=3;for(;n<12;){const r=s.charCodeAt(e+n++);if(r===125){if(n<5||!L(i))break;return{value:String.fromCodePoint(i),size:n}}if(i=i<<4|F(r),i<0)break}throw m(t.source,e,`Invalid Unicode escape sequence: "${s.slice(e,e+n)}".`)}function Ze(t,e){const s=t.source.body,i=ue(s,e+2);if(L(i))return{value:String.fromCodePoint(i),size:6};if(me(i)&&s.charCodeAt(e+6)===92&&s.charCodeAt(e+7)===117){const n=ue(s,e+8);if(fe(n))return{value:String.fromCodePoint(i,n),size:12}}throw m(t.source,e,`Invalid Unicode escape sequence: "${s.slice(e,e+6)}".`)}function ue(t,e){return F(t.charCodeAt(e))<<12|F(t.charCodeAt(e+1))<<8|F(t.charCodeAt(e+2))<<4|F(t.charCodeAt(e+3))}function F(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function et(t,e){const s=t.source.body;switch(s.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw m(t.source,e,`Invalid character escape sequence: "${s.slice(e,e+2)}".`)}function tt(t,e){const s=t.source.body,i=s.length;let n=t.lineStart,r=e+3,o=r,u="";const l=[];for(;r<i;){const x=s.charCodeAt(r);if(x===34&&s.charCodeAt(r+1)===34&&s.charCodeAt(r+2)===34){u+=s.slice(o,r),l.push(u);const p=d(t,a.BLOCK_STRING,e,r+3,Ie(l).join(`
`));return t.line+=l.length-1,t.lineStart=n,p}if(x===92&&s.charCodeAt(r+1)===34&&s.charCodeAt(r+2)===34&&s.charCodeAt(r+3)===34){u+=s.slice(o,r),o=r+1,r+=4;continue}if(x===10||x===13){u+=s.slice(o,r),l.push(u),x===13&&s.charCodeAt(r+1)===10?r+=2:++r,u="",o=r,n=r;continue}if(L(x))++r;else if(K(s,r))r+=2;else throw m(t.source,r,`Invalid character within String: ${C(t,r)}.`)}throw m(t.source,r,"Unterminated string.")}function st(t,e){const s=t.source.body,i=s.length;let n=e+1;for(;n<i;){const r=s.charCodeAt(n);if(Ae(r))++n;else break}return d(t,a.NAME,e,n,s.slice(e,n))}function nt(t,e){return new it(t,e).parseDocument()}class it{constructor(e,s={}){const i=be(e)?e:new Ce(e);this._lexer=new ze(i),this._options=s,this._tokenCounter=0}parseName(){const e=this.expectToken(a.NAME);return this.node(e,{kind:c.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:c.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),s=e?this._lexer.lookahead():this._lexer.token;if(s.kind===a.NAME){switch(s.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw m(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(s.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(s)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(e,{kind:c.OPERATION_DEFINITION,operation:P.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const s=this.parseOperationType();let i;return this.peek(a.NAME)&&(i=this.parseName()),this.node(e,{kind:c.OPERATION_DEFINITION,operation:s,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(a.NAME);switch(e.value){case"query":return P.QUERY;case"mutation":return P.MUTATION;case"subscription":return P.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:c.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(e,{kind:c.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:c.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,s=this.parseName();let i,n;return this.expectOptionalToken(a.COLON)?(i=s,n=this.parseName()):n=s,this.node(e,{kind:c.FIELD,alias:i,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const s=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,s,a.PAREN_R)}parseArgument(e=!1){const s=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(s,{kind:c.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(a.SPREAD);const s=this.expectOptionalKeyword("on");return!s&&this.peek(a.NAME)?this.node(e,{kind:c.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:c.INLINE_FRAGMENT,typeCondition:s?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:c.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:c.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const s=this._lexer.token;switch(s.kind){case a.BRACKET_L:return this.parseList(e);case a.BRACE_L:return this.parseObject(e);case a.INT:return this.advanceLexer(),this.node(s,{kind:c.INT,value:s.value});case a.FLOAT:return this.advanceLexer(),this.node(s,{kind:c.FLOAT,value:s.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),s.value){case"true":return this.node(s,{kind:c.BOOLEAN,value:!0});case"false":return this.node(s,{kind:c.BOOLEAN,value:!1});case"null":return this.node(s,{kind:c.NULL});default:return this.node(s,{kind:c.ENUM,value:s.value})}case a.DOLLAR:if(e)if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){const i=this._lexer.token.value;throw m(this._lexer.source,s.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(s);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:c.STRING,value:e.value,block:e.kind===a.BLOCK_STRING})}parseList(e){const s=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:c.LIST,values:this.any(a.BRACKET_L,s,a.BRACKET_R)})}parseObject(e){const s=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:c.OBJECT,fields:this.any(a.BRACE_L,s,a.BRACE_R)})}parseObjectField(e){const s=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(s,{kind:c.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){const s=[];for(;this.peek(a.AT);)s.push(this.parseDirective(e));return s}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const s=this._lexer.token;return this.expectToken(a.AT),this.node(s,{kind:c.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let s;if(this.expectOptionalToken(a.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(a.BRACKET_R),s=this.node(e,{kind:c.LIST_TYPE,type:i})}else s=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(e,{kind:c.NON_NULL_TYPE,type:s}):s}parseNamedType(){return this.node(this._lexer.token,{kind:c.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),n=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(e,{kind:c.SCHEMA_DEFINITION,description:s,directives:i,operationTypes:n})}parseOperationTypeDefinition(){const e=this._lexer.token,s=this.parseOperationType();this.expectToken(a.COLON);const i=this.parseNamedType();return this.node(e,{kind:c.OPERATION_TYPE_DEFINITION,operation:s,type:i})}parseScalarTypeDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:c.SCALAR_TYPE_DEFINITION,description:s,name:i,directives:n})}parseObjectTypeDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:c.OBJECT_TYPE_DEFINITION,description:s,name:i,interfaces:n,directives:r,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,s=this.parseDescription(),i=this.parseName(),n=this.parseArgumentDefs();this.expectToken(a.COLON);const r=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(e,{kind:c.FIELD_DEFINITION,description:s,name:i,arguments:n,type:r,directives:o})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,s=this.parseDescription(),i=this.parseName();this.expectToken(a.COLON);const n=this.parseTypeReference();let r;this.expectOptionalToken(a.EQUALS)&&(r=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(e,{kind:c.INPUT_VALUE_DEFINITION,description:s,name:i,type:n,defaultValue:r,directives:o})}parseInterfaceTypeDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(e,{kind:c.INTERFACE_TYPE_DEFINITION,description:s,name:i,interfaces:n,directives:r,fields:o})}parseUnionTypeDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),n=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:c.UNION_TYPE_DEFINITION,description:s,name:i,directives:n,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),n=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:c.ENUM_TYPE_DEFINITION,description:s,name:i,directives:n,values:r})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,s=this.parseDescription(),i=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:c.ENUM_VALUE_DEFINITION,description:s,name:i,directives:n})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw m(this._lexer.source,this._lexer.token.start,`${V(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),n=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:c.INPUT_OBJECT_TYPE_DEFINITION,description:s,name:i,directives:n,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===a.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const s=this.parseConstDirectives(),i=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(s.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:c.SCHEMA_EXTENSION,directives:s,operationTypes:i})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const s=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:c.SCALAR_TYPE_EXTENSION,name:s,directives:i})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const s=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(i.length===0&&n.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:c.OBJECT_TYPE_EXTENSION,name:s,interfaces:i,directives:n,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const s=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(i.length===0&&n.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:c.INTERFACE_TYPE_EXTENSION,name:s,interfaces:i,directives:n,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const s=this.parseName(),i=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(i.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:c.UNION_TYPE_EXTENSION,name:s,directives:i,types:n})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const s=this.parseName(),i=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(i.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:c.ENUM_TYPE_EXTENSION,name:s,directives:i,values:n})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const s=this.parseName(),i=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(i.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:c.INPUT_OBJECT_TYPE_EXTENSION,name:s,directives:i,fields:n})}parseDirectiveDefinition(){const e=this._lexer.token,s=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);const i=this.parseName(),n=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(e,{kind:c.DIRECTIVE_DEFINITION,description:s,name:i,arguments:n,repeatable:r,locations:o})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,s=this.parseName();if(Object.prototype.hasOwnProperty.call(Z,s.value))return s;throw this.unexpected(e)}node(e,s){return this._options.noLocation!==!0&&(s.loc=new Oe(e,this._lexer.lastToken,this._lexer.source)),s}peek(e){return this._lexer.token.kind===e}expectToken(e){const s=this._lexer.token;if(s.kind===e)return this.advanceLexer(),s;throw m(this._lexer.source,s.start,`Expected ${xe(e)}, found ${V(s)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const s=this._lexer.token;if(s.kind===a.NAME&&s.value===e)this.advanceLexer();else throw m(this._lexer.source,s.start,`Expected "${e}", found ${V(s)}.`)}expectOptionalKeyword(e){const s=this._lexer.token;return s.kind===a.NAME&&s.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const s=e??this._lexer.token;return m(this._lexer.source,s.start,`Unexpected ${V(s)}.`)}any(e,s,i){this.expectToken(e);const n=[];for(;!this.expectOptionalToken(i);)n.push(s.call(this));return n}optionalMany(e,s,i){if(this.expectOptionalToken(e)){const n=[];do n.push(s.call(this));while(!this.expectOptionalToken(i));return n}return[]}many(e,s,i){this.expectToken(e);const n=[];do n.push(s.call(this));while(!this.expectOptionalToken(i));return n}delimitedMany(e,s){this.expectOptionalToken(e);const i=[];do i.push(s.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){const{maxTokens:e}=this._options,s=this._lexer.advance();if(e!==void 0&&s.kind!==a.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw m(this._lexer.source,s.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function V(t){const e=t.value;return xe(t.kind)+(e!=null?` "${e}"`:"")}function xe(t){return Qe(t)?`"${t}"`:t}var $=new Map,ee=new Map,Ee=!0,j=!1;function _e(t){return t.replace(/[\s,]+/g," ").trim()}function rt(t){return _e(t.source.body.substring(t.start,t.end))}function at(t){var e=new Set,s=[];return t.definitions.forEach(function(i){if(i.kind==="FragmentDefinition"){var n=i.name.value,r=rt(i.loc),o=ee.get(n);o&&!o.has(r)?Ee&&console.warn("Warning: fragment with name "+n+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||ee.set(n,o=new Set),o.add(r),e.has(r)||(e.add(r),s.push(i))}else s.push(i)}),re(re({},t),{definitions:s})}function ot(t){var e=new Set(t.definitions);e.forEach(function(i){i.loc&&delete i.loc,Object.keys(i).forEach(function(n){var r=i[n];r&&typeof r=="object"&&e.add(r)})});var s=t.loc;return s&&(delete s.startToken,delete s.endToken),t}function ct(t){var e=_e(t);if(!$.has(e)){var s=nt(t,{experimentalFragmentVariables:j,allowLegacyFragmentVariables:j});if(!s||s.kind!=="Document")throw new Error("Not a valid GraphQL document.");$.set(e,ot(at(s)))}return $.get(e)}function A(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];typeof t=="string"&&(t=[t]);var i=t[0];return e.forEach(function(n,r){n&&n.kind==="Document"?i+=n.loc.source.body:i+=n,i+=t[r+1]}),ct(i)}function ut(){$.clear(),ee.clear()}function lt(){Ee=!1}function pt(){j=!0}function dt(){j=!1}var w={gql:A,resetCaches:ut,disableFragmentWarnings:lt,enableExperimentalFragmentVariables:pt,disableExperimentalFragmentVariables:dt};(function(t){t.gql=w.gql,t.resetCaches=w.resetCaches,t.disableFragmentWarnings=w.disableFragmentWarnings,t.enableExperimentalFragmentVariables=w.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=w.disableExperimentalFragmentVariables})(A||(A={}));A.default=A;const ht={class:"container flex items-center flex-row"},mt={class:"w-full bg-transparent border-bgbluelighter rounded-sm border-b-2 border-r-2 h-5 overflow-hidden"},ft=h("div",{class:"absolute bg-gradient-to-l from-white animate-ripple ease-linear"},null,-1),xt=[ft],Et={class:"pl-2 justify-center"},_t={__name:"TheProgressBar",props:{limit:Number},setup(t){const e=t,s=S(0),i=de(()=>s.value.toFixed());let n=setInterval(()=>{s.value<e.limit?s.value+=.1:clearInterval(n)},10);return(r,o)=>(T(),k("div",ht,[h("div",mt,[h("div",{class:"h-5 z-10 relative bg-blue-700 overflow-hidden",style:De({width:_(s)+"%"})},xt,4)]),h("div",Et,b(_(i))+"%",1)]))}};const y=t=>(Me("data-v-a0feb436"),t=t(),Be(),t),vt={class:"mb-[500px] scroll-pt-16"},gt=y(()=>h("div",null,null,-1)),Nt=y(()=>h("h2",{id:"0",class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"}," Section 1 ",-1)),Tt=y(()=>h("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),kt=[Nt,Tt],yt=y(()=>h("h2",{id:"1",class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"}," Section 2 ",-1)),It=y(()=>h("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),At=[yt,It],bt=y(()=>h("h2",{id:"2",class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"}," Section 3 ",-1)),Ct=y(()=>h("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),Ot=[bt,Ct],Dt=y(()=>h("h2",{class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"},"Section 4",-1)),St=y(()=>h("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),Lt=[Dt,St],Rt={key:0,class:"w-1/2 m-4 p-8"},wt={key:0},Ft={key:1},Pt={__name:"index",async setup(t){let e,s;const i=Le(),n=S(null),r=S(null);U(r,([{isIntersecting:I}],D)=>{q.value.section1=I},{rootMargin:"0px 0px -80% 0px"});const o=S(null);U(o,([{isIntersecting:I}],D)=>{q.value.section2=I},{rootMargin:"0px 0px -80% 0px"});const u=S(null);U(u,([{isIntersecting:I}],D)=>{q.value.section3=I},{rootMargin:"0px 0px -80% 0px"});const l=S(null);U(l,([{isIntersecting:I}],D)=>{q.value.section4=I},{rootMargin:"0px 0px -80% 0px"});const x=A`
  query menuCollectionQuery($locale: String) {
    menuCollection(locale: $locale) {
      total
      items {
        name
        sys {
          id
        }
        # add the fields you want to query
      }
    }
  }
`,p=A`
  query experienceEntryQuery {
    experienceCollection {
      total
      items {
        name
        precentage
      }
    }
  }
`,{locale:v}=Re(),{data:E,refresh:O}=([e,s]=we(()=>Fe(x,{locale:v.value})),e=await e,s(),e),{result:f}=Q(x,()=>({locale:v.value}),{prefetch:!1}),{result:g}=Q(p,null,{prefetch:!1});de(()=>E);const ve=A`
  query skillCollectionQuery {
    skillCollection {
      total
      items {
        sys {
          id
        }
        name
        icon
        iconSize
      }
    }
  }
`,{result:z}=Q(ve,null,{prefetch:!1});return(I,D)=>{var se,ne,ie;const ge=_t,Ne=Ue,Te=qe;return T(),k("div",{ref_key:"root",ref:n},[h("article",vt,[h("h1",{ref:"head",onClick:D[0]||(D[0]=(...N)=>_(O)&&_(O)(...N)),class:"py-4 pl-8 ml-4 text-4xl dark:text-white text-blue-800"}," My article - "+b(_(i).myVar),513),gt,h("section",{ref_key:"section1",ref:r,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},kt,512),h("section",{ref_key:"section2",ref:o,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},At,512),h("section",{ref_key:"section3",ref:u,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},Ot,512),h("section",{id:"3",ref_key:"section4",ref:l,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},Lt,512),_(g)?(T(),k("div",Rt,[(T(!0),k(Y,null,W((se=_(g))==null?void 0:se.experienceCollection.items,(N,R)=>(T(),k("div",{key:N.name},[B(Pe,{name:"fade",mode:"out-in",appear:""},{default:ae(()=>[B(ge,{limit:N.precentage},null,8,["limit"])]),_:2},1024)]))),128))])):M("",!0)]),B(Ne,null,{default:ae(()=>{var N,R;return[_(E)?(T(),k("div",wt,[J(" async: "+b(_(E))+"---- ",1),(T(!0),k(Y,null,W((R=(N=_(f))==null?void 0:N.menuCollection)==null?void 0:R.items,(ke,ye)=>(T(),k("div",{key:ye},b(ke.name),1))),128))])):M("",!0),_(g)?(T(),k("div",Ft,"--- experience data:"+b(_(g)),1)):M("",!0)]}),_:1}),J(" "+b(_(z))+"---- ",1),_(z)?(T(!0),k(Y,{key:0},W((ie=(ne=_(z))==null?void 0:ne.skillCollection)==null?void 0:ie.items,(N,R)=>(T(),k("div",{key:R},[B(Te,{name:N.icon,size:N.iconSize},null,8,["name","size"]),J("--- "+b(N.sys.id),1)]))),128)):M("",!0)],512)}}},Vt=Se(Pt,[["__scopeId","data-v-a0feb436"]]);export{Vt as default};