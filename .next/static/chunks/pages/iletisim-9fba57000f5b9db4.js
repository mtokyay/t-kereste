(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{7977:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iletisim",function(){return i(1907)}])},9440:function(e,t,i){"use strict";var n=i(6042),a=i(9534),r=i(5893),s=(i(7294),i(9008)),o=i.n(s),l=i(1163);t.Z=function(e){e.children;var t=(0,a.Z)(e,["children"]),i=(0,l.useRouter)(),s=(0,n.Z)({},{siteName:"Tokyay Kereste | Bal\u0131kesir G\xf6nen'de in\u015faatl\u0131k kereste, do\u011framal\u0131k kereste, ithal kereste, ithal lambri, k\xfct\xfck ev, ah\u015fap ev, bunglov, tinyhouse",domain:"https://tokyaykereste.com.tr",twitterHandle:""},{title:"Tokyay Kereste | Bal\u0131kesir G\xf6nen Kereste",description:"Tokyay Kereste, in\u015faatl\u0131k kereste, do\u011framal\u0131k kereste, lambri, deck tahtas\u0131, tinyhouse, k\xfct\xfck ev, pergola, \xfc\xe7gen ev, bungalov",image:"/images/social.png",type:"website"},t);return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:s.title}),(0,r.jsx)("meta",{content:s.description,name:"description"},"description"),s.domain&&(0,r.jsx)("link",{rel:"canonical",href:"".concat(s.domain).concat(i.asPath)},"canonical"),(0,r.jsx)("meta",{property:"og:title",content:s.title},"og-title"),(0,r.jsx)("meta",{property:"og:description",content:s.description},"og-description"),(0,r.jsx)("meta",{property:"og:site_name",content:s.siteName},"og-site-name"),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og-type"),s.domain&&(0,r.jsx)("meta",{property:"og:url",content:"".concat(s.domain).concat(i.asPath)},"og-url"),s.domain&&s.image&&(0,r.jsx)("meta",{property:"og:image",content:"".concat(s.domain).concat(s.image)},"og-image"),(0,r.jsx)("meta",{name:"twitter:title",content:s.title},"twitter-title"),(0,r.jsx)("meta",{name:"twitter:description",content:s.description},"twitter-description"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter-card"),s.twitterHandle&&(0,r.jsx)("meta",{name:"twitter:site",content:s.twitterHandle},"twitter-site"),s.domain&&s.image&&(0,r.jsx)("meta",{name:"twitter:image",content:"".concat(s.domain).concat(s.image)},"twitter-image")]})}},1445:function(e,t,i){"use strict";var n=i(6042),a=i(9396),r=i(9534),s=i(5893),o=(i(7294),i(253)),l=i(2318),m=(0,i(1120).Z)((function(e){return{root:{"&:not(:last-child)":{marginBottom:"2rem"}},subtitle:{maxWidth:700,display:"inline-block"}}}));t.Z=function(e){var t=m(),i=e.subtitle,c=e.title,d=e.size,u=(e.className,(0,r.Z)(e,["subtitle","title","size","className"]));return c||i?(0,s.jsxs)(o.Z,(0,a.Z)((0,n.Z)({component:"header",className:t.root+(e.className?" ".concat(e.className):"")},u),{children:[c&&(0,s.jsx)(l.Z,{variant:"h".concat(d),gutterBottom:!!e.subtitle,children:c}),i&&(0,s.jsx)(l.Z,{variant:"subtitle1",className:t.subtitle,children:i})]})):null}},1907:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var n=i(5893),a=i(7294),r=i(9440),s=i(3832),o=i(1749),l=i(1120),m=i(1871),c=i(1445),d=i(253),u=i(5046),g=i(6279),p=i(282),h=i(5477),x=i(2283);var b="https://formspree.io/".concat("xknlrdnb");var f={submit:function(e){return function(e){var t=arguments.length>2?arguments[2]:void 0;return fetch(e,{method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",headers:{accept:"application/json","Content-Type":"application/json"},body:t?JSON.stringify(t):void 0}).then((function(e){return e.json()}))}(b,"POST",e)}},j=f;var y=function(e){var t=(0,a.useState)(!1),i=t[0],r=t[1],s=(0,a.useState)(null),l=s[0],m=s[1],c=(0,x.cI)(),b=c.handleSubmit,f=c.register,y=c.errors,v=c.reset;return(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)(d.Z,{mb:3,children:(0,n.jsx)(u.Z,{severity:l.type,children:l.message})}),(0,n.jsx)("form",{onSubmit:b((function(e){r(!0),j.submit(e).then((function(){v(),m({type:"success",message:"Mesaj\u0131n\u0131z ba\u015far\u0131yla g\xf6nderildi!"})})).catch((function(e){m({type:"error",message:e.message})})).finally((function(){r(!1)}))})),children:(0,n.jsxs)(o.Z,{container:!0,spacing:2,children:[e.showNameField&&(0,n.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,n.jsx)(g.Z,{variant:"outlined",type:"text",label:"Name",name:"name",error:!!y.name,helperText:y.name&&y.name.message,fullWidth:!0,inputRef:f({required:"L\xfctfen ad\u0131n\u0131z\u0131 giriniz"})})}),(0,n.jsx)(o.Z,{item:!0,xs:12,md:e.showNameField?6:12,children:(0,n.jsx)(g.Z,{variant:"outlined",type:"email",label:"Email",name:"email",error:!!y.email,helperText:y.email&&y.email.message,fullWidth:!0,inputRef:f({required:"L\xfctfen e-posta adresinizi giriniz"})})}),(0,n.jsx)(o.Z,{item:!0,xs:12,children:(0,n.jsx)(g.Z,{variant:"outlined",type:"text",label:"Message",name:"message",multiline:!0,rows:5,error:!!y.message,helperText:y.message&&y.message.message,fullWidth:!0,inputRef:f({required:"L\xfctfen mesaj\u0131n\u0131z\u0131 yaz\u0131n\u0131z"})})}),(0,n.jsx)(o.Z,{item:!0,xs:12,children:(0,n.jsxs)(p.Z,{variant:"contained",color:"primary",size:"large",type:"submit",disabled:i,children:[!i&&(0,n.jsx)("span",{children:e.buttonText}),i&&(0,n.jsx)(h.Z,{size:28})]})})]})})]})},v=(0,l.Z)((function(e){return{map:{border:0,width:"100%",height:"320px",backgroundColor:"#efefef",filter:"dark"===e.palette.type&&"invert(90%)"}}}));var k=function(e){var t=v();return(0,n.jsx)(m.Z,{bgColor:e.bgColor,size:e.size,bgImage:e.bgImage,bgImageOpacity:e.bgImageOpacity,children:(0,n.jsxs)(s.Z,{maxWidth:"lg",children:[(0,n.jsx)(c.Z,{title:e.title,subtitle:e.subtitle,size:4,textAlign:"center"}),(0,n.jsxs)(o.Z,{container:!0,spacing:4,children:[(0,n.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,n.jsx)("iframe",{className:t.map,src:e.embedSrc,title:"Contact Map",frameBorder:0})}),(0,n.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,n.jsx)(y,{showNameField:e.showNameField,buttonText:e.buttonText,buttonColor:e.buttonColor})})]})]})})};var w=function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{title:"\u0130leti\u015fim"}),(0,n.jsx)(k,{bgColor:"default",size:"medium",bgImage:"",bgImageOpacity:1,title:"Bizimle \u0130leti\u015fime Ge\xe7in",subtitle:"100. Y\u0131l Mh. Manyas Cd. No:99 G\xd6NEN Tel: 0 266 762 60 30 - 762 60 50 Faks: 0 266 762 63 79",buttonText:"Mesaj at",buttonColor:"primary",showNameField:!0,embedSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.704157509447!2d27.6747515561482!3d40.10430850132182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b6917d24fef54f%3A0xb02e6c3234b99fd8!2sTokyay%20Kereste%20Orman%20%C3%9Cr%C3%BCnleri%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1693318855167!5m2!1str!2str"})]})}}},function(e){e.O(0,[189,774,888,179],(function(){return t=7977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);