(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(360),n(91)),c=n(109),l=n.n(c),f=n(232),d=n(551),m=n(552),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"px-0 py-0"},[n("div",{staticClass:"header"},[n("div",{staticClass:"inner-header flex"},[n("v-row",[n("v-col",{staticClass:"px-10",attrs:{cols:"12"}},[404===t.error.statusCode?n("h1",[t._v("\n              "+t._s(t.pageNotFound)+"\n            ")]):n("h1",[t._v("\n              "+t._s(t.otherError)+"\n            ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"mx-0 px-0 white--text",attrs:{"x-large":"",color:"green","nuxt-link":"",to:"/"}},[t._v("Home\n            ")])],1)],1)],1),t._v(" "),n("div",[n("svg",{staticClass:"waves",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[n("defs",[n("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),t._v(" "),n("g",{staticClass:"parallax"},[n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7)"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"7",fill:"#fff"}})])])])])])],1)}),[],!1,null,"610b99dc",null);e.a=component.exports;l()(component,{VBtn:f.a,VCol:d.a,VRow:m.a})},218:function(t,e,n){"use strict";n(456);var r=n(1),o=n(108);r.a.use(o.a),e.a=new o.a({icons:{iconfont:"fa"}})},219:function(t,e,n){"use strict";var r=n(1),o=n(323);r.a.directive("katex",o.a)},220:function(t,e,n){"use strict";n(6),n(12),n(52),n(32);e.a=function(t,e){function n(){return JSON.parse(localStorage["katex-status"])[window.location.href]}e("execute",(function(){try{!function(){try{return"katex-status"in localStorage}catch(t){console.log(t)}}()?function(){localStorage["katex-status"]=[];var t={};t[window.location.href]=[];var e=document.getElementsByClassName("katex-html");Array.from(e).forEach((function(e,i){t[window.location.href].push(1)}));var n=JSON.stringify(t);localStorage.setItem("katex-status",n)}():function(){try{return window.location.href in JSON.parse(localStorage["katex-status"]||"null")}catch(t){console.log(t)}}()?(console.log("load"),n()):(console.log("add"),function(){var t=[],e=document.getElementsByClassName("katex-html");Array.from(e).forEach((function(e,i){t.push(1)}));var n=JSON.parse(localStorage["katex-status"]);n[window.location.href]=t;var r=JSON.stringify(n);localStorage.setItem("katex-status",r)}())}catch(t){console.log(t)}})),e("getKatexStatus",n)}},221:function(t,e,n){"use strict";var r=n(72);n(308),n(309);r.default.apps.length||r.default.initializeApp({apiKey:"AIzaSyDqVG3gKZR1sQDLLKHf9oit_lVVjE4nB5o",authDomain:"mva-fb-2eb01.firebaseapp.com",projectId:"mva-fb-2eb01",storageBucket:"mva-fb-2eb01.appspot.com",messagingSenderId:"380430565106",appId:"1:380430565106:web:d03b7124b5c8f082be5a6b",measurementId:"G-J0JGDNBBCM"});var o={app:r.default.app,auth:r.default.auth,firestore:r.default.firestore};e.a=o},222:function(t,e,n){"use strict";var r=n(1),o=n(322);n(536);r.a.component("VueContext",o.a)},223:function(t,e,n){"use strict";var r=n(11),o=(n(63),n(6),n(12),n(52),n(32),n(41),n(58),n(53),n(29),n(137),n(33),n(78),n(99),n(85),n(72));n(308),n(309);o.default.apps.length||o.default.initializeApp({apiKey:"AIzaSyDqVG3gKZR1sQDLLKHf9oit_lVVjE4nB5o",authDomain:"mva-fb-2eb01.firebaseapp.com",projectId:"mva-fb-2eb01",storageBucket:"mva-fb-2eb01.appspot.com",messagingSenderId:"380430565106",appId:"1:380430565106:web:d03b7124b5c8f082be5a6b",measurementId:"G-J0JGDNBBCM"});var c={app:o.default.app,auth:o.default.auth,firestore:o.default.firestore},l=c.auth(),f=window.innerWidth-15,d=[],m=[],h=[],v=[],x=[];function y(){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,document.getElementsByClassName("katex");case 2:return d=t.sent,d=Array.from(d),t.next=6,document.getElementsByClassName("katex-html");case 6:return h=t.sent,m=Array.from(h),t.next=10,document.getElementsByClassName("katex-mathml");case 10:x=t.sent,v=Array.from(x);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.forEach((function(t,e){if(d[e].children[1].children.length>0){"katex-display"===d[e].parentElement.classList[0]&&d[e].parentElement.classList.add("kd-".concat(e)),d[e].classList.add("k-".concat(e));var n=Array.from(d[e].children);n.forEach((function(t,r){"katex-mathml"===t.className?n[r].classList.add("km-".concat(e)):"katex-html"===t.className&&n[r].classList.add("kh-".concat(e))}))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0,n=0,r=0,o=!0,c=0,!1,l=0,m.forEach((function(t,f){var d=Array.from(t.children);e=0,n=0,r=0,d.forEach((function(base){"base"===base.className&&e++,Array.from(base.children).forEach((function(t){"="===t.textContent&&n++,"⇒"===t.textContent&&r++}))})),e>2&&(n>1||r>1)&&(t.classList.add("horizontal"),c=0,l=0,o=!0,d.forEach((function(base,e){Array.from(base.children).forEach((function(n,f){0===r?(t.classList.add("equation"),o?"="===n.textContent&&(o=!1,c=e):"="===n.textContent?(!1,l=e):!0):r>0&&t.classList.add("logical")}))})),0!==l&&d.forEach((function(base,t){if(t<c)base.classList.add("leftmost");else if(t==c)base.classList.add("leftmost","phrase_end");else if(t>c&&t<=l){Array.from(base.children).forEach((function(t,e){"="===t.textContent&&base.classList.add("phrase_end")}))}else l<t&&base.classList.add("rightmost")})))}));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Array.from(document.getElementsByClassName("katex-html")).forEach((function(t,e){var n=t.getElementsByClassName("mtable");if(Array.from(n).forEach((function(t,e){if("minner"===t.parentElement.parentElement.className){var n=Array.from(t.children);n.forEach((function(e,n){"col-align-c"===e.className&&(!0,t.classList.add("matrix-mtable"),t.parentElement.parentElement.classList.add("matrix"))}))}})),void 0===t.getElementsByClassName("mtable")[0]);else{var r=Array.from(t.getElementsByClassName("mtable")),o=!1,c=!1,l=!1;r.forEach((function(n,r){if(n.classList.contains("matrix-mtable"));else{var f=Array.from(n.children);if(f.forEach((function(t){"col-align-r"===t.className&&(c=!0),"col-align-l"===t.className&&(l=!0)})),!0===c&&!0===l&&(o=!0),o){t.classList.add("multi-line");var d=[],m=[];f.forEach((function(t){"col-align-r"===t.className?d.push(t):"col-align-l"===t.className&&m.push(t)}));var h=0,v=0;d.length>1?d.forEach((function(t,i){h=0===i?1:0,t.getElementsByClassName("mord").forEach((function(t,i){t.textContent.length>0&&"mord"===t.className&&t.clientHeight>1&&t.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes("col")&&(t.classList.add("formula-".concat(e),"row-".concat(h),"left"),h++)}))})):d.forEach((function(t,i){Array.from(t.getElementsByClassName("mord")).forEach((function(t,i){t.textContent.length>0&&"mord"===t.className&&t.clientHeight>1&&t.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes("col")&&(t.classList.add("formula-".concat(e),"row-".concat(h),"left"),h++)}))})),m.length>1?m.forEach((function(t,i){v=0===i?1:0,t.getElementsByClassName("mord").forEach((function(t){t.textContent.length>0&&"mord"===t.className&&t.clientHeight>1&&t.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes("col")&&(t.classList.add("formula-".concat(e),"row-".concat(v),"right"),v++)}))})):m.forEach((function(t){var n=Array.from(t.getElementsByClassName("mord"));39===e&&n.forEach((function(t,i){Array.from(t.children).forEach((function(t){}))})),n.forEach((function(t){t.textContent.length>0&&"mord"===t.className&&t.clientHeight>1&&t.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes("col")&&!t.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("matrix-mtable")&&(t.classList.add("formula-".concat(e),"row-".concat(v),"right"),v++)}))})),console.log(h,v),h===v?t.classList.add("symmetric"):0===h&&v>0?t.classList.add("straight"):t.classList.add("asymmetric")}}}))}}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=document.getElementsByClassName("overflow-x");Array.from(t).forEach((function(t){t.style.overflowX="auto",t.style.overflowY="visible",t.style.position="contents"}))},C=function(t,e){var n=JSON.parse(localStorage["katex-status"]);n[window.location.href][t]=e;var r=JSON.stringify(n);localStorage.setItem("katex-status",r)},A=function(){var t=[],e=document.getElementsByClassName("katex-html"),n=Array.from(e);return n.forEach((function(e,r){var o=Array.from(e.children),c=0;o.forEach((function(base,t){c+=base.offsetWidth})),c>f&&(n[r].classList.add("overflow-x"),t.push(r))})),t},S=function(t){var e=[];return t.forEach((function(t,n){t.classList.contains("phrase_end")&&e.push(n)})),e},V=function(t){var e=[];return t.forEach((function(t,n){t.classList.contains("leftmost")&&e.push(n)})),e};function B(t){return R.apply(this,arguments)}function R(){return R=Object(r.a)(regeneratorRuntime.mark((function t(e){var n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return!(n.length>1&&void 0!==n[1])||n[1],t.next=3,e.forEach((function(t){var e=Array.from(m[t].children),n=(window.innerWidth,0),r=[],o=[],c=[];console.log("window.width = ",window.innerWidth,"katex-html-width = ",m[t].scrollWidth);var l=S(e),d=V(e);m[t].children[d.slice(-1)[0]];if(l.forEach((function(t){e[t+1].children[0].outerHTML=e[t+1].children[0].outerHTML+'<span class="mrel">=</span>',Array.from(e[t].children).slice(-2)[0].remove()})),e.length>1){e.forEach((function(t,e){o.push(t.offsetWidth),c.push(t.offsetHeight),n+=t.clientWidth,f<=n&&(n=t.clientWidth,r.push(e))})),console.log(e),r.forEach((function(t,n){if(console.log("chapter: ",t),t!=r.slice(-1)[0]){console.log("chapterの最後の要素ではない");for(var o=function(i){if(console.log("i=",i),i==t&&e[i].classList.contains("phrase_end")&&e[i-1].classList.contains("phrase_end")){console.log("@@@if@@@");var br=document.createElement("br");br.className="".concat(i),e[i].before(br)}else if(i==t&&e[i].classList.contains("phrase_end")&&!e[i-1].classList.contains("phrase_end")){console.log("@@@elif1@@@");var n=document.createElement("br");n.className="".concat(i),e[l[l.indexOf(i)-1]].after(n)}else if(i!=t||e[i].classList.contains("phrase_end")){console.log("@@@else@@@"),document.createElement("br").className="".concat(i)}else{var r;console.log("@@@elif2@@@:chapter",t),console.log(S(e)),S(e).forEach((function(t){console.log(i,t),t<i&&(r=t)})),console.log("tmp",r);var o=document.createElement("br");o.className="".concat(i),console.log([r,e]),e[r+1].before(o)}},i=t;i<r[n+1];i++)o(i)}else{console.log("chapterの最後の要素");for(var c=function(n){if(console.log("i=",n),n==t&&e[n].classList.contains("phrase_end")){console.log("+++if+++");var br=document.createElement("br");br.className="".concat(n),e[l[l.indexOf(n)-1]].after(br)}else if(n==t){var r;console.log("+++elif+++"),S(e).forEach((function(t){t<n&&(r=t)})),console.log("tmp",r);var o=document.createElement("br");o.className="".concat(n),e[r+1].before(o)}},f=t;f<e.length;f++)c(f)}})),console.log("chapters: ",r),console.log("phrase_end: ",S(e))}else e.length}));case 3:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function M(t){var e=document.querySelectorAll('[class~="formula-'.concat(t,'"')),n=[],r=[],o=[],c=[],l=null,f=null,d=null;if(m[t].classList.contains("collapsed"));else if(e.forEach((function(t,i){t.classList.contains("left")?(n.push(t.clientHeight),o.push(t)):(r.push(t.clientHeight),c.push(t)),0,0})),o.forEach((function(t,e){0==e&&(l=t),e<o.length-1&&t.classList.add("gradation")})),c.forEach((function(t,e){e<c.length-1?(t.classList.add("gradation"),t.style.display="none",t.previousElementSibling.style.display="none"):d=t})),f=c[1],null!=l&&null!=d){var h=d.parentElement.style.top;f.parentElement.style.top;d.parentElement.style.top=l.parentElement.style.top;var v=Math.max(l.clientHeight,d.clientHeight);m[t].style.height="".concat(v,"px"),m[t].classList.add("collapsed","".concat(h)),m[t].classList.remove("expanded")}}function O(t){var e=0,n=0,r=0,o=Array.from(m[t].children);o.forEach((function(t,o){t.classList.contains("leftmost")?e=o:t.classList.contains("rightmost")&&(n=o,r++)})),n=n-r+1,o.forEach((function(t,r){e<r&&r<n&&(t.style.display="none",t.classList.add("gradation"))})),m[t].classList.remove("expanded"),m[t].classList.add("collapsed")}function j(t){document.getElementsByClassName("katex-html");var e=document.querySelectorAll('[class~="formula-'.concat(t,'"'));e.forEach((function(t,n){n>0&&n<e.length-1&&(t.style.display="none")}))}function H(t){var e=document.querySelectorAll('[class~="formula-'.concat(t,'"')),n=[],r=[],o=[],c=[],l=[],f=[],d=[],h=[],v=0;e.forEach((function(t,e){t.classList.contains("left")?(n.push(t.clientHeight),o.push(t)):(v++,r.push(t.clientHeight),c.push(t))}));var x=[];o.length!=c.length?x.push(o.slice(0,v-1),o.slice(v-1)):x.push(o),x.forEach((function(t,e){t.forEach((function(n,r){r==t.length-1&&f.push(n),e==x.length-1&&0==r&&l.push(n);var o=n.className.match(/row-(\d)/)[1];0!=o&&o!=v-1&&(n.style.display="none",n.previousElementSibling.style.display="none",n.classList.add("gradation"))}))})),c.forEach((function(t,e){0==e?d.push(t):e>0&&e<c.length-1?(t.style.display="none",t.previousElementSibling.style.display="none"):h.push(t)}));var y=0,E=0;0!=h.length&&(y=h[0].parentElement.style.top,E=l[0].parentElement.nextElementSibling.style.top),f.forEach((function(t){t.parentElement.style.top=E})),h.forEach((function(t){t.parentElement.style.top=E}));var w=0,k=0;l.forEach((function(t,i){w=0==i?t.clientHeight:Math.max(w,t.clientHeight)})),d.forEach((function(t,i){w=Math.max(w,t.clientHeight)})),f.forEach((function(t,i){k=0==i?t.clientHeight:Math.max(k,t.clientHeight)})),h.forEach((function(t,i){k=Math.max(k,t.clientHeight)})),m[t].style.height="".concat(w+k,"px"),m[t].classList.add("collapsed","".concat(y)),m[t].classList.remove("expanded")}function I(t,e,n){var r=document.createElement("div");return r.className="conmenu",r.innerHTML="\n  <ul>\n    <li>No.".concat(t,"</li>\n    <li>").concat(e,"</li>\n    <li>").concat(n,'</li>\n    <li>\n      <ul>\n        <li>Menu4-0</li>\n        <li>Menu4-1</li>\n        <li>Menu4-2</li>\n      </ul>\n    </li>\n    <li><a href="https://www.google.co.jp" target="_blank">Google</a></li>\n\n  </ul>'),r.style.zIndex="99",r}function U(){m.forEach((function(t,e){t.class="area",t.setAttribute("oncontextmenu","return false");var n=I(e,v[e].outerText,"a");t.after(n),t.addEventListener("contextmenu",(function(t){n.style.left=t.pageX+"px",n.style.top=t.pageY+"px",n.classList.add("on")}))}));var t=document.getElementsByClassName("conmenu");document.body.addEventListener("click",(function(){Array.from(t).forEach((function(t){t.classList.contains("on")&&t.classList.remove("on")}))}))}function z(t,e,n){var r=document.createElement("div");r.classList.add("switch","katex-toolbar","kib-".concat(t),"py-1");var o="";o=m[t].classList.contains("symmetric")?"symmetric":m[t].classList.contains("asymmetric")?"asymmetric":m[t].classList.contains("horizontal")?"horizontal":m[t].classList.contains("horizontal-combined")?"horizontal-combined":"none",r.innerHTML=function(t,e,n){var r="checked",o="expand-btn";return e||(r=""),n||(o="collapse-btn"),'<label class="switch__label">\n      <input type="checkbox" '.concat(r,' class="switch__input katex-extension-button ').concat(t," ").concat(o,'"/>\n      <span class="switch__content"></span><span class="switch__circle"></span></label>')}(o,e,n),d[t].parentElement.classList.contains("katex-display")?d[t].parentElement.parentElement.after(r):(r.style.display="inline",r.style.position="relative",d[t].after(r))}function T(t){var e=document.getElementsByClassName("katex-html"),n=document.querySelectorAll('[class~="formula-'.concat(t,'"')),r=[],o=[];if(e[t].classList.contains("expanded"));else{e[t].style.height="",e[t].classList.remove("collapsed"),e[t].classList.add("expanded");var c="",l=Array.from(e[t].classList),pattern=/\w+em/g;l.forEach((function(n,r){n.match(pattern)&&(c=e[t].classList[r])})),n.length,n.forEach((function(t,i){t.style.display="",t.previousElementSibling.style.display="",i==n.length-1&&(t.parentElement.style.top=c),t.classList.contains("left")?r.push(t):o.push(t)}))}}function D(t){var e=0,n=0,r=0;Array.from(m[t].children).forEach((function(t,o){t.classList.contains("leftmost")?e=o:t.classList.contains("rightmost")&&(n=o,r++)})),n=n-r+1,Array.from(m[t].children).forEach((function(t,r){e<r&&r<n&&(t.style.display="")})),m[t].classList.remove("collapsed"),m[t].classList.add("expanded")}function J(t){var e=document.getElementsByClassName("katex-html"),n=document.querySelectorAll('[class~="formula-'.concat(t,'"'));if(e[t].classList.contains("expanded"));else{e[t].style.height="",e[t].classList.remove("collapsed"),e[t].classList.add("expanded");var r="";Array.from(e[t].classList).forEach((function(n,o){n.match(/\w+em/g)&&(r=e[t].classList[o])}));var o=[];n.forEach((function(t){o.push(t.className.match(/row-(\d)/)[1])}));var c=Math.max.apply(Math,o);n.forEach((function(t,i){t.style.display="",t.previousElementSibling.style.display="",t.className.match(/row-(\d)/)[1]==c&&(t.parentElement.style.top=r)}))}}function P(){l.currentUser&&c.firestore().collection("log").doc(l.currentUser.uid).get().then((function(t){return t.exists}))}function W(){l.currentUser&&c.firestore().collection("log").doc(l.currentUser.uid).set({displayName:l.currentUser.displayName,email:l.currentUser.email,uid:l.currentUser.uid}).then((function(){}))}function $(t,e){var n=Array.from(document.getElementsByClassName("katex-mathml"));c.firestore().collection("log").doc(l.currentUser.uid).collection("history").doc(function(t){var strong=1e3;t&&(strong=t);return(new Date).getTime().toString(16)+Math.floor(strong*Math.random()).toString(16)}(811)).set({action:e,date:Date(),href:window.location.href,id:t,tex:n[t].innerText,timestamp:Date.now()}).then((function(){}))}function K(t,e,n,r){return F.apply(this,arguments)}function F(){return(F=Object(r.a)(regeneratorRuntime.mark((function t(element,e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"symmetric"==n?element.addEventListener("change",(function(t){element.checked?(t.target.classList.remove("collapse-btn"),t.target.classList.add("expand-btn"),t.target.classList.remove("scbtn-".concat(e)),t.target.classList.add("sebtn-".concat(e)),H(e),$(e,"collapse"),C(e,1)):(t.target.classList.remove("expand-btn"),t.target.classList.add("collapse-btn"),t.target.classList.remove("sebtn-".concat(e)),t.target.classList.add("scbtn-".concat(e)),J(e),$(e,"expand"),C(e,0))})):"asymmetric"==n?element.addEventListener("change",(function(t){element.checked?(t.target.classList.remove("collapse-btn"),t.target.classList.add("expand-btn"),t.target.classList.remove("acbtn-".concat(e)),t.target.classList.add("aebtn-".concat(e)),M(e),$(e,"collapse"),C(e,1)):(t.target.classList.remove("expand-btn"),t.target.classList.add("collapse-btn"),t.target.classList.remove("aebtn-".concat(e)),t.target.classList.add("acbtn-".concat(e)),T(e),$(e,"expand"),C(e,0))})):"horizontal"==n&&element.addEventListener("change",(function(t){element.checked?(t.target.classList.remove("collapse-btn"),t.target.classList.add("expand-btn"),t.target.classList.remove("hcbtn-".concat(e)),t.target.classList.add("hebtn-".concat(e)),O(e),$(e,"collapse"),C(e,1)):(t.target.classList.remove("expand-btn"),t.target.classList.add("collapse-btn"),t.target.classList.remove("hebtn-".concat(e)),t.target.classList.add("hcbtn-".concat(e)),D(e),$(e,"expand"),C(e,0))}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(){return Y.apply(this,arguments)}function Y(){return Y=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,l,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(f.length>0&&void 0!==f[0])||f[0],n=!(f.length>1&&void 0!==f[1])||f[1],r=f.length>2?f[2]:void 0,console.log("%cRun katex-extension-test.js","color: green; font-weight: bold; border: 1px solid green; padding: 4px;"),P(),W(),t.next=7,y();case 7:return t.next=9,w();case 9:return t.next=11,L();case 11:return t.next=13,_();case 13:return t.next=15,k();case 15:if(o=A(),N(),!n){t.next=20;break}return t.next=20,B(o);case 20:I(),U(),e&&(m.forEach((function(t,e){t.classList.contains("symmetric")?1==r[e]?(H(e),z(e,1,!0)):z(e,0,!1):t.classList.contains("straight")?j(e):t.classList.contains("asymmetric")?1==r[e]?(M(e),z(e,1,!0)):z(e,0,!1):t.classList.contains("horizontal")?1==r[e]?(O(e),z(e,1,!0)):z(e,0,!1):t.classList.contains("horizontal-combined")})),c=Array.from(document.getElementsByClassName("katex-extension-button")),l=null,c.forEach((function(t,e){l=t.classList[2],K(t,t.parentElement.parentElement.classList[2].split("-")[1],l)})));case 23:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}e.a=function(t,e){e("modifyKatex",G)}},224:function(t,e,n){"use strict";(function(t){n(1).a.use({install:function(e){var n=e.observable({width:0,height:0,pageYOffset:0}),r=function(){n.pageYOffset=t.pageYOffset},o=function(){n.width=document.documentElement.clientWidth,n.height=t.innerHeight};t.addEventListener("scroll",r),t.addEventListener("resize",o),r(),o(),e.prototype.$window=n}})}).call(this,n(64))},225:function(t,e,n){"use strict";var r=n(1),o=n(315),c=n.n(o);n(538);r.a.use(c.a)},226:function(t,e,n){"use strict";var r=n(1),o=n(316);r.a.component("vue-clock",o.a)},227:function(t,e,n){"use strict";var r=n(1),o=n(317);r.a.component("enlargeable-image",o.a)},228:function(t,e,n){"use strict";var r=n(1),o=n(229);r.a.component("MultiSplitPane",o.a),r.a.component("Pane",o.b)},230:function(t,e,n){"use strict";var r=n(1),o=n(318),c=n.n(o);n(540),r.a.use(c.a)},272:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("186a0248",content,!0,{sourceMap:!1})},296:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("56b15182",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";var r=n(11),o=(n(63),{data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"},{icon:"mdi-hexagon-slice-6",title:"katex",to:"/katex"},{icon:"mdi-trash-can-outline",title:"trash",to:"/trash"}],usermenus:[{icon:"mdi-account",title:"ユーザー情報",to:"/profile",color:"primary"},{icon:"mdi-cog",title:"設定",to:"/config"},{icon:"mdi-logout-variant",title:"ログアウト",to:"/logout",color:"red"}],sidemenu:[{header:!0,title:"",hiddenOnCollapse:!0},{href:"/",title:"Dashboard",icon:"fa fa-user"},{href:"/katex",title:"KaTeX",icon:"fas fa-book-open"},{href:"/trash",title:"Trash",icon:"fas fa-trash"},{href:"/charts",title:"Charts",icon:"fa fa-chart-area",child:[{href:"/charts/sublink",title:"Sub Link"}]}],miniVariant:!0,right:!0,rightDrawer:!1,title:"mva"}},created:function(){},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:case"end":return e.stop()}}),e)})))()}}}),c=(n(398),n(91)),l=n(109),f=n.n(l),d=n(553),m=n(560),h=n(554),v=n(211),x=n(232),y=n(561),E=n(555),w=n(210),k=n(179),L=n(212),_=n(139),N=n(213),C=n(105),A=n(556),S=n(558),V=n(559),B=n(557),R=n(178),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{staticClass:"d-print-none",attrs:{"mini-variant":t.miniVariant,clipped:"",color:"grey darken-2","mobile-breakpoint":"600",fixed:"",src:"https://pro-foto.jp/free/img/images_big/C01015-001H.jpg",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),t._v(" "),n("v-list-item",[n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-double-"+(t.miniVariant?"right":"left")))])],1)],1)],2)],1),t._v(" "),n("v-app-bar",{staticClass:"d-print-none",attrs:{color:"white","clipped-left":"",fixed:"",short:"","elevate-on-scroll":"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"tiny",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),t.$store.state.authUser?n("div",[n("span",{staticClass:"mr-3 hidden-xs",domProps:{textContent:t._s(t.$store.state.authUser.displayName+"さん")}}),t._v(" "),t.$store.state.authUser?n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{elevation:"2",icon:""}},"v-btn",o,!1),r),[n("v-avatar",{attrs:{size:"40"}},[n("v-img",{attrs:{src:t.$store.state.authUser.photoURL}})],1)],1)]}}],null,!1,495150910)},[t._v(" "),n("v-list",t._l(t.usermenus,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",{attrs:{color:e.color}},[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1):t._e()],1):t._e()],1),t._v(" "),n("v-main",[n("v-container",{staticStyle:{},attrs:{fluid:""}},[n("Nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{fixed:"",color:"grey darken-2",src:"https://3.bp.blogspot.com/-cEA4AXbk3e4/V5XcozPUGnI/AAAAAAAA8qg/MdkPyz2mcwAAe2bHLdcECN7j0o0cnLbMQCLcB/s2000/bg_abstract1_blue.png",dark:"",app:""}},[n("v-spacer"),n("span",[t._v("© "+t._s((new Date).getFullYear()))]),t._v(" "),n("span",[t._v(t._s(t.title))])],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:d.a,VAppBar:m.a,VAppBarNavIcon:h.a,VAvatar:v.a,VBtn:x.a,VContainer:y.a,VFooter:E.a,VIcon:w.a,VImg:k.a,VList:L.a,VListItem:_.a,VListItemAction:N.a,VListItemContent:C.a,VListItemTitle:C.b,VMain:A.a,VMenu:S.a,VNavigationDrawer:V.a,VSpacer:B.a,VToolbarTitle:R.a})},321:function(t,e,n){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome2",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire2",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"mva"}}},o=n(91),c=n(109),l=n.n(c),f=n(553),d=n(560),m=n(561),h=n(555),v=n(210),x=n(556),y=n(178),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{"clipped-left":t.clipped,color:"grey lighten-2",fixed:"",app:""}},[n("v-icon",{staticClass:"pr-2",attrs:{color:"green darken-2"}},[t._v("fas fa-chalkboard-teacher")]),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("Nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,color:"grey lighten-2",app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a,VAppBar:d.a,VContainer:m.a,VFooter:h.a,VIcon:v.a,VMain:x.a,VToolbarTitle:y.a})},328:function(t,e,n){n(329),t.exports=n(330)},352:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store,t.route,t.redirect}},360:function(t,e,n){"use strict";n(272)},361:function(t,e,n){var r=n(20)(!1);r.push([t.i,"h1[data-v-610b99dc]{font-size:20px}",""]),t.exports=r},394:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("e622d370",content,!0,{sourceMap:!1})},395:function(t,e,n){var r=n(20)(!1);r.push([t.i,".header{position:static;text-align:center;background:linear-gradient(60deg,#14831b,#c1ffd9);color:#fff}.logo{width:50px;fill:#fff;padding-right:15px;display:inline-block;vertical-align:middle}.inner-header{height:65vh;width:100%;margin:0;padding:0}.wide-width{width:100vh}.flex{display:flex;justify-content:center;align-items:center;text-align:center}.waves{width:100%;height:15vh;margin-bottom:-7px;min-height:100px;max-height:150px}.content,.waves{position:relative}.content{height:20vh;text-align:center;background-color:#fff}.parallax>use{-webkit-animation:move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;animation:move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite}.parallax>use:first-child{-webkit-animation-delay:-2s;animation-delay:-2s;-webkit-animation-duration:7s;animation-duration:7s}.parallax>use:nth-child(2){-webkit-animation-delay:-3s;animation-delay:-3s;-webkit-animation-duration:10s;animation-duration:10s}.parallax>use:nth-child(3){-webkit-animation-delay:-4s;animation-delay:-4s;-webkit-animation-duration:13s;animation-duration:13s}.parallax>use:nth-child(4){-webkit-animation-delay:-5s;animation-delay:-5s;-webkit-animation-duration:20s;animation-duration:20s}@-webkit-keyframes move-forever{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}@keyframes move-forever{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}",""]),t.exports=r},396:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("c8444cf0",content,!0,{sourceMap:!1})},397:function(t,e,n){var r=n(20)(!1);r.push([t.i,'.katex-toolbar{color:#4e4e4e;font-family:"Yuppy SC"!important;display:flex;align-items:center;justify-content:center}@-webkit-keyframes bg-color{0%{background-color:#e74c3c}20%{background-color:#f1c40f}40%{background-color:#1abc9c}60%{background-color:#3498db}80%{background-color:#9b59b6}to{background-color:#e74c3c}}@keyframes bg-color{0%{background-color:#e74c3c}20%{background-color:#f1c40f}40%{background-color:#1abc9c}60%{background-color:#3498db}80%{background-color:#9b59b6}to{background-color:#e74c3c}}@-webkit-keyframes katex-color{0%{background-color:#fff}20%{background-color:#fff9e0}40%{background-color:#fff6d0}60%{background-color:#ffefb1}80%{background-color:#ffea97}to{background-color:#ffe680}}@keyframes katex-color{0%{background-color:#fff}20%{background-color:#fff9e0}40%{background-color:#fff6d0}60%{background-color:#ffefb1}80%{background-color:#ffea97}to{background-color:#ffe680}}.gradation{animation:katex-color 3s;-webkit-animation:katex-color 3s}.switch__label{width:37px;position:relative;display:inline-block;padding-top:3px}.switch__content{display:block;cursor:pointer;position:relative;border-radius:7px;height:14px;background-color:rgba(184,98,98,.26);transition:all .1s .4s;overflow:hidden}.switch__content:after{content:"";display:block;position:absolute;width:0;height:100%;top:0;left:0;border-radius:7px;transition:all .5s}.switch__input{display:none}.switch__circle{display:block;top:0;left:0;position:absolute;width:20px;height:20px;border-radius:10px;background-color:#f86565;transition:all .5s;-webkit-box-shadow:0 2px 2px #ccc}.switch__input:checked~.switch__circle{left:18px;background-color:#3ec497}.switch__input:checked~.switch__content{border-color:transparent;transition:all 0s}.switch__input:checked~.switch__content:after{background-color:rgba(55 190 176/50%);width:1000%}.conmenu{font-size:10pt;word-wrap:break-all;width:130px;background-color:#deffc8;border:1px solid #999;display:none;position:fixed}.conmenu.on{display:block}.conmenu ul{list-style:none;margin:0;padding:5px}',""]),t.exports=r},398:function(t,e,n){"use strict";n(296)},399:function(t,e,n){var r=n(20)(!1);r.push([t.i,".tiny{font-size:10pt}",""]),t.exports=r},436:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"getters",(function(){return f})),n.d(e,"actions",(function(){return d})),n.d(e,"mutations",(function(){return m}));var r=n(107),o=n(11),c=(n(63),["allClaims"]),l=function(){return{authUser:{}}},f={isLoggedIn:function(t){return!!t.authUser}},d={nuxtServerInit:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l,f,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.dispatch,!(e.res&&e.res.locals&&e.res.locals.user)){n.next=6;break}return l=e.res.locals.user,f=l.allClaims,d=Object(r.a)(l,c),console.info("Auth User verified on server-side. User: ",d,"Claims:",f),n.next=6,o("onAuthStateChanged",{authUser:d,claims:f});case 6:case"end":return n.stop()}}),n)})))()},onAuthStateChanged:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.commit,c=e.authUser,l=e.claims,c){r.next=7;break}return r.next=5,n.$router.push("/login");case 5:return o("RESET_STORE"),r.abrupt("return");case 7:if(!c||!l){r.next=16;break}return r.prev=8,r.next=11,n.$router.push("/");case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(8),console.error(r.t0);case 16:o("SET_USER",{authUser:c,claims:l});case 17:case"end":return r.stop()}}),r,null,[[8,13]])})))()}},m={RESET_STORE:function(t){t.authUser=null},SET_USER:function(t,e){var n=e.authUser,r=e.claims;t.authUser={uid:n.uid,email:n.email,emailVerified:n.emailVerified,displayName:n.displayName,photoURL:r.picture,isAdmin:r.admin}}}}},[[328,23,2,24]]]);