(function(t){function e(e){for(var o,a,l=e[0],s=e[1],u=e[2],f=0,p=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={index:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("Banner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")]),n("button",{on:{click:t.back}},[t._v("后退")]),n("button",{on:{click:t.forward}},[t._v("前进")]),n("button",{on:{click:t.test}},[t._v("测试一下go")])])])},l=[],s={name:"Banner",methods:{back:function(){this.$router.back()},forward:function(){this.$router.forward()},test:function(){this.$router.go(3)}}},u=s,c=n("2877"),f=Object(c["a"])(u,a,l,!1,null,null,null),p=f.exports,v={name:"App",components:{Banner:p}},d=v,m=Object(c["a"])(d,i,r,!1,null,null,null),h=m.exports,_=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},g=[],y={name:"About",mounted:function(){},beforeRouteEnter:function(t,e,n){console.log("About--beforeRouteEnter",t,e),t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("学校名不对，无权限查看！"):n()},beforeRouteLeave:function(t,e,n){console.log("About--beforeRouteLeave",t,e),n()}},w=y,x=Object(c["a"])(w,b,g,!1,null,null,null),k=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])},j=[],$={name:"Home"},C=$,E=Object(c["a"])(C,O,j,!1,null,null,null),A=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news001 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news002 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news003 "),n("input",{attrs:{type:"text"}})])}],P={name:"News",data:function(){return{opacity:1}},activated:function(){var t=this;console.log("News组件被激活了"),this.timer=setInterval((function(){console.log("@"),t.opacity-=.01,t.opacity<=0&&(t.opacity=1)}),16)},deactivated:function(){console.log("News组件失活了"),clearInterval(this.timer)}},M=P,N=Object(c["a"])(M,S,q,!1,null,null,null),R=N.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"xiangqing",query:{id:e.id,title:e.title}}}},[t._v(" "+t._s(e.title)+" ")]),n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("hr"),n("router-view")],1)},B=[],D=(n("ac1f"),n("5319"),{name:"Message",data:function(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow:function(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow:function(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}},beforeDestroy:function(){}}),H=D,I=Object(c["a"])(H,L,B,!1,null,null,null),T=I.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号："+t._s(t.id))]),n("li",[t._v("消息标题："+t._s(t.title))])])},V=[],z={name:"Detail",props:["id","title"],computed:{},mounted:function(){}},F=z,G=Object(c["a"])(F,J,V,!1,null,null,null),K=G.exports,Q=new _["a"]({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:A,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:R,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:T,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail",component:K,meta:{isAuth:!0,title:"详情"},props:function(t){return{id:t.query.id,title:t.query.title,a:1,b:"hello"}}}]}]}]});Q.afterEach((function(t,e){console.log("后置路由守卫",t,e),document.title=t.meta.title||"硅谷系统"}));var U=Q;o["a"].config.productionTip=!1,o["a"].use(_["a"]),new o["a"]({el:"#app",render:function(t){return t(h)},router:U})}});
//# sourceMappingURL=index.86760778.js.map