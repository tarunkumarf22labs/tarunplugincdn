(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode('.modal{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:#0000001a}.modal-container{background-color:#fff;position:fixed;top:10px;left:25%;right:25%;z-index:100;position:absolute;width:720px;height:400px;box-shadow:0 2px 8px #0009;top:50%;left:50%;-ms-transform:translateX(-50%) translateY(-50%);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}video{width:100%;height:100%;object-fit:cover}.forms{position:absolute;bottom:10px;width:100%;text-align:center;display:flex;justify-content:center;align-items:center}.modal-form{width:400px;height:48px;position:relative}.input-modal{width:100%;height:100%;border-radius:20px;background:rgba(0,0,0,.5);border:none;padding-left:10px;color:#fff;font-size:16px}.input-modal::placeholder{color:#fff}.submitbtnmodal{position:absolute;right:15px;top:10px;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50%}.cross-buttonmodal{position:absolute;width:30px;height:30px;top:10px;right:10px;display:flex;justify-content:center;align-items:center;border-radius:50%;background:rgba(0,0,0,.4);cursor:pointer}.modal-container{animation-name:m;animation-duration:.5s;animation:modalopen 1s cubic-bezier(.175,.885,.32,1.275)}@keyframes modalopen{0%{top:0px}10%{top:50px}20%{top:280px}}.thumbnail img{width:inherit;height:inherit;object-fit:fill;border-radius:2px}.thumbnailcontainer{display:flex;width:288px;height:76px;background-color:#fff;margin-top:8px;border-radius:5px;padding:4px}.thumbnail .img-container{width:88px}.thumbnail .img-container img{object-fit:cover;width:100%;height:100%}.text-container h1,h6{font-size:12px;line-height:16px;font-family:Nunito Sans,sans-serif;font-weight:100}.text-container h6{padding:10px 2px 2px;font-weight:bolder;height:14px;font-size:14px;line-height:16.41px}.text-container{padding:8px 8px 8px 6px}.thumbnail .text-container button{background-color:#3d4fe0;outline:none;border:none;padding:6px 12px;border-radius:2px;margin-top:10px}.thumbnail .text-container button a{font-size:10px;color:#fff}:root{--color-border: "" ;--color-width: "" ;--color-animation: "" ;--width-smallbox: "";--height-smallbox: "";--text-color: "";--bottom-css: "";--row-position: "";--padding-x: "";--padding-y: "";--grid-gap: "" ;--f22-display: "";--f22-bottom-color: "";--f22-bottom-background: "";--largecontainer-width: "";--largecontainer-height: "";--buttonloadanimation: "";--opacityforoverlay: "" }*{margin:0;padding:0;box-sizing:border-box}.video-container{width:var(--largecontainer-width);height:var(--largecontainer-height);position:fixed;bottom:10px;border-radius:10px;z-index:10000;background-color:#000;isolation:isolate;z-index:100}.video-container-box{width:100%;height:100%;position:relative;border-radius:10px;isolation:isolate}.video-container video{width:100%;height:100%;object-fit:cover;border-radius:10px;box-shadow:-10px 4px 65px #0000001a;isolation:isolate}.full{width:100%}.overlay-thing{position:absolute;bottom:0;width:100%;padding:1rem;padding-bottom:0;margin-bottom:3.8rem;text-align:center;isolation:isolate}.flexiblebutton{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:100%;isolation:isolate}.overlay-thing-button{display:flex;align-items:center;padding:var(--padding-y) var(--padding-x);border-radius:20px;margin-bottom:8px;background-color:#0009;color:#fff;cursor:pointer;font-size:12px!important;width:100%;text-align:left;isolation:isolate;font-family:Nunito Sans,sans-serif;font-weight:700}.large-container-buttonparent{position:absolute;bottom:var(--bottom-css);width:100%;padding:20px!important;isolation:isolate;display:var(--f22-display);grid-template-columns:var(--row-position);grid-gap:var(--grid-gap)}a{color:inherit;text-decoration:none;font-size:inherit}.small-video-container-box-parent{width:168px;height:218px;position:fixed;z-index:100;isolation:isolate;visibility:visible;z-index:2147483647}.smsmsmhidden{visibility:hidden}.small-video-container-box{position:absolute;z-index:10;width:160px;height:160px;z-index:100;border-radius:50%;isolation:isolate}.pageloadanimation{animation:var(--buttonloadanimation) .9s ease-out;animation-iteration-count:2}video{height:100%;width:100%;object-fit:cover;isolation:isolate}.close-button{position:absolute;right:0;top:-10px;background-color:#000;height:30px;width:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:100;cursor:pointer;isolation:isolate}.cls-sm{height:20px;width:20px;top:-5px;padding:5px}.widgetheader{position:absolute;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;font-size:15px;color:var(--text-color);font-family:sans-serif;text-shadow:1px 1px #000}.sm-video{z-index:1}.lg-credit{color:#fff;position:absolute;bottom:0!important;width:100%!important;text-align:center;font-size:10px!important;font-family:sans-serif;margin:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.lg-credit a:hover{color:#fff}.video-size{min-height:100vh;width:100%;background-color:#000}.mutedbutton{position:absolute;bottom:28px;top:0;z-index:1;left:10px;width:fit-content;height:fit-content;opacity:1;background:transparent;border:none;pointer-events:none}.mutedbutton svg{padding-top:10px;padding-left:5px;width:fit-content;width:4rem;height:2.9rem;fill:#fff;pointer-events:fill}.replay{left:80px}.replay svg{width:3rem}.blink{animation:blink-animation 1s steps(5,start) infinite;-webkit-animation:blink-animation 1s steps(5,start) infinite}@keyframes blink-animation{to{visibility:hidden}}@-webkit-keyframes blink-animation{to{visibility:hidden}}.pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}.brick{position:absolute;bottom:10px;z-index:1;right:10px;width:3rem;height:3rem;border-radius:50%;opacity:1;border:none}.brick h1{font-size:1.2rem}.circle{border-radius:50%}.smvideo-container{width:fit-content;width:var(--width-smallbox);height:var(--height-smallbox);border:var(--color-width) solid var(--color-border)!important}.smvideo-container-round{width:fit-content;border-radius:50%;width:160px;height:160px}.smvideo-container-round:before{width:100%;height:100%;content:"";top:0;bottom:0;left:0;position:absolute;top:-8.2px;bottom:10px;left:-8.2px;right:0;border:var(--color-width) solid var(--color-border)!important;border-radius:50%;animation:pulse 1s infinite;box-sizing:content-box}.loader-container svg{padding-top:80px;position:absolute;z-index:-10}.overlay-thing-button:hover{box-shadow:0 .5em .5em -.4em var(--hover);transform:translateY(-.25em);transition:.5s ease-in-out}.icon-container{padding-right:1rem}.share{padding:3.5px;padding-right:1rem}@keyframes popofbuttton{0%{transform:translateY(100%)}70%{transform:translateY(-50%)}to{transform:translateY(0)}}@keyframes poprightfbuttton{0%{transform:translate(100%)}70%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes popleftfbuttton{0%{transform:translate(-100%)}70%{transform:translate(50%)}to{transform:translate(0)}}@keyframes poptopbutton{0%{transform:translatey(-100%)}70%{transform:translatey(50%)}to{transform:translate(0)}}.form-step{width:100%}.form-step input{width:100%;padding:16px;border-radius:24px;background-color:#0009;color:#fff;outline:none;border:none}.form-step{position:relative}.form-step input::placeholder{color:#fff}.form-step button{position:absolute;top:14px;right:10px;padding:5px;border-radius:50%;width:25px;height:25px;display:flex;justify-content:center;align-items:center;cursor:pointer}.submitbuttonforform{background:#3D4FE0}.hidden{display:none}.toast{position:absolute;top:10px;width:100%;text-align:center}.toast-text{margin:2rem;border-radius:20px;background-color:#fff;padding:15px}.f22arrow-container img{width:13rem}.f22box-container{position:relative;z-index:0}.f22arrow-container{min-height:inherit;display:flex;align-items:center;justify-content:center;position:fixed;top:0;width:100%;filter:blur(-100px)!important;height:100%}#f22background{position:fixed;top:0;width:100%;height:100%;background:transparent;backdrop-filter:blur(var(--opacityforoverlay));display:flex;align-items:center;justify-content:center}.container{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;position:fixed;top:0;z-index:2147483645}')),document.head.appendChild(t)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
(function(){"use strict";const Xe=new Set,ue=new Map;new window.MutationObserver(e=>{for(const t of e)if(t.type==="attributes"){const{target:n,attributeName:i,oldValue:s}=t;if(ue.has(n)){let[r,o]=ue.get(n);if(o.includes(i)||o.length==0){const a=n.getAttribute(i);r(i,s,a,n)}}}Xe.forEach(t=>t())}).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0});function Cl(e,t){setTimeout(n),Xe.add(n);function n(){document.querySelectorAll(e).forEach(i=>{if(!ue.has(i)){const{connected:s=()=>{},disconnected:r=()=>{},attributeChanged:o=()=>{},observedAttributes:a=[]}=t(i);ue.set(i,[o,a]),s(),bl(e,i,()=>r())}})}}function bl(e,t,n){setTimeout(i),Xe.add(i);function i(){t&&document.contains(t)&&t.matches(e)||(ue.delete(t),Xe.delete(i),n())}}var Ye,b,Rs,he,Os,Ms,Je={},Ps=[],Tl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Ct(e,t){for(var n in t)e[n]=t[n];return e}function Fs(e){var t=e.parentNode;t&&t.removeChild(e)}function Vs(e,t,n){var i,s,r,o={};for(r in t)r=="key"?i=t[r]:r=="ref"?s=t[r]:o[r]=t[r];if(arguments.length>2&&(o.children=arguments.length>3?Ye.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)o[r]===void 0&&(o[r]=e.defaultProps[r]);return Ze(e,o,i,s,null)}function Ze(e,t,n,i,s){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Rs};return s==null&&b.vnode!=null&&b.vnode(r),r}function tn(e){return e.children}function en(e,t){this.props=e,this.context=t}function Kt(e,t){if(t==null)return e.__?Kt(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Kt(e):null}function Bs(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Bs(e)}}function Us(e){(!e.__d&&(e.__d=!0)&&he.push(e)&&!nn.__r++||Ms!==b.debounceRendering)&&((Ms=b.debounceRendering)||Os)(nn)}function nn(){for(var e;nn.__r=he.length;)e=he.sort(function(t,n){return t.__v.__b-n.__v.__b}),he=[],e.some(function(t){var n,i,s,r,o,a;t.__d&&(o=(r=(n=t).__v).__e,(a=n.__P)&&(i=[],(s=Ct({},r)).__v=r.__v+1,ai(a,r,s,n.__n,a.ownerSVGElement!==void 0,r.__h!=null?[o]:null,i,o??Kt(r),r.__h),Gs(i,r),r.__e!=o&&Bs(r)))})}function $s(e,t,n,i,s,r,o,a,c,u){var l,d,p,f,y,A,w,I=i&&i.__k||Ps,N=I.length;for(n.__k=[],l=0;l<t.length;l++)if((f=n.__k[l]=(f=t[l])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Ze(null,f,null,null,f):Array.isArray(f)?Ze(tn,{children:f},null,null,null):f.__b>0?Ze(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(p=I[l])===null||p&&f.key==p.key&&f.type===p.type)I[l]=void 0;else for(d=0;d<N;d++){if((p=I[d])&&f.key==p.key&&f.type===p.type){I[d]=void 0;break}p=null}ai(e,f,p=p||Je,s,r,o,a,c,u),y=f.__e,(d=f.ref)&&p.ref!=d&&(w||(w=[]),p.ref&&w.push(p.ref,null,f),w.push(d,f.__c||y,f)),y!=null?(A==null&&(A=y),typeof f.type=="function"&&f.__k===p.__k?f.__d=c=Hs(f,c,e):c=js(e,f,p,I,y,c),typeof n.type=="function"&&(n.__d=c)):c&&p.__e==c&&c.parentNode!=e&&(c=Kt(p))}for(n.__e=A,l=N;l--;)I[l]!=null&&(typeof n.type=="function"&&I[l].__e!=null&&I[l].__e==n.__d&&(n.__d=Kt(i,l+1)),Ws(I[l],I[l]));if(w)for(l=0;l<w.length;l++)Qs(w[l],w[++l],w[++l])}function Hs(e,t,n){for(var i,s=e.__k,r=0;s&&r<s.length;r++)(i=s[r])&&(i.__=e,t=typeof i.type=="function"?Hs(i,t,n):js(n,i,i,s,i.__e,t));return t}function js(e,t,n,i,s,r){var o,a,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||s!=r||s.parentNode==null)t:if(r==null||r.parentNode!==e)e.appendChild(s),o=null;else{for(a=r,c=0;(a=a.nextSibling)&&c<i.length;c+=2)if(a==s)break t;e.insertBefore(s,r),o=r}return o!==void 0?o:s.nextSibling}function Il(e,t,n,i,s){var r;for(r in n)r==="children"||r==="key"||r in t||sn(e,r,null,n[r],i);for(r in t)s&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||sn(e,r,t[r],n[r],i)}function qs(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Tl.test(t)?n:n+"px"}function sn(e,t,n,i,s){var r;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||qs(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||qs(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i||e.addEventListener(t,r?zs:Ks,r):e.removeEventListener(t,r?zs:Ks,r);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ks(e){this.l[e.type+!1](b.event?b.event(e):e)}function zs(e){this.l[e.type+!0](b.event?b.event(e):e)}function ai(e,t,n,i,s,r,o,a,c){var u,l,d,p,f,y,A,w,I,N,mt,nt=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,a=t.__e=n.__e,t.__h=null,r=[a]),(u=b.__b)&&u(t);try{t:if(typeof nt=="function"){if(w=t.props,I=(u=nt.contextType)&&i[u.__c],N=u?I?I.props.value:u.__:i,n.__c?A=(l=t.__c=n.__c).__=l.__E:("prototype"in nt&&nt.prototype.render?t.__c=l=new nt(w,N):(t.__c=l=new en(w,N),l.constructor=nt,l.render=Sl),I&&I.sub(l),l.props=w,l.state||(l.state={}),l.context=N,l.__n=i,d=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),nt.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Ct({},l.__s)),Ct(l.__s,nt.getDerivedStateFromProps(w,l.__s))),p=l.props,f=l.state,d)nt.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(nt.getDerivedStateFromProps==null&&w!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(w,N),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(w,l.__s,N)===!1||t.__v===n.__v){l.props=w,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Nt){Nt&&(Nt.__=t)}),l.__h.length&&o.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(w,l.__s,N),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,f,y)})}l.context=N,l.props=w,l.state=l.__s,(u=b.__r)&&u(t),l.__d=!1,l.__v=t,l.__P=e,u=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(i=Ct(Ct({},i),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(y=l.getSnapshotBeforeUpdate(p,f)),mt=u!=null&&u.type===tn&&u.key==null?u.props.children:u,$s(e,Array.isArray(mt)?mt:[mt],t,n,i,s,r,o,a,c),l.base=t.__e,t.__h=null,l.__h.length&&o.push(l),A&&(l.__E=l.__=null),l.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Al(n.__e,t,n,i,s,r,o,c);(u=b.diffed)&&u(t)}catch(Nt){t.__v=null,(c||r!=null)&&(t.__e=a,t.__h=!!c,r[r.indexOf(a)]=null),b.__e(Nt,t,n)}}function Gs(e,t){b.__c&&b.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){b.__e(i,n.__v)}})}function Al(e,t,n,i,s,r,o,a){var c,u,l,d=n.props,p=t.props,f=t.type,y=0;if(f==="svg"&&(s=!0),r!=null){for(;y<r.length;y++)if((c=r[y])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){e=c,r[y]=null;break}}if(e==null){if(f===null)return document.createTextNode(p);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,p.is&&p),r=null,a=!1}if(f===null)d===p||a&&e.data===p||(e.data=p);else{if(r=r&&Ye.call(e.childNodes),u=(d=n.props||Je).dangerouslySetInnerHTML,l=p.dangerouslySetInnerHTML,!a){if(r!=null)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Il(e,p,d,s,a),l)t.__k=[];else if(y=t.props.children,$s(e,Array.isArray(y)?y:[y],t,n,i,s&&f!=="foreignObject",r,o,r?r[0]:n.__k&&Kt(n,0),a),r!=null)for(y=r.length;y--;)r[y]!=null&&Fs(r[y]);a||("value"in p&&(y=p.value)!==void 0&&(y!==e.value||f==="progress"&&!y||f==="option"&&y!==d.value)&&sn(e,"value",y,d.value,!1),"checked"in p&&(y=p.checked)!==void 0&&y!==e.checked&&sn(e,"checked",y,d.checked,!1))}return e}function Qs(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){b.__e(i,n)}}function Ws(e,t,n){var i,s;if(b.unmount&&b.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Qs(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){b.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&Ws(i[s],t,typeof e.type!="function");n||e.__e==null||Fs(e.__e),e.__e=e.__d=void 0}function Sl(e,t,n){return this.constructor(e,n)}function Dl(e,t,n){var i,s,r;b.__&&b.__(e,t),s=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],ai(t,e=(!i&&n||t).__k=Vs(tn,null,[e]),s||Je,Je,t.ownerSVGElement!==void 0,!i&&n?[n]:s?null:t.firstChild?Ye.call(t.childNodes):null,r,!i&&n?n:s?s.__e:t.firstChild,i),Gs(r,e)}Ye=Ps.slice,b={__e:function(e,t,n,i){for(var s,r,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),o=s.__d),o)return s.__E=s}catch(a){e=a}throw e}},Rs=0,en.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ct({},this.state),typeof e=="function"&&(e=e(Ct({},n),this.props)),e&&Ct(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Us(this))},en.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Us(this))},en.prototype.render=tn,he=[],Os=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nn.__r=0;var rn,lt,Xs,on=0,Ys=[],Js=b.__b,Zs=b.__r,tr=b.diffed,er=b.__c,nr=b.unmount;function li(e,t){b.__h&&b.__h(lt,e,on||t),on=0;var n=lt.__H||(lt.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function O(e){return on=1,kl(rr,e)}function kl(e,t,n){var i=li(rn++,2);return i.t=e,i.__c||(i.__=[n?n(t):rr(void 0,t),function(s){var r=i.t(i.__[0],s);i.__[0]!==r&&(i.__=[r,i.__[1]],i.__c.setState({}))}],i.__c=lt),i.__}function Lt(e,t){var n=li(rn++,3);!b.__s&&sr(n.__H,t)&&(n.__=e,n.__H=t,lt.__H.__h.push(n))}function an(e){return on=5,xl(function(){return{current:e}},[])}function xl(e,t){var n=li(rn++,7);return sr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Nl(){for(var e;e=Ys.shift();)if(e.__P)try{e.__H.__h.forEach(ln),e.__H.__h.forEach(ci),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){lt=null,Js&&Js(e)},b.__r=function(e){Zs&&Zs(e),rn=0;var t=(lt=e.__c).__H;t&&(t.__h.forEach(ln),t.__h.forEach(ci),t.__h=[])},b.diffed=function(e){tr&&tr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Ys.push(t)!==1&&Xs===b.requestAnimationFrame||((Xs=b.requestAnimationFrame)||function(n){var i,s=function(){clearTimeout(r),ir&&cancelAnimationFrame(i),setTimeout(n)},r=setTimeout(s,100);ir&&(i=requestAnimationFrame(s))})(Nl)),lt=null},b.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ln),n.__h=n.__h.filter(function(i){return!i.__||ci(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],b.__e(i,n.__v)}}),er&&er(e,t)},b.unmount=function(e){nr&&nr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{ln(i)}catch(s){t=s}}),t&&b.__e(t,n.__v))};var ir=typeof requestAnimationFrame=="function";function ln(e){var t=lt,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),lt=t}function ci(e){var t=lt;e.__c=e.__(),lt=t}function sr(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function rr(e,t){return typeof t=="function"?t(e):t}const Ll=(e,t,n=[],i)=>{const s=r=>Dl(Vs(()=>t(r)),r);Cl(e,r=>({connected:()=>s(r),disconnected:()=>i&&i(),attributeChanged:()=>s(r),observedAttributes:n}))};var ui;function it(e){return e.children}ui={__e:function(e,t,n,i){for(var s,r,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),o=s.__d),o)return s.__E=s}catch(a){e=a}throw e}};var Rl=0;function h(e,t,n,i,s){var r,o,a={};for(o in t)o=="ref"?r=t[o]:a[o]=t[o];var c={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Rl,__source:s,__self:i};if(typeof e=="function"&&(r=e.defaultProps))for(o in r)a[o]===void 0&&(a[o]=r[o]);return ui.vnode&&ui.vnode(c),c}function Ol(){return h(it,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M8.14542 14H6.49769L9.00835 6.72727H10.9899L13.497 14H11.8493L10.0275 8.3892H9.9707L8.14542 14ZM8.04244 11.1413H11.9345V12.3416H8.04244V11.1413Z",fill:"black"})]})})}function Ml(){return h(it,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M7.82644 14V6.72727H10.7384C11.2734 6.72727 11.7197 6.80658 12.0771 6.9652C12.4346 7.12382 12.7033 7.34399 12.8833 7.62571C13.0632 7.90507 13.1531 8.22704 13.1531 8.59162C13.1531 8.87571 13.0963 9.12547 12.9827 9.34091C12.8691 9.55398 12.7128 9.72917 12.5139 9.86648C12.3174 10.0014 12.0925 10.0973 11.8392 10.1541V10.2251C12.1162 10.237 12.3754 10.3151 12.6169 10.4595C12.8608 10.6039 13.0584 10.8063 13.21 11.0668C13.3615 11.3248 13.4372 11.6326 13.4372 11.9901C13.4372 12.3759 13.3414 12.7204 13.1496 13.0234C12.9602 13.3241 12.6797 13.562 12.308 13.7372C11.9363 13.9124 11.4782 14 10.9337 14H7.82644ZM9.36408 12.7429H10.6176C11.0461 12.7429 11.3586 12.6612 11.5551 12.4979C11.7516 12.3321 11.8499 12.112 11.8499 11.8374C11.8499 11.6361 11.8013 11.4586 11.7043 11.3047C11.6072 11.1508 11.4687 11.0301 11.2888 10.9425C11.1112 10.8549 10.8994 10.8111 10.6531 10.8111H9.36408V12.7429ZM9.36408 9.7706H10.504C10.7147 9.7706 10.9017 9.7339 11.0651 9.66051C11.2308 9.58475 11.361 9.47822 11.4557 9.34091C11.5528 9.2036 11.6013 9.03906 11.6013 8.8473C11.6013 8.58452 11.5078 8.37263 11.3208 8.21165C11.1361 8.05066 10.8733 7.97017 10.5324 7.97017H9.36408V9.7706Z",fill:"black"})]})})}function Pl(){return h(it,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M13.2892 9.27344H11.7338C11.7054 9.07221 11.6474 8.89347 11.5598 8.73722C11.4722 8.5786 11.3598 8.44366 11.2225 8.33239C11.0852 8.22112 10.9266 8.13589 10.7466 8.0767C10.5691 8.01752 10.3761 7.98793 10.1678 7.98793C9.79137 7.98793 9.46348 8.08144 9.18413 8.26847C8.90477 8.45312 8.68815 8.72301 8.53427 9.07812C8.38039 9.43087 8.30344 9.85937 8.30344 10.3636C8.30344 10.8821 8.38039 11.3177 8.53427 11.6705C8.69052 12.0232 8.90832 12.2895 9.18768 12.4695C9.46703 12.6494 9.79019 12.7393 10.1571 12.7393C10.3631 12.7393 10.5537 12.7121 10.7289 12.6577C10.9064 12.6032 11.0639 12.5239 11.2012 12.4197C11.3385 12.3132 11.4521 12.1842 11.5421 12.0327C11.6344 11.8812 11.6983 11.7083 11.7338 11.5142L13.2892 11.5213C13.249 11.8551 13.1484 12.1771 12.9874 12.4872C12.8288 12.795 12.6145 13.0708 12.3446 13.3146C12.0771 13.5561 11.7575 13.7479 11.3858 13.8899C11.0165 14.0296 10.5987 14.0994 10.1323 14.0994C9.48361 14.0994 8.90359 13.9527 8.39222 13.6591C7.88323 13.3655 7.48076 12.9406 7.18484 12.3842C6.89128 11.8279 6.7445 11.1544 6.7445 10.3636C6.7445 9.57055 6.89364 8.89583 7.19194 8.33949C7.49023 7.78314 7.89506 7.35937 8.40643 7.06818C8.91779 6.77462 9.49308 6.62784 10.1323 6.62784C10.5537 6.62784 10.9443 6.68703 11.3042 6.8054C11.6664 6.92377 11.9872 7.09659 12.2665 7.32386C12.5459 7.54877 12.7731 7.82457 12.9483 8.15128C13.1259 8.47798 13.2395 8.85204 13.2892 9.27344Z",fill:"black"})]})})}function Fl(){return h(it,{children:[h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M9.57253 14H6.99441V6.72727H9.59384C10.3254 6.72727 10.9551 6.87287 11.483 7.16406C12.011 7.45289 12.417 7.86837 12.7011 8.41051C12.9875 8.95265 13.1308 9.60133 13.1308 10.3565C13.1308 11.1141 12.9875 11.7652 12.7011 12.3097C12.417 12.8542 12.0086 13.272 11.4759 13.5632C10.9456 13.8544 10.3112 14 9.57253 14ZM8.53205 12.6825H9.50861C9.96316 12.6825 10.3455 12.602 10.6556 12.4411C10.9681 12.2777 11.2025 12.0256 11.3588 11.6847C11.5174 11.3414 11.5967 10.8987 11.5967 10.3565C11.5967 9.81913 11.5174 9.37997 11.3588 9.03906C11.2025 8.69815 10.9693 8.44721 10.6592 8.28622C10.349 8.12524 9.96671 8.04474 9.51216 8.04474H8.53205V12.6825Z",fill:"black"})]})," "]})}function Vl(){return h(it,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M8.07058 14V6.72727H12.9711V7.99503H9.60822V9.72798H12.719V10.9957H9.60822V12.7322H12.9854V14H8.07058Z",fill:"black"})]})})}function Bl(){return h(it,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M7.7073 14V6.72727H12.5226V7.99503H9.24494V9.72798H12.203V10.9957H9.24494V14H7.7073Z",fill:"black"})]})})}function Ul(){return h(it,{children:h("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("g",{"clip-path":"url(#clip0_114_34)",children:[h("path",{d:"M13.068 0.645614C13.0096 0.587281 12.893 0.587281 12.8346 0.587281L9.33464 0.587281C8.98464 0.587281 8.7513 0.820614 8.7513 1.17061C8.7513 1.52061 8.98464 1.75395 9.33464 1.75395L11.4346 1.75395L8.34297 4.84561C8.10963 5.07895 8.10963 5.42895 8.34297 5.66228C8.5763 5.89561 8.9263 5.89561 9.15964 5.66228L12.2513 2.57061V4.67061C12.2513 5.02061 12.4846 5.25395 12.8346 5.25395C13.1846 5.25395 13.418 5.02061 13.418 4.67061V1.17061C13.418 1.11228 13.418 0.995614 13.3596 0.937281C13.3013 0.820614 13.1846 0.703948 13.068 0.645614Z",fill:"white"}),h("path",{d:"M12.8335 6.41671C12.4835 6.41671 12.2502 6.65004 12.2502 7.00004V11.6667C12.2502 12.0167 12.0168 12.25 11.6668 12.25H2.3335C1.9835 12.25 1.75016 12.0167 1.75016 11.6667V2.33337C1.75016 1.98337 1.9835 1.75004 2.3335 1.75004H7.00016C7.35016 1.75004 7.5835 1.51671 7.5835 1.16671C7.5835 0.816707 7.35016 0.583374 7.00016 0.583374H2.3335C1.34183 0.583374 0.583496 1.34171 0.583496 2.33337V11.6667C0.583496 12.6584 1.34183 13.4167 2.3335 13.4167H11.6668C12.6585 13.4167 13.4168 12.6584 13.4168 11.6667V7.00004C13.4168 6.65004 13.1835 6.41671 12.8335 6.41671Z",fill:"white"})]}),h("defs",{children:h("clipPath",{id:"clip0_114_34",children:h("rect",{width:"14",height:"14",fill:"white"})})})]})})}function $l(){return h(it,{children:h("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"M7.42042 6.00003C7.42042 6.2151 7.3383 6.43013 7.17441 6.5941L2.01463 11.7538C1.6864 12.0821 1.15424 12.0821 0.826148 11.7538C0.498055 11.4257 0.498055 10.8937 0.826148 10.5654L5.39181 6.00003L0.826308 1.43461C0.498214 1.10639 0.498214 0.574383 0.826308 0.246316C1.1544 -0.0820694 1.68656 -0.0820694 2.01479 0.246316L7.17457 5.40596C7.33849 5.57001 7.42042 5.78505 7.42042 6.00003Z",fill:"#080807"})})})}function Hl(){return h(it,{children:h("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"M7.42042 6.00003C7.42042 6.2151 7.3383 6.43013 7.17441 6.5941L2.01463 11.7538C1.6864 12.0821 1.15424 12.0821 0.826148 11.7538C0.498055 11.4257 0.498055 10.8937 0.826148 10.5654L5.39181 6.00003L0.826308 1.43461C0.498214 1.10639 0.498214 0.574383 0.826308 0.246316C1.1544 -0.0820694 1.68656 -0.0820694 2.01479 0.246316L7.17457 5.40596C7.33849 5.57001 7.42042 5.78505 7.42042 6.00003Z",fill:"white"})})})}function or(e){const[t,n]=O(0),i=e==null?void 0:e.length;function s(){n(a=>a>=(e==null?void 0:e.length)-1?a:a+1)}function r(){n(a=>a<=0?a:a-1)}function o(a){n(a)}return{currentStepindex:t,step:e==null?void 0:e[t],next:s,back:r,goTo:o,cmpComponentsLength:i}}function jl({show:e,buttons:t,handleChange:n,handletoast:i}){let s=[h(Ol,{}),h(Ml,{}),h(Pl,{}),h(Fl,{}),h(Vl,{}),h(Bl,{})];const r=an(null);function o(a){return s.filter((u,l)=>{if(l===a)return u})[0]}if((t==null?void 0:t.type)==="thumbnail")return e?h("div",{className:"large-container-buttonparent  thumbnail",children:t.answers.map(a=>h("a",{href:a.linkforshopping,style:{display:"block"},children:h("div",{className:"thumbnailcontainer",children:[h("div",{className:"img-container",children:h("img",{src:a.imgurl,className:"thumbnailimage"})}),h("div",{className:"text-container",children:[h("h1",{children:a.name}),h("h6",{children:[" Price: ",a.preice," "]})]})]})}))}):h("div",{});if((t==null?void 0:t.type)==="form"){let a=function(w){w.preventDefault(),r.current.value="",Boolean(d<=p+1)||u()},c=function(w){console.log(w.target.name),y(I=>w.target.name==="phone_number"?(w.target.value.includes("+91")&&(w.target.value=w.target.value.replace("+91","")),{...I,[w.target.name]:`+91${w.target.value}`}):{...I,[w.target.name]:w.target.value})};const{next:u,step:l,cmpComponentsLength:d,currentStepindex:p}=or(t.inputs),[f,y]=O({});async function A(){i();const w={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{type:"profile",attributes:{...f}}})};fetch("https://iecb4lgq9l.execute-api.us-east-1.amazonaws.com/dev/",w).then(I=>I.json()).then(I=>console.log(I))}return h(it,{children:h("div",{className:"large-container-buttonparent",children:h("form",{action:"",onSubmit:a,className:"form-step",children:[h("input",{type:l==null?void 0:l.type,value:f[l==null?void 0:l.name],onInput:w=>c(w),placeholder:l==null?void 0:l.placeholder,className:"input-modal",name:l==null?void 0:l.name,ref:r,required:!0}),h("br",{}),d===p+1?h("button",{className:"submitbuttonforform",onClick:()=>A(),children:h(Hl,{})}):h("button",{children:h($l,{})})]})})})}return h("div",{className:"large-container-buttonparent",children:e?t.answers.map((a,c)=>a.value?h("button",{className:"overlay-thing-button",children:[h("div",{className:"icon-container  share",children:h(Ul,{})}),h("a",{href:a.value,target:"_blank",children:a.text})]}):h("button",{className:"overlay-thing-button",onClick:()=>n(a.next),href:a==null?void 0:a.value,children:[h("div",{className:"icon-container",children:o(c)}),a.text]})):h("div",{})})}function ql({cssval:e,handleCloseforlargesize:t,video:n,videoEl:i,handlemuted:s,muted:r,handleChange:o,show:a,buttons:c}){Lt(()=>{var f;(f=i.current)==null||f.removeAttribute("controls")},[]);const[u,l]=O(!1);function d(){i.current.currentTime=0,i.current.play()}function p(){l(!0),setTimeout(()=>{l(!1)},1e3)}return h("div",{style:e,className:"video-container",children:[h("div",{className:"loader-container",children:h("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0",children:h("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:h("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})}),h("div",{className:"video-container-box",children:[h("div",{class:"close-button",onClick:()=>t(),children:h("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"15",cy:"15",r:"15",fill:"black"}),h("path",{d:"M15 18.9902C14.7491 18.9902 14.4982 18.8944 14.3069 18.7032L8.2872 12.6834C7.90427 12.3005 7.90427 11.6796 8.2872 11.2968C8.66997 10.9141 9.29071 10.9141 9.67367 11.2968L15 16.6235L20.3263 11.297C20.7092 10.9143 21.3299 10.9143 21.7126 11.297C22.0957 11.6798 22.0957 12.3007 21.7126 12.6836L15.693 18.7033C15.5017 18.8946 15.2508 18.9902 15 18.9902Z",fill:"white"})]})}),h("button",{className:"mutedbutton",onClick:s,children:[" ",r?h("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",style:{minHeight:"40px"},children:[h("use",{class:"ytp-svg-shadow"}),h("use",{class:"ytp-svg-shadow"}),h("defs",{children:[h("clipPath",{id:"ytp-svg-volume-animation-mask",children:[h("path",{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}),h("path",{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}),h("path",{class:"ytp-svg-volume-animation-mover",d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z",transform:"translate(0, 0)"})]}),h("clipPath",{id:"ytp-svg-volume-animation-slash-mask",children:h("path",{class:"ytp-svg-volume-animation-mover",d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z",transform:"translate(0, 0)"})})]}),h("path",{class:"ytp-svg-fill ytp-svg-volume-animation-speaker","clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff",id:"ytp-id-15"}),h("path",{class:"ytp-svg-fill ytp-svg-volume-animation-hider","clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff",id:"ytp-id-16",style:"display: none;"})]}):h("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",style:{minHeight:"40px"},children:[h("use",{class:"ytp-svg-shadow"}),h("path",{class:"ytp-svg-fill",d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z",id:"ytp-id-17"})]})," "]}),h("button",{className:"mutedbutton replay",onClick:d,children:h("svg",{style:{width:"32px",display:"inline",minHeight:"40px",paddingRight:"4px"},viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("g",{"clip-path":"url(#clip0_118_21)",children:[h("path",{d:"M7 0.875C5.55672 0.876578 4.16105 1.39143 3.0625 2.3275V1.3125C3.0625 1.19647 3.01641 1.08519 2.93436 1.00314C2.85231 0.921094 2.74103 0.875 2.625 0.875C2.50897 0.875 2.39769 0.921094 2.31564 1.00314C2.23359 1.08519 2.1875 1.19647 2.1875 1.3125V3.5C2.1875 3.61603 2.23359 3.72731 2.31564 3.80936C2.39769 3.89141 2.50897 3.9375 2.625 3.9375H4.8125C4.92853 3.9375 5.03981 3.89141 5.12186 3.80936C5.20391 3.72731 5.25 3.61603 5.25 3.5C5.25 3.38397 5.20391 3.27269 5.12186 3.19064C5.03981 3.10859 4.92853 3.0625 4.8125 3.0625H3.54812C4.49907 2.21684 5.72743 1.74978 7 1.75C8.09059 1.74946 9.15429 2.08857 10.0433 2.72024C10.9324 3.3519 11.6026 4.24475 11.961 5.27478C12.3194 6.3048 12.3481 7.42088 12.0432 8.46797C11.7382 9.51506 11.1148 10.4412 10.2594 11.1177C9.40399 11.7943 8.35915 12.1876 7.26997 12.2432C6.18079 12.2987 5.10134 12.0137 4.18157 11.4277C3.2618 10.8417 2.54736 9.98375 2.13748 8.97311C1.7276 7.96247 1.64263 6.84927 1.89437 5.78812C1.91288 5.73068 1.9193 5.67002 1.91323 5.60997C1.90716 5.54992 1.88873 5.49177 1.85909 5.43919C1.82946 5.38661 1.78927 5.34073 1.74105 5.30443C1.69283 5.26814 1.63761 5.24221 1.57889 5.22828C1.52016 5.21436 1.45918 5.21274 1.3998 5.22352C1.34041 5.2343 1.2839 5.25725 1.23382 5.29093C1.18373 5.32461 1.14115 5.36829 1.10877 5.41922C1.07638 5.47015 1.05488 5.52723 1.04563 5.58688C0.932904 6.04948 0.875626 6.52386 0.875 7C0.875 8.21141 1.23423 9.39562 1.90725 10.4029C2.58027 11.4101 3.53687 12.1952 4.65606 12.6588C5.77526 13.1223 7.00679 13.2436 8.19493 13.0073C9.38306 12.771 10.4744 12.1876 11.331 11.331C12.1876 10.4744 12.771 9.38306 13.0073 8.19493C13.2436 7.00679 13.1223 5.77526 12.6588 4.65606C12.1952 3.53687 11.4101 2.58027 10.4029 1.90725C9.39562 1.23423 8.21141 0.875 7 0.875Z",fill:"white"}),h("path",{d:"M6.125 9.27504C6.28925 9.27426 6.44996 9.22725 6.58875 9.13942L8.82438 7.74379C8.951 7.66532 9.05549 7.55582 9.12795 7.42566C9.20041 7.29551 9.23844 7.14901 9.23844 7.00004C9.23844 6.85107 9.20041 6.70457 9.12795 6.57442C9.05549 6.44426 8.951 6.33476 8.82438 6.25629L6.58875 4.86067C6.45649 4.778 6.30453 4.73219 6.14862 4.72798C5.99271 4.72377 5.8385 4.76131 5.70197 4.83671C5.56544 4.91212 5.45155 5.02265 5.37208 5.15685C5.29262 5.29106 5.25047 5.44407 5.25 5.60004V8.40004C5.25 8.63211 5.34219 8.85467 5.50628 9.01876C5.67038 9.18285 5.89294 9.27504 6.125 9.27504ZM6.125 5.60004L8.36063 7.00004L6.125 8.40004V5.60004Z",fill:"white"})]}),h("defs",{children:h("clipPath",{id:"clip0_118_21",children:h("rect",{width:"14",height:"14",fill:"white"})})})]})}),h("video",{src:n,autoPlay:!0,ref:i,className:"lg-video-for-full",playsInline:!0}),h("div",{className:u?"toast":" toast hidden ",children:h("div",{className:"toast-text",children:" your Form is submmited ✔️  "})}),h(jl,{show:a,buttons:c,handleChange:o,handletoast:p}),h("h1",{className:"lg-credit",style:{background:"black",paddingTop:"2px",paddingBottom:"2px"},children:h("a",{href:"https://api.whatsapp.com/send/?phone=918870981553&text=Hello%21+saw+your+plugin+on+Naturally+Yours+website.+Interested+to+know+more&type=phone_number&app_absent=0",target:"_blank",children:[" ",h("span",{style:{fontSize:"14px",margin:"0px",textDecoration:"underline"},children:"Made with ❤️ at F22 Labs"})]})})]})]})}const wp="";function Kl({setmodal:e,values:t,setvalues:n,modalformformat:i}){const{step:s,currentStepindex:r,cmpComponentsLength:o,next:a}=or(i),c=an(null);async function u(){console.log(s);const f={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{type:"profile",attributes:{...t}}})};fetch("https://iecb4lgq9l.execute-api.us-east-1.amazonaws.com/dev/",f).then(y=>y.json()).then(y=>console.log(y))}function l(f){if(f.preventDefault(),c.current.value="",r===o-1){u(),e(!1);return}a()}function d(f){console.log(f.target.name),n(y=>f.target.name==="phone_number"?(f.target.value.includes("+91")&&(f.target.value=f.target.value.replace("+91","")),{...y,[f.target.name]:`+91${f.target.value}`}):{...y,[f.target.name]:f.target.value})}console.log(t);function p(){e(!1)}return h(it,{children:[h("div",{className:"modal"}),h("div",{className:"modal-container",children:[h("video",{autoPlay:!0,playsInline:!0,src:"https://f22videoplugin.s3.ap-northeast-1.amazonaws.com/paperlondon/video1.mp4"}),h("div",{className:"forms",children:h("form",{action:"",className:"modal-form",onSubmit:l,children:[h("input",{type:s==null?void 0:s.type,value:t[s==null?void 0:s.name],onInput:f=>d(f),placeholder:s==null?void 0:s.placeholder,className:"input-modal",name:s==null?void 0:s.name,ref:c,required:!0}),h("button",{className:"submitbtnmodal",children:h("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"M7.42042 6.00003C7.42042 6.2151 7.3383 6.43013 7.17441 6.5941L2.01463 11.7538C1.6864 12.0821 1.15424 12.0821 0.826148 11.7538C0.498055 11.4257 0.498055 10.8937 0.826148 10.5654L5.39181 6.00003L0.826308 1.43461C0.498214 1.10639 0.498214 0.574383 0.826308 0.246316C1.1544 -0.0820694 1.68656 -0.0820694 2.01479 0.246316L7.17457 5.40596C7.33849 5.57001 7.42042 5.78505 7.42042 6.00003Z",fill:"#080807"})})})]})}),h("div",{className:"cross-buttonmodal",onClick:p,children:h("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("path",{d:"M1.25367 12C0.93501 12 0.616352 11.8826 0.36478 11.6312C-0.121593 11.145 -0.121593 10.3402 0.36478 9.854L9.85744 0.364652C10.3438 -0.121551 11.1488 -0.121551 11.6352 0.364652C12.1216 0.850856 12.1216 1.65561 11.6352 2.14181L2.14256 11.6312C1.90776 11.8826 1.57233 12 1.25367 12Z",fill:"white"}),h("path",{d:"M10.7463 12C10.4277 12 10.109 11.8826 9.85744 11.6312L0.36478 2.14181C-0.121593 1.65561 -0.121593 0.850856 0.36478 0.364652C0.851153 -0.121551 1.65618 -0.121551 2.14256 0.364652L11.6352 9.854C12.1216 10.3402 12.1216 11.145 11.6352 11.6312C11.3836 11.8826 11.065 12 10.7463 12Z",fill:"white"})]})})]})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},zl=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},lr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(p=64)),i.push(n[l],n[d],n[p],n[f])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ar(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||u==null||d==null)throw Error();const p=r<<2|a>>4;if(i.push(p),u!==64){const f=a<<4&240|u>>2;if(i.push(f),d!==64){const y=u<<6&192|d;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Gl=function(e){const t=ar(e);return lr.encodeByteArray(t,!0)},cn=function(e){return Gl(e).replace(/\./g,"")},Ql=function(e){try{return lr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=()=>Wl().__FIREBASE_DEFAULTS__,Yl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Jl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ql(e[1]);return t&&JSON.parse(t)},cr=()=>{try{return Xl()||Yl()||Jl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zl=e=>{var t,n;return(n=(t=cr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},tc=e=>{const t=Zl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ec=()=>{var e;return(e=cr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[cn(JSON.stringify(n)),cn(JSON.stringify(o)),a].join(".")}function sc(){try{return typeof indexedDB=="object"}catch{return!1}}function rc(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="FirebaseError";class zt extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=oc,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?ac(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new zt(s,a,i)}}function ac(e,t){return e.replace(lc,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const lc=/\{\$([^}]+)}/g;function hi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(hr(r)&&hr(o)){if(!hi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function hr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){return e&&e._delegate?e._delegate:e}class fe{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new nc;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hc(t))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Rt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rt){return this.instances.has(t)}getOptions(t=Rt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uc(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Rt){return this.component?this.component.multipleInstances?t:Rt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uc(e){return e===Rt?void 0:e}function hc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));const fc={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},pc=x.INFO,gc={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},mc=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=gc[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dr{constructor(t){this.name=t,this._logLevel=pc,this._logHandler=mc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const yc=(e,t)=>t.some(n=>e instanceof n);let fr,pr;function vc(){return fr||(fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wc(){return pr||(pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gr=new WeakMap,di=new WeakMap,mr=new WeakMap,fi=new WeakMap,pi=new WeakMap;function _c(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(bt(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&gr.set(n,e)}).catch(()=>{}),pi.set(t,e),t}function Ec(e){if(di.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});di.set(e,t)}let gi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return di.get(e);if(t==="objectStoreNames")return e.objectStoreNames||mr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Cc(e){gi=e(gi)}function bc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(mi(this),t,...n);return mr.set(i,t.sort?t.sort():[t]),bt(i)}:wc().includes(e)?function(...t){return e.apply(mi(this),t),bt(gr.get(this))}:function(...t){return bt(e.apply(mi(this),t))}}function Tc(e){return typeof e=="function"?bc(e):(e instanceof IDBTransaction&&Ec(e),yc(e,vc())?new Proxy(e,gi):e)}function bt(e){if(e instanceof IDBRequest)return _c(e);if(fi.has(e))return fi.get(e);const t=Tc(e);return t!==e&&(fi.set(e,t),pi.set(t,e)),t}const mi=e=>pi.get(e);function Ic(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=bt(o);return i&&o.addEventListener("upgradeneeded",c=>{i(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ac=["get","getKey","getAll","getAllKeys","count"],Sc=["put","add","delete","clear"],yi=new Map;function yr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yi.get(t))return yi.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Sc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ac.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return yi.set(t,r),r}Cc(e=>({...e,get:(t,n,i)=>yr(t,n)||e.get(t,n,i),has:(t,n)=>!!yr(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function kc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vi="@firebase/app",vr="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new dr("@firebase/app"),xc="@firebase/app-compat",Nc="@firebase/analytics-compat",Lc="@firebase/analytics",Rc="@firebase/app-check-compat",Oc="@firebase/app-check",Mc="@firebase/auth",Pc="@firebase/auth-compat",Fc="@firebase/database",Vc="@firebase/database-compat",Bc="@firebase/functions",Uc="@firebase/functions-compat",$c="@firebase/installations",Hc="@firebase/installations-compat",jc="@firebase/messaging",qc="@firebase/messaging-compat",Kc="@firebase/performance",zc="@firebase/performance-compat",Gc="@firebase/remote-config",Qc="@firebase/remote-config-compat",Wc="@firebase/storage",Xc="@firebase/storage-compat",Yc="@firebase/firestore",Jc="@firebase/firestore-compat",Zc="firebase",tu="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",eu={[vi]:"fire-core",[xc]:"fire-core-compat",[Lc]:"fire-analytics",[Nc]:"fire-analytics-compat",[Oc]:"fire-app-check",[Rc]:"fire-app-check-compat",[Mc]:"fire-auth",[Pc]:"fire-auth-compat",[Fc]:"fire-rtdb",[Vc]:"fire-rtdb-compat",[Bc]:"fire-fn",[Uc]:"fire-fn-compat",[$c]:"fire-iid",[Hc]:"fire-iid-compat",[jc]:"fire-fcm",[qc]:"fire-fcm-compat",[Kc]:"fire-perf",[zc]:"fire-perf-compat",[Gc]:"fire-rc",[Qc]:"fire-rc-compat",[Wc]:"fire-gcs",[Xc]:"fire-gcs-compat",[Yc]:"fire-fst",[Jc]:"fire-fst-compat","fire-js":"fire-js",[Zc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Map,_i=new Map;function nu(e,t){try{e.container.addComponent(t)}catch(n){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function hn(e){const t=e.name;if(_i.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;_i.set(t,e);for(const n of un.values())nu(n,e);return!0}function iu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new ur("app","Firebase",su);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=tu;function wr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:wi,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(n||(n=ec()),!n)throw Tt.create("no-options");const r=un.get(s);if(r){if(hi(n,r.options)&&hi(i,r.config))return r;throw Tt.create("duplicate-app",{appName:s})}const o=new dc(s);for(const c of _i.values())o.addComponent(c);const a=new ru(n,i,o);return un.set(s,a),a}function au(e=wi){const t=un.get(e);if(!t&&e===wi)return wr();if(!t)throw Tt.create("no-app",{appName:e});return t}function Gt(e,t,n){var i;let s=(i=eu[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(a.join(" "));return}hn(new fe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="firebase-heartbeat-database",cu=1,pe="firebase-heartbeat-store";let Ei=null;function _r(){return Ei||(Ei=Ic(lu,cu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}}).catch(e=>{throw Tt.create("idb-open",{originalErrorMessage:e.message})})),Ei}async function uu(e){try{return(await _r()).transaction(pe).objectStore(pe).get(Cr(e))}catch(t){if(t instanceof zt)Ot.warn(t.message);else{const n=Tt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(n.message)}}}async function Er(e,t){try{const i=(await _r()).transaction(pe,"readwrite");return await i.objectStore(pe).put(t,Cr(e)),i.done}catch(n){if(n instanceof zt)Ot.warn(n.message);else{const i=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(i.message)}}}function Cr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=1024,du=30*24*60*60*1e3;class fu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gu(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=br();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=du}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=br(),{heartbeatsToSend:n,unsentEntries:i}=pu(this._heartbeatsCache.heartbeats),s=cn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function br(){return new Date().toISOString().substring(0,10)}function pu(e,t=hu){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Tr(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class gu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sc()?rc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Tr(e){return cn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e){hn(new fe("platform-logger",t=>new Dc(t),"PRIVATE")),hn(new fe("heartbeat",t=>new fu(t),"PRIVATE")),Gt(vi,vr,e),Gt(vi,vr,"esm2017"),Gt("fire-js","")}mu("");var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Ci=Ci||{},E=yu||self;function dn(){}function fn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ge(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function vu(e){return Object.prototype.hasOwnProperty.call(e,bi)&&e[bi]||(e[bi]=++wu)}var bi="closure_uid_"+(1e9*Math.random()>>>0),wu=0;function _u(e,t,n){return e.call.apply(e.bind,arguments)}function Eu(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=_u:Y=Eu,Y.apply(null,arguments)}function pn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function G(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function It(){this.s=this.s,this.o=this.o}var Cu=0;It.prototype.s=!1,It.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Cu!=0)&&vu(this)},It.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ir=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ti(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Ar(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(fn(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var bu=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",dn,t),E.removeEventListener("test",dn,t)}catch{}return e}();function gn(e){return/^[\s\xa0]*$/.test(e)}var Sr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ii(e,t){return e<t?-1:e>t?1:0}function mn(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return mn().indexOf(e)!=-1}function Ai(e){return Ai[" "](e),e}Ai[" "]=dn;function Tu(e){var t=Su;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Iu=pt("Opera"),Qt=pt("Trident")||pt("MSIE"),Dr=pt("Edge"),Si=Dr||Qt,kr=pt("Gecko")&&!(mn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Au=mn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function xr(){var e=E.document;return e?e.documentMode:void 0}var yn;t:{var Di="",ki=function(){var e=mn();if(kr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Dr)return/Edge\/([\d\.]+)/.exec(e);if(Qt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Au)return/WebKit\/(\S+)/.exec(e);if(Iu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ki&&(Di=ki?ki[1]:""),Qt){var xi=xr();if(xi!=null&&xi>parseFloat(Di)){yn=String(xi);break t}}yn=Di}var Su={};function Du(){return Tu(function(){let e=0;const t=Sr(String(yn)).split("."),n=Sr("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=Ii(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ii(s[2].length==0,r[2].length==0)||Ii(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}var Ni;if(E.document&&Qt){var Nr=xr();Ni=Nr||parseInt(yn,10)||void 0}else Ni=void 0;var ku=Ni;function me(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(kr){t:{try{Ai(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:xu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&me.X.h.call(this)}}G(me,J);var xu={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ye="closure_listenable_"+(1e6*Math.random()|0),Nu=0;function Lu(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++Nu,this.ba=this.ea=!1}function vn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Li(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Lr(e){const t={};for(const n in e)t[n]=e[n];return t}const Rr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<Rr.length;r++)n=Rr[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function wn(e){this.src=e,this.g={},this.h=0}wn.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Oi(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Lu(t,this.src,r,!!i,s),t.ea=n,e.push(t)),t};function Ri(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=Ir(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(vn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Oi(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),Pi={};function Mr(e,t,n,i,s){if(i&&i.once)return Fr(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Mr(e,t[r],n,i,s);return null}return n=Ui(n),e&&e[ye]?e.N(t,n,ge(i)?!!i.capture:!!i,s):Pr(e,t,n,!1,i,s)}function Pr(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=ge(s)?!!s.capture:!!s,a=Vi(e);if(a||(e[Mi]=a=new wn(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=Ru(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)bu||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Br(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ru(){function e(n){return t.call(e.src,e.listener,n)}const t=Ou;return e}function Fr(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Fr(e,t[r],n,i,s);return null}return n=Ui(n),e&&e[ye]?e.O(t,n,ge(i)?!!i.capture:!!i,s):Pr(e,t,n,!0,i,s)}function Vr(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Vr(e,t[r],n,i,s);else i=ge(i)?!!i.capture:!!i,n=Ui(n),e&&e[ye]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Oi(r,n,i,s),-1<n&&(vn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Vi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Oi(t,n,i,s)),(n=-1<e?t[e]:null)&&Fi(n))}function Fi(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ye])Ri(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Br(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Vi(t))?(Ri(n,e),n.h==0&&(n.src=null,t[Mi]=null)):vn(e)}}}function Br(e){return e in Pi?Pi[e]:Pi[e]="on"+e}function Ou(e,t){if(e.ba)e=!0;else{t=new me(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&Fi(e),e=n.call(i,t)}return e}function Vi(e){return e=e[Mi],e instanceof wn?e:null}var Bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(e){return typeof e=="function"?e:(e[Bi]||(e[Bi]=function(t){return e.handleEvent(t)}),e[Bi])}function q(){It.call(this),this.i=new wn(this),this.P=this,this.I=null}G(q,It),q.prototype[ye]=!0,q.prototype.removeEventListener=function(e,t,n,i){Vr(this,e,t,n,i)};function Q(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var s=t;t=new J(i,e),Or(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=_n(o,i,!0,t)&&s}if(o=t.g=e,s=_n(o,i,!0,t)&&s,s=_n(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=_n(o,i,!1,t)&&s}q.prototype.M=function(){if(q.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)vn(n[i]);delete e.g[t],e.h--}}this.I=null},q.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},q.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function _n(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ri(e.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var $i=E.JSON.stringify;function Mu(){var e=Hr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Pu{constructor(){this.h=this.g=null}add(t,n){const i=Ur.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Ur=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Fu,e=>e.reset());class Fu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Vu(e){E.setTimeout(()=>{throw e},0)}function $r(e,t){Hi||Bu(),ji||(Hi(),ji=!0),Hr.add(e,t)}var Hi;function Bu(){var e=E.Promise.resolve(void 0);Hi=function(){e.then(Uu)}}var ji=!1,Hr=new Pu;function Uu(){for(var e;e=Mu();){try{e.h.call(e.g)}catch(n){Vu(n)}var t=Ur;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ji=!1}function En(e,t){q.call(this),this.h=e||1,this.g=t||E,this.j=Y(this.lb,this),this.l=Date.now()}G(En,q),v=En.prototype,v.ca=!1,v.R=null,v.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Q(this,"tick"),this.ca&&(qi(this),this.start()))}},v.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qi(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}v.M=function(){En.X.M.call(this),qi(this),delete this.g};function Ki(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function jr(e){e.g=Ki(()=>{e.g=null,e.i&&(e.i=!1,jr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $u extends It{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ve(e){It.call(this),this.h=e,this.g={}}G(ve,It);var qr=[];function Kr(e,t,n,i){Array.isArray(n)||(n&&(qr[0]=n.toString()),n=qr);for(var s=0;s<n.length;s++){var r=Mr(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function zr(e){Li(e.g,function(t,n){this.g.hasOwnProperty(n)&&Fi(t)},e),e.g={}}ve.prototype.M=function(){ve.X.M.call(this),zr(this)},ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cn(){this.g=!0}Cn.prototype.Aa=function(){this.g=!1};function Hu(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function ju(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Wt(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ku(e,n)+(i?" "+i:"")})}function qu(e,t){e.info(function(){return"TIMEOUT: "+t})}Cn.prototype.info=function(){};function Ku(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $i(n)}catch{return t}}var Mt={},Gr=null;function bn(){return Gr=Gr||new q}Mt.Pa="serverreachability";function Qr(e){J.call(this,Mt.Pa,e)}G(Qr,J);function we(e){const t=bn();Q(t,new Qr(t))}Mt.STAT_EVENT="statevent";function Wr(e,t){J.call(this,Mt.STAT_EVENT,e),this.stat=t}G(Wr,J);function st(e){const t=bn();Q(t,new Wr(t,e))}Mt.Qa="timingevent";function Xr(e,t){J.call(this,Mt.Qa,e),this.size=t}G(Xr,J);function _e(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var Tn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function zi(){}zi.prototype.h=null;function Jr(e){return e.h||(e.h=e.i())}function Zr(){}var Ee={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Gi(){J.call(this,"d")}G(Gi,J);function Qi(){J.call(this,"c")}G(Qi,J);var Wi;function In(){}G(In,zi),In.prototype.g=function(){return new XMLHttpRequest},In.prototype.i=function(){return{}},Wi=new In;function Ce(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new ve(this),this.O=zu,e=Si?125:void 0,this.T=new En(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new to}function to(){this.i=null,this.g="",this.h=!1}var zu=45e3,Xi={},An={};v=Ce.prototype,v.setTimeout=function(e){this.O=e};function Yi(e,t,n){e.K=1,e.v=xn(yt(t)),e.s=n,e.P=!0,eo(e,null)}function eo(e,t){e.F=Date.now(),be(e),e.A=yt(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),ho(n.i,"t",i),e.C=0,n=e.l.H,e.h=new to,e.g=Po(e.l,n?t:null,!e.s),0<e.N&&(e.L=new $u(Y(e.La,e,e.g),e.N)),Kr(e.S,e.g,"readystatechange",e.ib),t=e.H?Lr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),we(),Hu(e.j,e.u,e.A,e.m,e.U,e.s)}v.ib=function(e){e=e.target;const t=this.L;t&&vt(e)==3?t.l():this.La(e)},v.La=function(e){try{if(e==this.g)t:{const l=vt(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(l!=3||Si||this.g&&(this.h.h||this.g.fa()||To(this.g)))){this.I||l!=4||t==7||(t==8||0>=d?we(3):we(2)),Sn(this);var n=this.g.aa();this.Y=n;e:if(no(this)){var i=To(this.g);e="";var s=i.length,r=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),Te(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ju(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gn(a)){var u=a;break e}}u=null}if(n=u)Wt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ji(this,n);else{this.i=!1,this.o=3,st(12),Pt(this),Te(this);break t}}this.P?(io(this,l,o),Si&&this.i&&l==3&&(Kr(this.S,this.T,"tick",this.hb),this.T.start())):(Wt(this.j,this.m,o,null),Ji(this,o)),l==4&&Pt(this),this.i&&!this.I&&(l==4?Lo(this.l,this):(this.i=!1,be(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Pt(this),Te(this)}}}catch{}finally{}};function no(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function io(e,t,n){let i=!0,s;for(;!e.I&&e.C<n.length;)if(s=Gu(e,n),s==An){t==4&&(e.o=4,st(14),i=!1),Wt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Xi){e.o=4,st(15),Wt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Wt(e.j,e.m,s,null),Ji(e,s);no(e)&&s!=An&&s!=Xi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,st(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),os(t),t.K=!0,st(11))):(Wt(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Te(e))}v.hb=function(){if(this.g){var e=vt(this.g),t=this.g.fa();this.C<t.length&&(Sn(this),io(this,e,t),this.i&&e!=4&&be(this))}};function Gu(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?An:(n=Number(t.substring(n,i)),isNaN(n)?Xi:(i+=1,i+n>t.length?An:(t=t.substr(i,n),e.C=i+n,t)))}v.cancel=function(){this.I=!0,Pt(this)};function be(e){e.V=Date.now()+e.O,so(e,e.O)}function so(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=_e(Y(e.gb,e),t)}function Sn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}v.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(qu(this.j,this.A),this.K!=2&&(we(),st(17)),Pt(this),this.o=2,Te(this)):so(this,this.V-e)};function Te(e){e.l.G==0||e.I||Lo(e.l,e)}function Pt(e){Sn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,qi(e.T),zr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ji(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Zi(n.h,e))){if(!e.J&&Zi(n.h,e)&&n.G==3){try{var i=n.Fa.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Pn(n),On(n);else break t;rs(n),st(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=_e(Y(n.cb,n),6e3));if(1>=go(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vt(n,11)}else if((e.J||n.g==e)&&Pn(n),!gn(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=e.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=i.h;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ts(r,r.h),r.h=null))}if(i.D){const A=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(i.za=A,M(i.F,i.D,A))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=e;if(i.sa=Mo(i,i.H?i.ka:null,i.V),o.J){mo(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Sn(a),be(a)),i.g=o}else xo(i);0<n.i.length&&Mn(n)}else u[0]!="stop"&&u[0]!="close"||Vt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vt(n,7):ss(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}we(4)}catch{}}function Qu(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(fn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Wu(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(fn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function ro(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(fn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Wu(e),i=Qu(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ft(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=t!==void 0?t:e.h,Dn(this,e.j),this.s=e.s,this.g=e.g,kn(this,e.m),this.l=e.l,t=e.i;var n=new Se;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ao(this,n),this.o=e.o}else e&&(n=String(e).match(oo))?(this.h=!!t,Dn(this,n[1]||"",!0),this.s=Ie(n[2]||""),this.g=Ie(n[3]||"",!0),kn(this,n[4]),this.l=Ie(n[5]||"",!0),ao(this,n[6]||"",!0),this.o=Ie(n[7]||"")):(this.h=!!t,this.i=new Se(null,this.h))}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,lo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ae(t,lo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ae(n,n.charAt(0)=="/"?Zu:Ju,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ae(n,eh)),e.join("")};function yt(e){return new Ft(e)}function Dn(e,t,n){e.j=n?Ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function kn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ao(e,t,n){t instanceof Se?(e.i=t,nh(e.i,e.h)):(n||(t=Ae(t,th)),e.i=new Se(t,e.h))}function M(e,t,n){e.i.set(t,n)}function xn(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Yu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var lo=/[#\/\?@]/g,Ju=/[#\?:]/g,Zu=/[#\?]/g,th=/[#\?@]/g,eh=/#/g;function Se(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function At(e){e.g||(e.g=new Map,e.h=0,e.i&&Xu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=Se.prototype,v.add=function(e,t){At(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function co(e,t){At(e),t=Xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function uo(e,t){return At(e),t=Xt(e,t),e.g.has(t)}v.forEach=function(e,t){At(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)},v.oa=function(){At(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n},v.W=function(e){At(this);let t=[];if(typeof e=="string")uo(this,e)&&(t=t.concat(this.g.get(Xt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},v.set=function(e,t){return At(this),this.i=null,e=Xt(this,e),uo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},v.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ho(e,t,n){co(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),Ti(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function nh(e,t){t&&!e.j&&(At(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(co(this,i),ho(this,s,n))},e)),e.j=t}var ih=class{constructor(t,n){this.h=t,this.g=n}};function fo(e){this.l=e||sh,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sh=10;function po(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function go(e){return e.h?1:e.g?e.g.size:0}function Zi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ts(e,t){e.g?e.g.add(t):e.h=t}function mo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}fo.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function yo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ti(e.i)}function es(){}es.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)},es.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function rh(){this.g=new es}function oh(e,t,n){const i=n||"";try{ro(e,function(s,r){let o=s;ge(s)&&(o=$i(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function ah(e,t){const n=new Cn;if(E.Image){const i=new Image;i.onload=pn(Nn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=pn(Nn,n,i,"TestLoadImage: error",!1,t),i.onabort=pn(Nn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=pn(Nn,n,i,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Nn(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function De(e){this.l=e.ac||null,this.j=e.jb||!1}G(De,zi),De.prototype.g=function(){return new Ln(this.l,this.j)},De.prototype.i=function(e){return function(){return e}}({});function Ln(e,t){q.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ns,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Ln,q);var ns=0;v=Ln.prototype,v.open=function(e,t){if(this.readyState!=ns)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,xe(this)},v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=ns},v.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xe(this)),this.g&&(this.readyState=3,xe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function vo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}v.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ke(this):xe(this),this.readyState==3&&vo(this)}},v.Va=function(e){this.g&&(this.response=this.responseText=e,ke(this))},v.Ua=function(e){this.g&&(this.response=e,ke(this))},v.ga=function(){this.g&&ke(this)};function ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,xe(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)},v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function xe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var lh=E.JSON.parse;function V(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wo,this.K=this.L=!1}G(V,q);var wo="",ch=/^https?$/i,uh=["POST","PUT"];v=V.prototype,v.Ka=function(e){this.L=e},v.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wi.g(),this.C=this.u?Jr(this.u):Jr(Wi),this.g.onreadystatechange=Y(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){_o(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=E.FormData&&e instanceof E.FormData,!(0<=Ir(uh,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bo(this),0<this.B&&((this.K=hh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.qa,this)):this.A=Ki(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){_o(this,r)}};function hh(e){return Qt&&Du()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.qa=function(){typeof Ci<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function _o(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Eo(e),Rn(e)}function Eo(e){e.D||(e.D=!0,Q(e,"complete"),Q(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),Rn(this))},v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rn(this,!0)),V.X.M.call(this)},v.Ha=function(){this.s||(this.F||this.v||this.l?Co(this):this.fb())},v.fb=function(){Co(this)};function Co(e){if(e.h&&typeof Ci<"u"&&(!e.C[1]||vt(e)!=4||e.aa()!=2)){if(e.v&&vt(e)==4)Ki(e.Ha,0,e);else if(Q(e,"readystatechange"),vt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var s=String(e.H).match(oo)[1]||null;if(!s&&E.self&&E.self.location){var r=E.self.location.protocol;s=r.substr(0,r.length-1)}i=!ch.test(s?s.toLowerCase():"")}n=i}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var o=2<vt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Eo(e)}}finally{Rn(e)}}}}function Rn(e,t){if(e.g){bo(e);const n=e.g,i=e.C[0]?dn:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=i}catch{}}}function bo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function vt(e){return e.g?e.g.readyState:0}v.aa=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}},v.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}},v.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),lh(t)}};function To(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case wo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}v.Ea=function(){return this.m},v.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Io(e){let t="";return Li(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function is(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Io(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function Ne(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ao(e){this.Ca=0,this.i=[],this.j=new Cn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ne("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ne("baseRetryDelayMs",5e3,e),this.bb=Ne("retryDelaySeedMs",1e4,e),this.$a=Ne("forwardChannelMaxRetries",2,e),this.ta=Ne("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new fo(e&&e.concurrentRequestLimit),this.Fa=new rh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}v=Ao.prototype,v.ma=8,v.G=1;function ss(e){if(So(e),e.G==3){var t=e.U++,n=yt(e.F);M(n,"SID",e.I),M(n,"RID",t),M(n,"TYPE","terminate"),Le(e,n),t=new Ce(e,e.j,t,void 0),t.K=2,t.v=xn(yt(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Po(t.l,null),t.g.da(t.v)),t.F=Date.now(),be(t)}Oo(e)}function On(e){e.g&&(os(e),e.g.cancel(),e.g=null)}function So(e){On(e),e.u&&(E.clearTimeout(e.u),e.u=null),Pn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Mn(e){po(e.h)||e.m||(e.m=!0,$r(e.Ja,e),e.C=0)}function dh(e,t){return go(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=_e(Y(e.Ja,e,t),Ro(e,e.C)),e.C++,!0)}v.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Ce(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Lr(r),Or(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ko(this,s,t),n=yt(this.F),M(n,"RID",e),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),Le(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Io(r)))+"&"+t:this.o&&is(n,this.o,r)),ts(this.h,s),this.Ya&&M(n,"TYPE","init"),this.O?(M(n,"$req",t),M(n,"SID","null"),s.Z=!0,Yi(s,n,null)):Yi(s,n,t),this.G=2}}else this.G==3&&(e?Do(this,e):this.i.length==0||po(this.h)||Do(this))};function Do(e,t){var n;t?n=t.m:n=e.U++;const i=yt(e.F);M(i,"SID",e.I),M(i,"RID",n),M(i,"AID",e.T),Le(e,i),e.o&&e.s&&is(i,e.o,e.s),n=new Ce(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ko(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ts(e.h,n),Yi(n,i,t)}function Le(e,t){e.ia&&Li(e.ia,function(n,i){M(t,i,n)}),e.l&&ro({},function(n,i){M(t,i,n)})}function ko(e,t,n){n=Math.min(e.i.length,n);var i=e.l?Y(e.l.Ra,e.l,e):null;t:{var s=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=r,0>u)r=Math.max(0,s[c].h-100),a=!1;else try{oh(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,i}function xo(e){e.g||e.u||(e.Z=1,$r(e.Ia,e),e.A=0)}function rs(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=_e(Y(e.Ia,e),Ro(e,e.A)),e.A++,!0)}v.Ia=function(){if(this.u=null,No(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=_e(Y(this.eb,this),e)}},v.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,st(10),On(this),No(this))};function os(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function No(e){e.g=new Ce(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=yt(e.sa);M(t,"RID","rpc"),M(t,"SID",e.I),M(t,"CI",e.L?"0":"1"),M(t,"AID",e.T),M(t,"TYPE","xmlhttp"),Le(e,t),e.o&&e.s&&is(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=xn(yt(t)),n.s=null,n.P=!0,eo(n,e)}v.cb=function(){this.v!=null&&(this.v=null,On(this),rs(this),st(19))};function Pn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function Lo(e,t){var n=null;if(e.g==t){Pn(e),os(e),e.g=null;var i=2}else if(Zi(e.h,t))n=t.D,mo(e.h,t),i=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;i=bn(),Q(i,new Xr(i,n)),Mn(e)}else xo(e);else if(s=t.o,s==3||s==0&&0<e.pa||!(i==1&&dh(e,t)||i==2&&rs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Vt(e,5);break;case 4:Vt(e,10);break;case 3:Vt(e,6);break;default:Vt(e,2)}}}function Ro(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Vt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=Y(e.kb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Dn(n,"https"),xn(n)),ah(n.toString(),i)}else st(2);e.G=0,e.l&&e.l.va(t),Oo(e),So(e)}v.kb=function(e){e?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Oo(e){if(e.G=0,e.la=[],e.l){const t=yo(e.h);(t.length!=0||e.i.length!=0)&&(Ar(e.la,t),Ar(e.la,e.i),e.h.i.length=0,Ti(e.i),e.i.length=0),e.l.ua()}}function Mo(e,t,n){var i=n instanceof Ft?yt(n):new Ft(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),kn(i,i.m);else{var s=E.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Ft(null,void 0);i&&Dn(r,i),t&&(r.g=t),s&&kn(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&M(i,n,t),M(i,"VER",e.ma),Le(e,i),i}function Po(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new V(new De({jb:!0})):new V(e.ra),t.Ka(e.H),t}function Fo(){}v=Fo.prototype,v.xa=function(){},v.wa=function(){},v.va=function(){},v.ua=function(){},v.Ra=function(){};function Fn(){if(Qt&&!(10<=Number(ku)))throw Error("Environmental error: no available transport.")}Fn.prototype.g=function(e,t){return new at(e,t)};function at(e,t){q.call(this),this.g=new Ao(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!gn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!gn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yt(this)}G(at,q),at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Mo(e,null,e.V),Mn(e)},at.prototype.close=function(){ss(this.g)},at.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=$i(e),e=n);t.i.push(new ih(t.ab++,e)),t.G==3&&Mn(t)},at.prototype.M=function(){this.g.l=null,delete this.j,ss(this.g),delete this.g,at.X.M.call(this)};function Vo(e){Gi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(Vo,Gi);function Bo(){Qi.call(this),this.status=1}G(Bo,Qi);function Yt(e){this.g=e}G(Yt,Fo),Yt.prototype.xa=function(){Q(this.g,"a")},Yt.prototype.wa=function(e){Q(this.g,new Vo(e))},Yt.prototype.va=function(e){Q(this.g,new Bo)},Yt.prototype.ua=function(){Q(this.g,"b")},Fn.prototype.createWebChannel=Fn.prototype.g,at.prototype.send=at.prototype.u,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,Tn.NO_ERROR=0,Tn.TIMEOUT=8,Tn.HTTP_ERROR=6,Yr.COMPLETE="complete",Zr.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",q.prototype.listen=q.prototype.N,V.prototype.listenOnce=V.prototype.O,V.prototype.getLastError=V.prototype.Oa,V.prototype.getLastErrorCode=V.prototype.Ea,V.prototype.getStatus=V.prototype.aa,V.prototype.getResponseJson=V.prototype.Sa,V.prototype.getResponseText=V.prototype.fa,V.prototype.send=V.prototype.da,V.prototype.setWithCredentials=V.prototype.Ka;var fh=function(){return new Fn},ph=function(){return bn()},as=Tn,gh=Yr,mh=Mt,Uo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},yh=De,Vn=Zr,vh=V;const $o="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new dr("@firebase/firestore");function Ho(){return Bt.logLevel}function _(e,...t){if(Bt.logLevel<=x.DEBUG){const n=t.map(cs);Bt.debug(`Firestore (${Jt}): ${e}`,...n)}}function Ut(e,...t){if(Bt.logLevel<=x.ERROR){const n=t.map(cs);Bt.error(`Firestore (${Jt}): ${e}`,...n)}}function ls(e,...t){if(Bt.logLevel<=x.WARN){const n=t.map(cs);Bt.warn(`Firestore (${Jt}): ${e}`,...n)}}function cs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e="Unexpected state"){const t=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+e;throw Ut(t),new Error(t)}function H(e,t){e||S()}function R(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends zt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class _h{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Eh{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $t,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $t)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(H(typeof i.accessToken=="string"),new jo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string"),new Z(t)}}class Ch{constructor(t,n,i,s){this.h=t,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(H(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class bh{constructor(t,n,i,s){this.h=t,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new Ch(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Th{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ih{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const i=r=>{r.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(H(typeof n.token=="string"),this.A=n.token,new Th(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Ah(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function L(e,t){return e<t?-1:e>t?1:0}function Zt(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new C(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new C(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new j(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new j(0,0))}static max(){return new P(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n,i){n===void 0?n=0:n>t.length&&S(),i===void 0?i=t.length-n:i>t.length-n&&S(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Re.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Re?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=t.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class B extends Re{construct(t,n,i){return new B(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new C(m.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new B(n)}static emptyPath(){return new B([])}}const Sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Re{construct(t,n,i){return new tt(t,n,i)}static isValidIdentifier(t){return Sh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new C(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new C(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new C(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(B.fromString(t))}static fromName(t){return new T(B.fromString(t).popFirst(5))}static empty(){return new T(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&B.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return B.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new B(t.slice()))}}function Dh(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=P.fromTimestamp(i===1e9?new j(n+1,0):new j(n,i));return new St(s,T.empty(),t)}function kh(e){return new St(e.readTime,e.key,-1)}class St{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new St(P.min(),T.empty(),-1)}static max(){return new St(P.max(),T.empty(),-1)}}function xh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:L(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Nh)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,i)=>{n(t)})}static reject(t){return new g((n,i)=>{i(t)})}static waitFor(t){return new g((n,i)=>{let s=0,r=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(t){let n=g.resolve(!1);for(const i of t)n=n.next(s=>s?g.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new g((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===r&&i(o)},l=>s(l))}})}static doWhile(t,n){return new g((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function Bn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>n.writeSequenceNumber(i))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}zo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,n,i,s,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Un{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Un&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Oe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Qo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e){return e==null}function $n(e){return e===0&&1/e==-1/0}function Oh(e){return typeof e=="number"&&Number.isInteger(e)&&!$n(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new wt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(t);return new wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const Mh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(e){if(H(!!e),typeof e=="string"){let t=0;const n=Mh.exec(e);if(H(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:W(e.seconds),nanos:W(e.nanos)}}function W(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Me(e){return typeof e=="string"?wt.fromBase64String(e):wt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hn(e){const t=Ht(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function te(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ph(e)?4:Fh(e)?9007199254740991:10:S()}function gt(e,t){if(e===t)return!0;const n=te(e);if(n!==te(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hn(e).isEqual(Hn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ht(i.timestampValue),o=Ht(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Me(i.bytesValue).isEqual(Me(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return W(i.geoPointValue.latitude)===W(s.geoPointValue.latitude)&&W(i.geoPointValue.longitude)===W(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return W(i.integerValue)===W(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=W(i.doubleValue),o=W(s.doubleValue);return r===o?$n(r)===$n(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Zt(e.arrayValue.values||[],t.arrayValue.values||[],gt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Go(r)!==Go(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!gt(r[a],o[a])))return!1;return!0}(e,t);default:return S()}}function Pe(e,t){return(e.values||[]).find(n=>gt(n,t))!==void 0}function ee(e,t){if(e===t)return 0;const n=te(e),i=te(t);if(n!==i)return L(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(s,r){const o=W(s.integerValue||s.doubleValue),a=W(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Wo(e.timestampValue,t.timestampValue);case 4:return Wo(Hn(e),Hn(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(s,r){const o=Me(s),a=Me(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=L(o[c],a[c]);if(u!==0)return u}return L(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,r){const o=L(W(s.latitude),W(r.latitude));return o!==0?o:L(W(s.longitude),W(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ee(o[c],a[c]);if(u)return u}return L(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,r){if(s===jn.mapValue&&r===jn.mapValue)return 0;if(s===jn.mapValue)return 1;if(r===jn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const d=L(a[l],u[l]);if(d!==0)return d;const p=ee(o[a[l]],c[u[l]]);if(p!==0)return p}return L(a.length,u.length)}(e.mapValue,t.mapValue);default:throw S()}}function Wo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return L(e,t);const n=Ht(e),i=Ht(t),s=L(n.seconds,i.seconds);return s!==0?s:L(n.nanos,i.nanos)}function ne(e){return hs(e)}function hs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(i){const s=Ht(i);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Me(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=hs(o);return s+"]"}(e.arrayValue):"mapValue"in e?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${hs(i.fields[a])}`;return r+"}"}(e.mapValue):S();var t,n}function ds(e){return!!e&&"integerValue"in e}function fs(e){return!!e&&"arrayValue"in e}function qn(e){return!!e&&"mapValue"in e}function Fe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Oe(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=Fe(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Fe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Fh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n){this.position=t,this.inclusive=n}}function Xo(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(r.field.isKeyField()?i=T.comparator(T.fromName(o.referenceValue),n.key):i=ee(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Yo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{}class K extends Jo{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new Bh(t,n,i):n==="array-contains"?new Hh(t,i):n==="in"?new jh(t,i):n==="not-in"?new qh(t,i):n==="array-contains-any"?new Kh(t,i):new K(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new Uh(t,i):new $h(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ee(n,this.value)):n!==null&&te(this.value)===te(n)&&this.matchesComparison(ee(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dt extends Jo{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Dt(t,n)}matches(t){return Zo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Zo(e){return e.op==="and"}function ta(e){return Vh(e)&&Zo(e)}function Vh(e){for(const t of e.filters)if(t instanceof Dt)return!1;return!0}function ps(e){if(e instanceof K)return e.field.canonicalString()+e.op.toString()+ne(e.value);if(ta(e))return e.filters.map(t=>ps(t)).join(",");{const t=e.filters.map(n=>ps(n)).join(",");return`${e.op}(${t})`}}function ea(e,t){return e instanceof K?function(n,i){return i instanceof K&&n.op===i.op&&n.field.isEqual(i.field)&&gt(n.value,i.value)}(e,t):e instanceof Dt?function(n,i){return i instanceof Dt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&ea(r,i.filters[o]),!0):!1}(e,t):void S()}function na(e){return e instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${ne(t.value)}`}(e):e instanceof Dt?function(t){return t.op.toString()+" {"+t.getFilters().map(na).join(" ,")+"}"}(e):"Filter"}class Bh extends K{constructor(t,n,i){super(t,n,i),this.key=T.fromName(i.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class Uh extends K{constructor(t,n){super(t,"in",n),this.keys=ia("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class $h extends K{constructor(t,n){super(t,"not-in",n),this.keys=ia("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ia(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>T.fromName(i.referenceValue))}class Hh extends K{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fs(n)&&Pe(n.arrayValue,this.value)}}class jh extends K{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Pe(this.value.arrayValue,n)}}class qh extends K{constructor(t,n){super(t,"not-in",n)}matches(t){if(Pe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Pe(this.value.arrayValue,n)}}class Kh extends K{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Pe(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,n="asc"){this.field=t,this.dir=n}}function zh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n){this.comparator=t,this.root=n||X.EMPTY}insert(t,n){return new ot(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,X.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zn(this.root,t,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zn(this.root,t,this.comparator,!0)}}class zn{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class X{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??X.RED,this.left=s??X.EMPTY,this.right=r??X.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new X(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return X.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1,X.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,i,s){return this}insert(e,t,n){return new X(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new sa(this.data.getIterator())}getIteratorFrom(t){return new sa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new rt(this.comparator);return n.data=t,n}}class sa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new ut([])}unionWith(t){let n=new rt(tt.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Zt(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.value=t}static empty(){return new ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!qn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fe(n)}setAll(t){let n=tt.emptyPath(),i={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Fe(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());qn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];qn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){Oe(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new ht(Fe(this.value))}}function ra(e){const t=[];return Oe(e.fields,(n,i)=>{const s=new tt([n]);if(qn(i)){const r=ra(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,n,i,s,r,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new dt(t,0,P.min(),P.min(),P.min(),ht.empty(),0)}static newFoundDocument(t,n,i,s){return new dt(t,1,n,P.min(),i,s,0)}static newNoDocument(t,n){return new dt(t,2,n,P.min(),P.min(),ht.empty(),0)}static newUnknownDocument(t,n){return new dt(t,3,n,P.min(),P.min(),ht.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,n=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function oa(e,t=null,n=[],i=[],s=null,r=null,o=null){return new Gh(e,t,n,i,s,r,o)}function gs(e){const t=R(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>ps(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),us(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>ne(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>ne(i)).join(",")),t.ft=n}return t.ft}function ms(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ea(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Yo(e.startAt,t.startAt)&&Yo(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Qh(e,t,n,i,s,r,o,a){return new Gn(e,t,n,i,s,r,o,a)}function Wh(e){return new Gn(e)}function aa(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Xh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Yh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Jh(e){return e.collectionGroup!==null}function ie(e){const t=R(e);if(t.dt===null){t.dt=[];const n=Yh(t),i=Xh(t);if(n!==null&&i===null)n.isKeyField()||t.dt.push(new Ve(n)),t.dt.push(new Ve(tt.keyField(),"asc"));else{let s=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ve(tt.keyField(),r))}}}return t.dt}function se(e){const t=R(e);if(!t._t)if(t.limitType==="F")t._t=oa(t.path,t.collectionGroup,ie(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ie(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ve(r.field,o))}const i=t.endAt?new Kn(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Kn(t.startAt.position,t.startAt.inclusive):null;t._t=oa(t.path,t.collectionGroup,n,t.filters,t.limit,i,s)}return t._t}function ys(e,t,n){return new Gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function la(e,t){return ms(se(e),se(t))&&e.limitType===t.limitType}function ca(e){return`${gs(se(e))}|lt:${e.limitType}`}function ua(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>na(i)).join(", ")}]`),us(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>ne(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>ne(i)).join(",")),`Target(${n})`}(se(e))}; limitType=${e.limitType})`}function vs(e,t){return t.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):T.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(e,t)&&function(n,i){for(const s of ie(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Xo(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,ie(n),i)||n.endAt&&!function(s,r,o){const a=Xo(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,ie(n),i))}(e,t)}function Zh(e){return(t,n)=>{let i=!1;for(const s of ie(e)){const r=td(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function td(e,t,n){const i=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ee(a,c):S()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function da(e){return{integerValue:""+e}}function ed(e,t){return Oh(t)?da(t):ha(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this._=void 0}}function nd(e,t,n){return e instanceof Wn?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,t):e instanceof Be?pa(e,t):e instanceof Ue?ga(e,t):function(i,s){const r=fa(i,s),o=ma(r)+ma(i.gt);return ds(r)&&ds(i.gt)?da(o):ha(i.yt,o)}(e,t)}function id(e,t,n){return e instanceof Be?pa(e,t):e instanceof Ue?ga(e,t):n}function fa(e,t){return e instanceof Xn?ds(n=t)||function(i){return!!i&&"doubleValue"in i}(n)?t:{integerValue:0}:null;var n}class Wn extends Qn{}class Be extends Qn{constructor(t){super(),this.elements=t}}function pa(e,t){const n=ya(t);for(const i of e.elements)n.some(s=>gt(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ue extends Qn{constructor(t){super(),this.elements=t}}function ga(e,t){let n=ya(t);for(const i of e.elements)n=n.filter(s=>!gt(s,i));return{arrayValue:{values:n}}}class Xn extends Qn{constructor(t,n){super(),this.yt=t,this.gt=n}}function ma(e){return W(e.integerValue||e.doubleValue)}function ya(e){return fs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function sd(e,t){return e.field.isEqual(t.field)&&function(n,i){return n instanceof Be&&i instanceof Be||n instanceof Ue&&i instanceof Ue?Zt(n.elements,i.elements,gt):n instanceof Xn&&i instanceof Xn?gt(n.gt,i.gt):n instanceof Wn&&i instanceof Wn}(e.transform,t.transform)}class rd{constructor(t,n){this.version=t,this.transformResults=n}}class _t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Jn{}function va(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ba(e.key,_t.none()):new He(e.key,e.data,_t.none());{const n=e.data,i=ht.empty();let s=new rt(tt.comparator);for(let r of t.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new jt(e.key,i,new ut(s.toArray()),_t.none())}}function od(e,t,n){e instanceof He?function(i,s,r){const o=i.value.clone(),a=Ea(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof jt?function(i,s,r){if(!Yn(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Ea(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(_a(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function $e(e,t,n,i){return e instanceof He?function(s,r,o,a){if(!Yn(s.precondition,r))return o;const c=s.value.clone(),u=Ca(s.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,i):e instanceof jt?function(s,r,o,a){if(!Yn(s.precondition,r))return o;const c=Ca(s.fieldTransforms,a,r),u=r.data;return u.setAll(_a(s)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,i):function(s,r,o){return Yn(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function ad(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=fa(i.transform,s||null);r!=null&&(n===null&&(n=ht.empty()),n.set(i.field,r))}return n||null}function wa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Zt(n,i,(s,r)=>sd(s,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class He extends Jn{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jt extends Jn{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function _a(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Ea(e,t,n){const i=new Map;H(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,id(o,a,n[s]))}return i}function Ca(e,t,n){const i=new Map;for(const s of e){const r=s.transform,o=n.data.field(s.field);i.set(s.field,nd(r,o,t))}return i}class ba extends Jn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ld extends Jn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,D;function cd(e){switch(e){default:return S();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function ud(e){if(e===void 0)return Ut("GRPC error has no .code"),m.UNKNOWN;switch(e){case $.OK:return m.OK;case $.CANCELLED:return m.CANCELLED;case $.UNKNOWN:return m.UNKNOWN;case $.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case $.INTERNAL:return m.INTERNAL;case $.UNAVAILABLE:return m.UNAVAILABLE;case $.UNAUTHENTICATED:return m.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case $.NOT_FOUND:return m.NOT_FOUND;case $.ALREADY_EXISTS:return m.ALREADY_EXISTS;case $.PERMISSION_DENIED:return m.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case $.ABORTED:return m.ABORTED;case $.OUT_OF_RANGE:return m.OUT_OF_RANGE;case $.UNIMPLEMENTED:return m.UNIMPLEMENTED;case $.DATA_LOSS:return m.DATA_LOSS;default:return S()}}(D=$||($={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Oe(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Qo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new ot(T.comparator);function Zn(){return hd}const Ta=new ot(T.comparator);function ti(...e){let t=Ta;for(const n of e)t=t.insert(n.key,n);return t}function Ia(e){let t=Ta;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function qt(){return je()}function Aa(){return je()}function je(){return new re(e=>e.toString(),(e,t)=>e.isEqual(t))}const dd=new ot(T.comparator),fd=new rt(T.comparator);function et(...e){let t=fd;for(const n of e)t=t.add(n);return t}const pd=new rt(L);function gd(){return pd}class md{constructor(t,n){this.databaseId=t,this.wt=n}}function ws(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yd(e,t){return e.wt?t.toBase64():t.toUint8Array()}function vd(e,t){return ws(e,t.toTimestamp())}function oe(e){return H(!!e),P.fromTimestamp(function(t){const n=Ht(t);return new j(n.seconds,n.nanos)}(e))}function Sa(e,t){return function(n){return new B(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function wd(e){const t=B.fromString(e);return H(Sd(t)),t}function _s(e,t){return Sa(e.databaseId,t.path)}function _d(e){const t=wd(e);return t.length===4?B.emptyPath():Cd(t)}function Ed(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Cd(e){return H(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Da(e,t,n){return{name:_s(e,t),fields:n.value.mapValue.fields}}function bd(e,t){let n;if(t instanceof He)n={update:Da(e,t.key,t.value)};else if(t instanceof ba)n={delete:_s(e,t.key)};else if(t instanceof jt)n={update:Da(e,t.key,t.data),updateMask:Ad(t.fieldMask)};else{if(!(t instanceof ld))return S();n={verify:_s(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Wn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Be)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ue)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw S()}(0,i))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vd(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:S()}(e,t.precondition)),n}function Td(e,t){return e&&e.length>0?(H(t!==void 0),e.map(n=>function(i,s){let r=i.updateTime?oe(i.updateTime):oe(s);return r.isEqual(P.min())&&(r=oe(s)),new rd(r,i.transformResults||[])}(n,t))):[]}function Id(e){let t=_d(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){H(i===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const d=ka(l);return d instanceof Dt&&ta(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new Ve(ae(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,us(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,p=l.values||[];return new Kn(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const d=!l.before,p=l.values||[];return new Kn(p,d)}(n.endAt)),Qh(t,s,o,r,a,"F",c,u)}function ka(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ae(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ae(t.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ae(t.unaryFilter.field);return K.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ae(t.unaryFilter.field);return K.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(t){return K.create(ae(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Dt.create(t.compositeFilter.filters.map(n=>ka(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op))}(e):S()}function ae(e){return tt.fromServerFormat(e.fieldPath)}function Ad(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Sd(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&od(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=$e(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=$e(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=Aa();return this.mutations.forEach(s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=va(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),et())}isEqual(t){return this.batchId===t.batchId&&Zt(this.mutations,t.mutations,(n,i)=>wa(n,i))&&Zt(this.baseMutations,t.baseMutations,(n,i)=>wa(n,i))}}class Es{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){H(t.mutations.length===i.length);let s=dd;const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Es(t,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.ie=t}}function Nd(e){const t=Id({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ys(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Je=new Rd}addToCollectionParentIndex(t,n){return this.Je.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(St.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(St.min())}updateCollectionGroup(t,n,i){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Rd{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new rt(B.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new rt(B.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new le(0)}static vn(){return new le(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.changes=new re(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?g.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&$e(i.mutation,s,ut.empty(),j.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,et()).next(()=>i))}getLocalViewOfDocuments(t,n,i=et()){const s=qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let o=ti();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=qt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,et()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,s){let r=Zn();const o=je(),a=je();return n.forEach((c,u)=>{const l=i.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof jt)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),$e(l.mutation,u,l.mutation.getFieldMask(),j.now())):o.set(u.key,ut.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var d;return a.set(u,new Md(l,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const i=je();let s=new ot((o,a)=>o-a),r=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=i.get(c)||ut.empty();l=a.applyToLocalView(u,l),i.set(c,l);const d=(s.get(a.batchId)||et()).add(c);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,d=Aa();l.forEach(p=>{if(!r.has(p)){const f=va(n.get(p),i.get(p));f!==null&&d.set(p,f),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return g.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Jh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i):this.getDocumentsMatchingCollectionQuery(t,n,i)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):g.resolve(qt());let a=-1,c=r;return o.next(u=>g.forEach(u,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(p=>{c=c.insert(l,p)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,et())).next(l=>({batchId:a,changes:Ia(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(i=>{let s=ti();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i){const s=n.collectionGroup;let r=ti();return this.indexManager.getCollectionParents(t,s).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Gn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,i).next(u=>{u.forEach((l,d)=>{r=r.insert(l,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s))).next(r=>{s.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,dt.newInvalidDocument(u)))});let o=ti();return r.forEach((a,c)=>{const u=s.get(a);u!==void 0&&$e(u.mutation,c,ut.empty(),j.now()),vs(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:oe(i.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(i){return{name:i.name,query:Nd(i.bundledQuery),readTime:oe(i.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.overlays=new ot(T.comparator),this.es=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const i=qt();return g.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.oe(t,n,r)}),g.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.es.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(i)),g.resolve()}getOverlaysForCollection(t,n,i){const s=qt(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return g.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new ot((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let l=r.get(u.largestBatchId);l===null&&(l=qt(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return g.resolve(a)}oe(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(i.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new kd(n,i));let r=this.es.get(n);r===void 0&&(r=et(),this.es.set(n,r)),this.es.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.ns=new rt(z.ss),this.rs=new rt(z.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const i=new z(t,n);this.ns=this.ns.add(i),this.rs=this.rs.add(i)}us(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.cs(new z(t,n))}hs(t,n){t.forEach(i=>this.removeReference(i,n))}ls(t){const n=new T(new B([])),i=new z(n,t),s=new z(n,t+1),r=[];return this.rs.forEachInRange([i,s],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new T(new B([])),i=new z(n,t),s=new z(n,t+1);let r=et();return this.rs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new z(t,0),i=this.ns.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class z{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return T.comparator(t.key,n.key)||L(t._s,n._s)}static os(t,n){return L(t._s,n._s)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new rt(z.ss)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dd(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new z(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.ps(i),r=s<0?0:s;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new z(n,0),s=new z(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([i,s],o=>{const a=this.ys(o._s);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new rt(L);return n.forEach(s=>{const r=new z(s,0),o=new z(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{i=i.add(a._s)})}),g.resolve(this.Is(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;T.isDocumentKey(r)||(r=r.child(""));const o=new z(new T(r),0);let a=new rt(L);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(i=>{const s=this.ys(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){H(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.gs;return g.forEach(n.mutations,s=>{const r=new z(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.gs=i})}An(t){}containsKey(t,n){const i=new z(n,0),s=this.gs.firstAfterOrEqual(i);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t){this.Es=t,this.docs=new ot(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return g.resolve(i?i.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(t,n){let i=Zn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():dt.newInvalidDocument(s))}),g.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=Zn();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xh(kh(l),i)<=0||(s.has(l.key)||vs(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,i,s){S()}As(t,n){return g.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new $d(this)}getSize(t){return g.resolve(this.size)}}class $d extends Od{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(i)}),g.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.persistence=t,this.Rs=new re(n=>gs(n),ms),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Cs,this.targetCount=0,this.vs=le.Pn()}forEachTarget(t,n){return this.Rs.forEach((i,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.bs&&(this.bs=n),g.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new le(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Dn(n),g.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),g.waitFor(r).next(()=>s)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const i=this.Rs.get(n)||null;return g.resolve(i)}addMatchingKeys(t,n,i){return this.Ps.us(n,i),g.resolve()}removeMatchingKeys(t,n,i){this.Ps.hs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Ps.ds(n);return g.resolve(i)}containsKey(t,n){return g.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new zo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Hd(this),this.indexManager=new Ld,this.remoteDocumentCache=function(i){return new Ud(i)}(i=>this.referenceDelegate.xs(i)),this.yt=new xd(n),this.Ns=new Fd(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Vd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Vs[t.toKey()];return i||(i=new Bd(n,this.referenceDelegate),this.Vs[t.toKey()]=i),i}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,i){_("MemoryPersistence","Starting transaction:",t);const s=new qd(this.Ss.next());return this.referenceDelegate.ks(),i(s).next(r=>this.referenceDelegate.Os(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ms(t,n){return g.or(Object.values(this.Vs).map(i=>()=>i.containsKey(t,n)))}}class qd extends Lh{constructor(t){super(),this.currentSequenceNumber=t}}class bs{constructor(t){this.persistence=t,this.Fs=new Cs,this.$s=null}static Bs(t){return new bs(t)}get Ls(){if(this.$s)return this.$s;throw S()}addReference(t,n,i){return this.Fs.addReference(i,n),this.Ls.delete(i.toString()),g.resolve()}removeReference(t,n,i){return this.Fs.removeReference(i,n),this.Ls.add(i.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.Ls.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,i=>{const s=T.fromPath(i);return this.qs(t,s).next(r=>{r||n.removeEntry(s,P.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(i=>{i?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Si=i,this.Di=s}static Ci(t,n){let i=et(),s=et();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ts(t,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,i,s){return this.ki(t,n).next(r=>r||this.Oi(t,n,s,i)).next(r=>r||this.Mi(t,n))}ki(t,n){if(aa(n))return g.resolve(null);let i=se(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ys(n,null,"F"),i=se(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const o=et(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,ys(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,i,s){return aa(n)||s.isEqual(P.min())?this.Mi(t,n):this.Ni.getDocuments(t,i).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,i,s)?this.Mi(t,n):(Ho()<=x.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ua(n)),this.Bi(t,o,n,Dh(s,-1)))})}Fi(t,n){let i=new rt(Zh(t));return n.forEach((s,r)=>{vs(t,r)&&(i=i.add(r))}),i}$i(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(t,n){return Ho()<=x.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ua(n)),this.Ni.getDocumentsMatchingQuery(t,n,St.min())}Bi(t,n,i,s){return this.Ni.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,n,i,s){this.persistence=t,this.Li=n,this.yt=s,this.qi=new ot(L),this.Ui=new re(r=>gs(r),ms),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(i)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pd(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function Gd(e,t,n,i){return new zd(e,t,n,i)}async function xa(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=et();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(i,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Qd(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,d=l.keys();let p=g.resolve();return d.forEach(f=>{p=p.next(()=>u.getEntry(a,f)).next(y=>{const A=c.docVersions.get(f);H(A!==null),y.version.compareTo(A)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=et();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function Wd(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Xd(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Na{constructor(){this.activeTargetIds=gd()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yd{constructor(){this.Lr=new Na,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,i){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Na,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,i,s,r){const o=this.ho(t,n);_("RestConnection","Sending: ",o,i);const a={};return this.lo(a,s,r),this.fo(t,o,a,i).then(c=>(_("RestConnection","Received: ",c),c),c=>{throw ls("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",i),c})}_o(t,n,i,s,r,o){return this.ao(t,n,i,s,r)}lo(t,n,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}ho(t,n){const i=Zd[t];return`${this.oo}/v1/${n}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,i,s){return new Promise((r,o)=>{const a=new vh;a.setWithCredentials(!0),a.listenOnce(gh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case as.NO_ERROR:const u=a.getResponseJson();_("Connection","XHR received:",JSON.stringify(u)),r(u);break;case as.TIMEOUT:_("Connection",'RPC "'+t+'" timed out'),o(new C(m.DEADLINE_EXCEEDED,"Request time out"));break;case as.HTTP_ERROR:const l=a.getStatus();if(_("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const f=function(y){const A=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(A)>=0?A:m.UNKNOWN}(p.status);o(new C(f,p.message))}else o(new C(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(m.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{_("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,i,15)})}wo(t,n,i){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=fh(),o=ph(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yh({})),this.lo(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const c=s.join("");_("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,d=!1;const p=new tf({Hr:y=>{d?_("Connection","Not sending because WebChannel is closed:",y):(l||(_("Connection","Opening WebChannel transport."),u.open(),l=!0),_("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),f=(y,A,w)=>{y.listen(A,I=>{try{w(I)}catch(N){setTimeout(()=>{throw N},0)}})};return f(u,Vn.EventType.OPEN,()=>{d||_("Connection","WebChannel transport opened.")}),f(u,Vn.EventType.CLOSE,()=>{d||(d=!0,_("Connection","WebChannel transport closed"),p.io())}),f(u,Vn.EventType.ERROR,y=>{d||(d=!0,ls("Connection","WebChannel transport errored:",y),p.io(new C(m.UNAVAILABLE,"The operation could not be completed")))}),f(u,Vn.EventType.MESSAGE,y=>{var A;if(!d){const w=y.data[0];H(!!w);const I=w,N=I.error||((A=I[0])===null||A===void 0?void 0:A.error);if(N){_("Connection","WebChannel received error:",N);const mt=N.status;let nt=function(xs){const ce=$[xs];if(ce!==void 0)return ud(ce)}(mt),Nt=N.message;nt===void 0&&(nt=m.INTERNAL,Nt="Unknown error status: "+mt+" with message "+N.message),d=!0,p.io(new C(nt,Nt)),u.close()}else _("Connection","WebChannel received:",w),p.ro(w)}}),f(o,mh.STAT_EVENT,y=>{y.stat===Uo.PROXY?_("Connection","Detected buffering proxy"):y.stat===Uo.NOPROXY&&_("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Is(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return new md(e,!0)}class Ra{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-i);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,n,i,s,r,o,a,c){this.Hs=t,this.vo=i,this.Vo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ra(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Ut(n.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.So===n&&this.Go(i,s)},i=>{t(()=>{const s=new C(m.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Qo(s)})})}Go(t,n){const i=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{i(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{i(()=>this.Qo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sf extends nf{constructor(t,n,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(H(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Td(t.writeResults,t.commitTime),i=oe(t.commitTime);return this.listener.Zo(i,n)}return H(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Ed(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>bd(this.yt,i))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends class{}{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.yt=s,this.nu=!1}su(){if(this.nu)throw new C(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.ao(t,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(m.UNKNOWN,s.toString())})}_o(t,n,i,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new C(m.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class of{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ut(n),this.ou=!1):_("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{i.enqueueAndForget(async()=>{Ke(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c._u.add(4),await qe(c),c.gu.set("Unknown"),c._u.delete(4),await ni(c)}(this))})}),this.gu=new of(i,s)}}async function ni(e){if(Ke(e))for(const t of e.wu)await t(!0)}async function qe(e){for(const t of e.wu)await t(!1)}function Ke(e){return R(e)._u.size===0}async function Oa(e,t,n){if(!Bn(t))throw t;e._u.add(1),await qe(e),e.gu.set("Offline"),n||(n=()=>Wd(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await ni(e)})}function Ma(e,t){return t().catch(n=>Oa(e,n,t))}async function ii(e){const t=R(e),n=kt(t);let i=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;lf(t);)try{const s=await Xd(t.localStore,i);if(s===null){t.fu.length===0&&n.Fo();break}i=s.batchId,cf(t,s)}catch(s){await Oa(t,s)}Pa(t)&&Fa(t)}function lf(e){return Ke(e)&&e.fu.length<10}function cf(e,t){e.fu.push(t);const n=kt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Pa(e){return Ke(e)&&!kt(e).No()&&e.fu.length>0}function Fa(e){kt(e).start()}async function uf(e){kt(e).eu()}async function hf(e){const t=kt(e);for(const n of e.fu)t.Xo(n.mutations)}async function df(e,t,n){const i=e.fu.shift(),s=Es.from(i,t,n);await Ma(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ii(e)}async function ff(e,t){t&&kt(e).Yo&&await async function(n,i){if(s=i.code,cd(s)&&s!==m.ABORTED){const r=n.fu.shift();kt(n).Mo(),await Ma(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ii(n)}var s}(e,t),Pa(e)&&Fa(e)}async function Va(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const i=Ke(n);n._u.add(3),await qe(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await ni(n)}async function pf(e,t){const n=R(e);t?(n._u.delete(2),await ni(n)):t||(n._u.add(2),await qe(n),n.gu.set("Unknown"))}function kt(e){return e.Iu||(e.Iu=function(t,n,i){const s=R(t);return s.su(),new sf(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,i)}(e.datastore,e.asyncQueue,{Yr:uf.bind(null,e),Zr:ff.bind(null,e),tu:hf.bind(null,e),Zo:df.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await ii(e)):(await e.Iu.stop(),e.fu.length>0&&(_("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new As(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ba(e,t){if(Ut("AsyncQueue",`${t}: ${e}`),Bn(e))return new C(m.UNAVAILABLE,`${t}: ${e}`);throw e}class gf{constructor(){this.queries=new re(t=>ca(t),la),this.onlineState="Unknown",this.Ru=new Set}}function mf(e){e.Ru.forEach(t=>{t.next()})}class yf{constructor(t,n,i,s,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new re(a=>ca(a),la),this.rc=new Map,this.oc=new Set,this.uc=new ot(T.comparator),this.cc=new Map,this.ac=new Cs,this.hc={},this.lc=new Map,this.fc=le.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function vf(e,t,n){const i=Cf(e);try{const s=await function(r,o){const a=R(r),c=j.now(),u=o.reduce((p,f)=>p.add(f.key),et());let l,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let f=Zn(),y=et();return a.Gi.getEntries(p,u).next(A=>{f=A,f.forEach((w,I)=>{I.isValidDocument()||(y=y.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,f)).next(A=>{l=A;const w=[];for(const I of o){const N=ad(I,l.get(I.key).overlayedDocument);N!=null&&w.push(new jt(I.key,N,ra(N.value.mapValue),_t.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,w,o)}).next(A=>{d=A;const w=A.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(p,A.batchId,w)})}).then(()=>({batchId:d.batchId,changes:Ia(l)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new ot(L)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(i,s.batchId,n),await si(i,s.changes),await ii(i.remoteStore)}catch(s){const r=Ba(s,"Failed to persist write");n.reject(r)}}function Ua(e,t,n){const i=R(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=R(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const d of l.listeners)d.bu(o)&&(c=!0)}),c&&mf(a)}(i.eventManager,t),s.length&&i.sc.Wo(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function wf(e,t){const n=R(e),i=t.batch.batchId;try{const s=await Qd(n.localStore,t);Ha(n,i,null),$a(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await si(n,s)}catch(s){await Ko(s)}}async function _f(e,t,n){const i=R(e);try{const s=await function(r,o){const a=R(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(H(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(i.localStore,t);Ha(i,t,n),$a(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await si(i,s)}catch(s){await Ko(s)}}function $a(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Ha(e,t,n){const i=R(e);let s=i.hc[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.hc[i.currentUser.toKey()]=s}}async function si(e,t,n){const i=R(e),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach((a,c)=>{o.push(i._c(c,t,n).then(u=>{if((u||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=Ts.Ci(c.targetId,u);r.push(l)}}))}),await Promise.all(o),i.sc.Wo(s),await async function(a,c){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,d=>g.forEach(d.Si,p=>u.persistence.referenceDelegate.addReference(l,d.targetId,p)).next(()=>g.forEach(d.Di,p=>u.persistence.referenceDelegate.removeReference(l,d.targetId,p)))))}catch(l){if(!Bn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const p=u.qi.get(d),f=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(d,y)}}}(i.localStore,r))}async function Ef(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const i=await xa(n.localStore,t);n.currentUser=t,function(s,r){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(m.CANCELLED,r))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await si(n,i.ji)}}function Cf(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_f.bind(null,t),t}class bf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=ei(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Gd(this.persistence,new Kd,t.initialUser,this.yt)}yc(t){return new jd(bs.Bs,this.yt)}gc(t){return new Yd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ua(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ef.bind(null,this.syncEngine),await pf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gf}createDatastore(t){const n=ei(t.databaseInfo.databaseId),i=(s=t.databaseInfo,new ef(s));var s;return function(r,o,a,c){return new rf(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,s=t.asyncQueue,r=a=>Ua(this.syncEngine,a,0),o=La.C()?new La:new Jd,new af(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(t,n){return function(i,s,r,o,a,c,u){const l=new yf(i,s,r,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=R(t);_("RemoteStore","RemoteStore shutting down."),n._u.add(5),await qe(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e,t,n){if(!n)throw new C(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function If(e,t,n,i){if(t===!0&&i===!0)throw new C(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function qa(e){if(!T.isDocumentKey(e))throw new C(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ka(e){if(T.isDocumentKey(e))throw new C(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ss(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function za(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ss(e);throw new C(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map;class Qa{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new C(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,If("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new C(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wh;switch(n.type){case"gapi":const i=n.client;return new bh(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ga.get(t);n&&(_("ComponentProvider","Removing Datastore"),Ga.delete(t),n.terminate())}(this),Promise.resolve()}}function Af(e,t,n,i={}){var s;const r=(e=za(e,ri))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&ls("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Z.MOCK_USER;else{o=ic(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new C(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Z(c)}e._authCredentials=new _h(new jo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Et(this.firestore,t,this._key)}}class Ds{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ds(this.firestore,t,this._query)}}class xt extends Ds{constructor(t,n,i){super(t,n,Wh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Et(this.firestore,null,new T(t))}withConverter(t){return new xt(this.firestore,t,this._path)}}function Wa(e,t,...n){if(e=de(e),ja("collection","path",t),e instanceof ri){const i=B.fromString(t,...n);return Ka(i),new xt(e,null,i)}{if(!(e instanceof Et||e instanceof xt))throw new C(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return Ka(i),new xt(e.firestore,null,i)}}function Xa(e,t,...n){if(e=de(e),arguments.length===1&&(t=qo.R()),ja("doc","path",t),e instanceof ri){const i=B.fromString(t,...n);return qa(i),new Et(e,null,new T(i))}{if(!(e instanceof Et||e instanceof xt))throw new C(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return qa(i),new Et(e.firestore,e instanceof xt?e.converter:null,new T(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Z.UNAUTHENTICATED,this.clientId=qo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{_("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(_("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Ba(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Df(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await xa(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function kf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await xf(e);_("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(s=>Va(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,r)=>Va(t.remoteStore,r)),e.onlineComponents=t}async function xf(e){return e.offlineComponents||(_("FirestoreClient","Using default OfflineComponentProvider"),await Df(e,new bf)),e.offlineComponents}async function Nf(e){return e.onlineComponents||(_("FirestoreClient","Using default OnlineComponentProvider"),await kf(e,new Tf)),e.onlineComponents}function Lf(e){return Nf(e).then(t=>t.syncEngine)}class Rf{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ra(this,"async_queue_retry"),this.Wc=()=>{const n=Is();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Is();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Is();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new $t;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Bn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ut("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(t,n,i){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const s=As.createAndSchedule(this,t,n,i,r=>this.Yc(r));return this.Uc.push(s),s}zc(){this.Kc&&S()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class Ya extends ri{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Rf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ja(this),this._firestoreClient.terminate()}}function Of(e,t){const n=typeof e=="object"?e:au(),i=typeof e=="string"?e:t||"(default)",s=iu(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=tc("firestore");r&&Af(s,...r)}return s}function Mf(e){return e._firestoreClient||Ja(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ja(e){var t;const n=e._freezeSettings(),i=function(s,r,o,a){return new Rh(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Sf(e._authCredentials,e._appCheckCredentials,e._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ze(wt.fromBase64String(t))}catch(n){throw new C(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ze(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new C(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new C(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new C(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=/^__.*__$/;class Ff{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new jt(t,this.data,this.fieldMask,n,this.fieldTransforms):new He(t,this.data,n,this.fieldTransforms)}}function nl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class ks{constructor(t,n,i,s,r,o){this.settings=t,this.databaseId=n,this.yt=i,this.ignoreUndefinedProperties=s,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ia({path:i,oa:!1});return s.ua(t),s}ca(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ia({path:i,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return oi(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(nl(this.sa)&&Pf.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Vf{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=i||ei(t)}da(t,n,i,s=!1){return new ks({sa:t,methodName:n,fa:i,path:tt.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Bf(e){const t=e._freezeSettings(),n=ei(e._databaseId);return new Vf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Uf(e,t,n,i,s,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,s);ol("Data must be an object, but it was:",o,i);const a=sl(i,o);let c,u;if(r.merge)c=new ut(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const d of r.mergeFields){const p=$f(t,d,n);if(!o.contains(p))throw new C(m.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qf(l,p)||l.push(p)}c=new ut(l),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new Ff(new ht(a),c,u)}function il(e,t){if(rl(e=de(e)))return ol("Unsupported field value:",t,e),sl(e,t);if(e instanceof tl)return function(n,i){if(!nl(i.sa))throw i.ha(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=il(o,i.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(e,t)}return function(n,i){if((n=de(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ed(i.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=j.fromDate(n);return{timestampValue:ws(i.yt,s)}}if(n instanceof j){const s=new j(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ws(i.yt,s)}}if(n instanceof el)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ze)return{bytesValue:yd(i.yt,n._byteString)};if(n instanceof Et){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sa(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ha(`Unsupported field value: ${Ss(n)}`)}(e,t)}function sl(e,t){const n={};return Qo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oe(e,(i,s)=>{const r=il(s,t.ra(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function rl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof j||e instanceof el||e instanceof ze||e instanceof Et||e instanceof tl)}function ol(e,t,n){if(!rl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Ss(n);throw i==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+i)}}function $f(e,t,n){if((t=de(t))instanceof Za)return t._internalPath;if(typeof t=="string")return jf(e,t);throw oi("Field path arguments must be of type string or ",e,!1,void 0,n)}const Hf=new RegExp("[~\\*/\\[\\]]");function jf(e,t,n){if(t.search(Hf)>=0)throw oi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Za(...t.split("."))._internalPath}catch{throw oi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function oi(e,t,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new C(m.INVALID_ARGUMENT,a+e+c)}function qf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}function zf(e,t){const n=za(e.firestore,Ya),i=Xa(e),s=Kf(e.converter,t);return Gf(n,[Uf(Bf(e.firestore),"addDoc",i._key,s,e.converter!==null,{}).toMutation(i._key,_t.exists(!1))]).then(()=>i)}function Gf(e,t){return function(n,i){const s=new $t;return n.asyncQueue.enqueueAndForget(async()=>vf(await Lf(n),i,s)),s.promise}(Mf(e),t)}(function(e,t=!0){(function(n){Jt=n})(ou),hn(new fe("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Ya(new Eh(n.getProvider("auth-internal")),new Ih(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Gt($o,"3.8.3",e),Gt($o,"3.8.3","esm2017")})();var Qf="firebase",Wf="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(Qf,Wf,"app");const Xf=wr({apiKey:"AIzaSyAWtYEgjMfNh-b1z0khTC1sfbl8DC6opwA",authDomain:"dummycollectiongame.firebaseapp.com",projectId:"dummycollectiongame",storageBucket:"dummycollectiongame.appspot.com",messagingSenderId:"911501171528",appId:"1:911501171528:web:a8e73335d7ef7f3bce317d"}),al=Of(Xf);function Yf({cmpclose:e,video:t,setinitialsize:n,data:i,base:s,round:r=!1,onlocalchange:o,initalanimation:a,handleoverlay:c}){let u=Xa(al,"f22plugin","paperlondon.com");async function l(){const w=Wa(u,"f22plugin");await zf(w,{visited:1,timestamp:j.now()})}O(0);const d=an(null);Lt(()=>{var w;(w=d.current)==null||w.removeAttribute("controls")},[]),Wa(al,"Naturally yours");let p="smvideo-container";function f(){r&&(p="smvideo-container-round")}f();async function y(){console.log("chal"),n(!0),l(),o(),c()}return h(it,{children:h(it,{children:h("div",{className:`small-video-container-box ${a?"pageloadanimation":""} `,children:[h("div",{className:"close-button cls-sm",children:h("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:e,children:[h("g",{"clip-path":"url(#clip0_126_12)",children:h("path",{d:"M8.28259 7.01145L13.734 1.55995C14.0887 1.20535 14.0887 0.631989 13.734 0.277427C13.3794 -0.0771763 12.806 -0.0771763 12.4515 0.277427L6.99994 5.72888L1.54861 0.277427C1.19383 -0.0771763 0.620684 -0.0771763 0.26608 0.277427C-0.0886934 0.632031 -0.0886934 1.20535 0.26608 1.55995L5.71737 7.01145L0.266123 12.4629C-0.0886509 12.8175 -0.0886509 13.3909 0.266123 13.7454C0.350236 13.8298 0.450189 13.8967 0.560238 13.9423C0.670287 13.9879 0.788262 14.0113 0.907386 14.0112C1.13954 14.0112 1.37177 13.9223 1.54865 13.7454L6.99994 8.29398L12.4515 13.7454C12.5356 13.8298 12.6356 13.8967 12.7456 13.9423C12.8556 13.9879 12.9736 14.0113 13.0927 14.0112C13.3249 14.0112 13.5571 13.9223 13.734 13.7454C14.0887 13.3908 14.0887 12.8175 13.734 12.4629L8.28259 7.01145Z",fill:"white"})}),h("defs",{children:h("clipPath",{id:"clip0_126_12",children:h("rect",{width:"14",height:"14",fill:"white"})})})]})}),h("div",{className:p,"data-customattribute":"red",children:h("video",{src:t,autoPlay:!0,id:"videos",className:r?"sm-video circle ":"sm-video",muted:!0,loop:!0,playsInline:!0,ref:d})}),h("h1",{className:"widgetheader",onClick:()=>y(),children:i.widgetHeader})]})})})}function Jf(e,t){const[n,i]=O(()=>JSON.parse(window.localStorage.getItem(e))||t);return Lt(()=>{window.localStorage.setItem(e,JSON.stringify(n))},[n,i]),[n,i]}function ll(){const{documentElement:{clientHeight:e,clientWidth:t}}=document;return{width:t,height:e}}function Zf(){const[e,t]=O(ll());return Lt(()=>{function n(){t(ll())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const tp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAABXCAYAAAB2psU8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVeSURBVHgB7Z2BceI6FEVvMr+A/AqiDpIOcAf5HZAOtgTmV0AJ2Q52OyBbAdkK8Faw6SDLXVuDEBI4sWOe8D0zGhMIBuzrq/eeZRkYh9m2PW3bettuIYRhHrZttW1v27bcthsIYRQ6qxcr3bWCEEahk9JR37BzVyHMQnfdoBHrbzShgRBmWWDnrhSuki1hFoYD37AT7BpKtoRhHHbhABtLWhKsMIvDoWCFMIuDBCsKgt1/KNgVhDBOmHRRvIphhWlU1hJFwRMFb0G7gxCGcdiPYxcQwjisDijxEsUwx06wHE+gOFaYxmE/LPgCIYwTDjHcQAjjOOxXC+4hhHGUfImicNh32QpCGCd0WcWywjwO+y47hxDGYVkrrMtqQIwwj8bJiqKYQQmYKAwlYKIIroPHVfD4O4QwDs94KTQQRRFXDYQwiw8PquC5ZwhhGIlWFAdF67B/EuEnhDAMRRtfpPgCIQxD0YZjZSnYVwhhmFi0EqwwD0UbxrM1hDCOT8Q8NYQwTuy0QpgnFq1iWmGe6+hviVaY5xpCFEYsWgchjEPR1hCiIOS0ojgo2nCsgcpfwjwUbVgx0Jxdwjyx0zoIYZxUIia3FaahaONB3zMIYRjvtHXwnJxWmOaqXXKijsf2MROzfyFK5xaNAbmohRUi/l23j1+DVrfNXxRg6hKsf9plXPZiiPADohS4z3jZ1H9ohHqP7uVL1+F/KNyXtj23y184M/yB4WQdCwjr0Ek5XwVnan87Q1ujuS/H6DnQVfCYP75qHytEsAnNhUKt0H0WoBq7Lv81eC7GBZ/hcBhKnPqM5237ipF7aLpreCSpimAH7osujrpBk594Yfc9w3nfrofa4M28f3f8DnOMdM+5OERYQZwb7vxjYqWIKNJHjHdiiELuGpbwu326eOMvohs3jw/Ng86WczU+z1iywvnhd+WBRRc+m3hniQ8T40EHy4l11b5udVCTQyPgDc4gXrnt+Dwgv7PDBLkUKuTdl7+zzy1rkwdt7LaKbT+PYwlWiWKNcdifYT4W73tdl/H0IvdivCFnEENCt8jtzEsQa0yFfE+yeMd6qMN17kWHw6NCA8SHIRe3XqJYY+ZIi7er6z7ixKTfi2jFS4g+eJdIVQP6xHil4bB/h/tQuA8n3ktNro/9ww0Oj4opbdyh4HZM7STfNU61B+NBnHLdY+HCEh3uvHSHQ1dQNaE7uR2zwkhnjIyTi+1zwmVF4qRoyRf0z/qmBndGquTTpQucIrHGcsL14VUn4qOBb1ZiliaXaLFr0zbLwx487pVi4frt2olUfCvh7uOQrrlOoSowFA6HOlsGr/nneq1Qwm1IuevUqgJD4ZB23Bk+INrcCincW0wTdmk5d53qNhkCh0Od+e3cKRGLScUeU0vO/EisWKx0VyVaw0Cd5U7CfAiHtHCnUA5jNxX/diVa/aHpzdFsxyc0PXhKtN/QA4f3F4dLJhcKcBtUEB+BBkCRdrkiwrfeeYJD+tTkJcV0uTNa3NALyF0/Ck2AjroKGg3glIArDETuXPIc5XLsCoJLOiit47C7Vo2XyA9qEhRoageXlqQdE6tCgQvEIT+o+Qm2xXtMrAoFJgBdl65UgnhPXUgosU4Ih/zofB8Xnivm9VM/5XqFEnoG8Yk4HBevv3afRfnPdLSb9jOecPrybIlV/MXhuHhDB16gccI+IvYiXeL0xBKKWQviCuPj0Aikwvtm7Kuxm4/qNbFOv/TTW3YR4PO2/d8uhehEhcZ9N+h+RqRvo+tanvRCnOAcTpujQhMSVBi2FlqjcVLO5vcduv9v8VgSbYzv5u+wmyTYtcvYJetgyeYn/X2B7kh5cfwBIgXXrpY36fcAAAAASUVORK5CYII=";function ep({dataURL:e}){var El;let t=window.location.pathname,n;const[i,s]=O({}),[r,o]=O({}),[a,c]=Jf("initialvideo",[]),[u,l]=O(!0),[d,p]=O(!0),[f,y]=O(r.overlay);function A(){let k=JSON.parse(localStorage.getItem("initialvideo"));if(k!=null&&k.length)k.filter(F=>F.base===t?F==null?void 0:F.count:0);else return 0}function w(k){let F=Object.keys(k),U=F.filter(ct=>{if(ct===t)return ct}),ft;return U.length||(ft=F.filter(ct=>{if(t.match(ct))return ct})),U.length?U[0]:ft==null?void 0:ft[1]}if(Lt(()=>{async function k(){var Ge,Qe;let U=await(await fetch(e)).json(),ft=(Ge=JSON.parse(localStorage.getItem("initialvideo")))==null?void 0:Ge.filter(We=>We.base===t?We:0),ct=w(U.record);vl(U.record),s(U.record),console.log(U,U.record[ct],ct,ft),o(U.record[ct][((Qe=ft[0])==null?void 0:Qe.count)||0])}k()},[]),document.documentElement.style.setProperty("--largecontainer-width",`${r.largecontainerwidth}px`),document.documentElement.style.setProperty("--largecontainer-height",`${r.largecontainerheight}px`),document.documentElement.style.setProperty("--bottom-css",`${r.bottomcss}px`),document.documentElement.style.setProperty("--width-smallbox",`${r.widthsmallbox}px`),document.documentElement.style.setProperty("--height-smallbox",`${r.heightsmallbox}px`),document.documentElement.style.setProperty("--text-color",`${r.textcolor}`),document.documentElement.style.setProperty(" --row-position",`${r.rowposition}`),document.documentElement.style.setProperty("--padding-x",`${r.paddingx}px`),document.documentElement.style.setProperty("--padding-y",`${r.paddingy}px`),document.documentElement.style.setProperty("--row-position",`${r.rowposition}`),document.documentElement.style.setProperty("--grid-gap",`${r.gridgap}px`),document.documentElement.style.setProperty("--small-closebuttonheight",`${r.closebuttonheight}px`),document.documentElement.style.setProperty("--small-closebuttonwidth",`${r.closebuttonwidth}px`),document.documentElement.style.setProperty("--buttonloadanimation",`${r.buttonloadanimation}`),document.documentElement.style.setProperty("--opacityforoverlay",`${r.opacityforoverlay}px`),setTimeout(()=>{document.documentElement.style.setProperty("--color-border",r.widthcolor),document.documentElement.style.setProperty("--color-width",`${r.widthsize}px`)},r.firestylechanges*1e3),Object.entries(i).length===0)return h("div",{});const[I,N]=O(!1),[mt,nt]=O(""),[Nt,xs]=O(""),[ce,hl]=O(!1),[dl,fl]=O(r==null?void 0:r.startStep),[np,ip]=O({}),[sp,rp]=O(!1),[pl,gl]=O(!0),[ml,op]=O(0),Ns=an(null),{height:Cp,width:ap}=Zf(),[lp,bp]=O(r==null?void 0:r.overalyimglarge),[yl]=O(r.hidden);function vl(k){let F=Object.keys(k).map(U=>({base:U,count:0}));JSON.parse(localStorage.getItem("initialvideo")).length||c(F)}function cp(k=r==null?void 0:r.startStep){r==null||r.steps.filter(F=>F).filter(F=>{F.key===k&&(op(F.answerTime),ip(F),nt(F.stockAsset.videoUrl),xs(F.stockAsset.gifUrl),document.documentElement.style.setProperty("--f22-display",`${F.display||"block"}`))})}Lt(()=>{const k=setTimeout(()=>{ce&&N(!0)},ml*1e3);return()=>clearInterval(k)},[dl,ce,ml]),cp(dl);function up(k){fl(k),N(!1)}function hp(){hl(!1),N(!1),fl(r==null?void 0:r.startStep),gl(!0),p(!1)}function dp(){rp(!0)}function fp(){Ns.current&&(gl(k=>!k),Ns.current.muted=pl)}function pp(){var F,U,ft,ct,Ge,Qe,We;let k={transform:`translate(${(F=r==null?void 0:r.custom)==null?void 0:F.x}px  , ${(U=r==null?void 0:r.custom)==null?void 0:U.y}px)`};switch(console.log(k,(r==null?void 0:r.widgetPosition)==="random"),typeof((ft=r==null?void 0:r.custom)==null?void 0:ft.x)=="string"&&(k={transform:`translate(${(ct=r==null?void 0:r.custom)==null?void 0:ct.x}  , ${(Ge=r==null?void 0:r.custom)==null?void 0:Ge.y})`}),r==null?void 0:r.widgetPosition){case"bottomRight":n={bottom:"10px",right:"10px",...k};break;case"bottomLeft":n={bottom:"10px",left:"10px",...k};break;case"topRight":n={top:"3px",right:"10px",...k};break;case"topLeft":n={top:"3px",left:"10px",...k};break;case"bottomcenter":n={bottom:"10px",left:"50%",...k};break;case"topcenter":n={top:"3px",left:"50%",...k};break;case"leftcenter":n={left:"10px",...k};break;case"rightcenter":n={top:"3px",left:"50%",...k};break;case"custom":n={top:`${(Qe=r==null?void 0:r.custom)==null?void 0:Qe.y}%`,left:`${(We=r==null?void 0:r.custom)==null?void 0:We.x}%`,transform:`translate(-${r.custom.x}%  , -${r.custom.y}%)`};break;default:return n}console.log(n)}if(pp(),r.toshowinmobile&&ap<=600)return h("div",{});if(sp)return h("div",{});function gp(){vl(i),c(k=>k.map((U,ft)=>U.base===t&&U.count<i[t].length-1?{...U,count:U.count+1}:U)),A()}setTimeout(()=>{l(!1)},1e3);const[wl,_l]=O(!!r.ismodal),[mp,yp]=O({});Lt(()=>{setTimeout(()=>{_l(r.ismodal)},1e3)},[]);function Ls(){y(!1)}return console.log(yl),yl?h("div",{}):wl?h(it,{children:[" ",wl?h(Kl,{setmodal:_l,values:mp,setvalues:yp,modalformformat:(El=r==null?void 0:r.modal)==null?void 0:El.dummy}):h("div",{})," "]}):(console.log(f),h("div",{className:f?"f22box-container":"smsmsmhidden",onClick:Ls,children:[f?h("div",{id:"f22background"}):"",h("div",{className:r.overlay&&f?"f22box-container":"smsmsmhidden",onClick:Ls,children:[u?h("div",{}):h(it,{children:h("div",{className:"f22arrow-container",children:h("img",{src:lp||tp})})}),h("div",{className:u?"small-video-container-box-parent smsmsmhidden  ":"small-video-container-box-parent ",style:n,children:[h("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');"}),ce?h(ql,{cssval:n,handleCloseforlargesize:hp,video:mt,videoEl:Ns,handlemuted:fp,muted:pl,handleChange:up,show:I,buttons:np}):h(Yf,{base:t,cmpclose:dp,data:r,setinitialsize:hl,video:mt,round:r==null?void 0:r.rounded,onlocalchange:gp,initalanimation:d,handleoverlay:Ls})]})]})]}))}const Ep="";Ll("f22-plugin",e=>h(ep,{dataURL:e.getAttribute("dataURL")||""}),["dataURL"],()=>console.log("F22 Plugin cleanup"));let cl=document.createElement("f22-plugin");cl.setAttribute("dataUrl","https://api.jsonbin.io/v3/b/63eba33cc0e7653a05776546");let ul=document.createElement("f22-plugin");ul.setAttribute("dataUrl","https://api.jsonbin.io/v3/b/63f46ecaace6f33a22e27e65"),document.body.append(ul),document.body.append(cl)})();
