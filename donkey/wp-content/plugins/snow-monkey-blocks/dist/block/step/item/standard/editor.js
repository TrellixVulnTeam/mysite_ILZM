!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=19)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.lodash},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.primitives},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/step--item","title":"Item","description":"It is a child block of the step block.","category":"smb","parent":["snow-monkey-blocks/step"],"attributes":{"title":{"type":"string","source":"html","selector":".smb-step__item__title > span","default":""},"numberColor":{"type":"string"},"imagePosition":{"type":"string","default":"center"},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"large"},"linkLabel":{"type":"string","source":"html","selector":".smb-step__item__link__label","default":""},"linkURL":{"type":"string","source":"attribute","selector":".smb-step__item__link","attribute":"href","default":""},"linkTarget":{"type":"string","default":"_self"},"linkColor":{"type":"string"}},"supports":{"anchor":true,"inserter":false}}')},function(e,t){e.exports=window.wp.data},function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=window.wp.richText},function(e,t,r){var n=r(14),l=r(15),i=r(16),a=r(18);e.exports=function(e,t){return n(e)||l(e,t)||i(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,l,i=[],_n=!0,a=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);_n=!0);}catch(e){a=!0,l=e}finally{try{_n||null==r.return||r.return()}finally{if(a)throw l}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(17);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"metadata",(function(){return p})),r.d(n,"name",(function(){return D})),r.d(n,"settings",(function(){return H}));var l=r(6),i=r.n(l),a=r(0),o=r(3),c=r(5),s=(r(11),r(2));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e,t){return t?Object(o.reduce)(e,(function(e,r){var n=Object(o.get)(t,["sizes",r.slug,"url"]),l=Object(o.get)(t,["media_details","sizes",r.slug,"source_url"]),a=Object(o.get)(t,["sizes",r.slug,"width"]),c=Object(o.get)(t,["media_details","sizes",r.slug,"width"]),s=Object(o.get)(t,["sizes",r.slug,"height"]),m=Object(o.get)(t,["media_details","sizes",r.slug,"height"]);return u(u({},e),{},i()({},r.slug,{url:n||l,width:a||c,height:s||m}))}),{}):{}},p=r(8),_=r(12),g=r.n(_),f=r(10),d=r.n(f),O=r(1),j=r(4),v=r(9),y=r(7),k=Object(a.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(y.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),h=Object(a.createElement)(y.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(y.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),w=r(13),E=r.n(w),x=function(e){var t=e.id,r=e.src,n=e.allowedTypes,l=e.accept,i=e.onSelect,o=e.onSelectURL,c=e.onRemove;return Object(a.createElement)(O.BlockControls,null,Object(a.createElement)(O.MediaReplaceFlow,{mediaId:t,mediaURL:r,allowedTypes:n,accept:l,onSelect:i,onSelectURL:o}),!!r&&!!c&&Object(a.createElement)(j.ToolbarGroup,null,Object(a.createElement)(j.ToolbarItem,{as:j.Button,onClick:c},Object(s.__)("Release","snow-monkey-blocks"))))},S=function(e){var t=e.src,r=e.alt,n=e.id,l=e.style;return Object(a.createElement)("img",{src:t,alt:r,className:"wp-image-".concat(n),style:l})},C=function(e){var t=e.src,r=e.style;return Object(a.createElement)("video",{controls:!0,src:t,style:r})},N=Object(a.memo)((function(e){var t,r,n=e.id,l=e.src,i=e.alt,c=e.url,s=e.target,m=e.allowedTypes,u=e.accept,b=e.onSelect,p=e.onSelectURL,_=e.onRemove,g=e.mediaType,f=e.style,d=e.rel,O=e.linkClass;return"image"===g?(t=Object(a.createElement)(S,{src:l,alt:i,id:n,style:f}),r=d?Object(o.isEmpty)(d)?void 0:d:"_self"!==s&&s?"noopener noreferrer":void 0,c&&(t=Object(a.createElement)("span",{href:c,target:"_self"===s?void 0:s,rel:r,className:O},t))):"video"===g&&(t=Object(a.createElement)(C,{src:l,style:f})),Object(a.createElement)(a.Fragment,null,Object(a.createElement)(x,{id:n,src:l,allowedTypes:m,accept:u,onSelect:b,onSelectURL:p,onRemove:_}),t)}),(function(e,t){for(var r=0,n=Object.keys(e);r<n.length;r++){var l=n[r];if(e[l]!==t[l])return!1}return!0})),R=function(e){var t=e.src,r=e.onSelect,n=e.onSelectURL,l=e.mediaType,i=e.allowedTypes,o=void 0===i?["image"]:i,c=!l&&t?"image":l,m=Object(s.__)("Media","snow-monkey-blocks");1===o.length&&("image"===o[0]?m=Object(s.__)("Image","snow-monkey-blocks"):"video"===o[0]&&(m=Object(s.__)("Video","snow-monkey-blocks")));var u=Object(a.useMemo)((function(){return o.map((function(e){return"".concat(e,"/*")})).join(",")}),[o]);return t?Object(a.createElement)(N,E()({},e,{accept:u,mediaType:c})):Object(a.createElement)(O.MediaPlaceholder,{icon:"format-image",labels:{title:m},onSelect:r,onSelectURL:n,accept:u,allowedTypes:o})},T=function(e){return"_self"!==e&&("_blank"===e||void 0)},P=function(e){var t=e.url,r=e.target,n=e.onChange;return Object(a.createElement)(O.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:t,opensInNewTab:T(r)},onChange:n})},L=function(e){var t=e.label,r=e.id,n=e.slug,l=e.onChange;if(!r)return null;var i=Object(v.useSelect)((function(e){var t=(0,e("core").getMedia)(r);if(!t)return{options:[]};var n=(0,e("core/block-editor").getSettings)().imageSizes,l=b(n,t);return{options:n.map((function(e){return!!l[e.slug]&&{value:e.slug,label:e.name}})).filter((function(e){return e}))}})).options;return 1>i.length?null:Object(a.createElement)(j.SelectControl,{label:t,value:n,options:i,onChange:l})};function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=p.attributes,B=[{attributes:z({},U),save:function(e){var t=e.attributes,r=t.title,n=t.numberColor,l=t.imagePosition,i=t.imageID,o=t.imageURL,c=t.linkLabel,s=t.linkURL,m=t.linkTarget,u=t.linkColor;return Object(a.createElement)("div",{className:"smb-step__item smb-step__item--image-".concat(l)},Object(a.createElement)("div",{className:"smb-step__item__title"},Object(a.createElement)("div",{className:"smb-step__item__number",style:{backgroundColor:n}}),Object(a.createElement)("span",null,Object(a.createElement)(O.RichText.Content,{value:r}))),Object(a.createElement)("div",{className:"smb-step__item__body"},!!i&&Object(a.createElement)("div",{className:"smb-step__item__figure"},Object(a.createElement)("img",{src:o,alt:"",className:"wp-image-".concat(i)})),Object(a.createElement)("div",{className:"smb-step__item__summary"},Object(a.createElement)(O.InnerBlocks.Content,null),!O.RichText.isEmpty(c)&&Object(a.createElement)("a",{className:"smb-step__item__link",href:s,style:{color:u},target:"_self"===m?void 0:m,rel:"_self"===m?void 0:"noopener noreferrer"},Object(a.createElement)("i",{className:"fas fa-arrow-circle-right"}),Object(a.createElement)("span",{className:"smb-step__item__link__label"},Object(a.createElement)(O.RichText.Content,{value:c}))))))}},{attributes:z(z({},U),{},{linkTarget:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"target",default:"_self"}}),save:function(e){var t=e.attributes,r=t.title,n=t.numberColor,l=t.imagePosition,i=t.imageID,o=t.imageURL,c=t.linkLabel,s=t.linkURL,m=t.linkTarget,u=t.linkColor;return Object(a.createElement)("div",{className:"smb-step__item smb-step__item--image-".concat(l)},Object(a.createElement)("div",{className:"smb-step__item__title"},Object(a.createElement)("div",{className:"smb-step__item__number",style:{backgroundColor:n}}),Object(a.createElement)("span",null,Object(a.createElement)(O.RichText.Content,{value:r}))),Object(a.createElement)("div",{className:"smb-step__item__body"},!!i&&Object(a.createElement)("div",{className:"smb-step__item__figure"},Object(a.createElement)("img",{src:o,alt:"",className:"wp-image-".concat(i)})),Object(a.createElement)("div",{className:"smb-step__item__summary"},Object(a.createElement)(O.InnerBlocks.Content,null),!O.RichText.isEmpty(c)&&Object(a.createElement)("a",{className:"smb-step__item__link",href:s,target:m,style:{color:u}},Object(a.createElement)("i",{className:"fas fa-arrow-circle-right"}),Object(a.createElement)("span",{className:"smb-step__item__link__label"},Object(a.createElement)(O.RichText.Content,{value:c}))))))}},{attributes:z({},U),migrate:function(e){var t;return[e,(t=e.summary,t=t.match("</p><p>")?e.summary.split("</p><p>"):e.summary.split(),Object(o.times)(t.length,(function(e){var r=t[e].replace("<p>","").replace("</p>","");return Object(c.createBlock)("core/paragraph",{content:r})})))]},save:function(e){var t=e.attributes,r=t.title,n=t.summary,l=t.numberColor,i=t.imagePosition,o=t.imageID,c=t.imageURL,s=t.linkLabel,m=t.linkURL,u=t.linkTarget,b=t.linkColor;return Object(a.createElement)("div",{className:"smb-step__item smb-step__item--image-".concat(i)},Object(a.createElement)("div",{className:"smb-step__item__title"},Object(a.createElement)("div",{className:"smb-step__item__number",style:{backgroundColor:l}}),Object(a.createElement)("span",null,Object(a.createElement)(O.RichText.Content,{value:r}))),!!o&&Object(a.createElement)("div",{className:"smb-step__item__figure"},Object(a.createElement)("img",{src:c,alt:"",className:"wp-image-".concat(o)})),Object(a.createElement)("div",{className:"smb-step__item__body"},Object(a.createElement)("div",{className:"smb-step__item__summary"},Object(a.createElement)(O.RichText.Content,{value:n})),!O.RichText.isEmpty(s)&&Object(a.createElement)("a",{className:"smb-step__item__link",href:m,target:u,style:{color:b}},Object(a.createElement)("i",{className:"fas fa-arrow-circle-right"}),Object(a.createElement)("span",{className:"smb-step__item__link__label"},Object(a.createElement)(O.RichText.Content,{value:s})))))}}],M={to:[{type:"block",blocks:["snow-monkey-blocks/step--item--free"],transform:function(e){return Object(c.createBlock)("snow-monkey-blocks/step--item--free",e)}}]},D=p.name,H={icon:{foreground:"#cd162c",src:"editor-ol"},edit:function(e){var t=e.attributes,r=e.setAttributes,n=e.isSelected,l=e.className,i=e.clientId,o=t.title,c=t.numberColor,m=t.imagePosition,u=t.imageID,p=t.imageURL,_=t.imageAlt,f=t.imageWidth,y=t.imageHeight,w=t.imageSizeSlug,E=t.linkLabel,x=t.linkURL,S=t.linkTarget,C=t.linkColor,N=Object(v.useSelect)((function(e){var t=(0,e("core/block-editor").getBlock)(i);return!(!t||!t.innerBlocks.length)}),[i]),T=Object(a.useState)(!1),I=g()(T,2),z=I[0],U=I[1],B=!!x,M=B&&n,D=Object(v.useSelect)((function(e){if(!u)return{resizedImages:{}};var t=(0,e("core").getMedia)(u);if(!t)return{resizedImages:{}};var r=(0,e("core/block-editor").getSettings)().imageSizes;return{resizedImages:b(r,t)}})).resizedImages,H=d()("smb-step__item","smb-step__item--image-".concat(m),l),A={backgroundColor:c||void 0},W={color:C||void 0},V=Object(a.useRef)(),F=Object(O.useBlockProps)({className:H,ref:V}),G=Object(O.__experimentalUseInnerBlocksProps)({className:"smb-step__item__summary"},{renderAppender:N?O.InnerBlocks.DefaultBlockAppender:O.InnerBlocks.ButtonBlockAppender}),J=function(e){var t=e.url,n=e.opensInNewTab;return r({linkURL:t,linkTarget:n?"_blank":"_self"})};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(O.InspectorControls,null,Object(a.createElement)(j.PanelBody,{title:Object(s.__)("Block Settings","snow-monkey-blocks")},Object(a.createElement)(j.SelectControl,{label:Object(s.__)("Image Position","snow-monkey-blocks"),value:m,onChange:function(e){return r({imagePosition:e})},options:[{value:"left",label:Object(s.__)("Left side","snow-monkey-blocks")},{value:"center",label:Object(s.__)("Center","snow-monkey-blocks")},{value:"right",label:Object(s.__)("Right side","snow-monkey-blocks")}]}),Object(a.createElement)(L,{label:Object(s.__)("Images size","snow-monkey-blocks"),id:u,slug:w,onChange:function(e){var t=p;D[e]&&D[e].url&&(t=D[e].url);var n=f;D[e]&&D[e].width&&(n=D[e].width);var l=y;D[e]&&D[e].height&&(l=D[e].height),r({imageURL:t,imageWidth:n,imageHeight:l,imageSizeSlug:e})}})),Object(a.createElement)(O.PanelColorSettings,{title:Object(s.__)("Color Settings","snow-monkey-blocks"),initialOpen:!1,colorSettings:[{value:c,onChange:function(e){return r({numberColor:e})},label:Object(s.__)("Number Color","snow-monkey-blocks")},{value:C,onChange:function(e){return r({linkColor:e})},label:Object(s.__)("Link Color","snow-monkey-blocks")}]})),Object(a.createElement)("div",F,Object(a.createElement)("div",{className:"smb-step__item__title"},Object(a.createElement)("div",{className:"smb-step__item__number",style:A}),Object(a.createElement)(O.RichText,{tagName:"span",placeholder:Object(s.__)("Write title…","snow-monkey-blocks"),value:o,multiline:!1,onChange:function(e){return r({title:e})}})),Object(a.createElement)("div",{className:"smb-step__item__body"},(!!p||n)&&Object(a.createElement)("div",{className:"smb-step__item__figure"},Object(a.createElement)(R,{src:p,id:u,alt:_,onSelect:function(e){var t=e.sizes&&e.sizes[w]?e.sizes[w].url:e.url,n=e.sizes&&e.sizes[w]?e.sizes[w].width:e.width,l=e.sizes&&e.sizes[w]?e.sizes[w].height:e.height;r({imageURL:t,imageID:e.id,imageAlt:e.alt,imageWidth:n,imageHeight:l})},onSelectURL:function(e){e!==p&&r({imageURL:e,imageID:0,imageSizeSlug:"large"})},onRemove:function(){return r({imageURL:"",imageAlt:"",imageWidth:"",imageHeight:"",imageID:0})},isSelected:n})),Object(a.createElement)("div",G),(!O.RichText.isEmpty(E)||n)&&Object(a.createElement)("span",{className:"smb-step__item__link",href:x,style:W,target:"_self"===S?void 0:S,rel:"_self"===S?void 0:"noopener noreferrer"},Object(a.createElement)("i",{className:"fas fa-arrow-circle-right"}),Object(a.createElement)(O.RichText,{className:"smb-step__item__link__label",placeholder:Object(s.__)("Link text","snow-monkey-blocks"),value:E,multiline:!1,onChange:function(e){return r({linkLabel:e})},withoutInteractiveFormatting:!0}),(z||M)&&Object(a.createElement)(j.Popover,{position:"bottom left",anchorRef:V.current,onClose:function(){return U(!1)}},Object(a.createElement)(P,{url:x,target:S,onChange:J}))))),Object(a.createElement)(O.BlockControls,null,Object(a.createElement)(j.ToolbarGroup,null,!B&&Object(a.createElement)(j.ToolbarButton,{icon:k,label:Object(s.__)("Link","snow-monkey-blocks"),"aria-expanded":z,onClick:function(){return U(!z)}}),M&&Object(a.createElement)(j.ToolbarButton,{isPressed:!0,icon:h,label:Object(s.__)("Unlink","snow-monkey-blocks"),onClick:function(){return J("")}}))))},save:function(e){var t=e.attributes,r=e.className,n=t.title,l=t.numberColor,i=t.imagePosition,o=t.imageID,c=t.imageURL,s=t.imageAlt,m=t.imageWidth,u=t.imageHeight,b=t.linkLabel,p=t.linkURL,_=t.linkTarget,g=t.linkColor,f=d()("smb-step__item","smb-step__item--image-".concat(i),r),j={backgroundColor:l||void 0},v={color:g||void 0};return Object(a.createElement)("div",O.useBlockProps.save({className:f}),Object(a.createElement)("div",{className:"smb-step__item__title"},Object(a.createElement)("div",{className:"smb-step__item__number",style:j}),Object(a.createElement)("span",null,Object(a.createElement)(O.RichText.Content,{value:n}))),Object(a.createElement)("div",{className:"smb-step__item__body"},!!c&&Object(a.createElement)("div",{className:"smb-step__item__figure"},Object(a.createElement)("img",{src:c,alt:s,width:!!m&&m,height:!!u&&u,className:"wp-image-".concat(o)})),Object(a.createElement)("div",{className:"smb-step__item__summary"},Object(a.createElement)(O.InnerBlocks.Content,null)),!O.RichText.isEmpty(b)&&Object(a.createElement)("a",{className:"smb-step__item__link",href:p,style:v,target:"_self"===_?void 0:_,rel:"_self"===_?void 0:"noopener noreferrer"},Object(a.createElement)("i",{className:"fas fa-arrow-circle-right"}),Object(a.createElement)("span",{className:"smb-step__item__link__label"},Object(a.createElement)(O.RichText.Content,{value:b})))))},transforms:M,deprecated:B};!function(e){if(e){var t=e.metadata,r=e.settings,n=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),r.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),r.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),r.keywords=t.keywords),Object(c.unstable__bootstrapServerSideBlockDefinitions)(i()({},n,t))),Object(c.registerBlockType)(n,r)}}(n)}]);