var scriptWiz=function(t){var e={};function r(o){if(e[o])return e[o].exports;var u=e[o]={i:o,l:!1,exports:{}};return t[o].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(o,u,function(e){return t[e]}.bind(null,u));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.opWordToHex=e.opWordToCode=e.opcodeToData=e.opcodeToWord=e.hexLittleEndian=void 0;var u=o(r(7));e.hexLittleEndian=function(t){if(t.length%2==0){var e="0x",r=0;t.startsWith("0x")&&(r=2);for(var o=t.length;o>r;o-=2)e+=t.substring(o-2,o);return e}return console.warn("its odd"),"something went wrong"};e.opcodeToData=function(t){return u.default.find((function(e){return e.word===t}))};e.opcodeToWord=function(t){var e;return(null===(e=u.default.find((function(e){return e.opcode===t})))||void 0===e?void 0:e.word)||""};e.opWordToCode=function(t){var e,r=null===(e=u.default.find((function(e){return e.word===t})))||void 0===e?void 0:e.opcode;return void 0===r?-1:r};e.opWordToHex=function(t){var e;return(null===(e=u.default.find((function(e){return e.word===t})))||void 0===e?void 0:e.hex)||""}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_INTEGER=e.EMOJI_REGEX=void 0;e.MAX_INTEGER=2147483647;e.EMOJI_REGEX=/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),u=r(1),n=function(t){var e=(t.length-2)/2;if(!(0==e||4<e)&&function(t,e){var r=Number(t);return(1!==e||0!=r&&128!=r)&&((2!==e||!(1<=r&&r<=127||32768<=r&&r<=32895))&&((3!==e||!(1<=r&&r<=32767||8388608<=r&&r<=8421375))&&(4!==e||!(1<=r&&r<=8388607||2147483648<=r&&r<=2155872255))))}(t,e)){var r=Number(t),o=function(t){var e=Math.pow(2,8*t-9),r=Math.pow(2,8*t-1);if(0<t&&t<5)return{minPos:e,maxPos:r-1,minNeg:1-r,maxNeg:-1*e}}(e);if(void 0!==o)return o.minPos<=r&&r<=o.maxPos?r:Math.pow(2,8*e-1)-r}};e.default=function(t){if(2===t.length)throw"stackHex Error: Invalid hex code !";var e,r=t;t.length%2==1&&(r=t.substr(0,t.length-1)+"0"+t.substr(t.length-1,1));var a=void 0,i=o.hexLittleEndian(r),d=n(i);return d?(a=d)<=u.MAX_INTEGER&&-1*u.MAX_INTEGER<=a?e=d:(a=void 0,e=r):e=r,{input:t,numberValue:a,byteValue:r,byteValueDisplay:e.toString(),stringValue:t}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),u=r(1),n=function(t){if(0===t)return"";var e=function(t){var e=0;if(0===t)return e;Math.abs(t);for(var r=1;r<5;r++){var o=Math.pow(2,8*(r-1)-1),u=Math.pow(2,8*r-1);if(-1*u<t&&t<=-1*o||o<=t&&t<u){e=r;break}}return e}(t),r=t;t<0&&0!==e&&(r=Math.pow(2,8*e-1)-t);var o=r.toString(16);return o.length%2==1&&(o="0"+o),(o.length/2<e||0===e)&&(o="00"+o),o};e.default=function(t){var e=Number(t),r=n(e),a=o.hexLittleEndian(r),i=void 0,d=a;return e<=u.MAX_INTEGER&&(i=e,d=t),{input:t,numberValue:i,byteValueDisplay:d,byteValue:a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1);e.default=function(t){var e="0x"+function(t){var e,r="";for(e=0;e<t.length;e++){r+=("0"+t.charCodeAt(e).toString(16)).slice(-2)}return r}(t),r=parseInt(e),u=void 0;return r<=o.MAX_INTEGER&&(u=r),{input:t,byteValue:e,byteValueDisplay:t,numberValue:u,stringValue:t}}},function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.stackDataArray=e.clearStack=e.parse=void 0;var u=o(r(6)),n=[];e.stackDataArray=n;e.parse=function(t){var r=u.default(t,n);return r.removeLastSize>0&&(e.stackDataArray=n=n.slice(0,n.length-r.removeLastSize)),n.push(r.data),n};e.clearStack=function(){e.stackDataArray=n=[]}},function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(0),n=o(r(2)),a=o(r(3)),i=o(r(8)),d=o(r(4));e.default=function(t,e){if(t.startsWith("<")&&t.endsWith(">"))return{data:function(t){if(t.startsWith("0x"))return n.default(t);if(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")){var e=t.substr(1,t.length-2);return d.default(e)}if(t.startsWith("OP_")){var r=u.opWordToHex(t);if(""===r)throw"ParseFinalInput Error: it is not a valid op word!";return"0x00"===r?{byteValue:"0x00",input:"0x00",byteValueDisplay:"0"}:n.default(r)}if(!isNaN(t))return a.default(t);throw"ParseFinalInput Error: it is not a valid final input string!"}(t.substr(1,t.length-2)),removeLastSize:0};if(t.startsWith("OP_")||!isNaN(t)){var r=t;if(!isNaN(t)&&""===(r=u.opcodeToWord(Number(t))))throw"Unknown OP code number";return i.default(r,e)}throw"it is not a valid input script"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=[{word:"OP_0",opcode:0,hex:"0x00",output:0},{word:"OP_FALSE",opcode:0,hex:"0x00",output:0},{word:"OP_TRUE",opcode:81,hex:"0x51",output:1},{word:"OP_1",opcode:81,hex:"0x51",output:1},{word:"OP_2",opcode:82,hex:"0x52",output:2},{word:"OP_3",opcode:83,hex:"0x53",output:3},{word:"OP_4",opcode:84,hex:"0x54",output:4},{word:"OP_5",opcode:85,hex:"0x55",output:5},{word:"OP_6",opcode:86,hex:"0x56",output:6},{word:"OP_7",opcode:87,hex:"0x57",output:7},{word:"OP_8",opcode:88,hex:"0x58",output:8},{word:"OP_9",opcode:89,hex:"0x59",output:9},{word:"OP_10",opcode:90,hex:"0x60",output:10},{word:"OP_11",opcode:91,hex:"0x61",output:11},{word:"OP_12",opcode:92,hex:"0x62",output:12},{word:"OP_13",opcode:93,hex:"0x63",output:13},{word:"OP_14",opcode:94,hex:"0x64",output:14},{word:"OP_15",opcode:95,hex:"0x65",output:15},{word:"OP_16",opcode:96,hex:"0x66",output:16},{word:"OP_CAT",opcode:126,hex:"0x7e"},{word:"OP_SUBSTR",opcode:127,hex:"0x7f"},{word:"OP_ADD",opcode:147,hex:"0x93"},{word:"OP_SUB",opcode:148,hex:"0x94"}]},function(t,e,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var u in e=arguments[r])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t}).apply(this,arguments)},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),a=u(r(2)),i=u(r(3)),d=u(r(4)),l=function(t,e){if(void 0!==t.numberValue&&void 0!==e.numberValue){var r=t.numberValue+e.numberValue;return i.default(r.toString())}throw"OP_ADD Error: this operation requires 2 valid number data"},s=function(t,e){if(void 0!==e.numberValue&&void 0!==t.numberValue){var r=t.numberValue-e.numberValue;return i.default(r.toString())}throw"OP_SUB Error: this operation requires 2 valid number data"},f=function(t,e,r){if(void 0!==t.stringValue){if(void 0!==e.numberValue&&void 0!==r.numberValue){var o=t.stringValue.substr(e.numberValue,r.numberValue);return d.default(o)}throw"OP_SUBSTR Error: Index and size must be number!"}throw"OP_SUBSTR Error: Invalid string value for sub string!"};e.default=function(t,e){var r=n.opcodeToData(t);if(void 0===r)throw"Unknown OP word!";if("OP_0"===t||"OP_FALSE"===t||"OP_1"===t||"OP_TRUE"===t||"OP_2"===t||"OP_3"===t||"OP_4"===t||"OP_5"===t||"OP_6"===t||"OP_7"===t||"OP_8"===t||"OP_9"===t||"OP_10"===t||"OP_11"===t||"OP_12"===t||"OP_13"===t||"OP_14"===t||"OP_15"===t||"OP_16"===t){var u=r.output||0,d=i.default(u.toString());return{data:o(o({},d),{input:t}),removeLastSize:0}}var c,p,_,v,h=e.length;if("OP_ADD"===t){if(h<2)throw"OP_ADD Error: stack data array must include min 2 data!";return{data:l(e[h-2],e[h-1]),removeLastSize:2}}if("OP_SUB"===t){if(h<2)throw"OP_SUB Error: stack data array must include min 2 data!";return{data:s(e[h-2],e[h-1]),removeLastSize:2}}if("OP_CAT"===t){if(h<2)throw"OP_CAT Error: stack data array must include min 2 data!";return{data:(c=e[h-2],p=e[h-1],_=c.byteValue.substring(2),v=p.byteValue.substring(2),_="00"===_?"":_,v="00"===v?"":v,a.default("0x"+_+v)),removeLastSize:2}}if("OP_SUBSTR"===t){if(h<3)throw"OP_SUBSTR Error: stack data array must include min 3 data!";return{data:f(e[h-3],e[h-2],e[h-1]),removeLastSize:3}}throw"Unknown OP word!"}}]);
//# sourceMappingURL=scriptWiz.umd.js.map