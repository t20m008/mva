(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{579:function(t,e,n){var content=n(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("88969c7a",content,!0,{sourceMap:!1})},597:function(t,e,n){"use strict";n(579)},598:function(t,e,n){var r=n(20)(!1);r.push([t.i,".wrap1{border:1px solid #000}.wrap2{border:1px solid green}",""]),t.exports=r},690:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(54),{data:function(){return{}},watch:{"$window.width":function(){console.log("width: ".concat(this.$window.width))},"$window.height":function(){console.log("height: ".concat(this.$window.height))},"$window.pageYOffset":function(){console.log("pageYOfset: ".concat(this.$window.pageYOffset))}},mounted:function(){console.log("katex-collapse.vue mounted"),this.$katexLocalStorage();var t=this.$getKatexStatus();this.$katexCollapsible(!0,!1,t),this.$katexContextMenu()},methods:{createUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.createUserWithEmailAndPassword("foo@foo.foo","test22");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}}),o=(n(597),n(93)),f=n(113),l=n.n(f),x=n(237),d=n(560),v=n(561),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("nuxt-link",{attrs:{to:"/katex/katex"}},[t._v("katex")]),t._v(" "),n("nuxt-link",{attrs:{to:"/katex/katex-raw"}},[t._v("raw")]),t._v(" "),n("nuxt-link",{attrs:{to:"/katex/katex-collapse"}},[t._v("collapse")]),t._v(" "),n("nuxt-link",{attrs:{to:"/katex/katex-reshape"}},[t._v("reshape")])],1),t._v(" "),n("v-col",{directives:[{name:"katex",rawName:"v-katex"}],attrs:{cols:"12"}},[t._v("\n    ほにゃららほにゃららほにゃららほにゃらら$ S_n = \\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\sum_{k=1}^{n} \\left( \\frac{1}{k} -\n    \\frac{1}{k+1} \\right) = \\left( \\frac{1}{1} - \\frac{1}{2} \\right) + \\left( \\frac{1}{2} - \\frac{1}{3} \\right) + \\left(\n    \\frac{1}{3} - \\frac{1}{4} \\right) + \\cdots + \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right) = 1 - \\frac{1}{n+1}\n    $ほにゃららほにゃららほにゃららほにゃらら、アイウエオkakikukeko$a=b$,,,,,,$c=d=e$,$f=ff=fff$aaa\n    "),n("div",{directives:[{name:"katex",rawName:"v-katex"}],staticClass:"wrap1",staticStyle:{"overflow-x":"auto","overflow-y":"hidden"}},[t._v("\n      $$ S_n = \\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\sum_{k=1}^{n} \\left( \\frac{1}{k} - \\frac{1}{k+1} \\right) = \\left( \\frac{1}{1}\n      - \\frac{1}{2} \\right) + \\left( \\frac{1}{2} - \\frac{1}{3} \\right) + \\left( \\frac{1}{3} - \\frac{1}{4} \\right) + \\cdots +\n      \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right) = 1 - \\frac{1}{n+1} $$\n    ")]),t._v(" "),n("div",{directives:[{name:"katex",rawName:"v-katex"}],staticClass:"wrap1",staticStyle:{"overflow-x":"auto","overflow-y":"hidden"}},[t._v("\n      $$\\int_s^t (b-a)^{-1}1_{(a,b)}(x)dx = (x+12345678901234567890000000000xyzwabcdefg) \\int_s^t (b-a)^{-1}1_{[a,b]}(x)dx =\n      \\int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = 1+x = 3x+x^2+3x^4$$\n    ")]),t._v("\n\n    $$ \\int_0^\\pi \\sin{mx}\\cos{nx} dx = \\frac{1-(-1)^{m-n}}{m^2 - n^2} = \\begin{cases} 0 & ( m-n \\in even ) \\\\ \\frac{2m}{m^2 -\n    n^2} & ( m-n \\in odd ) \\end{cases} $$\n\n    "),n("div",{staticClass:"wrap2"},[n("div",{staticClass:"wrap1"},[t._v("\n        $$ \\int_0^\\pi \\sin{mx}\\cos{nx} dx = \\frac{1-(-1)^{m-n}}{m^2 - n^2} = \\begin{cases} 0 & ( m-n \\in even ) \\\\ \\frac{2m}{m^2\n        - n^2} & ( m-n \\in odd ) \\end{cases} $$\n      ")])]),t._v(" "),n("div",{directives:[{name:"katex",rawName:"v-katex:auto",arg:"auto"}]},[t._v("\n      $$ \\begin{aligned} \\int \\frac{1}{x(x+2)}dx &= \\int \\frac{1}{2}\\left(\\frac{1}{x}+\\frac{-1}{x+2}\\right) dx \\\\ &=\n      \\frac{1}{2}\\int \\frac{1}{x}dx - \\frac{1}{2}\\int \\frac{1}{x+2}dx \\\\ &= \\frac{1}{2}\\left(\\log |x| -\\log|x+2|\\right)+C \\\\ &=\n      \\frac{1}{2}\\log \\left|\\frac{x}{x+2}\\right|+C \\end{aligned} $$\n    ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.createUser()}}},[t._v("createUser()")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:x.a,VCol:d.a,VRow:v.a})}}]);