(()=>{var e,t,n,r,a={1664:(e,t,n)=>{"use strict";var r=n(67294),a=n(73935),o=n(18048),c=n(64902),d=n(21632);a.render(r.createElement(o.zt,{store:d.Z},r.createElement(c.default,null)),document.getElementById("App"))},87960:(e,t,n)=>{"use strict";n.d(t,{Tk:()=>a,KL:()=>o,gS:()=>c,JH:()=>d,UG:()=>s});var r=n(58720),a=function(e){return{type:r.CY,payload:e}},o=function(e){return{type:r.D,payload:e}},c=function(e){return{type:r.nK,payload:e}},d=function(e){return{type:r.TE,payload:e}},s=function(e){return{type:r.UH,payload:e}}},58720:(e,t,n)=>{"use strict";n.d(t,{CY:()=>r,D:()=>a,nK:()=>o,TE:()=>c,UH:()=>d});var r="add-component",a="update-component",o="update-component-succ",c="set-cur-component-id",d="update-preview-status"},21632:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(14890),a=n(85048),o=n(23010),c=n.n(o),d=n(10490),s=n.n(d),i=n(34857),p=n(87960),l=n(58720),f=s().mark(b),u=s().mark(m);function b(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,(0,i.gz)((0,p.gS)(t));case 3:case"end":return n.stop()}}),f)}function m(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ib)(l.D,b);case 2:case"end":return e.stop()}}),u)}const v=[m],h=c()(v);var x=n(66406),y=n.n(x),w=n(74720),g=n.n(w),E={componentList:[],curComponentID:null,previewStatus:!1};var _=(0,a.ZP)(),j=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):r.qC)((0,r.md)(_)),C=(0,r.MT)((0,r.UY)({crud:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=void 0===r?{}:r,o=JSON.parse(g()(e)),c=a.style,d=a.antdProps,s=a.events,i=a.animations,p=o.componentList.findIndex((function(e){return e.id===o.curComponentID}));switch(n){case l.CY:return o.componentList.push(a.component),o;case l.TE:return o.curComponentID=a.id,o;case l.UH:return o.previewStatus=a.status,o.curComponentID=null,o;case l.nK:return c&&o.curComponentID&&(o.componentList[p].style=y()({},o.componentList[p].style,c)),d&&o.curComponentID&&(o.componentList[p].antdProps=y()({},o.componentList[p].antdProps,d)),s&&o.curComponentID&&(o.componentList[p].events=y()({},o.componentList[p].events,s)),i&&o.curComponentID&&(o.componentList[p].animations=i),o;default:return e}}}),j);h.map(_.run);const A=C},53316:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(67294),a=n(68356),o=n.n(a),c=n(33860),d=n(29628),s=d.keys(),i=function(e){return e.error?"加载错误".concat(e.error):e.timedOut?"加载超时":e.pastDelay?r.createElement("div",{style:{padding:"20px 30px"}},r.createElement(c.Z,{avatar:!0,paragraph:{rows:6}}),r.createElement(c.Z,{avatar:!0,paragraph:{rows:6}})):null};const p=function(e){return o()({loader:function(){return d(function(e){var t=new RegExp(/\/:.*$/g),n=e.replace(t,"");return s.find((function(e){return e===".".concat(n,".jsx")||e===".".concat(n,"/index.less")}))}(e))},loading:i,delay:200,timeout:1e4})}},64902:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(63497),a=n.n(r),o=n(9830),c=n.n(o),d=n(30695),s=n.n(d),i=n(83507),p=n.n(i),l=n(69024),f=n.n(l),u=n(600),b=n.n(u),m=n(67294),v=n(82925),h=n(73727),x=n(16550),y=n(20271),w=n(53316);var g=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a()(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=b()(t);if(n){var o=b()(this).constructor;e=a()(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)});function o(){return c()(this,o),r.apply(this,arguments)}return s()(o,[{key:"render",value:function(){return m.createElement(y.ZP,{locale:v.Z},m.createElement(h.VK,null,m.createElement(x.rs,null,m.createElement(x.AW,{path:"/workbench",exact:!0,component:(0,w.Z)("/Workbench/index")}),m.createElement(x.AW,{path:"/react-sortable",exact:!0,component:(0,w.Z)("/ReactSortable/index")}),m.createElement(x.AW,{path:"/approval-flow",exact:!0,component:(0,w.Z)("/ApprovalFlow/index")}),m.createElement(x.AW,{path:"/time-selector",exact:!0,component:(0,w.Z)("/TimeSelector/index")}),m.createElement(x.AW,{path:"/",exact:!0,component:(0,w.Z)("/Dashboard/index")}))))}}]),o}(m.PureComponent)},29628:(e,t,n)=>{var r={"./ApprovalFlow/components/approval_drawer.jsx":[24457,24,787,191,664,289,159],"./ApprovalFlow/components/condition_drawer.jsx":[26676,24,787,664,289,128,895,676,129],"./ApprovalFlow/components/financial_drawer.jsx":[40663,24,787,191,664,670],"./ApprovalFlow/components/form/condition_edit/condition_edit.jsx":[71621,24,787,664,289,128,256],"./ApprovalFlow/components/form/custom_selector/index.jsx":[38519,24,191,397],"./ApprovalFlow/components/form/fee_type_selector/index.jsx":[87224,24,191,749,224],"./ApprovalFlow/components/form/invoice_title_selector/index.jsx":[65007,24,191,828],"./ApprovalFlow/components/form/selected_member/index.jsx":[85907,24,787,191,392],"./ApprovalFlow/components/notify_drawer.jsx":[75238,24,787,191,664,289,322],"./ApprovalFlow/components/payment_drawer.jsx":[29396,24,787,191,664,834],"./ApprovalFlow/components/role-popover/index.jsx":[23148,24,787,191,776],"./ApprovalFlow/index.jsx":[40585,24,787,191,664,289,128,895,676,233],"./Dashboard/Timeline/index.jsx":[29310,24,310],"./Dashboard/index.jsx":[83559,24,787,340],"./Dashboard/nav.jsx":[89321,24,787,997],"./ReactSortable/Components/Container/index.jsx":[67203,941,203],"./ReactSortable/index.jsx":[94633,24,941,885],"./TimeSelector/index.jsx":[30993,494],"./Workbench/index.jsx":[87554,24,787,191,664,289,832,700],"./app.jsx":[64902]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=29628,e.exports=a}},o={};function c(e){if(o[e])return o[e].exports;var t=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=a,c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e,t),t)),[])),c.u=e=>"js/"+e+"."+{128:"517682b397b574998feb",129:"3dab1fbd41a7b930bb7d",159:"4a450be9525c7703bd92",191:"dfef0793094bd17891d5",203:"94cfcd145dc095f4e49b",224:"17a82165b6fc3f6b8db3",233:"442336363db09fbf97d3",256:"90bffb4aa82e01c55acc",289:"9c24cd851b7c75e3df98",310:"f4ed2c32717d0cdc19b2",322:"a7ee26f5e11b45de348b",340:"56335984fe8806622dd3",392:"12944f559a866d0e63d8",397:"c02eae2806b8391e0d59",494:"431e7863f89736c61b4b",664:"60553d608307110bd241",670:"5f9c88c85f402f0f39d0",676:"0a63753e1c7a39242b09",700:"f0e1cd034041de6a1f6b",749:"74ca5e3d900e2e97f47f",776:"ca0ebb25e4c4ac5eb305",787:"42c32e6c453baa3cf0d1",828:"9fc95c060a761645ab6e",832:"60a3d11113eb2f4724d4",834:"41accc9f45528372bafe",885:"64d2bc764fde256ac539",895:"d1943847fa190edf35d2",941:"afabdaa8527030153b72",997:"458aa5780dcbb7c3a2b2"}[e]+".js",c.miniCssF=e=>"static/styles/"+({24:"antd",53:"basic",143:"app"}[e]||e)+"."+{24:"1f3023030ce35a7aed3a",53:"b2f7d92b269c10e68270",128:"517682b397b574998feb",129:"3dab1fbd41a7b930bb7d",159:"4a450be9525c7703bd92",191:"dfef0793094bd17891d5",203:"94cfcd145dc095f4e49b",224:"17a82165b6fc3f6b8db3",233:"442336363db09fbf97d3",256:"90bffb4aa82e01c55acc",289:"9c24cd851b7c75e3df98",310:"f4ed2c32717d0cdc19b2",322:"a7ee26f5e11b45de348b",340:"56335984fe8806622dd3",392:"12944f559a866d0e63d8",397:"c02eae2806b8391e0d59",494:"431e7863f89736c61b4b",556:"6a976c623a1cd74b2611",664:"60553d608307110bd241",670:"5f9c88c85f402f0f39d0",676:"0a63753e1c7a39242b09",700:"f0e1cd034041de6a1f6b",749:"74ca5e3d900e2e97f47f",776:"ca0ebb25e4c4ac5eb305",787:"42c32e6c453baa3cf0d1",828:"9fc95c060a761645ab6e",832:"60a3d11113eb2f4724d4",834:"41accc9f45528372bafe",885:"64d2bc764fde256ac539",895:"d1943847fa190edf35d2",941:"afabdaa8527030153b72",997:"458aa5780dcbb7c3a2b2"}[e]+".css",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="react-webpack:",c.l=(n,r,a)=>{if(e[n])e[n].push(r);else{var o,d;if(void 0!==a)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var p=s[i];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){o=p;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",t+a),o.src=n),e[n]=[r];var l=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var a=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(r))),t)return t(r)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),d&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/",n=e=>new Promise(((t,n)=>{var r=c.miniCssF(e),a=c.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(a===e||a===t))return c}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var c;if((a=(c=o[r]).getAttribute("data-href"))===e||a===t)return c}})(r,a))return t();((e,t,n,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)n();else{var c=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.request=c,a.parentNode.removeChild(a),r(d)}},a.href=t,document.head.appendChild(a)})(e,a,t,n)})),r={143:0},c.f.miniCss=(e,t)=>{r[e]?t.push(r[e]):0!==r[e]&&{129:1,159:1,233:1,256:1,322:1,340:1,392:1,494:1,670:1,700:1,776:1,828:1,834:1,885:1}[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))},(()=>{var e={143:0},t=[[1664,53,24,556]];c.f.j=(t,n)=>{var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,a)=>{r=e[t]=[n,a]}));n.push(r[2]=a);var o=c.p+c.u(t),d=new Error;c.l(o,(n=>{if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}}),"chunk-"+t)}};var n=()=>{};function r(){for(var n,r=0;r<t.length;r++){for(var a=t[r],o=!0,d=1;d<a.length;d++){var s=a[d];0!==e[s]&&(o=!1)}o&&(t.splice(r--,1),n=c(c.s=a[0]))}return 0===t.length&&(c.x(),c.x=()=>{}),n}c.x=()=>{c.x=()=>{},o=o.slice();for(var e=0;e<o.length;e++)a(o[e]);return(n=r)()};var a=r=>{for(var a,o,[s,i,p,l]=r,f=0,u=[];f<s.length;f++)o=s[f],c.o(e,o)&&e[o]&&u.push(e[o][0]),e[o]=0;for(a in i)c.o(i,a)&&(c.m[a]=i[a]);for(p&&p(c),d(r);u.length;)u.shift()();return l&&t.push.apply(t,l),n()},o=self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[],d=o.push.bind(o);o.push=a})(),c.x()})();