(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(37),s=n(5),a="SEND-MESSAGE",c={dialogsData:[{id:1,name:"Sherkhan"},{id:2,name:"Sabyrzhan"},{id:3,name:"Aldiyar"},{id:4,name:"Parasat"},{id:5,name:"Temirbolat"},{id:6,name:"Erbol"},{id:7,name:"Birzhan"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra"},{id:3,message:"Yo"}]},i=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:3,message:n}])})}return e}},136:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__IE5yM"}},138:function(e,t,n){e.exports={item:"Post_item__2Ky5J"}},140:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1s-kb",selectedPage:"Users_selectedPage__V1CSn"}},142:function(e,t,n){"use strict";var r=n(0),s=n(1),a=n.n(s),c=n(136),i=n.n(c),o=n(47),u=n(31),l=n(32),j=n(34),d=n(33),b=n.p+"static/media/samurai.11f65101.png",f=(a.a.Component,n(59)),p=function(e){var t=Object(s.useState)(!1),n=Object(f.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(e.status),o=Object(f.a)(i,2),u=o[0],l=o[1];Object(s.useEffect)((function(){l(e.status)}),[e.status]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:b})}),!a&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"-----------"})}),a&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(u)},value:u})})]})},O=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return t?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:i.a.descriptionBlock,children:[Object(r.jsx)("img",{src:t.photos.large}),Object(r.jsx)(p,{status:n,updateStatus:s})]})}):Object(r.jsx)(o.a,{})},g=n(70),h=n(37),m=n(97),v=n.n(m),x=n(138),w=n.n(x),C=function(e){return Object(r.jsxs)("div",{className:w.a.item,children:[Object(r.jsx)("img",{src:"https://vokrug-tv.ru/pic/person/e/9/a/b/e9abb1b8929cede9f7058672f4b12556.jpeg"}),e.message,Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"like"})," ",e.likesCount]})]})},P=n(131),S=n(132),I=n(27),k=n(38),_=a.a.memo((function(e){var t=Object(h.a)(e.posts).reverse().map((function(e){return Object(r.jsx)(C,{message:e.message,likesCount:e.likeCount})}));return Object(r.jsxs)("div",{className:v.a.postsBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(N,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(r.jsx)("div",{className:v.a.posts,children:t})]})})),E=Object(I.a)(50),N=Object(S.a)({form:"addNewPostText"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(P.a,{name:"newPostText",component:k.b,validate:[I.b,E]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})})),y=_,U=n(15),M=Object(U.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(g.a)(t))}}}))(y);t.a=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(r.jsx)(M,{})]})}},143:function(e,t,n){"use strict";var r=n(0),s=(n(1),n(28)),a=n.n(s),c=n(12),i=function(e){var t="/dialogs/"+e.id;return Object(r.jsx)("div",{className:a.a.dialog+" "+a.a.active,children:Object(r.jsxs)(c.b,{to:t,children:[Object(r.jsx)("img",{src:"https://www.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png"})," ",e.name]})})},o=function(e){return Object(r.jsx)("div",{className:a.a.message,children:e.message})},u=n(131),l=n(132),j=n(11),d=n(38),b=n(27),f=Object(b.a)(50),p=Object(l.a)({form:"dialogAddMessageForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{placeholder:"Enter your message",component:d.b,name:"newMessageBody",validate:[b.b,f]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Send"})})]})}));t.a=function(e){var t=e.dialogsPage,n=t.dialogsData.map((function(e){return Object(r.jsx)(i,{name:e.name,id:e.id},e.id)})),s=t.messagesData.map((function(e){return Object(r.jsx)(o,{message:e.message},e.id)}));t.newMessageBody;return e.isAuth?Object(r.jsxs)("div",{className:a.a.dialogs,children:[Object(r.jsx)("div",{className:a.a.dialogsItems,children:n}),Object(r.jsxs)("div",{className:a.a.messages,children:[Object(r.jsx)("div",{children:s}),Object(r.jsx)(p,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})]}):Object(r.jsx)(j.a,{to:"/login"})}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(137),s=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"11f6f6da-a19a-4694-bc7f-68eb9e84e954"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e))},unfollow:function(e){return s.delete("follow/".concat(e))}},c={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status",{status:e})}},i={me:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return s.delete("auth/login")}}},174:function(e,t,n){},175:function(e,t,n){},18:function(e,t,n){e.exports={nav:"Navbar_nav__3PxI0",item:"Navbar_item__3i6ML",activeLink:"Navbar_activeLink__1Zcax"}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},28:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__24BxZ",dialogsItems:"Dialogs_dialogsItems__19_K-",active:"Dialogs_active__2ZRdE",messages:"Dialogs_messages__1YA8E",dialog:"Dialogs_dialog__3To-z"}},295:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),c=n(68),i=n.n(c);n(174),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(31),u=n(32),l=n(34),j=n(33),d=(n(175),n(18)),b=n.n(d),f=(n(143),n(142),n(12)),p=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/Profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/Dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/News",activeClassName:b.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/Music",activeClassName:b.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/Settings",activeClassName:b.a.activeLink,children:"Settings"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/users",activeClassName:b.a.activeLink,children:"Users"})})]})},O=n(11),g=(n(295),function(){return Object(r.jsx)("div",{children:"News"})}),h=(n(296),function(){return Object(r.jsx)("div",{children:"Settings"})}),m=(n(297),function(){return Object(r.jsx)("div",{children:"Music"})}),v=n(99),x=n(10),w=n.n(x),C=n(21),P=n(37),S=n(5),I=n(17),k=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},_="FOLLOW",E="UNFOLLOW",N="SET_USERS",y="SET_CURRENT_PAGE",U="SET_TOTAL_USERS_COUNT",M="TOGGLE_IS_FETCHING",A="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},R=function(e){return{type:_,userId:e}},F=function(e){return{type:E,userId:e}},z=function(e){return{type:y,currentPage:e}},B=function(e){return{type:M,isFetching:e}},D=function(e,t){return{type:A,isFetching:e,userId:t}},J=function(){var e=Object(C.a)(w.a.mark((function e(t,n,r,s){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(D(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(S.a)(Object(S.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!0})});case E:return Object(S.a)(Object(S.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!1})});case N:return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case y:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case U:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case M:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case A:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))})}return e},Y=n(48),G=n(71),W=n(59),K=n(75),X=n.n(K),q=n(139),V=n.n(q),H=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/o),b=Object(s.useState)(1),f=Object(W.a)(b,2),p=f[0],O=f[1],g=(p-1)*o+1,h=p*o;return Object(r.jsxs)("div",{className:X.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){O(p-1)},children:"Prev"}),l.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(r.jsx)("span",{className:V()(Object(G.a)({},X.a.selectedPage,a===e),X.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>p&&Object(r.jsx)("button",{onClick:function(){O(p+1)},children:"Next"})]})},Z=n(140),Q=n.n(Z),$=function(e){var t=e.user,n=e.followingInProgress,s=e.unfollow,a=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(f.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEX////My8v70XhUVVTwZWKRkZHvTEruwG7f39/R0dH29vbNx8fvZmT5dnSNjY3Ozc2bm5tNTk3uSkjGxcXe4+P/1nn0wmdKTlLvQkBJSklPUlNFSlHvYV7e4OSoqKj89eq4uLjf3djsw3zt7e1aW1rqx3XZt3D+9N70W1jvPTv60tGFhoWJe15za1lnYlf/2HrGqWv+5qr8z3H968X92Ib935/+8dL93ZD/+On5r671jYv5fnv73dz80dDj1sH3mJbjurn5m5nnnJvqfnx0dXRnZ2egjWO3n2ixmmeYhmFfXFOsn4Q6Q0/BtJj+6rr305jrurznzaPmoqHh2Mrhx8c/lrLQAAAIPklEQVR4nO3de1faSBgHYC4mBhbCJSC3EKOiYqnVUlurtbUXb+vuVq1+/8+yEyDkOgPJjJk3nPn9s+d42Jx5+r5zC103kxEREVn5FJWsaUUrKDvFIu/RMI9iXOU7tWk6ndrg+koyNGWH97CYRRnVanlvLCmCjozCKjCNjt/ngQ5GpsJ7iHQZdXC+ObMzkLLpraW0CDhVolJq6Vx/tKWAM2Q1jYVc1jdDjlI3JQtLl9A2qimrYxW7jGKNeZP3oCNlFBWI0rlKUxmvYgjR9qHxHvfyUSN36bSMBu+BLx0tnjDfqfIe+TIpVoyqFA+YCmJhVLNuE3GF+Y7JW0DOzgh/3F4yNdCbvzKg9aFcAz6nFul5KDXAUzHmHuFPp8EbgosS8TCKS03lLcFFYlNCVESgx7figBEwXwN6tMkyalKUa96W8ES/MWEDdE8M3Ce6LSvdbgyhyRsTFv807PYOb25vb2/evuv2WhGVtRFvTVh2vNOwdbjXnCa3u3dnMXu95esJ8lzjfTXTetvMOZk6UT0P71Hv9twJb+MaxP3CcyXsvnMD586jI4u6u7s3z/Exqm+r5Rd2IC41plvY2wsCw4PYub2bvM8I8n2GR5gPKSGJmbvpeYUmb05IDJew9fdRJCEy7uXd0xHkqcYt7B1HBCLibgu60H2k6e1GFuaax65GBXlH9BzaogMR8bCbGmH3MNpCM4uriCC71DUPWzexhLlBeoS3sYSuNgW5W7j2w9bS+71XeNMCLXSf2mIspZbw2BFmeXNC4py8Yy40udzefKkBeS513rR138YU7s6FIO8WRetO3+2iy27rLqYw17WekUePGUC8Hxav72/Rxej4sLX8xcKX5qB3eIyecXt/xVsTmn9yVumazbt/4y00udzR/V1z8ozcf7wxYdm3W/PoNiYQLab2leRonzcnJM7cizsLPVjenGB+jxm4nIzf8wYFwqJw7oAr4j7bEqIiQpuJjJsUCX/zJvnynjEwl4M2ET8yF37kTfJl9Wu4+vNwn/VuAW4tXf39kPmZBlqTZlgXEV4JGc/EJrhZaGX/iFWjjkFenqz8PmUCPAU4B+dhsfFD2+q9+UTfqONPvBHEbEb9ZjSY5iZvBDn0M/GUN2FBPtC26fgDb8KCbFILgTcp/UUR2rUwGMoXNvCuFMGcUAlPeA9/iVCtNeDXmUloipiGElIVMR0lpCliOkpIsZymYSGd5mNMIvy90M5mzBqCP844+RTnjQbwa5Mv76P3KcBvDImJfouCfmvyJ/pUTNEknOZzROBn3gOOnkjEZgqBkYjpBKK5eLLcijo+Sd0cnGepw804PUeZkHxYvPU3U3KfwOXzKbmM49OUTkFXiNfFtFwIidncWMcC1zfSu8Y4QcL1cCP6+eoIg8jpD1dKGBohTEWEMP1ZfWGGKOQ9OCYhANfXeQ+OSR4IwAfeg1siF2fnX8q46LpeevmGb9ONb49tWR5i//0v52cXnH2PX4a6voaJLtfr9bayRajhltJGn5Hxj9CH5TOOvovyEDc0K3JdluulRh/fpg/9Rsn6kEx6zLDMrY5fib412Ur7vKE8Y4XPSuO8Pfkc6UH68JEP8HEJoNz+2VD6T+EzceOprzR+ToTkKq7xIV4sANanwj8NRelvhwq3FUVp/JnWcBGRR6OWyUOqOzVEwSwzjlCuD0uEx+nl5IFnpBKWbKAt3ApWcdsC2l06IZL+xPTEV9QisYRzoNz+NREqyoN3Lm48TIBK45ctXEAsJ/3fzRLXUX0OlOv6TNj/tu0YN7a/9ac/bng+S/pD+5qw8JIwGtegURGntbKMz0/TXt1+eu7bP9xquz5LIuqXCQtJY5HdwoPvyjz9vrK1tWX9Y57vB24h/nCDHpss8A2hSWVP2pcNBZ/GZdv7cTxx+CZRIaFJvSN2JmK40NPRxG0x4TYlAOs+4gEBqCgHvk+TiEkC8U0aAMoHLwTgi19IICbapj9wNdTrAeFszw9v0p/tgBC7oOo/kgOStvuh31gvE4Rl/4dJ234puU2ftJKW9KG/jIQu9ftknXA6TbBNsU06ayfvZGzjJ+JL2/1J4na4lmibkm4BttEZ+uQCFd6kf5xpSHqXYaeUFJDUpPZY0HS0Mz98B4W/2s7HiLenaRJr0x9rpQVZG7rbVMd2qe7+2HDxY1+1TYtKwc5fUZPFJfKT5mN4hf+rWQE7TE5hTVR4gwIpMBaCK2G2wHj/F8LkI4RCKIT8I4RCKIT8I4RCKIT8I4RCKIT8I4RCKIT8I4RCKIT8I4RC+DrCyjRMngVRWNGMqhXDZIGEJ6yYVVWVJlElk54IT2jMeFNjVaM1ghNW3UArtGWEJgwAJYmyirCEFSMIlCSqR8ISVswwoGpQFRGWsBoCRERtZYRaWAlpiwhJWDFCgZJUXRlheJNay+mKCLM4oUqzYYAS4kqo0uz6QpikEDsPqbYLUELcWkp1qgElDD3SSCu0W+AmItU0hCUMP3hL0uqcS8OLSFdCYMKwmUh5tQAmDCGqVMsMPGGASFtBeMJsRXO9yGDxsg2c0CqjIalWpKqZXcW3idYb76xmmqamMXnrDVFohdlLfbBCdhFCIRRC/hFCIRRC/hFCIRRC/hFCIZylaAegcMceG1XlqnaovnJ/lVQMe2w0v11h/u6I7i8VvEqcb7TU+MDiKBXCEUWfzl9yQhaqZnxgJmPAF6oGDTBThC+UKHeNBnhhgw6INgwVtHDE4BfxTFYbqEK6VcaO9QUuUCHlKmOnWAUrrDI6fe+oQIUqs9/3VVBBClmsMnY0kEKNHRCtNvCEWZMlMFMk/A5SXkn6l7SLiIjEzv9Oj1Ilid2uzQAAAABJRU5ErkJggg==",className:Q.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},ee=function(e){var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,a=e.onPageChanged,c=e.users,i=Object(Y.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(H,{totalItemsCount:t,pageSize:n,currentPage:s,onPageChanged:a}),Object(r.jsx)("div",{children:c.map((function(e){return Object(r.jsx)($,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},te=n(47),ne=n(9),re=n(15),se=function(e){return e.usersPage.users},ae=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},ie=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},ue=function(e){return e.usersPage.followingInProgress},le=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(te.a,{}):null,Object(r.jsx)(ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),je=Object(ne.d)(Object(re.b)((function(e){return{users:se(e),pageSize:ae(e),totalUsersCount:ce(e),currentPage:ie(e),isFetching:oe(e),followingInProgress:ue(e)}}),{follow:function(e){return function(){var t=Object(C.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(n,e,I.c.follow.bind(I.c),R);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(C.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(n,e,I.c.unfollow.bind(I.c),F);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:z,toggleIsFollowingProgress:D,getUsers:function(e,t){return function(){var n=Object(C.a)(w.a.mark((function n(r){var s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(B(!0)),r(z(e)),n.next=4,I.c.getUsers(e,t);case 4:s=n.sent,r(B(!1)),r((c=s.items,{type:N,users:c})),r((a=s.totalCount,{type:U,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(le),de=n(98),be=n.n(de),fe=function(e){return Object(r.jsxs)("header",{className:be.a.header,children:[Object(r.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png",alt:"logo"}),Object(r.jsx)("div",{className:be.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(r.jsx)(f.b,{to:"/login",children:"Login"})})]})},pe=n(41),Oe="SET_USER_DATA",ge={userId:null,email:null,login:null,isAuth:!1},he=function(e,t,n,r){return{type:Oe,payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){var n,r,s,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,c=r.email,t(he(s,c,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},xe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(fe,Object(S.a)({},this.props))}}]),n}(a.a.Component),we=Object(re.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(C.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.logout();case 2:0===e.sent.data.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(xe),Ce=n(131),Pe=n(132),Se=n(38),Ie=n(27),ke=n(55),_e=n.n(ke),Ee=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)(Ce.a,{placeholder:"email",name:"email",component:Se.a,validate:[Ie.b]}),Object(r.jsx)(Ce.a,{placeholder:"password",name:"password",component:Se.a,type:"password",validate:[Ie.b]}),Object(r.jsx)(Ce.a,{name:"rememberMe",component:Se.a,type:"checkbox"})," remember me",n&&Object(r.jsx)("div",{className:_e.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),Ne=Object(re.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(C.a)(w.a.mark((function r(s){var a,c;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I.a.login(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(me()):(c=a.data.messages.length>0?a.data.messages[0]:"Some error",s(Object(pe.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(O.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(Ee,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),ye="INITIALIZED_SUCCESS",Ue={initialized:!1},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},Ae=n(70),Te=n(130),Re={},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;return e},ze=n(141),Be=n(133),De=Object(ne.c)({profilePage:Ae.b,dialogsPage:Te.a,sidebar:Fe,usersPage:L,auth:ve,form:Be.a,app:Me}),Je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,Le=Object(ne.e)(De,Je(Object(ne.a)(ze.a)));window._store_=Le;var Ye=Le,Ge=Object(v.a)((function(){return n.e(3).then(n.bind(null,300))})),We=Object(v.a)((function(){return n.e(4).then(n.bind(null,299))})),Ke=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(we,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(O.b,{path:"/dialogs",render:function(){return Object(r.jsx)(Ge,{})}}),Object(r.jsx)(O.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(We,{})}}),Object(r.jsx)(O.b,{path:"/login",render:function(){return Object(r.jsx)(Ne,{})}}),Object(r.jsx)(O.b,{path:"/news",render:function(){return Object(r.jsx)(g,{})}}),Object(r.jsx)(O.b,{path:"/music",render:function(){return Object(r.jsx)(m,{})}}),Object(r.jsx)(O.b,{path:"/settings",render:function(){return Object(r.jsx)(h,{})}}),Object(r.jsx)(O.b,{path:"/users",render:function(){return Object(r.jsx)(je,{})}})]})]}):Object(r.jsx)(te.a,{})}}]),n}(a.a.Component),Xe=Object(ne.d)(O.f,Object(re.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e({type:ye})}))}}}))(Ke),qe=function(e){return Object(r.jsx)(f.a,{children:Object(r.jsx)(re.a,{store:Ye,children:Object(r.jsx)(Xe,{})})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(qe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(5),s=n(48),a=n(0),c=(n(1),n(55)),i=n.n(c),o=(n(27),function(e){e.input;var t=e.meta,n=(e.child,Object(s.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:""),children:[Object(a.jsx)("div",{children:n.children}),r&&Object(a.jsx)("span",{children:t.error})]})}),u=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},47:function(e,t,n){"use strict";var r=n(0),s=n.p+"static/media/Eclipse.7266f037.svg";n(1),t.a=function(e){return Object(r.jsx)("img",{src:s})}},55:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3ASzk",error:"FormsControls_error__Jofyt",formSummaryError:"FormsControls_formSummaryError__3O8di"}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return h}));var r=n(10),s=n.n(r),a=n(21),c=n(37),i=n(5),o=n(17),u="ADD-POST",l="DELETE_POST",j="SET_USERS_PROFILE",d="SET_STATUS",b={postsData:[{id:1,message:"Hi, how are you?",likeCount:11},{id:2,message:"Hi, bro",likeCount:12},{id:3,message:"Bla bla bla",likeCount:12},{id:4,message:"Yo Yo Yo Yo Yo",likeCount:12}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},O=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((s=r.data,{type:j,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case j:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status})}return e}},75:function(e,t,n){e.exports={paginator:"Paginator_paginator__3CJK_",pageNumber:"Paginator_pageNumber__kJGfH",selectedPage:"Paginator_selectedPage__24gZk"}},97:function(e,t,n){e.exports={item:"MyPosts_item__2J17h",postsBlock:"MyPosts_postsBlock__3xt2y",posts:"MyPosts_posts__lEbzi"}},98:function(e,t,n){e.exports={header:"Header_header__1l_f0",loginBlock:"Header_loginBlock__3bY0x"}}},[[298,1,2]]]);
//# sourceMappingURL=main.ee35d107.chunk.js.map