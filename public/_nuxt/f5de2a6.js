(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{695:function(e,t,n){"use strict";n.r(t);var r=n(11),o=(n(63),{name:"Profile",layout:"default",middleware:"auth",data:function(){return{User:this.$store.state.authUser}},methods:{logout:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.auth.signOut();case 2:case"end":return t.stop()}}),t)})))()}}}),l=n(91),c=n(109),f=n.n(c),v=n(232),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("User Profile")]),e._v(" "),null!=e.User?n("p",[e._v("Your e-mail is "+e._s(e.User.email))]):e._e(),e._v(" "),n("v-btn",{on:{click:e.logout}},[e._v("Logout")])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:v.a})}}]);