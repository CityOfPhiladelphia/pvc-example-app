!function(e){function t(t){for(var r,o,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)o=i[u],a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);p.length;)p.shift()();return _.push.apply(_,l||[]),n()}function n(){for(var e,t=0;t<_.length;t++){for(var n=_[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(_.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},_=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;_.push([111,1]),n()}({103:function(e,t,n){"use strict";var r=n(14),a=n(59),_=n(42),o=n(104);r.a.use(a.a),t.a=function(e){var t={state:{candidates:[],addressEntered:null},mutations:{setCandidates:function(e,t){e.candidates=t},setAddressEntered:function(e,t){e.addressEntered=t}}},n=Object(_.a)(t,o.a);return new a.a.Store({state:n.state,getters:n.getters,mutations:n.mutations})}},105:function(e,t,n){"use strict";t.a=function(e,t){e.mixin({created:function(){this.$config=t}})}},110:function(e,t,n){"use strict";var r=n(41),a=n.n(r),_=n(45),o=n(13),i=n(44),s=n(46),l=n(12),c=n(7),u={components:{Callout:_.a,PopoverLink:o.a,Popover:i.a,VerticalTable:s.a,HorizontalTable:l.a,ExternalLink:c.a},data:function(){return{externalLinkOptions:{data:"atlas.phila.gov",href:"https://atlas.phila.gov"},callout_01_Slots:{text:"text callout text"},popoverLink_01_Slots:{value:"popover-link 1",shouldShowValue:!0,popoverPreText:"this is the popoverPreText for a popover with shouldShowValue: ",popoverPostText:" - this is the popoverPostText"},popoverLink_02_Slots:{value:"popover-link 2",shouldShowValue:!1,popoverPreText:"this is the popoverPreText for popover-link 2 (shouldShowValue is off) - ",popoverPostText:" - this is the popoverPostText"},verticalTable_01_Slots:{fields:[{label:"field1",value:"field1 value"},{label:"field2",value:"field2 value"}]},verticalTable_01_Options:{id:"verticalTableId",externalLink:{action:function(){return"external link - "},name:"Atlas",href:"https://atlas.phila.gov"}},horizontalTable_01_Options:{id:"testHorizTable_01",limit:5,filters:[{type:"time",getValue:function(e){return e.mostrecentissuedate},label:"From the last",values:[{label:"30 days",value:"30",unit:"days",direction:"subtract"},{label:"90 days",value:"90",unit:"days",direction:"subtract"},{label:"year",value:"1",unit:"years",direction:"subtract"}]}],fields:[{label:"Most Recent Issue Date",value:function(e,t){return t.mostrecentissuedate},transforms:["date"]},{label:"License Number",value:function(e,t){return t.licensenum}},{label:"License Type",value:function(e,t){return t.licensetype}},{label:"Business Name",value:function(e,t){return t.business_name}}],externalLink:{action:function(e){return"See "+e+" older permits at L&I Property History"},name:"L&I Property History",href:function(e){return"http://li.phila.gov/"}}},horizontalTable_01_Slots:{title:"1234 Market St. Business Licenses",items:[]}}},mounted:function(){var e=this;a.a.get("https://phl.carto.com/api/v2/sql?q=select+*+from+li_business_licenses+where+street_address+%3D+%271234+MARKET+ST%27").then(function(t){e.$data.horizontalTable_01_Slots.items=t.data.rows}).catch(function(e){console.error("Error loading base config:",e)})},computed:{popover:function(){return this.$store.state.popover}}},p=(n(270),n(1)),f=Object(p.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-root"}},[e._m(0),e._v(" "),n("div",{attrs:{id:"components-root"}},[n("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"info-circle"}}),e._v(" "),n("div",{staticClass:"margin-sides-20"},[e._v("\n      check out "),n("external-link",{staticClass:"ib",attrs:{options:e.externalLinkOptions}})],1),e._v(" "),n("div",{staticClass:"margin-sides-20"},[e._v("\n      check out\n      "),n("external-link",{staticClass:"ib",attrs:{options:{data:"openmaps.phila.gov",href:"https://openmaps.phila.gov"}}})],1),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"margin-sides-20 component-label"},[e._v("callout:")]),e._v(" "),n("callout",{staticClass:"margin-20",attrs:{slots:e.callout_01_Slots}}),e._v(" "),n("div",{staticClass:"margin-sides-20 component-label"},[e._v("popover-links:")]),e._v(" "),n("popover-link",{staticClass:"margin-20",attrs:{slots:e.popoverLink_01_Slots}}),e._v(" "),n("popover-link",{staticClass:"margin-20",attrs:{slots:e.popoverLink_02_Slots}}),e._v(" "),n("div",{staticClass:"margin-sides-20 component-label"},[e._v("vertical-tables:")]),e._v(" "),n("vertical-table",{staticClass:"margin-20 margin-bottom-60 medium-8",attrs:{slots:e.verticalTable_01_Slots,options:e.verticalTable_01_Options}}),e._v(" "),n("vertical-table",{staticClass:"margin-20 margin-bottom-60 medium-8",attrs:{slots:{fields:[{label:"field1",value:"field1 value"},{label:"field2",value:"field2 value"}]},options:{id:"verticalTableId",externalLink:{action:function(){return"external link - "},name:"Atlas",href:"https://atlas.phila.gov"}}}}),e._v(" "),n("div",{staticClass:"margin-sides-20 component-label"},[e._v("horizontal-table:")]),e._v(" "),n("horizontal-table",{staticClass:"margin-20 medium-10",attrs:{slots:e.horizontalTable_01_Slots,options:e.horizontalTable_01_Options}})],1),e._v(" "),e.popover&&e.popover.length>0?n("popover",{attrs:{html:e.popover}}):e._e()],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"site-header app group"},[t("div",{staticClass:"row expanded"},[t("div",{staticClass:"columns"},[t("a",{staticClass:"logo",attrs:{href:"//beta.phila.gov"}},[t("img",{attrs:{src:"https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png",alt:"City of Philadelphia"}})]),this._v(" "),t("div",{staticClass:"app-divide"}),this._v(" "),t("div",{staticClass:"page-title-container"},[t("a",{attrs:{href:"#/"}},[t("h1",{staticClass:"page-title"},[this._v("PVC Example App")])])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"margin-20"},[n("legend",{staticClass:"h4"},[e._v("Favorite Philly cheesesteaks")]),e._v(" "),n("input",{attrs:{id:"pat",type:"checkbox",name:"cheesesteak",value:"pat"}}),e._v(" "),n("label",{attrs:{for:"pat"}},[e._v("Pat's King of Steaks")]),n("br"),e._v(" "),n("input",{attrs:{id:"geno",type:"checkbox",name:"cheesesteak",value:"geno"}}),e._v(" "),n("label",{attrs:{for:"geno"}},[e._v("Geno's Steaks")]),n("br"),e._v(" "),n("input",{attrs:{id:"tony-luke",type:"checkbox",name:"cheesesteak",value:"tony-luke"}}),e._v(" "),n("label",{attrs:{for:"tony-luke"}},[e._v("Tony Luke's")]),n("br"),e._v(" "),n("input",{attrs:{id:"jim",type:"checkbox",name:"cheesesteak",value:"jim"}}),e._v(" "),n("label",{attrs:{for:"jim"}},[e._v("Jim's Steaks")])])}],!1,null,"c5fb1c06",null);f.options.__file="App.vue";t.a=f.exports},111:function(e,t,n){n(112),e.exports=n(113)},112:function(e,t,n){e.exports=n.p+"index.html"},113:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(103),_util_config_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(105),_components_App_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(110),_util_merge_deep__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(42),_config_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(61),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(107),_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8__),_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(108),_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9__),_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(109),_node_modules_phila_standards_dist_css_phila_app_min_css__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(272),_node_modules_phila_standards_dist_css_phila_app_min_css__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_node_modules_phila_standards_dist_css_phila_app_min_css__WEBPACK_IMPORTED_MODULE_11__),_styles_css__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(274),_styles_css__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_12__);_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__.c.add(_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8__.faInfoCircle,_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9__.faExternalLink);var date=new Date;console.log("date:",date);var clientConfig=_config_js__WEBPACK_IMPORTED_MODULE_6__.a,baseConfigUrl=_config_js__WEBPACK_IMPORTED_MODULE_6__.a.baseConfig;function initVue(e){var t=Object(_store__WEBPACK_IMPORTED_MODULE_2__.a)(e);vue__WEBPACK_IMPORTED_MODULE_0__.a.use(_util_config_mixin__WEBPACK_IMPORTED_MODULE_3__.a,e),vue__WEBPACK_IMPORTED_MODULE_0__.a.component("font-awesome-icon",_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__.a);new vue__WEBPACK_IMPORTED_MODULE_0__.a({el:"#vue-app",render:function(e){return e(_components_App_vue__WEBPACK_IMPORTED_MODULE_4__.a)},store:t})}baseConfigUrl?axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(baseConfigUrl).then(function(response){var data=response.data,baseConfigFn=eval(data),gatekeeperKey=clientConfig.gatekeeperKey,baseConfig=baseConfigFn({gatekeeperKey:gatekeeperKey}),config=Object(_util_merge_deep__WEBPACK_IMPORTED_MODULE_5__.a)(baseConfig,clientConfig);initVue(config)}).catch(function(e){console.error("Error loading base config:",e)}):initVue(clientConfig)},270:function(e,t,n){"use strict";var r=n(40);n.n(r).a},271:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n#app-root[data-v-c5fb1c06] {\r\n  height: 100%\n}\n#components-root[data-v-c5fb1c06] {\r\n  padding: 20px;\r\n  height: 90%;\r\n  overflow-y: auto;\n}\n.component-label[data-v-c5fb1c06] {\r\n  font-size: 20px;\n}\n.margin-sides-20[data-v-c5fb1c06] {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\n}\n.margin-20[data-v-c5fb1c06] {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  margin-bottom: 20px;\n}\n.margin-bottom-60[data-v-c5fb1c06] {\r\n  margin-bottom: 60px !important;\n}\n.ib[data-v-c5fb1c06] {\r\n  display: inline-block;\n}\r\n\r\n\r\n",""])},274:function(e,t,n){var r=n(275);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,a);r.locals&&(e.exports=r.locals)},275:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".greeting > h2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.greeting > .callout {\r\n  border-color: #58c04d;\r\n  background: #fff;\r\n  /*margin: 0 0 1rem 0;*/\r\n  padding: 1rem;\r\n}\r\n\r\n.greeting > .callout > ul {\r\n  margin: 0 0 0 1.42857rem;\r\n  padding: 0 0 0 1.42857rem;\r\n}\r\n\r\n#application .site-header, #application .app-footer {\r\n\tbackground: #2176d2;\r\n}\r\n\r\n#application .site-header .page-title-container h1 {\r\n\tfont-size: 2.14286rem;\r\n}\r\n\r\n/*this fixes an issue with the topic panel scrolling over the footer padding*/\r\n#application .app-footer {\r\n\tposition: relative;\r\n}\r\n\r\n/*small*/\r\n@media screen and (max-width: 39.9375em) {\r\n\t.logo {\r\n\t\tfloat: left;\r\n\t}\r\n\r\n\t.page-title-container {\r\n\t\tfloat: right;\r\n\t}\r\n}\r\n",""])},40:function(e,t,n){var r=n(271);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,a);r.locals&&(e.exports=r.locals)},42:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return e&&"object"===a(e)&&!Array.isArray(e)&&null!==e}function o(e,t){var n=Object.assign({},e);return _(e)&&_(t)&&Object.keys(t).forEach(function(a){_(t[a])&&a in e?n[a]=o(e[a],t[a]):Object.assign(n,r({},a,t[a]))}),n}n.d(t,"a",function(){return o})},61:function(e,t,n){"use strict";var r=n(60),a=n.n(r),_=n(5);a.a.settings.currency.precision=0;var o={router:{enabled:!1},transforms:{currency:{globals:["accounting"],transform:function(e,t){return a.a.formatMoney(e)}},date:{transform:function(e){return Object(_.format)(e,"MM/DD/YYYY")}},phoneNumber:{transform:function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?"("+t[1]+") "+t[2]+"-"+t[3]:null}},rcoPrimaryContact:{transform:function(e){var t=/\(?(\d{3})\)?( |-)?(\d{3})(-| )?(\d{4})/g.exec(e);if(!t)return e;var n=["(",t[1],") ",t[3],"-",t[5]].join(""),r=t[0];return e.replace(r,n)}},booleanToYesNo:{transform:function(e){return e?"Yes":"No"}},integer:{transform:function(e){return!isNaN(e)&&parseInt(e)}},prettyNumber:{transform:function(e){return!isNaN(e)&&e.toLocaleString()}},feet:{transform:function(e){return e&&e+" ft"}},squareFeet:{transform:function(e){return e&&e+" sq ft"}},nowrap:{transform:function(e){return'<span style="white-space: nowrap;">'+e+"</span>"}},bold:{transform:function(e){return"<strong>"+e+"</strong>"}}}};t.a=o}});
//# sourceMappingURL=app.js.map