(this.webpackJsonpWebShop=this.webpackJsonpWebShop||[]).push([[2],{119:function(e,t,a){},132:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(1),o=a.n(r),c=a(46),l=a(95),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u=function(e){var t=e.to,a=e.exact,i=e.strict,r=e.location,o=e.activeClassName,u=e.className,m=e.activeStyle,f=e.style,d=e.isActive,h=e["aria-current"],y=function(e,t){var a={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),b="object"===("undefined"===typeof t?"undefined":p(t))?t.pathname:t,v=b&&b.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return n.a.createElement(c.a,{path:v,exact:a,strict:i,location:r,children:function(e){var a=e.location,i=e.match,r=!!(d?d(i,a):i);return n.a.createElement(l.a,s({to:t,className:r?[u,o].filter((function(e){return e})).join(" "):u,style:r?s({},f,m):f,"aria-current":r&&h||null},y))}})};u.propTypes={to:l.a.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},u.defaultProps={activeClassName:"active","aria-current":"page"},t.a=u},54:function(e,t,a){"use strict";t.a={BLANK_LINK:"#!"}},87:function(e,t,a){"use strict";t.a={items:[{id:"navigation",title:"Home",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"Dashboard",type:"item",url:"/dashboard/default",icon:"feather icon-home"}]},{id:"ui-element",title:"DOMAIN MANAGEMENT",type:"group",icon:"icon-ui",children:[{id:"basic",title:"Domains",type:"collapse",icon:"feather icon-box",children:[{id:"tabs-pills",title:"Active",type:"item",icon:"feather icon-box red",url:"/basic/active"},{id:"pending",title:"Pending",type:"item",icon:"feather icon-box",url:"/basic/pending"}]}]},{id:"ui-forms",title:"CLIENTS",type:"group",icon:"icon-group",children:[{id:"form-basic",title:"Form Elements",type:"item",url:"/forms/form-basic",icon:"feather icon-file-text"},{id:"bootstrap",title:"Table",type:"item",icon:"feather icon-server",url:"/tables/bootstrap"}]},{id:"chart-maps",title:"Chart & Maps",type:"group",icon:"icon-charts",children:[{id:"charts",title:"Charts",type:"item",icon:"feather icon-pie-chart",url:"/charts/nvd3"},{id:"maps",title:"Map",type:"item",icon:"feather icon-map",url:"/maps/google-map"}]},{id:"pages",title:"Pages",type:"group",icon:"icon-pages",children:[{id:"auth",title:"Authentication",type:"collapse",icon:"feather icon-lock",badge:{title:"New",type:"label-danger"},children:[{id:"signup-1",title:"Sign up",type:"item",url:"/auth/signup-1",target:!0,breadcrumbs:!1},{id:"signin-1",title:"Sign in",type:"item",url:"/auth/signin-1",target:!0,breadcrumbs:!1}]},{id:"sample-page",title:"Sample Page",type:"item",url:"/sample-page",classes:"nav-item",icon:"feather icon-sidebar"},{id:"docs",title:"Documentation",type:"item",url:"/docs",classes:"nav-item",icon:"feather icon-help-circle"},{id:"menu-level",title:"Menu Levels",type:"collapse",icon:"feather icon-menu",children:[{id:"menu-level-1.1",title:"Menu Level 1.1",type:"item",url:"#!"},{id:"menu-level-1.2",title:"Menu Level 2.2",type:"collapse",children:[{id:"menu-level-2.1",title:"Menu Level 2.1",type:"item",url:"#"},{id:"menu-level-2.2",title:"Menu Level 2.2",type:"collapse",children:[{id:"menu-level-3.1",title:"Menu Level 3.1",type:"item",url:"#"},{id:"menu-level-3.2",title:"Menu Level 3.2",type:"item",url:"#"}]}]}]},{id:"disabled-menu",title:"Disabled Menu",type:"item",url:"#",classes:"nav-item disabled",icon:"feather icon-power"},{id:"buy-now",title:"GoPro",type:"item",icon:"feather icon-user",classes:"nav-item",url:"https://",target:!0,external:!0,badge:{title:"v1.0",type:"label-primary"}}]}]}},91:function(e,t,a){"use strict";var i=a(8),n=a(9),r=a(11),o=a(10),c=a(0),l=a.n(c),s=a(95),p=a(13),u=a(87),m=a(54),f=a(22),d=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={main:[],item:[]},e.componentWillReceiveProps=function(){u.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t),!1}))},e.getCollapse=function(t){t.children&&t.children.filter((function(a){return a.type&&"collapse"===a.type?e.getCollapse(a):a.type&&"item"===a.type&&document.location.pathname===p.a.basename+a.url&&e.setState({item:a,main:t}),!1}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t,a),!1}))}},{key:"render",value:function(){var e,t,a="",i="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:m.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(i=this.state.item.title,t=l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:m.a.BLANK_LINK},i)),!1!==this.state.item.breadcrumbs&&(a=l.a.createElement("div",{className:"page-header"},l.a.createElement("div",{className:"page-block"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"page-header-title"},l.a.createElement("h5",{className:"m-b-10"},i)),l.a.createElement("ul",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"feather icon-home"}))),e,t))))))),document.title=i+" | WebShop",l.a.createElement(f.a,null,a)}}]),a}(c.Component);t.a=d},95:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(1),o=a.n(r),c=a(5),l=a.n(c),s=a(25),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e};function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,i;u(this,t);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=i=m(this,e.call.apply(e,[this].concat(r))),i.handleClick=function(e){if(i.props.onClick&&i.props.onClick(e),!e.defaultPrevented&&0===e.button&&!i.props.target&&!f(e)){e.preventDefault();var t=i.context.router.history,a=i.props,n=a.replace,r=a.to;n?t.replace(r):t.push(r)}},m(i,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,i=function(e,t){var a={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(s.b)(t,null,null,r.location):t,c=r.createHref(o);return n.a.createElement("a",p({},i,{onClick:this.handleClick,href:c,ref:a}))},t}(n.a.Component);d.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=d}}]);
//# sourceMappingURL=2.c51a5243.chunk.js.map