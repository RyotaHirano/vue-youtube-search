webpackJsonp([0,2],[,,,function(e,t,s){"use strict";var i=s(1),o=s(39),a=s(30),n=s.n(a);i.a.use(o.a),t.a=new o.a({routes:[{path:"/",name:"Items",component:n.a}]})},function(e,t,s){"use strict";var i=s(1),o=s(41);i.a.use(o.a);var a={videos:[],loadedVideoNum:0,allowShowVideos:!1,searchText:"",isFocusSearchInput:!1,isLoadingVideos:!1,hitVideo:!1,historySearchWords:[]},n={resetFetchVideos:function(e){e.videos=[]},updateFetchVideos:function(e,t){e.videos=t},updateSearchText:function(e,t){e.searchText=t},updateLoadedVideoNum:function(e){e.loadedVideoNum+=1},resetLoaddedVideoNum:function(e){e.loadedVideoNum=0},allowShowVideos:function(e,t){e.allowShowVideos=t},isFocusSearchInput:function(e,t){e.isFocusSearchInput=t},isLoadingVideos:function(e,t){e.isLoadingVideos=t},updateHitVideo:function(e,t){e.hitVideo=t},updateHistorySearchWords:function(e,t){e.historySearchWords.push(t)}},r={resetFetchVideos:function(e){(0,e.commit)("resetFetchVideos")},updateFetchVideos:function(e,t){(0,e.commit)("updateFetchVideos",t)},updateSearchText:function(e,t){(0,e.commit)("updateSearchText",t)},updateLoadedVideoNum:function(e){(0,e.commit)("updateLoadedVideoNum")},resetLoaddedVideoNum:function(e){(0,e.commit)("resetLoaddedVideoNum")},allowShowVideos:function(e,t){(0,e.commit)("allowShowVideos",t)},isFocusSearchInput:function(e,t){(0,e.commit)("isFocusSearchInput",t)},isLoadingVideos:function(e,t){(0,e.commit)("isLoadingVideos",t)},updateHitVideo:function(e,t){(0,e.commit)("updateHitVideo",t)},updateHistorySearchWords:function(e,t){(0,e.commit)("updateHistorySearchWords",t)}},c=new o.a.Store({state:a,mutations:n,actions:r});t.a=c},function(e,t,s){s(21);var i=s(0)(s(6),s(36),null,null);e.exports=i.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(28),o=s.n(i),a=s(29),n=s.n(a);t.default={name:"app",components:{sidebar:o.a,searchInput:n.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{word:String}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(14);t.default={props:{video:Object,id:String},computed:{youtubeUrl:function(){return"https://www.youtube.com/embed/"+this.id},listItemClassObject:function(){return{"fade-in":this.$store.state.allowShowVideos}}},methods:{videoLoaded:function(){return this.$store.dispatch("updateLoadedVideoNum"),!!s.i(i.a)(this.$store.state.loadedVideoNum,this.$store.state.videos.length)&&this.$store.dispatch("allowShowVideos",!0)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(25),o=s.n(i),a=s(27),n=s.n(a);t.default={props:{videos:Array},computed:{fetchVideos:function(){return this.$store.state.videos},isLoadingVideos:function(){return this.$store.state.isLoadingVideos}},methods:{pseudoLoaderClass:function(){return{"fade-out":this.$store.state.allowShowVideos}}},components:{"list-item":o.a,"search-message":n.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{allowShowVideos:function(){return this.$store.state.allowShowVideos},isLoadingVideos:function(){return this.$store.state.isLoadingVideos},hasSearchText:function(){return this.$store.state.searchText.length>0}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(24),o=s.n(i);t.default={computed:{getHistorySearchWords:function(){return this.$store.state.historySearchWords}},components:{HistoryItem:o.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(23),o=(s.n(i),s(15));t.default={name:"search-input",computed:{inputWrapClassObject:function(){return{"is-focus":this.$store.state.isFocusSearchInput}}},methods:{chkSearchInputlength:function(e){this.$store.dispatch("resetFetchVideos"),this.$store.dispatch("isLoadingVideos",!1),this.$store.dispatch("allowShowVideos",!1),this.$store.dispatch("updateSearchText",e.target.value),""!==e.target.value&&this.$store.dispatch("isLoadingVideos",!0)},updateSearchText:s.i(i.debounce)(function(e){""!==e.target.value&&s.i(o.a)(this.$store)},1e3),focusInput:function(){this.$store.dispatch("isFocusSearchInput",!0)},focusoutInput:function(){this.$store.dispatch("isFocusSearchInput",!1)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(26),o=s.n(i);t.default={name:"items",computed:{hitVideos:function(){return this.$store.state.videos}},components:{ListView:o.a}}},function(e,t,s){"use strict";function i(e,t){return parseInt(e,10)===parseInt(t,10)}t.a=i},function(e,t,s){"use strict";function i(e){return fetch(a+"&key="+n+"&q="+e.state.searchText).then(function(t){return t.json().then(function(t){e.dispatch("resetLoaddedVideoNum"),e.dispatch("allowShowVideos",!1),e.dispatch("updateHistorySearchWords",e.state.searchText),t.items.length>0?(e.dispatch("updateHitVideo",!0),e.dispatch("updateFetchVideos",t.items)):(e.dispatch("resetFetchVideos"),e.dispatch("isLoadingVideos",!1),e.dispatch("updateHitVideo",!1))})})}var o=s(43);s.n(o);t.a=i;var a="https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict",n="AIzaSyD3UHH4HeY7ki2njecykZ2xMx9xToqgYNM"},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,s){s(16);var i=s(0)(s(7),s(31),"data-v-19274696",null);e.exports=i.exports},function(e,t,s){s(17);var i=s(0)(s(8),s(32),"data-v-31b806d3",null);e.exports=i.exports},function(e,t,s){s(18);var i=s(0)(s(9),s(33),"data-v-32cfad65",null);e.exports=i.exports},function(e,t,s){s(20);var i=s(0)(s(10),s(35),"data-v-4abedead",null);e.exports=i.exports},function(e,t,s){s(19);var i=s(0)(s(11),s(34),"data-v-47ce86ca",null);e.exports=i.exports},function(e,t,s){s(22);var i=s(0)(s(12),s(37),"data-v-af251ee0",null);e.exports=i.exports},function(e,t,s){var i=s(0)(s(13),s(38),null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{staticClass:"c-history-item"},[e._v("\n  "+e._s(e.word)+"\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c-list-item",class:e.listItemClassObject},[s("h2",{staticClass:"c-movie-title"},[e._v(e._s(e.video.title))]),s("div",{staticClass:"c-movie"},[s("iframe",{attrs:{width:"560",height:"315",src:e.youtubeUrl,frameborder:"0",allowfullscreen:"allowfullscreen"},on:{load:function(t){e.videoLoaded()}}})],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("search-message"),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoadingVideos,expression:"isLoadingVideos"}],staticClass:"preloader"},[s("div",{staticClass:"l-preloader",class:e.pseudoLoaderClass()},[s("span",{staticClass:"c-preloader"})])]),e._v(" "),s("div",{staticClass:"c-list-items"},e._l(e.fetchVideos,function(e,t){return s("list-item",{key:t,attrs:{video:e.snippet,id:e.id.videoId,"data-index":t}})}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"l-sidebar"},[s("div",{staticClass:"c-sidebar"},[s("h3",{staticClass:"c-history-title"},[e._v("\n      history\n    ")]),e._v(" "),s("ul",{staticClass:"c-history-list"},e._l(e.getHistorySearchWords,function(e,t){return s("history-item",{key:t,attrs:{word:e}})}))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:!e.allowShowVideos&&!e.isLoadingVideos,expression:"!allowShowVideos && !isLoadingVideos"}],staticClass:"l-none-videos-msg"},[s("p",{directives:[{name:"show",rawName:"v-show",value:!e.hasSearchText,expression:"!hasSearchText"}],staticClass:"c-none-videos-msg"},[e._v("Please input search keyword.")]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.hasSearchText,expression:"hasSearchText"}],staticClass:"c-none-videos-msg"},[e._v("No results for "),s("span",{staticClass:"u-strong"},[e._v(e._s(this.$store.state.searchText))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),s("div",{staticClass:"l-container"},[s("sidebar"),e._v(" "),s("div",{staticClass:"l-main"},[s("search-input"),e._v(" "),s("router-view")],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"header"},[s("h1",[e._v("Youtube Search")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c-input-wrapper",class:e.inputWrapClassObject},[s("input",{staticClass:"c-input",attrs:{type:"text",placeholder:"search keyword..."},on:{input:[function(t){e.chkSearchInputlength(t)},e.updateSearchText],focus:function(t){e.focusInput()},focusout:function(t){e.focusoutInput()}}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c-videos"},[s("list-view",{attrs:{videos:e.hitVideos}})],1)},staticRenderFns:[]}},,,,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),o=s(5),a=s.n(o),n=s(3),r=s(4);i.a.config.productionTip=!1,new i.a({el:"#app",router:n.a,store:r.a,template:"<App/>",components:{App:a.a}})}],[44]);
//# sourceMappingURL=app.3555863e8260f491f601.js.map