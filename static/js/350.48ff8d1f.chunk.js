"use strict";(self.webpackChunkfinal_fullstack_team_proj=self.webpackChunkfinal_fullstack_team_proj||[]).push([[350],{350:function(e,s,t){t.r(s),t.d(s,{default:function(){return N}});var n=t(9439),i=t(2791),a=t(9434),r=t(7753),c=function(e){return e.news.news};function l(){return{news:(0,a.v9)(c)}}var o={list:"NewsList_list__jxzT5",item:"NewsList_item__zMac1 global_desktopNewsCard__fkwLK global_shadow__ECSSe",thumb:"NewsList_thumb__tUsbO",image:"NewsList_image__W1SwG",infoContainer:"NewsList_infoContainer__t5tDC",main:"NewsList_main__1uZTw",info:"NewsList_info__zkBam",title:"NewsList_title__QsAl3",text:"NewsList_text__7Vj90",itemLink:"NewsList_itemLink__EZ3gA"},_=t(3329);function u(e){var s=e.search,t=l().news,n=(s.toLowerCase().trim(),t.filter((function(e){return e.title.toLowerCase().includes(s)})));return(0,_.jsx)("ul",{className:o.list,children:n.map((function(e){return(0,_.jsxs)("li",{className:o.item,children:[(0,_.jsx)("div",{className:o.thumb,children:(0,_.jsx)("a",{href:e.url,children:(0,_.jsx)("img",{src:e.imgUrl,alt:e.title,className:o.image})})}),(0,_.jsxs)("div",{className:o.infoContainer,children:[(0,_.jsxs)("div",{className:o.main,children:[(0,_.jsx)("h2",{className:o.title,children:e.title}),(0,_.jsx)("p",{children:e.text})]}),(0,_.jsxs)("div",{className:o.info,children:[(0,_.jsx)("p",{children:e.date.split("T")[0]}),(0,_.jsx)("a",{href:e.url,className:o.itemLink,children:(0,_.jsx)("p",{children:"Read more"})})]})]})]},e._id)}))})}var h=t(7609),m={form:"NewsSearch_form__v4jcs global_shadow__ECSSe",button:"NewsSearch_button__q1nm6",iconSearch:"NewsSearch_iconSearch__h6va6",iconClose:"NewsSearch_iconClose__PEMt0",input:"NewsSearch_input__2zL3k"};function d(e){var s=e.search,t=(0,i.useState)(""),a=(0,n.Z)(t,2),r=a[0],c=a[1];return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("form",{className:m.form,onSubmit:function(e){e.preventDefault(),s(r),c("")},children:[(0,_.jsx)("input",{className:m.input,onChange:function(e){return c(e.target.value)},value:r,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),(0,_.jsx)("button",{type:"submit",className:m.button,children:(0,_.jsx)("svg",{width:"24px",height:"24px",className:m.iconSearch,children:(0,_.jsx)("use",{href:h.Z+"#search"})})}),""!==r&&(0,_.jsx)("button",{type:"button",className:m.button,onClick:function(){c("")},children:(0,_.jsx)("svg",{className:m.iconClose,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,_.jsx)("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#FFC107",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})}var f=t(799),w={container:"NewsPage_container__XQNgB",sectionTitle:"NewsPage_sectionTitle__8ZR36"};function N(){var e=(0,i.useState)(""),s=(0,n.Z)(e,2),t=s[0],c=s[1],o=(0,a.I0)(),h=l().news;(0,i.useEffect)((function(){o((0,r.d)())}),[o]);return(0,_.jsxs)("section",{className:w.container,children:[(0,_.jsx)("h1",{className:w.sectionTitle,children:"News"}),(0,_.jsx)(d,{search:function(e){c(e)}}),h?(0,_.jsx)(u,{search:t}):(0,_.jsx)(f.Z,{})]})}}}]);
//# sourceMappingURL=350.48ff8d1f.chunk.js.map