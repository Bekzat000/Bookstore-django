var _tmr=_tmr||[];
(function(){function z(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function C(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}function X(a){for(var b="",c,d=0;d<a;d++)c=16*Math.random()|0,b+=c.toString(16);return b}function s(){return(new Date).getTime()}function ra(){var a="tmr"+(""+Math.random()).slice(2);try{return A=window.localStorage||null,A.setItem(a,a),A.removeItem(a),!0}catch(b){return A=null,
!1}}function R(a){try{return A.getItem(Y+"_"+a)}catch(b){}return null}function D(a,b){try{A.setItem(Y+"_"+a,b)}catch(c){}}function Z(a){var b=";e="+escape("detect");p(q(a,!0,!1,!1)+b)}function k(){}function F(a){a&&"object"===typeof a&&(!w&&"id"in a)&&(w=a.id)}function sa(a){return(a=!x?void 0:x[a])&&S?a-S:void 0}function $(){if(x){for(var a=0,b="domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),c=0;c<b.length;c++){var d=!x?void 0:
x[b[c]];if(0<d&&(d<a||0==a))a=d}return a?a:void 0}}function p(a){var b="https://top-fwz1.mail.ru"+a;"function"===typeof navigator.sendBeacon&&!0===navigator.sendBeacon(b)||(a=new Image,a.src=b)}function G(a,b,c){if(!(b&&"object"===typeof b))return m&&console.warn("[TopMailRu]: Invalid event of "+a),null;var d={name:a,title:c.title||null};"id"in c&&!1!==c.id&&(d.id="id"in b&&b.id,!0!==c.id&&(d.id=d.id||c.id));if(m){var e=aa(b,{params:c.required,fn:c.fn});if(e.missed.length)return console.warn("[TopMailRu]"+
(d.id?"["+d.id+"]":"")+": Unspecified "+(1<e.missed.length&&e.missed.slice(0,-1).join(", ")+" and "||"")+e.missed.slice(-1)+" in "+a),null;var f=aa(b,{params:c.optional,fn:c.fn}),g=[].concat(e.values).concat(f.values),e=[].concat(e.missed).concat(f.missed);c.value&&(b="value"in b&&b.value,!0!==c.value&&(b=b||c.value),b?g.push("value: "+b):e.push("value"));d.value=g.length?"{ "+g.join(", ")+" }":"";d.empty=e.length?"("+(1<e.length?e.slice(0,-1).join(", ")+" and "+e.slice(-1)+" are":e.slice(-1)+" is")+
" empty)":""}return"id"in c&&!1!==c.id&&!d.id?(m&&console.warn("[TopMailRu]: Undefined counter ID of "+a+" "+d.value),null):d}function aa(a,b){var c=[],d=[],e,f;if(b.params)for(e in b.params)b.params.hasOwnProperty(e)&&!1!==b.params[e]&&(f=e in a&&a[e],!0!==b.params[e]&&(f=f||b.params[e]),f?c.push(e+': "'+(b.fn?b.fn.call(self,e,f):f)+'"'):d&&d.push(e));return{values:c,missed:d}}function H(a){console.info("[TopMailRu]["+a.id+"]: "+(a.title||a.name)+" "+a.value+" "+a.empty)}function q(a,b,c,d){y&&D(I,
++u);var e="id"in a?a.id:w,f="url"in a?a.url:location.href,g="referrer"in a?a.referrer:document.referrer,k="title"in a?a.title:document.title,h;h=T;null===h&&(h=ta());h=null!==h?h?1:0:null;var m="userid"in a?a.userid:v||0===v?v:void 0,l;l=[];w&&e!==w&&l.push("sec");l=l.join(",");var p=window.screen,n;n=(new Date).getTimezoneOffset();var q="";if(window.Intl)try{q=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(t){}n=n+"/"+q;a.start=$();b=(b?"/tracker":"/counter")+"?js=13"+(e?";id="+escape(e):
"")+(f?";u="+escape(f):"")+(g?";r="+escape(g):"")+(a.start?";st="+escape(a.start):"")+("gender"in a?";gender="+escape(a.gender):"")+("age"in a?";age="+escape(a.age):"")+("pid"in a?";pid="+escape(a.pid):"")+(void 0!==m?";userid="+escape(m):"")+(d&&k?";title="+encodeURIComponent(k):"")+(p?";s="+p.width+"*"+p.height:"")+";vp=";e=d=0;document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(d=document.documentElement.clientWidth,e=document.documentElement.clientHeight):
"number"==typeof window.innerWidth&&(d=window.innerWidth,e=window.innerHeight);b=b+(""+d+"*"+e)+";touch="+ua+";hds="+va+";flash="+U+";sid="+ba+";ver="+ca+";tz="+encodeURIComponent(n);if(c){if(!x||!V)c="";else{c=[];c.push(V.type);c.push(V.redirectCount);c.push(S);for(d=0;d<da.length;d++)c.push(sa(da[d]));c=c.join("/")}c=";nt="+c}else c="";c=b+c+("device"in a?";device="+escape(a.device):"")+";ni=";if(!navigator||!navigator.connection)b="";else{b=navigator.connection;d=[];for(f=0;f<ea.length;f++){e=
b[ea[f]];if(void 0!==e)switch(e){case !0:e=1;break;case !1:e=0;break;default:e=(""+e).replace(/\//g,"_")}d.push(e)}b=d.join("/")}c+=b;var r;if("params"in a){b=escape;if(a=a.params)if(d=typeof a,"number"===d||"boolean"===d||"string"===d||a.nodeType||a===a.window)r="";else{e=[];for(r in a)if(a.hasOwnProperty(r)){f=a[r];d=typeof f;if("string"===d)f='"'+f.replace(/[\"\']/g,"\\$&")+'"';else if(!("number"===d||"boolean"===d))continue;e.push('"'+r+'":'+f)}r=!e.length?"":"{"+e.join(",")+"}"}else r="";r=";params="+
b(r)}else r="";return c+r+(null!==h?";detect="+h:"")+(y?";lvid="+escape(y?""+J+":"+s()+":"+u+":"+K:""):"")+(l?";opts="+escape(l):"")+";_="+Math.random()}function fa(a){a=";e="+escape("PVT/"+a);for(var b=0;b<h.length;b++)p(q(h[b],!0,!1,!0)+a)}function wa(){T=!0;ga(1);if(!ha&&!E){E=!0;for(var a=0;a<h.length;a++)Z(h[a])}}function xa(){ga(0);T=!1}function ta(){var a;a=(a=ia.cookie.match(RegExp("(?:^|; )"+ja.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):null;if(null===
a)return null;a=a.split("|");if(2!==a.length)return null;var b=a[1],b=s()-b;if(0>b||b>ka)return null;a=parseInt(a[0],10);return isNaN(a)?null:a}function ga(a){var b=s(),b=[a,b].join("|"),c=ja;a={path:"/",expires:ka};var d=a.expires;"number"===typeof a.expires&&(d=new Date,d.setTime(d.getTime()+a.expires));d&&d.toUTCString&&(d=d.toUTCString());a.expires=d;var b=c+"="+encodeURIComponent(b),e;for(e in a)b+="; "+e,c=a[e],!0!==c&&(b+="="+c);ia.cookie=b}function L(){document.addEventListener?(C(document,
"DOMContentLoaded",L),_tmr.onready()):document.attachEvent&&"complete"===document.readyState&&(C(document,"readystatechange",L),_tmr.onready())}function la(){C(window,"load",la);_tmr.onready();_tmr.onload()}function M(){C(window,"unload",M);C(window,"beforeunload",M);_tmr.unload()}if("[object Array]"===Object.prototype.toString.call(_tmr)){var g=window,l=navigator,ia=document,A=null,Y="tmr",y=ra(),E=!1,T=null,ka=864E5,ja="tmr_detect",ya=function(){function a(a,c){var d=document.createElement("div");
d.setAttribute("class",String.fromCharCode(97,100,118,98,108,111,99,107,32,97,100,118,101,114,116,98,108,111,99,107,32,97,109,109,98,108,111,99,107,32,98,45,98,97,110,110,101,114,32,98,45,109,101,100,105,97,45,98,97,110,110,101,114,32,112,117,98,95,51,48,48,120,50,53,48,32,112,117,98,95,51,48,48,120,50,53,48,109,32,109,101,100,105,117,109,95,114,101,99,116,97,110,103,108,101,95,51,48,48,95,50,53,48,32,112,117,98,95,55,50,56,120,57,48,32,108,101,97,100,101,114,98,111,97,114,100,95,55,50,56,95,57,48,
32,119,105,100,101,95,115,107,121,115,99,114,97,112,101,114,95,49,54,48,95,54,48,48,32,119,105,100,101,95,115,107,121,115,99,114,97,112,101,114,95,49,54,48,120,54,48,48,32,116,101,120,116,45,97,100,32,116,101,120,116,65,100,32,116,101,120,116,95,97,100,32,116,101,120,116,95,97,100,115,32,116,101,120,116,45,97,100,115,32,116,101,120,116,45,97,100,45,108,105,110,107,115,32,97,100,95,116,101,120,116,32,97,100,95,116,101,120,116,32,98,97,110,110,101,114,95,116,101,120,116,32,116,101,120,116,45,98,97,
110,110,101,114,32,98,45,114,98,32,114,98,45,115,108,111,116,32,98,45,112,114,111,109,111,45,97,100,32,105,45,98,114,97,110,100,105,110,103,32,98,114,97,110,100,105,110,103,45,112,32,114,98,45,118,105,100,101,111,45,119,105,100,103,101,116,32,98,45,109,105,109,105,99,45,97,100,118,32,112,109,45,116,111,111,108,98,97,114,95,95,98,97,110,110,101,114,32,114,98,95,98,111,100,121,32,115,116,105,99,107,121,45,115,112,114,105,110,103,115,32,97,100,118,95,115,108,111,116,95,49,32,98,97,110,110,101,114,95,
50,52,48,32,98,108,111,99,107,95,115,104,97,114,101,32,97,99,116,105,111,110,45,45,115,104,97,114,101,32,115,104,97,114,101,108,105,115,116,32,106,115,45,98,97,110,110,101,114,32,100,105,114,101,99,116,32,112,99,45,109,105,109,105,99,32,116,103,98,45,98,97,110,110,101,114,32,121,97,100,105,114,101,99,116,32,106,115,45,112,114,111,109,111,45,112,111,112,117,112,32,109,45,115,117,98,115,99,114,105,112,116,105,111,110,32,112,45,116,97,114,103,101,116,32,112,45,100,105,114,101,99,116,104,97,99,107,32,
114,98,45,102,108,111,97,116,105,110,103,32,116,114,103,45,98,45,98,97,110,110,101,114,45,98,108,111,99,107));d.setAttribute("style","position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");d.setAttribute("id","trg-b-banners-1");d.setAttribute("data-view","SlotView.mimic");this.bait=document.body.appendChild(d);this.bait.offsetParent;this.bait.offsetHeight;this.bait.offsetLeft;this.bait.offsetTop;this.bait.offsetWidth;this.bait.clientHeight;
this.bait.clientWidth;this.loopNumber=0;this.fnPositive=a||null;this.fnNegative=c||null;var e=this;setTimeout(function(){e._checkBait.call(e)},1)}a.prototype._checkBait=function(){if(E)this._stop();else{var a=!1;null!==document.body.getAttribute("abp")||null===this.bait.offsetParent||0==this.bait.offsetHeight||0==this.bait.offsetLeft||0==this.bait.offsetTop||0==this.bait.offsetWidth||0==this.bait.clientHeight||0==this.bait.clientWidth?a=!0:void 0!==window.getComputedStyle&&(a=window.getComputedStyle(this.bait,
null),a="none"==a.getPropertyValue("display")||"hidden"==a.getPropertyValue("visibility"));(!0===a||10<=++this.loopNumber)&&this._stop();if(a&&this.fnPositive)try{this.fnPositive()}catch(c){}else if(!a&&10>this.loopNumber){var d=this;setTimeout(function(){d._checkBait.call(d)},50*this.loopNumber)}else try{this.fnNegative()}catch(e){}}};a.prototype._stop=function(){try{document.body.removeChild(this.bait)}catch(a){}};return function(b,c){new a(b,c)}}(),ca="60.1.0",W=0,N=0,ba=X(16),v=null,O=0,I="reqNum",
u=y&&R(I);null===u?(u=0,y&&D(I,u)):u=parseInt(u,10);var K=y&&R("lvid"),J=y&&R("lvidTS");if(null===K||null===J)K=X(32),J=""+s(),u=0,y&&(D("lvid",K),D("lvidTS",J),D(I,u));var w=0,h=[],P=[],Q=[],n="string"===typeof location.hostname&&(-1!=location.hostname.search(/(^|\.)odnoklassniki\.ru$/)||-1!=location.hostname.search(/(^|\.)ok\.ru$/)),t="string"===typeof location.hostname&&-1!=location.hostname.search(/(^|\.)vk\.com$/),za="string"===typeof location.hostname&&-1!=location.hostname.search(/(^|\.)lamoda\.ru$/),
Aa="string"===typeof location.hostname&&-1!=location.hostname.search(/(^|\.)kommersant\.ru$/),Ba="string"===typeof location.search&&-1!=location.search.search(/[?&]rb_clickid=/),m="string"===typeof location.search&&-1!=location.search.search(/[?&]tmr_debug=1(?:&|$)/),ma=n||t||za||Aa,Ca=!Ba,Da=n||t,Ea=n||t,na=n||t,ha=!1,ua="ontouchstart"in g||1<(l.maxTouchPoints||l.msMaxTouchPoints)?"1":"0",va=window.devicePixelRatio||0,U="";if(l.plugins&&l.plugins["Shockwave Flash"])U=l.plugins["Shockwave Flash"].description.split(" ")[2];
else if(window.ActiveXObject)try{var B=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),B=B.GetVariable("$version"),B=B.split(" ")[1].split(","),U=B[0]+"."+B[1]}catch(Fa){}var g=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},x=g.timing||{},V=g.navigation||{},da="unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
S=!x?void 0:x.navigationStart,ea="downlink downlinkMax effectiveType rtt saveData type".split(" ");k.prototype.pageView=function(a){F(a);var b;if(b=a&&"object"===typeof a)if(b="id"in a)if(b=5>P.length){b:{for(b=0;b<P.length;b++)if(P[b]===a.id){b=!0;break b}b=!1}b=!b}b&&(P.push(a.id),!1!==a.beat&&Q.push(a.id),h.push(a),E&&Z(a));if(b=G("pageView",a,{title:"Page view",id:!0,optional:{url:location.href}}))p(q(a,!1,!1,!0)),N=s(),m&&H(b)};k.prototype.reachGoal=function(a){F(a);var b=G("reachGoal",a,{title:"Reach goal",
id:w,value:!0,required:{goal:!0},optional:null,fn:null});if(b&&"goal"in a&&a.goal){var c="";"value"in a&&a.value&&(c=parseInt(a.value)||"");p(q(a,!0,!1,!0)+(";e="+escape("RG:"+c+"/"+a.goal)));m&&H(b)}};k.prototype.itemView=function(a){var b=G("itemView",a,{title:"Item view",id:w,optional:{list:!0,productid:!0,pagetype:!0,totalvalue:!0},fn:function(a,b){return(""+b).replace(/;/g," ")}});if(b){var c=a.list||"",d=a.productid||"",e=a.pagetype||"",f=a.totalvalue||0;(new Image).src="https://ad.mail.ru/retarget/?counter="+
b.id+"&list="+c+"&productid="+d+"&pagetype="+e+"&totalvalue="+f+"&_="+Math.random();c="IV:"+f+"/"+(""+c).replace(/;/g," ")+";"+(""+d).replace(/;/g," ")+";"+(""+e).replace(/;/g," ");p(q(a,!0,!1,!1)+(";e="+escape(c)));m&&H(b)}};k.prototype.sendEvent=function(a){F(a);var b=G("sendEvent",a,{title:"Send event",id:w,value:!0,required:{category:!0,action:!0},optional:{label:!0},fn:function(a,b){return(""+b).substr(0,300).replace(/;/g," ")}});if(b&&"category"in a&&a.category&&"action"in a&&a.action){var c=
(""+a.category).substr(0,300),d=(""+a.action).substr(0,300),e="";"label"in a&&a.label&&(e=(""+a.label).substr(0,300));var f="";"value"in a&&a.value&&(f=parseInt(a.value)||"");c="CE:"+f+"/"+(""+c).replace(/;/g," ")+";"+(""+d).replace(/;/g," ")+";"+(""+e).replace(/;/g," ");p(q(a,!0,!1,!1)+(";e="+escape(c)));m&&H(b)}};k.prototype.setUserID=function(a){if(null===a||!1===a||void 0===a)this.deleteUserID();else{var b=typeof a;"number"!==b&&"string"!==b?m&&console.warn("[TopMailRu]: Invalid user ID in setUserID"):
(v=a,m&&console.info("[TopMailRu]: Global user ID = "+v))}};k.prototype.getUserID=function(){return v||0===v?v:void 0};k.prototype.deleteUserID=function(){v=null;m&&console.info("[TopMailRu]: Reset global user ID to null")};k.prototype.processEvent=function(a){if(a&&"object"===typeof a)if("type"in a)switch(a.type){case "pageView":this.pageView(a);break;case "reachGoal":this.reachGoal(a);break;case "itemView":this.itemView(a);break;case "sendEvent":this.sendEvent(a);break;case "setUserID":"userid"in
a&&this.setUserID(a.userid);break;case "deleteUserID":this.deleteUserID()}else m&&console.warn("[TopMailRu]: Unspecified push event type");else m&&console.warn("[TopMailRu]: Invalid push event")};k.prototype.push=function(a){for(var b=0,c=arguments.length;b<c;b++)this.processEvent(arguments[b])};var oa=!1;k.prototype.onready=function(){oa||(oa=!0,!ha&&!E&&ya(wa,xa))};var pa=!1;k.prototype.onload=function(){if(!pa){pa=!0;O=s();if(!Ea&&0<h.length){for(var a=";e="+escape("RT/load")+";et="+O,b=0;b<h.length;b++)p(q(h[b],
!0,!0,!1)+a);N=O}Ca||setTimeout(function(){fa(2)},2E3);Da||setTimeout(function(){fa(15)},15E3)}};k.prototype.beat=function(){if(!ma&&W){var a=s();if(!(12E4<a-W)){if(12E4<a-N)for(var b=";e="+escape("RT/resend")+";et="+O,c=0;c<h.length;c++)!1!==h[c].beat&&p(q(h[c],!0,!1,!0)+b);else 0<Q.length&&p("/tracker?js=13;id="+Q[0]+";e="+escape("RT/beat")+";sid="+ba+";ids="+Q.join()+";ver="+ca+";_="+Math.random());N=a}}};var qa=!1;k.prototype.unload=function(){if(!qa&&(qa=!0,!na)){var a;a=(a=$())?s()-a:void 0;
a=";e="+escape("RT/unload")+";et="+s()+(a?";pvt="+escape(a):"");for(var b=0;b<h.length;b++)p(q(h[b],!0,!1,!1)+a)}};k.prototype.activity=function(a){W=s()};l=new k;g=0;for(n=_tmr.length;g<n;g++)(t=_tmr[g])&&"object"===typeof t&&F(t);g=0;for(n=_tmr.length;g<n;g++)t=_tmr[g],l.processEvent(t);_tmr=l;if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)_tmr.onready();else document.addEventListener?z(document,"DOMContentLoaded",L):document.attachEvent&&
z(document,"readystatechange",L);if("complete"===document.readyState)_tmr.onload();else z(window,"load",la);na||(z(window,"unload",M),z(window,"beforeunload",M));if(!ma){setInterval(_tmr.beat,6E4);try{l="scroll gesturechange touchmove mousedown mousemove mouseup touch".split(" ");n=function(a){z(document,a,function(){_tmr.activity(a)})};for(g=0;g<l.length;g++)n(l[g]);z(window,"scroll",function(){_tmr.activity("scallback")})}catch(Ga){}}}})();