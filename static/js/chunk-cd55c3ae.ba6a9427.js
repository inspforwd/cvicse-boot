(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cd55c3ae"],{"86f8":function(e,t,a){"use strict";a.r(t);a("1951"),a("450d");var n=a("eedf"),s={name:"",components:{Button:a.n(n).a},props:{code:{type:Number,require:!0}},computed:{info(){let e,t="";switch(this.code){case 403:e="Forbidden",t=this.$route.params.path;break;case 404:e="page not found",t=this.$route.fullPath;break;default:e="无效的错误码"}return{message:e,path:t}}}},c=(a("ae30"),a("2877")),o=Object(c.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("p",{staticClass:"page_title"},[e._v(e._s(e.code)+" "+e._s(e.info.message))]),e._v("\n  "+e._s(e.info.path)+"\n  "),a("Button",{staticClass:"d2-mt",on:{click:function(t){e.$router.replace({path:"/"})}}},[e._v("\n    返回首页\n  ")])],1)},[],!1,null,"0843634c",null);t.default=o.exports},ae30:function(e,t,a){"use strict";var n=a("bcb2");a.n(n).a},bcb2:function(e,t,a){}}]);