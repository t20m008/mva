(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{854:function(t,e,n){var content=n(905);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("73eec19e",content,!0,{sourceMap:!1})},904:function(t,e,n){"use strict";n(854)},905:function(t,e,n){var r=n(21)(!1);r.push([t.i,".base[data-v-15d07110]{border:1px solid green}.leftmost[data-v-15d07110]{border:1px solid red}.rightmost[data-v-15d07110]{border:1px solid #00f}",""]),t.exports=r},933:function(t,e,n){"use strict";n.r(e);n(7),n(12),n(49),n(32);var r={data:function(){return{title:"多変量解析☆演習 L14 学習支援",e1:1,done:!1}},mounted:function(){this.$katexLocalStorage();var t=this.$getKatexStatus();this.$katexCollapsible(!0,!1,t),this.$katexContextMenu()},methods:{border:function(){Array.from(document.getElementsByClassName("base")).forEach((function(t,i){t.style.border="1px solid green"})),Array.from(document.getElementsByClassName("leftmost")).forEach((function(t,i){t.style.border="1px solid red"})),Array.from(document.getElementsByClassName("rightmost")).forEach((function(t,i){t.style.border="1px solid blue"}))}}},o=(n(904),n(94)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"katex",rawName:"v-katex"}]},[n("p",{staticStyle:{background:"#ccc"}},[t._v("垂直連結非対称型 : 1列揃え")]),t._v(" "),n("p",[t._v("\n    $$ \\begin{aligned} \\int \\frac{1}{x(x+2)}dx &= \\int \\frac{1}{2}\\left(\\frac{1}{x}+\\frac{-1}{x+2}\\right) dx \\\\ &=\n    \\frac{1}{2}\\int \\frac{1}{x}dx - \\frac{1}{2}\\int \\frac{1}{x+2}dx \\\\ &= \\frac{1}{2}\\left(\\log |x| -\\log|x+2|\\right)+C \\\\ &=\n    \\frac{1}{2}\\log \\left|\\frac{x}{x+2}\\right|+C \\end{aligned} $$\n  ")]),t._v(" "),n("p",{staticStyle:{background:"#ccc"}},[t._v("垂直連結対象型 : 1列揃え")]),t._v(" "),n("p",[t._v("\n    $$ \\begin{aligned} 2x+6y+4(x+3y) &= 2(x+2y) \\\\ 2x+6y+4x+12y &= 2(x+2y) \\\\ 6x+18y &= 2(x+2y) \\\\ 6x+18y-18y &= 2x+4y-18y \\\\ 6x\n    &= 2x-14y \\\\ 6x-2x &= 2x-2x-14y \\\\ 4x &= -14y \\\\ x &= \\frac{-14y}{4} \\end{aligned} $$\n  ")]),t._v(" "),n("p",{staticStyle:{background:"#ccc"}},[t._v("垂直連結対象型 : 複数列揃え")]),t._v(" "),n("p",[t._v("\n    $$ \\begin{aligned} x_t &= \\phi_1 x_{t-1} &+ \\phi_2 x_{t-2} &+ \\phi_3 x_{t-3} &+ \\epsilon_t \\\\ x_{t-1} &= 1 \\cdot x_{t-1} \\\\\n    x_{t-2} &= &+1\\cdot x_{t-2}\\\\ Y_t &= x_t & & &+ 0 \\cdot \\epsilon'_t \\end{aligned} $$\n  ")])])}),[],!1,null,"15d07110",null);e.default=component.exports}}]);