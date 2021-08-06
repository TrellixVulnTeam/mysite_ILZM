!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.lodash},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e){e.exports=JSON.parse('{"name":"snow-monkey-blocks/recent-posts","title":"Recent posts","description":"You can display recent posts with richer.","category":"smb","attributes":{"postType":{"type":"string","default":"post"},"postsPerPage":{"type":"number","default":6},"layout":{"type":"string","default":"rich-media"},"ignoreStickyPosts":{"type":"boolean","default":true},"smCols":{"type":"number","default":0},"noPostsText":{"type":"string","default":""},"itemTitleTagName":{"type":"string","default":"h3"},"forceDisplayItemMeta":{"type":"boolean","default":false},"forceDisplayItemTerms":{"type":"boolean","default":false},"itemThumbnailSizeSlug":{"type":"string","default":"large"},"arrows":{"type":"boolean","default":false},"dots":{"type":"boolean","default":true},"interval":{"type":"number","default":0},"anchor":{"type":"string","default":""}},"supports":{"anchor":true},"example":{"attributes":{"postsPerPage":3}}}')},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.richText},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"metadata",(function(){return b})),n.d(o,"name",(function(){return w})),n.d(o,"settings",(function(){return _}));var r=n(4),l=n.n(r),c=n(0),s=n(3),a=n(6),i=(n(8),n(1)),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},b=n(5),m=n(9),p=n.n(m),f=n(7),y=n(2),d=n(10);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=[{attributes:g(g({},b.attributes),{myAnchor:{type:"string",default:""}}),migrate:function(e){return e.anchor=e.myAnchor,e},save:function(){return null}}],w=b.name,_={icon:{foreground:"#cd162c",src:"editor-ul"},edit:function(e){var t=e.attributes,n=e.setAttributes,o=t.postType,r=t.postsPerPage,a=t.layout,b=t.ignoreStickyPosts,m=t.smCols,k=t.noPostsText,g=t.itemTitleTagName,j=t.itemThumbnailSizeSlug,w=t.forceDisplayItemMeta,_=t.forceDisplayItemTerms,h=t.arrows,v=t.dots,P=t.interval,T=Object(f.useSelect)((function(e){return(0,e("core").getPostTypes)({per_page:-1})||[]}),[]),S=Object(f.useSelect)((function(e){return(0,e("core/block-editor").getSettings)().imageSizes.map((function(e){return{value:e.slug,label:e.name}}))}),[]),x=Object(c.useMemo)((function(){return T.filter((function(e){return e.viewable&&!e.hierarchical&&"media"!==e.rest_base}))}),[T]),C=["h2","h3","h4"],E=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(s.omit)(t,["myAnchor"]));return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(d.InspectorControls,null,Object(c.createElement)(y.PanelBody,{title:Object(i.__)("Block Settings","snow-monkey-blocks")},Object(c.createElement)(y.SelectControl,{label:Object(i.__)("Post Type","snow-monkey-blocks"),value:o,onChange:function(e){return n({postType:e})},options:x.map((function(e){return{label:e.name,value:e.slug}}))}),Object(c.createElement)(y.RangeControl,{label:Object(i.__)("Number of posts","snow-monkey-blocks"),value:r,onChange:function(e){return n({postsPerPage:u(e,1,12)})},min:"1",max:"12"}),Object(c.createElement)(y.SelectControl,{label:Object(i.__)("Layout","snow-monkey-blocks"),value:a,onChange:function(e){return n({layout:e})},options:[{value:"rich-media",label:Object(i.__)("Rich media","snow-monkey-blocks")},{value:"simple",label:Object(i.__)("Simple","snow-monkey-blocks")},{value:"text",label:Object(i.__)("Text","snow-monkey-blocks")},{value:"text2",label:Object(i.__)("Text 2","snow-monkey-blocks")},{value:"panel",label:Object(i.__)("Panels","snow-monkey-blocks")},{value:"carousel",label:Object(i.sprintf)(// translators: %1$s: Layout
Object(i.__)("Carousel (%1$s)","snow-monkey-blocks"),Object(i.__)("Rich media","snow-monkey-blocks"))}]}),"carousel"===a&&Object(c.createElement)(c.Fragment,null,Object(c.createElement)(y.ToggleControl,{label:Object(i.__)("Display arrows","snow-monkey-blocks"),checked:h,onChange:function(e){return n({arrows:e})}}),Object(c.createElement)(y.ToggleControl,{label:Object(i.__)("Display dots","snow-monkey-blocks"),checked:v,onChange:function(e){return n({dots:e})}}),Object(c.createElement)(y.RangeControl,{label:Object(i.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:Object(i.__)('If "0", no scroll.',"snow-monkey-blocks"),value:P,onChange:function(e){return n({interval:u(e,0,10)})},min:"0",max:"10"})),Object(c.createElement)(y.BaseControl,{label:Object(i.__)("Title Tag of each items","snow-monkey-blocks"),id:"snow-monkey-blocks/recent-posts/item-title-tag-name"},Object(c.createElement)("div",{className:"smb-list-icon-selector"},Object(s.times)(C.length,(function(e){var t=g===C[e];return Object(c.createElement)(y.Button,{isPrimary:t,isSecondary:!t,onClick:function(){return n({itemTitleTagName:C[e]})},key:e},C[e])})))),Object(c.createElement)(y.SelectControl,{label:Object(i.__)("Images size of each items","snow-monkey-blocks"),value:j,options:S,onChange:function(e){return n({itemThumbnailSizeSlug:e})}}),Object(c.createElement)(y.ToggleControl,{label:Object(i.__)("Force display meta of each items","snow-monkey-blocks"),help:Object(i.__)("If it's already displayed, this setting will be ignored.","snow-monkey-blocks"),checked:w,onChange:function(e){return n({forceDisplayItemMeta:e})}}),Object(c.createElement)(y.ToggleControl,{label:Object(i.__)("Force display category label of each items","snow-monkey-blocks"),help:Object(i.__)("If it's already displayed, this setting will be ignored.","snow-monkey-blocks"),checked:_,onChange:function(e){return n({forceDisplayItemTerms:e})}}),("rich-media"===a||"panel"===a)&&Object(c.createElement)(y.SelectControl,{label:Object(i.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),value:m,onChange:function(e){return n({smCols:u(e)})},options:[{value:0,label:Object(i.__)("Default","snow-monkey-blocks")},{value:1,label:Object(i.__)("1 column","snow-monkey-blocks")},{value:2,label:Object(i.__)("2 columns","snow-monkey-blocks")}]}),Object(c.createElement)(y.ToggleControl,{label:Object(i.__)("Ignore sticky posts","snow-monkey-blocks"),checked:b,onChange:function(e){return n({ignoreStickyPosts:e})}}),Object(c.createElement)(y.TextareaControl,{label:Object(i.__)("Text if no posts matched","snow-monkey-blocks"),help:Object(i.__)("Allow HTML","snow-monkey-blocks"),value:k||"",onChange:function(e){return n({noPostsText:e})}}))),T?Object(c.createElement)(y.Disabled,null,Object(c.createElement)(p.a,{block:"snow-monkey-blocks/recent-posts",attributes:E})):Object(c.createElement)(y.Placeholder,{icon:"editor-ul",label:Object(i.__)("Recent posts","snow-monkey-blocks")},Object(c.createElement)(y.Spinner,null)))},save:function(){return Object(c.createElement)("div",{"data-dynamic-block":"snow-monkey-blocks/recent-posts","data-version":"2"})},deprecated:j};!function(e){if(e){var t=e.metadata,n=e.settings,o=e.name;t&&(t.title&&(t.title=Object(i.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(i.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(i.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords),Object(a.unstable__bootstrapServerSideBlockDefinitions)(l()({},o,t))),Object(a.registerBlockType)(o,n)}}(o)}]);