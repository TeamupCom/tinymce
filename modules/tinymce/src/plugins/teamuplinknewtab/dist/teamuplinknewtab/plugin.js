!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,r,i,o,u,a;i={},o=function(e){for(var t=i[e],n=t.deps,r=t.defn,o=n.length,a=new Array(o),c=0;c<o;++c)a[c]=u(n[c]);var l=r.apply(null,a);if(void 0===l)throw"module ["+e+"] returned undefined";t.instance=l},u=function(e){var t=i[e];if(void 0===t)throw"module ["+e+"] was undefined";return void 0===t.instance&&o(e),t.instance},a=function(e,t,n){if("string"!=typeof e)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+e;if(void 0===n)throw"no definition function for "+e;i[e]={deps:t,defn:n,instance:void 0}},n="global!tinymce.util.Tools.resolve",r=tinymce.util.Tools.resolve,a(n,[],(function(){return r})),a("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],(function(e){return e("tinymce.PluginManager")})),a("tinymce.plugins.teamuplinknewtab.Plugin",["tinymce.core.PluginManager"],(function(e){return e.add("teamuplinknewtab",(function(e){e.ui.registry.addMenuItem("teamuplinknewtab",{icon:"image",text:"Open in new tab",onAction:function(){var t,n=e.selection.getNode();n.hasAttribute("data-mce-src")?t=n.getAttribute("data-mce-src"):n.hasAttribute("data-mce-href")&&(t=n.getAttribute("data-mce-href")),t&&window.open(t,"_blank")},context:"insert"}),e.ui.registry.addContextMenu("teamuplinknewtab",{update:function(e){return e.hasAttribute("data-mce-src")||e.hasAttribute("data-mce-href")?"teamuplinknewtab":""}})})),function(){}})),u("tinymce.plugins.teamuplinknewtab.Plugin")()}]);