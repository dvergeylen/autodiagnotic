var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function s(t,e,n){t.$$.on_destroy.push(r(e,n))}function a(t,e,n=e){return t.set(n),e}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(){return p("")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return""===t?null:+t}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function y(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}function k(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function _(t,e,n){t.classList[n?"add":"remove"](e)}let w;function C(t){w=t}function q(){const t=function(){if(!w)throw new Error("Function called outside component initialization");return w}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,i)}))}}}function E(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const j=[],z=[],L=[],O=[],S=Promise.resolve();let P=!1;function A(t){L.push(t)}function I(t){O.push(t)}let R=!1;const D=new Set;function M(){if(!R){R=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];C(e),U(e.$$)}for(C(null),j.length=0;z.length;)z.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];D.has(e)||(D.add(e),e())}L.length=0}while(j.length);for(;O.length;)O.pop()();P=!1,R=!1,D.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const J=new Set;let B;function F(){B={r:0,c:[],p:B}}function T(){B.r||o(B.c),B=B.p}function V(t,e){t&&t.i&&(J.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),B.c.push((()=>{J.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function H(t,e){G(t,1,1,(()=>{e.delete(t.key)}))}function K(t,e,n,o,i,l,r,s,a,u,c,d){let f=t.length,g=l.length,p=f;const h={};for(;p--;)h[t[p].key]=p;const m=[],v=new Map,N=new Map;for(p=g;p--;){const t=d(i,l,p),s=n(t);let a=r.get(s);a?o&&a.p(t,e):(a=u(s,t),a.c()),v.set(s,m[p]=a),s in h&&N.set(s,Math.abs(p-h[s]))}const $=new Set,x=new Set;function b(t){V(t,1),t.m(s,c),r.set(t.key,t),c=t.first,g--}for(;f&&g;){const e=m[g-1],n=t[f-1],o=e.key,i=n.key;e===n?(c=e.first,f--,g--):v.has(i)?!r.has(o)||$.has(o)?b(e):x.has(i)?f--:N.get(o)>N.get(i)?(x.add(o),b(e)):($.add(i),f--):(a(n,r),f--)}for(;f--;){const e=t[f];v.has(e.key)||a(e,r)}for(;g;)b(m[g-1]);return m}function Q(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function W(t){t&&t.c()}function X(t,n,l,r){const{fragment:s,on_mount:a,on_destroy:u,after_update:c}=t.$$;s&&s.m(n,l),r||A((()=>{const n=a.map(e).filter(i);u?u.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(A)}function Y(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(j.push(t),P||(P=!0,S.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,i,l,r,s,a,u=[-1]){const c=w;C(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:i.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(f.ctx=l?l(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),g&&Z(e,t)),n})):[],f.update(),g=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();i.intro&&V(e.$$.fragment),X(e,i.target,i.anchor,i.customElement),M()}C(c)}class et{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(t){let e,n,o;return{c(){e=f("input"),N(e,"type","text"),N(e,"class","svelte-zog1mk")},m(i,l){c(i,e,l),b(e,t[0].text.fr),n||(o=v(e,"input",t[4]),n=!0)},p(t,n){1&n&&e.value!==t[0].text.fr&&b(e,t[0].text.fr)},d(t){t&&d(e),n=!1,o()}}}function ot(t){let e,n,i,l,r,s,a,g,m,$;return{c(){e=f("div"),n=f("p"),i=p("m: "),l=f("input"),r=h(),s=f("p"),a=p("f: "),g=f("input"),N(l,"type","text"),N(l,"class","svelte-zog1mk"),N(n,"class","svelte-zog1mk"),N(g,"type","text"),N(g,"class","svelte-zog1mk"),N(s,"class","svelte-zog1mk"),N(e,"class","details svelte-zog1mk")},m(o,d){c(o,e,d),u(e,n),u(n,i),u(n,l),b(l,t[0].text.fr.m),u(e,r),u(e,s),u(s,a),u(s,g),b(g,t[0].text.fr.f),m||($=[v(l,"input",t[5]),v(g,"input",t[6])],m=!0)},p(t,e){1&e&&l.value!==t[0].text.fr.m&&b(l,t[0].text.fr.m),1&e&&g.value!==t[0].text.fr.f&&b(g,t[0].text.fr.f)},d(t){t&&d(e),m=!1,o($)}}}function it(e){let n,i,l,r,s,a,g,m,x,k,w,C,q,E,j,z,L,O,S,P,I,R,D,M,U,J,B,F,T,V,G,H,K,Q,W,X,Y,Z,tt,et,it,lt,rt,st,at,ut,ct,dt,ft,gt,pt,ht,mt,vt,Nt,$t,xt,bt,yt,kt="string"==typeof e[0].text.fr&&nt(e),_t="object"==typeof e[0].text.fr&&ot(e);return{c(){n=f("div"),i=f("div"),l=p("Protagoniste:\n      "),r=f("select"),s=f("option"),s.textContent="Joueur",a=f("option"),a.textContent="NPC1",g=h(),m=f("div"),x=p("FR:\n    "),kt&&kt.c(),k=h(),w=f("span"),w.textContent="m|f",C=h(),_t&&_t.c(),q=h(),E=f("div"),j=p("EN:\n    "),z=f("input"),L=h(),O=f("div"),S=p("URL Image:\n      "),P=f("input"),I=h(),R=f("div"),D=p("Attributions:\n    "),M=f("div"),U=f("div"),J=f("input"),B=p(" Leader"),F=h(),T=f("div"),V=f("input"),G=p(" Bricoleur"),H=h(),K=f("div"),Q=f("input"),W=p(" Coequipier"),X=h(),Y=f("div"),Z=f("input"),tt=p("Planificateur"),et=h(),it=f("div"),lt=f("input"),rt=p(" Idealiste"),st=h(),at=f("div"),ut=f("input"),ct=p(" Creatif"),dt=h(),ft=f("div"),gt=f("input"),pt=p("Audacieux"),ht=h(),mt=f("div"),vt=f("input"),Nt=p(" Explorateur"),$t=h(),xt=f("span"),xt.textContent="chiffres entiers positifs ou négatifs",s.__value="Player",s.value=s.__value,a.__value="NPC1",a.value=a.__value,void 0===e[0].character&&A((()=>e[3].call(r))),N(i,"class","mb-3"),N(w,"class","svelte-zog1mk"),_(w,"is-enabled",e[1]),N(m,"class","mb-3"),N(z,"type","text"),N(z,"class","svelte-zog1mk"),N(E,"class","mb-3"),N(P,"type","text"),N(P,"class","svelte-zog1mk"),N(O,"class","mb-3"),N(J,"type","number"),N(J,"class","svelte-zog1mk"),N(V,"type","number"),N(V,"class","svelte-zog1mk"),N(Q,"type","number"),N(Q,"class","svelte-zog1mk"),N(Z,"type","number"),N(Z,"class","svelte-zog1mk"),N(lt,"type","number"),N(lt,"class","svelte-zog1mk"),N(ut,"type","number"),N(ut,"class","svelte-zog1mk"),N(gt,"type","number"),N(gt,"class","svelte-zog1mk"),N(vt,"type","number"),N(vt,"class","svelte-zog1mk"),N(M,"class","attribution-container svelte-zog1mk"),N(xt,"class","is-small is-italic"),N(n,"class","properties svelte-zog1mk"),_(n,"background-gray","Player"!==e[0].character)},m(t,o){c(t,n,o),u(n,i),u(i,l),u(i,r),u(r,s),u(r,a),y(r,e[0].character),u(n,g),u(n,m),u(m,x),kt&&kt.m(m,null),u(m,k),u(m,w),u(n,C),_t&&_t.m(n,null),u(n,q),u(n,E),u(E,j),u(E,z),b(z,e[0].text.en),u(n,L),u(n,O),u(O,S),u(O,P),b(P,e[0].imagePath),u(n,I),u(n,R),u(R,D),u(R,M),u(M,U),u(U,J),b(J,e[0].attribution.leader),u(U,B),u(M,F),u(M,T),u(T,V),b(V,e[0].attribution.bricoleur),u(T,G),u(M,H),u(M,K),u(K,Q),b(Q,e[0].attribution.coequipier),u(K,W),u(M,X),u(M,Y),u(Y,Z),b(Z,e[0].attribution.planificateur),u(Y,tt),u(M,et),u(M,it),u(it,lt),b(lt,e[0].attribution.idealiste),u(it,rt),u(M,st),u(M,at),u(at,ut),b(ut,e[0].attribution.creatif),u(at,ct),u(M,dt),u(M,ft),u(ft,gt),b(gt,e[0].attribution.audacieux),u(ft,pt),u(M,ht),u(M,mt),u(mt,vt),b(vt,e[0].attribution.explorateur),u(mt,Nt),u(R,$t),u(R,xt),bt||(yt=[v(r,"change",e[3]),v(w,"click",e[2]),v(z,"input",e[7]),v(P,"input",e[8]),v(J,"input",e[9]),v(V,"input",e[10]),v(Q,"input",e[11]),v(Z,"input",e[12]),v(lt,"input",e[13]),v(ut,"input",e[14]),v(gt,"input",e[15]),v(vt,"input",e[16])],bt=!0)},p(t,[e]){1&e&&y(r,t[0].character),"string"==typeof t[0].text.fr?kt?kt.p(t,e):(kt=nt(t),kt.c(),kt.m(m,k)):kt&&(kt.d(1),kt=null),2&e&&_(w,"is-enabled",t[1]),"object"==typeof t[0].text.fr?_t?_t.p(t,e):(_t=ot(t),_t.c(),_t.m(n,q)):_t&&(_t.d(1),_t=null),1&e&&z.value!==t[0].text.en&&b(z,t[0].text.en),1&e&&P.value!==t[0].imagePath&&b(P,t[0].imagePath),1&e&&$(J.value)!==t[0].attribution.leader&&b(J,t[0].attribution.leader),1&e&&$(V.value)!==t[0].attribution.bricoleur&&b(V,t[0].attribution.bricoleur),1&e&&$(Q.value)!==t[0].attribution.coequipier&&b(Q,t[0].attribution.coequipier),1&e&&$(Z.value)!==t[0].attribution.planificateur&&b(Z,t[0].attribution.planificateur),1&e&&$(lt.value)!==t[0].attribution.idealiste&&b(lt,t[0].attribution.idealiste),1&e&&$(ut.value)!==t[0].attribution.creatif&&b(ut,t[0].attribution.creatif),1&e&&$(gt.value)!==t[0].attribution.audacieux&&b(gt,t[0].attribution.audacieux),1&e&&$(vt.value)!==t[0].attribution.explorateur&&b(vt,t[0].attribution.explorateur),1&e&&_(n,"background-gray","Player"!==t[0].character)},i:t,o:t,d(t){t&&d(n),kt&&kt.d(),_t&&_t.d(),bt=!1,o(yt)}}}function lt(t,e,n){let o,{dialogNode:i}=e;return t.$$set=t=>{"dialogNode"in t&&n(0,i=t.dialogNode)},t.$$.update=()=>{1&t.$$.dirty&&n(1,o="object"==typeof i.text.fr)},[i,o,function(){"object"==typeof i.text.fr?n(0,i.text.fr=i.text.fr.m,i):n(0,i.text.fr={m:i.text.fr,f:i.text.fr},i)},function(){i.character=k(this),n(0,i)},function(){i.text.fr=this.value,n(0,i)},function(){i.text.fr.m=this.value,n(0,i)},function(){i.text.fr.f=this.value,n(0,i)},function(){i.text.en=this.value,n(0,i)},function(){i.imagePath=this.value,n(0,i)},function(){i.attribution.leader=$(this.value),n(0,i)},function(){i.attribution.bricoleur=$(this.value),n(0,i)},function(){i.attribution.coequipier=$(this.value),n(0,i)},function(){i.attribution.planificateur=$(this.value),n(0,i)},function(){i.attribution.idealiste=$(this.value),n(0,i)},function(){i.attribution.creatif=$(this.value),n(0,i)},function(){i.attribution.audacieux=$(this.value),n(0,i)},function(){i.attribution.explorateur=$(this.value),n(0,i)}]}class rt extends et{constructor(t){super(),tt(this,t,lt,it,l,{dialogNode:0})}}const st=[];function at(e,n=t){let o;const i=[];function r(t){if(l(e,t)&&(e=t,o)){const t=!st.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(l,s=t){const a=[l,s];return i.push(a),1===i.length&&(o=n(r)||t),l(e),()=>{const t=i.indexOf(a);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}const ut=at({metadata:{part:"I",chapter:"1"},dialogNodes:{}}),ct=function(e,n,l){const s=!Array.isArray(e),a=s?[e]:e,u=n.length<2;return{subscribe:at(l,(e=>{let l=!1;const c=[];let d=0,f=t;const g=()=>{if(d)return;f();const o=n(s?c[0]:c,e);u?e(o):f=i(o)?o:t},p=a.map(((t,e)=>r(t,(t=>{c[e]=t,d&=~(1<<e),l&&g()}),(()=>{d|=1<<e}))));return l=!0,g(),function(){o(p),f()}})).subscribe}}(ut,(t=>Object.keys(t.dialogNodes).map((e=>{var n,o;return{id:e,text:`#${o=e,`${"0".repeat(5-String(o).length)}${o}`} - ${(null===(n=t.dialogNodes[e].text.fr)||void 0===n?void 0:n.m)||t.dialogNodes[e].text.fr}`}}))));function dt(t,e,n){const o=t.slice();return o[10]=e[n],o}function ft(t){let e,n,o,i,l=t[10].text+"";return{c(){e=f("option"),n=p(l),o=h(),e.__value=i=t[10].id,e.value=e.__value},m(t,i){c(t,e,i),u(e,n),u(e,o)},p(t,o){4&o&&l!==(l=t[10].text+"")&&x(n,l),4&o&&i!==(i=t[10].id)&&(e.__value=i,e.value=e.__value)},d(t){t&&d(e)}}}function gt(t){let e,n,i,l,r,s,a,u,g,p,m,N,$,x,b;function k(e){t[6](e)}let _={};void 0!==t[1]&&(_.dialogNode=t[1]),i=new rt({props:_}),z.push((()=>Q(i,"dialogNode",k)));let w=t[2],C=[];for(let e=0;e<w.length;e+=1)C[e]=ft(dt(t,w,e));return{c(){e=f("h5"),e.textContent="Nouvelle réplique",n=h(),W(i.$$.fragment),r=h(),s=f("button"),s.textContent="Ajouter",a=h(),u=f("h5"),u.textContent="Réplique existante",g=h(),p=f("select");for(let t=0;t<C.length;t+=1)C[t].c();m=h(),N=f("button"),N.textContent="Ajouter",void 0===t[0]&&A((()=>t[7].call(p)))},m(o,l){c(o,e,l),c(o,n,l),X(i,o,l),c(o,r,l),c(o,s,l),c(o,a,l),c(o,u,l),c(o,g,l),c(o,p,l);for(let t=0;t<C.length;t+=1)C[t].m(p,null);y(p,t[0]),c(o,m,l),c(o,N,l),$=!0,x||(b=[v(s,"click",t[4]),v(p,"change",t[7]),v(N,"click",t[3])],x=!0)},p(t,[e]){const n={};if(!l&&2&e&&(l=!0,n.dialogNode=t[1],I((()=>l=!1))),i.$set(n),4&e){let n;for(w=t[2],n=0;n<w.length;n+=1){const o=dt(t,w,n);C[n]?C[n].p(o,e):(C[n]=ft(o),C[n].c(),C[n].m(p,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=w.length}5&e&&y(p,t[0])},i(t){$||(V(i.$$.fragment,t),$=!0)},o(t){G(i.$$.fragment,t),$=!1},d(t){t&&d(e),t&&d(n),Y(i,t),t&&d(r),t&&d(s),t&&d(a),t&&d(u),t&&d(g),t&&d(p),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(C,t),t&&d(m),t&&d(N),x=!1,o(b)}}}function pt(t,e,n){let o,i;s(t,ut,(t=>n(8,o=t))),s(t,ct,(t=>n(2,i=t)));let l,{parentDialogNode:r}=e,u={id:"",text:{fr:"",en:""},nextNodes:[],character:"NPC1",attribution:{leader:0,bricoleur:0,coequipier:0,planificateur:0,idealiste:0,creatif:0,audacieux:0,explorateur:0}};const c=q();return t.$$set=t=>{"parentDialogNode"in t&&n(5,r=t.parentDialogNode)},[l,u,i,function(){r.nextNodes.includes(l)||n(5,r.nextNodes=[...r.nextNodes,l],r),c("updateNodeLists",{})},function(){const t=Object.keys(o.dialogNodes);let e=t.length+1;for(;t.includes(String(e)););n(1,u.id=String(e),u),a(ut,o.dialogNodes[String(e)]=u,o),n(5,r.nextNodes=[...r.nextNodes,String(e)],r),c("updateNodeLists",{})},r,function(t){u=t,n(1,u)},function(){l=k(this),n(0,l)}]}class ht extends et{constructor(t){super(),tt(this,t,pt,gt,l,{parentDialogNode:5})}}function mt(t,e,n){const o=t.slice();return o[24]=e[n],o[25]=e,o[26]=n,o}function vt(e){let n;return{c(){n=f("span"),n.textContent="¤",N(n,"title","Noeud terminal"),N(n,"class","svelte-idywcr")},m(t,e){c(t,n,e)},p:t,d(t){t&&d(n)}}}function Nt(t){let e,n,i,l,r,s,a,m,$,b,y,k,w,C=t[0].nextNodes.length+"";return{c(){e=g("svg"),n=g("use"),i=h(),l=g("svg"),r=g("use"),s=h(),a=f("span"),m=p("("),$=p(C),b=p(")"),N(n,"href","assets/sprite_icons.svg#angle-double-right"),_(e,"is-hidden",t[3]),N(r,"href","assets/sprite_icons.svg#angle-double-down"),_(l,"is-hidden",!t[3]),N(a,"class","is-primary svelte-idywcr"),N(a,"title",y="Ce noeud mène à "+t[0].nextNodes.length+" réplique(s)")},m(o,d){c(o,e,d),u(e,n),c(o,i,d),c(o,l,d),u(l,r),c(o,s,d),c(o,a,d),u(a,m),u(a,$),u(a,b),k||(w=[v(e,"click",t[11]),v(l,"click",t[11]),v(a,"click",t[11])],k=!0)},p(t,n){8&n&&_(e,"is-hidden",t[3]),8&n&&_(l,"is-hidden",!t[3]),1&n&&C!==(C=t[0].nextNodes.length+"")&&x($,C),1&n&&y!==(y="Ce noeud mène à "+t[0].nextNodes.length+" réplique(s)")&&N(a,"title",y)},d(t){t&&d(e),t&&d(i),t&&d(l),t&&d(s),t&&d(a),k=!1,o(w)}}}function $t(e){let n,o,i,l,r;return{c(){n=f("span"),o=g("svg"),i=g("use"),N(i,"href","assets/sprite_icons.svg#times-circle-solid"),N(o,"class","is-float-right ml-1"),N(n,"title","Supprimer le noeud (irréversible)"),N(n,"class","svelte-idywcr")},m(t,s){c(t,n,s),u(n,o),u(o,i),l||(r=v(o,"click",e[15]),l=!0)},p:t,d(t){t&&d(n),l=!1,r()}}}function xt(e){let n,o,i,l,r;return{c(){n=f("span"),o=g("svg"),i=g("use"),N(i,"href","assets/sprite_icons.svg#times-circle-regular"),N(o,"class","is-float-right"),N(n,"title","Supprimer la filiation (le noeud ne sera pas supprimé, seul son lien avec son noeud parent)"),N(n,"class","svelte-idywcr")},m(t,s){c(t,n,s),u(n,o),u(o,i),l||(r=v(o,"click",e[14]),l=!0)},p:t,d(t){t&&d(n),l=!1,r()}}}function bt(t){let e,n,o;function i(e){t[19](e)}let l={};return void 0!==t[0]&&(l.dialogNode=t[0]),e=new rt({props:l}),z.push((()=>Q(e,"dialogNode",i))),{c(){W(e.$$.fragment)},m(t,n){X(e,t,n),o=!0},p(t,o){const i={};!n&&1&o&&(n=!0,i.dialogNode=t[0],I((()=>n=!1))),e.$set(i)},i(t){o||(V(e.$$.fragment,t),o=!0)},o(t){G(e.$$.fragment,t),o=!1},d(t){Y(e,t)}}}function yt(t){let e,n;return e=new ht({props:{parentDialogNode:t[0]}}),e.$on("updateNodeLists",t[20]),{c(){W(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.parentDialogNode=t[0]),e.$set(o)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function kt(t,e){let n,o,i,l;function r(t){e[21](t,e[24])}let s={gender:e[2],language:e[1],parentNodeId:e[0].id};return void 0!==e[8].dialogNodes[e[24]]&&(s.dialogNode=e[8].dialogNodes[e[24]]),o=new Ct({props:s}),z.push((()=>Q(o,"dialogNode",r))),o.$on("updateNodeLists",e[22]),{key:t,first:null,c(){n=m(),W(o.$$.fragment),this.first=n},m(t,e){c(t,n,e),X(o,t,e),l=!0},p(t,n){e=t;const l={};4&n&&(l.gender=e[2]),2&n&&(l.language=e[1]),1&n&&(l.parentNodeId=e[0].id),!i&&257&n&&(i=!0,l.dialogNode=e[8].dialogNodes[e[24]],I((()=>i=!1))),o.$set(l)},i(t){l||(V(o.$$.fragment,t),l=!0)},o(t){G(o.$$.fragment,t),l=!1},d(t){t&&d(n),Y(o,t)}}}function _t(t){let e,n,i,l,r,s,a,m,$,b,y,k,w,C,q,E,j,z,L,O,S,P,A,I,R,D,M,U,J,B,Q,W,X,Y=t[0].character+"",Z=t[9](t[0].text)+"",tt=(t[0].incomingNodes?.length||0)+"",et=[],nt=new Map;function ot(t,e){return t[5]?vt:Nt}let it=ot(t),lt=it(t),rt="1"!==t[0].id&&$t(t),st=t[0].incomingNodes.length>0&&xt(t),at=t[6]&&bt(t),ut=t[7]&&yt(t),ct=t[0].nextNodes;const dt=t=>t[26];for(let e=0;e<ct.length;e+=1){let n=mt(t,ct,e),o=dt(n);nt.set(o,et[e]=kt(o,n))}return{c(){e=f("li"),n=f("div"),i=f("p"),lt.c(),l=h(),r=f("strong"),s=p(Y),a=p(":\n      "),m=f("span"),$=p('"'),b=p(Z),y=p('"'),k=h(),w=g("svg"),C=g("use"),q=h(),E=f("span"),j=p("⇶ "),z=p(tt),L=p(" -"),S=h(),P=f("span"),A=g("svg"),I=g("use"),R=h(),rt&&rt.c(),D=h(),st&&st.c(),M=h(),at&&at.c(),U=h(),ut&&ut.c(),J=h(),B=f("ul");for(let t=0;t<et.length;t+=1)et[t].c();N(r,"class","svelte-idywcr"),N(m,"class","italic svelte-idywcr"),N(C,"href","assets/sprite_icons.svg#edit"),N(E,"class","is-primary svelte-idywcr"),N(E,"title",O=(t[0].incomingNodes?.length||0)+" répliques mène(nt) à ce noeud"),_(E,"is-hidden",!t[4]),N(I,"href","assets/sprite_icons.svg#plus-square"),N(P,"title","Ajouter une sous-réplique"),N(P,"class","svelte-idywcr"),N(i,"class","svelte-idywcr"),N(n,"class","dialog-node svelte-idywcr"),_(n,"is-player","Player"===t[0].character),_(B,"is-hidden",!t[3]),N(e,"id",t[10])},m(o,d){c(o,e,d),u(e,n),u(n,i),lt.m(i,null),u(i,l),u(i,r),u(r,s),u(i,a),u(i,m),u(m,$),u(m,b),u(m,y),u(i,k),u(i,w),u(w,C),u(i,q),u(i,E),u(E,j),u(E,z),u(E,L),u(i,S),u(i,P),u(P,A),u(A,I),u(i,R),rt&&rt.m(i,null),u(i,D),st&&st.m(i,null),u(n,M),at&&at.m(n,null),u(n,U),ut&&ut.m(n,null),u(e,J),u(e,B);for(let t=0;t<et.length;t+=1)et[t].m(B,null);Q=!0,W||(X=[v(r,"click",t[11]),v(m,"click",t[11]),v(w,"click",t[12]),v(A,"click",t[13])],W=!0)},p(t,[e]){it===(it=ot(t))&&lt?lt.p(t,e):(lt.d(1),lt=it(t),lt&&(lt.c(),lt.m(i,l))),(!Q||1&e)&&Y!==(Y=t[0].character+"")&&x(s,Y),(!Q||1&e)&&Z!==(Z=t[9](t[0].text)+"")&&x(b,Z),(!Q||1&e)&&tt!==(tt=(t[0].incomingNodes?.length||0)+"")&&x(z,tt),(!Q||1&e&&O!==(O=(t[0].incomingNodes?.length||0)+" répliques mène(nt) à ce noeud"))&&N(E,"title",O),16&e&&_(E,"is-hidden",!t[4]),"1"!==t[0].id?rt?rt.p(t,e):(rt=$t(t),rt.c(),rt.m(i,D)):rt&&(rt.d(1),rt=null),t[0].incomingNodes.length>0?st?st.p(t,e):(st=xt(t),st.c(),st.m(i,null)):st&&(st.d(1),st=null),t[6]?at?(at.p(t,e),64&e&&V(at,1)):(at=bt(t),at.c(),V(at,1),at.m(n,U)):at&&(F(),G(at,1,1,(()=>{at=null})),T()),t[7]?ut?(ut.p(t,e),128&e&&V(ut,1)):(ut=yt(t),ut.c(),V(ut,1),ut.m(n,null)):ut&&(F(),G(ut,1,1,(()=>{ut=null})),T()),1&e&&_(n,"is-player","Player"===t[0].character),263&e&&(ct=t[0].nextNodes,F(),et=K(et,e,dt,1,t,ct,nt,B,H,kt,null,mt),T()),8&e&&_(B,"is-hidden",!t[3])},i(t){if(!Q){V(at),V(ut);for(let t=0;t<ct.length;t+=1)V(et[t]);Q=!0}},o(t){G(at),G(ut);for(let t=0;t<et.length;t+=1)G(et[t]);Q=!1},d(t){t&&d(e),lt.d(),rt&&rt.d(),st&&st.d(),at&&at.d(),ut&&ut.d();for(let t=0;t<et.length;t+=1)et[t].d();W=!1,o(X)}}}function wt(t,e,n){let o;var i,l;s(t,ut,(t=>n(8,o=t)));let{language:r}=e,{gender:u}=e,{dialogNode:c}=e,{parentNodeId:d="1"}=e,f=!1,g=!1,p=!1,h=!1,m=!1;const v=q(),N=`${"0".repeat(5-String(c.id).length)}${c.id}`;return t.$$set=t=>{"language"in t&&n(1,r=t.language),"gender"in t&&n(2,u=t.gender),"dialogNode"in t&&n(0,c=t.dialogNode),"parentNodeId"in t&&n(16,d=t.parentNodeId)},t.$$.update=()=>{131073&t.$$.dirty&&n(4,g=(null===n(17,i=null==c?void 0:c.incomingNodes)||void 0===i?void 0:i.length)>1||!1),262145&t.$$.dirty&&n(5,p=(null===n(18,l=null==c?void 0:c.incomingNodes)||void 0===l?void 0:l.length)>1)},[c,r,u,f,g,p,h,m,o,t=>{var e,n;return(null===(e=null==t?void 0:t[r])||void 0===e?void 0:e[u])||(null===(n=null==t?void 0:t[r])||void 0===n?void 0:n.m)||(null==t?void 0:t[r])||t.fr},N,function(){n(3,f=!f)},function(){n(6,h=!h)},function(){n(7,m=!m)},function(){a(ut,o.dialogNodes[d].nextNodes=o.dialogNodes[d].nextNodes.filter((t=>t!==c.id)),o),v("updateNodeLists",{})},function(){Object.keys(o.dialogNodes).forEach((t=>{a(ut,o.dialogNodes[t].nextNodes=o.dialogNodes[t].nextNodes.filter((t=>t!==c.id)),o)})),delete o.dialogNodes[c.id],v("updateNodeLists",{})},d,i,l,function(t){c=t,n(0,c)},function(e){E(t,e)},function(e,n){t.$$.not_equal(o.dialogNodes[n],e)&&(o.dialogNodes[n]=e,ut.set(o))},function(e){E(t,e)}]}class Ct extends et{constructor(t){super(),tt(this,t,wt,_t,l,{language:1,gender:2,dialogNode:0,parentNodeId:16})}}function qt(t,e,n){const o=t.slice();return o[18]=e[n],o[19]=e,o[20]=n,o}function Et(t,e,n){const o=t.slice();return o[18]=e[n],o[21]=e,o[20]=n,o}function jt(e){let n;return{c(){n=f("p"),n.textContent="Veuillez charger un fichier de scénario JSON."},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}function zt(t){let e,n,o,i,l,r,s,a,g,$,b,y,k,_,w,C,q,E,j,L=t[5].metadata.part+"",O=t[5].metadata.chapter+"";function S(e){t[10](e)}let P={gender:t[0],language:t[1]};void 0!==t[5].dialogNodes[1]&&(P.dialogNode=t[5].dialogNodes[1]),y=new Ct({props:P}),z.push((()=>Q(y,"dialogNode",S))),y.$on("updateNodeLists",t[6]);let A=t[4].length>0&&Lt(t),R=t[3].length>0&&St(t);return{c(){e=f("a"),e.textContent="Exporter Scénario",n=h(),o=f("h3"),i=p("Partie "),l=p(L),r=p(": Chapitre "),s=p(O),a=h(),g=f("h4"),g.textContent="Noeud Racine:",$=h(),b=f("ul"),W(y.$$.fragment),_=h(),A&&A.c(),w=h(),R&&R.c(),C=m(),N(e,"id","downloadLink"),N(g,"class","svelte-1y0xxyr")},m(d,f){c(d,e,f),c(d,n,f),c(d,o,f),u(o,i),u(o,l),u(o,r),u(o,s),c(d,a,f),c(d,g,f),c(d,$,f),c(d,b,f),X(y,b,null),c(d,_,f),A&&A.m(d,f),c(d,w,f),R&&R.m(d,f),c(d,C,f),q=!0,E||(j=v(e,"click",t[8]),E=!0)},p(t,e){(!q||32&e)&&L!==(L=t[5].metadata.part+"")&&x(l,L),(!q||32&e)&&O!==(O=t[5].metadata.chapter+"")&&x(s,O);const n={};1&e&&(n.gender=t[0]),2&e&&(n.language=t[1]),!k&&32&e&&(k=!0,n.dialogNode=t[5].dialogNodes[1],I((()=>k=!1))),y.$set(n),t[4].length>0?A?(A.p(t,e),16&e&&V(A,1)):(A=Lt(t),A.c(),V(A,1),A.m(w.parentNode,w)):A&&(F(),G(A,1,1,(()=>{A=null})),T()),t[3].length>0?R?(R.p(t,e),8&e&&V(R,1)):(R=St(t),R.c(),V(R,1),R.m(C.parentNode,C)):R&&(F(),G(R,1,1,(()=>{R=null})),T())},i(t){q||(V(y.$$.fragment,t),V(A),V(R),q=!0)},o(t){G(y.$$.fragment,t),G(A),G(R),q=!1},d(t){t&&d(e),t&&d(n),t&&d(o),t&&d(a),t&&d(g),t&&d($),t&&d(b),Y(y),t&&d(_),A&&A.d(t),t&&d(w),R&&R.d(t),t&&d(C),E=!1,j()}}}function Lt(t){let e,n,o,i,l=[],r=new Map,s=t[4];const a=t=>t[20];for(let e=0;e<s.length;e+=1){let n=Et(t,s,e),o=a(n);r.set(o,l[e]=Ot(o,n))}return{c(){e=f("h4"),e.textContent="Noeud(s) à incidences multiples:",n=h(),o=f("ul");for(let t=0;t<l.length;t+=1)l[t].c();N(e,"title","Noeuds liés par plusieurs répliques"),N(e,"class","svelte-1y0xxyr")},m(t,r){c(t,e,r),c(t,n,r),c(t,o,r);for(let t=0;t<l.length;t+=1)l[t].m(o,null);i=!0},p(t,e){115&e&&(s=t[4],F(),l=K(l,e,a,1,t,s,r,o,H,Ot,null,Et),T())},i(t){if(!i){for(let t=0;t<s.length;t+=1)V(l[t]);i=!0}},o(t){for(let t=0;t<l.length;t+=1)G(l[t]);i=!1},d(t){t&&d(e),t&&d(n),t&&d(o);for(let t=0;t<l.length;t+=1)l[t].d()}}}function Ot(t,e){let n,o,i,l;function r(t){e[11](t,e[18])}let s={gender:e[0],language:e[1]};return void 0!==e[5].dialogNodes[e[18]]&&(s.dialogNode=e[5].dialogNodes[e[18]]),o=new Ct({props:s}),z.push((()=>Q(o,"dialogNode",r))),o.$on("updateNodeLists",e[6]),{key:t,first:null,c(){n=m(),W(o.$$.fragment),this.first=n},m(t,e){c(t,n,e),X(o,t,e),l=!0},p(t,n){e=t;const l={};1&n&&(l.gender=e[0]),2&n&&(l.language=e[1]),!i&&48&n&&(i=!0,l.dialogNode=e[5].dialogNodes[e[18]],I((()=>i=!1))),o.$set(l)},i(t){l||(V(o.$$.fragment,t),l=!0)},o(t){G(o.$$.fragment,t),l=!1},d(t){t&&d(n),Y(o,t)}}}function St(t){let e,n,o,i,l=[],r=new Map,s=t[3];const a=t=>t[20];for(let e=0;e<s.length;e+=1){let n=qt(t,s,e),o=a(n);r.set(o,l[e]=Pt(o,n))}return{c(){e=f("h4"),e.textContent="Noeud(s) orphelin(s):",n=h(),o=f("ul");for(let t=0;t<l.length;t+=1)l[t].c();N(e,"title","Noeuds n'étant la réplique d'aucun autre (et n'étant pas le noeud racine)"),N(e,"class","svelte-1y0xxyr")},m(t,r){c(t,e,r),c(t,n,r),c(t,o,r);for(let t=0;t<l.length;t+=1)l[t].m(o,null);i=!0},p(t,e){107&e&&(s=t[3],F(),l=K(l,e,a,1,t,s,r,o,H,Pt,null,qt),T())},i(t){if(!i){for(let t=0;t<s.length;t+=1)V(l[t]);i=!0}},o(t){for(let t=0;t<l.length;t+=1)G(l[t]);i=!1},d(t){t&&d(e),t&&d(n),t&&d(o);for(let t=0;t<l.length;t+=1)l[t].d()}}}function Pt(t,e){let n,o,i,l;function r(t){e[12](t,e[18])}let s={gender:e[0],language:e[1],parentNodeId:"1"};return void 0!==e[5].dialogNodes[e[18]]&&(s.dialogNode=e[5].dialogNodes[e[18]]),o=new Ct({props:s}),z.push((()=>Q(o,"dialogNode",r))),o.$on("updateNodeLists",e[6]),{key:t,first:null,c(){n=m(),W(o.$$.fragment),this.first=n},m(t,e){c(t,n,e),X(o,t,e),l=!0},p(t,n){e=t;const l={};1&n&&(l.gender=e[0]),2&n&&(l.language=e[1]),!i&&40&n&&(i=!0,l.dialogNode=e[5].dialogNodes[e[18]],I((()=>i=!1))),o.$set(l)},i(t){l||(V(o.$$.fragment,t),l=!0)},o(t){G(o.$$.fragment,t),l=!1},d(t){t&&d(n),Y(o,t)}}}function At(t){let e,n,i,l,r,s,a,g,p,m,$,x,b;const y=[zt,jt],k=[];function _(t,e){return 32&e&&(g=!!(Object.keys(t[5].dialogNodes).length>0)),g?0:1}return p=_(t,-1),m=k[p]=y[p](t),{c(){e=f("main"),n=f("h1"),n.textContent="Auto-Diagnostique",i=h(),l=f("h2"),l.textContent="Outil d'édition de dialogues",r=h(),s=f("input"),a=h(),m.c(),N(n,"class","svelte-1y0xxyr"),N(s,"accept","application/json"),N(s,"type","file"),N(s,"id","scenarioFile"),N(e,"class","svelte-1y0xxyr")},m(o,d){c(o,e,d),u(e,n),u(e,i),u(e,l),u(e,r),u(e,s),u(e,a),k[p].m(e,null),$=!0,x||(b=[v(s,"change",t[9]),v(s,"change",t[7])],x=!0)},p(t,[n]){let o=p;p=_(t,n),p===o?k[p].p(t,n):(F(),G(k[o],1,1,(()=>{k[o]=null})),T(),m=k[p],m?m.p(t,n):(m=k[p]=y[p](t),m.c()),V(m,1),m.m(e,null))},i(t){$||(V(m),$=!0)},o(t){G(m),$=!1},d(t){t&&d(e),k[p].d(),x=!1,o(b)}}}function It(t,e,n){let o;s(t,ut,(t=>n(5,o=t)));var i=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,l){function r(t){try{a(o.next(t))}catch(t){l(t)}}function s(t){try{a(o.throw(t))}catch(t){l(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}a((o=o.apply(t,e||[])).next())}))};let l,r,{gender:u}=e,{language:c}=e,d=[],f=[];function g(){Object.entries(o.dialogNodes).forEach((([t,e])=>{e.incomingNodes=[]})),Object.entries(o.dialogNodes).forEach((([t,e])=>{e.nextNodes.forEach((e=>{a(ut,o.dialogNodes[e].incomingNodes=[...o.dialogNodes[e].incomingNodes||[],t],o)}))})),n(3,d=Object.keys(o.dialogNodes).reduce(((t,e)=>{var n,i;return 0===(null===(i=null===(n=o.dialogNodes[e])||void 0===n?void 0:n.incomingNodes)||void 0===i?void 0:i.length)&&"1"!==e?[...t,e]:t}),[])),n(4,f=Object.keys(o.dialogNodes).reduce(((t,e)=>{var n,i;return(null===(i=null===(n=o.dialogNodes[e])||void 0===n?void 0:n.incomingNodes)||void 0===i?void 0:i.length)>1?[...t,e]:t}),[]))}return t.$$set=t=>{"gender"in t&&n(0,u=t.gender),"language"in t&&n(1,c=t.language)},[u,c,l,d,f,o,g,function(){return i(this,void 0,void 0,(function*(){const t=yield l[0].text();r=l[0].name,ut.set(JSON.parse(t)),g()}))},function(){const t=document.createElement("a"),e=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),n=URL.createObjectURL(e);t.href=n,t.download=r,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(n)},function(){l=this.files,n(2,l)},function(e){t.$$.not_equal(o.dialogNodes[1],e)&&(o.dialogNodes[1]=e,ut.set(o))},function(e,n){t.$$.not_equal(o.dialogNodes[n],e)&&(o.dialogNodes[n]=e,ut.set(o))},function(e,n){t.$$.not_equal(o.dialogNodes[n],e)&&(o.dialogNodes[n]=e,ut.set(o))}]}return new class extends et{constructor(t){super(),tt(this,t,It,At,l,{gender:0,language:1})}}({target:document.body,props:{language:"fr",gender:"m"}})}();
//# sourceMappingURL=bundle.js.map