"use strict";(self.webpackChunkfinal_fullstack_team_proj=self.webpackChunkfinal_fullstack_team_proj||[]).push([[895],{5895:function(e,s,a){a.r(s),a.d(s,{default:function(){return f}});var r=a(1413),o=a(9439),n=a(2791),t=a(9434),i=a(1087),c=a(9273),l=a(1134),m=a(4695),u=a(8007),d=u.Ry().shape({email:u.Z_().email("Enter a valid Email").required("Email is required").trim(),password:u.Z_().required("Password is required").min(6,"Password must be at least 6 characters").max(16,"Password must be at most 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit").trim()}),_={formTitle:"LoginForm_formTitle__xGeGl",formLabelConteiner:"LoginForm_formLabelConteiner__ika6h",formLabelPasswordConteiner:"LoginForm_formLabelPasswordConteiner__sKp3v",showPasswordButton:"LoginForm_showPasswordButton__-Wrzx",passwordIcon:"LoginForm_passwordIcon__Ls6HM",formInput:"LoginForm_formInput__kt+x6",error:"LoginForm_error__012y+",success:"LoginForm_success__46ZCk",authBtn:"LoginForm_authBtn__pJOjM global_desktopLoginButton__z9H8G",errorsMassage:"LoginForm_errorsMassage__rn23v",authScreenNavigation:"LoginForm_authScreenNavigation__gWd7T",authScreenNavigationLink:"LoginForm_authScreenNavigationLink__z72yD"},h=a(3329),p=function(){var e=(0,n.useState)(!1),s=(0,o.Z)(e,2),a=s[0],u=s[1],p=(0,t.I0)(),g=(0,l.cI)({resolver:(0,m.X)(d)}),f=g.register,L=g.handleSubmit,w=g.reset,b=g.watch,x=g.formState.errors;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:_.formTitle,children:"Login"}),(0,h.jsxs)("form",{onSubmit:L((function(e){p((0,c.Ib)(e)),w()})),children:[(0,h.jsxs)("div",{className:_.formLabelConteiner,children:[(0,h.jsxs)("label",{className:_.formLabel,children:[(0,h.jsx)("input",(0,r.Z)((0,r.Z)({className:"".concat(_.formInput," ").concat(x.email?_.error:""," ").concat(b("email")&&!x.email?_.success:""),placeholder:"Email"},f("email")),{},{type:"email"})),x.email&&(0,h.jsx)("p",{className:_.errorsMassage,children:x.email.message})]}),(0,h.jsxs)("label",{className:_.formLabel,children:[(0,h.jsxs)("div",{className:_.formLabelPasswordConteiner,children:[(0,h.jsx)("input",(0,r.Z)((0,r.Z)({className:"".concat(_.formInput," ").concat(x.password?_.error:""," ").concat(b("password")&&!x.password?_.success:""),placeholder:"Password"},f("password")),{},{type:a?"text":"password"})),(0,h.jsx)("button",{className:_.showPasswordButton,type:"button",onClick:function(){return u(!a)}})]}),x.password&&(0,h.jsx)("p",{className:_.errorsMassage,children:x.password.message})]})]}),(0,h.jsx)("button",{className:_.authBtn,type:"submit",children:"Login"}),(0,h.jsxs)("p",{className:_.authScreenNavigation,children:["Don't have an account?\xa0",(0,h.jsx)(i.OL,{to:"/register",className:_.authScreenNavigationLink,children:"Register"})]})]})]})},g="LoginPage_formContainer__heTJ-",f=function(){return(0,h.jsx)("div",{className:g,children:(0,h.jsx)(p,{})})}}}]);
//# sourceMappingURL=895.245dd5e3.chunk.js.map