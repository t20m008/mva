(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{689:function(t,e,n){"use strict";n.r(e);n(6),n(12),n(52),n(32);var o={middleware:"auth",data:function(){return{}},watch:{"$window.width":function(){console.log("width: ".concat(this.$window.width))},"$window.height":function(){console.log("height: ".concat(this.$window.height))},"$window.pageYOffset":function(){console.log("pageYOfset: ".concat(this.$window.pageYOffset))}},mounted:function(){console.log("katex.vue : ",window.innerWidth),this.b()},methods:{b:function(){var t=document.getElementsByClassName("base");Array.from(t).forEach((function(base){base.style.border="1px dashed green"}))}}},r=n(91),c=n(109),l=n.n(c),f=n(551),d=n(552),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("nuxt-link",{attrs:{to:"/katex"}},[t._v("katex")]),t._v(" "),n("nuxt-link",{attrs:{to:"/katex-raw"}},[t._v("raw")]),t._v(" "),n("nuxt-link",{attrs:{to:"/katex-collapse"}},[t._v("collapse")]),t._v(" "),n("nuxt-link",{attrs:{to:"/katex-reshape"}},[t._v("reshape")])],1),t._v(" "),n("v-col",{directives:[{name:"katex",rawName:"v-katex"}],attrs:{cols:"12"}},[n("div",{directives:[{name:"katex",rawName:"v-katex"}]},[t._v("\n      $$ S_n = \\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\sum_{k=1}^{n} \\left( \\frac{1}{k} - \\frac{1}{k+1} \\right) = \\left( \\frac{1}{1} - \\frac{1}{2} \\right) + \\left( \\frac{1}{2} -\n      \\frac{1}{3} \\right) + \\left( \\frac{1}{3} - \\frac{1}{4} \\right) + \\cdots + \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right) = 1 - \\frac{1}{n+1} $$\n    ")]),t._v(" "),n("div",{directives:[{name:"katex",rawName:"v-katex"}],staticStyle:{"overflow-x":"auto","overflow-y":"hidden"}},[t._v("\n      $$\\int_s^t (b-a)^{-1}1_{(a,b)}(x)dx = (x+12345678901234567890000000000xyzwabcdefg) \\int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = \\int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = 1+x =\n      3x+x^2+3x^4$$\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);