var e,t,s=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;import{c as r,h as i,a as c,g as u,u as d,r as p,b as m,d as f,e as h,f as g,w as y,p as x,i as v,o as b,j as w,k as S,l as k,t as L,m as P,n as C,q as j,s as T,F as E,v as I,x as N,y as M,K as A,z as D,S as _,A as G,B,C as O,D as z,E as V,N as R,G as $}from"./vendor.c2d8d5d1.js";function U(e,t=1){console.log("displayDuration");const s=e=>`0${Math.floor(e)}`.slice(-2),a=e/3600,l=e%3600/60,n=e%60;return 1===t?"00"!==s(a)?`${s(a)} giờ ${s(l)} phút`:`${s(l)} phút`:2===t?[s(l),s(n)].join(":"):void 0}function F(e){const t=Math.floor(e/60)||0,s=Math.round(e-60*t||0);return`${t}:${s<10?"0":""}${s}`}let q;(t=e||(e={})).IDLE="IDLE",t.LOADING="LOADING",t.PLAYING="PLAYING",t.PAUSE="PAUSE";const K=r({state:{theme:"dark",howler:null,currentSong:null,playlist:null,seek:"0:00",playerProgress:0,isMuted:!1,volume:.5,playerState:e.IDLE,showLyric:!1,showPlaylist:!0},mutations:{setTheme(e,t){e.theme=t},setState(e,t){e[t.prop]=t.value},setCurrentSong(e,t){var s;null==(s=e.howler)||s.pause(),e.currentSong=t},toggleShowPlaylist(e){e.showPlaylist=!e.showPlaylist},updateMediaSessionMetaData(e){const t=window.navigator,s=window.MediaMetadata;"mediaSession"in t!=!1&&(t.mediaSession.metadata=new s({title:e.currentSong.title,artist:e.currentSong.artistsNames,album:"Zing MP3",artwork:[{src:e.currentSong.thumbnailM,type:"image/jpg",sizes:"512x512"}]}))},togglePlay(e){var t;(null==(t=e.howler)?void 0:t.playing())?e.howler.pause():e.howler.play()},setVolume(e,t){e.isMuted&&(e.howler.mute(!1),e.isMuted=!1),e.volume=t,e.howler.volume(t)},toggleShowLyric(e){e.showLyric=!e.showLyric},toggleMute(e){e.isMuted=!e.isMuted,e.howler.mute(e.isMuted)}},actions:{loadSong({commit:t,state:s,dispatch:a,getters:l},n){s.howler instanceof i.Howl&&(s.howler.unload(),clearTimeout(q)),t("setState",{prop:"howler",value:new i.Howl({src:[n],html5:!0,volume:s.volume})}),s.howler.on("play",(()=>{console.log("play",s.currentSong.title),clearTimeout(q),t("setState",{prop:"playerState",value:e.PLAYING}),a("progress")})),s.howler.on("pause",(()=>{clearTimeout(q),s.playerState!==e.LOADING&&t("setState",{prop:"playerState",value:e.PAUSE}),console.log("pause",s.currentSong.title)})),s.howler.on("unlock",(()=>{console.log("unlock",s.currentSong.title)})),s.howler.on("stop",(()=>{console.log("stop",s.currentSong.title),t("setState",{prop:"playerState",value:e.PAUSE})})),s.howler.on("end",(()=>{console.log("end",s.currentSong.title),t("setState",{prop:"currentSong",value:l.nextSongs[0]})})),t("updateMediaSessionMetaData"),s.howler.play()},progress({commit:e,state:t,dispatch:s}){q=setTimeout((()=>{console.log("timemout");const a=t.howler.seek();e("setState",{prop:"seek",value:F(a)}),e("setState",{prop:"playerProgress",value:a/t.howler.duration()*100}),s("progress")}),500)},updateSeek({state:e,commit:t},s){t("setState",{prop:"playerProgress",value:s});const a=s/100*e.howler.duration();e.howler.seek(a)},playNext({commit:e,getters:t}){t.nextSongs.length&&e("setState",{prop:"currentSong",value:t.nextSongs[0]})},playPrevious({commit:e,getters:t}){console.log("playPrevious",t.previousSongs),t.previousSongs.length&&e("setState",{prop:"currentSong",value:t.previousSongs[t.previousSongs.length-1]})}},getters:{currentIndex(e){var t;return null==(t=e.playlist)?void 0:t.song.items.findIndex((t=>t.encodeId===e.currentSong.encodeId))},previousSongs:(e,t)=>t.currentIndex<1?[]:e.playlist.song.items.slice(0,t.currentIndex),nextSongs:(e,t)=>t.currentIndex<0?[]:e.playlist.song.items.slice(t.currentIndex+1),duration:e=>F(e.currentSong.duration)}});function Y(){const e=[];function t(t){const s=e.indexOf(t);-1!==s&&e.splice(s,1)}return{on:function(s){return e.push(s),{off:()=>t(s)}},off:t,trigger:function(t){for(const s of e)s(t)}}}const H=(e,t,s={})=>{const{initialData:r,responseAdapter:i,minimumWait:u=500}=s,m=p(r),f=p(W.IDLE),h=p(null),g=Y(),y=Y();return((e,t)=>{for(var s in t||(t={}))l.call(t,s)&&o(e,s,t[s]);if(a)for(var s of a(t))n.call(t,s)&&o(e,s,t[s]);return e})({data:m,status:f,error:h,onSuccess:g.on,onError:y.on,exec:async(...e)=>{try{f.value=W.PENDING;const s=await Promise.all([t(...e),new Promise((e=>setTimeout(e,u)))]);m.value="function"==typeof i?i(s[0]):s[0],f.value=W.SUCCESS,g.trigger(m.value)}catch(s){y.trigger(s),s.value=s,f.value=W.ERROR}},setStatus:e=>f.value=e},((e,t)=>{const s={};for(const[a,l]of Object.entries(W)){let n="";n=t?`${t}Status${d(a.toLowerCase())}`:`status${a.toLowerCase()}`,s[n]=c((()=>l===e.value))}return s})(f,e))};var W,Q;(Q=W||(W={})).IDLE="IDLE",Q.PENDING="PENDING",Q.SUCCESS="SUCCESS",Q.ERROR="ERROR";const X=m.create({baseURL:"/api"});function Z(e){return X({url:"api/playlist/getDetail?id="+e})}function J(e){return X({url:"api/song/streaming?id="+e})}function ee(e=1){return X({url:"api/home?page="+e})}function te(e){return X({url:"api/song/list?id="+e})}function se(e){return X({url:"api/lyric?id="+e})}function ae(e){return X({url:e})}X.interceptors.response.use((e=>(console.log(e),!(!e||!e.data)&&e.data)));var le=f({name:"ProgressBar",props:{progress:Number},emits:["update:progress"],setup(e){const t=((e,t)=>{const s=u().proxy;return c({get:()=>e[t],set(e){s.$emit(`update:${t}`,e)}})})(e,"progress"),s=p(null);function a(e){l(e)}function l(e){const a=s.value.offsetWidth;let l=e.clientX-s.value.getBoundingClientRect().left;l<0&&(l=0),l>a&&(l=a),t.value=l/a*100}function n(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",n)}return{progressLocal:t,progressElement:s,mousedown:function(){document.addEventListener("mousemove",a),document.addEventListener("mouseup",n)},clickOnProgressBar:function(e){l(e)}}}});const ne=y();x("data-v-531862b2");const oe={class:"progress-bg",ref:"progressElement"};v();const re=ne(((e,t,s,a,l,n)=>(b(),h("div",{class:"progress-bar",onMousedown:t[1]||(t[1]=(...t)=>e.mousedown&&e.mousedown(...t)),onClick:t[2]||(t[2]=(...t)=>e.clickOnProgressBar&&e.clickOnProgressBar(...t))},[g("div",oe,[g("div",{class:"progress",style:{width:e.progressLocal+"%"}},null,4)],512)],32))));le.render=re,le.__scopeId="data-v-531862b2";var ie=f({name:"Player",components:{ProgressBar:le},setup(){const t=S(),s=c((()=>t.state.currentSong)),a=c({get:()=>t.state.playerProgress,set(e){t.dispatch("updateSeek",e)}}),l=c({get:()=>100*t.state.volume,set(e){t.commit("setVolume",e/100)}}),{exec:n,onSuccess:o,onError:r}=H("fetchStreaming",J);return o((e=>{t.dispatch("loadSong",e[128])})),r((e=>{console.log("ERROR Fetch",e)})),w((()=>t.state.currentSong),(s=>{t.commit("setState",{prop:"playerState",value:e.LOADING}),console.log("fetch",t.state.playerState),n(s.encodeId)}),{immediate:!0}),{song:s,playerProgress:a,volume:l,seek:c((()=>t.state.seek)),PlayerState:e,playerState:c((()=>t.state.playerState)),isMuted:c((()=>t.state.isMuted)),showLyric:c((()=>t.state.showLyric)),duration:c((()=>t.getters.duration)),togglePlay:()=>t.commit("togglePlay"),toggleMute:()=>t.commit("toggleMute"),toggleShowLyric:()=>t.commit("toggleShowLyric"),toggleShowPlaylist:()=>t.commit("toggleShowPlaylist"),playNext:()=>t.dispatch("playNext"),playPrevious:()=>t.dispatch("playPrevious")}}});const ce=y();x("data-v-c125255a");const ue={class:"flex items-center w-full pl-10 pr-5 space-x-2 h-22"},de={class:"flex w-1/3 space-x-3"},pe={class:"relative flex-shrink-0"},me=g("svg",{fill:"currentColor",viewBox:"0 0 512 512",class:"note note-1"},[g("path",{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"})],-1),fe=g("svg",{fill:"currentColor",viewBox:"0 0 384 512",class:"note note-2"},[g("path",{d:"M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"})],-1),he=g("svg",{fill:"currentColor",viewBox:"0 0 512 512",class:"note note-3"},[g("path",{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"})],-1),ge=g("svg",{fill:"currentColor",viewBox:"0 0 384 512",class:"note note-4"},[g("path",{d:"M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"})],-1),ye={class:"flex flex-col justify-center space-y-1 overflow-hidden"},xe={class:"font-semibold truncate text-md text-primary"},ve={class:"text-xs text-secondary"},be=C('<div class="flex place-items-center" data-v-c125255a><button class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-alpha" data-v-c125255a><i class="flex ic-like" data-v-c125255a></i></button><button class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-alpha" data-v-c125255a><i class="flex ic-more" data-v-c125255a></i></button></div>',1),we={class:"flex items-center justify-center space-x-4"},Se=g("button",{class:"flex items-center justify-center w-8 h-8 text-base rounded-full focus:outline-none text-primary hover:bg-alpha"},[g("i",{class:"flex ic-shuffle"})],-1),ke=g("i",{class:"flex ic-pre"},null,-1),Le=g("i",{class:"flex ic-next"},null,-1),Pe=g("button",{class:"flex items-center justify-center w-8 h-8 text-base rounded-full focus:outline-none text-primary hover:bg-alpha"},[g("i",{class:"flex ic-repeat"})],-1),Ce={class:"flex items-center space-x-3"},je={class:"text-xs font-semibold text-secondary"},Te={class:"text-xs font-bold text-primary"},Ee={class:"flex items-center justify-end w-1/3"},Ie={key:0,class:"text-secondary flex items-center justify-center w-8 h-8 rounded-full hover:bg-alpha focus:outline-none"},Ne=g("i",{class:"flex ic-mv"},null,-1),Me=g("i",{class:"flex ic-karaoke"},null,-1),Ae={class:"flex items-center ml-2 space-x-2"},De={class:"pl-4 ml-6 border-l btn-toggle border-alpha"},_e=g("i",{class:"flex ic-list-music"},null,-1);v();const Ge=ce(((e,t,s,a,l,n)=>{const o=k("Loading"),r=k("ProgressBar");return e.song?(b(),h("div",{key:0,id:"player",class:["fixed bottom-0 w-full border-t bg-primary border-alpha",{playing:e.playerState===e.PlayerState.PLAYING,"border-none bg-transparent":e.showLyric}]},[g("div",ue,[g("div",de,[g("div",pe,[g("img",{class:"thumbnail",src:e.song.thumbnail,alt:"thumbnail"},null,8,["src"]),me,fe,he,ge]),g("div",ye,[g("h4",xe,L(e.song.title),1),g("p",ve,L(e.song.artistsNames),1)]),be]),g("div",{class:["flex-grow transform -translate-x-5",e.showLyric&&"flex flex-col-reverse"]},[g("div",we,[Se,g("button",{onClick:t[1]||(t[1]=(...t)=>e.playPrevious&&e.playPrevious(...t)),class:"flex items-center justify-center w-8 h-8 text-base rounded-full focus:outline-none text-primary hover:bg-alpha"},[ke]),g("button",{onClick:t[2]||(t[2]=(...t)=>e.togglePlay&&e.togglePlay(...t)),disabled:e.playerState===e.PlayerState.LOADING,class:"flex items-center justify-center w-12 h-12 text-4xl rounded-full focus:outline-none text-primary"},[g("i",{class:["flex",{"ic-pause-circle-outline":e.playerState===e.PlayerState.PLAYING,"ic-play-circle-outline":e.playerState===e.PlayerState.PAUSE}]},null,2),e.playerState===e.PlayerState.LOADING?(b(),h(o,{key:0})):P("",!0)],8,["disabled"]),g("button",{onClick:t[3]||(t[3]=(...t)=>e.playNext&&e.playNext(...t)),class:"flex items-center justify-center w-8 h-8 text-base rounded-full focus:outline-none text-primary hover:bg-alpha"},[Le]),Pe]),g("div",Ce,[g("span",je,L(e.seek),1),g(r,{progress:e.playerProgress,"onUpdate:progress":t[4]||(t[4]=t=>e.playerProgress=t)},null,8,["progress"]),g("span",Te,L(e.duration),1)])],2),g("div",Ee,[e.song.mvlink?(b(),h("button",Ie,[Ne])):P("",!0),g("button",{onClick:t[5]||(t[5]=(...t)=>e.toggleShowLyric&&e.toggleShowLyric(...t)),class:"text-secondary flex items-center justify-center w-8 h-8 ml-2 rounded-full hover:bg-alpha focus:outline-none"},[Me]),g("div",Ae,[g("button",{onClick:t[6]||(t[6]=(...t)=>e.toggleMute&&e.toggleMute(...t)),class:"text-secondary flex items-center justify-center w-8 h-8 rounded-full hover:bg-alpha focus:outline-none"},[g("i",{class:["flex",e.isMuted?"ic-volume-mute":"ic-volume"]},null,2)]),g(r,{style:{width:"70px"},progress:e.volume,"onUpdate:progress":t[7]||(t[7]=t=>e.volume=t)},null,8,["progress"])]),g("div",De,[g("button",{onClick:t[8]||(t[8]=(...t)=>e.toggleShowPlaylist&&e.toggleShowPlaylist(...t)),class:"text-secondary flex items-center justify-center w-8 h-8 rounded-full hover:bg-alpha focus:outline-none"},[_e])])])])],2)):P("",!0)}));ie.render=Ge,ie.__scopeId="data-v-c125255a";function Be(e,t){return function({sentences:e=[],start:t,end:s}={},a){const l=e.length;let n=[];if(!l||t-a>6e3||a>s)return n;if(a<e[1].start)return n=e.slice(0,2),n.forEach((e=>e.alpha=1)),n;if(a>e[l-2].end)return n=e.slice(l-2),n.forEach((e=>e.alpha=1)),n;for(let o=0;o<l;o++){const t=e[o];if(a>=t.start&&a<t.end){n.push(t);const s=(a-t.start)/t.duration;if(s<=.4){const t=e[o-1];if(t){const e=1-s/.4;t.alpha=e,n.push(t)}break}if(s>=.4){const t=e[o+1];if(t){const e=(s-.4)/.4;t.alpha=e,n.push(t)}break}break}if(a<t.end){n.push(t),n.push(e[o-1]),n.forEach((e=>e.alpha=1));break}}return n}(e.find((e=>t<e.end)),t)}var Oe=f({name:"Karaoke",props:{sentences:Array},setup(t){const s=S(),a=c((()=>s.state.currentSong)),l=c((()=>s.state.theme)),n=c((()=>({primary:"dark"===l.value?"#fff":"#000",stroke:"#7200a1"})));let o,r=0,i=0;const u=p(null);let d,m;j((()=>{o=u.value.getContext("2d"),r=u.value.width,i=u.value.height,o.textAlign="center",o.textBaseline="middle",g(),d=function(e=[],t){t.font="bold 50px sans-serif";const s=e.length-1,a=[];let l=[],n=0,o=0;return e.forEach(((e,r)=>{const i=e.words.reduce(((e,t)=>e+t.data+" "),"").trim();if(!i)return;const c=t.measureText(i).width;let u="";const d=e.words.map((e=>{const s=t.measureText(u).width/c,a=t.measureText(e.data).width/c;return u=u+e.data+" ",{start:e.startTime,end:e.endTime,duration:e.endTime-e.startTime,text:e.data,startAt:s,perInSentence:a}})),p=e.words[0].startTime,m=e.words[e.words.length-1].endTime,f=l[r-1];let h;f&&p<f.end&&(f.end=p),p-n>1e4&&(h={items:[1,2,3].map((e=>({count:e,start:p-1e3*(e+1),end:p-1e3*e}))),sentenceTextWidth:c}),n=m,l.length&&h&&(a.push({sentences:l,start:l[0].start,end:l[l.length-1].end}),l=[],o=0),l.push({index:o,start:p,end:m,duration:m-p,text:i,words:d,alpha:1,countdown:h}),o++,r===s&&a.push({sentences:l,start:l[0].start,end:l[l.length-1].end})})),a}(t.sentences,o),w((()=>s.state.playerState),(t=>{t===e.PLAYING?h():clearTimeout(m)}),{immediate:!0})})),T((()=>{clearTimeout(m)}));const f=p(0);function h(){const e=1e3*s.state.howler.seek();e<d[0].start-4e3?g():function(e){o.fillStyle=n.value.primary,o.clearRect(0,0,r,i);Be(d,e).forEach((({text:t,start:s,end:a,words:l,index:c,alpha:u})=>{const d=o.measureText(t),p=o.createLinearGradient((r-d.width)/2,0,(r+d.width)/2,0);if(o.globalAlpha=u,e>a)p.addColorStop(1,n.value.stroke);else if(e<s)p.addColorStop(1,n.value.primary);else{o.globalAlpha=1;let t=0;for(let s=0;s<l.length;s++){const a=l[s];if(e>a.end)continue;t=a.startAt;const n=(e-a.start)/a.duration||0;if(n<0)break;t=Math.min(t+n*a.perInSentence,1);break}p.addColorStop(t,n.value.stroke),p.addColorStop(t,n.value.primary)}const m=(i-175)/2+c%2*125,f=r/2;o.fillStyle=p,o.fillText(t,f,m)}))}(1e3*s.state.howler.seek()),e>=d[0].start-4e3&&e<d[0].start&&(f.value=Math.round((d[0].start-e)/1e3)),m=setTimeout(h,50)}function g(){o.clearRect(0,0,r,i),o.fillStyle=n.value.primary;const e=[60,40];[a.value.title,a.value.artistsNames].forEach(((t,s)=>{const a=i/2+125*s-62.5,l=r/2;o.font=`bold ${e[s]}px Arial`,o.fillText(t,l,a)}))}return{canvasEl:u,countdown:f}}});const ze={key:0,class:"absolute text-2xl font-bold text-center transform -translate-x-1/2 left-1/2"},Ve={id:"canvas",width:"1500",height:"600",ref:"canvasEl",class:"w-full h-full mx-auto"};var Re,$e;Oe.render=function(e,t,s,a,l,n){return b(),h("div",null,[e.countdown<=3&&e.countdown>0?(b(),h("h4",ze,L(e.countdown),1)):P("",!0),g("canvas",Ve,null,512)])},($e=Re||(Re={})).Lyric="LYRIC",$e.Karaoke="KARAOKE";var Ue=f({name:"LyricModal",components:{Karaoke:Oe},setup(){const t=p(Re.Lyric),s=S(),a=p([]),{data:l,exec:n,status:o,onSuccess:r}=H("fetchLyric",se),{exec:i,onSuccess:u}=H("fetchKaraokeLyric",ae);w((()=>s.state.currentSong),(()=>{console.log("fetch lyric"),n(s.state.currentSong.encodeId)}),{immediate:!0}),r((e=>{console.log("lyricDone",e),i(e.file)})),u((e=>{a.value=function(e){const t=e.split("\n"),s=[];for(let a=0;a<t.length;a++){const e=decodeURIComponent(t[a]),l=/\[\d*:\d*((\.|:)\d*)*\]/g,n=e.match(l);if(!n)continue;const o=e.replace(l,"");for(let t=0,a=n.length;t<a;t++){const e=n[t],a=60*Number(String(e.match(/\[\d*/i)).slice(1))+Number(String(e.match(/:\d*/i)).slice(1));""!==o&&s.push({time:a,content:o})}}return s}(e)})),j((()=>{document.body.style.overflow="hidden"})),T((()=>{document.body.style.overflow=""}));const d=p(0);let m;function f(){const e=s.state.howler.seek();d.value=a.value.findIndex(((t,s)=>{const l=a.value[s+1];return l?e>=t.time&&e<l.time:e>=t.time})),m=setTimeout(f,200)}return w(d,(e=>{const t=document.getElementById(`sentence-${e}`);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})),w((()=>s.state.playerState),(t=>{t===e.PLAYING?f():clearTimeout(m)}),{immediate:!0}),{tab:t,Tab:Re,sentences:a,currentSentenceIndex:d,toggleShowLyric:()=>s.commit("toggleShowLyric"),seekLyric:function(e){s.state.howler.seek(e)},lyricData:l,status:o,ApiStatus:W,currentSong:c((()=>s.state.currentSong))}}});const Fe={class:"fixed inset-0 z-40 pb-20 bg-primary"},qe={class:"flex flex-col justify-between h-full pt-5"},Ke={class:"relative flex items-center"},Ye={class:"absolute w-1/4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"},He={class:"flex p-1 rounded-full bg-alpha"},We={class:"flex ml-auto mr-5 space-x-4"},Qe=g("button",{class:"text-primary flex items-center justify-center w-12 h-12 text-xl rounded-full bg-alpha"},[g("i",{class:"flex ic-settings"})],-1),Xe=g("i",{class:"flex ic-go-down"},null,-1),Ze={key:0,class:"flex justify-center"},Je={class:"flex w-4/5 max-w-5xl mx-auto space-x-4"},et={class:"flex-1 overflow-y-auto hide-scrollbar",style:{"max-height":"400px"}},tt={class:"text-center"},st={class:"text-sm font-bold text-primary"},at={class:"text-sm text-secondary"};Ue.render=function(e,t,s,a,l,n){const o=k("Loading"),r=k("Karaoke");return b(),h("div",Fe,[g("div",qe,[g("div",Ke,[g("div",Ye,[g("div",He,[g("button",{onClick:t[1]||(t[1]=t=>e.tab=e.Tab.Karaoke),class:["flex-1 px-2 py-1 text-base focus:outline-none text-secondary",e.tab===e.Tab.Karaoke&&"font-semibold rounded-full bg-active text-primary"]},"Karaoke",2),g("button",{onClick:t[2]||(t[2]=t=>e.tab=e.Tab.Lyric),class:["flex-1 px-2 py-1 text-base focus:outline-none text-secondary",e.tab===e.Tab.Lyric&&"font-semibold rounded-full bg-active text-primary"]},"Lyric",2)])]),g("div",We,[Qe,g("button",{onClick:t[3]||(t[3]=(...t)=>e.toggleShowLyric&&e.toggleShowLyric(...t)),class:"text-primary flex items-center justify-center w-12 h-12 text-xl rounded-full bg-alpha"},[Xe])])]),e.status===e.ApiStatus.PENDING?(b(),h("div",Ze,[g(o)])):P("",!0),e.status===e.ApiStatus.SUCCESS?(b(),h(E,{key:1},[I(g("div",Je,[g("img",{class:"rounded-lg",style:{width:"400px"},src:e.currentSong.thumbnailM,alt:"thumbnail"},null,8,["src"]),g("div",et,[(b(!0),h(E,null,M(e.sentences,((t,s)=>(b(),h("div",{key:`${s}-${t.content.trim()}`,id:`sentence-${s}`,class:["text-2xl font-bold text-secondary p-2.5 rounded-lg cursor-pointer hover:bg-alpha",e.currentSentenceIndex===s&&"text-progress bg-alpha"],onClick:s=>e.seekLyric(t.time)},L(t.content),11,["id","onClick"])))),128))])],512),[[N,e.tab===e.Tab.Lyric]]),(b(),h(A,null,[e.tab===e.Tab.Karaoke?(b(),h(r,{key:0,sentences:e.lyricData.sentences},null,8,["sentences"])):P("",!0)],1024))],64)):P("",!0),g("div",tt,[g("span",st,L(e.currentSong.title),1),g("span",at," - "+L(e.currentSong.artistsNames),1)])])])};var lt={beforeMount(e,t){e.__ClickOutsideHandler__=s=>{e===s.target||e.contains(s.target)||t.value(s)},document.body.addEventListener("click",e.__ClickOutsideHandler__)},beforeUnmount(e){document.body.removeEventListener("click",e.__ClickOutsideHandler__)}},nt=f({name:"SongQueue",props:{song:Object,active:Boolean},setup(t){const s=S();return{play:function(){console.log("PPLAY"),t.active?s.commit("togglePlay"):setTimeout((()=>{s.commit("setCurrentSong",t.song)}),0)},isPlaying:c((()=>s.state.playerState===e.PLAYING)),isLoading:c((()=>s.state.playerState===e.LOADING))}}});const ot=y();x("data-v-64b0a44c");const rt={class:"relative flex-shrink-0 overflow-hidden rounded"},it={class:"overflow-hidden select-none"};v();const ct=ot(((e,t,s,a,l,n)=>{const o=k("Loading");return b(),h("div",{onDblclick:t[2]||(t[2]=(...t)=>e.play&&e.play(...t)),class:["song-wrapper flex items-start p-2 space-x-2.5 rounded",{"bg-bg":e.active,"hover:bg-alpha":!e.active}]},[g("div",rt,[g("img",{class:"w-10 h-10",src:e.song.thumbnail,alt:"thumbnail"},null,8,["src"]),g("div",{class:["absolute inset-0 bg-black opacity-0 overlay hover:opacity-100 bg-opacity-40",e.active&&"opacity-100"]},[g("button",{onClick:t[1]||(t[1]=D(((...t)=>e.play&&e.play(...t)),["prevent"])),disabled:e.isLoading&&e.active,class:"flex items-center justify-center w-full h-full text-white focus:outline-none"},[I(g("i",{class:["flex icon ",{"ic-gif-playing-white":e.active&&e.isPlaying,"ic-play":e.active&&!e.isPlaying||!e.active}]},null,2),[[N,!e.isLoading]]),e.isLoading&&e.active?(b(),h(o,{key:0})):P("",!0)],8,["disabled"])],2)]),g("div",it,[g("h4",{class:["text-sm font-bold truncate text-primary",e.active&&"text-white"],title:e.song.title},L(e.song.title),11,["title"]),g("p",{class:["mt-0.5 text-xs text-secondary",e.active&&"text-gray-100"]},L(e.song.artistsNames),3)])],34)}));nt.render=ct,nt.__scopeId="data-v-64b0a44c";var ut=f({name:"Playlist",components:{SongQueue:nt},directives:{clickOutside:lt},setup(){const e=S(),t=c((()=>e.state.currentSong)),s=c((()=>e.state.showPlaylist)),a=p(null);return j((()=>{_.init(a.value,{damping:.2})})),T((()=>{_.destroy(a.value)})),{currentSong:t,scroll:a,playlist:c((()=>e.state.playlist)),showPlaylist:s,previousSongs:c((()=>e.getters.previousSongs)),nextSongs:c((()=>e.getters.nextSongs)),close:function(t){if(!s.value)return;document.getElementById("player").contains(t.target)||e.commit("toggleShowPlaylist")}}}});const dt=y();x("data-v-7dd59cc9");const pt=C('<div class="z-20 flex items-center px-2 py-4 space-x-1 h-17 bg-primary" data-v-7dd59cc9><div class="flex p-1 rounded-full bg-alpha" data-v-7dd59cc9><button class="focus:outline-none px-3 font-semibold py-1.5 text-xs rounded-full bg-active text-primary" data-v-7dd59cc9>Danh sách phát</button><button class="focus:outline-none px-3 font-semibold py-1.5 text-xs rounded-full text-secondary" data-v-7dd59cc9>Nghe gần đây</button></div><button class="flex items-center justify-center w-8 h-8 text-white rounded-full focus:outline-none bg-bg" data-v-7dd59cc9><i class="flex ic-clock" data-v-7dd59cc9></i></button><button class="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none text-secondary bg-alpha" data-v-7dd59cc9><i class="flex ic-more" data-v-7dd59cc9></i></button></div>',1),mt={class:"px-2 overflow-auto h-main",ref:"scroll"},ft={class:"mt-3"},ht=g("h4",{class:"text-sm font-bold"},"Tiếp theo",-1),gt={class:"text-sm font-semibold text-secondary"},yt=B("Từ playlist "),xt={class:"text-bg"},vt={class:"mt-2"};v();const bt=dt(((e,t,s,a,l,n)=>{const o=k("SongQueue"),r=G("click-outside");return I((b(),h("aside",{class:"flex-shrink-0 border-l playlist w-80 border-border",style:{transform:e.showPlaylist?"translateX(0)":""}},[pt,g("div",mt,[(b(!0),h(E,null,M(e.previousSongs,(e=>(b(),h(o,{key:e.title,song:e,class:"opacity-50 hover:opacity-100"},null,8,["song"])))),128)),g(o,{active:!0,song:e.currentSong},null,8,["song"]),g("div",ft,[ht,g("p",gt,[yt,g("span",xt,L(e.playlist.title),1)])]),g("div",vt,[(b(!0),h(E,null,M(e.nextSongs,(e=>(b(),h(o,{key:e.title,song:e},null,8,["song"])))),128))])],512)],4)),[[r,e.close]])}));ut.render=bt,ut.__scopeId="data-v-7dd59cc9";var wt=f({name:"ThemeModal",emits:["setTheme","update:modelValue"]});const St={class:"rounded-md mx-auto max-w-4xl py-4 px-8 bg-primary",style:{width:"70vw"}},kt={class:"flex items-center justify-between"},Lt=g("h2",{class:"text-2xl font-bold"},"Giao Diện",-1),Pt=g("i",{class:"flex ic-close"},null,-1),Ct={class:"mt-2"},jt=g("h3",{class:"text-base font-bold"},"Color",-1),Tt={class:"flex items-center space-x-4 mt-2"},Et={class:"w-1/5 "},It=g("img",{class:"w-full",src:"https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/dark.jpg",alt:"theme dark"},null,-1),Nt=g("p",{class:"text-sm mt-2"},"Black",-1),Mt={class:"w-1/5 "},At=g("img",{class:"w-full",src:"https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/light.jpg",alt:"theme light"},null,-1),Dt=g("p",{class:"text-sm mt-2"},"White",-1);wt.render=function(e,t,s,a,l,n){return b(),h("div",{onClick:t[4]||(t[4]=D((t=>e.$emit("update:modelValue",!1)),["self"])),class:"fixed inset-0 w-full h-full z-50 flex items-center bg-black bg-opacity-70"},[g("div",St,[g("div",kt,[Lt,g("button",{onClick:t[1]||(t[1]=t=>e.$emit("update:modelValue",!1)),class:"text-2xl","aria-label":"close"},[Pt])]),g("div",Ct,[jt,g("div",Tt,[g("div",Et,[g("button",{onClick:t[2]||(t[2]=t=>e.$emit("setTheme","dark")),class:"rounded overflow-hidden"},[It]),Nt]),g("div",Mt,[g("button",{onClick:t[3]||(t[3]=t=>e.$emit("setTheme","light")),class:"border border-primary rounded overflow-hidden"},[At]),Dt])])])])])};var _t={components:{Player:ie,Lyric:Ue,Playlist:ut,ThemeModal:wt},setup(){const e=S(),t=p(null),s=p(!1);j((()=>{document.body.offsetWidth<1637&&e.commit("setState",{prop:"showPlaylist",value:!1}),_.init(t.value,{damping:.2})})),T((()=>{_.destroy(t.value)}));const a=c((()=>!!e.state.playlist)),l=c((()=>e.state.showLyric)),n=c((()=>e.state.currentSong));return{main:t,theme:c((()=>e.state.theme)),setTheme:function(t){e.commit("setTheme",t)},nav1:[{text:"Cá Nhân",iconClass:"ic-library"},{text:"Khám Phá",iconClass:"ic-mn-home"},{text:"#zingchart",iconClass:"ic-mn-zingchart"},{text:"Theo Dõi",iconClass:"ic-feed"}],nav2:[{text:"Nhạc Mới",iconClass:"ic-mn-song"},{text:"Thể Loại",iconClass:"ic-mn-catalogue"},{text:"Top 100",iconClass:"ic-mn-top100"},{text:"MV",iconClass:"ic-mn-mv"}],showLyricModal:l,hasPlaylist:a,currentSong:n,showModal:s}}};const Gt={class:"flex"},Bt={class:"aside"},Ot={class:"px-6 py-4"},zt=g("div",{class:"logo"},null,-1),Vt={href:"#",class:"nav-link"},Rt={class:"nav-text"},$t=g("div",{class:"divider"},null,-1),Ut={href:"#",class:"nav-link"},Ft={class:"nav-text"},qt={class:"flex-grow"},Kt={class:"sticky top-0 z-20 flex items-center px-4 py-2 space-x-2 shadow-sm h-17 bg-primary"},Yt=C('<div class="flex items-center flex-shrink-0"><button class="flex items-center p-2"><i class="flex h-5 text-xl leading-normal ic-back text-primary"></i></button><button class="flex items-center p-2"><i class="flex h-5 text-xl leading-normal ic-forward text-primary"></i></button></div><div class="flex flex-auto"><div class="relative w-full max-w-xl mr-auto"><button class="absolute p-2 transition transform -translate-y-1/2 rounded-full outline-none hover:bg-alpha top-1/2" aria-label="search"><i class="flex h-5 text-xl text-secondary ic-search"></i></button><input class="block w-full py-2 pl-10 pr-6 text-sm rounded-full outline-none text-secondary bg-alpha" type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV"></div></div>',2),Ht={class:"flex items-center space-x-2"},Wt=g("svg",{class:"w-5 h-5",viewBox:"0 0 20 20"},[g("defs",null,[g("linearGradient",{id:"j32lhg93hd",x1:"62.206%",x2:"18.689%",y1:"70.45%",y2:"39.245%"},[g("stop",{offset:"0%","stop-color":"#F81212"}),g("stop",{offset:"100%","stop-color":"red"})]),g("linearGradient",{id:"hjoavsus6g",x1:"50%",x2:"11.419%",y1:"23.598%",y2:"71.417%"},[g("stop",{offset:"0%","stop-color":"#00F"}),g("stop",{offset:"100%","stop-color":"#0031FF"})]),g("linearGradient",{id:"la1y5u3dvi",x1:"65.655%",x2:"25.873%",y1:"18.825%",y2:"56.944%"},[g("stop",{offset:"0%","stop-color":"#FFA600"}),g("stop",{offset:"100%","stop-color":"orange"})]),g("linearGradient",{id:"2dsmrlvdik",x1:"24.964%",x2:"63.407%",y1:"8.849%",y2:"55.625%"},[g("stop",{offset:"0%","stop-color":"#13EFEC"}),g("stop",{offset:"100%","stop-color":"#00E8DF"})]),g("filter",{id:"4a7imk8mze",width:"230%",height:"230%",x:"-65%",y:"-65%",filterUnits:"objectBoundingBox"},[g("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"3.9"})]),g("filter",{id:"301mo6jeah",width:"312.7%",height:"312.7%",x:"-106.4%",y:"-106.4%",filterUnits:"objectBoundingBox"},[g("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"3.9"})]),g("filter",{id:"b2zvzgq7fj",width:"295%",height:"295%",x:"-97.5%",y:"-97.5%",filterUnits:"objectBoundingBox"},[g("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"3.9"})]),g("filter",{id:"a1wq161tvl",width:"256%",height:"256%",x:"-78%",y:"-78%",filterUnits:"objectBoundingBox"},[g("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"3.9"})]),g("path",{id:"qtpqrj1oda",d:"M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"}),g("path",{id:"jggzvnjgfc",d:"M0 0H20V20H0z"}),g("path",{id:"2eiwxjmc7m",d:"M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"})]),g("g",{fill:"none","fill-rule":"evenodd",transform:"translate(2 3)"},[g("mask",{id:"tinejqaasb",fill:"#fff"},[g("use",{"xlink:href":"#qtpqrj1oda"})]),g("use",{fill:"#FFF","fill-opacity":"0","xlink:href":"#qtpqrj1oda"}),g("g",{mask:"url(#tinejqaasb)"},[g("g",{transform:"translate(-2 -3)"},[g("mask",{id:"uf3ckvfvpf",fill:"#fff"},[g("use",{"xlink:href":"#jggzvnjgfc"})]),g("use",{fill:"#D8D8D8","xlink:href":"#jggzvnjgfc"}),g("circle",{cx:"8.9",cy:"6.8",r:"9",fill:"url(#j32lhg93hd)",filter:"url(#4a7imk8mze)",mask:"url(#uf3ckvfvpf)"}),g("circle",{cx:"9.3",cy:"13.7",r:"5.5",fill:"url(#hjoavsus6g)",filter:"url(#301mo6jeah)",mask:"url(#uf3ckvfvpf)"}),g("circle",{cx:"15.9",cy:"6.9",r:"6",fill:"url(#la1y5u3dvi)",filter:"url(#b2zvzgq7fj)",mask:"url(#uf3ckvfvpf)"}),g("circle",{cx:"16.4",cy:"17.7",r:"7.5",fill:"url(#2dsmrlvdik)",filter:"url(#a1wq161tvl)",mask:"url(#uf3ckvfvpf)"})])]),g("use",{fill:"#FFF","fill-opacity":"0.05","xlink:href":"#2eiwxjmc7m"})])],-1),Qt=C('<button aria-label="upload" class="flex items-center justify-center w-10 h-10 rounded-full bg-alpha"><i class="flex w-5 h-5 text-xl ic-upload text-secondary"></i></button><button aria-label="setting" class="flex items-center justify-center w-10 h-10 rounded-full bg-alpha"><i class="flex w-5 h-5 text-xl ic-settings text-secondary"></i></button><button aria-label="profile" class="relative overflow-hidden border-2 border-yellow-400 rounded-full w-11 h-11"><img src="https://s120-ava-talk.zadn.vn/2/4/9/3/21/120/58a03ada3f14043029fe8b521af00648.jpg" alt="logo" width="45"><i class="ic-vip"></i></button>',3),Xt={class:"py-5"};let Zt;_t.render=function(e,t,s,a,l,n){const o=k("router-link"),r=k("router-view"),i=k("Playlist"),c=k("Player"),u=k("Lyric"),d=k("ThemeModal");return b(),h("div",{id:"main",class:"light"===a.theme?"theme-light":"theme-dark"},[g("div",Gt,[g("aside",Bt,[g("div",null,[g("div",Ot,[g(o,{to:"/"},{default:O((()=>[zt])),_:1})]),g("nav",null,[g("ul",null,[(b(!0),h(E,null,M(a.nav1,((e,t)=>(b(),h("li",{class:{active:1===t},key:e.text},[g("a",Vt,[g("i",{class:[e.iconClass,"nav-icon"]},null,2),g("span",Rt,L(e.text),1)])],2)))),128))])]),$t,g("nav",null,[g("ul",null,[(b(!0),h(E,null,M(a.nav2,(e=>(b(),h("li",{key:e.text},[g("a",Ut,[g("i",{class:[e.iconClass,"nav-icon"]},null,2),g("span",Ft,L(e.text),1)])])))),128))])])])]),g("div",qt,[g("header",Kt,[Yt,g("div",Ht,[g("button",{onClick:t[1]||(t[1]=e=>a.showModal=!0),"aria-label":"layout",class:"flex items-center justify-center w-10 h-10 rounded-full bg-alpha"},[Wt]),Qt])]),g("main",{ref:"main",class:["px-9",a.currentSong?"h-main":"h-main-2"]},[g("div",Xt,[g(r)])],2)]),a.hasPlaylist&&a.currentSong?(b(),h(i,{key:0})):P("",!0)]),a.currentSong?(b(),h(c,{key:0,class:"z-50"})):P("",!0),(b(),h(A,null,[a.showLyricModal?(b(),h(u,{key:0})):P("",!0)],1024)),a.showModal?(b(),h(d,{key:1,modelValue:a.showModal,"onUpdate:modelValue":t[2]||(t[2]=e=>a.showModal=e),onSetTheme:a.setTheme},null,8,["modelValue","onSetTheme"])):P("",!0)],2)};const Jt={},es=function(e,t){if(!t)return e();if(void 0===Zt){const e=document.createElement("link").relList;Zt=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in Jt)return;Jt[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":Zt,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},ts=[{path:"/",component:()=>es((()=>import("./Home.c4e83550.js")),["/assets/Home.c4e83550.js","/assets/Home.345d0d88.css","/assets/vendor.c2d8d5d1.js"])},{path:"/album/:path/:id",component:()=>es((()=>import("./Album.96c8bacd.js")),["/assets/Album.96c8bacd.js","/assets/Album.9fe093dc.css","/assets/vendor.c2d8d5d1.js"])},{path:"/:path(.*)*",component:()=>es((()=>import("./NotFound.a284ddf5.js")),["/assets/NotFound.a284ddf5.js","/assets/vendor.c2d8d5d1.js"])}];var ss=z({history:V(),routes:ts});R.configure({easing:"ease",speed:400,showSpinner:!1});var as=f({name:"BaseCard",props:{list:Object},setup(e){const{exec:t,onSuccess:s}=H("fetchSongList",te);s((e=>{a.commit("setState",{prop:"playlist",value:e}),a.commit("setState",{prop:"currentSong",value:e.song.items[0]})}));const a=S();return{fetchListAndPlay:function(){t(e.list.encodeId)}}}});const ls=y();x("data-v-34ca8036");const ns={class:"card"},os={class:"card-main"},rs={class:"card-overlay"},is=g("button",{class:"focus:outline-none flex items-center justify-center text-xl text-white"},[g("i",{class:"flex ic-like"})],-1),cs=g("i",{class:"flex ic-play"},null,-1),us=g("button",{class:"focus:outline-none flex items-center justify-center text-xl text-white"},[g("i",{class:"flex ic-more"})],-1);v();const ds=ls(((e,t,s,a,l,n)=>{const o=k("router-link");return b(),h("div",ns,[g("div",os,[g("img",{src:e.list.thumbnail,alt:"img"},null,8,["src"]),g("div",rs,[is,g("button",{onClick:t[1]||(t[1]=(...t)=>e.fetchListAndPlay&&e.fetchListAndPlay(...t)),class:"focus:outline-none flex items-center justify-center text-xl text-white border border-white rounded-full w-11 h-11 hover:text-gray-200 hover:border-gray-200"},[cs]),us])]),g(o,{to:e.list.link.split(".")[0],title:e.list.title,class:"card-title"},{default:ls((()=>[B(L(e.list.title),1)])),_:1},8,["to","title"])])}));as.render=ds,as.__scopeId="data-v-34ca8036";const ps={class:"lds-spinner",width:"40",height:"40",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",style:{background:"0 0"}},ms=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})],-1),fs=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(30 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})],-1),hs=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(60 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})],-1),gs=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(90 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})],-1),ys=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(120 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})],-1),xs=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(150 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})],-1),vs=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(180 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})],-1),bs=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(210 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})],-1),ws=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(240 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})],-1),Ss=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(270 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})],-1),ks=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(300 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})],-1),Ls=g("rect",{x:"47",y:"24",rx:"3.76",ry:"1.92",width:"6",height:"12",transform:"rotate(330 50 50)"},[g("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})],-1);const Ps=$(_t);var Cs;Ps.component("BaseCard",as),Ps.component("Loading",(function(e,t){return b(),h("svg",ps,[ms,fs,hs,gs,ys,xs,vs,bs,ws,Ss,ks,Ls])})),Ps.use(K),Ps.use(ss),(Cs=ss).beforeEach((()=>{R.start(),R.inc()})),Cs.afterEach((()=>{R.done()})),Ps.mount("#app");export{W as A,e as P,Z as a,U as d,ee as f,H as u};
