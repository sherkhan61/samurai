(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{363:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__YlsZ_",mainPhoto:"ProfileInfo_mainPhoto__2FlIf",contact:"ProfileInfo_contact__1xZZF",formControl:"ProfileInfo_formControl__2TMxW",error:"ProfileInfo_error__3kPPe",formSummaryError:"ProfileInfo_formSummaryError__3rmD9"}},364:function(t,e,s){t.exports={item:"MyPosts_item__3ZUBZ",postsBlock:"MyPosts_postsBlock__2dlHA",posts:"MyPosts_posts__u65b6"}},365:function(t,e,s){t.exports={item:"Post_item__3Enc2"}},366:function(t,e,s){"use strict";s.r(e);var o=s(6),c=s(1),i=s(94),r=s(95),n=s(99),a=s(98),j=s(0),l=s.n(j),u=s(142),b=s(363),d=s.n(b),h=s(100),p=function(t){var e=Object(j.useState)(!1),s=Object(u.a)(e,2),o=s[0],i=s[1],r=Object(j.useState)(t.status),n=Object(u.a)(r,2),a=n[0],l=n[1];Object(j.useEffect)((function(){l(t.status)}),[t.status]);return Object(c.jsxs)("div",{children:[!o&&Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Status:"})," ",Object(c.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"-----------"})]}),o&&Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(a)},value:a})})]})},f=s(165),O=s(47),x=s(176),m=Object(x.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,o=t.error;return Object(c.jsxs)("form",{onSubmit:e,children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"save"})}),o&&Object(c.jsx)("div",{className:d.a.formSummaryError,children:o}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Full name"}),": ",Object(O.c)("Full name","fullName",[],O.a)]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Looking for a job"}),": ",Object(O.c)("","lookingForAJob",[],O.a,{type:"checkbox"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"My professional skills"}),":",Object(O.c)("My professional skills","lookingForAJobDescription",[],O.b)]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"About me"}),":",Object(O.c)("About me","aboutMe",[],O.b)]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(c.jsx)("div",{className:d.a.contact,children:Object(c.jsxs)("b",{children:[t,": ",Object(O.c)(t,"contacts."+t,[],O.a)]})},t)}))]})]})})),v=function(t){var e=t.profile,s=t.isOwner,o=t.goToEditMode;return Object(c.jsxs)("div",{children:[s&&Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:o,children:"edit"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(c.jsx)(P,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},P=function(t){var e=t.contactTitle,s=t.contactValue;return Object(c.jsxs)("div",{className:d.a.contact,children:[Object(c.jsx)("b",{children:e}),": ",s]})},g=function(t){var e=t.isOwner,s=t.profile,o=t.status,i=t.updateStatus,r=t.savePhoto,n=t.saveProfile,a=Object(j.useState)(!1),l=Object(u.a)(a,2),b=l[0],O=l[1];if(!s)return Object(c.jsx)(h.a,{});return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(c.jsx)("img",{src:s.photos.large||f.a,className:d.a.mainPhoto}),e&&Object(c.jsx)("input",{type:"file",onChange:function(t){t.target.files&&t.target.files.length&&r(t.target.files[0])}}),b?Object(c.jsx)(m,{initialValues:s,profile:s,onSubmit:function(t){n(t).then((function(){O(!1)}))}}):Object(c.jsx)(v,{goToEditMode:function(){O(!0)},profile:s,isOwner:e}),Object(c.jsx)(p,{status:o,updateStatus:i})]})})},k=s(143),_=s(63),y=s(364),S=s.n(y),I=s(365),A=s.n(I),C=function(t){return Object(c.jsxs)("div",{className:A.a.item,children:[Object(c.jsx)("img",{src:"https://vokrug-tv.ru/pic/person/e/9/a/b/e9abb1b8929cede9f7058672f4b12556.jpeg"}),t.message,Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"like"})," ",t.likesCount]})]})},M=s(96),w=Object(M.a)(50),F=Object(x.a)({form:"addNewPostText"})((function(t){return Object(c.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(c.jsx)("div",{children:Object(O.c)("","newPostText",[M.b,w],O.b)}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Add post"})})]})})),N=function(t){var e=Object(_.a)(t.posts).reverse().map((function(t){return Object(c.jsx)(C,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(c.jsxs)("div",{className:S.a.postsBlock,children:[Object(c.jsx)("h3",{children:"My posts"}),Object(c.jsx)(F,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(c.jsx)("div",{className:S.a.posts,children:e})]})},T=l.a.memo(N),B=s(19),D=Object(B.b)((function(t){return{posts:t.profilePage.postsData}}),{addPost:k.a.addPostActionCreate})(T),E=function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,saveProfile:t.saveProfile,savePhoto:t.savePhoto}),Object(c.jsx)(D,{})]})},J=s(20),U=s(21),Z=function(t){Object(n.a)(s,t);var e=Object(a.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getProfile(t),this.props.getStatus(t)):console.error("Id should exist in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(c.jsx)(E,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(l.a.Component);e.default=Object(J.d)(Object(B.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:k.c,getStatus:k.d,updateStatus:k.g,savePhoto:k.e,saveProfile:k.f}),U.g)(Z)}}]);
//# sourceMappingURL=3.98e4ccb5.chunk.js.map