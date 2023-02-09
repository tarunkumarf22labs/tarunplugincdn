(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(':root{--color-border: "" ;--color-width: "" ;--color-animation: "" ;--width-smallbox: "";--height-smallbox: "";--text-color: "";--bottom-css: "";--row-position: "";--padding-x: "";--padding-y: "";--grid-gap: "" ;--f22-display: "";--f22-bottom-color: "";--f22-bottom-background: "";--largecontainer-width: "";--largecontainer-height: "";--buttonloadanimation: ""}*{margin:0;padding:0;box-sizing:border-box}.video-container{width:var(--largecontainer-width);height:var(--largecontainer-height);position:fixed;bottom:10px;border-radius:10px;z-index:10000;background-color:#000;isolation:isolate;z-index:100}.video-container-box{width:100%;height:100%;position:relative;border-radius:10px;isolation:isolate}.video-container video{width:100%;height:100%;object-fit:cover;border-radius:10px;box-shadow:-10px 4px 65px #0000001a;isolation:isolate}.full{width:100%}.overlay-thing{position:absolute;bottom:0;width:100%;padding:1rem;padding-bottom:0;margin-bottom:3.8rem;text-align:center;isolation:isolate}.flexiblebutton{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:100%;isolation:isolate}.overlay-thing-button{display:flex;align-items:center;padding:var(--padding-y) var(--padding-x);border-radius:20px;margin-bottom:8px;background-color:#0009;color:#fff;cursor:pointer;font-size:12px!important;width:100%;text-align:left;isolation:isolate;font-family:Nunito Sans,sans-serif;font-weight:700}.large-container-buttonparent{position:absolute;bottom:var(--bottom-css);width:100%;padding:20px!important;isolation:isolate;display:var(--f22-display);grid-template-columns:var(--row-position);grid-gap:var(--grid-gap)}a{color:inherit;text-decoration:none;font-size:inherit}.small-video-container-box-parent{width:168px;height:218px;position:fixed;z-index:100;isolation:isolate;visibility:visible;z-index:2147483647}.smsmsmhidden{visibility:hidden}.small-video-container-box{position:absolute;z-index:10;width:160px;height:160px;z-index:100;border-radius:50%;isolation:isolate}.pageloadanimation{animation:var(--buttonloadanimation) .9s ease-out;animation-iteration-count:2}video{height:100%;width:100%;object-fit:cover;isolation:isolate}.close-button{position:absolute;right:0;top:-10px;background-color:#000;height:30px;width:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:100;cursor:pointer;isolation:isolate}.cls-sm{height:20px;width:20px;top:-5px;padding:5px}.widgetheader{position:absolute;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;font-size:15px;color:var(--text-color);font-family:sans-serif;text-shadow:1px 1px #000}.sm-video{z-index:1}.lg-credit{color:#fff;position:absolute;bottom:0!important;width:100%!important;text-align:center;font-size:10px!important;font-family:sans-serif;margin:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.lg-credit a:hover{color:#fff}.video-size{min-height:100vh;width:100%;background-color:#000}.mutedbutton{position:absolute;bottom:28px;top:0;z-index:1;left:10px;width:fit-content;height:fit-content;opacity:1;background:transparent;border:none;pointer-events:none}.mutedbutton svg{padding-top:10px;padding-left:5px;width:fit-content;min-width:30px;min-height:45px;display:block;fill:#fff;pointer-events:fill}.replay{left:80px}.replay svg{width:16px}.blink{animation:blink-animation 1s steps(5,start) infinite;-webkit-animation:blink-animation 1s steps(5,start) infinite}@keyframes blink-animation{to{visibility:hidden}}@-webkit-keyframes blink-animation{to{visibility:hidden}}.pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}.brick{position:absolute;bottom:10px;z-index:1;right:10px;width:3rem;height:3rem;border-radius:50%;opacity:1;border:none}.brick h1{font-size:1.2rem}.circle{border-radius:50%}.smvideo-container{width:fit-content;width:var(--width-smallbox);height:var(--height-smallbox);border:var(--color-width) solid var(--color-border)!important}.smvideo-container-round{width:fit-content;border-radius:50%;width:160px;height:160px}.smvideo-container-round:before{width:100%;height:100%;content:"";top:0;bottom:0;left:0;position:absolute;top:-8.2px;bottom:10px;left:-8.2px;right:0;border:var(--color-width) solid var(--color-border)!important;border-radius:50%;animation:pulse 1s infinite;box-sizing:content-box}.loader-container svg{padding-top:80px;position:absolute;z-index:-10}.overlay-thing-button:hover{box-shadow:0 .5em .5em -.4em var(--hover);transform:translateY(-.25em);transition:.5s ease-in-out}.icon-container{padding-right:1rem}.share{padding:3.5px;padding-right:1rem}@keyframes popofbuttton{0%{transform:translateY(100%)}70%{transform:translateY(-50%)}to{transform:translateY(0)}}@keyframes poprightfbuttton{0%{transform:translate(100%)}70%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes popleftfbuttton{0%{transform:translate(-100%)}70%{transform:translate(50%)}to{transform:translate(0)}}@keyframes poptopbutton{0%{transform:translatey(-100%)}70%{transform:translatey(50%)}to{transform:translate(0)}}')),document.head.appendChild(t)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
(function(){"use strict";const z=new Set,T=new Map;new window.MutationObserver(t=>{for(const e of t)if(e.type==="attributes"){const{target:o,attributeName:i,oldValue:s}=e;if(T.has(o)){let[n,c]=T.get(o);if(c.includes(i)||c.length==0){const _=o.getAttribute(i);n(i,s,_,o)}}}z.forEach(e=>e())}).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0});function Be(t,e){setTimeout(o),z.add(o);function o(){document.querySelectorAll(t).forEach(i=>{if(!T.has(i)){const{connected:s=()=>{},disconnected:n=()=>{},attributeChanged:c=()=>{},observedAttributes:_=[]}=e(i);T.set(i,[c,_]),s(),Ue(t,i,()=>n())}})}}function Ue(t,e,o){setTimeout(i),z.add(i);function i(){e&&document.contains(e)&&e.matches(t)||(T.delete(e),z.delete(i),o())}}var B,u,ee,D,te,ne,U={},oe=[],Fe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(t,e){for(var o in e)t[o]=e[o];return t}function ie(t){var e=t.parentNode;e&&e.removeChild(t)}function re(t,e,o){var i,s,n,c={};for(n in e)n=="key"?i=e[n]:n=="ref"?s=e[n]:c[n]=e[n];if(arguments.length>2&&(c.children=arguments.length>3?B.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)c[n]===void 0&&(c[n]=t.defaultProps[n]);return F(t,c,i,s,null)}function F(t,e,o,i,s){var n={type:t,props:e,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++ee};return s==null&&u.vnode!=null&&u.vnode(n),n}function O(t){return t.children}function I(t,e){this.props=t,this.context=e}function N(t,e){if(e==null)return t.__?N(t.__,t.__.__k.indexOf(t)+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?N(t):null}function le(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return le(t)}}function se(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!W.__r++||ne!==u.debounceRendering)&&((ne=u.debounceRendering)||te)(W)}function W(){for(var t;W.__r=D.length;)t=D.sort(function(e,o){return e.__v.__b-o.__v.__b}),D=[],t.some(function(e){var o,i,s,n,c,_;e.__d&&(c=(n=(o=e).__v).__e,(_=o.__P)&&(i=[],(s=S({},n)).__v=n.__v+1,G(_,n,s,o.__n,_.ownerSVGElement!==void 0,n.__h!=null?[c]:null,i,c??N(n),n.__h),fe(i,n),n.__e!=c&&le(n)))})}function ce(t,e,o,i,s,n,c,_,d,p){var r,v,h,a,f,E,g,w=i&&i.__k||oe,x=w.length;for(o.__k=[],r=0;r<e.length;r++)if((a=o.__k[r]=(a=e[r])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?F(null,a,null,null,a):Array.isArray(a)?F(O,{children:a},null,null,null):a.__b>0?F(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=o,a.__b=o.__b+1,(h=w[r])===null||h&&a.key==h.key&&a.type===h.type)w[r]=void 0;else for(v=0;v<x;v++){if((h=w[v])&&a.key==h.key&&a.type===h.type){w[v]=void 0;break}h=null}G(t,a,h=h||U,s,n,c,_,d,p),f=a.__e,(v=a.ref)&&h.ref!=v&&(g||(g=[]),h.ref&&g.push(h.ref,null,a),g.push(v,a.__c||f,a)),f!=null?(E==null&&(E=f),typeof a.type=="function"&&a.__k===h.__k?a.__d=d=ae(a,d,t):d=_e(t,a,h,w,f,d),typeof o.type=="function"&&(o.__d=d)):d&&h.__e==d&&d.parentNode!=t&&(d=N(h))}for(o.__e=E,r=x;r--;)w[r]!=null&&(typeof o.type=="function"&&w[r].__e!=null&&w[r].__e==o.__d&&(o.__d=N(i,r+1)),me(w[r],w[r]));if(g)for(r=0;r<g.length;r++)pe(g[r],g[++r],g[++r])}function ae(t,e,o){for(var i,s=t.__k,n=0;s&&n<s.length;n++)(i=s[n])&&(i.__=t,e=typeof i.type=="function"?ae(i,e,o):_e(o,i,i,s,i.__e,e));return e}function _e(t,e,o,i,s,n){var c,_,d;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(o==null||s!=n||s.parentNode==null)e:if(n==null||n.parentNode!==t)t.appendChild(s),c=null;else{for(_=n,d=0;(_=_.nextSibling)&&d<i.length;d+=2)if(_==s)break e;t.insertBefore(s,n),c=n}return c!==void 0?c:s.nextSibling}function Oe(t,e,o,i,s){var n;for(n in o)n==="children"||n==="key"||n in e||R(t,n,null,o[n],i);for(n in e)s&&typeof e[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||o[n]===e[n]||R(t,n,e[n],o[n],i)}function ue(t,e,o){e[0]==="-"?t.setProperty(e,o):t[e]=o==null?"":typeof o!="number"||Fe.test(e)?o:o+"px"}function R(t,e,o,i,s){var n;e:if(e==="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)o&&e in o||ue(t.style,e,"");if(o)for(e in o)i&&o[e]===i[e]||ue(t.style,e,o[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=o,o?i||t.addEventListener(e,n?he:de,n):t.removeEventListener(e,n?he:de,n);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=o??"";break e}catch{}typeof o=="function"||(o!=null&&(o!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,o):t.removeAttribute(e))}}function de(t){this.l[t.type+!1](u.event?u.event(t):t)}function he(t){this.l[t.type+!0](u.event?u.event(t):t)}function G(t,e,o,i,s,n,c,_,d){var p,r,v,h,a,f,E,g,w,x,A,H=e.type;if(e.constructor!==void 0)return null;o.__h!=null&&(d=o.__h,_=e.__e=o.__e,e.__h=null,n=[_]),(p=u.__b)&&p(e);try{e:if(typeof H=="function"){if(g=e.props,w=(p=H.contextType)&&i[p.__c],x=p?w?w.props.value:p.__:i,o.__c?E=(r=e.__c=o.__c).__=r.__E:("prototype"in H&&H.prototype.render?e.__c=r=new H(g,x):(e.__c=r=new I(g,x),r.constructor=H,r.render=We),w&&w.sub(r),r.props=g,r.state||(r.state={}),r.context=x,r.__n=i,v=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),H.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,H.getDerivedStateFromProps(g,r.__s))),h=r.props,a=r.state,v)H.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(H.getDerivedStateFromProps==null&&g!==h&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,x),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,x)===!1||e.__v===o.__v){r.props=g,r.state=r.__s,e.__v!==o.__v&&(r.__d=!1),r.__v=e,e.__e=o.__e,e.__k=o.__k,e.__k.forEach(function(M){M&&(M.__=e)}),r.__h.length&&c.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,x),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(h,a,f)})}r.context=x,r.props=g,r.state=r.__s,(p=u.__r)&&p(e),r.__d=!1,r.__v=e,r.__P=t,p=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(i=S(S({},i),r.getChildContext())),v||r.getSnapshotBeforeUpdate==null||(f=r.getSnapshotBeforeUpdate(h,a)),A=p!=null&&p.type===O&&p.key==null?p.props.children:p,ce(t,Array.isArray(A)?A:[A],e,o,i,s,n,c,_,d),r.base=e.__e,e.__h=null,r.__h.length&&c.push(r),E&&(r.__E=r.__=null),r.__e=!1}else n==null&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=Ie(o.__e,e,o,i,s,n,c,d);(p=u.diffed)&&p(e)}catch(M){e.__v=null,(d||n!=null)&&(e.__e=_,e.__h=!!d,n[n.indexOf(_)]=null),u.__e(M,e,o)}}function fe(t,e){u.__c&&u.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){u.__e(i,o.__v)}})}function Ie(t,e,o,i,s,n,c,_){var d,p,r,v=o.props,h=e.props,a=e.type,f=0;if(a==="svg"&&(s=!0),n!=null){for(;f<n.length;f++)if((d=n[f])&&"setAttribute"in d==!!a&&(a?d.localName===a:d.nodeType===3)){t=d,n[f]=null;break}}if(t==null){if(a===null)return document.createTextNode(h);t=s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,h.is&&h),n=null,_=!1}if(a===null)v===h||_&&t.data===h||(t.data=h);else{if(n=n&&B.call(t.childNodes),p=(v=o.props||U).dangerouslySetInnerHTML,r=h.dangerouslySetInnerHTML,!_){if(n!=null)for(v={},f=0;f<t.attributes.length;f++)v[t.attributes[f].name]=t.attributes[f].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(Oe(t,h,v,s,_),r)e.__k=[];else if(f=e.props.children,ce(t,Array.isArray(f)?f:[f],e,o,i,s&&a!=="foreignObject",n,c,n?n[0]:o.__k&&N(o,0),_),n!=null)for(f=n.length;f--;)n[f]!=null&&ie(n[f]);_||("value"in h&&(f=h.value)!==void 0&&(f!==t.value||a==="progress"&&!f||a==="option"&&f!==v.value)&&R(t,"value",f,v.value,!1),"checked"in h&&(f=h.checked)!==void 0&&f!==t.checked&&R(t,"checked",f,v.checked,!1))}return t}function pe(t,e,o){try{typeof t=="function"?t(e):t.current=e}catch(i){u.__e(i,o)}}function me(t,e,o){var i,s;if(u.unmount&&u.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||pe(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){u.__e(n,e)}i.base=i.__P=null}if(i=t.__k)for(s=0;s<i.length;s++)i[s]&&me(i[s],e,typeof t.type!="function");o||t.__e==null||ie(t.__e),t.__e=t.__d=void 0}function We(t,e,o){return this.constructor(t,o)}function Re(t,e,o){var i,s,n;u.__&&u.__(t,e),s=(i=typeof o=="function")?null:o&&o.__k||e.__k,n=[],G(e,t=(!i&&o||e).__k=re(O,null,[t]),s||U,U,e.ownerSVGElement!==void 0,!i&&o?[o]:s?null:e.firstChild?B.call(e.childNodes):null,n,!i&&o?o:s?s.__e:e.firstChild,i),fe(n,t)}B=oe.slice,u={__e:function(t,e,o,i){for(var s,n,c;e=e.__;)if((s=e.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(t)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,i||{}),c=s.__d),c)return s.__E=s}catch(_){t=_}throw t}},ee=0,I.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},o),this.props)),t&&S(o,t),t!=null&&this.__v&&(e&&this.__h.push(e),se(this))},I.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),se(this))},I.prototype.render=O,D=[],te=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W.__r=0;var j,k,ve,q=0,ge=[],ye=u.__b,Ce=u.__r,we=u.diffed,be=u.__c,xe=u.unmount;function X(t,e){u.__h&&u.__h(k,t,q||e),q=0;var o=k.__H||(k.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function b(t){return q=1,je($e,t)}function je(t,e,o){var i=X(j++,2);return i.t=t,i.__c||(i.__=[o?o(e):$e(void 0,e),function(s){var n=i.t(i.__[0],s);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=k),i.__}function V(t,e){var o=X(j++,3);!u.__s&&Le(o.__H,e)&&(o.__=t,o.__H=e,k.__H.__h.push(o))}function ke(t){return q=5,qe(function(){return{current:t}},[])}function qe(t,e){var o=X(j++,7);return Le(o.__H,e)&&(o.__=t(),o.__H=e,o.__h=t),o.__}function Je(){for(var t;t=ge.shift();)if(t.__P)try{t.__H.__h.forEach(J),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){k=null,ye&&ye(t)},u.__r=function(t){Ce&&Ce(t),j=0;var e=(k=t.__c).__H;e&&(e.__h.forEach(J),e.__h.forEach(Y),e.__h=[])},u.diffed=function(t){we&&we(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(ge.push(e)!==1&&ve===u.requestAnimationFrame||((ve=u.requestAnimationFrame)||function(o){var i,s=function(){clearTimeout(n),He&&cancelAnimationFrame(i),setTimeout(o)},n=setTimeout(s,100);He&&(i=requestAnimationFrame(s))})(Je)),k=null},u.__c=function(t,e){e.some(function(o){try{o.__h.forEach(J),o.__h=o.__h.filter(function(i){return!i.__||Y(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],u.__e(i,o.__v)}}),be&&be(t,e)},u.unmount=function(t){xe&&xe(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(i){try{J(i)}catch(s){e=s}}),e&&u.__e(e,o.__v))};var He=typeof requestAnimationFrame=="function";function J(t){var e=k,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),k=e}function Y(t){var e=k;t.__c=t.__(),k=e}function Le(t,e){return!t||t.length!==e.length||e.some(function(o,i){return o!==t[i]})}function $e(t,e){return typeof e=="function"?e(t):e}const Ge=(t,e,o=[],i)=>{const s=n=>Re(re(()=>e(n)),n);Be(t,n=>({connected:()=>s(n),disconnected:()=>i&&i(),attributeChanged:()=>s(n),observedAttributes:o}))};var K;function P(t){return t.children}K={__e:function(t,e,o,i){for(var s,n,c;e=e.__;)if((s=e.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(t)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,i||{}),c=s.__d),c)return s.__E=s}catch(_){t=_}throw t}};var Xe=0;function l(t,e,o,i,s){var n,c,_={};for(c in e)c=="ref"?n=e[c]:_[c]=e[c];var d={type:t,props:_,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Xe,__source:s,__self:i};if(typeof t=="function"&&(n=t.defaultProps))for(c in n)_[c]===void 0&&(_[c]=n[c]);return K.vnode&&K.vnode(d),d}function Ye(){return l(P,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M8.14542 14H6.49769L9.00835 6.72727H10.9899L13.497 14H11.8493L10.0275 8.3892H9.9707L8.14542 14ZM8.04244 11.1413H11.9345V12.3416H8.04244V11.1413Z",fill:"black"})]})})}function Ke(){return l(P,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M7.82644 14V6.72727H10.7384C11.2734 6.72727 11.7197 6.80658 12.0771 6.9652C12.4346 7.12382 12.7033 7.34399 12.8833 7.62571C13.0632 7.90507 13.1531 8.22704 13.1531 8.59162C13.1531 8.87571 13.0963 9.12547 12.9827 9.34091C12.8691 9.55398 12.7128 9.72917 12.5139 9.86648C12.3174 10.0014 12.0925 10.0973 11.8392 10.1541V10.2251C12.1162 10.237 12.3754 10.3151 12.6169 10.4595C12.8608 10.6039 13.0584 10.8063 13.21 11.0668C13.3615 11.3248 13.4372 11.6326 13.4372 11.9901C13.4372 12.3759 13.3414 12.7204 13.1496 13.0234C12.9602 13.3241 12.6797 13.562 12.308 13.7372C11.9363 13.9124 11.4782 14 10.9337 14H7.82644ZM9.36408 12.7429H10.6176C11.0461 12.7429 11.3586 12.6612 11.5551 12.4979C11.7516 12.3321 11.8499 12.112 11.8499 11.8374C11.8499 11.6361 11.8013 11.4586 11.7043 11.3047C11.6072 11.1508 11.4687 11.0301 11.2888 10.9425C11.1112 10.8549 10.8994 10.8111 10.6531 10.8111H9.36408V12.7429ZM9.36408 9.7706H10.504C10.7147 9.7706 10.9017 9.7339 11.0651 9.66051C11.2308 9.58475 11.361 9.47822 11.4557 9.34091C11.5528 9.2036 11.6013 9.03906 11.6013 8.8473C11.6013 8.58452 11.5078 8.37263 11.3208 8.21165C11.1361 8.05066 10.8733 7.97017 10.5324 7.97017H9.36408V9.7706Z",fill:"black"})]})})}function Qe(){return l(P,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M13.2892 9.27344H11.7338C11.7054 9.07221 11.6474 8.89347 11.5598 8.73722C11.4722 8.5786 11.3598 8.44366 11.2225 8.33239C11.0852 8.22112 10.9266 8.13589 10.7466 8.0767C10.5691 8.01752 10.3761 7.98793 10.1678 7.98793C9.79137 7.98793 9.46348 8.08144 9.18413 8.26847C8.90477 8.45312 8.68815 8.72301 8.53427 9.07812C8.38039 9.43087 8.30344 9.85937 8.30344 10.3636C8.30344 10.8821 8.38039 11.3177 8.53427 11.6705C8.69052 12.0232 8.90832 12.2895 9.18768 12.4695C9.46703 12.6494 9.79019 12.7393 10.1571 12.7393C10.3631 12.7393 10.5537 12.7121 10.7289 12.6577C10.9064 12.6032 11.0639 12.5239 11.2012 12.4197C11.3385 12.3132 11.4521 12.1842 11.5421 12.0327C11.6344 11.8812 11.6983 11.7083 11.7338 11.5142L13.2892 11.5213C13.249 11.8551 13.1484 12.1771 12.9874 12.4872C12.8288 12.795 12.6145 13.0708 12.3446 13.3146C12.0771 13.5561 11.7575 13.7479 11.3858 13.8899C11.0165 14.0296 10.5987 14.0994 10.1323 14.0994C9.48361 14.0994 8.90359 13.9527 8.39222 13.6591C7.88323 13.3655 7.48076 12.9406 7.18484 12.3842C6.89128 11.8279 6.7445 11.1544 6.7445 10.3636C6.7445 9.57055 6.89364 8.89583 7.19194 8.33949C7.49023 7.78314 7.89506 7.35937 8.40643 7.06818C8.91779 6.77462 9.49308 6.62784 10.1323 6.62784C10.5537 6.62784 10.9443 6.68703 11.3042 6.8054C11.6664 6.92377 11.9872 7.09659 12.2665 7.32386C12.5459 7.54877 12.7731 7.82457 12.9483 8.15128C13.1259 8.47798 13.2395 8.85204 13.2892 9.27344Z",fill:"black"})]})})}function e1(){return l(P,{children:[l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M9.57253 14H6.99441V6.72727H9.59384C10.3254 6.72727 10.9551 6.87287 11.483 7.16406C12.011 7.45289 12.417 7.86837 12.7011 8.41051C12.9875 8.95265 13.1308 9.60133 13.1308 10.3565C13.1308 11.1141 12.9875 11.7652 12.7011 12.3097C12.417 12.8542 12.0086 13.272 11.4759 13.5632C10.9456 13.8544 10.3112 14 9.57253 14ZM8.53205 12.6825H9.50861C9.96316 12.6825 10.3455 12.602 10.6556 12.4411C10.9681 12.2777 11.2025 12.0256 11.3588 11.6847C11.5174 11.3414 11.5967 10.8987 11.5967 10.3565C11.5967 9.81913 11.5174 9.37997 11.3588 9.03906C11.2025 8.69815 10.9693 8.44721 10.6592 8.28622C10.349 8.12524 9.96671 8.04474 9.51216 8.04474H8.53205V12.6825Z",fill:"black"})]})," "]})}function t1(){return l(P,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M8.07058 14V6.72727H12.9711V7.99503H9.60822V9.72798H12.719V10.9957H9.60822V12.7322H12.9854V14H8.07058Z",fill:"black"})]})})}function n1(){return l(P,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M7.7073 14V6.72727H12.5226V7.99503H9.24494V9.72798H12.203V10.9957H9.24494V14H7.7073Z",fill:"black"})]})})}function o1(){return l(P,{children:l("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("g",{"clip-path":"url(#clip0_114_34)",children:[l("path",{d:"M13.068 0.645614C13.0096 0.587281 12.893 0.587281 12.8346 0.587281L9.33464 0.587281C8.98464 0.587281 8.7513 0.820614 8.7513 1.17061C8.7513 1.52061 8.98464 1.75395 9.33464 1.75395L11.4346 1.75395L8.34297 4.84561C8.10963 5.07895 8.10963 5.42895 8.34297 5.66228C8.5763 5.89561 8.9263 5.89561 9.15964 5.66228L12.2513 2.57061V4.67061C12.2513 5.02061 12.4846 5.25395 12.8346 5.25395C13.1846 5.25395 13.418 5.02061 13.418 4.67061V1.17061C13.418 1.11228 13.418 0.995614 13.3596 0.937281C13.3013 0.820614 13.1846 0.703948 13.068 0.645614Z",fill:"white"}),l("path",{d:"M12.8335 6.41671C12.4835 6.41671 12.2502 6.65004 12.2502 7.00004V11.6667C12.2502 12.0167 12.0168 12.25 11.6668 12.25H2.3335C1.9835 12.25 1.75016 12.0167 1.75016 11.6667V2.33337C1.75016 1.98337 1.9835 1.75004 2.3335 1.75004H7.00016C7.35016 1.75004 7.5835 1.51671 7.5835 1.16671C7.5835 0.816707 7.35016 0.583374 7.00016 0.583374H2.3335C1.34183 0.583374 0.583496 1.34171 0.583496 2.33337V11.6667C0.583496 12.6584 1.34183 13.4167 2.3335 13.4167H11.6668C12.6585 13.4167 13.4168 12.6584 13.4168 11.6667V7.00004C13.4168 6.65004 13.1835 6.41671 12.8335 6.41671Z",fill:"white"})]}),l("defs",{children:l("clipPath",{id:"clip0_114_34",children:l("rect",{width:"14",height:"14",fill:"white"})})})]})})}function i1({show:t,buttons:e,handleChange:o}){let i=[l(Ye,{}),l(Ke,{}),l(Qe,{}),l(e1,{}),l(t1,{}),l(n1,{})];function s(n){return i.filter((_,d)=>{if(d===n)return _})[0]}return l("div",{className:"large-container-buttonparent",children:t?e.answers.map((n,c)=>n.value?l("button",{className:"overlay-thing-button",children:[l("div",{className:"icon-container  share",children:l(o1,{})}),l("a",{href:n.value,target:"_blank",children:n.text})]}):l("button",{className:"overlay-thing-button",onClick:()=>o(n.next),href:n==null?void 0:n.value,children:[l("div",{className:"icon-container",children:s(c)}),n.text]})):l("div",{})})}function r1({cssval:t,handleCloseforlargesize:e,video:o,videoEl:i,handlemuted:s,muted:n,handleChange:c,show:_,buttons:d}){V(()=>{var r;(r=i.current)==null||r.removeAttribute("controls")},[]);function p(){i.current.currentTime=0,i.current.play()}return l("div",{style:t,className:"video-container",children:[l("div",{className:"loader-container",children:l("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0",children:l("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:l("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})}),l("div",{className:"video-container-box",children:[l("div",{class:"close-button",onClick:()=>e(),children:l("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"15",cy:"15",r:"15",fill:"black"}),l("path",{d:"M15 18.9902C14.7491 18.9902 14.4982 18.8944 14.3069 18.7032L8.2872 12.6834C7.90427 12.3005 7.90427 11.6796 8.2872 11.2968C8.66997 10.9141 9.29071 10.9141 9.67367 11.2968L15 16.6235L20.3263 11.297C20.7092 10.9143 21.3299 10.9143 21.7126 11.297C22.0957 11.6798 22.0957 12.3007 21.7126 12.6836L15.693 18.7033C15.5017 18.8946 15.2508 18.9902 15 18.9902Z",fill:"white"})]})}),l("button",{className:"mutedbutton",onClick:s,children:[" ",n?l("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",children:[l("use",{class:"ytp-svg-shadow"}),l("use",{class:"ytp-svg-shadow"}),l("defs",{children:[l("clipPath",{id:"ytp-svg-volume-animation-mask",children:[l("path",{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}),l("path",{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}),l("path",{class:"ytp-svg-volume-animation-mover",d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z",transform:"translate(0, 0)"})]}),l("clipPath",{id:"ytp-svg-volume-animation-slash-mask",children:l("path",{class:"ytp-svg-volume-animation-mover",d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z",transform:"translate(0, 0)"})})]}),l("path",{class:"ytp-svg-fill ytp-svg-volume-animation-speaker","clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff",id:"ytp-id-15"}),l("path",{class:"ytp-svg-fill ytp-svg-volume-animation-hider","clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff",id:"ytp-id-16",style:"display: none;"})]}):l("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",children:[l("use",{class:"ytp-svg-shadow"}),l("path",{class:"ytp-svg-fill",d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z",id:"ytp-id-17"})]})," "]}),l("button",{className:"mutedbutton replay",onClick:p,children:l("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("g",{"clip-path":"url(#clip0_118_21)",children:[l("path",{d:"M6 0.75C4.76291 0.751353 3.56662 1.19265 2.625 1.995V1.125C2.625 1.02554 2.58549 0.930161 2.51517 0.859835C2.44484 0.789509 2.34946 0.75 2.25 0.75C2.15054 0.75 2.05516 0.789509 1.98484 0.859835C1.91451 0.930161 1.875 1.02554 1.875 1.125V3C1.875 3.09946 1.91451 3.19484 1.98484 3.26517C2.05516 3.33549 2.15054 3.375 2.25 3.375H4.125C4.22446 3.375 4.31984 3.33549 4.39017 3.26517C4.46049 3.19484 4.5 3.09946 4.5 3C4.5 2.90054 4.46049 2.80516 4.39017 2.73484C4.31984 2.66451 4.22446 2.625 4.125 2.625H3.04125C3.85635 1.90015 4.90922 1.49981 6 1.5C6.9348 1.49954 7.84653 1.79021 8.60857 2.33163C9.37061 2.87305 9.94512 3.63836 10.2523 4.52124C10.5595 5.40412 10.5841 6.36075 10.3227 7.25826C10.0613 8.15577 9.52695 8.9496 8.79376 9.52949C8.06057 10.1094 7.16498 10.4466 6.2314 10.4942C5.29782 10.5418 4.37258 10.2975 3.5842 9.79515C2.79583 9.29285 2.18345 8.5575 1.83212 7.69124C1.4808 6.82497 1.40797 5.8708 1.62375 4.96125C1.63961 4.91201 1.64511 4.86002 1.63991 4.80854C1.63471 4.75707 1.61891 4.70724 1.59351 4.66217C1.56811 4.6171 1.53366 4.57777 1.49233 4.54666C1.45099 4.51554 1.40367 4.49332 1.35333 4.48139C1.30299 4.46945 1.25073 4.46806 1.19983 4.4773C1.14893 4.48654 1.10049 4.50622 1.05756 4.53508C1.01463 4.56395 0.978133 4.60139 0.950372 4.64505C0.922612 4.6887 0.904185 4.73763 0.89625 4.78875C0.799632 5.18527 0.750537 5.59188 0.75 6C0.75 7.03835 1.05791 8.05339 1.63478 8.91674C2.21166 9.7801 3.0316 10.453 3.99091 10.8504C4.95022 11.2477 6.00582 11.3517 7.02422 11.1491C8.04262 10.9466 8.97809 10.4465 9.71231 9.71231C10.4465 8.97809 10.9466 8.04262 11.1491 7.02422C11.3517 6.00582 11.2477 4.95022 10.8504 3.99091C10.453 3.0316 9.7801 2.21166 8.91674 1.63478C8.05339 1.05791 7.03835 0.75 6 0.75Z",fill:"white"}),l("path",{d:"M5.25 7.95C5.39078 7.94933 5.52854 7.90904 5.6475 7.83375L7.56375 6.6375C7.67228 6.57024 7.76185 6.47638 7.82396 6.36482C7.88606 6.25326 7.91866 6.12769 7.91866 6C7.91866 5.87231 7.88606 5.74674 7.82396 5.63518C7.76185 5.52362 7.67228 5.42976 7.56375 5.3625L5.6475 4.16625C5.53413 4.09539 5.40389 4.05613 5.27025 4.05252C5.13661 4.04891 5.00443 4.08109 4.88741 4.14572C4.77038 4.21035 4.67275 4.30509 4.60464 4.42013C4.53653 4.53516 4.5004 4.66631 4.5 4.8V7.2C4.5 7.39891 4.57902 7.58968 4.71967 7.73033C4.86032 7.87098 5.05109 7.95 5.25 7.95ZM5.25 4.8L7.16625 6L5.25 7.2V4.8Z",fill:"white"})]}),l("defs",{children:l("clipPath",{id:"clip0_118_21",children:l("rect",{width:"12",height:"12",fill:"white"})})})]})}),l("video",{src:o,autoPlay:!0,ref:i,className:"lg-video-for-full",playsInline:!0}),l(i1,{show:_,buttons:d,handleChange:c}),l("h1",{className:"lg-credit",style:{background:"black",paddingTop:"2px",paddingBottom:"2px"},children:l("a",{href:"https://api.whatsapp.com/send/?phone=918870981553&text=Hello%21+saw+your+plugin+on+Naturally+Yours+website.+Interested+to+know+more&type=phone_number&app_absent=0",target:"_blank",children:[" ",l("span",{style:{fontSize:"14px",margin:"0px",textDecoration:"underline"},children:"Made with ❤️ at F22 Labs"})]})})]})]})}function l1({cmpclose:t,video:e,setinitialsize:o,data:i,base:s,round:n=!1,onlocalchange:c,initalanimation:_}){const d=ke(null);V(()=>{var a;(a=d.current)==null||a.removeAttribute("controls")},[]);let p="smvideo-container";function r(){n&&(p="smvideo-container-round")}r();function v(){o(!0),c()}return l(P,{children:l(P,{children:l("div",{className:`small-video-container-box ${_?"pageloadanimation":""} `,children:[l("div",{className:"close-button cls-sm",children:l("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:t,children:[l("g",{"clip-path":"url(#clip0_126_12)",children:l("path",{d:"M8.28259 7.01145L13.734 1.55995C14.0887 1.20535 14.0887 0.631989 13.734 0.277427C13.3794 -0.0771763 12.806 -0.0771763 12.4515 0.277427L6.99994 5.72888L1.54861 0.277427C1.19383 -0.0771763 0.620684 -0.0771763 0.26608 0.277427C-0.0886934 0.632031 -0.0886934 1.20535 0.26608 1.55995L5.71737 7.01145L0.266123 12.4629C-0.0886509 12.8175 -0.0886509 13.3909 0.266123 13.7454C0.350236 13.8298 0.450189 13.8967 0.560238 13.9423C0.670287 13.9879 0.788262 14.0113 0.907386 14.0112C1.13954 14.0112 1.37177 13.9223 1.54865 13.7454L6.99994 8.29398L12.4515 13.7454C12.5356 13.8298 12.6356 13.8967 12.7456 13.9423C12.8556 13.9879 12.9736 14.0113 13.0927 14.0112C13.3249 14.0112 13.5571 13.9223 13.734 13.7454C14.0887 13.3908 14.0887 12.8175 13.734 12.4629L8.28259 7.01145Z",fill:"white"})}),l("defs",{children:l("clipPath",{id:"clip0_126_12",children:l("rect",{width:"14",height:"14",fill:"white"})})})]})}),l("div",{className:p,"data-customattribute":"red",children:l("video",{src:e,autoPlay:!0,id:"videos",className:n?"sm-video circle ":"sm-video",muted:!0,loop:!0,playsInline:!0,ref:d})}),l("h1",{className:"widgetheader",onClick:()=>v(),children:i.widgetHeader})]})})})}function s1(t,e){const[o,i]=b(()=>JSON.parse(window.localStorage.getItem(t))||e);return V(()=>{window.localStorage.setItem(t,JSON.stringify(o))},[o,i]),[o,i]}function Pe(){const{innerWidth:t,innerHeight:e}=window;return{width:t,height:e}}function c1(){const[t,e]=b(Pe());return V(()=>{function o(){e(Pe())}return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),t}function a1({dataURL:t}){let e=window.location.pathname,o;const[i,s]=b({}),[n,c]=b({}),[_,d]=s1("initialvideo",[]),[p,r]=b(!0),[v,h]=b(!0);function a(){let m=JSON.parse(localStorage.getItem("initialvideo"));if(m!=null&&m.length)m.filter(y=>y.base===e?y==null?void 0:y.count:0);else return 0}function f(m){let y=Object.keys(m),C=y.filter($=>{if($===e)return $}),L;return C.length||(L=y.filter($=>{if(e.match($))return $})),C.length?C[0]:L==null?void 0:L[1]}if(V(()=>{async function m(){var Z,Ze;let y=await fetch(t);console.log(y);let C=await y.json(),L=(Z=JSON.parse(localStorage.getItem("initialvideo")))==null?void 0:Z.filter(ze=>ze.base===e?ze:0);console.log(C);let $=f(C);De(C),s(C),c(C[$][((Ze=L[0])==null?void 0:Ze.count)||0])}m()},[]),document.documentElement.style.setProperty("--largecontainer-width",`${n.largecontainerwidth}px`),document.documentElement.style.setProperty("--largecontainer-height",`${n.largecontainerheight}px`),document.documentElement.style.setProperty("--bottom-css",`${n.bottomcss}px`),document.documentElement.style.setProperty("--width-smallbox",`${n.widthsmallbox}px`),document.documentElement.style.setProperty("--height-smallbox",`${n.heightsmallbox}px`),document.documentElement.style.setProperty("--text-color",`${n.textcolor}`),document.documentElement.style.setProperty(" --row-position",`${n.rowposition}`),document.documentElement.style.setProperty("--padding-x",`${n.paddingx}px`),document.documentElement.style.setProperty("--padding-y",`${n.paddingy}px`),document.documentElement.style.setProperty("--row-position",`${n.rowposition}`),document.documentElement.style.setProperty("--grid-gap",`${n.gridgap}px`),document.documentElement.style.setProperty("--small-closebuttonheight",`${n.closebuttonheight}px`),document.documentElement.style.setProperty("--small-closebuttonwidth",`${n.closebuttonwidth}px`),document.documentElement.style.setProperty("--buttonloadanimation",`${n.buttonloadanimation}`),setTimeout(()=>{document.documentElement.style.setProperty("--color-border",n.widthcolor),document.documentElement.style.setProperty("--color-width",`${n.widthsize}px`)},n.firestylechanges*1e3),Object.entries(i).length===0)return l("div",{});const[E,g]=b(!1),[w,x]=b(""),[A,H]=b(""),[M,Ee]=b(!1),[Me,Ne]=b(n==null?void 0:n.startStep),[_1,u1]=b({}),[d1,h1]=b(!1),[Ve,Ae]=b(!0),[Te,f1]=b(0),Q=ke(null),{height:H1,width:p1}=c1();function De(m){let y=Object.keys(m).map(C=>({base:C,count:0}));JSON.parse(localStorage.getItem("initialvideo")).length||d(y)}function m1(m=n==null?void 0:n.startStep){n==null||n.steps.filter(y=>y).filter(y=>{y.key===m&&(f1(y.answerTime),u1(y),x(y.stockAsset.videoUrl),H(y.stockAsset.gifUrl),document.documentElement.style.setProperty("--f22-display",`${y.display||"block"}`))})}V(()=>{const m=setTimeout(()=>{M&&g(!0)},Te*1e3);return()=>clearInterval(m)},[Me,M,Te]),m1(Me);function v1(m){Ne(m),g(!1)}function g1(){Ee(!1),g(!1),Ne(n==null?void 0:n.startStep),Ae(!0),h(!1)}function y1(){h1(!0)}function C1(){Q.current&&(Ae(m=>!m),Q.current.muted=Ve)}function w1(){var y,C,L,$,Z;let m={transform:`translate(${(y=n==null?void 0:n.custom)==null?void 0:y.x}px  , ${(C=n==null?void 0:n.custom)==null?void 0:C.y}px)`};switch(typeof((L=n==null?void 0:n.custom)==null?void 0:L.x)=="string"&&(m={transform:`translate(${($=n==null?void 0:n.custom)==null?void 0:$.x}  , ${(Z=n==null?void 0:n.custom)==null?void 0:Z.y})`}),n==null?void 0:n.widgetPosition){case"bottomRight":o={bottom:"10px",right:"10px",...m};break;case"bottomLeft":o={bottom:"10px",left:"10px",...m};break;case"topRight":o={top:"3px",right:"10px",...m};break;case"topLeft":o={top:"3px",left:"10px",...m};break;case"bottomcenter":o={bottom:"10px",left:"50%",...m};break;case"topcenter":o={top:"3px",left:"50%",...m};break;case"leftcenter":o={left:"10px",...m};break;case"rightcenter":o={top:"3px",left:"50%",...m};break;default:return o}}if(w1(),n.toshowinmobile&&p1<=600)return l("div",{});if(d1)return l("div",{});function b1(){De(i),d(m=>m.map((C,L)=>C.base===e&&C.count<i[e].length-1?{...C,count:C.count+1}:C)),a()}return setTimeout(()=>{r(!1)},1e3),l("div",{className:p?"small-video-container-box-parent smsmsmhidden  ":"small-video-container-box-parent ",style:o,children:[l("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');"}),M?l(r1,{cssval:o,handleCloseforlargesize:g1,video:w,videoEl:Q,handlemuted:C1,muted:Ve,handleChange:v1,show:E,buttons:_1}):l(l1,{base:e,cmpclose:y1,data:n,setinitialsize:Ee,video:A,round:n==null?void 0:n.rounded,onlocalchange:b1,initalanimation:v})]})}const k1="";Ge("f22-plugin",t=>l(a1,{dataURL:t.getAttribute("dataURL")||""}),["dataURL"],()=>console.log("F22 Plugin cleanup"));let Se=document.createElement("f22-plugin");Se.setAttribute("dataUrl","https://f22videoplugin.s3.ap-northeast-1.amazonaws.com/paperlondon/paperlondon.json"),document.body.append(Se)})();
