webpackJsonp([1,2],{"/j3P":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return j(O(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("nug2"),c=a(s),u=n("pp5j"),f=a(u),m=n("U7vG"),d=a(m),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n("QJsr"),w=a(v),b=n("9WgG"),k=a(b),y=n("cqQm"),_=a(y);n("rpem");var E={WorkContent:{displayName:"WorkContent"}},j=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-content.jsx",components:E,locals:[e],imports:[d.default]}),O=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-content.jsx",components:E,locals:[],imports:[d.default,c.default]}),N=l("WorkContent")(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"renderWorkImage",value:function(){var e=this.props.work.medias[0].images[0].cover_image.url,t=this.props.work.medias[0].images[0].cover_image.title;return d.default.createElement("div",{className:"cover-image"},d.default.createElement("div",{className:"image-container"},d.default.createElement(w.default,{imageUrl:e,alt:t})))}},{key:"renderContentImages",value:function(){var e=this.props.work.medias[0].images[0].content_images;return e.map(function(e,t){return d.default.createElement("div",{className:"cover-image"},d.default.createElement("div",{className:"image-container"},d.default.createElement(w.default,{imageUrl:e.url,alt:e.title,key:t})))})}},{key:"renderContentVideo",value:function(){var e=this.props.work.medias[0].video;return e?d.default.createElement("div",{className:"cover-video"},d.default.createElement("div",{className:"video-container"},d.default.createElement(k.default,{videoUrl:e.url,title:e.title}))):null}},{key:"renderWorkInfo",value:function(){var e=this.props.work;return d.default.createElement(_.default,{workInfo:e})}},{key:"render",value:function(){return d.default.createElement("div",{className:"work-content"},this.renderWorkImage(),this.renderWorkInfo(),this.renderContentImages(),this.renderContentVideo())}}]),t}(d.default.Component));t.default=N}).call(t,n("3IRH")(e))},0:function(e,t,n){n("+prg"),e.exports=n("lVK7")},"7WcC":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return b(k(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("nug2"),c=a(s),u=n("pp5j"),f=a(u),m=n("U7vG"),d=a(m),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n("CIox");n("quNL"),n("j3kU");var w={Header:{displayName:"Header"}},b=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/header/index.jsx",components:w,locals:[e],imports:[d.default]}),k=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/header/index.jsx",components:w,locals:[],imports:[d.default,c.default]}),y=l("Header")(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"renderNavItem",value:function(){var e=void 0;switch(window.location.pathname){case"/about":e=d.default.createElement(v.Link,{to:"/",className:"nav-item"},"Work");break;case"/":e=d.default.createElement(v.Link,{to:"/about",className:"nav-item"},"About");break;default:e=d.default.createElement(v.Link,{to:"/",className:"nav-item"},"Back")}return e}},{key:"render",value:function(){return d.default.createElement("header",{className:"header"},d.default.createElement(v.Link,{to:"/",className:"logo"},"Natalia Santos ",d.default.createElement("span",{className:"logo-subtitle"},"Art Director")),d.default.createElement("nav",{className:"nav"},this.renderNavItem()))}}]),t}(d.default.Component));t.default=y}).call(t,n("3IRH")(e))},"9WgG":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return w(b(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("nug2"),c=a(s),u=n("pp5j"),f=a(u),m=n("U7vG"),d=a(m),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("mU5p");var v={WorkVideo:{displayName:"WorkVideo"}},w=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-video.jsx",components:v,locals:[e],imports:[d.default]}),b=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-video.jsx",components:v,locals:[],imports:[d.default,c.default]}),k=l("WorkVideo")(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"render",value:function(){return d.default.createElement("video",{width:"100%",height:"auto",controls:!0},d.default.createElement("source",{src:this.props.videoUrl,type:"video/mp4"}),d.default.createElement("source",{src:this.props.videoUrl,type:"video/ogg"}))}}]),t}(d.default.Component));t.default=k}).call(t,n("3IRH")(e))},FYkg:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(t){return p(h(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("nug2"),i=a(o),l=n("pp5j"),s=a(l),c=n("U7vG"),u=a(c),f=n("xPnc"),m=a(f);n("CIox");n("quNL"),n("TzzK");var d={_component:{}},p=(0,m.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/footer/index.jsx",components:d,locals:[e],imports:[u.default]}),h=(0,s.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/footer/index.jsx",components:d,locals:[],imports:[u.default,i.default]}),g=r("_component")(u.default.createClass({displayName:"Footer",render:function(){return u.default.createElement("footer",{className:"footer wrapper"},u.default.createElement("ul",{className:"social-links"},u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.facebook.com/nnataliasantos"},"Facebook")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.instagram.com/nnatsnts/"},"Instagram")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.behance.net/nnatalia"},"Behance")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.linkedin.com/in/natalia-santos-a8b83834/en"},"Linkedin"))),u.default.createElement("p",{className:"email"},"nnatalia.santos@outlook.com"))}}));t.default=g}).call(t,n("3IRH")(e))},H1x6:function(e,t){},"LMm/":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return j(O(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("nug2"),c=a(s),u=n("pp5j"),f=a(u),m=n("U7vG"),d=a(m),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n("FYkg"),w=a(v),b=n("UMnV"),k=a(b),y=n("/j3P"),_=a(y),E={PageWork:{displayName:"PageWork"}},j=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-work.jsx",components:E,locals:[e],imports:[d.default]}),O=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-work.jsx",components:E,locals:[],imports:[d.default,c.default]}),N=l("PageWork")(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),g(t,[{key:"filterWorkByID",value:function(e){var t=this.props.params.workId;return e.work_id===t?e:null}},{key:"renderWorkContent",value:function(){var e=k.default.filter(this.filterWorkByID.bind(this));return d.default.createElement(_.default,{work:e[0]})}},{key:"render",value:function(){return d.default.createElement("section",{id:"work"},this.renderWorkContent(),d.default.createElement(w.default,null))}}]),t}(d.default.Component));t.default=N}).call(t,n("3IRH")(e))},NAfh:function(e,t){},QJsr:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return w(b(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("nug2"),c=a(s),u=n("pp5j"),f=a(u),m=n("U7vG"),d=a(m),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("mU5p");var v={WorkImage:{displayName:"WorkImage"}},w=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-image.jsx",components:v,locals:[e],imports:[d.default]}),b=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-image.jsx",components:v,locals:[],imports:[d.default,c.default]}),k=l("WorkImage")(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"render",value:function(){return d.default.createElement("img",{className:"image-container",src:this.props.imageUrl,alt:this.props.alt})}}]),t}(d.default.Component));t.default=k}).call(t,n("3IRH")(e))},R0Ds:function(e,t){},TzzK:function(e,t){},UMnV:function(e,t){e.exports=[{id:"0",work_id:"tnt-energy",work_title:"TNT Energy",agency:"Y&R",menu_order:"0",role:["Art Direction","UX"],description:"",link:"",freefield:["",""],medias:[{images:[{cover_image:{id:"1",title:"Cover TNT",filename:"",description:"",url:"../img/tnt/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"2",title:"",filename:"",description:"",url:"../img/tnt/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"3",title:"tnt",filename:"",description:"",url:"../img/tnt/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"4",title:"tnt",filename:"",description:"",url:"../img/tnt/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"4",title:"tnt",filename:"",description:"",url:"../img/tnt/content_4.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"1",work_id:"itaipava",work_title:"Itaipava",agency:"Y&R",menu_order:"0",role:["Art Direction","UX"],description:"description",link:"",freefield:["",""],medias:[{video:{id:"",title:"video Itaipava",filename:".mp4",url:"../img/itaipava/content_2.mp4",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"4",title:"itaipava",filename:"",description:"",url:"../img/itaipava/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"5",title:"",filename:"",description:"",url:"../img/itaipava/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"2",work_id:"o-boticario",work_title:"O Boticario",agency:"W3 House",menu_order:"0",role:["Art Direction","UX"],description:"",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/malbec/content_2.mp4",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"7",title:"",filename:"",description:"",url:"../img/malbec/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"8",title:"",filename:"",description:"",url:"../img/malbec/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"3",work_id:"lg",work_title:"LG",agency:"W3 House",menu_order:"0",role:["Art Direction","UX"],description:"",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/lg/content_4.mp4",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"10",title:"",filename:"",description:"",url:"../img/lg/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"11",title:"",filename:"",description:"",url:"../img/lg/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"12",title:"",filename:"",description:"",url:"../img/lg/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"12",title:"",filename:"",description:"",url:"../img/lg/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"4",work_id:"airwick",work_title:"Air Wick",agency:"W3 House",menu_order:"0",role:["Art Direction"],description:"",link:"",freefield:["",""],medias:[{images:[{cover_image:{id:"13",title:"",filename:"",description:"",url:"../img/airwick/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_4.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"5",work_id:"crystal",work_title:"Crystal",agency:"Y&R",menu_order:"0",role:["Art Direction"],description:"description",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/crystal/content_3.mov",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"16",title:"",filename:"",description:"",url:"../img/crystal/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"17",title:"",filename:"",description:"",url:"../img/crystal/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"18",title:"",filename:"",description:"",url:"../img/crystal/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]}]},"a+hm":function(e,t){},a9Hw:function(e,t){},aN1e:function(e,t){},cqQm:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return w(b(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("nug2"),c=a(s),u=n("pp5j"),f=a(u),m=n("U7vG"),d=a(m),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("a9Hw");var v={WorkInfo:{displayName:"WorkInfo"}},w=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-info.jsx",components:v,locals:[e],imports:[d.default]}),b=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-info.jsx",components:v,locals:[],imports:[d.default,c.default]}),k=l("WorkInfo")(function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"renderRoleInfo",value:function(){var e=this.props.workInfo,t=e.role.map(function(e){return e});return t.length>1?t.join(", "):t}},{key:"renderDescription",value:function(){return this.props.workInfo.description?d.default.createElement("div",{className:"work-description-text"},d.default.createElement("p",null,this.props.workInfo.description)):null}},{key:"render",value:function(){var e=this.props.workInfo;return d.default.createElement("div",{className:"work-description wrapper"},d.default.createElement("ul",{className:"work-description-info"},d.default.createElement("li",{className:"work-description-info-item"},"Agency: ",e.agency),d.default.createElement("li",{className:"work-description-info-item"},"Client: ",e.work_title),d.default.createElement("li",{className:"work-description-info-item"},"Role: ",this.renderRoleInfo())),this.renderDescription())}}]),t}(d.default.Component));t.default=k}).call(t,n("3IRH")(e))},d6Em:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return function(t){return O(N(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("nug2"),c=a(s),u=n("pp5j"),f=a(u),m=n("U7vG"),d=a(m),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=n("S8Mv"),w=a(v),b=n("CIox"),k=n("UMnV"),y=a(k),_=n("QJsr"),E=a(_);n("yUV6"),n("NAfh"),n("aN1e"),n("rpem");var j={Home:{displayName:"Home"}},O=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-home.jsx",components:j,locals:[e],imports:[d.default]}),N=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-home.jsx",components:j,locals:[],imports:[d.default,c.default]}),P=l("Home")(function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isHovering:!1,currentOver:""},e}return i(t,e),g(t,[{key:"handleMouseOver",value:function(e){var t=e.length>0;this.setState({isHovering:t,currentOver:e})}},{key:"filterWorkById",value:function(e){var t=this.state.currentOver;return e.work_id===t?e:null}},{key:"renderCoverImage",value:function(){if(this.state.isHovering){var e=y.default.filter(this.filterWorkById.bind(this)),t=e[0].medias[0].images[0].cover_image.url;return d.default.createElement(E.default,{imageUrl:t,key:e[0].id})}return null}},{key:"render",value:function(){var e=this.state.isHovering?"is-active":"";return d.default.createElement("section",{id:"home"},d.default.createElement("div",{className:"cover-image "+e},d.default.createElement("div",{className:"image-container"},d.default.createElement(w.default,{transitionName:"fadein",transitionEnterTimeout:1e3,transitionLeaveTimeout:1e3},this.renderCoverImage()))),d.default.createElement("div",{className:"work-list-container"},d.default.createElement("ul",{className:"work-list"},d.default.createElement("li",{className:"work-list-item",ref:"tnt-energy",onMouseOver:this.handleMouseOver.bind(this,"tnt-energy"),onMouseOut:this.handleMouseOver.bind(this)},d.default.createElement(b.Link,{to:"/works/tnt-energy",className:"work-list-item-link"},"TNT Energy")),d.default.createElement("li",{className:"work-list-item",ref:"itaipava",onMouseOver:this.handleMouseOver.bind(this,"itaipava"),onMouseOut:this.handleMouseOver.bind(this)},d.default.createElement(b.Link,{to:"/works/itaipava",className:"work-list-item-link"},"Itaipava")),d.default.createElement("li",{className:"work-list-item",ref:"o-boticario",onMouseOver:this.handleMouseOver.bind(this,"o-boticario"),onMouseOut:this.handleMouseOver.bind(this)},d.default.createElement(b.Link,{to:"/works/o-boticario",className:"work-list-item-link"},"O Boticario")),d.default.createElement("li",{className:"work-list-item",ref:"lg",onMouseOver:this.handleMouseOver.bind(this,"lg")},d.default.createElement(b.Link,{to:"/works/lg",className:"work-list-item-link"},"LG")),d.default.createElement("li",{className:"work-list-item",ref:"airwick",onMouseOver:this.handleMouseOver.bind(this,"airwick"),onMouseOut:this.handleMouseOver.bind(this)},d.default.createElement(b.Link,{to:"/works/airwick",className:"work-list-item-link"},"Air Wick")),d.default.createElement("li",{className:"work-list-item",ref:"crystal",onMouseOver:this.handleMouseOver.bind(this,"crystal"),onMouseOut:this.handleMouseOver.bind(this)},d.default.createElement(b.Link,{to:"/works/crystal",className:"work-list-item-link"},"Crystal")))))}}]),t}(d.default.Component));t.default=P}).call(t,n("3IRH")(e))},j3kU:function(e,t){},lVK7:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n("U7vG"),o=a(r),i=n("O27J"),l=n("CIox"),s=n("sMfP"),c=a(s),u=n("d6Em"),f=a(u),m=n("LMm/"),d=a(m),p=n("s+VA"),h=a(p),g=o.default.createElement(l.Router,{history:l.browserHistory},o.default.createElement(l.Route,{path:"/",component:c.default},o.default.createElement(l.IndexRoute,{component:f.default}),o.default.createElement(l.Route,{path:"/about",component:h.default}),o.default.createElement(l.Route,{path:"/works/:workId",component:d.default})));(0,i.render)(g,document.querySelector("#app"))},mU5p:function(e,t){},mwrz:function(e,t){},quNL:function(e,t){},rpem:function(e,t){},"s+VA":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(t){return p(h(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("nug2"),i=a(o),l=n("pp5j"),s=a(l),c=n("U7vG"),u=a(c),f=n("xPnc"),m=a(f);n("R0Ds"),n("mwrz"),n("H1x6");var d={_component:{}},p=(0,m.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-about.jsx",components:d,locals:[e],imports:[u.default]}),h=(0,s.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-about.jsx",components:d,locals:[],imports:[u.default,i.default]}),g=r("_component")(u.default.createClass({displayName:"About",render:function(){return u.default.createElement("section",{id:"about"},u.default.createElement("h2",{className:"text-about"},"Lorem ipsum dorlor sit amet, consecterdipisicin g elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. enim an minin venian, quis nostrud excitation."),u.default.createElement("div",{className:"contact-info-container"},u.default.createElement("img",{src:"/img/giphy.gif",alt:"git",className:"contact-gif"}),u.default.createElement("div",{className:"contact-info"},u.default.createElement("h3",{className:"contact-info-title"},"Find Me"),u.default.createElement("p",null,"nnatalia.santos@outlook.com"),u.default.createElement("ul",{className:"social-links"},u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.facebook.com/nnataliasantos"},"Facebook")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.instagram.com/nnatsnts/"},"Instagram")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.behance.net/nnatalia"},"Behance")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.linkedin.com/in/natalia-santos-a8b83834/en"},"Linkedin"))))))}}));t.default=g}).call(t,n("3IRH")(e))},sMfP:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(t){return g(v(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("nug2"),i=a(o),l=n("pp5j"),s=a(l),c=n("U7vG"),u=a(c),f=n("xPnc"),m=a(f);n("a+hm");var d=(n("CIox"),n("7WcC")),p=a(d),h={_component:{}},g=(0,m.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/App.jsx",components:h,locals:[e],imports:[u.default]}),v=(0,s.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/App.jsx",components:h,locals:[],imports:[u.default,i.default]}),w=r("_component")(u.default.createClass({displayName:"App",render:function(){return u.default.createElement("div",{className:"container"},u.default.createElement(p.default,null),u.default.cloneElement(this.props.children,this.props))}}));t.default=w}).call(t,n("3IRH")(e))},yUV6:function(e,t){}},[0]);
//# sourceMappingURL=app.1e17cbc0.js.map