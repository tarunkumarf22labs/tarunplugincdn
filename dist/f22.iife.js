(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode('.modal{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:#0000001a}.modal-container{background-color:#fff;position:fixed;top:10px;left:25%;right:25%;z-index:100;position:absolute;width:720px;height:400px;box-shadow:0 2px 8px #0009;top:50%;left:50%;-ms-transform:translateX(-50%) translateY(-50%);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}video{width:100%;height:100%;object-fit:cover}.forms{position:absolute;bottom:10px;width:100%;text-align:center;display:flex;justify-content:center;align-items:center}.modal-form{width:400px;height:48px;position:relative}.input-modal{width:100%;height:100%;border-radius:20px;background:rgba(0,0,0,.5);border:none;padding-left:10px;color:#fff;font-size:16px}.input-modal::placeholder{color:#fff}.submitbtnmodal{position:absolute;right:15px;top:10px;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50%}.cross-buttonmodal{position:absolute;width:30px;height:30px;top:10px;right:10px;display:flex;justify-content:center;align-items:center;border-radius:50%;background:rgba(0,0,0,.4);cursor:pointer}.modal-container{animation-name:m;animation-duration:.5s;animation:modalopen 1s cubic-bezier(.175,.885,.32,1.275)}@keyframes modalopen{0%{top:0px}10%{top:50px}20%{top:280px}}.thumbnail img{width:inherit;height:inherit;object-fit:fill;border-radius:2px}.thumbnailcontainer{display:flex;width:288px;height:76px;background-color:#fff;margin-top:8px;border-radius:5px;padding:4px}.thumbnail .img-container{width:88px}.thumbnail .img-container img{object-fit:cover;width:100%;height:100%}.text-container h1,h6{font-size:12px;line-height:16px;font-family:Nunito Sans,sans-serif;font-weight:100}.text-container h6{padding:10px 2px 2px;font-weight:bolder;height:14px;font-size:14px;line-height:16.41px}.text-container{padding:8px 8px 8px 6px}.thumbnail .text-container button{background-color:#3d4fe0;outline:none;border:none;padding:6px 12px;border-radius:2px;margin-top:10px}.thumbnail .text-container button a{font-size:10px;color:#fff}:root{--color-border: "";--color-width: "";--color-animation: "";--width-smallbox: "";--height-smallbox: "";--text-color: "";--bottom-css: "";--row-position: "";--padding-x: "";--padding-y: "";--grid-gap: "";--f22-display: "";--f22-bottom-color: "";--f22-bottom-background: "";--largecontainer-width: "";--largecontainer-height: "";--buttonloadanimation: "";--progressbarcolor: "";--progressbarheight: ""}*{margin:0;padding:0;box-sizing:border-box}.video-container{width:var(--largecontainer-width);height:var(--largecontainer-height);position:fixed;bottom:10px;border-radius:10px;z-index:10000;background-color:#000;isolation:isolate;z-index:100}.video-container-box{width:100%;height:100%;position:relative;border-radius:10px;isolation:isolate}.video-container video{width:100%;height:100%;object-fit:cover;border-radius:10px;box-shadow:-10px 4px 65px #0000001a;isolation:isolate}.full{width:100%}.overlay-thing{position:absolute;bottom:0;width:100%;padding:1rem;padding-bottom:0;margin-bottom:3.8rem;text-align:center;isolation:isolate}.flexiblebutton{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:100%;isolation:isolate}.overlay-thing-button{display:flex;align-items:center;padding:var(--padding-y) var(--padding-x);border-radius:20px;margin-bottom:8px;background-color:#0009;color:#fff;cursor:pointer;font-size:12px!important;width:100%;text-align:left;isolation:isolate;font-family:Nunito Sans,sans-serif;font-weight:700}.large-container-buttonparent{position:absolute;bottom:var(--bottom-css);width:100%;padding:20px!important;isolation:isolate;display:var(--f22-display);grid-template-columns:var(--row-position);grid-gap:var(--grid-gap)}a{color:inherit;text-decoration:none;font-size:inherit}.small-video-container-box-parent{width:168px;height:218px;position:fixed;z-index:100;isolation:isolate;visibility:visible;z-index:2147483647}.smsmsmhidden{visibility:hidden}.small-video-container-box{position:absolute;z-index:10;width:160px;height:160px;z-index:100;border-radius:50%;isolation:isolate}.pageloadanimation{animation:var(--buttonloadanimation) .9s ease-out;animation-iteration-count:2}video{height:100%;width:100%;object-fit:cover;isolation:isolate}.close-button{position:absolute;right:0;top:-10px;background-color:#000;height:30px;width:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:100;cursor:pointer;isolation:isolate}.cls-sm{height:20px;width:20px;top:-5px;padding:5px}.widgetheader{position:absolute;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;font-size:15px;color:var(--text-color);font-family:sans-serif;text-shadow:1px 1px #000;cursor:pointer}.sm-video{z-index:1}.lg-credit{color:#fff;position:absolute;bottom:0!important;width:100%!important;text-align:center;font-size:10px!important;font-family:sans-serif;margin:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.lg-credit a:hover{color:#fff}.video-size{min-height:100vh;width:100%;background-color:#000}.mutedbutton{position:absolute;bottom:28px;top:0;z-index:1;left:10px;width:fit-content;height:fit-content;opacity:1;background:transparent;border:none;pointer-events:none}.mutedbutton svg{padding-top:10px;padding-left:5px;width:fit-content;width:4rem;height:2.9rem;fill:#fff;pointer-events:fill}.replay{left:80px}.replay svg{width:3rem}.blink{animation:blink-animation 1s steps(5,start) infinite;-webkit-animation:blink-animation 1s steps(5,start) infinite}@keyframes blink-animation{to{visibility:hidden}}@-webkit-keyframes blink-animation{to{visibility:hidden}}.pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}.brick{position:absolute;bottom:10px;z-index:1;right:10px;width:3rem;height:3rem;border-radius:50%;opacity:1;border:none}.brick h1{font-size:1.2rem}.circle{border-radius:50%}.smvideo-container{width:fit-content;width:var(--width-smallbox);height:var(--height-smallbox);border:var(--color-width) solid var(--color-border)!important}.smvideo-container-round{width:fit-content;border-radius:50%;width:160px;height:160px}.smvideo-container-round:before{width:100%;height:100%;content:"";top:0;bottom:0;left:0;position:absolute;top:-8.2px;bottom:10px;left:-8.2px;right:0;border:var(--color-width) solid var(--color-border)!important;border-radius:50%;animation:pulse 1s infinite;box-sizing:content-box}.loader-container svg{padding-top:80px;position:absolute;z-index:-10}.overlay-thing-button:hover{box-shadow:0 .5em .5em -.4em var(--hover);transform:translateY(-.25em);transition:.5s ease-in-out}.icon-container{padding-right:1rem}.share{padding:3.5px;padding-right:1rem}@keyframes popofbuttton{0%{transform:translateY(100%)}70%{transform:translateY(-50%)}to{transform:translateY(0)}}@keyframes poprightfbuttton{0%{transform:translate(100%)}70%{transform:translate(-50%)}to{transform:translate(0)}}@keyframes popleftfbuttton{0%{transform:translate(-100%)}70%{transform:translate(50%)}to{transform:translate(0)}}@keyframes poptopbutton{0%{transform:translatey(-100%)}70%{transform:translatey(50%)}to{transform:translate(0)}}.form-step{width:100%}.form-step input{width:100%;padding:16px;border-radius:24px;background-color:#0009;color:#fff;outline:none;border:none}.form-step{position:relative}.form-step input::placeholder{color:#fff}.form-step button{position:absolute;top:14px;right:10px;padding:5px;border-radius:50%;width:25px;height:25px;display:flex;justify-content:center;align-items:center;cursor:pointer}.submitbuttonforform{background:#3d4fe0}.hidden{display:none}.toast{position:absolute;top:10px;width:100%;text-align:center}.toast-text{margin:2rem;border-radius:20px;background-color:#fff;padding:15px}.pausestyles{position:absolute;top:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.f22pluginpausevideos{background:linear-gradient(transparent,rgba(0,0,0,.6));transition:all .25s ease 0s;background-color:transparent;border:none;cursor:pointer}.playbar{z-index:99;position:absolute;top:1px;width:100%;overflow:hidden}.playbarinline{background-color:var(--progressbarcolor);height:var(--progressbarheight);width:100%;border-radius:20px;margin:0 auto 0 5px}')),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(){"use strict";const Xe=new Set,ue=new Map;new window.MutationObserver(e=>{for(const t of e)if(t.type==="attributes"){const{target:n,attributeName:i,oldValue:s}=t;if(ue.has(n)){let[r,o]=ue.get(n);if(o.includes(i)||o.length==0){const a=n.getAttribute(i);r(i,s,a,n)}}}Xe.forEach(t=>t())}).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0});function wl(e,t){setTimeout(n),Xe.add(n);function n(){document.querySelectorAll(e).forEach(i=>{if(!ue.has(i)){const{connected:s=()=>{},disconnected:r=()=>{},attributeChanged:o=()=>{},observedAttributes:a=[]}=t(i);ue.set(i,[o,a]),s(),_l(e,i,()=>r())}})}}function _l(e,t,n){setTimeout(i),Xe.add(i);function i(){t&&document.contains(t)&&t.matches(e)||(ue.delete(t),Xe.delete(i),n())}}var Ye,b,Ns,he,Ls,Os,Je={},Rs=[],El=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function bt(e,t){for(var n in t)e[n]=t[n];return e}function Ms(e){var t=e.parentNode;t&&t.removeChild(e)}function Ps(e,t,n){var i,s,r,o={};for(r in t)r=="key"?i=t[r]:r=="ref"?s=t[r]:o[r]=t[r];if(arguments.length>2&&(o.children=arguments.length>3?Ye.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)o[r]===void 0&&(o[r]=e.defaultProps[r]);return Ze(e,o,i,s,null)}function Ze(e,t,n,i,s){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Ns};return s==null&&b.vnode!=null&&b.vnode(r),r}function tn(e){return e.children}function en(e,t){this.props=e,this.context=t}function Gt(e,t){if(t==null)return e.__?Gt(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Gt(e):null}function Fs(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Fs(e)}}function Vs(e){(!e.__d&&(e.__d=!0)&&he.push(e)&&!nn.__r++||Os!==b.debounceRendering)&&((Os=b.debounceRendering)||Ls)(nn)}function nn(){for(var e;nn.__r=he.length;)e=he.sort(function(t,n){return t.__v.__b-n.__v.__b}),he=[],e.some(function(t){var n,i,s,r,o,a;t.__d&&(o=(r=(n=t).__v).__e,(a=n.__P)&&(i=[],(s=bt({},r)).__v=r.__v+1,li(a,r,s,n.__n,a.ownerSVGElement!==void 0,r.__h!=null?[o]:null,i,o??Gt(r),r.__h),Gs(i,r),r.__e!=o&&Fs(r)))})}function Us(e,t,n,i,s,r,o,a,c,u){var l,d,f,p,y,I,E,S=i&&i.__k||Rs,k=S.length;for(n.__k=[],l=0;l<t.length;l++)if((p=n.__k[l]=(p=t[l])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Ze(null,p,null,null,p):Array.isArray(p)?Ze(tn,{children:p},null,null,null):p.__b>0?Ze(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(f=S[l])===null||f&&p.key==f.key&&p.type===f.type)S[l]=void 0;else for(d=0;d<k;d++){if((f=S[d])&&p.key==f.key&&p.type===f.type){S[d]=void 0;break}f=null}li(e,p,f=f||Je,s,r,o,a,c,u),y=p.__e,(d=p.ref)&&f.ref!=d&&(E||(E=[]),f.ref&&E.push(f.ref,null,p),E.push(d,p.__c||y,p)),y!=null?(I==null&&(I=y),typeof p.type=="function"&&p.__k===f.__k?p.__d=c=$s(p,c,e):c=Bs(e,p,f,S,y,c),typeof n.type=="function"&&(n.__d=c)):c&&f.__e==c&&c.parentNode!=e&&(c=Gt(f))}for(n.__e=I,l=k;l--;)S[l]!=null&&(typeof n.type=="function"&&S[l].__e!=null&&S[l].__e==n.__d&&(n.__d=Gt(i,l+1)),zs(S[l],S[l]));if(E)for(l=0;l<E.length;l++)Ks(E[l],E[++l],E[++l])}function $s(e,t,n){for(var i,s=e.__k,r=0;s&&r<s.length;r++)(i=s[r])&&(i.__=e,t=typeof i.type=="function"?$s(i,t,n):Bs(n,i,i,s,i.__e,t));return t}function Bs(e,t,n,i,s,r){var o,a,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||s!=r||s.parentNode==null)t:if(r==null||r.parentNode!==e)e.appendChild(s),o=null;else{for(a=r,c=0;(a=a.nextSibling)&&c<i.length;c+=2)if(a==s)break t;e.insertBefore(s,r),o=r}return o!==void 0?o:s.nextSibling}function Cl(e,t,n,i,s){var r;for(r in n)r==="children"||r==="key"||r in t||sn(e,r,null,n[r],i);for(r in t)s&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||sn(e,r,t[r],n[r],i)}function Hs(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||El.test(t)?n:n+"px"}function sn(e,t,n,i,s){var r;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Hs(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Hs(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i||e.addEventListener(t,r?qs:js,r):e.removeEventListener(t,r?qs:js,r);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function js(e){this.l[e.type+!1](b.event?b.event(e):e)}function qs(e){this.l[e.type+!0](b.event?b.event(e):e)}function li(e,t,n,i,s,r,o,a,c){var u,l,d,f,p,y,I,E,S,k,R,L=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,a=t.__e=n.__e,t.__h=null,r=[a]),(u=b.__b)&&u(t);try{t:if(typeof L=="function"){if(E=t.props,S=(u=L.contextType)&&i[u.__c],k=u?S?S.props.value:u.__:i,n.__c?I=(l=t.__c=n.__c).__=l.__E:("prototype"in L&&L.prototype.render?t.__c=l=new L(E,k):(t.__c=l=new en(E,k),l.constructor=L,l.render=Tl),S&&S.sub(l),l.props=E,l.state||(l.state={}),l.context=k,l.__n=i,d=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),L.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=bt({},l.__s)),bt(l.__s,L.getDerivedStateFromProps(E,l.__s))),f=l.props,p=l.state,d)L.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(L.getDerivedStateFromProps==null&&E!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(E,k),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(E,l.__s,k)===!1||t.__v===n.__v){l.props=E,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(ct){ct&&(ct.__=t)}),l.__h.length&&o.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(E,l.__s,k),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,p,y)})}l.context=k,l.props=E,l.state=l.__s,(u=b.__r)&&u(t),l.__d=!1,l.__v=t,l.__P=e,u=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(i=bt(bt({},i),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(y=l.getSnapshotBeforeUpdate(f,p)),R=u!=null&&u.type===tn&&u.key==null?u.props.children:u,Us(e,Array.isArray(R)?R:[R],t,n,i,s,r,o,a,c),l.base=t.__e,t.__h=null,l.__h.length&&o.push(l),I&&(l.__E=l.__=null),l.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=bl(n.__e,t,n,i,s,r,o,c);(u=b.diffed)&&u(t)}catch(ct){t.__v=null,(c||r!=null)&&(t.__e=a,t.__h=!!c,r[r.indexOf(a)]=null),b.__e(ct,t,n)}}function Gs(e,t){b.__c&&b.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){b.__e(i,n.__v)}})}function bl(e,t,n,i,s,r,o,a){var c,u,l,d=n.props,f=t.props,p=t.type,y=0;if(p==="svg"&&(s=!0),r!=null){for(;y<r.length;y++)if((c=r[y])&&"setAttribute"in c==!!p&&(p?c.localName===p:c.nodeType===3)){e=c,r[y]=null;break}}if(e==null){if(p===null)return document.createTextNode(f);e=s?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,f.is&&f),r=null,a=!1}if(p===null)d===f||a&&e.data===f||(e.data=f);else{if(r=r&&Ye.call(e.childNodes),u=(d=n.props||Je).dangerouslySetInnerHTML,l=f.dangerouslySetInnerHTML,!a){if(r!=null)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Cl(e,f,d,s,a),l)t.__k=[];else if(y=t.props.children,Us(e,Array.isArray(y)?y:[y],t,n,i,s&&p!=="foreignObject",r,o,r?r[0]:n.__k&&Gt(n,0),a),r!=null)for(y=r.length;y--;)r[y]!=null&&Ms(r[y]);a||("value"in f&&(y=f.value)!==void 0&&(y!==e.value||p==="progress"&&!y||p==="option"&&y!==d.value)&&sn(e,"value",y,d.value,!1),"checked"in f&&(y=f.checked)!==void 0&&y!==e.checked&&sn(e,"checked",y,d.checked,!1))}return e}function Ks(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){b.__e(i,n)}}function zs(e,t,n){var i,s;if(b.unmount&&b.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Ks(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){b.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&zs(i[s],t,typeof e.type!="function");n||e.__e==null||Ms(e.__e),e.__e=e.__d=void 0}function Tl(e,t,n){return this.constructor(e,n)}function Il(e,t,n){var i,s,r;b.__&&b.__(e,t),s=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],li(t,e=(!i&&n||t).__k=Ps(tn,null,[e]),s||Je,Je,t.ownerSVGElement!==void 0,!i&&n?[n]:s?null:t.firstChild?Ye.call(t.childNodes):null,r,!i&&n?n:s?s.__e:t.firstChild,i),Gs(r,e)}Ye=Rs.slice,b={__e:function(e,t,n,i){for(var s,r,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),o=s.__d),o)return s.__E=s}catch(a){e=a}throw e}},Ns=0,en.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=bt({},this.state),typeof e=="function"&&(e=e(bt({},n),this.props)),e&&bt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Vs(this))},en.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Vs(this))},en.prototype.render=tn,he=[],Ls=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nn.__r=0;var rn,ut,Ws,on=0,Qs=[],Xs=b.__b,Ys=b.__r,Js=b.diffed,Zs=b.__c,tr=b.unmount;function ci(e,t){b.__h&&b.__h(ut,e,on||t),on=0;var n=ut.__H||(ut.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function P(e){return on=1,Sl(ir,e)}function Sl(e,t,n){var i=ci(rn++,2);return i.t=e,i.__c||(i.__=[n?n(t):ir(void 0,t),function(s){var r=i.t(i.__[0],s);i.__[0]!==r&&(i.__=[r,i.__[1]],i.__c.setState({}))}],i.__c=ut),i.__}function Tt(e,t){var n=ci(rn++,3);!b.__s&&nr(n.__H,t)&&(n.__=e,n.__H=t,ut.__H.__h.push(n))}function fe(e){return on=5,Al(function(){return{current:e}},[])}function Al(e,t){var n=ci(rn++,7);return nr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Dl(){for(var e;e=Qs.shift();)if(e.__P)try{e.__H.__h.forEach(an),e.__H.__h.forEach(ui),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){ut=null,Xs&&Xs(e)},b.__r=function(e){Ys&&Ys(e),rn=0;var t=(ut=e.__c).__H;t&&(t.__h.forEach(an),t.__h.forEach(ui),t.__h=[])},b.diffed=function(e){Js&&Js(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Qs.push(t)!==1&&Ws===b.requestAnimationFrame||((Ws=b.requestAnimationFrame)||function(n){var i,s=function(){clearTimeout(r),er&&cancelAnimationFrame(i),setTimeout(n)},r=setTimeout(s,100);er&&(i=requestAnimationFrame(s))})(Dl)),ut=null},b.__c=function(e,t){t.some(function(n){try{n.__h.forEach(an),n.__h=n.__h.filter(function(i){return!i.__||ui(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],b.__e(i,n.__v)}}),Zs&&Zs(e,t)},b.unmount=function(e){tr&&tr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{an(i)}catch(s){t=s}}),t&&b.__e(t,n.__v))};var er=typeof requestAnimationFrame=="function";function an(e){var t=ut,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ut=t}function ui(e){var t=ut;e.__c=e.__(),ut=t}function nr(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function ir(e,t){return typeof t=="function"?t(e):t}const kl=(e,t,n=[],i)=>{const s=r=>Il(Ps(()=>t(r)),r);wl(e,r=>({connected:()=>s(r),disconnected:()=>i&&i(),attributeChanged:()=>s(r),observedAttributes:n}))};var hi;function ot(e){return e.children}hi={__e:function(e,t,n,i){for(var s,r,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),o=s.__d),o)return s.__E=s}catch(a){e=a}throw e}};var xl=0;function h(e,t,n,i,s){var r,o,a={};for(o in t)o=="ref"?r=t[o]:a[o]=t[o];var c={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--xl,__source:s,__self:i};if(typeof e=="function"&&(r=e.defaultProps))for(o in r)a[o]===void 0&&(a[o]=r[o]);return hi.vnode&&hi.vnode(c),c}function Nl(){return h(ot,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M8.14542 14H6.49769L9.00835 6.72727H10.9899L13.497 14H11.8493L10.0275 8.3892H9.9707L8.14542 14ZM8.04244 11.1413H11.9345V12.3416H8.04244V11.1413Z",fill:"black"})]})})}function Ll(){return h(ot,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M7.82644 14V6.72727H10.7384C11.2734 6.72727 11.7197 6.80658 12.0771 6.9652C12.4346 7.12382 12.7033 7.34399 12.8833 7.62571C13.0632 7.90507 13.1531 8.22704 13.1531 8.59162C13.1531 8.87571 13.0963 9.12547 12.9827 9.34091C12.8691 9.55398 12.7128 9.72917 12.5139 9.86648C12.3174 10.0014 12.0925 10.0973 11.8392 10.1541V10.2251C12.1162 10.237 12.3754 10.3151 12.6169 10.4595C12.8608 10.6039 13.0584 10.8063 13.21 11.0668C13.3615 11.3248 13.4372 11.6326 13.4372 11.9901C13.4372 12.3759 13.3414 12.7204 13.1496 13.0234C12.9602 13.3241 12.6797 13.562 12.308 13.7372C11.9363 13.9124 11.4782 14 10.9337 14H7.82644ZM9.36408 12.7429H10.6176C11.0461 12.7429 11.3586 12.6612 11.5551 12.4979C11.7516 12.3321 11.8499 12.112 11.8499 11.8374C11.8499 11.6361 11.8013 11.4586 11.7043 11.3047C11.6072 11.1508 11.4687 11.0301 11.2888 10.9425C11.1112 10.8549 10.8994 10.8111 10.6531 10.8111H9.36408V12.7429ZM9.36408 9.7706H10.504C10.7147 9.7706 10.9017 9.7339 11.0651 9.66051C11.2308 9.58475 11.361 9.47822 11.4557 9.34091C11.5528 9.2036 11.6013 9.03906 11.6013 8.8473C11.6013 8.58452 11.5078 8.37263 11.3208 8.21165C11.1361 8.05066 10.8733 7.97017 10.5324 7.97017H9.36408V9.7706Z",fill:"black"})]})})}function Ol(){return h(ot,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M13.2892 9.27344H11.7338C11.7054 9.07221 11.6474 8.89347 11.5598 8.73722C11.4722 8.5786 11.3598 8.44366 11.2225 8.33239C11.0852 8.22112 10.9266 8.13589 10.7466 8.0767C10.5691 8.01752 10.3761 7.98793 10.1678 7.98793C9.79137 7.98793 9.46348 8.08144 9.18413 8.26847C8.90477 8.45312 8.68815 8.72301 8.53427 9.07812C8.38039 9.43087 8.30344 9.85937 8.30344 10.3636C8.30344 10.8821 8.38039 11.3177 8.53427 11.6705C8.69052 12.0232 8.90832 12.2895 9.18768 12.4695C9.46703 12.6494 9.79019 12.7393 10.1571 12.7393C10.3631 12.7393 10.5537 12.7121 10.7289 12.6577C10.9064 12.6032 11.0639 12.5239 11.2012 12.4197C11.3385 12.3132 11.4521 12.1842 11.5421 12.0327C11.6344 11.8812 11.6983 11.7083 11.7338 11.5142L13.2892 11.5213C13.249 11.8551 13.1484 12.1771 12.9874 12.4872C12.8288 12.795 12.6145 13.0708 12.3446 13.3146C12.0771 13.5561 11.7575 13.7479 11.3858 13.8899C11.0165 14.0296 10.5987 14.0994 10.1323 14.0994C9.48361 14.0994 8.90359 13.9527 8.39222 13.6591C7.88323 13.3655 7.48076 12.9406 7.18484 12.3842C6.89128 11.8279 6.7445 11.1544 6.7445 10.3636C6.7445 9.57055 6.89364 8.89583 7.19194 8.33949C7.49023 7.78314 7.89506 7.35937 8.40643 7.06818C8.91779 6.77462 9.49308 6.62784 10.1323 6.62784C10.5537 6.62784 10.9443 6.68703 11.3042 6.8054C11.6664 6.92377 11.9872 7.09659 12.2665 7.32386C12.5459 7.54877 12.7731 7.82457 12.9483 8.15128C13.1259 8.47798 13.2395 8.85204 13.2892 9.27344Z",fill:"black"})]})})}function Rl(){return h(ot,{children:[h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M9.57253 14H6.99441V6.72727H9.59384C10.3254 6.72727 10.9551 6.87287 11.483 7.16406C12.011 7.45289 12.417 7.86837 12.7011 8.41051C12.9875 8.95265 13.1308 9.60133 13.1308 10.3565C13.1308 11.1141 12.9875 11.7652 12.7011 12.3097C12.417 12.8542 12.0086 13.272 11.4759 13.5632C10.9456 13.8544 10.3112 14 9.57253 14ZM8.53205 12.6825H9.50861C9.96316 12.6825 10.3455 12.602 10.6556 12.4411C10.9681 12.2777 11.2025 12.0256 11.3588 11.6847C11.5174 11.3414 11.5967 10.8987 11.5967 10.3565C11.5967 9.81913 11.5174 9.37997 11.3588 9.03906C11.2025 8.69815 10.9693 8.44721 10.6592 8.28622C10.349 8.12524 9.96671 8.04474 9.51216 8.04474H8.53205V12.6825Z",fill:"black"})]})," "]})}function Ml(){return h(ot,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M8.07058 14V6.72727H12.9711V7.99503H9.60822V9.72798H12.719V10.9957H9.60822V12.7322H12.9854V14H8.07058Z",fill:"black"})]})})}function Pl(){return h(ot,{children:h("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),h("path",{d:"M7.7073 14V6.72727H12.5226V7.99503H9.24494V9.72798H12.203V10.9957H9.24494V14H7.7073Z",fill:"black"})]})})}function Fl(){return h(ot,{children:h("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("g",{"clip-path":"url(#clip0_114_34)",children:[h("path",{d:"M13.068 0.645614C13.0096 0.587281 12.893 0.587281 12.8346 0.587281L9.33464 0.587281C8.98464 0.587281 8.7513 0.820614 8.7513 1.17061C8.7513 1.52061 8.98464 1.75395 9.33464 1.75395L11.4346 1.75395L8.34297 4.84561C8.10963 5.07895 8.10963 5.42895 8.34297 5.66228C8.5763 5.89561 8.9263 5.89561 9.15964 5.66228L12.2513 2.57061V4.67061C12.2513 5.02061 12.4846 5.25395 12.8346 5.25395C13.1846 5.25395 13.418 5.02061 13.418 4.67061V1.17061C13.418 1.11228 13.418 0.995614 13.3596 0.937281C13.3013 0.820614 13.1846 0.703948 13.068 0.645614Z",fill:"white"}),h("path",{d:"M12.8335 6.41671C12.4835 6.41671 12.2502 6.65004 12.2502 7.00004V11.6667C12.2502 12.0167 12.0168 12.25 11.6668 12.25H2.3335C1.9835 12.25 1.75016 12.0167 1.75016 11.6667V2.33337C1.75016 1.98337 1.9835 1.75004 2.3335 1.75004H7.00016C7.35016 1.75004 7.5835 1.51671 7.5835 1.16671C7.5835 0.816707 7.35016 0.583374 7.00016 0.583374H2.3335C1.34183 0.583374 0.583496 1.34171 0.583496 2.33337V11.6667C0.583496 12.6584 1.34183 13.4167 2.3335 13.4167H11.6668C12.6585 13.4167 13.4168 12.6584 13.4168 11.6667V7.00004C13.4168 6.65004 13.1835 6.41671 12.8335 6.41671Z",fill:"white"})]}),h("defs",{children:h("clipPath",{id:"clip0_114_34",children:h("rect",{width:"14",height:"14",fill:"white"})})})]})})}function Vl(){return h(ot,{children:h("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"M7.42042 6.00003C7.42042 6.2151 7.3383 6.43013 7.17441 6.5941L2.01463 11.7538C1.6864 12.0821 1.15424 12.0821 0.826148 11.7538C0.498055 11.4257 0.498055 10.8937 0.826148 10.5654L5.39181 6.00003L0.826308 1.43461C0.498214 1.10639 0.498214 0.574383 0.826308 0.246316C1.1544 -0.0820694 1.68656 -0.0820694 2.01479 0.246316L7.17457 5.40596C7.33849 5.57001 7.42042 5.78505 7.42042 6.00003Z",fill:"#080807"})})})}function Ul(){return h(ot,{children:h("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"M7.42042 6.00003C7.42042 6.2151 7.3383 6.43013 7.17441 6.5941L2.01463 11.7538C1.6864 12.0821 1.15424 12.0821 0.826148 11.7538C0.498055 11.4257 0.498055 10.8937 0.826148 10.5654L5.39181 6.00003L0.826308 1.43461C0.498214 1.10639 0.498214 0.574383 0.826308 0.246316C1.1544 -0.0820694 1.68656 -0.0820694 2.01479 0.246316L7.17457 5.40596C7.33849 5.57001 7.42042 5.78505 7.42042 6.00003Z",fill:"white"})})})}function $l(){return h("svg",{width:"90",height:"90",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("path",{d:"M60 114.546c30.125 0 54.546-24.421 54.546-54.546S90.125 5.455 60 5.455 5.455 29.875 5.455 60 29.875 114.546 60 114.546Z",fill:"#090A0B99"}),h("path",{d:"M60 5.455a54.546 54.546 0 0 1 47.236 27.272",stroke:"url(#player-button-s)","stroke-width":"5.986"}),h("path",{d:"M107.236 32.727a54.54 54.54 0 0 1 0 54.546",stroke:"url(#player-button-b)","stroke-width":"5.986"}),h("path",{d:"M107.236 87.273A54.548 54.548 0 0 1 60 114.546",stroke:"url(#player-button-c)","stroke-width":"5.986"}),h("path",{d:"M60 114.546a54.55 54.55 0 0 1-47.236-27.273",stroke:"url(#player-button-d)","stroke-width":"5.986"}),h("path",{d:"M12.764 87.273a54.545 54.545 0 0 1 0-54.545",stroke:"url(#player-button-e)","stroke-width":"5.986"}),h("path",{d:"M12.764 32.727A54.546 54.546 0 0 1 60 5.455",stroke:"url(#player-button-f)","stroke-width":"5.986"}),h("path",{d:"M50.387 85.167c-3.142 0-5.387-2.47-5.387-5.387V40.275C45 37.469 47.245 35 50.387 35c.898 0 1.908.224 2.806.786l32.322 19.752c1.571.898 2.581 2.694 2.581 4.49 0 1.907-1.01 3.703-2.581 4.6L53.193 84.382a5.33 5.33 0 0 1-2.806.786Z",fill:"#fff"}),h("defs",{children:[h("linearGradient",{id:"player-button-s",x1:"60",y1:"5.455",x2:"83.619",y2:"46.363",gradientUnits:"userSpaceOnUse",children:[h("stop",{offset:"0","stop-color":"#198DEE"}),h("stop",{offset:"0.5","stop-color":"#2A3CEF"})]}),h("linearGradient",{id:"player-button-b",x1:"107.236",y1:"32.727",x2:"107.236",y2:"87.273",gradientUnits:"userSpaceOnUse",children:[h("stop",{offset:"0","stop-color":"#2A3CEF"}),h("stop",{offset:"0.7","stop-color":"#E124D9"})]}),h("linearGradient",{id:"player-button-c",x1:"107.236",y1:"87.273",x2:"83.617",y2:"128.181",gradientUnits:"userSpaceOnUse",children:[h("stop",{offset:"0","stop-color":"#E124D9"}),h("stop",{offset:"1","stop-color":"#E52E56"})]}),h("linearGradient",{id:"player-button-d",x1:"60",y1:"114.546",x2:"36.381",y2:"73.637",gradientUnits:"userSpaceOnUse",children:[h("stop",{offset:"0.2","stop-color":"#FFB400"}),h("stop",{offset:"1","stop-color":"#C4FF29"})]}),h("linearGradient",{id:"player-button-e",x1:"5.456",y1:"87.273",x2:"5.456",y2:"32.727",gradientUnits:"userSpaceOnUse",children:[h("stop",{offset:"0.1","stop-color":"#C4FF29"}),h("stop",{offset:"1","stop-color":"#198DEE"})]}),h("linearGradient",{id:"player-button-f",x1:"12.764",y1:"32.727",x2:"36.383",y2:"-8.181",gradientUnits:"userSpaceOnUse",children:[h("stop",{offset:"0","stop-color":"#198DEE"}),h("stop",{offset:"1","stop-color":"#198DEE"})]})]})]})}function Bl(){return h("svg",{width:"30",height:"30",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"10",cy:"10",r:"10",fill:"black"}),h("g",{"clip-path":"url(#clip0_628_36)",children:h("path",{d:"M13.5383 8.32041L9.56417 5.40625C9.25376 5.17895 8.88648 5.04204 8.50303 5.01071C8.11958 4.97937 7.73494 5.05483 7.39175 5.22871C7.04855 5.40259 6.76021 5.66811 6.55869 5.99583C6.35716 6.32356 6.25032 6.70069 6.25 7.08541V12.9167C6.2494 13.3018 6.35569 13.6795 6.55702 14.0078C6.75836 14.3361 7.04685 14.602 7.39037 14.7761C7.7339 14.9501 8.11899 15.0254 8.50278 14.9936C8.88657 14.9618 9.254 14.8241 9.56417 14.5958L13.5383 11.6817C13.802 11.4881 14.0165 11.2353 14.1643 10.9435C14.3121 10.6517 14.3891 10.3292 14.3891 10.0021C14.3891 9.67499 14.3121 9.3525 14.1643 9.0607C14.0165 8.76891 13.802 8.51602 13.5383 8.3225V8.32041Z",fill:"white"})}),h("defs",{children:h("clipPath",{id:"clip0_628_36",children:h("rect",{width:"10",height:"10",fill:"white",transform:"translate(5 5)"})})})]})}function sr(e){const[t,n]=P(0),i=e==null?void 0:e.length;function s(){n(a=>a>=(e==null?void 0:e.length)-1?a:a+1)}function r(){n(a=>a<=0?a:a-1)}function o(a){n(a)}return{currentStepindex:t,step:e==null?void 0:e[t],next:s,back:r,goTo:o,cmpComponentsLength:i}}function Hl({show:e,buttons:t,handleChange:n,handletoast:i,setPause:s,setCurrentTime:r,setShowPause:o}){let a=[h(Nl,{}),h(Ll,{}),h(Ol,{}),h(Rl,{}),h(Ml,{}),h(Pl,{})];const c=fe(null);function u(l){return a.filter((f,p)=>{if(p===l)return f})[0]}if((t==null?void 0:t.type)==="thumbnail")return e?h("div",{className:"large-container-buttonparent  thumbnail",children:t.answers.map(l=>h("a",{href:l.linkforshopping,style:{display:"block"},children:h("div",{className:"thumbnailcontainer",children:[h("div",{className:"img-container",children:h("img",{src:l.imgurl,className:"thumbnailimage"})}),h("div",{className:"text-container",children:[h("h1",{children:l.name}),h("h6",{children:[" Price: ",l.preice," "]})]})]})}))}):h("div",{});if((t==null?void 0:t.type)==="form"){let l=function(R){R.preventDefault(),c.current.value="",Boolean(y<=I+1)||f()},d=function(R){S(L=>R.target.name==="phone_number"?(R.target.value.includes("+91")&&(R.target.value=R.target.value.replace("+91","")),{...L,[R.target.name]:`+91${R.target.value}`}):{...L,[R.target.name]:R.target.value})};const{next:f,step:p,cmpComponentsLength:y,currentStepindex:I}=sr(t.inputs),[E,S]=P({});async function k(){i();const R={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{type:"profile",attributes:{...E}}})};fetch("https://iecb4lgq9l.execute-api.us-east-1.amazonaws.com/dev/",R).then(L=>L.json()).then(L=>console.log(L))}return h(ot,{children:h("div",{className:"large-container-buttonparent",children:h("form",{action:"",onSubmit:l,className:"form-step",children:[h("input",{ref:c,type:p.type,placeholder:p.placeholder,onInput:R=>d(R),value:E[p.name],name:p.name,required:!0}),h("br",{}),y===I+1?h("button",{className:"submitbuttonforform",onClick:()=>k(),children:h(Ul,{})}):h("button",{children:h(Vl,{})})]})})})}return h("div",{className:"large-container-buttonparent",children:e?t.answers.map((l,d)=>l.value?h("a",{className:"overlay-thing-button",target:"_blank",href:l.value,children:[h("div",{className:"icon-container  share",children:h(Fl,{})}),h("div",{children:l.text})]}):h("button",{className:"overlay-thing-button",onClick:()=>{n(l.next),o(!0),r(0),s(!1)},href:l==null?void 0:l.value,children:[h("div",{className:"icon-container",children:u(d)}),l.text]})):h("div",{})})}function jl({cssval:e,handleCloseforlargesize:t,video:n,videoEl:i,handlemuted:s,muted:r,handleChange:o,show:a,buttons:c}){Tt(()=>{var L;(L=i.current)==null||L.removeAttribute("controls")},[]);const[u,l]=P(!1),[d,f]=P(!1),[p,y]=P(0),[I,E]=P(!0);function S(){i.current.currentTime=0,E(!0),f(!1),i.current.play()}function k(){f(L=>!L),i.current.paused?i.current.play():i.current.pause()}function R(){l(!0),setTimeout(()=>{l(!1)},1e3)}return Tt(()=>{setInterval(()=>{var ct,ce,Ct,We;let L=((ct=i.current)==null?void 0:ct.currentTime)/((ce=i.current)==null?void 0:ce.duration)*96;((Ct=i.current)==null?void 0:Ct.currentTime)>=((We=i.current)==null?void 0:We.duration)-1&&E(!1),y(L)},100)},[]),h("div",{style:e,className:"video-container",children:[h("div",{className:"loader-container",children:h("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0",children:h("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:h("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})}),h("div",{className:"video-container-box",children:[h("div",{class:"close-button",onClick:()=>t(),children:h("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("circle",{cx:"15",cy:"15",r:"15",fill:"black"}),h("path",{d:"M15 18.9902C14.7491 18.9902 14.4982 18.8944 14.3069 18.7032L8.2872 12.6834C7.90427 12.3005 7.90427 11.6796 8.2872 11.2968C8.66997 10.9141 9.29071 10.9141 9.67367 11.2968L15 16.6235L20.3263 11.297C20.7092 10.9143 21.3299 10.9143 21.7126 11.297C22.0957 11.6798 22.0957 12.3007 21.7126 12.6836L15.693 18.7033C15.5017 18.8946 15.2508 18.9902 15 18.9902Z",fill:"white"})]})}),h("div",{className:"playbar",children:h("div",{className:"playbarinline",style:{width:`${p}%`},children:" "})}),h("button",{className:"mutedbutton",onClick:s,children:[" ",r?h("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",style:{minHeight:"40px"},children:[h("use",{class:"ytp-svg-shadow"}),h("use",{class:"ytp-svg-shadow"}),h("defs",{children:[h("clipPath",{id:"ytp-svg-volume-animation-mask",children:[h("path",{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}),h("path",{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}),h("path",{class:"ytp-svg-volume-animation-mover",d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z",transform:"translate(0, 0)"})]}),h("clipPath",{id:"ytp-svg-volume-animation-slash-mask",children:h("path",{class:"ytp-svg-volume-animation-mover",d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z",transform:"translate(0, 0)"})})]}),h("path",{class:"ytp-svg-fill ytp-svg-volume-animation-speaker","clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff",id:"ytp-id-15"}),h("path",{class:"ytp-svg-fill ytp-svg-volume-animation-hider","clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff",id:"ytp-id-16",style:"display: none;"})]}):h("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",style:{minHeight:"40px"},children:[h("use",{class:"ytp-svg-shadow"}),h("path",{class:"ytp-svg-fill",d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z",id:"ytp-id-17"})]})," "]}),h("button",{className:"mutedbutton replay",onClick:S,children:h("svg",{style:{width:"32px",display:"inline",minHeight:"40px",paddingRight:"4px"},viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("g",{"clip-path":"url(#clip0_118_21)",children:[h("path",{d:"M7 0.875C5.55672 0.876578 4.16105 1.39143 3.0625 2.3275V1.3125C3.0625 1.19647 3.01641 1.08519 2.93436 1.00314C2.85231 0.921094 2.74103 0.875 2.625 0.875C2.50897 0.875 2.39769 0.921094 2.31564 1.00314C2.23359 1.08519 2.1875 1.19647 2.1875 1.3125V3.5C2.1875 3.61603 2.23359 3.72731 2.31564 3.80936C2.39769 3.89141 2.50897 3.9375 2.625 3.9375H4.8125C4.92853 3.9375 5.03981 3.89141 5.12186 3.80936C5.20391 3.72731 5.25 3.61603 5.25 3.5C5.25 3.38397 5.20391 3.27269 5.12186 3.19064C5.03981 3.10859 4.92853 3.0625 4.8125 3.0625H3.54812C4.49907 2.21684 5.72743 1.74978 7 1.75C8.09059 1.74946 9.15429 2.08857 10.0433 2.72024C10.9324 3.3519 11.6026 4.24475 11.961 5.27478C12.3194 6.3048 12.3481 7.42088 12.0432 8.46797C11.7382 9.51506 11.1148 10.4412 10.2594 11.1177C9.40399 11.7943 8.35915 12.1876 7.26997 12.2432C6.18079 12.2987 5.10134 12.0137 4.18157 11.4277C3.2618 10.8417 2.54736 9.98375 2.13748 8.97311C1.7276 7.96247 1.64263 6.84927 1.89437 5.78812C1.91288 5.73068 1.9193 5.67002 1.91323 5.60997C1.90716 5.54992 1.88873 5.49177 1.85909 5.43919C1.82946 5.38661 1.78927 5.34073 1.74105 5.30443C1.69283 5.26814 1.63761 5.24221 1.57889 5.22828C1.52016 5.21436 1.45918 5.21274 1.3998 5.22352C1.34041 5.2343 1.2839 5.25725 1.23382 5.29093C1.18373 5.32461 1.14115 5.36829 1.10877 5.41922C1.07638 5.47015 1.05488 5.52723 1.04563 5.58688C0.932904 6.04948 0.875626 6.52386 0.875 7C0.875 8.21141 1.23423 9.39562 1.90725 10.4029C2.58027 11.4101 3.53687 12.1952 4.65606 12.6588C5.77526 13.1223 7.00679 13.2436 8.19493 13.0073C9.38306 12.771 10.4744 12.1876 11.331 11.331C12.1876 10.4744 12.771 9.38306 13.0073 8.19493C13.2436 7.00679 13.1223 5.77526 12.6588 4.65606C12.1952 3.53687 11.4101 2.58027 10.4029 1.90725C9.39562 1.23423 8.21141 0.875 7 0.875Z",fill:"white"}),h("path",{d:"M6.125 9.27504C6.28925 9.27426 6.44996 9.22725 6.58875 9.13942L8.82438 7.74379C8.951 7.66532 9.05549 7.55582 9.12795 7.42566C9.20041 7.29551 9.23844 7.14901 9.23844 7.00004C9.23844 6.85107 9.20041 6.70457 9.12795 6.57442C9.05549 6.44426 8.951 6.33476 8.82438 6.25629L6.58875 4.86067C6.45649 4.778 6.30453 4.73219 6.14862 4.72798C5.99271 4.72377 5.8385 4.76131 5.70197 4.83671C5.56544 4.91212 5.45155 5.02265 5.37208 5.15685C5.29262 5.29106 5.25047 5.44407 5.25 5.60004V8.40004C5.25 8.63211 5.34219 8.85467 5.50628 9.01876C5.67038 9.18285 5.89294 9.27504 6.125 9.27504ZM6.125 5.60004L8.36063 7.00004L6.125 8.40004V5.60004Z",fill:"white"})]}),h("defs",{children:h("clipPath",{id:"clip0_118_21",children:h("rect",{width:"14",height:"14",fill:"white"})})})]})}),h("video",{src:n,autoPlay:!0,ref:i,className:"lg-video-for-full",playsInline:!0,start:0}),I?h("div",{className:"pausestyles",onClick:()=>k(),children:d?h("button",{className:"pausestyles f22pluginpausevideos ",children:[" ",h($l,{})," "]}):h("div",{})}):"",h("div",{className:u?"toast":" toast hidden ",children:h("div",{className:"toast-text",children:" your Form is submmited ✔️ "})}),h(Hl,{show:a,buttons:c,handleChange:o,handletoast:R,setPause:f,setShowPause:E,setCurrentTime:y}),h("h1",{className:"lg-credit",style:{background:"black",paddingTop:"2px",paddingBottom:"2px"},children:h("a",{href:"https://wa.me/918870981553?text=Hello!%20saw%20your%20plugin%20on%20Paper%20london%20website.%20Interested%20to%20know%20more",target:"_blank",children:[" ",h("span",{style:{fontSize:"14px",margin:"0px",textDecoration:"underline"},children:"Made with ❤️ at F22 Labs"})]})})]})]})}const yp="";function ql({setmodal:e,values:t,setvalues:n,modalformformat:i}){const{step:s,currentStepindex:r,cmpComponentsLength:o,next:a}=sr(i),c=fe(null);function u(f){if(f.preventDefault(),c.current.value="",r===o-1){e(!1);return}a()}function l(f){n(p=>({...p,[f.target.name]:f.target.value}))}function d(){e(!1)}return h(ot,{children:[h("div",{className:"modal"}),h("div",{className:"modal-container",children:[h("video",{autoPlay:!0,playsInline:!0,src:"https://f22videoplugin.s3.ap-northeast-1.amazonaws.com/paperlondon/video1.mp4"}),h("div",{className:"forms",children:h("form",{action:"",className:"modal-form",onSubmit:u,children:[h("input",{type:s==null?void 0:s.type,value:t[s==null?void 0:s.name],onInput:f=>l(f),placeholder:s==null?void 0:s.placeholder,className:"input-modal",name:s==null?void 0:s.name,ref:c,required:!0}),h("button",{className:"submitbtnmodal",children:h("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"M7.42042 6.00003C7.42042 6.2151 7.3383 6.43013 7.17441 6.5941L2.01463 11.7538C1.6864 12.0821 1.15424 12.0821 0.826148 11.7538C0.498055 11.4257 0.498055 10.8937 0.826148 10.5654L5.39181 6.00003L0.826308 1.43461C0.498214 1.10639 0.498214 0.574383 0.826308 0.246316C1.1544 -0.0820694 1.68656 -0.0820694 2.01479 0.246316L7.17457 5.40596C7.33849 5.57001 7.42042 5.78505 7.42042 6.00003Z",fill:"#080807"})})})]})}),h("div",{className:"cross-buttonmodal",onClick:d,children:h("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("path",{d:"M1.25367 12C0.93501 12 0.616352 11.8826 0.36478 11.6312C-0.121593 11.145 -0.121593 10.3402 0.36478 9.854L9.85744 0.364652C10.3438 -0.121551 11.1488 -0.121551 11.6352 0.364652C12.1216 0.850856 12.1216 1.65561 11.6352 2.14181L2.14256 11.6312C1.90776 11.8826 1.57233 12 1.25367 12Z",fill:"white"}),h("path",{d:"M10.7463 12C10.4277 12 10.109 11.8826 9.85744 11.6312L0.36478 2.14181C-0.121593 1.65561 -0.121593 0.850856 0.36478 0.364652C0.851153 -0.121551 1.65618 -0.121551 2.14256 0.364652L11.6352 9.854C12.1216 10.3402 12.1216 11.145 11.6352 11.6312C11.3836 11.8826 11.065 12 10.7463 12Z",fill:"white"})]})})]})]})}/**
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
 */const rr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Gl=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},or={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),i.push(n[l],n[d],n[f],n[p])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Gl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||u==null||d==null)throw Error();const f=r<<2|a>>4;if(i.push(f),u!==64){const p=a<<4&240|u>>2;if(i.push(p),d!==64){const y=u<<6&192|d;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Kl=function(e){const t=rr(e);return or.encodeByteArray(t,!0)},ln=function(e){return Kl(e).replace(/\./g,"")},zl=function(e){try{return or.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Ql=()=>Wl().__FIREBASE_DEFAULTS__,Xl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Yl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zl(e[1]);return t&&JSON.parse(t)},ar=()=>{try{return Ql()||Xl()||Yl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jl=e=>{var t,n;return(n=(t=ar())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Zl=e=>{const t=Jl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},tc=()=>{var e;return(e=ar())===null||e===void 0?void 0:e.config};/**
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
 */class ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function nc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ln(JSON.stringify(n)),ln(JSON.stringify(o)),a].join(".")}function ic(){try{return typeof indexedDB=="object"}catch{return!1}}function sc(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const rc="FirebaseError";class Kt extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=rc,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?oc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Kt(s,a,i)}}function oc(e,t){return e.replace(ac,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const ac=/\{\$([^}]+)}/g;function fi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(cr(r)&&cr(o)){if(!fi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function cr(e){return e!==null&&typeof e=="object"}/**
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
 */function de(e){return e&&e._delegate?e._delegate:e}class pe{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ot="[DEFAULT]";/**
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
 */class lc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new ec;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uc(t))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ot){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ot){return this.instances.has(t)}getOptions(t=Ot){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cc(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ot){return this.component?this.component.multipleInstances?t:Ot:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cc(e){return e===Ot?void 0:e}function uc(e){return e.instantiationMode==="EAGER"}/**
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
 */class hc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new lc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const fc={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},dc=N.INFO,pc={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},gc=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=pc[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ur{constructor(t){this.name=t,this._logLevel=dc,this._logHandler=gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const mc=(e,t)=>t.some(n=>e instanceof n);let hr,fr;function yc(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vc(){return fr||(fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dr=new WeakMap,di=new WeakMap,pr=new WeakMap,pi=new WeakMap,gi=new WeakMap;function wc(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(It(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&dr.set(n,e)}).catch(()=>{}),gi.set(t,e),t}function _c(e){if(di.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});di.set(e,t)}let mi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return di.get(e);if(t==="objectStoreNames")return e.objectStoreNames||pr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ec(e){mi=e(mi)}function Cc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(yi(this),t,...n);return pr.set(i,t.sort?t.sort():[t]),It(i)}:vc().includes(e)?function(...t){return e.apply(yi(this),t),It(dr.get(this))}:function(...t){return It(e.apply(yi(this),t))}}function bc(e){return typeof e=="function"?Cc(e):(e instanceof IDBTransaction&&_c(e),mc(e,yc())?new Proxy(e,mi):e)}function It(e){if(e instanceof IDBRequest)return wc(e);if(pi.has(e))return pi.get(e);const t=bc(e);return t!==e&&(pi.set(e,t),gi.set(t,e)),t}const yi=e=>gi.get(e);function Tc(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=It(o);return i&&o.addEventListener("upgradeneeded",c=>{i(It(o.result),c.oldVersion,c.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ic=["get","getKey","getAll","getAllKeys","count"],Sc=["put","add","delete","clear"],vi=new Map;function gr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(vi.get(t))return vi.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Sc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ic.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return vi.set(t,r),r}Ec(e=>({...e,get:(t,n,i)=>gr(t,n)||e.get(t,n,i),has:(t,n)=>!!gr(t,n)||e.has(t,n)}));/**
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
 */class Ac{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Dc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wi="@firebase/app",mr="0.9.3";/**
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
 */const Rt=new ur("@firebase/app"),kc="@firebase/app-compat",xc="@firebase/analytics-compat",Nc="@firebase/analytics",Lc="@firebase/app-check-compat",Oc="@firebase/app-check",Rc="@firebase/auth",Mc="@firebase/auth-compat",Pc="@firebase/database",Fc="@firebase/database-compat",Vc="@firebase/functions",Uc="@firebase/functions-compat",$c="@firebase/installations",Bc="@firebase/installations-compat",Hc="@firebase/messaging",jc="@firebase/messaging-compat",qc="@firebase/performance",Gc="@firebase/performance-compat",Kc="@firebase/remote-config",zc="@firebase/remote-config-compat",Wc="@firebase/storage",Qc="@firebase/storage-compat",Xc="@firebase/firestore",Yc="@firebase/firestore-compat",Jc="firebase",Zc="9.17.1";/**
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
 */const _i="[DEFAULT]",tu={[wi]:"fire-core",[kc]:"fire-core-compat",[Nc]:"fire-analytics",[xc]:"fire-analytics-compat",[Oc]:"fire-app-check",[Lc]:"fire-app-check-compat",[Rc]:"fire-auth",[Mc]:"fire-auth-compat",[Pc]:"fire-rtdb",[Fc]:"fire-rtdb-compat",[Vc]:"fire-fn",[Uc]:"fire-fn-compat",[$c]:"fire-iid",[Bc]:"fire-iid-compat",[Hc]:"fire-fcm",[jc]:"fire-fcm-compat",[qc]:"fire-perf",[Gc]:"fire-perf-compat",[Kc]:"fire-rc",[zc]:"fire-rc-compat",[Wc]:"fire-gcs",[Qc]:"fire-gcs-compat",[Xc]:"fire-fst",[Yc]:"fire-fst-compat","fire-js":"fire-js",[Jc]:"fire-js-all"};/**
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
 */const cn=new Map,Ei=new Map;function eu(e,t){try{e.container.addComponent(t)}catch(n){Rt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function un(e){const t=e.name;if(Ei.has(t))return Rt.debug(`There were multiple attempts to register component ${t}.`),!1;Ei.set(t,e);for(const n of cn.values())eu(n,e);return!0}function nu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const iu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new lr("app","Firebase",iu);/**
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
 */class su{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const ru=Zc;function yr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:_i,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=tc()),!n)throw St.create("no-options");const r=cn.get(s);if(r){if(fi(n,r.options)&&fi(i,r.config))return r;throw St.create("duplicate-app",{appName:s})}const o=new hc(s);for(const c of Ei.values())o.addComponent(c);const a=new su(n,i,o);return cn.set(s,a),a}function ou(e=_i){const t=cn.get(e);if(!t&&e===_i)return yr();if(!t)throw St.create("no-app",{appName:e});return t}function zt(e,t,n){var i;let s=(i=tu[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}un(new pe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const au="firebase-heartbeat-database",lu=1,ge="firebase-heartbeat-store";let Ci=null;function vr(){return Ci||(Ci=Tc(au,lu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ge)}}}).catch(e=>{throw St.create("idb-open",{originalErrorMessage:e.message})})),Ci}async function cu(e){try{return(await vr()).transaction(ge).objectStore(ge).get(_r(e))}catch(t){if(t instanceof Kt)Rt.warn(t.message);else{const n=St.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(n.message)}}}async function wr(e,t){try{const i=(await vr()).transaction(ge,"readwrite");return await i.objectStore(ge).put(t,_r(e)),i.done}catch(n){if(n instanceof Kt)Rt.warn(n.message);else{const i=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rt.warn(i.message)}}}function _r(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uu=1024,hu=30*24*60*60*1e3;class fu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pu(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Er();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=hu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Er(),{heartbeatsToSend:n,unsentEntries:i}=du(this._heartbeatsCache.heartbeats),s=ln(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Er(){return new Date().toISOString().substring(0,10)}function du(e,t=uu){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Cr(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class pu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ic()?sc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Cr(e){return ln(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function gu(e){un(new pe("platform-logger",t=>new Ac(t),"PRIVATE")),un(new pe("heartbeat",t=>new fu(t),"PRIVATE")),zt(wi,mr,e),zt(wi,mr,"esm2017"),zt("fire-js","")}gu("");var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,bi=bi||{},_=mu||self;function hn(){}function fn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function me(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function yu(e){return Object.prototype.hasOwnProperty.call(e,Ti)&&e[Ti]||(e[Ti]=++vu)}var Ti="closure_uid_"+(1e9*Math.random()>>>0),vu=0;function wu(e,t,n){return e.call.apply(e.bind,arguments)}function _u(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=wu:Z=_u,Z.apply(null,arguments)}function dn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function At(){this.s=this.s,this.o=this.o}var Eu=0;At.prototype.s=!1,At.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Eu!=0)&&yu(this)},At.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const br=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ii(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Tr(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(fn(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Cu=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{_.addEventListener("test",hn,t),_.removeEventListener("test",hn,t)}catch{}return e}();function pn(e){return/^[\s\xa0]*$/.test(e)}var Ir=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Si(e,t){return e<t?-1:e>t?1:0}function gn(){var e=_.navigator;return e&&(e=e.userAgent)?e:""}function gt(e){return gn().indexOf(e)!=-1}function Ai(e){return Ai[" "](e),e}Ai[" "]=hn;function bu(e){var t=Su;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Tu=gt("Opera"),Wt=gt("Trident")||gt("MSIE"),Sr=gt("Edge"),Di=Sr||Wt,Ar=gt("Gecko")&&!(gn().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),Iu=gn().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function Dr(){var e=_.document;return e?e.documentMode:void 0}var mn;t:{var ki="",xi=function(){var e=gn();if(Ar)return/rv:([^\);]+)(\)|;)/.exec(e);if(Sr)return/Edge\/([\d\.]+)/.exec(e);if(Wt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Iu)return/WebKit\/(\S+)/.exec(e);if(Tu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(xi&&(ki=xi?xi[1]:""),Wt){var Ni=Dr();if(Ni!=null&&Ni>parseFloat(ki)){mn=String(Ni);break t}}mn=ki}var Su={};function Au(){return bu(function(){let e=0;const t=Ir(String(mn)).split("."),n=Ir("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=Si(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Si(s[2].length==0,r[2].length==0)||Si(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}var Li;if(_.document&&Wt){var kr=Dr();Li=kr||parseInt(mn,10)||void 0}else Li=void 0;var Du=Li;function ye(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ar){t:{try{Ai(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ku[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ye.X.h.call(this)}}Q(ye,tt);var ku={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ve="closure_listenable_"+(1e6*Math.random()|0),xu=0;function Nu(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++xu,this.ba=this.ea=!1}function yn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Oi(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function xr(e){const t={};for(const n in e)t[n]=e[n];return t}const Nr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lr(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<Nr.length;r++)n=Nr[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function vn(e){this.src=e,this.g={},this.h=0}vn.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Mi(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Nu(t,this.src,r,!!i,s),t.ea=n,e.push(t)),t};function Ri(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=br(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(yn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Mi(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),Fi={};function Or(e,t,n,i,s){if(i&&i.once)return Mr(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Or(e,t[r],n,i,s);return null}return n=Bi(n),e&&e[ve]?e.N(t,n,me(i)?!!i.capture:!!i,s):Rr(e,t,n,!1,i,s)}function Rr(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=me(s)?!!s.capture:!!s,a=Ui(e);if(a||(e[Pi]=a=new vn(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=Lu(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Cu||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Fr(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lu(){function e(n){return t.call(e.src,e.listener,n)}const t=Ou;return e}function Mr(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Mr(e,t[r],n,i,s);return null}return n=Bi(n),e&&e[ve]?e.O(t,n,me(i)?!!i.capture:!!i,s):Rr(e,t,n,!0,i,s)}function Pr(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Pr(e,t[r],n,i,s);else i=me(i)?!!i.capture:!!i,n=Bi(n),e&&e[ve]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Mi(r,n,i,s),-1<n&&(yn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ui(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Mi(t,n,i,s)),(n=-1<e?t[e]:null)&&Vi(n))}function Vi(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ve])Ri(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Fr(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ui(t))?(Ri(n,e),n.h==0&&(n.src=null,t[Pi]=null)):yn(e)}}}function Fr(e){return e in Fi?Fi[e]:Fi[e]="on"+e}function Ou(e,t){if(e.ba)e=!0;else{t=new ye(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&Vi(e),e=n.call(i,t)}return e}function Ui(e){return e=e[Pi],e instanceof vn?e:null}var $i="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bi(e){return typeof e=="function"?e:(e[$i]||(e[$i]=function(t){return e.handleEvent(t)}),e[$i])}function G(){At.call(this),this.i=new vn(this),this.P=this,this.I=null}Q(G,At),G.prototype[ve]=!0,G.prototype.removeEventListener=function(e,t,n,i){Pr(this,e,t,n,i)};function X(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var s=t;t=new tt(i,e),Lr(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=wn(o,i,!0,t)&&s}if(o=t.g=e,s=wn(o,i,!0,t)&&s,s=wn(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=wn(o,i,!1,t)&&s}G.prototype.M=function(){if(G.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)yn(n[i]);delete e.g[t],e.h--}}this.I=null},G.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},G.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function wn(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ri(e.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Hi=_.JSON.stringify;function Ru(){var e=$r;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Mu{constructor(){this.h=this.g=null}add(t,n){const i=Vr.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Vr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Pu,e=>e.reset());class Pu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Fu(e){_.setTimeout(()=>{throw e},0)}function Ur(e,t){ji||Vu(),qi||(ji(),qi=!0),$r.add(e,t)}var ji;function Vu(){var e=_.Promise.resolve(void 0);ji=function(){e.then(Uu)}}var qi=!1,$r=new Mu;function Uu(){for(var e;e=Ru();){try{e.h.call(e.g)}catch(n){Fu(n)}var t=Vr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}qi=!1}function _n(e,t){G.call(this),this.h=e||1,this.g=t||_,this.j=Z(this.lb,this),this.l=Date.now()}Q(_n,G),v=_n.prototype,v.ca=!1,v.R=null,v.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),X(this,"tick"),this.ca&&(Gi(this),this.start()))}},v.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gi(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}v.M=function(){_n.X.M.call(this),Gi(this),delete this.g};function Ki(e,t,n){if(typeof e=="function")n&&(e=Z(e,n));else if(e&&typeof e.handleEvent=="function")e=Z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:_.setTimeout(e,t||0)}function Br(e){e.g=Ki(()=>{e.g=null,e.i&&(e.i=!1,Br(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $u extends At{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Br(this)}M(){super.M(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(e){At.call(this),this.h=e,this.g={}}Q(we,At);var Hr=[];function jr(e,t,n,i){Array.isArray(n)||(n&&(Hr[0]=n.toString()),n=Hr);for(var s=0;s<n.length;s++){var r=Or(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function qr(e){Oi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Vi(t)},e),e.g={}}we.prototype.M=function(){we.X.M.call(this),qr(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function En(){this.g=!0}En.prototype.Aa=function(){this.g=!1};function Bu(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Hu(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Qt(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+qu(e,n)+(i?" "+i:"")})}function ju(e,t){e.info(function(){return"TIMEOUT: "+t})}En.prototype.info=function(){};function qu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Hi(n)}catch{return t}}var Mt={},Gr=null;function Cn(){return Gr=Gr||new G}Mt.Pa="serverreachability";function Kr(e){tt.call(this,Mt.Pa,e)}Q(Kr,tt);function _e(e){const t=Cn();X(t,new Kr(t))}Mt.STAT_EVENT="statevent";function zr(e,t){tt.call(this,Mt.STAT_EVENT,e),this.stat=t}Q(zr,tt);function st(e){const t=Cn();X(t,new zr(t,e))}Mt.Qa="timingevent";function Wr(e,t){tt.call(this,Mt.Qa,e),this.size=t}Q(Wr,tt);function Ee(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){e()},t)}var bn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function zi(){}zi.prototype.h=null;function Xr(e){return e.h||(e.h=e.i())}function Yr(){}var Ce={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wi(){tt.call(this,"d")}Q(Wi,tt);function Qi(){tt.call(this,"c")}Q(Qi,tt);var Xi;function Tn(){}Q(Tn,zi),Tn.prototype.g=function(){return new XMLHttpRequest},Tn.prototype.i=function(){return{}},Xi=new Tn;function be(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new we(this),this.O=Gu,e=Di?125:void 0,this.T=new _n(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jr}function Jr(){this.i=null,this.g="",this.h=!1}var Gu=45e3,Yi={},In={};v=be.prototype,v.setTimeout=function(e){this.O=e};function Ji(e,t,n){e.K=1,e.v=kn(yt(t)),e.s=n,e.P=!0,Zr(e,null)}function Zr(e,t){e.F=Date.now(),Te(e),e.A=yt(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),co(n.i,"t",i),e.C=0,n=e.l.H,e.h=new Jr,e.g=Ro(e.l,n?t:null,!e.s),0<e.N&&(e.L=new $u(Z(e.La,e,e.g),e.N)),jr(e.S,e.g,"readystatechange",e.ib),t=e.H?xr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),_e(),Bu(e.j,e.u,e.A,e.m,e.U,e.s)}v.ib=function(e){e=e.target;const t=this.L;t&&vt(e)==3?t.l():this.La(e)},v.La=function(e){try{if(e==this.g)t:{const l=vt(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(l!=3||Di||this.g&&(this.h.h||this.g.fa()||Co(this.g)))){this.I||l!=4||t==7||(t==8||0>=d?_e(3):_e(2)),Sn(this);var n=this.g.aa();this.Y=n;e:if(to(this)){var i=Co(this.g);e="";var s=i.length,r=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),Ie(this);var o="";break e}this.h.i=new _.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Hu(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pn(a)){var u=a;break e}}u=null}if(n=u)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zi(this,n);else{this.i=!1,this.o=3,st(12),Pt(this),Ie(this);break t}}this.P?(eo(this,l,o),Di&&this.i&&l==3&&(jr(this.S,this.T,"tick",this.hb),this.T.start())):(Qt(this.j,this.m,o,null),Zi(this,o)),l==4&&Pt(this),this.i&&!this.I&&(l==4?xo(this.l,this):(this.i=!1,Te(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Pt(this),Ie(this)}}}catch{}finally{}};function to(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function eo(e,t,n){let i=!0,s;for(;!e.I&&e.C<n.length;)if(s=Ku(e,n),s==In){t==4&&(e.o=4,st(14),i=!1),Qt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Yi){e.o=4,st(15),Qt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Qt(e.j,e.m,s,null),Zi(e,s);to(e)&&s!=In&&s!=Yi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,st(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),as(t),t.K=!0,st(11))):(Qt(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Ie(e))}v.hb=function(){if(this.g){var e=vt(this.g),t=this.g.fa();this.C<t.length&&(Sn(this),eo(this,e,t),this.i&&e!=4&&Te(this))}};function Ku(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?In:(n=Number(t.substring(n,i)),isNaN(n)?Yi:(i+=1,i+n>t.length?In:(t=t.substr(i,n),e.C=i+n,t)))}v.cancel=function(){this.I=!0,Pt(this)};function Te(e){e.V=Date.now()+e.O,no(e,e.O)}function no(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ee(Z(e.gb,e),t)}function Sn(e){e.B&&(_.clearTimeout(e.B),e.B=null)}v.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(ju(this.j,this.A),this.K!=2&&(_e(),st(17)),Pt(this),this.o=2,Ie(this)):no(this,this.V-e)};function Ie(e){e.l.G==0||e.I||xo(e.l,e)}function Pt(e){Sn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Gi(e.T),qr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Zi(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ts(n.h,e))){if(!e.J&&ts(n.h,e)&&n.G==3){try{var i=n.Fa.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Mn(n),On(n);else break t;os(n),st(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ee(Z(n.cb,n),6e3));if(1>=fo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vt(n,11)}else if((e.J||n.g==e)&&Mn(n),!pn(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=e.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=i.h;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(es(r,r.h),r.h=null))}if(i.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(i.za=I,F(i.F,i.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=e;if(i.sa=Oo(i,i.H?i.ka:null,i.V),o.J){po(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Sn(a),Te(a)),i.g=o}else Do(i);0<n.i.length&&Rn(n)}else u[0]!="stop"&&u[0]!="close"||Vt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vt(n,7):rs(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}_e(4)}catch{}}function zu(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(fn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Wu(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(fn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function io(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(fn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Wu(e),i=zu(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var so=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ft(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=t!==void 0?t:e.h,An(this,e.j),this.s=e.s,this.g=e.g,Dn(this,e.m),this.l=e.l,t=e.i;var n=new De;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ro(this,n),this.o=e.o}else e&&(n=String(e).match(so))?(this.h=!!t,An(this,n[1]||"",!0),this.s=Se(n[2]||""),this.g=Se(n[3]||"",!0),Dn(this,n[4]),this.l=Se(n[5]||"",!0),ro(this,n[6]||"",!0),this.o=Se(n[7]||"")):(this.h=!!t,this.i=new De(null,this.h))}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,oo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ae(t,oo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ae(n,n.charAt(0)=="/"?Ju:Yu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ae(n,th)),e.join("")};function yt(e){return new Ft(e)}function An(e,t,n){e.j=n?Se(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Dn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ro(e,t,n){t instanceof De?(e.i=t,eh(e.i,e.h)):(n||(t=Ae(t,Zu)),e.i=new De(t,e.h))}function F(e,t,n){e.i.set(t,n)}function kn(e){return F(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Se(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Xu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var oo=/[#\/\?@]/g,Yu=/[#\?:]/g,Ju=/[#\?]/g,Zu=/[#\?@]/g,th=/#/g;function De(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Dt(e){e.g||(e.g=new Map,e.h=0,e.i&&Qu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=De.prototype,v.add=function(e,t){Dt(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ao(e,t){Dt(e),t=Xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function lo(e,t){return Dt(e),t=Xt(e,t),e.g.has(t)}v.forEach=function(e,t){Dt(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)},v.oa=function(){Dt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n},v.W=function(e){Dt(this);let t=[];if(typeof e=="string")lo(this,e)&&(t=t.concat(this.g.get(Xt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},v.set=function(e,t){return Dt(this),this.i=null,e=Xt(this,e),lo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},v.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function co(e,t,n){ao(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),Ii(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function eh(e,t){t&&!e.j&&(Dt(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(ao(this,i),co(this,s,n))},e)),e.j=t}var nh=class{constructor(t,n){this.h=t,this.g=n}};function uo(e){this.l=e||ih,_.PerformanceNavigationTiming?(e=_.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(_.g&&_.g.Ga&&_.g.Ga()&&_.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ih=10;function ho(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function fo(e){return e.h?1:e.g?e.g.size:0}function ts(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function es(e,t){e.g?e.g.add(t):e.h=t}function po(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}uo.prototype.cancel=function(){if(this.i=go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function go(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ii(e.i)}function ns(){}ns.prototype.stringify=function(e){return _.JSON.stringify(e,void 0)},ns.prototype.parse=function(e){return _.JSON.parse(e,void 0)};function sh(){this.g=new ns}function rh(e,t,n){const i=n||"";try{io(e,function(s,r){let o=s;me(s)&&(o=Hi(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function oh(e,t){const n=new En;if(_.Image){const i=new Image;i.onload=dn(xn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=dn(xn,n,i,"TestLoadImage: error",!1,t),i.onabort=dn(xn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=dn(xn,n,i,"TestLoadImage: timeout",!1,t),_.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function xn(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function ke(e){this.l=e.ac||null,this.j=e.jb||!1}Q(ke,zi),ke.prototype.g=function(){return new Nn(this.l,this.j)},ke.prototype.i=function(e){return function(){return e}}({});function Nn(e,t){G.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=is,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(Nn,G);var is=0;v=Nn.prototype,v.open=function(e,t){if(this.readyState!=is)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ne(this)},v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||_).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xe(this)),this.readyState=is},v.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ne(this)),this.g&&(this.readyState=3,Ne(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function mo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}v.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xe(this):Ne(this),this.readyState==3&&mo(this)}},v.Va=function(e){this.g&&(this.response=this.responseText=e,xe(this))},v.Ua=function(e){this.g&&(this.response=e,xe(this))},v.ga=function(){this.g&&xe(this)};function xe(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ne(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)},v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ne(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ah=_.JSON.parse;function $(e){G.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yo,this.K=this.L=!1}Q($,G);var yo="",lh=/^https?$/i,ch=["POST","PUT"];v=$.prototype,v.Ka=function(e){this.L=e},v.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xi.g(),this.C=this.u?Xr(this.u):Xr(Xi),this.g.onreadystatechange=Z(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){vo(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=_.FormData&&e instanceof _.FormData,!(0<=br(ch,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Eo(this),0<this.B&&((this.K=uh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.qa,this)):this.A=Ki(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){vo(this,r)}};function uh(e){return Wt&&Au()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.qa=function(){typeof bi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function vo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,wo(e),Ln(e)}function wo(e){e.D||(e.D=!0,X(e,"complete"),X(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,X(this,"complete"),X(this,"abort"),Ln(this))},v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),$.X.M.call(this)},v.Ha=function(){this.s||(this.F||this.v||this.l?_o(this):this.fb())},v.fb=function(){_o(this)};function _o(e){if(e.h&&typeof bi<"u"&&(!e.C[1]||vt(e)!=4||e.aa()!=2)){if(e.v&&vt(e)==4)Ki(e.Ha,0,e);else if(X(e,"readystatechange"),vt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var s=String(e.H).match(so)[1]||null;if(!s&&_.self&&_.self.location){var r=_.self.location.protocol;s=r.substr(0,r.length-1)}i=!lh.test(s?s.toLowerCase():"")}n=i}if(n)X(e,"complete"),X(e,"success");else{e.m=6;try{var o=2<vt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",wo(e)}}finally{Ln(e)}}}}function Ln(e,t){if(e.g){Eo(e);const n=e.g,i=e.C[0]?hn:null;e.g=null,e.C=null,t||X(e,"ready");try{n.onreadystatechange=i}catch{}}}function Eo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(_.clearTimeout(e.A),e.A=null)}function vt(e){return e.g?e.g.readyState:0}v.aa=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}},v.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}},v.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ah(t)}};function Co(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case yo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}v.Ea=function(){return this.m},v.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bo(e){let t="";return Oi(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function ss(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=bo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):F(e,t,n))}function Le(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function To(e){this.Ca=0,this.i=[],this.j=new En,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Le("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Le("baseRetryDelayMs",5e3,e),this.bb=Le("retryDelaySeedMs",1e4,e),this.$a=Le("forwardChannelMaxRetries",2,e),this.ta=Le("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new uo(e&&e.concurrentRequestLimit),this.Fa=new sh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}v=To.prototype,v.ma=8,v.G=1;function rs(e){if(Io(e),e.G==3){var t=e.U++,n=yt(e.F);F(n,"SID",e.I),F(n,"RID",t),F(n,"TYPE","terminate"),Oe(e,n),t=new be(e,e.j,t,void 0),t.K=2,t.v=kn(yt(n)),n=!1,_.navigator&&_.navigator.sendBeacon&&(n=_.navigator.sendBeacon(t.v.toString(),"")),!n&&_.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ro(t.l,null),t.g.da(t.v)),t.F=Date.now(),Te(t)}Lo(e)}function On(e){e.g&&(as(e),e.g.cancel(),e.g=null)}function Io(e){On(e),e.u&&(_.clearTimeout(e.u),e.u=null),Mn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&_.clearTimeout(e.m),e.m=null)}function Rn(e){ho(e.h)||e.m||(e.m=!0,Ur(e.Ja,e),e.C=0)}function hh(e,t){return fo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Ee(Z(e.Ja,e,t),No(e,e.C)),e.C++,!0)}v.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new be(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=xr(r),Lr(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ao(this,s,t),n=yt(this.F),F(n,"RID",e),F(n,"CVER",22),this.D&&F(n,"X-HTTP-Session-Id",this.D),Oe(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(bo(r)))+"&"+t:this.o&&ss(n,this.o,r)),es(this.h,s),this.Ya&&F(n,"TYPE","init"),this.O?(F(n,"$req",t),F(n,"SID","null"),s.Z=!0,Ji(s,n,null)):Ji(s,n,t),this.G=2}}else this.G==3&&(e?So(this,e):this.i.length==0||ho(this.h)||So(this))};function So(e,t){var n;t?n=t.m:n=e.U++;const i=yt(e.F);F(i,"SID",e.I),F(i,"RID",n),F(i,"AID",e.T),Oe(e,i),e.o&&e.s&&ss(i,e.o,e.s),n=new be(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Ao(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),es(e.h,n),Ji(n,i,t)}function Oe(e,t){e.ia&&Oi(e.ia,function(n,i){F(t,i,n)}),e.l&&io({},function(n,i){F(t,i,n)})}function Ao(e,t,n){n=Math.min(e.i.length,n);var i=e.l?Z(e.l.Ra,e.l,e):null;t:{var s=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=r,0>u)r=Math.max(0,s[c].h-100),a=!1;else try{rh(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,i}function Do(e){e.g||e.u||(e.Z=1,Ur(e.Ia,e),e.A=0)}function os(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Ee(Z(e.Ia,e),No(e,e.A)),e.A++,!0)}v.Ia=function(){if(this.u=null,ko(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ee(Z(this.eb,this),e)}},v.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,st(10),On(this),ko(this))};function as(e){e.B!=null&&(_.clearTimeout(e.B),e.B=null)}function ko(e){e.g=new be(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=yt(e.sa);F(t,"RID","rpc"),F(t,"SID",e.I),F(t,"CI",e.L?"0":"1"),F(t,"AID",e.T),F(t,"TYPE","xmlhttp"),Oe(e,t),e.o&&e.s&&ss(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=kn(yt(t)),n.s=null,n.P=!0,Zr(n,e)}v.cb=function(){this.v!=null&&(this.v=null,On(this),os(this),st(19))};function Mn(e){e.v!=null&&(_.clearTimeout(e.v),e.v=null)}function xo(e,t){var n=null;if(e.g==t){Mn(e),as(e),e.g=null;var i=2}else if(ts(e.h,t))n=t.D,po(e.h,t),i=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;i=Cn(),X(i,new Wr(i,n)),Rn(e)}else Do(e);else if(s=t.o,s==3||s==0&&0<e.pa||!(i==1&&hh(e,t)||i==2&&os(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Vt(e,5);break;case 4:Vt(e,10);break;case 3:Vt(e,6);break;default:Vt(e,2)}}}function No(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Vt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=Z(e.kb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||An(n,"https"),kn(n)),oh(n.toString(),i)}else st(2);e.G=0,e.l&&e.l.va(t),Lo(e),Io(e)}v.kb=function(e){e?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Lo(e){if(e.G=0,e.la=[],e.l){const t=go(e.h);(t.length!=0||e.i.length!=0)&&(Tr(e.la,t),Tr(e.la,e.i),e.h.i.length=0,Ii(e.i),e.i.length=0),e.l.ua()}}function Oo(e,t,n){var i=n instanceof Ft?yt(n):new Ft(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),Dn(i,i.m);else{var s=_.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Ft(null,void 0);i&&An(r,i),t&&(r.g=t),s&&Dn(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&F(i,n,t),F(i,"VER",e.ma),Oe(e,i),i}function Ro(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new $(new ke({jb:!0})):new $(e.ra),t.Ka(e.H),t}function Mo(){}v=Mo.prototype,v.xa=function(){},v.wa=function(){},v.va=function(){},v.ua=function(){},v.Ra=function(){};function Pn(){if(Wt&&!(10<=Number(Du)))throw Error("Environmental error: no available transport.")}Pn.prototype.g=function(e,t){return new lt(e,t)};function lt(e,t){G.call(this),this.g=new To(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!pn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yt(this)}Q(lt,G),lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Oo(e,null,e.V),Rn(e)},lt.prototype.close=function(){rs(this.g)},lt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Hi(e),e=n);t.i.push(new nh(t.ab++,e)),t.G==3&&Rn(t)},lt.prototype.M=function(){this.g.l=null,delete this.j,rs(this.g),delete this.g,lt.X.M.call(this)};function Po(e){Wi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(Po,Wi);function Fo(){Qi.call(this),this.status=1}Q(Fo,Qi);function Yt(e){this.g=e}Q(Yt,Mo),Yt.prototype.xa=function(){X(this.g,"a")},Yt.prototype.wa=function(e){X(this.g,new Po(e))},Yt.prototype.va=function(e){X(this.g,new Fo)},Yt.prototype.ua=function(){X(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,lt.prototype.send=lt.prototype.u,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,bn.NO_ERROR=0,bn.TIMEOUT=8,bn.HTTP_ERROR=6,Qr.COMPLETE="complete",Yr.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",G.prototype.listen=G.prototype.N,$.prototype.listenOnce=$.prototype.O,$.prototype.getLastError=$.prototype.Oa,$.prototype.getLastErrorCode=$.prototype.Ea,$.prototype.getStatus=$.prototype.aa,$.prototype.getResponseJson=$.prototype.Sa,$.prototype.getResponseText=$.prototype.fa,$.prototype.send=$.prototype.da,$.prototype.setWithCredentials=$.prototype.Ka;var fh=function(){return new Pn},dh=function(){return Cn()},ls=bn,ph=Qr,gh=Mt,Vo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},mh=ke,Fn=Yr,yh=$;const Uo="@firebase/firestore";/**
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
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */const Ut=new ur("@firebase/firestore");function $o(){return Ut.logLevel}function w(e,...t){if(Ut.logLevel<=N.DEBUG){const n=t.map(us);Ut.debug(`Firestore (${Jt}): ${e}`,...n)}}function $t(e,...t){if(Ut.logLevel<=N.ERROR){const n=t.map(us);Ut.error(`Firestore (${Jt}): ${e}`,...n)}}function cs(e,...t){if(Ut.logLevel<=N.WARN){const n=t.map(us);Ut.warn(`Firestore (${Jt}): ${e}`,...n)}}function us(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function A(e="Unexpected state"){const t=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+e;throw $t(t),new Error(t)}function j(e,t){e||A()}function M(e,t){return e}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Kt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Bo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class wh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _h{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Bt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Bt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(j(typeof i.accessToken=="string"),new Bo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return j(t===null||typeof t=="string"),new et(t)}}class Eh{constructor(t,n,i,s){this.h=t,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(j(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ch{constructor(t,n,i,s){this.h=t,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new Eh(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Th{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const i=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(j(typeof n.token=="string"),this.A=n.token,new bh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ih(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Ho{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Ih(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function O(e,t){return e<t?-1:e>t?1:0}function Zt(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
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
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new C(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new C(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new q(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new q(0,0))}static max(){return new U(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Re{constructor(t,n,i){n===void 0?n=0:n>t.length&&A(),i===void 0?i=t.length-n:i>t.length-n&&A(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Re.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Re?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=t.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class B extends Re{construct(t,n,i){return new B(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new C(m.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new B(n)}static emptyPath(){return new B([])}}const Sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Re{construct(t,n,i){return new nt(t,n,i)}static isValidIdentifier(t){return Sh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new C(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new C(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new C(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(B.fromString(t))}static fromName(t){return new T(B.fromString(t).popFirst(5))}static empty(){return new T(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&B.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return B.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new B(t.slice()))}}function Ah(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=U.fromTimestamp(i===1e9?new q(n+1,0):new q(n,i));return new kt(s,T.empty(),t)}function Dh(e){return new kt(e.readTime,e.key,-1)}class kt{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new kt(U.min(),T.empty(),-1)}static max(){return new kt(U.max(),T.empty(),-1)}}function kh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:O(e.largestBatchId,t.largestBatchId))}/**
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
 */const xh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function jo(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==xh)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,i)=>{n(t)})}static reject(t){return new g((n,i)=>{i(t)})}static waitFor(t){return new g((n,i)=>{let s=0,r=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(t){let n=g.resolve(!1);for(const i of t)n=n.next(s=>s?g.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new g((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===r&&i(o)},l=>s(l))}})}static doWhile(t,n){return new g((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function Vn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class qo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>n.writeSequenceNumber(i))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}qo.at=-1;/**
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
 */class Lh{constructor(t,n,i,s,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Un{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Un&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function Go(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Me(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ko(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */function hs(e){return e==null}function $n(e){return e===0&&1/e==-1/0}function Oh(e){return typeof e=="number"&&Number.isInteger(e)&&!$n(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new wt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(t);return new wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const Rh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(e){if(j(!!e),typeof e=="string"){let t=0;const n=Rh.exec(e);if(j(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Y(e.seconds),nanos:Y(e.nanos)}}function Y(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pe(e){return typeof e=="string"?wt.fromBase64String(e):wt.fromUint8Array(e)}/**
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
 */function Mh(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bn(e){const t=Ht(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
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
 */const Hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function te(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Mh(e)?4:Ph(e)?9007199254740991:10:A()}function mt(e,t){if(e===t)return!0;const n=te(e);if(n!==te(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Bn(e).isEqual(Bn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ht(i.timestampValue),o=Ht(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Pe(i.bytesValue).isEqual(Pe(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Y(i.geoPointValue.latitude)===Y(s.geoPointValue.latitude)&&Y(i.geoPointValue.longitude)===Y(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Y(i.integerValue)===Y(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Y(i.doubleValue),o=Y(s.doubleValue);return r===o?$n(r)===$n(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Zt(e.arrayValue.values||[],t.arrayValue.values||[],mt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Go(r)!==Go(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!mt(r[a],o[a])))return!1;return!0}(e,t);default:return A()}}function Fe(e,t){return(e.values||[]).find(n=>mt(n,t))!==void 0}function ee(e,t){if(e===t)return 0;const n=te(e),i=te(t);if(n!==i)return O(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(s,r){const o=Y(s.integerValue||s.doubleValue),a=Y(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return zo(e.timestampValue,t.timestampValue);case 4:return zo(Bn(e),Bn(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(s,r){const o=Pe(s),a=Pe(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=O(o[c],a[c]);if(u!==0)return u}return O(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,r){const o=O(Y(s.latitude),Y(r.latitude));return o!==0?o:O(Y(s.longitude),Y(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ee(o[c],a[c]);if(u)return u}return O(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,r){if(s===Hn.mapValue&&r===Hn.mapValue)return 0;if(s===Hn.mapValue)return 1;if(r===Hn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const d=O(a[l],u[l]);if(d!==0)return d;const f=ee(o[a[l]],c[u[l]]);if(f!==0)return f}return O(a.length,u.length)}(e.mapValue,t.mapValue);default:throw A()}}function zo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return O(e,t);const n=Ht(e),i=Ht(t),s=O(n.seconds,i.seconds);return s!==0?s:O(n.nanos,i.nanos)}function ne(e){return fs(e)}function fs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(i){const s=Ht(i);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Pe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=fs(o);return s+"]"}(e.arrayValue):"mapValue"in e?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${fs(i.fields[a])}`;return r+"}"}(e.mapValue):A();var t,n}function ds(e){return!!e&&"integerValue"in e}function ps(e){return!!e&&"arrayValue"in e}function jn(e){return!!e&&"mapValue"in e}function Ve(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Me(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=Ve(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ve(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ph(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qn{constructor(t,n){this.position=t,this.inclusive=n}}function Wo(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(r.field.isKeyField()?i=T.comparator(T.fromName(o.referenceValue),n.key):i=ee(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Qo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!mt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Xo{}class K extends Xo{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new Vh(t,n,i):n==="array-contains"?new Bh(t,i):n==="in"?new Hh(t,i):n==="not-in"?new jh(t,i):n==="array-contains-any"?new qh(t,i):new K(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new Uh(t,i):new $h(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ee(n,this.value)):n!==null&&te(this.value)===te(n)&&this.matchesComparison(ee(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xt extends Xo{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new xt(t,n)}matches(t){return Yo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Yo(e){return e.op==="and"}function Jo(e){return Fh(e)&&Yo(e)}function Fh(e){for(const t of e.filters)if(t instanceof xt)return!1;return!0}function gs(e){if(e instanceof K)return e.field.canonicalString()+e.op.toString()+ne(e.value);if(Jo(e))return e.filters.map(t=>gs(t)).join(",");{const t=e.filters.map(n=>gs(n)).join(",");return`${e.op}(${t})`}}function Zo(e,t){return e instanceof K?function(n,i){return i instanceof K&&n.op===i.op&&n.field.isEqual(i.field)&&mt(n.value,i.value)}(e,t):e instanceof xt?function(n,i){return i instanceof xt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&Zo(r,i.filters[o]),!0):!1}(e,t):void A()}function ta(e){return e instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${ne(t.value)}`}(e):e instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(ta).join(" ,")+"}"}(e):"Filter"}class Vh extends K{constructor(t,n,i){super(t,n,i),this.key=T.fromName(i.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class Uh extends K{constructor(t,n){super(t,"in",n),this.keys=ea("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class $h extends K{constructor(t,n){super(t,"not-in",n),this.keys=ea("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ea(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>T.fromName(i.referenceValue))}class Bh extends K{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ps(n)&&Fe(n.arrayValue,this.value)}}class Hh extends K{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Fe(this.value.arrayValue,n)}}class jh extends K{constructor(t,n){super(t,"not-in",n)}matches(t){if(Fe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Fe(this.value.arrayValue,n)}}class qh extends K{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ps(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Fe(this.value.arrayValue,i))}}/**
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
 */class Ue{constructor(t,n="asc"){this.field=t,this.dir=n}}function Gh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class at{constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new at(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gn(this.root,t,this.comparator,!0)}}class Gn{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??J.RED,this.left=s??J.EMPTY,this.right=r??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new J(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return J.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1,J.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,n,i,s){return this}insert(e,t,n){return new J(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new na(this.data.getIterator())}getIteratorFrom(t){return new na(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new rt(this.comparator);return n.data=t,n}}class na{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ht{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new ht([])}unionWith(t){let n=new rt(nt.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new ht(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Zt(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class ft{constructor(t){this.value=t}static empty(){return new ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!jn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ve(n)}setAll(t){let n=nt.emptyPath(),i={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ve(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());jn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return mt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];jn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){Me(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new ft(Ve(this.value))}}function ia(e){const t=[];return Me(e.fields,(n,i)=>{const s=new nt([n]);if(jn(i)){const r=ia(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)}),new ht(t)}/**
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
 */class dt{constructor(t,n,i,s,r,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new dt(t,0,U.min(),U.min(),U.min(),ft.empty(),0)}static newFoundDocument(t,n,i,s){return new dt(t,1,n,U.min(),i,s,0)}static newNoDocument(t,n){return new dt(t,2,n,U.min(),U.min(),ft.empty(),0)}static newUnknownDocument(t,n){return new dt(t,3,n,U.min(),U.min(),ft.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kh{constructor(t,n=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function sa(e,t=null,n=[],i=[],s=null,r=null,o=null){return new Kh(e,t,n,i,s,r,o)}function ms(e){const t=M(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>gs(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),hs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>ne(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>ne(i)).join(",")),t.ft=n}return t.ft}function ys(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Gh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Zo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qo(e.startAt,t.startAt)&&Qo(e.endAt,t.endAt)}/**
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
 */class Kn{constructor(t,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function zh(e,t,n,i,s,r,o,a){return new Kn(e,t,n,i,s,r,o,a)}function Wh(e){return new Kn(e)}function ra(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Qh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Yh(e){return e.collectionGroup!==null}function ie(e){const t=M(e);if(t.dt===null){t.dt=[];const n=Xh(t),i=Qh(t);if(n!==null&&i===null)n.isKeyField()||t.dt.push(new Ue(n)),t.dt.push(new Ue(nt.keyField(),"asc"));else{let s=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ue(nt.keyField(),r))}}}return t.dt}function se(e){const t=M(e);if(!t._t)if(t.limitType==="F")t._t=sa(t.path,t.collectionGroup,ie(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ie(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ue(r.field,o))}const i=t.endAt?new qn(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new qn(t.startAt.position,t.startAt.inclusive):null;t._t=sa(t.path,t.collectionGroup,n,t.filters,t.limit,i,s)}return t._t}function vs(e,t,n){return new Kn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function oa(e,t){return ys(se(e),se(t))&&e.limitType===t.limitType}function aa(e){return`${ms(se(e))}|lt:${e.limitType}`}function la(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>ta(i)).join(", ")}]`),hs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>ne(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>ne(i)).join(",")),`Target(${n})`}(se(e))}; limitType=${e.limitType})`}function ws(e,t){return t.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):T.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(e,t)&&function(n,i){for(const s of ie(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Wo(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,ie(n),i)||n.endAt&&!function(s,r,o){const a=Wo(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,ie(n),i))}(e,t)}function Jh(e){return(t,n)=>{let i=!1;for(const s of ie(e)){const r=Zh(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Zh(e,t,n){const i=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ee(a,c):A()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return A()}}/**
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
 */function ca(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function ua(e){return{integerValue:""+e}}function tf(e,t){return Oh(t)?ua(t):ca(e,t)}/**
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
 */class zn{constructor(){this._=void 0}}function ef(e,t,n){return e instanceof Wn?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,t):e instanceof $e?fa(e,t):e instanceof Be?da(e,t):function(i,s){const r=ha(i,s),o=pa(r)+pa(i.gt);return ds(r)&&ds(i.gt)?ua(o):ca(i.yt,o)}(e,t)}function nf(e,t,n){return e instanceof $e?fa(e,t):e instanceof Be?da(e,t):n}function ha(e,t){return e instanceof Qn?ds(n=t)||function(i){return!!i&&"doubleValue"in i}(n)?t:{integerValue:0}:null;var n}class Wn extends zn{}class $e extends zn{constructor(t){super(),this.elements=t}}function fa(e,t){const n=ga(t);for(const i of e.elements)n.some(s=>mt(s,i))||n.push(i);return{arrayValue:{values:n}}}class Be extends zn{constructor(t){super(),this.elements=t}}function da(e,t){let n=ga(t);for(const i of e.elements)n=n.filter(s=>!mt(s,i));return{arrayValue:{values:n}}}class Qn extends zn{constructor(t,n){super(),this.yt=t,this.gt=n}}function pa(e){return Y(e.integerValue||e.doubleValue)}function ga(e){return ps(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function sf(e,t){return e.field.isEqual(t.field)&&function(n,i){return n instanceof $e&&i instanceof $e||n instanceof Be&&i instanceof Be?Zt(n.elements,i.elements,mt):n instanceof Qn&&i instanceof Qn?mt(n.gt,i.gt):n instanceof Wn&&i instanceof Wn}(e.transform,t.transform)}class rf{constructor(t,n){this.version=t,this.transformResults=n}}class _t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Yn{}function ma(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ea(e.key,_t.none()):new je(e.key,e.data,_t.none());{const n=e.data,i=ft.empty();let s=new rt(nt.comparator);for(let r of t.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new jt(e.key,i,new ht(s.toArray()),_t.none())}}function of(e,t,n){e instanceof je?function(i,s,r){const o=i.value.clone(),a=wa(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof jt?function(i,s,r){if(!Xn(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=wa(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(va(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function He(e,t,n,i){return e instanceof je?function(s,r,o,a){if(!Xn(s.precondition,r))return o;const c=s.value.clone(),u=_a(s.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,i):e instanceof jt?function(s,r,o,a){if(!Xn(s.precondition,r))return o;const c=_a(s.fieldTransforms,a,r),u=r.data;return u.setAll(va(s)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,i):function(s,r,o){return Xn(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function af(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=ha(i.transform,s||null);r!=null&&(n===null&&(n=ft.empty()),n.set(i.field,r))}return n||null}function ya(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Zt(n,i,(s,r)=>sf(s,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class je extends Yn{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jt extends Yn{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function va(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function wa(e,t,n){const i=new Map;j(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,nf(o,a,n[s]))}return i}function _a(e,t,n){const i=new Map;for(const s of e){const r=s.transform,o=n.data.field(s.field);i.set(s.field,ef(r,o,t))}return i}class Ea extends Yn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lf extends Yn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */var H,D;function cf(e){switch(e){default:return A();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function uf(e){if(e===void 0)return $t("GRPC error has no .code"),m.UNKNOWN;switch(e){case H.OK:return m.OK;case H.CANCELLED:return m.CANCELLED;case H.UNKNOWN:return m.UNKNOWN;case H.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case H.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case H.INTERNAL:return m.INTERNAL;case H.UNAVAILABLE:return m.UNAVAILABLE;case H.UNAUTHENTICATED:return m.UNAUTHENTICATED;case H.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case H.NOT_FOUND:return m.NOT_FOUND;case H.ALREADY_EXISTS:return m.ALREADY_EXISTS;case H.PERMISSION_DENIED:return m.PERMISSION_DENIED;case H.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case H.ABORTED:return m.ABORTED;case H.OUT_OF_RANGE:return m.OUT_OF_RANGE;case H.UNIMPLEMENTED:return m.UNIMPLEMENTED;case H.DATA_LOSS:return m.DATA_LOSS;default:return A()}}(D=H||(H={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class re{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Me(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Ko(this.inner)}size(){return this.innerSize}}/**
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
 */const hf=new at(T.comparator);function Jn(){return hf}const Ca=new at(T.comparator);function Zn(...e){let t=Ca;for(const n of e)t=t.insert(n.key,n);return t}function ba(e){let t=Ca;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function qt(){return qe()}function Ta(){return qe()}function qe(){return new re(e=>e.toString(),(e,t)=>e.isEqual(t))}const ff=new at(T.comparator),df=new rt(T.comparator);function it(...e){let t=df;for(const n of e)t=t.add(n);return t}const pf=new rt(O);function gf(){return pf}class mf{constructor(t,n){this.databaseId=t,this.wt=n}}function _s(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yf(e,t){return e.wt?t.toBase64():t.toUint8Array()}function vf(e,t){return _s(e,t.toTimestamp())}function oe(e){return j(!!e),U.fromTimestamp(function(t){const n=Ht(t);return new q(n.seconds,n.nanos)}(e))}function Ia(e,t){return function(n){return new B(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function wf(e){const t=B.fromString(e);return j(Af(t)),t}function Es(e,t){return Ia(e.databaseId,t.path)}function _f(e){const t=wf(e);return t.length===4?B.emptyPath():Cf(t)}function Ef(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Cf(e){return j(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Sa(e,t,n){return{name:Es(e,t),fields:n.value.mapValue.fields}}function bf(e,t){let n;if(t instanceof je)n={update:Sa(e,t.key,t.value)};else if(t instanceof Ea)n={delete:Es(e,t.key)};else if(t instanceof jt)n={update:Sa(e,t.key,t.data),updateMask:Sf(t.fieldMask)};else{if(!(t instanceof lf))return A();n={verify:Es(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Wn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $e)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Be)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw A()}(0,i))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(e,t.precondition)),n}function Tf(e,t){return e&&e.length>0?(j(t!==void 0),e.map(n=>function(i,s){let r=i.updateTime?oe(i.updateTime):oe(s);return r.isEqual(U.min())&&(r=oe(s)),new rf(r,i.transformResults||[])}(n,t))):[]}function If(e){let t=_f(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){j(i===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const d=Aa(l);return d instanceof xt&&Jo(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new Ue(ae(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,hs(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,f=l.values||[];return new qn(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const d=!l.before,f=l.values||[];return new qn(f,d)}(n.endAt)),zh(t,s,o,r,a,"F",c,u)}function Aa(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ae(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ae(t.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ae(t.unaryFilter.field);return K.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ae(t.unaryFilter.field);return K.create(r,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(e):e.fieldFilter!==void 0?function(t){return K.create(ae(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(n=>Aa(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(e):A()}function ae(e){return nt.fromServerFormat(e.fieldPath)}function Sf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Af(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Df{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&of(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=He(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=He(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=Ta();return this.mutations.forEach(s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=ma(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),it())}isEqual(t){return this.batchId===t.batchId&&Zt(this.mutations,t.mutations,(n,i)=>ya(n,i))&&Zt(this.baseMutations,t.baseMutations,(n,i)=>ya(n,i))}}class Cs{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){j(t.mutations.length===i.length);let s=ff;const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Cs(t,n,i,s)}}/**
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
 */class kf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class xf{constructor(t){this.ie=t}}function Nf(e){const t=If({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?vs(t,t.limit,"L"):t}/**
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
 */class Lf{constructor(){this.Je=new Of}addToCollectionParentIndex(t,n){return this.Je.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(kt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(kt.min())}updateCollectionGroup(t,n,i){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Of{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new rt(B.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new rt(B.comparator)).toArray()}}/**
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
 */class Rf{constructor(){this.changes=new re(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?g.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Mf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Pf{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&He(i.mutation,s,ht.empty(),q.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,it()).next(()=>i))}getLocalViewOfDocuments(t,n,i=it()){const s=qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let o=Zn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=qt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,it()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,s){let r=Jn();const o=qe(),a=qe();return n.forEach((c,u)=>{const l=i.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof jt)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),He(l.mutation,u,l.mutation.getFieldMask(),q.now())):o.set(u.key,ht.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var d;return a.set(u,new Mf(l,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const i=qe();let s=new at((o,a)=>o-a),r=it();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=i.get(c)||ht.empty();l=a.applyToLocalView(u,l),i.set(c,l);const d=(s.get(a.batchId)||it()).add(c);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,d=Ta();l.forEach(f=>{if(!r.has(f)){const p=ma(n.get(f),i.get(f));p!==null&&d.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return g.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Yh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i):this.getDocumentsMatchingCollectionQuery(t,n,i)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):g.resolve(qt());let a=-1,c=r;return o.next(u=>g.forEach(u,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,it())).next(l=>({batchId:a,changes:ba(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(i=>{let s=Zn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i){const s=n.collectionGroup;let r=Zn();return this.indexManager.getCollectionParents(t,s).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Kn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,i).next(u=>{u.forEach((l,d)=>{r=r.insert(l,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s))).next(r=>{s.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,dt.newInvalidDocument(u)))});let o=Zn();return r.forEach((a,c)=>{const u=s.get(a);u!==void 0&&He(u.mutation,c,ht.empty(),q.now()),ws(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Ff{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:oe(i.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(i){return{name:i.name,query:Nf(i.bundledQuery),readTime:oe(i.readTime)}}(n)),g.resolve()}}/**
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
 */class Vf{constructor(){this.overlays=new at(T.comparator),this.es=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const i=qt();return g.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.oe(t,n,r)}),g.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.es.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(i)),g.resolve()}getOverlaysForCollection(t,n,i){const s=qt(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return g.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new at((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let l=r.get(u.largestBatchId);l===null&&(l=qt(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return g.resolve(a)}oe(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(i.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new kf(n,i));let r=this.es.get(n);r===void 0&&(r=it(),this.es.set(n,r)),this.es.set(n,r.add(i.key))}}/**
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
 */class bs{constructor(){this.ns=new rt(z.ss),this.rs=new rt(z.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const i=new z(t,n);this.ns=this.ns.add(i),this.rs=this.rs.add(i)}us(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.cs(new z(t,n))}hs(t,n){t.forEach(i=>this.removeReference(i,n))}ls(t){const n=new T(new B([])),i=new z(n,t),s=new z(n,t+1),r=[];return this.rs.forEachInRange([i,s],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new T(new B([])),i=new z(n,t),s=new z(n,t+1);let r=it();return this.rs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new z(t,0),i=this.ns.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class z{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return T.comparator(t.key,n.key)||O(t._s,n._s)}static os(t,n){return O(t._s,n._s)||T.comparator(t.key,n.key)}}/**
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
 */class Uf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new rt(z.ss)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Df(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new z(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.ps(i),r=s<0?0:s;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new z(n,0),s=new z(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([i,s],o=>{const a=this.ys(o._s);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new rt(O);return n.forEach(s=>{const r=new z(s,0),o=new z(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{i=i.add(a._s)})}),g.resolve(this.Is(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;T.isDocumentKey(r)||(r=r.child(""));const o=new z(new T(r),0);let a=new rt(O);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(i=>{const s=this.ys(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){j(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.gs;return g.forEach(n.mutations,s=>{const r=new z(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.gs=i})}An(t){}containsKey(t,n){const i=new z(n,0),s=this.gs.firstAfterOrEqual(i);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $f{constructor(t){this.Es=t,this.docs=new at(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return g.resolve(i?i.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(t,n){let i=Jn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():dt.newInvalidDocument(s))}),g.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=Jn();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||kh(Dh(l),i)<=0||(s.has(l.key)||ws(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,i,s){A()}As(t,n){return g.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new Bf(this)}getSize(t){return g.resolve(this.size)}}class Bf extends Rf{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(i)}),g.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class Hf{constructor(t){this.persistence=t,this.Rs=new re(n=>ms(n),ys),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new bs,this.targetCount=0,this.vs=le.Pn()}forEachTarget(t,n){return this.Rs.forEach((i,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.bs&&(this.bs=n),g.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new le(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Dn(n),g.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),g.waitFor(r).next(()=>s)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const i=this.Rs.get(n)||null;return g.resolve(i)}addMatchingKeys(t,n,i){return this.Ps.us(n,i),g.resolve()}removeMatchingKeys(t,n,i){this.Ps.hs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Ps.ds(n);return g.resolve(i)}containsKey(t,n){return g.resolve(this.Ps.containsKey(n))}}/**
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
 */class jf{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new qo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Hf(this),this.indexManager=new Lf,this.remoteDocumentCache=function(i){return new $f(i)}(i=>this.referenceDelegate.xs(i)),this.yt=new xf(n),this.Ns=new Ff(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Vf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Vs[t.toKey()];return i||(i=new Uf(n,this.referenceDelegate),this.Vs[t.toKey()]=i),i}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,i){w("MemoryPersistence","Starting transaction:",t);const s=new qf(this.Ss.next());return this.referenceDelegate.ks(),i(s).next(r=>this.referenceDelegate.Os(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ms(t,n){return g.or(Object.values(this.Vs).map(i=>()=>i.containsKey(t,n)))}}class qf extends Nh{constructor(t){super(),this.currentSequenceNumber=t}}class Ts{constructor(t){this.persistence=t,this.Fs=new bs,this.$s=null}static Bs(t){return new Ts(t)}get Ls(){if(this.$s)return this.$s;throw A()}addReference(t,n,i){return this.Fs.addReference(i,n),this.Ls.delete(i.toString()),g.resolve()}removeReference(t,n,i){return this.Fs.removeReference(i,n),this.Ls.add(i.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.Ls.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,i=>{const s=T.fromPath(i);return this.qs(t,s).next(r=>{r||n.removeEntry(s,U.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(i=>{i?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class Is{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Si=i,this.Di=s}static Ci(t,n){let i=it(),s=it();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Is(t,n.fromCache,i,s)}}/**
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
 */class Gf{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,i,s){return this.ki(t,n).next(r=>r||this.Oi(t,n,s,i)).next(r=>r||this.Mi(t,n))}ki(t,n){if(ra(n))return g.resolve(null);let i=se(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=vs(n,null,"F"),i=se(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const o=it(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,vs(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,i,s){return ra(n)||s.isEqual(U.min())?this.Mi(t,n):this.Ni.getDocuments(t,i).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,i,s)?this.Mi(t,n):($o()<=N.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),la(n)),this.Bi(t,o,n,Ah(s,-1)))})}Fi(t,n){let i=new rt(Jh(t));return n.forEach((s,r)=>{ws(t,r)&&(i=i.add(r))}),i}$i(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(t,n){return $o()<=N.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",la(n)),this.Ni.getDocumentsMatchingQuery(t,n,kt.min())}Bi(t,n,i,s){return this.Ni.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Kf{constructor(t,n,i,s){this.persistence=t,this.Li=n,this.yt=s,this.qi=new at(O),this.Ui=new re(r=>ms(r),ys),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(i)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pf(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function zf(e,t,n,i){return new Kf(e,t,n,i)}async function Da(e,t){const n=M(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=it();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(i,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Wf(e,t){const n=M(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,d=l.keys();let f=g.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(y=>{const I=c.docVersions.get(p);j(I!==null),y.version.compareTo(I)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=it();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function Qf(e){const t=M(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Xf(e,t){const n=M(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class ka{constructor(){this.activeTargetIds=gf()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yf{constructor(){this.Lr=new ka,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,i){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new ka,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Jf{Ur(t){}shutdown(){}}/**
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
 */class xa{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class td{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class ed extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,i,s,r){const o=this.ho(t,n);w("RestConnection","Sending: ",o,i);const a={};return this.lo(a,s,r),this.fo(t,o,a,i).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw cs("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",i),c})}_o(t,n,i,s,r,o){return this.ao(t,n,i,s,r)}lo(t,n,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}ho(t,n){const i=Zf[t];return`${this.oo}/v1/${n}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,i,s){return new Promise((r,o)=>{const a=new yh;a.setWithCredentials(!0),a.listenOnce(ph.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ls.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),r(u);break;case ls.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new C(m.DEADLINE_EXCEEDED,"Request time out"));break;case ls.HTTP_ERROR:const l=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(I)>=0?I:m.UNKNOWN}(f.status);o(new C(p,f.message))}else o(new C(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(m.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,i,15)})}wo(t,n,i){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=fh(),o=dh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new mh({})),this.lo(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const c=s.join("");w("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,d=!1;const f=new td({Hr:y=>{d?w("Connection","Not sending because WebChannel is closed:",y):(l||(w("Connection","Opening WebChannel transport."),u.open(),l=!0),w("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),p=(y,I,E)=>{y.listen(I,S=>{try{E(S)}catch(k){setTimeout(()=>{throw k},0)}})};return p(u,Fn.EventType.OPEN,()=>{d||w("Connection","WebChannel transport opened.")}),p(u,Fn.EventType.CLOSE,()=>{d||(d=!0,w("Connection","WebChannel transport closed"),f.io())}),p(u,Fn.EventType.ERROR,y=>{d||(d=!0,cs("Connection","WebChannel transport errored:",y),f.io(new C(m.UNAVAILABLE,"The operation could not be completed")))}),p(u,Fn.EventType.MESSAGE,y=>{var I;if(!d){const E=y.data[0];j(!!E);const S=E,k=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(k){w("Connection","WebChannel received error:",k);const R=k.status;let L=function(ce){const Ct=H[ce];if(Ct!==void 0)return uf(Ct)}(R),ct=k.message;L===void 0&&(L=m.INTERNAL,ct="Unknown error status: "+R+" with message "+k.message),d=!0,f.io(new C(L,ct)),u.close()}else w("Connection","WebChannel received:",E),f.ro(E)}}),p(o,gh.STAT_EVENT,y=>{y.stat===Vo.PROXY?w("Connection","Detected buffering proxy"):y.stat===Vo.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Ss(){return typeof document<"u"?document:null}/**
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
 */function ti(e){return new mf(e,!0)}class Na{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-i);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class nd{constructor(t,n,i,s,r,o,a,c){this.Hs=t,this.vo=i,this.Vo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Na(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?($t(n.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.So===n&&this.Go(i,s)},i=>{t(()=>{const s=new C(m.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Qo(s)})})}Go(t,n){const i=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{i(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{i(()=>this.Qo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class id extends nd{constructor(t,n,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(j(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Tf(t.writeResults,t.commitTime),i=oe(t.commitTime);return this.listener.Zo(i,n)}return j(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Ef(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>bf(this.yt,i))};this.Bo(n)}}/**
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
 */class sd extends class{}{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.yt=s,this.nu=!1}su(){if(this.nu)throw new C(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.ao(t,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(m.UNKNOWN,s.toString())})}_o(t,n,i,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new C(m.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class rd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?($t(n),this.ou=!1):w("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class od{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{i.enqueueAndForget(async()=>{Ke(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=M(a);c._u.add(4),await Ge(c),c.gu.set("Unknown"),c._u.delete(4),await ei(c)}(this))})}),this.gu=new rd(i,s)}}async function ei(e){if(Ke(e))for(const t of e.wu)await t(!0)}async function Ge(e){for(const t of e.wu)await t(!1)}function Ke(e){return M(e)._u.size===0}async function La(e,t,n){if(!Vn(t))throw t;e._u.add(1),await Ge(e),e.gu.set("Offline"),n||(n=()=>Qf(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await ei(e)})}function Oa(e,t){return t().catch(n=>La(e,n,t))}async function ni(e){const t=M(e),n=Nt(t);let i=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;ad(t);)try{const s=await Xf(t.localStore,i);if(s===null){t.fu.length===0&&n.Fo();break}i=s.batchId,ld(t,s)}catch(s){await La(t,s)}Ra(t)&&Ma(t)}function ad(e){return Ke(e)&&e.fu.length<10}function ld(e,t){e.fu.push(t);const n=Nt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ra(e){return Ke(e)&&!Nt(e).No()&&e.fu.length>0}function Ma(e){Nt(e).start()}async function cd(e){Nt(e).eu()}async function ud(e){const t=Nt(e);for(const n of e.fu)t.Xo(n.mutations)}async function hd(e,t,n){const i=e.fu.shift(),s=Cs.from(i,t,n);await Oa(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ni(e)}async function fd(e,t){t&&Nt(e).Yo&&await async function(n,i){if(s=i.code,cf(s)&&s!==m.ABORTED){const r=n.fu.shift();Nt(n).Mo(),await Oa(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ni(n)}var s}(e,t),Ra(e)&&Ma(e)}async function Pa(e,t){const n=M(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const i=Ke(n);n._u.add(3),await Ge(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await ei(n)}async function dd(e,t){const n=M(e);t?(n._u.delete(2),await ei(n)):t||(n._u.add(2),await Ge(n),n.gu.set("Unknown"))}function Nt(e){return e.Iu||(e.Iu=function(t,n,i){const s=M(t);return s.su(),new id(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,i)}(e.datastore,e.asyncQueue,{Yr:cd.bind(null,e),Zr:fd.bind(null,e),tu:ud.bind(null,e),Zo:hd.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await ni(e)):(await e.Iu.stop(),e.fu.length>0&&(w("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class As{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new As(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(e,t){if($t("AsyncQueue",`${t}: ${e}`),Vn(e))return new C(m.UNAVAILABLE,`${t}: ${e}`);throw e}class pd{constructor(){this.queries=new re(t=>aa(t),oa),this.onlineState="Unknown",this.Ru=new Set}}function gd(e){e.Ru.forEach(t=>{t.next()})}class md{constructor(t,n,i,s,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new re(a=>aa(a),oa),this.rc=new Map,this.oc=new Set,this.uc=new at(T.comparator),this.cc=new Map,this.ac=new bs,this.hc={},this.lc=new Map,this.fc=le.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function yd(e,t,n){const i=Ed(e);try{const s=await function(r,o){const a=M(r),c=q.now(),u=o.reduce((f,p)=>f.add(p.key),it());let l,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Jn(),y=it();return a.Gi.getEntries(f,u).next(I=>{p=I,p.forEach((E,S)=>{S.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(I=>{l=I;const E=[];for(const S of o){const k=af(S,l.get(S.key).overlayedDocument);k!=null&&E.push(new jt(S.key,k,ia(k.value.mapValue),_t.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,E,o)}).next(I=>{d=I;const E=I.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,I.batchId,E)})}).then(()=>({batchId:d.batchId,changes:ba(l)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new at(O)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(i,s.batchId,n),await ii(i,s.changes),await ni(i.remoteStore)}catch(s){const r=Fa(s,"Failed to persist write");n.reject(r)}}function Va(e,t,n){const i=M(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=M(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const d of l.listeners)d.bu(o)&&(c=!0)}),c&&gd(a)}(i.eventManager,t),s.length&&i.sc.Wo(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function vd(e,t){const n=M(e),i=t.batch.batchId;try{const s=await Wf(n.localStore,t);$a(n,i,null),Ua(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ii(n,s)}catch(s){await jo(s)}}async function wd(e,t,n){const i=M(e);try{const s=await function(r,o){const a=M(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(j(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(i.localStore,t);$a(i,t,n),Ua(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await ii(i,s)}catch(s){await jo(s)}}function Ua(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function $a(e,t,n){const i=M(e);let s=i.hc[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.hc[i.currentUser.toKey()]=s}}async function ii(e,t,n){const i=M(e),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach((a,c)=>{o.push(i._c(c,t,n).then(u=>{if((u||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=Is.Ci(c.targetId,u);r.push(l)}}))}),await Promise.all(o),i.sc.Wo(s),await async function(a,c){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,d=>g.forEach(d.Si,f=>u.persistence.referenceDelegate.addReference(l,d.targetId,f)).next(()=>g.forEach(d.Di,f=>u.persistence.referenceDelegate.removeReference(l,d.targetId,f)))))}catch(l){if(!Vn(l))throw l;w("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const f=u.qi.get(d),p=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(d,y)}}}(i.localStore,r))}async function _d(e,t){const n=M(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const i=await Da(n.localStore,t);n.currentUser=t,function(s,r){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(m.CANCELLED,r))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ii(n,i.ji)}}function Ed(e){const t=M(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wd.bind(null,t),t}class Cd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=ti(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return zf(this.persistence,new Gf,t.initialUser,this.yt)}yc(t){return new jf(Ts.Bs,this.yt)}gc(t){return new Yf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Va(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=_d.bind(null,this.syncEngine),await dd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new pd}createDatastore(t){const n=ti(t.databaseInfo.databaseId),i=(s=t.databaseInfo,new ed(s));var s;return function(r,o,a,c){return new sd(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,s=t.asyncQueue,r=a=>Va(this.syncEngine,a,0),o=xa.C()?new xa:new Jf,new od(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(t,n){return function(i,s,r,o,a,c,u){const l=new md(i,s,r,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=M(t);w("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ge(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Ba(e,t,n){if(!n)throw new C(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Td(e,t,n,i){if(t===!0&&i===!0)throw new C(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ha(e){if(!T.isDocumentKey(e))throw new C(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ja(e){if(T.isDocumentKey(e))throw new C(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ds(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":A()}function qa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ds(e);throw new C(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Ga=new Map;class Ka{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new C(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Td("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class si{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ka({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new C(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ka(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vh;switch(n.type){case"gapi":const i=n.client;return new Ch(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ga.get(t);n&&(w("ComponentProvider","Removing Datastore"),Ga.delete(t),n.terminate())}(this),Promise.resolve()}}function Id(e,t,n,i={}){var s;const r=(e=qa(e,si))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&cs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=et.MOCK_USER;else{o=nc(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new C(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}e._authCredentials=new wh(new Bo(o,a))}}/**
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
 */class Et{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Et(this.firestore,t,this._key)}}class ks{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ks(this.firestore,t,this._query)}}class Lt extends ks{constructor(t,n,i){super(t,n,Wh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Et(this.firestore,null,new T(t))}withConverter(t){return new Lt(this.firestore,t,this._path)}}function za(e,t,...n){if(e=de(e),Ba("collection","path",t),e instanceof si){const i=B.fromString(t,...n);return ja(i),new Lt(e,null,i)}{if(!(e instanceof Et||e instanceof Lt))throw new C(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return ja(i),new Lt(e.firestore,null,i)}}function Wa(e,t,...n){if(e=de(e),arguments.length===1&&(t=Ho.R()),Ba("doc","path",t),e instanceof si){const i=B.fromString(t,...n);return Ha(i),new Et(e,null,new T(i))}{if(!(e instanceof Et||e instanceof Lt))throw new C(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(B.fromString(t,...n));return Ha(i),new Et(e.firestore,e instanceof Lt?e.converter:null,new T(i))}}/**
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
 */class Sd{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Ho.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Fa(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ad(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Da(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Dd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await kd(e);w("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(s=>Pa(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,r)=>Pa(t.remoteStore,r)),e.onlineComponents=t}async function kd(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Ad(e,new Cd)),e.offlineComponents}async function xd(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Dd(e,new bd)),e.onlineComponents}function Nd(e){return xd(e).then(t=>t.syncEngine)}class Ld{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Na(this,"async_queue_retry"),this.Wc=()=>{const n=Ss();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Ss();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Ss();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Bt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Vn(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw $t("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(t,n,i){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const s=As.createAndSchedule(this,t,n,i,r=>this.Yc(r));return this.Uc.push(s),s}zc(){this.Kc&&A()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class Qa extends si{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Ld,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xa(this),this._firestoreClient.terminate()}}function Od(e,t){const n=typeof e=="object"?e:ou(),i=typeof e=="string"?e:t||"(default)",s=nu(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Zl("firestore");r&&Id(s,...r)}return s}function Rd(e){return e._firestoreClient||Xa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Xa(e){var t;const n=e._freezeSettings(),i=function(s,r,o,a){return new Lh(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Sd(e._authCredentials,e._appCheckCredentials,e._queue,i)}/**
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
 */class Ya{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new C(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ja{constructor(t){this._methodName=t}}/**
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
 */class Za{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new C(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new C(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}}/**
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
 */const Md=/^__.*__$/;class Pd{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new jt(t,this.data,this.fieldMask,n,this.fieldTransforms):new je(t,this.data,n,this.fieldTransforms)}}function tl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class xs{constructor(t,n,i,s,r,o){this.settings=t,this.databaseId=n,this.yt=i,this.ignoreUndefinedProperties=s,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new xs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ia({path:i,oa:!1});return s.ua(t),s}ca(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ia({path:i,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return ri(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(tl(this.sa)&&Md.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Fd{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=i||ti(t)}da(t,n,i,s=!1){return new xs({sa:t,methodName:n,fa:i,path:nt.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Vd(e){const t=e._freezeSettings(),n=ti(e._databaseId);return new Fd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ud(e,t,n,i,s,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,s);sl("Data must be an object, but it was:",o,i);const a=nl(i,o);let c,u;if(r.merge)c=new ht(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const d of r.mergeFields){const f=$d(t,d,n);if(!o.contains(f))throw new C(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);jd(l,f)||l.push(f)}c=new ht(l),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new Pd(new ft(a),c,u)}function el(e,t){if(il(e=de(e)))return sl("Unsupported field value:",t,e),nl(e,t);if(e instanceof Ja)return function(n,i){if(!tl(i.sa))throw i.ha(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=el(o,i.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(e,t)}return function(n,i){if((n=de(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tf(i.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=q.fromDate(n);return{timestampValue:_s(i.yt,s)}}if(n instanceof q){const s=new q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_s(i.yt,s)}}if(n instanceof Za)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ze)return{bytesValue:yf(i.yt,n._byteString)};if(n instanceof Et){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ia(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ha(`Unsupported field value: ${Ds(n)}`)}(e,t)}function nl(e,t){const n={};return Ko(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Me(e,(i,s)=>{const r=el(s,t.ra(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function il(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof Za||e instanceof ze||e instanceof Et||e instanceof Ja)}function sl(e,t,n){if(!il(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Ds(n);throw i==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+i)}}function $d(e,t,n){if((t=de(t))instanceof Ya)return t._internalPath;if(typeof t=="string")return Hd(e,t);throw ri("Field path arguments must be of type string or ",e,!1,void 0,n)}const Bd=new RegExp("[~\\*/\\[\\]]");function Hd(e,t,n){if(t.search(Bd)>=0)throw ri(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ya(...t.split("."))._internalPath}catch{throw ri(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ri(e,t,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new C(m.INVALID_ARGUMENT,a+e+c)}function jd(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function qd(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}function Gd(e,t){const n=qa(e.firestore,Qa),i=Wa(e),s=qd(e.converter,t);return Kd(n,[Ud(Vd(e.firestore),"addDoc",i._key,s,e.converter!==null,{}).toMutation(i._key,_t.exists(!1))]).then(()=>i)}function Kd(e,t){return function(n,i){const s=new Bt;return n.asyncQueue.enqueueAndForget(async()=>yd(await Nd(n),i,s)),s.promise}(Rd(e),t)}(function(e,t=!0){(function(n){Jt=n})(ru),un(new pe("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Qa(new _h(n.getProvider("auth-internal")),new Th(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),zt(Uo,"3.8.3",e),zt(Uo,"3.8.3","esm2017")})();var zd="firebase",Wd="9.17.1";/**
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
 */zt(zd,Wd,"app");const Qd=yr({apiKey:"AIzaSyAWtYEgjMfNh-b1z0khTC1sfbl8DC6opwA",authDomain:"dummycollectiongame.firebaseapp.com",projectId:"dummycollectiongame",storageBucket:"dummycollectiongame.appspot.com",messagingSenderId:"911501171528",appId:"1:911501171528:web:a8e73335d7ef7f3bce317d"}),rl=Od(Qd);function Xd({cmpclose:e,video:t,setinitialsize:n,data:i,base:s,round:r=!1,onlocalchange:o,initalanimation:a,showcross:c,setShowcross:u}){let l=Wa(rl,"f22plugin","paperlondon.com");async function d(){const S=za(l,"f22plugin");await Gd(S,{visited:1,timestamp:q.now()})}const f=fe(null);Tt(()=>{var S;(S=f.current)==null||S.removeAttribute("controls")},[]),za(rl,"Naturally yours");let p="smvideo-container";function y(){r&&(p="smvideo-container-round")}y();async function I(){u(()=>!0),n(!0),d(),o()}return h(ot,{children:h(ot,{children:h("div",{className:`small-video-container-box ${a?"pageloadanimation":""} `,children:[c?h("div",{className:"close-button cls-sm",children:h("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:e,children:[h("g",{"clip-path":"url(#clip0_126_12)",children:h("path",{d:"M8.28259 7.01145L13.734 1.55995C14.0887 1.20535 14.0887 0.631989 13.734 0.277427C13.3794 -0.0771763 12.806 -0.0771763 12.4515 0.277427L6.99994 5.72888L1.54861 0.277427C1.19383 -0.0771763 0.620684 -0.0771763 0.26608 0.277427C-0.0886934 0.632031 -0.0886934 1.20535 0.26608 1.55995L5.71737 7.01145L0.266123 12.4629C-0.0886509 12.8175 -0.0886509 13.3909 0.266123 13.7454C0.350236 13.8298 0.450189 13.8967 0.560238 13.9423C0.670287 13.9879 0.788262 14.0113 0.907386 14.0112C1.13954 14.0112 1.37177 13.9223 1.54865 13.7454L6.99994 8.29398L12.4515 13.7454C12.5356 13.8298 12.6356 13.8967 12.7456 13.9423C12.8556 13.9879 12.9736 14.0113 13.0927 14.0112C13.3249 14.0112 13.5571 13.9223 13.734 13.7454C14.0887 13.3908 14.0887 12.8175 13.734 12.4629L8.28259 7.01145Z",fill:"white"})}),h("defs",{children:h("clipPath",{id:"clip0_126_12",children:h("rect",{width:"14",height:"14",fill:"white"})})})]})}):"",h("div",{className:p,"data-customattribute":"red",children:h("video",{src:t,autoPlay:!0,id:"videos",className:r?"sm-video circle ":"sm-video",muted:!0,loop:!0,playsInline:!0,ref:f})}),i.widgetHeader.trim().length!==0?h("h1",{className:"widgetheader",onClick:()=>I(),children:i.widgetHeader}):h("h1",{className:"widgetheader",onClick:()=>I(),children:c?"  ":h(Bl,{})})]})})})}function Yd(e,t){const[n,i]=P(()=>JSON.parse(window.localStorage.getItem(e))||t);return Tt(()=>{window.localStorage.setItem(e,JSON.stringify(n))},[n,i]),[n,i]}function ol(){const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function Jd(){const[e,t]=P(ol());return Tt(()=>{function n(){t(ol())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function Zd({dataURL:e}){var ml;let t=window.location.pathname,n;const[i,s]=P({}),[r,o]=P({}),[a,c]=Yd("initialvideo",[]),[u,l]=P(!0),[d,f]=P(!0),[p,y]=P(!1);function I(){let x=JSON.parse(localStorage.getItem("initialvideo"));if(x!=null&&x.length)x.filter(V=>V.base===t?V==null?void 0:V.count:0);else return 0}function E(x){let V=Object.keys(x),W=V.filter(pt=>{if(pt===t)return pt});return W.length||V.filter(pt=>{if(t.match(pt))return pt}),W[0]}if(Tt(()=>{async function x(){var Qe,yl;let W=await(await fetch(e)).json(),pt=(Qe=JSON.parse(localStorage.getItem("initialvideo")))==null?void 0:Qe.filter(vl=>vl.base===t?vl:0),ai=E(W);fl(W),s(W),o(W[ai][((yl=pt[0])==null?void 0:yl.count)||0])}x()},[]),document.documentElement.style.setProperty("--largecontainer-width",`${r.largecontainerwidth}px`),document.documentElement.style.setProperty("--largecontainer-height",`${r.largecontainerheight}px`),document.documentElement.style.setProperty("--bottom-css",`${r.bottomcss}px`),document.documentElement.style.setProperty("--width-smallbox",`${r.widthsmallbox}px`),document.documentElement.style.setProperty("--height-smallbox",`${r.heightsmallbox}px`),document.documentElement.style.setProperty("--text-color",`${r.textcolor}`),document.documentElement.style.setProperty(" --row-position",`${r.rowposition}`),document.documentElement.style.setProperty("--padding-x",`${r.paddingx}px`),document.documentElement.style.setProperty("--padding-y",`${r.paddingy}px`),document.documentElement.style.setProperty("--row-position",`${r.rowposition}`),document.documentElement.style.setProperty("--grid-gap",`${r.gridgap}px`),document.documentElement.style.setProperty("--small-closebuttonheight",`${r.closebuttonheight}px`),document.documentElement.style.setProperty("--small-closebuttonwidth",`${r.closebuttonwidth}px`),document.documentElement.style.setProperty("--buttonloadanimation",`${r.buttonloadanimation}`),document.documentElement.style.setProperty("--progressbarcolor",`${r.progressbarcolor}`),document.documentElement.style.setProperty("--progressbarheight",`${r.progressbarheight}px`),setTimeout(()=>{document.documentElement.style.setProperty("--color-border",r.widthcolor),document.documentElement.style.setProperty("--color-width",`${r.widthsize}px`)},r.firestylechanges*1e3),Object.entries(i).length===0)return h("div",{});const[S,k]=P(!1),[R,L]=P(""),[ct,ce]=P(""),[Ct,We]=P(!1),[ll,cl]=P(r==null?void 0:r.startStep),[tp,ep]=P({}),[np,ip]=P(!1),[ul,hl]=P(!0),[sp,rp]=P(0),oi=fe(null),{width:op}=Jd();function fl(x){let V=Object.keys(x).map(W=>({base:W,count:0}));JSON.parse(localStorage.getItem("initialvideo")).length||c(V)}const dl=fe(0);function ap(x=r==null?void 0:r.startStep){r==null||r.steps.filter(V=>V).filter(V=>{V.key===x&&(dl.current=V.answerTime,rp(V.answerTime),ep(V),L(V.stockAsset.videoUrl),ce(V.stockAsset.gifUrl),document.documentElement.style.setProperty("--f22-display",`${V.display||"block"}`))})}Tt(()=>{setInterval(()=>{var x;if(((x=oi.current)==null?void 0:x.currentTime)>dl.current&&Ct){k(!0);return}},1e3)},[ll,Ct,sp]),ap(ll);function lp(x){cl(x),k(!1)}function cp(){We(!1),k(!1),cl(r==null?void 0:r.startStep),hl(!0),f(!1)}function up(){ip(!0)}function hp(){oi.current&&(hl(x=>!x),oi.current.muted=ul)}function fp(){var V,W,pt,ai,Qe;let x={transform:`translate(${(V=r==null?void 0:r.custom)==null?void 0:V.x}px  , ${(W=r==null?void 0:r.custom)==null?void 0:W.y}px)`};switch(typeof((pt=r==null?void 0:r.custom)==null?void 0:pt.x)=="string"&&(x={transform:`translate(${(ai=r==null?void 0:r.custom)==null?void 0:ai.x}  , ${(Qe=r==null?void 0:r.custom)==null?void 0:Qe.y})`}),r==null?void 0:r.widgetPosition){case"bottomRight":n={bottom:"10px",right:"10px",...x};break;case"bottomLeft":n={bottom:"10px",left:"10px",...x};break;case"topRight":n={top:"3px",right:"10px",...x};break;case"topLeft":n={top:"3px",left:"10px",...x};break;case"bottomcenter":n={bottom:"10px",left:"50%",...x};break;case"topcenter":n={top:"3px",left:"50%",...x};break;case"leftcenter":n={left:"10px",...x};break;case"rightcenter":n={top:"3px",left:"50%",...x};break;default:return n}}if(fp(),r.toshowinmobile&&op<=600)return h("div",{});if(np)return h("div",{});function dp(){fl(i),c(x=>x.map((W,pt)=>W.base===t&&W.count<i[t].length-1?{...W,count:W.count+1}:W)),I()}setTimeout(()=>{l(!1)},1e3);const[pl,gl]=P(!!r.ismodal),[pp,gp]=P({});return Tt(()=>{setTimeout(()=>{gl(r.ismodal)},1e3)},[]),pl?h(ot,{children:[" ",pl?h(ql,{setmodal:gl,values:pp,setvalues:gp,modalformformat:(ml=r==null?void 0:r.modal)==null?void 0:ml.dummy}):h("div",{})," "]}):h("div",{className:u?"small-video-container-box-parent smsmsmhidden  ":"small-video-container-box-parent ",style:n,children:[h("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');"}),Ct?h(jl,{cssval:n,handleCloseforlargesize:cp,video:R,videoEl:oi,handlemuted:hp,muted:ul,handleChange:lp,show:S,buttons:tp}):h(Xd,{showcross:p,setShowcross:y,base:t,cmpclose:up,data:r,setinitialsize:We,video:ct,round:r==null?void 0:r.rounded,onlocalchange:dp,initalanimation:d})]})}const wp="";kl("f22-plugin",e=>h(Zd,{dataURL:e.getAttribute("dataURL")||""}),["dataURL"],()=>console.log("F22 Plugin cleanup"));let al=document.createElement("f22-plugin");al.setAttribute("dataUrl","https://f22videoplugin.s3.ap-northeast-1.amazonaws.com/paperlondon/paperlondon.json"),document.body.append(al)})();
