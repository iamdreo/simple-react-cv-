(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(293)},130:function(e,t,a){},131:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},248:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),l=a.n(r),s=(a(130),a(16)),o=a(20),c=a(18),m=a(17),d=a(19),u=a(124),p=a.n(u),h=(a(131),a(113)),g=a(21),E=a(37),f=a(114),v=a.n(f),b=a(116),y=a.n(b),w=a(23),N=a.n(w),x=a(26),k=a(76),C=a.n(k),O=a(117),S=a.n(O),j=a(7),P=a.n(j),L=a(118),B=a.n(L),F=a(75),D=a.n(F),A=a(121),R=a.n(A),I=a(119),M=a.n(I),z=a(120),T=a.n(z),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=this.state.open;return i.a.createElement("div",{className:t.root},i.a.createElement(v.a,{position:"fixed",color:"inherit",className:P()(t.appBar,Object(g.a)({},t.appBarShift,n)),elevation:0},i.a.createElement(y.a,{className:t.toolbar},i.a.createElement(D.a,{lgUp:!0},i.a.createElement(C.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:P()(t.menuButton,n&&t.hide)},i.a.createElement(S.a,null))),i.a.createElement(D.a,{mdDown:!0},i.a.createElement(N.a,{className:t.button,color:"inherit"},i.a.createElement(x.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About")),i.a.createElement(N.a,{className:t.button,color:"inherit"},i.a.createElement(x.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:500}," Services")),i.a.createElement(N.a,{variant:"outlined",color:"inherit",className:t.contactButton},i.a.createElement(x.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))),i.a.createElement(B.a,{className:t.drawer,variant:"persistent",anchor:"top",open:n,classes:{paper:t.drawerPaper}},i.a.createElement("div",{className:t.drawerHeader},i.a.createElement(C.a,{onClick:this.handleDrawerClose},"ltr"===a.direction?i.a.createElement(M.a,null):i.a.createElement(T.a,null))),i.a.createElement(R.a,null),i.a.createElement(N.a,{className:t.button,color:"inherit"},i.a.createElement(x.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About")),i.a.createElement(N.a,{className:t.button,color:"inherit"},i.a.createElement(x.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-70,duration:500}," Portfolio")),i.a.createElement(N.a,{color:"inherit",className:t.button},i.a.createElement(x.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))}}]),t}(i.a.Component),U=Object(E.withStyles)(function(e){var t;return{root:(t={},Object(g.a)(t,e.breakpoints.down("sm"),{display:"flex",justifyContent:"center"}),Object(g.a)(t,e.breakpoints.up("md"),{display:"flex"}),Object(g.a)(t,e.breakpoints.up("lg"),{flexGrow:1}),t),grow:{flexGrow:1},toolbar:{marginLeft:"75%"},button:{fontFamily:"Montserrat",fontSize:12},contactButton:{marginLeft:20,fontFamily:"Montserrat",fontSize:13},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat("100%","px)"),marginLeft:"100%",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:"100%",flexShrink:0},drawerPaper:{width:"100%"},drawerHeader:Object(h.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:NaN},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(H),W=a(78),G=(a(244),function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1});G.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=200-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},n)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var a=e[t].getAttribute("data-type"),n=e[t].getAttribute("data-period");a&&new G(e[t],JSON.parse(a),n)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(i)};var J=function(){var e=Object(W.b)({to:[{opacity:1,color:"grey"},{opacity:1,color:"rgb(14,26,19)"}],from:{opacity:0,color:"green",marginLeft:20},config:{duration:3e3}});return i.a.createElement("div",{className:"banner-container"},i.a.createElement(W.a.div,{style:e},i.a.createElement("h1",{className:"banner-text"},"I'm Andrew Ole")),i.a.createElement("p",{className:"typewrite","data-period":"2000","data-type":'[ "Software engineer", "I Love building things.", \r "Based in Lagos, Nigeria." ]'}," ",i.a.createElement("span",{className:"wrap"})))};a(245);var V=function(e){var t=e.id;return i.a.createElement("div",{style:{backgroundColor:"#F2F4F4"},id:t},i.a.createElement("h1",{className:"about-me-text"},"About me"),i.a.createElement("div",{className:"about-grid"},i.a.createElement("div",{className:"about-text-sec"},i.a.createElement("p",null,"I am Andrew Ole, a full stack software engineer obsessed with creating amazing user experiences from front end to backend and giving my users the best possible experience."),i.a.createElement("p",null,"I have a passion for constantly learning, evolving and building cool things with the latest technologies. So hit me up and let's grow and build cool things together.")),i.a.createElement("div",{className:"experience-section"},i.a.createElement("div",{id:"ProgressBar"},i.a.createElement("div",{id:"Progress"})),i.a.createElement("p",null,"Javascript and React experience"),i.a.createElement("div",{id:"ProgressBar"},i.a.createElement("div",{id:"Progress"})),i.a.createElement("p",null,"Python and Tensorflow experience "),i.a.createElement("div",{id:"ProgressBar"},i.a.createElement("div",{id:"Progress"})),i.a.createElement("p",null,"Php and Larevel experience"),i.a.createElement("div",{id:"ProgressBar"},i.a.createElement("div",{id:"Progress"})),i.a.createElement("p",null,"Git, Docker, Heroku and More "))))},$=(a(246),a(27));var _=function(e){var t=e.id;return i.a.createElement("div",{id:t},i.a.createElement("h1",{className:"service-text"},"Services"),i.a.createElement("div",{className:"service-grid"},i.a.createElement("div",{className:"service"},i.a.createElement("div",{className:"inside-grid"},i.a.createElement($.d,{className:"icon"}),i.a.createElement("p",{className:"title-text"}," Frontend ")),i.a.createElement("p",{className:"description"},"Creating beautiful web UI")),i.a.createElement("div",{className:"service"},i.a.createElement("div",{className:"inside-grid"},i.a.createElement($.b,{className:"icon"}),i.a.createElement("p",{className:"title-text"},"Backend ")),i.a.createElement("p",{className:"description"},"Secure and reliable backends")),i.a.createElement("div",{className:"service"},i.a.createElement("div",{className:"inside-grid"},i.a.createElement($.e,{className:"icon"}),i.a.createElement("p",{className:"title-text"},"Mobile app ")),i.a.createElement("p",{className:"description"},"Beautiful and creative applications")),i.a.createElement("div",{className:"service"},i.a.createElement("div",{className:"inside-grid"},i.a.createElement($.f,{className:"icon"}),i.a.createElement("p",{className:"title-text"},"Artificial intelligence ")),i.a.createElement("p",{className:"description"},"Super intelligent powerful applications")),i.a.createElement("div",{className:"service"},i.a.createElement("div",{className:"inside-grid"},i.a.createElement($.c,{className:"icon"}),i.a.createElement("p",{className:"title-text"},"Virtual reality ")),i.a.createElement("p",{className:"description"},"Building beautiful engaging worlds")),i.a.createElement("div",{className:"service"},i.a.createElement("div",{className:"inside-grid"},i.a.createElement($.a,{className:"icon"}),i.a.createElement("p",{className:"title-text"},"Marketing")),i.a.createElement("p",{className:"description"},"Reach the right customers"))))},q=a(38),K=a.n(q),Q=a(39),X=a.n(Q);a(248);function Y(){return i.a.createElement("div",{className:"service-container"},i.a.createElement("div",{className:"service-row"},i.a.createElement(K.a,{start:0,end:100,delay:0,duration:5},function(e){var t=e.countUpRef,a=e.start;return i.a.createElement(X.a,{onChange:a,delayedCall:!0},i.a.createElement("span",{style:{fontFamily:"Poppins",fontSize:"30px"},ref:t}))}),i.a.createElement("h4",null,"Projects")),i.a.createElement("div",{className:"service-row"},i.a.createElement(K.a,{start:10,end:42,delay:0,duration:5},function(e){var t=e.countUpRef,a=e.start;return i.a.createElement(X.a,{onChange:a,delayedCall:!0},i.a.createElement("span",{style:{fontFamily:"Poppins",fontSize:"30px"},ref:t}))}),i.a.createElement("h4",null,"Clients")),i.a.createElement("div",{className:"service-row"},i.a.createElement(K.a,{start:400,end:1121,delay:0,duration:5},function(e){var t=e.countUpRef,a=e.start;return i.a.createElement(X.a,{onChange:a,delayedCall:!0},i.a.createElement("span",{style:{fontFamily:"Poppins",fontSize:"30px"},ref:t}))}),i.a.createElement("h4",null,"Nights")),i.a.createElement("div",{className:"service-row"},i.a.createElement(K.a,{start:5e3,end:28796,delay:0,duration:5},function(e){var t=e.countUpRef,a=e.start;return i.a.createElement(X.a,{onChange:a,delayedCall:!0},i.a.createElement("span",{style:{fontFamily:"Poppins",fontSize:"30px"},ref:t}))}),i.a.createElement("h4",null,"Hours")))}function Z(){return i.a.createElement("div",{style:{backgroundColor:"#F2F4F4",height:"100px",marginTop:"40px",bottom:0}},i.a.createElement("p",{style:{padding:"40px",textAlign:"center",alignItems:"center",justifyContent:"center"}},"\xa92019 Created with love by me with Reactjs"))}var ee=a(56),te=a.n(ee),ae=a(122),ne=a.n(ae),ie=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.id;return i.a.createElement("div",{id:a},i.a.createElement("h1",{className:t.text}," Let's Work? "),i.a.createElement("form",{action:"https://formspree.io/andrew_ole@yahoo.com",method:"POST",className:t.container,noValidate:!0,autoComplete:"off"},i.a.createElement(te.a,{id:"outlined-name",className:t.textField,name:"name",placeholder:"name",fullWidth:!0,type:"text",style:{width:"50%"},margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}}),i.a.createElement(te.a,{id:"outlined-email-input",className:t.textField,type:"email",name:"email",autoComplete:"email",placeholder:"Email",fullWidth:!0,style:{width:"50%"},margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}}),i.a.createElement(te.a,{id:"outlined-full-width",placeholder:"Placeholder",fullWidth:!0,multiline:!0,rows:"4",name:"message",type:"text",defaultValue:"Message",style:{width:"50%"},margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}}),i.a.createElement(N.a,{type:"submit",value:"Send",variant:"contained",color:"primary",className:t.button},"SEND MESSAGE")))}}]),t}(i.a.Component),re=Object(E.withStyles)(function(e){return{container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{margin:e.spacing.unit,borderRadius:20,"&:hover":{backgroundColor:ne.a[700]}},text:{textAlign:"center",marginTop:100,fontFamily:"Righteous"}}})(ie),le=a(123),se=a(77);se.a.initialize("UA-162013835-1"),se.a.pageview(window.location.pathname+window.location.search);var oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state.loading;return i.a.createElement(n.Fragment,null,i.a.createElement(le.Helmet,null,i.a.createElement("title",null,"Andrew Ole's Portfolio"),i.a.createElement("meta",{name:"description",content:"Andrew Ole is a full stack developer experienced in React and other technologies obsessed with creating amazing user experiences from front end to backend and giving my users the best possible experience "}),i.a.createElement("link",{rel:"canonical",href:"https://andrewole.com.ng"})),e?i.a.createElement(p.a,{style:{margin:300,marginLeft:"50%",color:"black"}}):i.a.createElement("div",null,i.a.createElement(U,null),i.a.createElement(J,null),i.a.createElement(V,{id:"about"}),i.a.createElement(_,{id:"portfolio"}),i.a.createElement(Y,null),i.a.createElement(re,{id:"contact"}),i.a.createElement(Z,null)))}}]),t}(n.Component);a(292),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=document.getElementById("root");ce.hasChildNodes()?l.a.hydrate(i.a.createElement(oe,null),ce):l.a.render(i.a.createElement(oe,null),ce),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[125,1,2]]]);
//# sourceMappingURL=main.657d24e6.chunk.js.map