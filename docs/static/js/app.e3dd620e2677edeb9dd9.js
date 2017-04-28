webpackJsonp([1,2],Array(34).concat([function(t,e,s){"use strict";var i=s(13),o=s(111),n=s(102),a=s.n(n);i.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Items",component:a.a}]})},function(t,e,s){"use strict";var i=s(13),o=s(113);i.a.use(o.a);var n={videos:[],loadedVideoNum:0,allowShowVideos:!1,searchText:"",isFocusSearchInput:!1,isLoadingVideos:!1,hitVideo:!1,historySearchWords:[],historyTextTimer:null},a={resetFetchVideos:function(t){t.videos=[]},updateFetchVideos:function(t,e){t.videos=e},updateSearchText:function(t,e){t.searchText=e},updateLoadedVideoNum:function(t){t.loadedVideoNum+=1},resetLoaddedVideoNum:function(t){t.loadedVideoNum=0},allowShowVideos:function(t,e){t.allowShowVideos=e},isFocusSearchInput:function(t,e){t.isFocusSearchInput=e},isLoadingVideos:function(t,e){t.isLoadingVideos=e},updateHitVideo:function(t,e){t.hitVideo=e},updateHistorySearchWords:function(t,e){t.historySearchWords.push(e)},clearHistoryTextTimer:function(t){window.clearTimeout(t.historyTextTimer),t.historyTextTimer=null}},r={resetFetchVideos:function(t){(0,t.commit)("resetFetchVideos")},updateFetchVideos:function(t,e){(0,t.commit)("updateFetchVideos",e)},updateSearchText:function(t,e){(0,t.commit)("updateSearchText",e)},updateLoadedVideoNum:function(t){(0,t.commit)("updateLoadedVideoNum")},resetLoaddedVideoNum:function(t){(0,t.commit)("resetLoaddedVideoNum")},allowShowVideos:function(t,e){(0,t.commit)("allowShowVideos",e)},isFocusSearchInput:function(t,e){(0,t.commit)("isFocusSearchInput",e)},isLoadingVideos:function(t,e){(0,t.commit)("isLoadingVideos",e)},updateHitVideo:function(t,e){(0,t.commit)("updateHitVideo",e)},updateHistorySearchWords:function(t,e){(0,t.commit)("updateHistorySearchWords",e)},clearHistoryTextTimer:function(t){(0,t.commit)("clearHistoryTextTimer")}},c=new o.a.Store({state:n,mutations:a,actions:r});e.a=c},function(t,e,s){s(92);var i=s(2)(s(37),s(108),null,null);t.exports=i.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(100),o=s.n(i),n=s(101),a=s.n(n);e.default={name:"app",components:{sidebar:o.a,searchInput:a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(47),o=s(48);e.default={props:{word:String},methods:{replaceWords:function(t){return s.i(o.a)(t)},historySearchWordRandomShow:function(t){var e=this,s=t.querySelectorAll(".u-random-word");this.$store.state.historyTextTimer=setTimeout(function(){s.forEach(function(t,e){new i.a(t)}),e.$store.dispatch("clearHistoryTextTimer")},1500)}},mounted:function(){this.historySearchWordRandomShow(this.$el)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(45);e.default={props:{video:Object,id:String},computed:{youtubeUrl:function(){return"https://www.youtube.com/embed/"+this.id},listItemClassObject:function(){return{"fade-in":this.$store.state.allowShowVideos}}},methods:{videoLoaded:function(){return this.$store.dispatch("updateLoadedVideoNum"),!!s.i(i.a)(this.$store.state.loadedVideoNum,this.$store.state.videos.length)&&(this.$store.dispatch("updateHistorySearchWords",this.$store.state.searchText),this.$store.dispatch("allowShowVideos",!0))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(97),o=s.n(i),n=s(99),a=s.n(n);e.default={props:{videos:Array},computed:{fetchVideos:function(){return this.$store.state.videos},isLoadingVideos:function(){return this.$store.state.isLoadingVideos}},methods:{pseudoLoaderClass:function(){return{"fade-out":this.$store.state.allowShowVideos}}},components:{"list-item":o.a,"search-message":a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{allowShowVideos:function(){return this.$store.state.allowShowVideos},isLoadingVideos:function(){return this.$store.state.isLoadingVideos},hasSearchText:function(){return this.$store.state.searchText.length>0}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(96),o=s.n(i);e.default={computed:{getHistorySearchWords:function(){return this.$store.state.historySearchWords}},components:{HistoryItem:o.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(95),o=(s.n(i),s(46));e.default={name:"search-input",computed:{inputWrapClassObject:function(){return{"is-focus":this.$store.state.isFocusSearchInput}}},methods:{chkSearchInputlength:function(t){this.$store.dispatch("resetFetchVideos"),this.$store.dispatch("isLoadingVideos",!1),this.$store.dispatch("allowShowVideos",!1),this.$store.dispatch("updateSearchText",t.target.value),""!==t.target.value&&this.$store.dispatch("isLoadingVideos",!0)},updateSearchText:s.i(i.debounce)(function(t){""!==t.target.value&&s.i(o.a)(this.$store)},1e3),focusInput:function(){this.$store.dispatch("isFocusSearchInput",!0)},focusoutInput:function(){this.$store.dispatch("isFocusSearchInput",!1)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(98),o=s.n(i);e.default={name:"items",computed:{hitVideos:function(){return this.$store.state.videos}},components:{ListView:o.a}}},function(t,e,s){"use strict";function i(t,e){return parseInt(t,10)===parseInt(e,10)}e.a=i},function(t,e,s){"use strict";function i(t){return fetch(n+"&key="+a+"&q="+t.state.searchText).then(function(e){return e.json().then(function(e){t.dispatch("resetLoaddedVideoNum"),t.dispatch("allowShowVideos",!1),e.items.length>0?(t.dispatch("updateHitVideo",!0),t.dispatch("updateFetchVideos",e.items)):(t.dispatch("resetFetchVideos"),t.dispatch("isLoadingVideos",!1),t.dispatch("updateHitVideo",!1),t.dispatch("updateHistorySearchWords",t.state.searchText))})})}var o=s(115);s.n(o);e.a=i;var n="https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict",a="AIzaSyD3UHH4HeY7ki2njecykZ2xMx9xToqgYNM"},function(t,e,s){"use strict";var i=s(50),o=s.n(i),n=s(51),a=s.n(n),r=s(52),c=s.n(r),u=function(){function t(e){a()(this,t),this.el=e,this._bindAnimation()}return c()(t,[{key:"_random",value:function(){return 10*Math.floor(20*Math.random())}},{key:"_addClass",value:function(t,e){return new o.a(function(s){t.classList.add(e),s()})}},{key:"_bindAnimation",value:function(){var t=this;this._addClass(this.el,"u-state--1").then(function(){var e=t._random();setTimeout(function(){return t._addClass(t.el,"u-state--2")},50+e)}).then(function(){var e=t._random();setTimeout(function(){return t._addClass(t.el,"u-state--3")},60+e)})}}]),t}();e.a=u},function(t,e,s){"use strict";function i(t){return t.replace(/(\S)/g,'<span class="u-random-word">$1</span>')}e.a=i},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){s(91);var i=s(2)(s(38),s(106),null,null);t.exports=i.exports},function(t,e,s){s(89);var i=s(2)(s(39),s(104),"data-v-0c2a9d57",null);t.exports=i.exports},function(t,e,s){s(90);var i=s(2)(s(40),s(105),"data-v-0d4243e9",null);t.exports=i.exports},function(t,e,s){s(88);var i=s(2)(s(41),s(103),"data-v-008c8aae",null);t.exports=i.exports},function(t,e,s){s(94);var i=s(2)(s(42),s(110),"data-v-cda5e074",null);t.exports=i.exports},function(t,e,s){s(93);var i=s(2)(s(43),s(109),"data-v-b5b1c8e8",null);t.exports=i.exports},function(t,e,s){var i=s(2)(s(44),s(107),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.allowShowVideos&&!t.isLoadingVideos,expression:"!allowShowVideos && !isLoadingVideos"}],staticClass:"l-none-videos-msg"},[s("p",{directives:[{name:"show",rawName:"v-show",value:!t.hasSearchText,expression:"!hasSearchText"}],staticClass:"c-none-videos-msg"},[t._v("Please input search keyword.")]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.hasSearchText,expression:"hasSearchText"}],staticClass:"c-none-videos-msg"},[t._v("No results for "),s("span",{staticClass:"u-strong"},[t._v(t._s(this.$store.state.searchText))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"c-list-item",class:t.listItemClassObject},[t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"c-movie-title"},[t._v("\n    "+t._s(t.video.title)+"\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-movie"},[s("iframe",{attrs:{width:"560",height:"315",src:t.youtubeUrl,frameborder:"0",allowfullscreen:""},on:{load:function(e){t.videoLoaded()}}})],1)}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("search-message"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoadingVideos,expression:"isLoadingVideos"}],staticClass:"preloader"},[s("div",{staticClass:"l-preloader",class:t.pseudoLoaderClass()},[t._m(0)])]),t._v(" "),s("div",{staticClass:"c-list-items"},t._l(t.fetchVideos,function(t,e){return s("list-item",{key:e,attrs:{video:t.snippet,id:t.id.videoId,"data-index":e}})}))],1)},staticRenderFns:[function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"c-preloader"})}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"c-history-item",domProps:{innerHTML:t._s(t.replaceWords(t.word))}})}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-videos"},[s("list-view",{attrs:{videos:t.hitVideos}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),s("div",{staticClass:"l-container"},[s("sidebar"),t._v(" "),s("div",{staticClass:"l-main"},[s("search-input"),t._v(" "),s("router-view")],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("h1",[t._v("Vue Youtube Search")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-input-wrapper",class:t.inputWrapClassObject},[s("input",{staticClass:"c-input",attrs:{type:"text",placeholder:"search keyword..."},on:{input:[function(e){t.chkSearchInputlength(e)},t.updateSearchText],focus:function(e){t.focusInput()},focusout:function(e){t.focusoutInput()}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l-sidebar"},[s("div",{staticClass:"c-sidebar"},[t._m(0),t._v(" "),s("ul",{staticClass:"c-history-list"},t._l(t.getHistorySearchWords,function(t,e){return s("history-item",{key:e,attrs:{word:t}})}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"c-history-title"},[t._v("\n      history\n    ")])}]}},,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(13),o=s(36),n=s.n(o),a=s(34),r=s(35);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,store:r.a,template:"<App/>",components:{App:n.a}})}]),[116]);
//# sourceMappingURL=app.e3dd620e2677edeb9dd9.js.map