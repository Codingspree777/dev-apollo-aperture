(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{244:function(e,t,a){},265:function(e,t,a){e.exports=a.p+"static/media/rocket.587e70cb.svg"},314:function(e,t,a){e.exports=a(529)},522:function(e,t,a){e.exports=a.p+"static/media/comety.45d502ae.gif"},529:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),o=a(71),i=a(52),c=a(36),s=a(55),m=a(53),u=a(26),d=a(56),h=a(594),g=a(530),p=a(574),f=a(575),E=a(144),b=a(576),y=a(134),v=a.n(y),x=a(135),k=a.n(x),w=a(108),C=a.n(w),O=Object(g.a)(function(e){return{root:{flexGrow:1,color:C.a[800]},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},iconsRightContainer:{marginLeft:20}}}),S=function(){var e=O();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(v.a,null)),r.a.createElement(E.a,{variant:"h6",className:e.title},"Apollo Aperture"),r.a.createElement(k.a,{color:"inherit",className:e.menuButton}))))},j=a(277),B=a(69),N=a.n(B),W=Object(j.a)({palette:{},appBar:{height:60,color:C.a[800]},drawer:{width:230,color:N.a[500]},raisedButton:{primaryColor:C.a[800]}}),D=a(78),L=a(279),T=a(93),A=a(63),H=a.n(A),z=a(531),P=a(37),I=a.n(P),R=a(577);var Q=function(e){var t={content:{padding:"5px 10px",marginLeft:90,height:80},number:{display:"block",fontWeight:E.a.fontWeightMedium,fontSize:18,color:I.a[800]},text:{fontSize:20,fontWeight:E.a.fontWeightLight,color:I.a[500]},iconSpan:{float:"left",height:80,width:90,textAlign:"center",backgroundColor:e.color},icon:{height:72,width:72,marginTop:30,maxWidth:"100%",color:"white"}};return r.a.createElement(z.a,null,r.a.createElement("span",{style:t.iconSpan,className:"fun-hover"},r.a.createElement(R.a,{color:"inherit",icon:e.Icon,style:t.icon},e.Icon)),r.a.createElement("div",{style:t.content},r.a.createElement("span",{style:t.text},e.title),r.a.createElement("span",{style:t.number},e.value)))},U=a(49),F=function(e){var t={paper:{backgroundColor:"white",height:175},div:{height:95,padding:"5px 15px 0 15px"},header:{fontSize:24,fontWeight:E.a.fontWeightLight,color:"white",backgroundColor:N.a[600],padding:10}};return r.a.createElement(z.a,{style:t.paper},r.a.createElement("div",{style:Object(T.a)({},t.header)},"GraphQL Playground Quick Access"),r.a.createElement("div",{style:t.div},r.a.createElement(U.f,null,r.a.createElement(U.c,{data:e.data},r.a.createElement(U.b,{type:"monotone",dataKey:"pv",stroke:"#8884d8",strokeWidth:2})))))},G=a(179),M={navigation:{fontSize:14,fontWeight:E.a.fontWeightLight,color:I.a[400],paddingBottom:15,display:"block"},title:Object(D.a)({fontSize:24,fontWeight:E.a.fontWeightLight,marginBottom:20},"fontWeight","lighter"),paper:{padding:30},clear:{clear:"both"},button:{display:"block",backgroundColor:"red",color:"white",margin:"0 auto"}},V=a(258),q=a.n(V),K=a(578),J=a(180),_=a(138),$=a.n(_);function X(){var e=Object(G.a)(["\n  background-color: blueGrey[500];\n  border-radius: 15px;\n  color: 'white';\n  height: 115%,\n  shadow: 'rgba(0, 0, 0, 0.7)';\n  box-shadow: 0 0 0 0 ",";\n  animation: "," 1.75s infinite cubic-bezier(0.646, 0, 0, 1);\n"]);return X=function(){return e},e}function Y(){var e=Object(G.a)(["\n  to {\n    box-shadow: 0 0 8px 8px ",";\n  }\n"]);return Y=function(){return e},e}var Z=J.a.div(X(),function(e){return e.theme.shadow},function(e){return t=e.theme.shadow,Object(J.b)(Y(),t);var t}),ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={selectedFile:null},a.onChangeHandler=a.onChangeHandler.bind(Object(u.a)(a)),a.onClickHandler=a.onClickHandler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onChangeHandler",value:function(e){console.log(e.target.files[0]),this.setState({selectedFile:e.target.files[0],loaded:0})}},{key:"onClickHandler",value:function(){var e=new FormData;e.append("file",this.state.selectedFile),$.a.post("http://localhost:8000/upload",e,{}).then(function(e){console.log(e.statusText)})}},{key:"render",value:function(){var e={paper:{backgroundColor:"white",height:175},div:{marginLeft:"auto",marginRight:"auto",width:"95%",height:85},header:{color:"white",backgroundColor:N.a[600],padding:10},image:{borderRadius:"15px",margin:"0 auto",display:"block",height:"75%",width:150,marginTop:10,backgroundColor:H.a[500],color:"white",shadow:"rgba(0, 0, 0, 0.7)"},input:{opacity:.01,marginTop:-25},upload:{marginTop:-10}};return r.a.createElement(z.a,{style:e.paper},r.a.createElement("div",{style:Object(T.a)({},M.title,e.header)}," Query Response "),r.a.createElement("div",{style:e.div},r.a.createElement(K.a,{type:"button",size:"small",variant:"outlined",className:"btn btn-success btn-block",style:e.upload,onClick:this.onClickHandler},"Upload"),r.a.createElement(U.f,null,r.a.createElement(K.a,{variant:"contained",color:"default",style:e.image},r.a.createElement(Z,null,r.a.createElement(q.a,null)),r.a.createElement("input",{onChange:this.onChangeHandler,className:"dropzone",type:"file",name:"file",style:e.input})))))}}]),t}(r.a.Component),te=a(582),ae=a(580),ne=a(581),re=a(579),le=a(96),oe=a.n(le),ie=function(e){var t={paper:{minHeight:344,padding:10},legend:{paddingTop:20},pieChartDiv:{height:290,textAlign:"center"},subheader:{fontSize:24,marginBottom:5,fontWeight:E.a.fontWeightLight,backgroundColor:oe.a[600],color:I.a[100]}};return r.a.createElement(z.a,{style:t.paper},r.a.createElement(re.a,{style:t.subheader},"Re-Rendered Components"),r.a.createElement("div",{style:M.clear}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-8 col-md-8 col-lg-8"},r.a.createElement("div",{style:t.pieChartDiv},r.a.createElement(U.f,null,r.a.createElement(U.e,null,r.a.createElement(U.d,{innerRadius:80,outerRadius:130,data:e.data,dataKey:"value",fill:"#8884d8"},e.data.map(function(e){return r.a.createElement(U.a,{key:e.name,fill:e.color})})))))),r.a.createElement("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4"},r.a.createElement("div",{style:t.legend},r.a.createElement("div",{style:t.legend},r.a.createElement(ae.a,null,e.data.map(function(e){return r.a.createElement(ne.a,{key:e.name,leftavatar:r.a.createElement(te.a,{srcSet:e.icon,backgroundColor:e.color})},e.name)})))))))},ce=a(584),se=a(585),me=a(280),ue=a(583),de=function(e){var t={subheader:{fontSize:24,fontWeight:E.a.fontWeightLight,backgroundColor:oe.a[600],color:I.a[100],marginBottom:20}},a=r.a.createElement(b.a,{touch:!0,tooltipPosition:"bottom-left"},r.a.createElement(k.a,{color:I.a[400]})),n=r.a.createElement(me.a,{iconButtonElement:a},r.a.createElement(ue.a,null,"star"));return r.a.createElement(z.a,null,r.a.createElement(ae.a,null,r.a.createElement(re.a,{style:t.subheader},"Past Queries"),e.data.map(function(e){return r.a.createElement("div",{key:e.title},r.a.createElement(ce.a,{primary:"Schema Name",secondary:"Click to Expand",righticonbutton:n}),r.a.createElement(se.a,null))})))},he=a(263),ge=a.n(he),pe=a(264),fe=a.n(pe),Ee=a(141),be=a.n(Ee),ye=a(260),ve=a.n(ye),xe=a(262),ke=a.n(xe),we=a(259),Ce=a.n(we),Oe=a(261),Se=a.n(Oe),je={menus:[{text:"Welcome",icon:r.a.createElement(Ce.a,null),link:"/dashboard"},{text:"DashBoard",icon:r.a.createElement(ve.a,null),link:"/dashboard"},{text:"Visualize Query",icon:r.a.createElement(Se.a,null),link:"/form"},{text:"View Re-rendered Components",icon:r.a.createElement(ke.a,null),link:"/table"}],tablePage:{items:[{id:1,name:"Query 1",Schema:"-",category:"Category 1"},{id:2,name:"Query 2",schema:"-",category:"Category 2"},{id:3,name:"Query 3",schema:"-",category:"Category 3"},{id:4,name:"Query 4",schema:"-",category:"Category 4"},{id:5,name:"Query 5",schema:"-",category:"Category 5"},{id:6,name:"Query 6",schema:"-",category:"Category 6"},{id:7,name:"Query 7",schema:"-",category:"Category 7"},{id:8,name:"Query 8",schema:"-",category:"Category 8"}]},dashBoardPage:{pastQuery:[{id:1,title:"Samsung TV",text:"Samsung 32 1080p 60Hz LED Smart HDTV."},{id:2,title:"Playstation 4",text:"PlayStation 3 500 GB System"},{id:3,title:"Apple iPhone 6",text:"Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G "},{id:4,title:"Apple MacBook",text:"Apple MacBook Pro MD101LL/A 13.3-Inch Laptop"},{id:5,title:"asdfsdffsa",text:"asdfsdfsdfsdfsdfsadf"}],quickAccess:[{pv:2400},{pv:1398},{pv:9800},{pv:3908},{pv:4800},{pv:3490},{pv:4300}],Pies:[{name:"Component One",value:800,color:ge.a[400],icon:"star"},{name:"Component Two",value:300,color:oe.a[600],icon:r.a.createElement(be.a,null)},{name:"Component Three",value:300,color:H.a[700],icon:r.a.createElement(fe.a,null)}]}},Be=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={img:["build","book","star","bug_report"]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{style:M.navigation},"Dashboard"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 "},r.a.createElement(Q,{Icon:this.state.img[0],color:H.a[500],title:"Construct a Query",value:""})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 "},r.a.createElement(Q,{Icon:this.state.img[1],color:H.a[500],title:"Apollo Client Docs",value:""})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 "},r.a.createElement(Q,{Icon:this.state.img[2],color:H.a[500],title:"Star us on Github",value:""})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 "},r.a.createElement(Q,{Icon:this.state.img[3],color:H.a[500],title:"Report Bugs",value:""})),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center",margin:"auto",width:"95%"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15"},r.a.createElement(F,{data:je.dashBoardPage.quickAccess})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15"},r.a.createElement(ee,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 "},r.a.createElement(de,{data:je.dashBoardPage.pastQuery})),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 "},r.a.createElement(ie,{data:je.dashBoardPage.Pies}))))))}}]),t}(r.a.Component),Ne=a(6),We=a(592),De=a(598),Le=a(593),Te=a(597),Ae=a(269),He=a.n(Ae),ze=a(270),Pe=a.n(ze),Ie=a(265),Re=a.n(Ie),Qe=a(74),Ue=a(595),Fe=function(e){var t=e.title,a=e.navigation;return r.a.createElement("div",null,r.a.createElement("span",{style:M.navigation},a),r.a.createElement(z.a,{style:M.paper},r.a.createElement("h3",{style:M.title},t),r.a.createElement(se.a,null),e.children,r.a.createElement("div",{style:M.clear})))},Ge=(a(244),a(528)),Me=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).createTree=a.createTree.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.createTree()}},{key:"componentDidUpdate",value:function(){this.createTree()}},{key:"createTree",value:function(){var e=Ge.select(this.canvas);e.attr("transform","translate(50, 50)").attr("class","canvasTree");var t=Ge.tree().size([600,700]);Ge.json("./sample.json").then(function(a){var n=Ge.hierarchy(a),r=t(n).links(),l=Ge.linkHorizontal().x(function(e){return e.y}).y(function(e){return e.x});e.selectAll("path").data(r).enter().append("path").attr("d",l),e.selectAll("text").data(n.descendants()).enter().append("text").attr("x",function(e){return e.y}).attr("y",function(e){return e.x}).attr("dy","0.32em").attr("text-anchor",function(e){return e.children?"middle":"start"}).attr("text-anchor",function(e){return e.depth,"start"}).attr("font-size",function(e){return 4-e.depth+"em"}).text(function(e){return e.data.name})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("svg",{ref:function(t){return e.canvas=t},width:1200,height:600}))}}]),t}(n.Component),Ve=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={showComponent:!1},a.onButtonClick=a.onButtonClick.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onButtonClick",value:function(){this.setState({showComponent:!0})}},{key:"render",value:function(){var e={toggleDiv:{maxWidth:300,marginTop:40,marginBottom:5},toggleLabel:{color:I.a[400],fontWeight:100},buttons:{marginTop:30,float:"right",backgroundColor:"blue"},saveButton:{marginLeft:5,backgroundColor:"red",color:"white"}};return r.a.createElement(Fe,{title:"Query Tree Visualizer",navigation:"Visualize"},this.state.showComponent?r.a.createElement(Me,null):null,r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement(K.a,{onClick:this.onButtonClick,style:e.saveButton}," Generate "),r.a.createElement(Ue.a,{fullWidth:!0}),r.a.createElement(Ue.a,{fullWidth:!0}),r.a.createElement(Ue.a,{fullWidth:!0}),r.a.createElement(Ue.a,{fullWidth:!0}),r.a.createElement(Ue.a,{fullWidth:!0}),r.a.createElement(se.a,null)))}}]),t}(r.a.Component),qe=a(586),Ke=a(587),Je=a(591),_e=a(590),$e=a(588),Xe=a(589),Ye=a(267),Ze=a.n(Ye),et=a(268),tt=a.n(et),at=function(){var e={fab:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},editButton:{fill:I.a[500]},columns:{id:{width:"10%"},name:{width:"40%"},price:{width:"20%"},category:{width:"20%"},edit:{width:"10%"}}};return r.a.createElement("div",null,r.a.createElement(Fe,{title:"Data Visualizer",navigation:"Re-rendered Components"},r.a.createElement(o.b,{to:"/form"},r.a.createElement(qe.a,{style:e.fab,color:"inherit"},r.a.createElement(Ze.a,null))),r.a.createElement(Ke.a,null,r.a.createElement($e.a,null,r.a.createElement(Xe.a,null,r.a.createElement(_e.a,{style:e.columns.id},"ID"),r.a.createElement(_e.a,{style:e.columns.name},"Name"),r.a.createElement(_e.a,{style:e.columns.price},"Field"),r.a.createElement(_e.a,{style:e.columns.category},"Category"),r.a.createElement(_e.a,{style:e.columns.edit},"Edit"))),r.a.createElement(Je.a,null,je.tablePage.items.map(function(t){return r.a.createElement(Xe.a,{key:t.id},r.a.createElement(_e.a,{style:e.columns.id},t.id),r.a.createElement(_e.a,{style:e.columns.name},t.name),r.a.createElement(_e.a,{style:e.columns.price},t.price),r.a.createElement(_e.a,{style:e.columns.category},t.category),r.a.createElement(_e.a,{style:e.columns.edit},r.a.createElement(o.b,{className:"button",to:"/form"},r.a.createElement(qe.a,{color:"inherit",style:e.editButton},r.a.createElement(tt.a,null)))))})))),r.a.createElement("br",null))},nt={logo:{cursor:"pointer",fontSize:22,color:E.a.textFullWhite,lineHeight:"".concat(Te.a.desktopKeylineIncrement,"px"),fontWeight:E.a.fontWeightLight,backgroundColor:"purple",paddingLeft:40,height:20},menuItem:{color:"white",fontSize:14,textAlign:"center",padding:"10px"},headerText:{marginTop:-5,marginRight:"auto",marginLeft:"55",whiteSpace:"nowrap",height:45,width:55,float:"left",color:"white",fontWeight:"light"},avatar:{div:{display:"block",marginLeft:"auto",marginRight:"auto",width:"90%",padding:"15px 0 20px 0px",height:2},icon:{display:"block",marginTop:27,marginLeft:-30,height:45,width:50,boxShadow:"0px 0px 0px 8px rgba(0,0,0,0.10)",float:"left"},span:{paddingTop:36,display:"inlineBlock",textAlign:"right",fontWeight:300,textShadow:"1px 1px #444"},image:{cursor:"pointer",lineHeight:"".concat(Te.a.desktopKeylineIncrement,"px"),fontWeight:E.a.fontWeightLight,paddingLeft:40,height:27}}},rt=Object(g.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#4527A0"},appBarShift:{width:"calc(100% - ".concat(250,"px)"),marginLeft:250,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:250,flexShrink:0},headerSpace:{backgroundImage:"url("+a(522)+")"},drawerPaper:{backgroundColor:N.a[300],width:250},drawerHeader:Object(T.a)({display:"flex",alignItems:"center",padding:"0 2px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-250},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),menuitem:{textAlign:"center"},marginLeft:0}}});var lt=function(e){var t=rt(),a=Object(We.a)(),n=r.a.useState(!1),l=Object(L.a)(n,2),i=l[0],c=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(Le.a,null),r.a.createElement(p.a,{position:"fixed",className:Object(Ne.a)(t.appBar,Object(D.a)({},t.appBarShift,i))},r.a.createElement(f.a,null,r.a.createElement(b.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){c(!0)},edge:"start",className:Object(Ne.a)(t.menuButton,i&&t.hide)},r.a.createElement(v.a,null)),r.a.createElement(E.a,{variant:"h5",noWrap:!0},"Apollo Aperture"))),r.a.createElement(De.a,{className:t.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.headerSpace,style:nt.headerTop},r.a.createElement("div",{style:nt.avatar.div},r.a.createElement("span",{style:nt.headerText}," Mission Control "),r.a.createElement(te.a,{src:"https://i.imgur.com/ghpRvan.png",size:40,style:nt.avatar.icon})),r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(b.a,{onClick:function(){c(!1)},color:"inherit"},"ltr"===a.direction?r.a.createElement(He.a,null):r.a.createElement(be.a,null))),r.a.createElement(se.a,null)),r.a.createElement("div",{style:nt.menuItem},e.menus.map(function(e,t){return r.a.createElement(ne.a,{button:!0,key:t},r.a.createElement(ue.a,null,e.icon),r.a.createElement(o.b,{to:e.link,style:{textDecoration:"none",color:"white"}},r.a.createElement(ce.a,{primary:e.text})))})),r.a.createElement(se.a,null),r.a.createElement(ae.a,{style:nt.menuItem},["About Us"].map(function(e,t){return r.a.createElement(ne.a,{button:!0,key:e},r.a.createElement(ue.a,null,r.a.createElement(Pe.a,null)),r.a.createElement("a",{href:"https://github.com/team-snape/apollo-aperture",target:"_blank",style:{textDecoration:"none",color:"white"}},r.a.createElement(ce.a,{primary:e})))})),r.a.createElement("br",null),r.a.createElement("img",{src:Re.a,alt:"",style:nt.image})),r.a.createElement("main",{className:Object(Ne.a)(t.content,Object(D.a)({},t.contentShift,i))},r.a.createElement(Qe.c,null,r.a.createElement(Qe.a,{exact:!0,path:"/form",component:Ve}),r.a.createElement(Qe.a,{exact:!0,path:"/table",component:at}),r.a.createElement(Be,null)),r.a.createElement("br",null),r.a.createElement(se.a,null)))};var ot=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={open:!0,navDrawerOpen:!1,loading:!0,selectedFile:null},a.onChangeHandler=a.onChangeHandler.bind(Object(u.a)(a)),a.onClickHandler=a.onClickHandler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise(function(e){return setTimeout(function(){return e()},1500)}).then(function(){return e.setState({loading:!1})})}},{key:"componentWillReceiveProps",value:function(e){this.props.width,e.width}},{key:"onChangeHandler",value:function(e){console.log(e.target.files[0]),this.setState({selectedFile:e.target.files[0],loaded:0})}},{key:"onClickHandler",value:function(){var e=new FormData;e.append("file",this.state.selectedFile),$.a.post("http://localhost:8000/upload",e,{}).then(function(e){console.log(e.statusText)})}},{key:"handleChangeRequestNavDrawer",value:function(){this.setState({navDrawerOpen:!this.state.navDrawerOpen})}},{key:"render",value:function(){if(this.state.loading)return null;var e=this.state.navDrawerOpen,t={header:{paddingLeft:e?236:0},button:{marginLeft:e?236:0,backgroundColor:"blue",color:"black",fontWeight:"bold"},footer:{display:"block",margin:"0 auto",paddingLeft:e?236:0},container:{margin:"80px 20px 20px 15px"},imageTitle:{textAlign:"center",color:"blue"}};return r.a.createElement(h.a,{theme:W},r.a.createElement("div",null,r.a.createElement(S,{styles:t.header,handleChangeRequestNavDrawer:this.handleChangeRequestNavDrawer.bind(this)}),r.a.createElement(lt,{navDrawerOpen:e,menus:je.menus,username:"Apollo Admin"}),r.a.createElement("div",{style:t.container},this.props.children)))}}]),t}(r.a.Component),it=a(102),ct=a(281),st=a(278),mt=a(276),ut=r.a.createElement(Qe.c,null,r.a.createElement(Qe.a,{exact:!0,path:"/",component:ot},r.a.createElement(Qe.a,{exact:!0,path:"/",component:Be}),r.a.createElement(Qe.a,{exact:!0,path:"/dashboard",component:Be}),r.a.createElement(Qe.a,{exact:!0,path:"/form",component:Ve}),r.a.createElement(Qe.a,{exact:!0,path:"/table",component:at})));a(525),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.d(t,"typeDefs",function(){return ht}),a.d(t,"client",function(){return gt});var dt=new st.a,ht="\n  type User {\n    id: Int!\n    text: String!\n    name: String\n    userName: String\n    department: String\n    access: String\n    completed: Boolean!\n  }\n\n  type Mutation {\n    addUser(\n      text: String!,\n      name: String,\n      userName: String,\n      department: String,\n      access: String,\n      ): User\n    updateUser(\n      id:ID!\n      text: String!,\n      name: String,\n      userName: String,\n      department: String,\n      access: String,\n      ): User\n    toggleUser(id: Int!): User\n    deleteUser(id:Int!):User\n  }\n\n  type Query {\n    visibilityFilter: String\n    Users: [User]\n  }\n",gt=new it.a({cache:dt,link:Object(ct.a)({cache:dt,typeDefs:ht})});Object(l.render)(r.a.createElement(mt.a,{client:gt},r.a.createElement(o.a,{routes:ut},r.a.createElement(ot,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});t.default=gt}},[[314,1,2]]]);
//# sourceMappingURL=main.36b34a43.chunk.js.map