(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{763:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(836),o=r(0),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");n.a},836:function(t,e,r){"use strict";r(16),r(18),r(19),r(7),r(25),r(12),r(26);var n=r(3),o=(r(33),r(242),r(243),r(841),r(239)),l=r(840),c=r(111),d=r(13);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},837:function(t,e,r){var content=r(838);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("cf87dc84",content,!0,{sourceMap:!1})},838:function(t,e,r){var n=r(21)(!1);n.push([t.i,"html{overflow-y:visible}::-webkit-scrollbar:horizontal{height:2px;width:30px}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background-color:hsla(0,0%,59.2%,.5);border-radius:2px;box-shadow:0 0 0 1px hsla(0,0%,100%,.3)}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},840:function(t,e,r){"use strict";r(33);var n=r(1),o=(r(16),r(18),r(19),r(7),r(25),r(12),r(26),r(3)),l=(r(153),r(837),r(244)),c=r(155),d=r(46),h=r(126),v=r(245),f=r(37),m=r(0),_=r(13);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(_.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),v.a,f.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(t,this.isReversed?"right":"left",Object(m.g)(this.normalizedValue,"%")),Object(o.a)(t,"width",Object(m.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.c:l.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(m.g)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(m.o)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),w=y;e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(w,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},841:function(t,e,r){var content=r(842);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("e23b7040",content,!0,{sourceMap:!1})},842:function(t,e,r){var n=r(21)(!1);n.push([t.i,'html{overflow-y:visible}::-webkit-scrollbar:horizontal{height:2px;width:30px}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background-color:hsla(0,0%,59.2%,.5);border-radius:2px;box-shadow:0 0 0 1px hsla(0,0%,100%,.3)}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},853:function(t,e,r){var content=r(903);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("3746d048",content,!0,{sourceMap:!1})},901:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAAAAAAZai4+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAQsMETMDu0fsAAACaElEQVR42u3V3XKiMAAF4L7/G5xErYBaq9v6s6OtLlD/ocBDbQCB7Ey7FbgwF+fcSIA5fgYTHhIj83BvAFlkkUUWWWQZErLIIsuEkEUWWSaELLLIMiFkkUWWCSGLLLJMCFlkkWVCyCKLLBNCFllkmRCyyLoD6wXXgz2K+Okwfht05OAtvqm/Ycn3rM9O0bj9pzEa5cej6AZV05JvWeEYReMSIz9PqEYzyNUpeJOY/axqXPI1K5g/SZSNUyy0S4Cbfv6BCP5valPyNWuXT/F1NMCmurRCPz94xKqclB5+ZwcvsOOmJTewouPx6JaNHeyrS8+Y5wdzTMqTLsRRfXzkHw1LfmalORWNIfDx3BP2r3M6srDNT29hVTdPMYiTqH+dtIYl9Vjl0pbv2a/289M+utXNYRfrZJHaWpTUY20A2wsCz84ekcAhP32A0O52IV0hTu1KarH812W2u8Q2xkkiq0ap3z5VM7FqW1KHVcZLZ7xfzX9fv6geoxO3LWnEUrtNkAyrf+tQv3gQkJe2JY1YYdo4KbbFJabatchCF08tS+qwYutxW8y4mv91saQttfaqLOCcpb5jNimpNVtjWJ9ZtYPXJLkI7NLRDkJ7Zvt0ga3RCdqU1GOpLcfxgovnoJt2zNDzosTv6W9Z9QgX2VdOWpTUZCUbke+E3ewXRkNAqHfwSFt3c1jp8ld/e7d5SV1Wcp5ZUtqLMB/Fa0dKZ60Vqpfy7srrhU1LbmTdNWSRRZYJIYssskwIWWSRZULIIossE0IWWWSZELLIIsuEkEUWWSaELLLIMiFkkUWWCSGLLLJMCFlkkWVC/gI+i6YMw2buTAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMS0xMVQyMToxNzo1MSswOTowMFDV5jMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDEtMTFUMjE6MTc6NTErMDk6MDAhiF6PAAAAAElFTkSuQmCC"},902:function(t,e,r){"use strict";r(853)},903:function(t,e,r){var n=r(21)(!1);n.push([t.i,".c[data-v-12bcb04a]{font-size:16px;justify-content:center;position:relative;margin:auto}.tc[data-v-12bcb04a]{text-align:left;overflow-y:scroll}.custom-loader[data-v-12bcb04a]{-webkit-animation:loader-data-v-12bcb04a 1s infinite;animation:loader-data-v-12bcb04a 1s infinite;display:flex}@-webkit-keyframes loader-data-v-12bcb04a{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes loader-data-v-12bcb04a{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]),t.exports=n},930:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(53),r(73),r(7),r(72),{layout:"login",data:function(){return{icon_google:r(901),loader:null,loading:!1}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){return t[e]=!1}),1500),this.loader=null}},created:function(){this.$store.getters.isLoggedIn&&this.$router.push("/")},mounted:function(){},methods:{signInWithGoogle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new t.$fireModule.default.auth.GoogleAuthProvider).setCustomParameters({hd:"mail.ryukoku.ac.jp"}),e.next=4,t.$fire.auth.signInWithPopup(r).then((function(t){t.user.getIdToken(!0).then((function(e){localStorage.setItem("access_token",e.toString()),localStorage.setItem("refresh_token",t.user.refreshToken.toString())}))}));case 4:case"end":return e.stop()}}),e)})))()}}}),l=(r(902),r(94)),c=r(115),d=r.n(c),h=r(240),v=r(836),f=r(763),m=r(753),_=r(218),k=r(754),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"ma-0 pa-0",attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[r("div",{staticClass:"header"},[r("div",{staticClass:"inner-header flex"},[r("v-row",{staticClass:"mt-10"},[r("v-col",{staticClass:"c mt-10 px-10 font-weight-bold",attrs:{cols:"8"}},[r("span",[r("p",[t._v("このページは、多変量解析☆演習の学習支援用ページです。")]),t._v(" "),r("p",[t._v("下のボタンから龍大アカウントでログインして下さい。")])])]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"ma-2 white--text",attrs:{fab:"",elevation:"10",loading:t.loading,disabled:t.loading,color:"green"},on:{click:function(e){t.loader="loading",t.signInWithGoogle()}}},[r("v-icon",{attrs:{dark:""}},[t._v(" mdi-google ")])],1)],1),t._v(" "),r("v-col",{staticClass:"c",attrs:{cols:"6"}},[r("v-card",{staticStyle:{"overflow-y":"scroll"},attrs:{"max-height":"200"}},[r("v-card-title",{staticClass:"c"},[r("v-icon",{attrs:{color:"yellow darken-4"}},[t._v("mdi-alert")]),t._v("\n                個人情報の取り扱いについて\n              ")],1),t._v(" "),r("v-card-text",{staticClass:"justify-end tc"},[r("p",[t._v("本サイト内では、数式の折りたたみ時と展開時に操作履歴として\n                  "),r("ul",[r("li",[t._v("Googleアカウントの登録名")]),t._v(" "),r("li",[t._v("メールアドレス")]),t._v(" "),r("li",[t._v("時刻")])]),t._v("\n                  を取得しています。")]),t._v(" "),r("p",[t._v("取得したデータは、修士研究の目的で利用させていただく可能性がございますが、個人が特定される情報を公表することはありません。")]),t._v(" "),r("p",[t._v("ご了承いただける場合のみ、お使い頂くようお願いいたします。")]),t._v(" "),r("p",{staticStyle:{"text-align":"end"}},[t._v(" T20M008 藤原")])])],1)],1)],1)],1),t._v(" "),r("div",[r("svg",{staticClass:"waves",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[r("defs",[r("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),t._v(" "),r("g",{staticClass:"parallax"},[r("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7)"}}),t._v(" "),r("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}}),t._v(" "),r("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}}),t._v(" "),r("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"7",fill:"#fff"}})])])])])])],1)}),[],!1,null,"12bcb04a",null);e.default=component.exports;d()(component,{VBtn:h.a,VCard:v.a,VCardText:f.b,VCardTitle:f.c,VCol:m.a,VIcon:_.a,VRow:k.a})}}]);