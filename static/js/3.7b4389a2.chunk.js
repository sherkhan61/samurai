(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{105:function(e,t,a){e.exports={music_wrapper:"Music_music_wrapper__3HtXI",music:"Music_music__20M1R",category_header:"Music_category_header__saygt",podcast_description:"Music_podcast_description__yuo4U"}},116:function(e,t,a){e.exports={music_tracks:"Tracks_music_tracks__BmcNb",category_header:"Tracks_category_header__qtguw",track_container:"Tracks_track_container__1YNoH",track_album:"Tracks_track_album__2ehJp",track_album_playing:"Tracks_track_album_playing__1Dcvm",track_title:"Tracks_track_title__3LXEq"}},117:function(e,t,a){e.exports={player:"Player_player__3vCQV",arrows:"Player_arrows__335iS",play_block:"Player_play_block__54stx",play:"Player_play__APZLH",pause:"Player_pause__2v2mb",progress_bar:"Player_progress_bar__3qnfU",title_info:"Player_title_info__31Ika",hint:"Player_hint__2Edrn",volume:"Player_volume__1qBql"}},118:function(e,t,a){e.exports={card:"Card_card__1aFfk",card_name:"Card_card_name__1h6ok",artist_card_name:"Card_artist_card_name__2Vi8D"}},119:function(e,t,a){e.exports={cards_header:"Cards_cards_header__3GhQc",cards:"Cards_cards__dJdMe"}},120:function(e,t,a){e.exports={search:"Search_search__2q-BU"}},121:function(e,t,a){e.exports={back:"Arrow_back__RcHeb"}},122:function(e,t,a){"use strict";a.r(t),a.d(t,"MusicPage",(function(){return ae}));var r=a(0),n=a.n(r),c=a(4),l=a(48),u=a.n(l).a.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.deezer.com/"}),i=function(){return u.get("chart/").then((function(e){return e.data})).catch((function(e){console.log(e)}))},s=function(e){return u.get("/search?q=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},o=function(e){return{type:"MUSIC/SET_MUSIC_CHARTS",charts:e}},m=function(e){return{type:"MUSIC/SET_SEARCH_RESULTS",searchResults:e}},d=a(19),_=a(105),p=a.n(_),f=a(10),E=a(116),b=a.n(E),h=a(1),v={currentAlbum:"",bgPhoto:"",currentNumber:0,currentSrc:"",progress:0,volume:50,duration:"",currentSecond:"",hintTime:"",isPlaying:!1,artist:"",title:""},y=function(e,t){switch(t.type){case"PLAYER/NEXT_SONG":return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{currentNumber:e.currentNumber+1});case"PLAYER/PREV_SONG":return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{currentNumber:e.currentNumber-1});case"PLAYER/SET_SONG":case"PLAYER/SET_PROGRESS":return Object(h.a)(Object(h.a)({},e),t.payload);case"PLAYER/SET_VOLUME":return Object(h.a)(Object(h.a)({},e),{},{volume:t.payload});case"PLAYER/SET_DURATION":return Object(h.a)(Object(h.a)({},e),{},{duration:t.payload});case"PLAYER/SET_HINT":return Object(h.a)(Object(h.a)({},e),{},{hintTime:t.payload});case"PLAYER/TOGGLE_IS_PLAYING":return Object(h.a)(Object(h.a)({},e),{},{isPlaying:t.payload});default:throw new Error}},g=function(e){return{type:"PLAYER/NEXT_SONG",payload:e}},k=function(e){return{type:"PLAYER/SET_HINT",payload:e}},N=function(e){return{type:"PLAYER/TOGGLE_IS_PLAYING",payload:e}},S=function(e){return{type:"PLAYER/SET_DURATION",payload:e}},T=function(e){return{type:"PLAYER/PREV_SONG",payload:e}},P=function(e){return{type:"PLAYER/SET_SONG",payload:e}},O=function(e){return{type:"PLAYER/SET_PROGRESS",payload:e}},R=function(e){return{type:"PLAYER/SET_VOLUME",payload:e}},A=function(e){var t=Math.floor(e/60),a=String(Math.floor(e%60));return 1===a.length&&(a="0"+a),t+" : "+a},L=function(e,t){var a=t.getBoundingClientRect().right-t.getBoundingClientRect().left;return Math.abs(e-t.getBoundingClientRect().left)/a*100},j=a(117),C=a.n(j),w=n.a.forwardRef((function(e,t){var a=e.dispatch,c=e.state,l=e.initPlayer,u=t,i=Object(r.useRef)(null),s=function(){if(!(c.currentNumber>=9)){var e=c.currentNumber+1,t="div[data-track_number=".concat(e,"]"),r=document.querySelector("".concat(t));a(g({currentSrc:r.dataset.url_track,currentAlbum:r.dataset.album_photo,bgPhoto:r.dataset.bg_photo,artist:r.dataset.artist_name,title:r.dataset.track_title}))}};return Object(r.useEffect)((function(){u.current.volume=c.volume/100}),[c.volume,u]),n.a.createElement("div",{className:C.a.player},n.a.createElement("audio",{ref:u,onTimeUpdate:function(e){var t=u.current.duration;if(!isNaN(t)){var r=A(u.current.currentTime);a(O({progress:u.current.currentTime/t*100,currentSecond:r})),u.current.ended&&s()}},onLoadedData:function(){a(S(A(u.current.duration)))},src:c.currentSrc,preload:"none","data-track_number":c.currentNumber}),n.a.createElement("div",{onClick:l,className:C.a.play_block},n.a.createElement("img",{src:c.currentAlbum,alt:"player_album"}),c.isPlaying?n.a.createElement("i",{className:"fa fa-pause ".concat(C.a.pause)}):n.a.createElement("i",{className:"fa fa-play ".concat(C.a.play)})),n.a.createElement("div",{className:C.a.arrows},n.a.createElement("i",{className:"fa fa-step-backward",onClick:function(){if(!(c.currentNumber<=0)){var e=c.currentNumber-1,t="div[data-track_number=".concat(e,"]"),r=document.querySelector("".concat(t));a(T({currentSrc:r.dataset.url_track,currentAlbum:r.dataset.album_photo,bgPhoto:r.dataset.bg_photo,artist:r.dataset.artist_name,title:r.dataset.track_title}))}},"aria-hidden":"true"}),n.a.createElement("i",{className:"fa fa-step-forward",onClick:s,"aria-hidden":"true"})),n.a.createElement("div",{className:C.a.progress_bar},n.a.createElement("div",{className:C.a.title_info},n.a.createElement("span",{className:C.a.title},c.artist," - ",c.title),n.a.createElement("small",null,c.currentSecond)),n.a.createElement("div",{className:C.a.progress_wrapper},n.a.createElement("progress",{onClick:function(e){if(!isNaN(u.current.duration)){var t=u.current.duration,a=L(e.pageX,e.currentTarget);u.current.currentTime=t/100*a}},max:"100",onMouseMove:function(e){if(!isNaN(c.progress)){var t=L(e.clientX,e.currentTarget),r=A(Math.floor(u.current.duration/100*t));a(k(r)),i.current.style.left=e.clientX-e.currentTarget.getBoundingClientRect().left+"px",i.current.hidden=!1}},onMouseLeave:function(){i.current.hidden=!0},value:c.progress}),n.a.createElement("small",{ref:i,className:C.a.hint},c.hintTime))),n.a.createElement("div",{className:C.a.volume},c.volume>0?n.a.createElement("i",{className:"fa fa-volume-up","aria-hidden":"true"}):n.a.createElement("i",{className:"fa fa-volume-off","aria-hidden":"true"}),n.a.createElement("input",{type:"range",onChange:function(e){a(R(+e.target.value))},value:c.volume})))})),M=a(23),Y=function(e){var t=e.tracks,a=e.children,c=Object(r.useRef)(null),l=Object(r.useReducer)(y,v),u=Object(f.a)(l,2),i=u[0],s=u[1];Object(r.useEffect)((function(){t&&s(P({currentAlbum:t[0].album.cover_small,currentSrc:t[0].preview,bgPhoto:t[0].artist.picture_xl,artist:t[0].artist.name,title:t[0].title}))}),[t]);var o=function(e){e.currentTarget.dataset.url_track&&i.currentSrc!==e.currentTarget.dataset.url_track?s(P({currentNumber:+e.currentTarget.dataset.track_number,currentSrc:e.currentTarget.dataset.url_track,currentAlbum:e.currentTarget.dataset.album_photo,bgPhoto:e.currentTarget.dataset.bg_photo,artist:e.currentTarget.dataset.artist_name,title:e.currentTarget.dataset.track_title})):m()},m=function(){if(c.current.paused){var e=c.current.play();e&&e.catch((function(){})),s(N(!0))}else c.current.pause(),s(N(!1))};Object(r.useEffect)((function(){return function(){i.currentSrc.length>0&&m()}}),[i.currentNumber,i.currentSrc.length]);var d=null===t||void 0===t?void 0:t.map((function(e,t){var a;return a=i.currentNumber===t?b.a.track_album_playing:"",n.a.createElement("div",{key:e.id,className:b.a.track_container},n.a.createElement("div",{"data-url_track":e.preview,"data-track_number":t,"data-album_photo":e.album.cover_small,"data-bg_photo":e.artist.picture_xl,"data-track_title":e.title,"data-artist_name":e.artist.name,onClick:o,className:b.a.track_album+" "+a},n.a.createElement("img",{alt:"artist_image",src:e.album.cover_small}),n.a.createElement("i",{className:"fa fa-play"})),n.a.createElement("div",{className:b.a.track_title},n.a.createElement("a",{href:e.artist.link},n.a.createElement("span",null,e.artist.name," - ",e.title)),n.a.createElement("small",{className:b.a.track_title_duration},A(e.duration))))}));return n.a.createElement(n.a.Fragment,null,d?n.a.createElement(w,{ref:c,dispatch:s,state:i,initPlayer:o}):n.a.createElement(M.a,null),n.a.createElement("div",{className:b.a.music_tracks},n.a.createElement("h3",{className:b.a.category_header},a),d||n.a.createElement(M.a,null)))},G=a(118),x=a.n(G),I=function(e){var t=e.id,a=e.link,r=e.artistName,c=e.title,l=e.picture,u=e.font_size;return n.a.createElement("section",{className:x.a.card,key:t},c||r?n.a.createElement("p",{style:{fontSize:u},className:x.a.card_name},n.a.createElement("a",{href:a},c||r)):"",n.a.createElement("a",{href:a},n.a.createElement("img",{src:l,alt:r})))},U=a(119),q=a.n(U),F=function(e){var t=e.children,a=e.header;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:q.a.cards_header},a),n.a.createElement("div",{className:q.a.cards},t||n.a.createElement(M.a,null)))},H=function(e){var t=e.artists,a=null===t||void 0===t?void 0:t.map((function(e){return n.a.createElement(I,{key:e.id,id:e.id,link:e.link,picture:e.picture_big,artistName:e.name})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{header:"Top Artists"},a))},B=function(e){var t=e.albums,a=null===t||void 0===t?void 0:t.map((function(e){return n.a.createElement(I,{key:e.id,id:e.id,picture:e.cover_big,artistName:e.artist.name,title:e.title,link:e.link,font_size:"1rem"})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{header:"Top Albums"},a))},X=function(e){var t=e.podcasts,a=null===t||void 0===t?void 0:t.map((function(e){return n.a.createElement(I,{key:e.id,id:e.id,pictureLink:e.link,picture:e.picture_big},n.a.createElement("p",{className:p.a.podcast_description},e.description))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{header:"Top Podcasts"},a))},V=function(e){var t=e.playlists,a=null===t||void 0===t?void 0:t.map((function(e){return n.a.createElement(I,{key:e.id,id:e.id,pictureLink:e.link,picture:e.picture_big})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{header:"Top Playlists"},a))},D=function(){var e=Object(c.e)((function(e){var t,a,r,n,c,l,u,i,s,o;return{tracks:null===(t=e.music.charts)||void 0===t||null===(a=t.tracks)||void 0===a?void 0:a.data,artists:null===(r=e.music.charts)||void 0===r||null===(n=r.artists)||void 0===n?void 0:n.data,albums:null===(c=e.music.charts)||void 0===c||null===(l=c.albums)||void 0===l?void 0:l.data,podcasts:null===(u=e.music.charts)||void 0===u||null===(i=u.podcasts)||void 0===i?void 0:i.data,playlists:null===(s=e.music.charts)||void 0===s||null===(o=s.playlists)||void 0===o?void 0:o.data}}),c.c),t=e.tracks,a=e.artists,r=e.albums,l=e.podcasts,u=e.playlists;return n.a.createElement("div",{className:p.a.music},n.a.createElement(Y,{tracks:t,children:"Top Tracks"}),n.a.createElement(H,{artists:a}),n.a.createElement(B,{albums:r}),n.a.createElement(X,{podcasts:l}),n.a.createElement(V,{playlists:u}))},z=a(49),J=a(120),Q=a.n(J),Z=function(e){var t=e.dispatch,a=Object(z.a)(),r=a.register,c=a.handleSubmit;return n.a.createElement("div",{className:Q.a.search},n.a.createElement("form",{onSubmit:c((function(e){var a=e.query;t(function(e){return function(t){s(e).then((function(e){t(m(e))}))}}(a))}))},n.a.createElement("input",{autoComplete:"off",ref:r({required:!0}),name:"query",type:"text"}),n.a.createElement("i",{className:"fa fa-search"})))},K=a(121),W=a.n(K),$=function(e){var t=e.back;return n.a.createElement("i",{className:"fa fa-angle-left ".concat(W.a.back),onClick:t,"aria-hidden":"true"})},ee=function(e){var t=e.searchResults,a=e.dispatch;return n.a.createElement(Y,{tracks:t},n.a.createElement(n.a.Fragment,null,n.a.createElement($,{back:function(){a(m(null))}})," Search Results"))},te=function(){var e=Object(c.d)(),t=Object(c.e)((function(e){var t,a;return null===(t=e.music)||void 0===t||null===(a=t.searchResults)||void 0===a?void 0:a.data}));return Object(r.useEffect)((function(){e(m(null)),e((function(e){i().then((function(t){e(o(t))}))}))}),[e]),n.a.createElement("section",{className:p.a.music_wrapper},n.a.createElement(Z,{dispatch:e}),t?n.a.createElement(ee,{searchResults:t,dispatch:e}):n.a.createElement(D,null))},ae=function(){var e=Object(c.d)();return n.a.createElement(d.a,{clearMusicSearch:function(){e(m(null))}},n.a.createElement(te,null))}}}]);
//# sourceMappingURL=3.7b4389a2.chunk.js.map