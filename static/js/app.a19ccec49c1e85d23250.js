webpackJsonp([1],{"/ooX":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},o=i("VU/8")({name:"app"},s,!1,function(e){i("/ooX")},null,null).exports,l=i("/ocq"),r=i("HhJC"),a={el:"#app",data:function(){return{pages:[{html:'<div class="slider1">slider1</div>',style:{background:"#1bbc9b"}},{html:'<div class="slider2">slider2</div>',style:{background:"#4bbfc3"}},{html:'<div class="slider3">slider3</div>',style:{background:"#7baabe"}}],sliderinit:{currentPage:0,thresholdDistance:500,thresholdTime:100,loop:!1,direction:"vertical",infinite:1,slidesToScroll:1,timingFunction:"ease",duration:300}}},components:{slider:i.n(r).a},methods:{slide:function(e){console.log(e)},onTap:function(e){console.log(e)},onInit:function(e){console.log(e)}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{width:"70%",margin:"20px auto",height:"100vh"}},[t("slider",{attrs:{pages:this.pages,sliderinit:this.sliderinit},on:{slide:this.slide,tap:this.onTap,init:this.onInit}},[t("div",{attrs:{slot:"loading"},slot:"loading"},[this._v("loading...")])])],1)},staticRenderFns:[]},c=i("VU/8")(a,d,!1,null,null,null).exports;n.a.use(l.a);var u=new l.a({routes:[{path:"/",name:"HelloWorld",component:c}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:u,template:"<App/>",components:{App:o}})}},["NHnr"]);
//# sourceMappingURL=app.a19ccec49c1e85d23250.js.map