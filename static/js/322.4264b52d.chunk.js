"use strict";(self.webpackChunkfinal_fullstack_team_proj=self.webpackChunkfinal_fullstack_team_proj||[]).push([[322],{2322:function(e,a,t){t.r(a),t.d(a,{default:function(){return D}});var s=t(9439),n=t(2791),r=t(9434),i={container:"UserPage_container__qulzD",userContainer:"UserPage_userContainer__JJojP",title:"UserPage_title__CPvgT",iconEditButton:"UserPage_iconEditButton__8gUsY",iconEdit:"UserPage_iconEdit__qHQrI",iconCross:"UserPage_iconCross__1Qp+U",bg:"UserPage_bg__-KDn7"},o=t(7609);var l=t.p+"static/media/cross-small.f651fc886fa4d31a3c8de6c31d316c5d.svg",c=t(4942),d=t(1413),p=t(5861),_=t(4687),m=t.n(_),u=t(9273),h={userCard:"UserForm_userCard__uNoO8 global_shadow__ECSSe",form:"UserForm_form__Rtz4A",userInfoWrapper:"UserForm_userInfoWrapper__F+hWD",inputWrapper:"UserForm_inputWrapper__DeOXH",inputTitle:"UserForm_inputTitle__5iXcX",input:"UserForm_input__qGgJS",LogOutBtn:"UserForm_LogOutBtn__fpCNn",iconLogOut:"UserForm_iconLogOut__rTwlR",avatarWrapper:"UserForm_avatarWrapper__SMEM8",avatar:"UserForm_avatar__Uh3mB",photoWrapper:"UserForm_photoWrapper__RnWw8",editPhotoContainer:"UserForm_editPhotoContainer__tfOMD",iconWrapperCheck:"UserForm_iconWrapperCheck__+A5TU",iconWrapperCross:"UserForm_iconWrapperCross__6TA+y",cameraIcon:"UserForm_cameraIcon__UuUAh",btnEdit:"UserForm_btnEdit__Wsx6+",avatarWrapperRead:"UserForm_avatarWrapperRead__xHx-x",avatarReadonlyON:"UserForm_avatarReadonlyON__fViiL",btnDual:"UserForm_btnDual__CZLPH",btnConfirm:"UserForm_btnConfirm__15T9l",iconCheck:"UserForm_iconCheck__ZC3sK",iconCross:"UserForm_iconCross__0lJoC",iconCamera:"UserForm_iconCamera__ChUw+",saveBtn:"UserForm_saveBtn__qr0j0",saveBtnWrapper:"UserForm_saveBtnWrapper__Nq-es",infoWrapper:"UserForm_infoWrapper__N19OM"};var x=t.p+"static/media/Photo default.2c9afb5dfcbe695b9150f927616a01aa.svg";var f=t.p+"static/media/logout.8790af7bde245471313fc2a3bdb4b2da.svg";var j=t.p+"static/media/x.5dd3f0eff02fbbdf8c42d6a6e00740b9.svg";var v=t.p+"static/media/check.9871830bc0257fd7ceaaf4c5ddc7ce47.svg",g=t(5829),N=t(6056),C=t(3329),b={name:"",email:"",birthday:"",phone:"",city:"",avatarFile:null,avatarURL:""};function P(e){var a=e.onSubmit,t=e.readonly,i=e.user,l=(e.saveNewPhoto,(0,n.useState)(i||b)),_=(0,s.Z)(l,2),P=_[0],y=_[1],U=(0,n.useState)(i.avatarURL||""),W=(0,s.Z)(U,2),I=W[0],F=W[1],B=(0,n.useState)(null),L=(0,s.Z)(B,2),k=L[0],O=L[1],T=(0,n.useState)(!1),Z=(0,s.Z)(T,2),w=Z[0],D=Z[1],S=(0,r.I0)(),E=function(){D(!1)},R=function(){var e=(0,p.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S((0,u.ni)());case 2:D(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var a=e.target,t=a.name,s=a.value;y((function(e){return(0,d.Z)((0,d.Z)({},e),{},(0,c.Z)({},t,s))}))},q=(0,n.useRef)();return(0,C.jsx)("div",{className:h.userCard,children:(0,C.jsx)("form",{className:h.form,onSubmit:function(e){e.preventDefault();var t=P.name,s=P.email,n=P.phone,r=P.birthday,i=P.city,o=P.avatarFile,l=new FormData;l.append("avatarURL",o),l.append("name",t),l.append("email",s),l.append("phone",n),l.append("birthday",r),l.append("city",i),console.log("FormData",l),console.log("FD",o),a(l)},children:(0,C.jsxs)("div",{className:h.userInfoWrapper,children:[(0,C.jsxs)("div",{className:h.avatarWrapper,children:[I?(0,C.jsx)("img",{src:I,className:[h.avatar,t?h.avatarReadonlyON:""].join(" "),alt:"profile"}):(0,C.jsx)("img",{src:x,className:[h.avatar,t?h.avatarReadonlyON:""].join(" "),alt:"avatar"}),(0,C.jsx)("input",{type:"file",accept:"image/*, .png, .jpg, .gif, .web",ref:q,onChange:function(e){var a=e.target.files[0];if(a.size>3145728)alert("Wrong size");else{var t=URL.createObjectURL(a);F(t),O(a)}},style:{display:"none"}}),!t&&(I?(0,C.jsxs)("div",{className:h.btnDual,children:[(0,C.jsx)("button",{type:"button",className:h.btnConfirm,onClick:function(){y((function(e){return(0,d.Z)((0,d.Z)({},e),{},{avatarFile:k})})),console.log("stateonLoad",P)},children:(0,C.jsx)("img",{src:v,className:h.iconCheck,alt:"check"})}),(0,C.jsx)("p",{children:"Confirm"}),(0,C.jsx)("button",{type:"button",onClick:function(){F(""),O(null)},className:h.btnConfirm,children:(0,C.jsx)("img",{src:j,className:h.iconCross,alt:"cross"})})]}):(0,C.jsxs)("button",{type:"button",className:h.btnEdit,onClick:function(){q.current.click()},children:[(0,C.jsx)("svg",{width:"24px",height:"24px",className:h.iconCamera,children:(0,C.jsx)("use",{href:o.Z+"#camera"})}),"Edit photo"]}))]}),(0,C.jsxs)("div",{className:h.userInfo,children:[(0,C.jsxs)("div",{className:h.infoWrapper,children:[(0,C.jsxs)("div",{className:h.inputWrapper,children:[(0,C.jsx)("p",{className:h.inputTitle,children:"Name:"}),(0,C.jsx)("input",{type:"text",name:"name",value:P.name,required:!0,className:h.input,onChange:M,readOnly:t})]}),(0,C.jsxs)("div",{className:h.inputWrapper,children:[(0,C.jsx)("p",{className:h.inputTitle,children:"Email:"}),(0,C.jsx)("input",{type:"email",value:P.email,name:"email",required:!0,className:h.input,onChange:M,readOnly:t})]}),(0,C.jsxs)("div",{className:h.inputWrapper,children:[(0,C.jsx)("p",{className:h.inputTitle,children:"Birthday:"}),(0,C.jsx)("input",{type:"text",value:P.birthday,name:"birthday",required:!0,className:h.input,placeholder:"00.00.0000",pattern:"/^\\d{1,2}\\-\\d{1,2}\\-\\d{4}$/",onChange:M,readOnly:t})]}),(0,C.jsxs)("div",{className:h.inputWrapper,children:[(0,C.jsx)("p",{className:h.inputTitle,children:"Phone:"}),(0,C.jsx)("input",{type:"tel",value:P.phone,name:"phone",className:h.input,placeholder:"+380000000000",pattern:"/^\\+\\d{12}$/\\",onChange:M,readOnly:t})]}),(0,C.jsxs)("div",{className:h.inputWrapper,children:[(0,C.jsx)("p",{className:h.inputTitle,children:"City:"}),(0,C.jsx)("input",{type:"text",value:P.city,name:"city",required:!0,className:h.input,placeholder:"Kiev",onChange:M,readOnly:t})]})]}),t?(0,C.jsxs)("button",{type:"button",className:h.LogOutBtn,onClick:function(){D(!0)},children:[(0,C.jsx)("img",{src:f,className:h.iconLogOut,alt:"logout"}),"Log Out"]}):(0,C.jsx)("div",{className:h.saveBtnWrapper,children:(0,C.jsx)("button",{className:h.saveBtn,children:"Save"})}),w&&(0,C.jsx)(g.Z,{isOpen:w,onClose:E,children:(0,C.jsx)(N.Z,{logo:"#logout",close:E,action:R,children:"Already leaving?"})})]})]})})})}var y={petsList:"PetList_petsList__bl+kb",imgNoPet:"PetList_imgNoPet__GMiLo",noPetsWrapper:"PetList_noPetsWrapper__1pzId"},U={petsItemWrapper:"PetsItem_petsItemWrapper__atzbH global_shadow__ECSSe",petInfoWrapper:"PetsItem_petInfoWrapper__O8o7Y",petsImg:"PetsItem_petsImg__xU3HT",petInfo:"PetsItem_petInfo__7HhIE",petInfoBtn:"PetsItem_petInfoBtn__-r3Lk",btnTrash:"PetsItem_btnTrash__MA55j",info:"PetsItem_info__02lDb",modalTitle:"PetsItem_modalTitle__6AhKg",modalText:"PetsItem_modalText__qPuWH"};function W(e){var a=e.pet,t=(0,n.useState)(!1),i=(0,s.Z)(t,2),l=i[0],c=i[1],d=(0,r.I0)(),p=function(){c(!0)},_=function(){c(!1)};return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("li",{className:U.petsItemWrapper,children:[(0,C.jsx)("img",{src:a.imageURL,alt:a.name,className:U.petsImg}),(0,C.jsxs)("div",{className:U.petInfoWrapper,children:[(0,C.jsxs)("div",{className:U.petInfoBtn,children:[" Name: ",a.name,(0,C.jsx)("button",{type:"button",onClick:p,className:U.btnTrash,children:(0,C.jsx)("svg",{width:"24",height:"24",children:(0,C.jsx)("use",{href:o.Z+"#trash-2"})})})]}),(0,C.jsxs)("p",{className:U.petInfo,children:["Date of birth: ",a.date]}),(0,C.jsxs)("p",{className:U.petInfo,children:["Type: ",a.type]}),(0,C.jsxs)("p",{className:U.petInfo,children:["Comments: ",a.comments]})]}),l&&(0,C.jsx)(g.Z,{isOpen:p,onClose:_,children:(0,C.jsx)(N.Z,{close:_,id:a._id,action:function(e){d((0,u.on)(e)),c(!1)},logo:"#trash-2",children:(0,C.jsxs)("div",{className:U.modalText,children:[(0,C.jsxs)("div",{className:U.modalTitle,children:[(0,C.jsx)("div",{children:"Delete"})," ",(0,C.jsx)("div",{children:"adverstiment?"})," "]}),"Are you sure you want to delete ",(0,C.jsxs)("b",{children:["\u201c",a.name,"\u201d"]}),"?",(0,C.jsx)("br",{}),"You can`t undo this action."]})})})]},a._id)})}var I=t(9604),F=t(4217);function B(){var e=(0,r.v9)(F.MF);return(0,C.jsx)(C.Fragment,{children:e.length<=0?(0,C.jsxs)("div",{className:y.noPetsWrapper,children:[(0,C.jsx)("p",{children:"No pets in your list"}),(0,C.jsx)("img",{src:I,alt:"sad cat",className:y.imgNoPet})]}):(0,C.jsx)("div",{children:(0,C.jsx)("ul",{className:y.petsList,children:e.map((function(e){return(0,C.jsx)(W,{pet:e},e._id)}))})})})}var L={petsListWrapper:"PetsData_petsListWrapper__+sxfq",title:"PetsData_title__c2IAB",addPetsButton_container:"PetsData_addPetsButton_container__8rzL8",addPetsButton:"PetsData_addPetsButton__CZvHI",plusIcon:"PetsData_plusIcon__OaSBD",container:"PetsData_container__iIH-x",petsContainer:"PetsData_petsContainer__rRZxX"},k=t(1087);function O(){return(0,C.jsxs)("div",{className:L.petsListWrapper,children:[(0,C.jsxs)("div",{className:L.petsContainer,children:[(0,C.jsx)("h2",{className:L.title,children:"My pets:"}),(0,C.jsx)("div",{className:L.addPetsButton_container,children:(0,C.jsxs)(k.OL,{className:L.addPetsButton,to:"/add-pet",children:["Add pet",(0,C.jsx)("svg",{className:L.plusIcon,width:24,height:24,children:(0,C.jsx)("use",{href:o.Z+"#logo"})})]})})]}),(0,C.jsx)(B,{})]})}var T={container:"ModalCongrats_container__imJVN",title:"ModalCongrats_title__2iwph",subtitle:"ModalCongrats_subtitle__dxeLz",goToProfileBtn:"ModalCongrats_goToProfileBtn__tIUiP global_desktopButtonBlue__4lkQ4 global_desktopButtonWhite__yg5Te global_shadow__ECSSe global_shadow__ECSSe",logo:"ModalCongrats_logo__WjwdV"};function Z(e){var a=e.onClose;return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("div",{className:T.container,children:[(0,C.jsx)("p",{className:T.title,children:"Congrats!"}),(0,C.jsx)("p",{className:T.subtitle,children:"Your registration is success"}),(0,C.jsxs)("button",{type:"button",className:T.goToProfileBtn,onClick:function(){a()},children:["Go to profile",(0,C.jsx)("svg",{className:T.logo,width:"24",height:"24",children:(0,C.jsx)("use",{href:o.Z+"#pawprint-1"})})]})]})})}var w=t(3541);function D(){var e=(0,n.useState)(!0),a=(0,s.Z)(e,2),t=a[0],c=a[1],d=(0,r.v9)(F.dy),p=(0,r.I0)(),_=function(){c((function(e){return!e}))},m=(0,r.v9)(F.fX),h=(0,n.useState)(m),x=(0,s.Z)(h,2),f=x[0],j=x[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:i.bg,children:(0,C.jsxs)("div",{className:i.container,children:[(0,C.jsxs)("div",{className:i.userContainer,children:[(0,C.jsx)("h2",{className:i.title,children:"My information:"}),t?(0,C.jsx)("button",{className:i.iconEditButton,onClick:_,children:(0,C.jsx)("svg",{width:"24",height:"24",className:i.iconEdit,children:(0,C.jsx)("use",{href:o.Z+"#edit-2"})})}):(0,C.jsx)("button",{className:i.iconEditButton,onClick:_,children:(0,C.jsx)("img",{src:l,alt:"cross icon",className:i.iconCross})}),t?(0,C.jsx)(P,{readonly:!0,user:d}):(0,C.jsx)(P,{readonly:!1,user:d,onSubmit:function(e){p((0,u.Nq)(e)),_(),console.log(e)}})]}),(0,C.jsx)(O,{})]})}),m&&(0,C.jsx)(g.Z,{isOpen:f,onClose:function(){j(!1)},children:(0,C.jsx)(Z,{onClose:function(){j(!1),p((0,w.m)(!1))}})})]})}},9604:function(e,a,t){e.exports=t.p+"static/media/WBC_sad_1.1cdd451a59d80ee82d45.jpg"}}]);
//# sourceMappingURL=322.4264b52d.chunk.js.map