(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{848:function(t,e,o){var content=o(873);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("0fabf5bd",content,!0,{sourceMap:!1})},872:function(t,e,o){"use strict";o(848)},873:function(t,e,o){var n=o(21)(!1);n.push([t.i,".w[data-v-71cd7251]{width:100px;height:100px;overflow:auto}td[data-v-71cd7251]{border-right:1px solid grey;border-bottom:1px solid grey}",""]),t.exports=n},925:function(t,e,o){"use strict";o.r(e);var n=o(9),r=(o(7),o(12),o(72),o(29),o(67),o(53),o(847)),l={components:{VueJsonToCsv:o.n(r).a},data:function(){return{logUsers:[],selectedCollection:null,collections:["log_all","log_all_2","log_20220113","log_20220118"],studentId:null,selected:null,selectedBoolean:!0,history:[],sCSV:"",jsonData:[],csvTitle:"",csvData:[],labels:{locale:{title:"locale"},timestamp:{title:"timestamp"},id:{title:"id"},action:{title:"action"},href:{title:"href"},tex:{title:"tex"}},CollectionName:"log_20220113"}},watch:{selected:function(t,e){null!=t&&(this.selectedBoolean=!1,this.getHistory(t),this.uidToStudentId(t)),e!==t&&(this.history=[])},studentId:function(t,e){console.log(t,e)}},created:function(){this.$store.getters.isLoggedIn||this.$router.push("/login"),"t20m008@mail.ryukoku.ac.jp"!==this.$fire.auth.currentUser.email&&(this.$router.push("/"),alert("アクセス権限がありません"))},mounted:function(){var t=this;function e(){return(e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadLogUsers();case 2:t.logUsers=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},methods:{download:function(){var t=this;this.csvTitle=this.studentId+"_"+Date.now(),this.history.forEach((function(data){t.csvData.push({locale:data.locale,timestamp:data.timestamp,id:data.id,action:data.action,href:data.href,tex:data.tex})}))},getUniqueStr:function(t){var strong=1e3;return t&&(strong=t),(new Date).getTime().toString(16)+Math.floor(strong*Math.random()).toString(16)},loadLogUsers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],e.next=3,t.$fire.firestore.collection(t.CollectionName).get().then((function(t){t.forEach((function(t){o.push({text:t.data().displayName,value:t.data().uid})}))}));case 3:return e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))()},uidToStudentId:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.$fire.firestore.collection("log_20220113").where("uid","==",t).get().then((function(t){t.forEach((function(t){e.studentId=t.data().email.replace("@mail.ryukoku.ac.jp","")}))}));case 2:case"end":return o.stop()}}),o)})))()},getHistory:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=[],o.next=3,e.$fire.firestore.collection(e.CollectionName).doc(t).collection("history").get().then((function(t){t.forEach((function(t){n.push({text:t.data().displayName,value:t.data().uid}),e.history.push(t.data())}))})).catch((function(t){console.log(t)}));case 3:return o.abrupt("return",n);case 4:case"end":return o.stop()}}),o)})))()},createCSV:function(t){var e=this;this.sCSV="locale,timestamp,id,action,tex,href\n";var o=[];t.forEach((function(data,i){o.push(data)})),this.jsonData=o,t.forEach((function(t,i){console.table([t.locale,t.timestamp,t.id,t.action,t.tex,t.href]),e.sCSV+=t.locale+","+t.timestamp+","+t.id+","+t.action+',"'+t.tex+'",'+t.href+"\n"}))},createJSON:function(t){var e=[];t.forEach((function(data,i){e.push(data)})),this.jsonData=e}}},c=l,d=(o(872),o(94)),f=o(115),h=o.n(f),v=o(830),m=o(240),_=o(753),x=o(762),w=o(218),C=o(754),y=o(919),k=o(918),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"chat-main-container"},[o("div",{attrs:{id:"app"}},[o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"d-flex",attrs:{cols:"3",sm:"3"}},[o("v-select",{attrs:{items:t.collections,outlined:"",label:"テーブルを選択"},model:{value:t.selectedCollection,callback:function(e){t.selectedCollection=e},expression:"selectedCollection"}})],1),t._v(" "),o("v-col",{staticClass:"d-flex",attrs:{cols:"8",sm:"6"}},[o("v-select",{attrs:{items:t.logUsers,outlined:"",label:"ユーザーを選択"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),o("v-col",{staticClass:"d-flex",attrs:{cols:"4",sm:"6"}},[o("VueJsonToCsv",{attrs:{"json-data":t.csvData,"csv-title":t.csvTitle,labels:t.labels}},[o("v-btn",{attrs:{disabled:t.selectedBoolean,color:"green"},on:{click:t.download}},[o("v-icon",[t._v("mdi-download")])],1)],1)],1)],1)],1),t._v(" "),o("v-simple-table",{directives:[{name:"katex",rawName:"v-katex:auto",arg:"auto"}],staticStyle:{border:"1px solid gray"},attrs:{dense:"",elevation:"10","fixed-header":"",height:"600px"},scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("locale")]),t._v(" "),o("th",{staticClass:"text-left"},[t._v("id")]),t._v(" "),o("th",{staticClass:"text-left"},[t._v("action")]),t._v(" "),o("th",{staticClass:"text-left"},[t._v("tex")]),t._v(" "),o("th",{staticClass:"text-left"},[t._v("href")])])]),t._v(" "),o("tbody",t._l(t.history,(function(e){return o("tr",{key:e.timestamp},[o("td",[t._v(t._s(e.locale))]),t._v(" "),o("td",[t._v(t._s(e.id))]),t._v(" "),o("td",[t._v(t._s(e.action))]),t._v(" "),o("td",[t._v("$"+t._s(e.tex)+"$")]),t._v(" "),o("td",[t._v(t._s(e.href))])])})),0)]},proxy:!0}])}),t._v(" "),o("v-alert",{staticClass:"mt-3",attrs:{dense:"",border:"left","colored-border":"",color:"teal accent-4",elevation:"10"}},[t._v(t._s(t.selected)+" ")]),t._v(" "),o("v-alert",{attrs:{dense:"",border:"left","colored-border":"",color:"teal",elevation:"5"}},[t._v(t._s(t.studentId)+" ")])],1)}),[],!1,null,"71cd7251",null);e.default=component.exports;h()(component,{VAlert:v.a,VBtn:m.a,VCol:_.a,VContainer:x.a,VIcon:w.a,VRow:C.a,VSelect:y.a,VSimpleTable:k.a})}}]);