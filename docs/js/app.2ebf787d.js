(function(t){function e(e){for(var i,r,a=e[0],c=e[1],u=e[2],l=0,h=[];l<a.length;l++)r=a[l],o[r]&&h.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,a=1;a<s.length;a++){var c=s[a];0!==o[c]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},o={app:0},n=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"083b":function(t,e,s){},"1d82":function(t,e,s){},"20f9":function(t,e,s){"use strict";var i=s("6f8e"),o=s.n(i);o.a},"304b":function(t,e,s){"use strict";var i=s("405b"),o=s.n(i);o.a},3335:function(t,e,s){},"3d24":function(t,e,s){"use strict";var i=s("1d82"),o=s.n(i);o.a},"405b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),s("div",{staticClass:"l-container"},[s("sidebar"),s("div",{staticClass:"l-main"},[s("search-input"),s("router-view")],1)],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("h1",[t._v("Vue Youtube Search")])])}],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l-sidebar"},[s("div",{staticClass:"c-sidebar"},[t._m(0),s("ul",{staticClass:"c-history-list"},t._l(t.getHistorySearchWords,function(t,e){return s("history-item",{key:e,attrs:{word:t}})}),1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"c-history-title"},[t._v("\n      history\n    ")])}],c=s("cebc"),u=s("2f62"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"c-history-item",domProps:{innerHTML:t._s(t.replaceWords(t.word))}})}],h=(s("ac6a"),s("795b")),f=s.n(h),p=s("d225"),_=s("b0b4"),m=function(){function t(e){Object(p["a"])(this,t),this.el=e,this._bindAnimation()}return Object(_["a"])(t,[{key:"_random",value:function(){return 10*Math.floor(20*Math.random())}},{key:"_addClass",value:function(t,e){return new f.a(function(s){t.classList.add(e),s()})}},{key:"_bindAnimation",value:function(){var t=this;this._addClass(this.el,"u-state--1").then(function(){var e=t._random();setTimeout(function(){return t._addClass(t.el,"u-state--2")},50+e)}).then(function(){var e=t._random();setTimeout(function(){return t._addClass(t.el,"u-state--3")},60+e)})}}]),t}();s("a481");function v(t){return t.replace(/(\S)/g,'<span class="u-random-word">$1</span>')}var T={props:{word:String},methods:{replaceWords:function(t){return v(t)},historySearchWordRandomShow:function(t){var e=this,s=t.querySelectorAll(".u-random-word"),i=setTimeout(function(){s.forEach(function(t){new m(t)}),e.$store.dispatch("clearHistoryTextTimer")},1500);this.$store.dispatch("updateHistoryTextTimer",i)}},mounted:function(){this.historySearchWordRandomShow(this.$el)}},S=T,E=(s("20f9"),s("2877")),w=Object(E["a"])(S,d,l,!1,null,null,null);w.options.__file="HistoryItem.vue";var b=w.exports,V={computed:Object(c["a"])({},Object(u["b"])(["getHistorySearchWords"])),components:{HistoryItem:b}},O=V,I=(s("304b"),Object(E["a"])(O,r,a,!1,null,"88cf86a4",null));I.options.__file="Sidebar.vue";var y=I.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-input-wrapper",class:t.inputWrapClassObject},[s("input",{staticClass:"c-input",attrs:{type:"text",placeholder:"search keyword..."},on:{input:[function(e){t.chkSearchInputlength(e)},t.updateSearchText],focus:function(e){t.focusInput()},focusout:function(e){t.focusoutInput()}}})])},C=[],A=s("2ef0"),x=1e3,D={name:"search-input",computed:{inputWrapClassObject:function(){return{"is-focus":this.$store.state.isFocusSearchInput}}},methods:{chkSearchInputlength:function(t){this.$store.dispatch("resetFetchVideos"),this.$store.dispatch("isLoadingVideos",!1),this.$store.dispatch("allowShowVideos",!1),this.$store.dispatch("updateSearchText",t.target.value),""!==t.target.value&&this.$store.dispatch("isLoadingVideos",!0)},updateSearchText:Object(A["debounce"])(function(t){""!==t.target.value&&this.$store.dispatch("fetchYouTubeVideos")},x),focusInput:function(){this.$store.dispatch("isFocusSearchInput",!0)},focusoutInput:function(){this.$store.dispatch("isFocusSearchInput",!1)}}},L=D,$=(s("68d8"),Object(E["a"])(L,g,C,!1,null,"02cb6577",null));$.options.__file="searchInput.vue";var H=$.exports,U={name:"app",components:{sidebar:y,searchInput:H}},P=U,j=(s("5c0b"),Object(E["a"])(P,o,n,!1,null,null,null));j.options.__file="App.vue";var R=j.exports,N=s("8c4f"),W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-videos"},[s("list-view",{attrs:{videos:t.hitVideos}})],1)},F=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("search-message"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoadingVideos,expression:"isLoadingVideos"}],staticClass:"preloader"},[s("div",{staticClass:"l-preloader",class:t.pseudoLoaderClass()},[t._m(0)])]),s("div",{staticClass:"c-list-items"},t._l(t.fetchVideos,function(t,e){return s("list-item",{key:e,attrs:{video:t.snippet,id:t.id.videoId,"data-index":e}})}),1)],1)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"c-preloader"})}],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-list-item",class:t.listItemClassObject},[t._m(0),t._m(1)])},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"c-movie-title"},[t._v("\n    "+t._s(t.video.title)+"\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-movie"},[s("iframe",{attrs:{width:"560",height:"315",src:t.youtubeUrl,frameborder:"0",allowfullscreen:""},on:{load:function(e){t.videoLoaded()}}})])}],J=s("e814"),q=s.n(J);function z(t,e){return q()(t,10)===q()(e,10)}var G={props:{video:Object,id:String},computed:{youtubeUrl:function(){var t="https://www.youtube.com/embed/";return"".concat(t).concat(this.id)},listItemClassObject:function(){return{"fade-in":this.$store.state.allowShowVideos}}},methods:{videoLoaded:function(){return this.$store.dispatch("updateLoadedVideoNum"),!!z(this.$store.state.loadedVideoNum,this.$store.state.videos.length)&&(this.$store.dispatch("updateHistorySearchWords",this.$store.state.searchText),this.$store.dispatch("allowShowVideos",!0))}}},Z=G,K=(s("3d24"),Object(E["a"])(Z,Y,X,!1,null,"99778a9c",null));K.options.__file="ListItem.vue";var Q=K.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.allowShowVideos&&!t.isLoadingVideos,expression:"!allowShowVideos && !isLoadingVideos"}],staticClass:"l-none-videos-msg"},[s("p",{directives:[{name:"show",rawName:"v-show",value:!t.hasSearchText,expression:"!hasSearchText"}],staticClass:"c-none-videos-msg"},[t._v("Please input search keyword.")]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.hasSearchText,expression:"hasSearchText"}],staticClass:"c-none-videos-msg"},[t._v("No results for "),s("span",{staticClass:"u-strong"},[t._v(t._s(this.$store.state.searchText))])])])},tt=[],et={computed:{allowShowVideos:function(){return this.$store.state.allowShowVideos},isLoadingVideos:function(){return this.$store.state.isLoadingVideos},hasSearchText:function(){return this.$store.state.searchText.length>0}}},st=et,it=(s("6b46"),Object(E["a"])(st,B,tt,!1,null,"518f87a4",null));it.options.__file="SearchMessage.vue";var ot=it.exports,nt={props:{videos:Array},computed:{fetchVideos:function(){return this.$store.state.videos},isLoadingVideos:function(){return this.$store.state.isLoadingVideos}},methods:{pseudoLoaderClass:function(){return{"fade-out":this.$store.state.allowShowVideos}}},components:{"list-item":Q,"search-message":ot}},rt=nt,at=(s("71be"),Object(E["a"])(rt,M,k,!1,null,"7cd810c3",null));at.options.__file="ListView.vue";var ct=at.exports,ut={name:"items",computed:{hitVideos:function(){return this.$store.state.videos}},components:{ListView:ct}},dt=ut,lt=Object(E["a"])(dt,W,F,!1,null,null,null);lt.options.__file="Items.vue";var ht=lt.exports;i["a"].use(N["a"]);var ft=new N["a"]({routes:[{path:"/",name:"Items",component:ht}]}),pt={CLEAR_FETCH_VIDEOS:function(t){t.videos=[]},UPDATE_FETCH_VIDEOS:function(t,e){t.videos=e},UPDATE_SEARCH_TEXT:function(t,e){t.searchText=e},UPDATE_LOADED_VIDEO_NUM:function(t){t.loadedVideoNum+=1},CLEAR_LOADED_VIDEO_NUM:function(t){t.loadedVideoNum=0},UPDATE_ALLOW_SHOW_VIDEOS:function(t,e){t.allowShowVideos=e},UPDATE_IS_FOCUS_SEARCH_INPUT:function(t,e){t.isFocusSearchInput=e},UPDATE_IS_LOADING_VIDEOS:function(t,e){t.isLoadingVideos=e},UPDATE_HIT_VIDEO:function(t,e){t.hitVideo=e},UPDATE_HISTORY_SEARCH_WORDS:function(t,e){t.historySearchWords.push(e)},UPDATE_HISTORY_TEXT_TIMER:function(t,e){t.historyTextTimer=e},CLEAR_HISTORY_TEXT_TIMER:function(t){window.clearTimeout(t.historyTextTimer),t.historyTextTimer=null}},_t=pt,mt=(s("6d93"),{fetchYouTubeVideos:function(t){var e=t.dispatch,s=t.state;fetch("".concat(Tt,"&key=").concat(St,"&q=").concat(s.searchText)).then(function(t){t.json().then(function(t){e("resetLoaddedVideoNum").then(function(){e("allowShowVideos",!1).then(function(){t.items.length>0?(e("updateHitVideo",!0),e("updateFetchVideos",t.items)):(e("resetFetchVideos"),e("isLoadingVideos",!1),e("updateHitVideo",!1),e("updateHistorySearchWords",s.searchText))})})})})},resetFetchVideos:function(t){var e=t.commit;e("CLEAR_FETCH_VIDEOS")},updateFetchVideos:function(t,e){var s=t.commit;s("UPDATE_FETCH_VIDEOS",e)},updateSearchText:function(t,e){var s=t.commit;s("UPDATE_SEARCH_TEXT",e)},updateLoadedVideoNum:function(t){var e=t.commit;e("UPDATE_LOADED_VIDEO_NUM")},resetLoaddedVideoNum:function(t){var e=t.commit;e("CLEAR_LOADED_VIDEO_NUM")},allowShowVideos:function(t,e){var s=t.commit;s("UPDATE_ALLOW_SHOW_VIDEOS",e)},isFocusSearchInput:function(t,e){var s=t.commit;s("UPDATE_IS_FOCUS_SEARCH_INPUT",e)},isLoadingVideos:function(t,e){var s=t.commit;s("UPDATE_IS_LOADING_VIDEOS",e)},updateHitVideo:function(t,e){var s=t.commit;s("UPDATE_HIT_VIDEO",e)},updateHistorySearchWords:function(t,e){var s=t.commit;s("UPDATE_HISTORY_SEARCH_WORDS",e)},updateHistoryTextTimer:function(t,e){var s=t.commit;s("UPDATE_HISTORY_TEXT_TIMER",e)},clearHistoryTextTimer:function(t){var e=t.commit;e("CLEAR_HISTORY_TEXT_TIMER")}}),vt=mt,Tt="https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict",St="AIzaSyASIm-ZzIu2OJ9wHZXUyPk-_rKVUmOS1fQ";i["a"].use(u["a"]);var Et={videos:[],loadedVideoNum:0,allowShowVideos:!1,searchText:"",isFocusSearchInput:!1,isLoadingVideos:!1,hitVideo:!1,historySearchWords:[],historyTextTimer:null},wt={getHistorySearchWords:function(t){return t.historySearchWords}},bt=new u["a"].Store({state:Et,mutations:_t,actions:vt,getters:wt}),Vt=bt;i["a"].config.productionTip=!1,new i["a"]({router:ft,store:Vt,render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("5e27"),o=s.n(i);o.a},"5e27":function(t,e,s){},"68d8":function(t,e,s){"use strict";var i=s("083b"),o=s.n(i);o.a},"6b46":function(t,e,s){"use strict";var i=s("3335"),o=s.n(i);o.a},"6f8e":function(t,e,s){},"71be":function(t,e,s){"use strict";var i=s("751e"),o=s.n(i);o.a},"751e":function(t,e,s){}});
//# sourceMappingURL=app.2ebf787d.js.map