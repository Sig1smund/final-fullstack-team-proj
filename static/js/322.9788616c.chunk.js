"use strict";(self.webpackChunkfinal_fullstack_team_proj=self.webpackChunkfinal_fullstack_team_proj||[]).push([[322],{351:function(e,t,a){a.d(t,{Z:function(){return u}});var s=a(9439),n=a(2791),r=a(7689),i=a(1087),o=a(8976),l=a(1512),c=a(7834),d={button:"AddPetButton_button__d5mR7",plusIcon:"AddPetButton_plusIcon__QRlb4"},_=a(7609),p=a(3329);function u(){var e=(0,n.useState)(!1),t=(0,s.Z)(e,2),a=t[0],u=t[1],m=(0,c.Z)().isLoggedIn,h=(0,r.s0)(),x=(0,r.TH)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.OL,{to:"/add-pet",state:{from:x},className:d.button,onClick:function(){m?h("/add-pet"):u(!0)},children:["Add Pet",(0,p.jsx)("svg",{className:d.plusIcon,width:24,height:24,children:(0,p.jsx)("use",{href:_.Z+"#logo"})})]}),a&&(0,p.jsx)(o.Z,{isOpen:a,onClose:function(){return u(!1)},children:(0,p.jsx)(l.Z,{})})]})}},1512:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(1087),n={container:"AttentionModal_container__wyVg3",title:"AttentionModal_title__ehV77",subtitle:"AttentionModal_subtitle__b8n+z",buttons:"AttentionModal_buttons__eo2K0",loginBtn:"AttentionModal_loginBtn__M0PaQ global_desktopButtonWhite__yg5Te global_shadow__ECSSe",icon:"AttentionModal_icon__Uc3Dw",registerBtn:"AttentionModal_registerBtn__EjiH8 global_desktopButtonWhite__yg5Te global_shadow__ECSSe"},r=a(7609),i=a(3329);function o(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:n.container,children:[(0,i.jsx)("p",{className:n.title,children:"Attention"}),(0,i.jsx)("p",{className:n.subtitle,children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,i.jsxs)("div",{className:n.buttons,children:[(0,i.jsxs)(s.OL,{className:n.loginBtn,to:"/login",children:["Login",(0,i.jsx)("svg",{className:n.icon,width:24,height:24,children:(0,i.jsx)("use",{href:r.Z+"#pawprint-1"})})]}),(0,i.jsx)(s.OL,{className:n.registerBtn,to:"/register",children:"Register"})]})]})})}},8976:function(e,t,a){a.d(t,{Z:function(){return s.Z}});var s=a(5829)},2322:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var s=a(9439),n=a(2791),r=a(9434),i={container:"UserPage_container__qulzD",userContainer:"UserPage_userContainer__JJojP",title:"UserPage_title__CPvgT",iconEditButton:"UserPage_iconEditButton__8gUsY",iconEdit:"UserPage_iconEdit__qHQrI",iconCross:"UserPage_iconCross__1Qp+U",bg:"UserPage_bg__-KDn7"},o=a(7609);var l=a.p+"static/media/cross-small.f651fc886fa4d31a3c8de6c31d316c5d.svg",c=a(4942),d=a(1413),_=a(5861),p=a(4687),u=a.n(p),m=a(9273),h={userCard:"UserForm_userCard__uNoO8 global_shadow__ECSSe",form:"UserForm_form__Rtz4A",userInfoWrapper:"UserForm_userInfoWrapper__F+hWD",inputWrapper:"UserForm_inputWrapper__DeOXH",inputTitle:"UserForm_inputTitle__5iXcX",input:"UserForm_input__qGgJS",LogOutBtn:"UserForm_LogOutBtn__fpCNn",iconLogOut:"UserForm_iconLogOut__rTwlR",avatarWrapper:"UserForm_avatarWrapper__SMEM8",avatar:"UserForm_avatar__Uh3mB",photoWrapper:"UserForm_photoWrapper__RnWw8",editPhotoContainer:"UserForm_editPhotoContainer__tfOMD",iconWrapperCheck:"UserForm_iconWrapperCheck__+A5TU",iconWrapperCross:"UserForm_iconWrapperCross__6TA+y",cameraIcon:"UserForm_cameraIcon__UuUAh",btnEdit:"UserForm_btnEdit__Wsx6+",avatarWrapperRead:"UserForm_avatarWrapperRead__xHx-x",avatarReadonlyON:"UserForm_avatarReadonlyON__fViiL",btnDual:"UserForm_btnDual__CZLPH",btnConfirm:"UserForm_btnConfirm__15T9l",iconCheck:"UserForm_iconCheck__ZC3sK",iconCross:"UserForm_iconCross__0lJoC",iconCamera:"UserForm_iconCamera__ChUw+",saveBtn:"UserForm_saveBtn__qr0j0",saveBtnWrapper:"UserForm_saveBtnWrapper__Nq-es",infoWrapper:"UserForm_infoWrapper__N19OM"};var x=a.p+"static/media/Photo default.2c9afb5dfcbe695b9150f927616a01aa.svg";var f=a.p+"static/media/logout.8790af7bde245471313fc2a3bdb4b2da.svg";var g=a.p+"static/media/x.5dd3f0eff02fbbdf8c42d6a6e00740b9.svg";var j=a.p+"static/media/check.9871830bc0257fd7ceaaf4c5ddc7ce47.svg",v=a(5829),N=a(6056),b=a(3329),C={name:"",email:"",birthday:"",phone:"",city:"",avatarFile:null,avatarURL:""};function y(e){var t=e.onSubmit,a=e.readonly,i=e.user,l=(e.saveNewPhoto,(0,n.useState)(i||C)),p=(0,s.Z)(l,2),y=p[0],P=p[1],I=(0,n.useState)(i.avatarURL||""),W=(0,s.Z)(I,2),U=W[0],B=W[1],F=(0,n.useState)(null),Z=(0,s.Z)(F,2),L=Z[0],k=Z[1],w=(0,n.useState)(!1),O=(0,s.Z)(w,2),T=O[0],S=O[1],D=(0,r.I0)(),M=function(){S(!1)},E=function(){var e=(0,_.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D((0,m.ni)());case 2:S(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=e.target,a=t.name,s=t.value;P((function(e){return(0,d.Z)((0,d.Z)({},e),{},(0,c.Z)({},a,s))}))},R=(0,n.useRef)();return(0,b.jsx)("div",{className:h.userCard,children:(0,b.jsx)("form",{className:h.form,onSubmit:function(e){e.preventDefault();var a=y.name,s=y.email,n=y.phone,r=y.birthday,i=y.city,o=y.avatarFile,l=new FormData;l.append("avatarURL",o),l.append("name",a),l.append("email",s),l.append("phone",n),l.append("birthday",r),l.append("city",i),console.log("FormData",l),console.log("FD",o),t(l)},children:(0,b.jsxs)("div",{className:h.userInfoWrapper,children:[(0,b.jsxs)("div",{className:h.avatarWrapper,children:[U?(0,b.jsx)("img",{src:U,className:[h.avatar,a?h.avatarReadonlyON:""].join(" "),alt:"profile"}):(0,b.jsx)("img",{src:x,className:[h.avatar,a?h.avatarReadonlyON:""].join(" "),alt:"avatar"}),(0,b.jsx)("input",{type:"file",accept:"image/*, .png, .jpg, .gif, .web",ref:R,onChange:function(e){var t=e.target.files[0];if(t.size>3145728)alert("Wrong size");else{var a=URL.createObjectURL(t);B(a),k(t)}},style:{display:"none"}}),!a&&(U?(0,b.jsxs)("div",{className:h.btnDual,children:[(0,b.jsx)("button",{type:"button",className:h.btnConfirm,onClick:function(){P((function(e){return(0,d.Z)((0,d.Z)({},e),{},{avatarFile:L})})),console.log("stateonLoad",y)},children:(0,b.jsx)("img",{src:j,className:h.iconCheck,alt:"check"})}),(0,b.jsx)("p",{children:"Confirm"}),(0,b.jsx)("button",{type:"button",onClick:function(){B(""),k(null)},className:h.btnConfirm,children:(0,b.jsx)("img",{src:g,className:h.iconCross,alt:"cross"})})]}):(0,b.jsxs)("button",{type:"button",className:h.btnEdit,onClick:function(){R.current.click()},children:[(0,b.jsx)("svg",{width:"24px",height:"24px",className:h.iconCamera,children:(0,b.jsx)("use",{href:o.Z+"#camera"})}),"Edit photo"]}))]}),(0,b.jsxs)("div",{className:h.userInfo,children:[(0,b.jsxs)("div",{className:h.infoWrapper,children:[(0,b.jsxs)("div",{className:h.inputWrapper,children:[(0,b.jsx)("p",{className:h.inputTitle,children:"Name:"}),(0,b.jsx)("input",{type:"text",name:"name",value:y.name,required:!0,className:h.input,onChange:A,readOnly:a})]}),(0,b.jsxs)("div",{className:h.inputWrapper,children:[(0,b.jsx)("p",{className:h.inputTitle,children:"Email:"}),(0,b.jsx)("input",{type:"email",value:y.email,name:"email",required:!0,className:h.input,onChange:A,readOnly:a})]}),(0,b.jsxs)("div",{className:h.inputWrapper,children:[(0,b.jsx)("p",{className:h.inputTitle,children:"Birthday:"}),(0,b.jsx)("input",{type:"text",value:y.birthday,name:"birthday",required:!0,className:h.input,placeholder:"00.00.0000",pattern:"/^\\d{1,2}\\-\\d{1,2}\\-\\d{4}$/",onChange:A,readOnly:a})]}),(0,b.jsxs)("div",{className:h.inputWrapper,children:[(0,b.jsx)("p",{className:h.inputTitle,children:"Phone:"}),(0,b.jsx)("input",{type:"tel",value:y.phone,name:"phone",className:h.input,placeholder:"+380000000000",pattern:"/^\\+\\d{12}$/\\",onChange:A,readOnly:a})]}),(0,b.jsxs)("div",{className:h.inputWrapper,children:[(0,b.jsx)("p",{className:h.inputTitle,children:"City:"}),(0,b.jsx)("input",{type:"text",value:y.city,name:"city",required:!0,className:h.input,placeholder:"Kiev",onChange:A,readOnly:a})]})]}),a?(0,b.jsxs)("button",{type:"button",className:h.LogOutBtn,onClick:function(){S(!0)},children:[(0,b.jsx)("img",{src:f,className:h.iconLogOut,alt:"logout"}),"Log Out"]}):(0,b.jsx)("div",{className:h.saveBtnWrapper,children:(0,b.jsx)("button",{className:h.saveBtn,children:"Save"})}),T&&(0,b.jsx)(v.Z,{isOpen:T,onClose:M,children:(0,b.jsx)(N.Z,{logo:"#logout",close:M,action:E,children:"Already leaving?"})})]})]})})})}var P={petsList:"PetList_petsList__bl+kb",imgNoPet:"PetList_imgNoPet__GMiLo",noPetsWrapper:"PetList_noPetsWrapper__1pzId"},I={petsItemWrapper:"PetsItem_petsItemWrapper__atzbH global_shadow__ECSSe",petInfoWrapper:"PetsItem_petInfoWrapper__O8o7Y",petsImg:"PetsItem_petsImg__xU3HT",petInfo:"PetsItem_petInfo__7HhIE",petInfoBtn:"PetsItem_petInfoBtn__-r3Lk",btnTrash:"PetsItem_btnTrash__MA55j",info:"PetsItem_info__02lDb",modalTitle:"PetsItem_modalTitle__6AhKg",modalText:"PetsItem_modalText__qPuWH"};function W(e){var t=e.pet,a=(0,n.useState)(!1),i=(0,s.Z)(a,2),l=i[0],c=i[1],d=(0,r.I0)(),_=function(){c(!0)},p=function(){c(!1)};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("li",{className:I.petsItemWrapper,children:[(0,b.jsx)("img",{src:t.imageURL,alt:t.name,className:I.petsImg}),(0,b.jsxs)("div",{className:I.petInfoWrapper,children:[(0,b.jsxs)("div",{className:I.petInfoBtn,children:[" Name: ",t.name,(0,b.jsx)("button",{type:"button",onClick:_,className:I.btnTrash,children:(0,b.jsx)("svg",{width:"24",height:"24",children:(0,b.jsx)("use",{href:o.Z+"#trash-2"})})})]}),(0,b.jsxs)("p",{className:I.petInfo,children:["Date of birth: ",t.date]}),(0,b.jsxs)("p",{className:I.petInfo,children:["Type: ",t.type]}),(0,b.jsxs)("p",{className:I.petInfo,children:["Comments: ",t.comments]})]}),l&&(0,b.jsx)(v.Z,{isOpen:_,onClose:p,children:(0,b.jsx)(N.Z,{close:p,id:t._id,action:function(e){d((0,m.on)(e)),c(!1)},logo:"#trash-2",children:(0,b.jsxs)("div",{className:I.modalText,children:[(0,b.jsxs)("div",{className:I.modalTitle,children:[(0,b.jsx)("div",{children:"Delete"})," ",(0,b.jsx)("div",{children:"adverstiment?"})," "]}),"Are you sure you want to delete ",(0,b.jsxs)("b",{children:["\u201c",t.name,"\u201d"]}),"?",(0,b.jsx)("br",{}),"You can`t undo this action."]})})})]},t._id)})}var U=a(9604),B=a(4217);function F(){var e=(0,r.v9)(B.MF);return(0,b.jsx)(b.Fragment,{children:e.length<=0?(0,b.jsxs)("div",{className:P.noPetsWrapper,children:[(0,b.jsx)("p",{children:"No pets in your list"}),(0,b.jsx)("img",{src:U,alt:"sad cat",className:P.imgNoPet})]}):(0,b.jsx)("div",{children:(0,b.jsx)("ul",{className:P.petsList,children:e.map((function(e){return(0,b.jsx)(W,{pet:e},e._id)}))})})})}var Z={petsListWrapper:"PetsData_petsListWrapper__+sxfq",title:"PetsData_title__c2IAB",addPetsButton_container:"PetsData_addPetsButton_container__8rzL8",addPetsButton:"PetsData_addPetsButton__CZvHI",plusIcon:"PetsData_plusIcon__OaSBD",container:"PetsData_container__iIH-x",petsContainer:"PetsData_petsContainer__rRZxX"},L=a(351);function k(){return(0,b.jsxs)("div",{className:Z.petsListWrapper,children:[(0,b.jsxs)("div",{className:Z.petsContainer,children:[(0,b.jsx)("h2",{className:Z.title,children:"My pets:"}),(0,b.jsx)("div",{className:Z.addPetsButton_container,children:(0,b.jsx)(L.Z,{})})]}),(0,b.jsx)(F,{})]})}var w={container:"ModalCongrats_container__imJVN",title:"ModalCongrats_title__2iwph",subtitle:"ModalCongrats_subtitle__dxeLz",goToProfileBtn:"ModalCongrats_goToProfileBtn__tIUiP global_desktopButtonBlue__4lkQ4 global_desktopButtonWhite__yg5Te global_shadow__ECSSe global_shadow__ECSSe",logo:"ModalCongrats_logo__WjwdV"};function O(e){var t=e.onClose;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:w.container,children:[(0,b.jsx)("p",{className:w.title,children:"Congrats!"}),(0,b.jsx)("p",{className:w.subtitle,children:"Your registration is success"}),(0,b.jsxs)("button",{type:"button",className:w.goToProfileBtn,onClick:function(){t()},children:["Go to profile",(0,b.jsx)("svg",{className:w.logo,width:"24",height:"24",children:(0,b.jsx)("use",{href:o.Z+"#pawprint-1"})})]})]})})}var T=a(3541);function S(){var e=(0,n.useState)(!0),t=(0,s.Z)(e,2),a=t[0],c=t[1],d=(0,r.v9)(B.dy),_=(0,r.I0)(),p=function(){c((function(e){return!e}))},u=(0,r.v9)(B.fX),h=(0,n.useState)(u),x=(0,s.Z)(h,2),f=x[0],g=x[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:i.bg,children:(0,b.jsxs)("div",{className:i.container,children:[(0,b.jsxs)("div",{className:i.userContainer,children:[(0,b.jsx)("h2",{className:i.title,children:"My information:"}),a?(0,b.jsx)("button",{className:i.iconEditButton,onClick:p,children:(0,b.jsx)("svg",{width:"24",height:"24",className:i.iconEdit,children:(0,b.jsx)("use",{href:o.Z+"#edit-2"})})}):(0,b.jsx)("button",{className:i.iconEditButton,onClick:p,children:(0,b.jsx)("img",{src:l,alt:"cross icon",className:i.iconCross})}),a?(0,b.jsx)(y,{readonly:!0,user:d}):(0,b.jsx)(y,{readonly:!1,user:d,onSubmit:function(e){_((0,m.Nq)(e)),p(),console.log(e)}})]}),(0,b.jsx)(k,{})]})}),u&&(0,b.jsx)(v.Z,{isOpen:f,onClose:function(){g(!1)},children:(0,b.jsx)(O,{onClose:function(){g(!1),_((0,T.m)(!1))}})})]})}},9604:function(e,t,a){e.exports=a.p+"static/media/WBC_sad_1.1cdd451a59d80ee82d45.jpg"}}]);
//# sourceMappingURL=322.9788616c.chunk.js.map