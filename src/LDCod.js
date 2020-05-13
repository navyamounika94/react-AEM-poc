/*********************************************************
 *
 * Lexus Drivers cod.js
 *
 * @version: 3.3
 * @date: 2014.03.18 13:52
 *
 * THIS IS A GENERATED FILE - DO NOT MODIFY HERE
 *
 *********************************************************/
if(!window.tmsomnixd){window.tmsomnixd={}}tmsomnixd.config=function(){var h,c,b,a,e,i,j,d,g;try{h=(/(tstcpd\d\.|devcpd\d\.|staging\.|qa\.|\.local|localhost)/g.test(document.domain))?true:false}catch(f){h=false}if(h){d="http://staging.lexus.com/lexus-share/js/tracking_omn/";g="https://secure.staging.lexus.com/lexus-share/js/tracking_omn/"}else{d="https://www.lexus.com/lexus-share/js/tracking_omn/";g="https://secure.lexus.com/lexus-share/js/tracking_omn/"}c=d+"omnixd.swf";b=g+"omnixd.swf";a=d+"LD_cod_2_0.js";e=g+"LD_cod_2_0.js";i=d+"sync.html";j=g+"sync.html";return{fallback:{fbURL:a,fbSecureURL:e},fconn:{swfURL:c,swfSecureURL:b,flashvars:{brandid:"lexus",debug:false}},h5conn:{xconURL:i,xconSecureURL:j},dart:{staticsrc:"1044889",type:"lexus764"},ns:"tmsomni",fireTag:{ns:"tmsomni",SiteCatalyst:{namespace:"tmsomni",dedup:false}},MediaTrack:{ns:"tmsomni",playerName:"lexusdrivers"},log:{debug:false}}}();(function(a,b){var e=!!b;if(!a.Log){var d={add:function(f){if(!f||!f.toString){return}var c="";if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.name){c=arguments.callee.caller.name+":"}this.history.push(c+f.toString());if(this.history.length>400){this.history.shift()}},history:[],info:function(c){this.add(c)},warn:function(c){this.add(c)},log:function(c){this.add(c)},debug:function(c){this.add(c)}};a.Log=(a.console&&console.debug&&console.info&&console.warn&&console.log&&e)?a.console:d}})(window,(window.tmsomnixd&&tmsomnixd.config&&tmsomnixd.config.log&&tmsomnixd.config.log.debug));var baker=function(b){if(window.console&&(typeof(console.log)=="function"||typeof(console.log)=="object")){try{window.console.log(b)}catch(a){}}};(function(c,d){d[c]=d[c]||{};var e=d[c],b,a;e.config=e.config||{};e.utils=e.utils||{};b=e.config;a=e.utils;b.fireTag=b.fireTag||{};b.MediaTrack=b.MediaTrack||{playerName:"toyota"};a.mergeObject=a.mergeObject||function(g,h){var f={},i;for(i in g){if(g.hasOwnProperty(i)){f[i]=g[i]}}for(i in h){if(h.hasOwnProperty(i)){f[i]=h[i]}}return f}})("tmsomnixd",window);(function(h,m){var b=m.config||{};b.fireTag=b.fireTag||{};var g=Object.prototype.hasOwnProperty,k=[],c=function(o,p,q){var n={},r=(q!==undefined)?q:true;for(var s in o){if(o.hasOwnProperty(s)){n[s]=o[s]}}if(r){for(var s in p){if(p.hasOwnProperty(s)){n[s]=p[s]}}}return n},l=(function(s){var p="SiteCatalyst",r=/^(prop|eVar|list|channel|linkType|events|linkName|mediaTitle|pageName|_)/,q={namespace:"s",dynamicParamAdapter:null,dedup:false},o=q,t=s[p];if(typeof s[p]==="object"){o=c(q,t)}function n(w,v,E){var D,C,x,u,y,A;try{if(typeof(o.dynamicParamAdapter)==="function"){D=o.dynamicParamAdapter(w,v,E)||{};w=D.id||w;v=D.dv||v;E=D.json||E}y=o.dedup;C=window[o.namespace];if(!C){baker("error: Omniture Site Catalyst is missing");return}if(!C.tl){baker("error: Omniture Site Catalyst is overwritten");return}A=j(C,v,E,y);C._tagID=w;A=o.namespace+":\n"+A;if(A!==""){baker("codeblock "+w+" found to contain:\n"+A);try{if(C.linkType){C.tl(this,C.linkType,C.linkName);baker("codeblock "+w+" Link Sent")}else{C.t();baker("codeblock "+w+" Page Load Sent")}}catch(z){baker("error: codeblock "+w+" was not sent");baker(z)}}if(!C.target){A="";C._tagLog=C._tagLog||[];C._tagLog.push(C._tagID);C._tagID="";for(var x in E){if(E.hasOwnProperty(x)){C[x]=""}}}}catch(B){baker("error: unknown "+p+" error");baker(B)}}return{type:p,propRegex:r,defaults:q,trigger:n}})(b.fireTag),f=(function(s){var p="Adometry",r=/^(gid|advid|pid|rev)$/,q={url:"http://js.dmtry.com/channel.js",surl:"https://log.dmtry.com/channel.js",dynamicParamAdapter:null,dedup:false},o=(typeof s[p]==="object")?c(q,s[p]):q;function n(x,v,F){var D={},E,A,C,y,z,w,u,t;try{C=(location.protocol==="https:");y=o.dedup;if(typeof(o.dynamicParamAdapter)==="function"){E=o.dynamicParamAdapter(x,v,F)||{};x=E.id||x;v=E.dv||v;F=E.json||F}z="";z=j(D,v,F,y);t=(C)?o.surl:o.url+"#gid:"+D.gid+";advid:"+D.advid+";pid:"+D.pid+((D.rev)?";rev:"+D.rev:"")+";";a(t,function(){baker("Adometry loaded\n"+z)})}catch(B){baker("error: unknown "+p+" error");baker(B)}}return{type:p,propRegex:r,defaults:q,trigger:n}})(b.fireTag),i=(function(s){var p="Korrelate",r=/^(lvl|av1|av2|av3)$/i,q={devurl:"http://a02.korrelate.net/a/e/d2a.ads?et=a&ago=292&ao=293&px=178&pt=s&r=",devsurl:"https://a01.korrelate.net/a/e/d2a.adset=a&ago=292&ao=293&px=178&pt=s&r=",produrl:"http://a02.korrelate.net/a/e/d2a.ads?et=a&ago=292&ao=294&px=179&r=",prodsurl:"https://a01.korrelate.net/a/e/d2a.ads?et=a&ago=292&ao=294&px=179&r=",dynamicParamAdapter:null,isDev:true},o=(typeof s[p]==="object")?c(q,s[p]):q;function n(z,w,H){var F={},G,C,E,A,y,B,x,v,u,t;try{E=(location.protocol==="https:");A=o.isDev;y=o.dedup;if(typeof(o.dynamicParamAdapter)==="function"){G=o.dynamicParamAdapter(z,w,H)||{};z=G.id||z;w=G.dv||w;H=G.json||H}B=j(F,w,H,y);t=parseInt(Math.random()*1000000000000,10);if(A){u=(E)?o.devsurl:o.devurl}else{u=(E)?o.prodsurl:o.produrl}u+=t;u+="&lvl="+F.lvl;u+=(F.av1)?"&av1="+F.av1:"";u+=(F.av2)?"&av2="+F.av2:"";u+=(F.av3)?"&av3="+F.av3:"";a(u,function(){baker(p+" loaded\n"+B)})}catch(D){baker("error: unknown "+p+" error");baker(D)}}return{type:p,propRegex:r,defaults:q,trigger:n}})(b.fireTag);k.push(l);function e(o){try{if(!o||o.length===0){baker("error: the tag id cannot be null");return}if(!window.taglist){baker("error: JSON file not included");return}json=taglist["F"+String(o).replace(".","X")];if(!json){baker("error: Included JSON file does not contain codeblock "+o);return}return json}catch(n){baker("error: unknown error retrieving codeblock "+o);return}}function j(o,s,r,t){var w,n=[];for(var v in r){if(r.hasOwnProperty(v)){w=r[v];for(var u in s){if(s.hasOwnProperty(u)){if(r[v].indexOf(u)!==-1){if(w===r[v]){w=r[v].replace(u,s[u])}else{w=w.replace(u,s[u])}}}}if(t){if(w.match(/^:|::|:$/g)){w=w.replace(/:+/g,":").replace(/(^:|:$)/g,"")}if(w.match(/^_|__|_$/g)){w=w.replace(/_+/g,"_").replace(/(^_|_$)/g,"")}}o[v]=w;n.push(v+" = "+w)}}return n.join("\n")}function a(o,p){var n=document.createElement("script");n.type="text/javascript";if(n.readyState){n.onreadystatechange=function(){if(n.readyState=="loaded"||n.readyState=="complete"){n.onreadystatechange=null;p()}}}else{n.onload=function(){p()}}n.src=o;document.getElementsByTagName("head")[0].appendChild(n)}function d(o,n){var q,u,v,w,x=e(o);if(!x){return}if(k.length<1){baker("No tag libraries defined");return}n=n||{};if("object"==typeof(omni_page_var)){n=c(omni_page_var,n)}for(var r=0,s=k.length;r<s;r++){u=k[r];try{v={};w=false;for(var q in x){if(x.hasOwnProperty(q)){if(!!q.match(u.propRegex)){v[q]=x[q];w=true}}}if(w){u.trigger(o,n,v)}}catch(t){baker("error: unknown error with "+u.type+" tag")}}}h.fireTag=d})(window,tmsomnixd);var MediaTrack=function(h,g,f,l){baker("MediaTrack("+h+","+g+","+f+","+l+")");l=l||{};var c=(tmsomnixd&&tmsomnixd.config)?tmsomnixd.config:{},e=(tmsomnixd&&tmsomnixd.utils)?tmsomnixd.utils.mergeObject:null,o=(c.ns)?c.ns:"s",w=window[o],n=(c.MediaTrack)?c.MediaTrack:{},j=(n)?n.dynamicParamAdapter:null,d=(n)?n.playerName:"Player",u,a,i,k,v;if("object"==typeof(window.omni_page_var)){if(e){l=e(omni_page_var,l)}}if(j&&(typeof j==="function")){k=j(h,g,f,l)||{};h=k.x||h;g=k.y||g;f=k.z||f;l=k.dv||l}try{u=h;if(!(/[^0-9|.]/gi.test(h))){v=taglist["F"+String(h).replace(".","X")];if(v&&v.mediaTitle){u=v.mediaTitle.toString()}}for(var m in l){if(l.hasOwnProperty(m)){if(u.indexOf(m)!==-1){u=u.replace(m,l[m])}}}if(!w){baker("error: Omniture Site Catalyst is missing");return}if(!w.Media){baker("error: Omniture Site Catalyst is overwritten");return}if(g==="MediaOpen"){baker("open:"+u);try{w.Media.open(u,f,d);baker("MediaOpen Tracked!")}catch(b){baker("error: Did not track MediaOpen.")}}else{if(g==="MediaPlay"){baker("play:"+u);try{w.Media.play(u,f);baker("MediaPlay Tracked!")}catch(t){baker("error: Did not track MediaPlay.");baker(t)}}else{if(g==="MediaStop"){baker("stop:"+u);try{w.Media.stop(u,f);baker("MediaStop Tracked!")}catch(s){baker("error: Did not track MediaStop.");baker(s)}}else{if(g==="MediaClose"){baker("end:"+u);try{w.Media.stop(u,f);w.Media.close(u);baker("MediaEnd Tracked!")}catch(r){baker("error: Did not track MediaEnd.");baker(r)}}}}}}catch(p){baker("error: Codeblock not found.");baker(p)}};if(!window.tmsomnixd){window.tmsomnixd={}}if(!tmsomnixd.utils){tmsomnixd.utils={}}(function(a){a.mergeObject=function(b,c,f){var d=(f)?true:false,h;for(h in c){if(c.hasOwnProperty(h)&&(d)?b.hasOwnProperty(h):true){try{if(c[h].constructor===Object){if(!b[h]){b[h]={}}b[h]=mergeObject(b[h],c[h],d)}else{b[h]=c[h]}}catch(g){b[h]=c[h]}}}return b};a.HTML5Support=(function(f){var b,d,e,c;b=(function(){try{return !!f.localStorage.getItem}catch(g){return false}})();d=!!f.postMessage;e=!!f.JSON;c=(b&&d&&e);return{hasLS:b,hasPM:d,hasJSON:e,hasRequired:c}})(window);a.isDOMReady=function(){return document.readyState==="complete"};a.addOnLoadEvent=function(b){if(typeof b!="function"){return}if(document.readyState==="complete"){b()}else{if(window.attachEvent){window.attachEvent("onload",b)}else{if(window.addEventListener){window.addEventListener("load",b,false)}else{document.addEventListener("load",b,false)}}}};a.includeScript=function(c,g){var d,e,f,b;d=document.getElementsByTagName("head").item(0);e=document.createElement("script");f=(function(h){return function(){if(typeof h==="function"){h();h=null}}})(g);e.type="text/javascript";e.src=c;if(typeof g=="function"){e.onload=f;e.onreadystatechange=function(i){var h=g,j=(i&&i.currentTarget&&i.currentTarget.readyState)?i.currentTarget.readyState:"loaded";if(j=="loaded"||j=="complete"){f()}}}d.appendChild(e);return false};a.getDomain=function(c){var b=c.split(".");if(b.length>2){c="."+b[b.length-2]+"."+b[b.length-1]}else{c=""}return c};a.createCallbackClosure=function(c,d,b){return function(){var e=Array.prototype.slice.call(arguments);if(b){if(typeof b.slice!=="function"){b=[b]}e=e.concat(b)}d.apply(c,e)}};a.writeCookie=function(b,h,d,e,j){var c=(j)?";path="+j:"/",f=(e)?";domain="+e:"",i,g=new Date();g.setDate(g.getDate()+d);i=(d)?";expires="+g.toUTCString():"";document.cookie=b+"="+h+f+c+i};a.readCookie=function(c){var d,b;if(document.cookie.length>0){d=document.cookie.indexOf(c+"=");if(d!==-1){d=d+c.length+1;b=document.cookie.indexOf(";",d);if(b===-1){b=document.cookie.length}return unescape(document.cookie.substring(d,b))}}return""}})(tmsomnixd.utils);if(!window.tmsomnixd){window.tmsomnixd={}}if(!tmsomnixd.classes){tmsomnixd.classes={}}tmsomnixd.classes.EventDispatcher=(function(){var a=function(){this.lo={}};a.prototype.addEventListener=function(b,c){if(typeof(b)!=="string"||typeof(c)!=="function"){return}if(typeof this.lo[b]==="undefined"){this.lo[b]=[]}this.lo[b].push(c)};a.prototype.removeEventListener=function(d,e){if(typeof(d)!=="string"||typeof(e)!=="function"){return}if(this.lo[d] instanceof Array){var f=this.lo[d];for(var c=0,b=f.length;c<b;c+=1){if(f[c]===e){f.splice(c,1);break}}}};a.prototype.dispatchEvent=function(e){if(!(e&&e.type)){return}if(this.lo[e.type] instanceof Array){var f=(this.lo[e.type]).slice(0);for(var c=0,b=f.length;c<b;c+=1){try{f[c].call(this,e)}catch(d){}}}};return a})();if(!window.tmsomnixd){window.tmsomnixd={}}if(!tmsomnixd.classes){tmsomnixd.classes={}}tmsomnixd.classes.Poll=(function(a){var b=function(d,c){this.defaultInterval=200;this.defaultMaxAttempts=1;this.ed=new a();this.maxAttempts=(isNaN(c))?this.defaultMaxAttempts:c;this.attempt=0;this.inprogress=false;this.delayMS=(isNaN(d))?this.defaultInterval:d;this.pollTO=-1;this.done=false};b.EVENT_CHECK="poll_check";b.EVENT_SUCCESS="poll_success";b.EVENT_FAILED="poll_failed";b.EVENT_STOPPED="poll_stopped";b.SUCCESS="success";b.FAIL="fail";b.CONTINUE="continue";b.STOP="stop";b.prototype.start=function(){if(!this.inprogress){this.inprogress=true;this.attempt=1;this.done=false;this.delay()}};b.prototype.stop=function(){if(this.inprogress){this.inprogress=false;this.done=true;clearTimeout(this.pollTO);this.setResult(b.EVENT_STOPPED)}};b.prototype.delay=function(){if(this.attempt<this.maxAttempts){var c=(function(d){return function(){d.check()}})(this);this.pollTO=setTimeout(c,this.delayMS)}else{this.de(b.EVENT_FAILED)}};b.prototype.check=function(){this.de(b.EVENT_CHECK)};b.prototype.de=function(c){var d={type:c,target:this,attempt:this.attempt,maxAttempts:this.maxAttempts};this.ed.dispatchEvent(d)};b.prototype.addEventListener=function(c,d){return this.ed.addEventListener(c,d)};b.prototype.removeEventListener=function(c,d){return this.ed.removeEventListener(c,d)};b.prototype.isInProgress=function(){return this.inprogress};b.prototype.setResult=function(c){switch(c){case b.SUCCESS:this.done=true;this.de(b.EVENT_SUCCESS);break;case b.FAIL:this.done=true;this.de(b.EVENT_FAILED);break;case b.STOP:this.done=true;this.de(b.EVENT_STOPPED);break;case b.CONTINUE:if(!this.done){this.attempt++;this.delay()}break}};return b})(tmsomnixd.classes.EventDispatcher);if(!window.tmsomnixd){window.tmsomnixd={}}if(!tmsomnixd.classes){tmsomnixd.classes={}}tmsomnixd.classes.Queue=(function(a){var b=function(){this.ed=new a();this._q=[];this.inprogress=false;this.delay=100};b.EVENT_CHANGE="queue_change";b.EVENT_UPDATE="queue_update";b.EVENT_START="queue_start";b.EVENT_COMPLETE="queue_complete";b.EVENT_STOP="queue_stop";b.prototype.enqueue=function(c){this._q.push(c);this.to=-1;this.stopped=false};b.prototype.dequeue=function(){var c=this._q.shift();return c};b.prototype.process=function(){var c;if(!this.inprogress){this.stopped=false;this.inprogress=true;this.de(b.EVENT_START,"");this._process()}};b.prototype._process=function(){var c,d;if(!this.stopped){if(this.getAmountQueued()>0){c=this.dequeue();this.de(b.EVENT_UPDATE,c);if(this.getAmountQueued()>0){d=(function(e){return function(){e._process()}})(this);this.to=setTimeout(d,this.delay)}else{this.inprogress=false;this.de(b.EVENT_COMPLETE,"")}}else{this.inprogress=false;this.de(b.EVENT_COMPLETE,"")}}};b.prototype.stop=function(){clearTimeout(this.to);this.stopped=true;this.inprogress=false;this.de(b.EVENT_STOP,"")};b.prototype.getAmountQueued=function(){return this._q.length};b.prototype.isProcessing=function(){return this.inprogress};b.prototype.addEventListener=function(c,d){return this.ed.addEventListener(c,d)};b.prototype.removeEventListener=function(c,d){return this.ed.removeEventListener(c,d)};b.prototype.de=function(c,d){var f={type:c,target:this,amountQueued:this.getAmountQueued(),data:(d)?d:""};this.ed.dispatchEvent(f)};return b})(tmsomnixd.classes.EventDispatcher);if(!window.tmsomnixd){window.tmsomnixd={}}if(!tmsomnixd.classes){tmsomnixd.classes={}}tmsomnixd.classes.H5XD=(function(b,a){var c=function(){this.SYNC_RESULTS_EVENT="xd_sync_results";this.COM_STATUS_EVENT="xd_com_status";this.SYNC_STATUS_EVENT="xd_sync_status";this.RECEIVE_XD_MESSAGE_EVENT="xd_receive_message";this.COM_NOTINITIALIZED="COM_NOTINITIALIZED";this.COM_CONNECTING="COM_CONNECTING";this.COM_CONNECTED="COM_CONNECTED";this.COM_FAILED="COM_FAILED";this.SYNC_NOTREADY="SYNC_NOTREADY";this.SYNC_READY="SYNC_READY";this.SYNC_INPROGRESS="SYNC_INPROGRESS";this.SYNC_SUCCESS="SYNC_SUCCESS";this.SYNC_FAILED="SYNC_FAILED";this.comStatus=this.COM_NOTINITIALIZED;this.ed=new b();this.comReady=false;this.comStatus=this.COM_NOTINITIALIZED;this.syncReady=false;this.syncStatus=this.SYNC_NOTREADY;this.debugTry=0;this.isListener=(window.self===window.top);this.cfg={elmID:"__tms__div__",xconID:"omnixd",height:8,width:8,xconURL:"http://localhost/Brand_Agnostic_COD/web/cod_3_0/sync.html",xconSecureURL:"https://localhost/Brand_Agnostic_COD/web/cod_3_0/sync.html"}};c.prototype.init=function(d){if(d){this.cfg=a(this.cfg,d)}this.initCom();this.initSync()};c.prototype.createListener=function(e,f,d){return function(){var g=Array.prototype.slice.call(arguments);if(d){if(typeof d.slice!=="function"){d=[d]}g=g.concat(d)}f.apply(e,g)}};c.prototype.initCom=function(){if(this.isListener){Log.info("xd::initCom => Is Listener so listen");var d=this.createListener(this,this.receiveMessage);if(window.addEventListener){window.addEventListener("message",d,false)}else{window.attachEvent("onmessage",d)}}Log.info("xd::initCom => set Connected");this.setComStatus(this.COM_CONNECTED)};c.prototype.initSync=function(){var d;d=this.createListener(this,this.sendSyncReady);Log.info("initSync => add OnLoad Event - no sync");this.addOnLoadEvent(d)};c.prototype.addOnLoadEvent=function(d){if(typeof d!="function"){return}if(document.readyState==="complete"){d()}else{if(window.attachEvent){window.attachEvent("onload",d)}else{if(window.addEventListener){window.addEventListener("load",d,false)}else{document.addEventListener("load",d,false)}}}};c.prototype.embedSyncIFrame=function(){Log.info("xd::embedSyncIFrame => start embed");var g=this.cfg,i=(window.self.location.protocol==="https:")?g.xconSecureURL:g.xconURL,k,h,f,d=g.elmID;k=document.createElement("iframe");k.setAttribute("src",i);k.setAttribute("id",g.elmID);k.style.width=g.width+"px";k.style.height=g.height+"px";k.style.position="fixed";k.style.top="8px";k.style.left="8px";k.style.overflow="hidden";k.style.display="none";k.style["z-index"]=3001;f=document.getElementsByTagName("body");if(f.length>0){try{f[0].appendChild(k)}catch(j){baker("embed failed")}}};c.prototype.dispatchStatus=function(f,d){var g={type:f,target:this,status:d};this.ed.dispatchEvent(g)};c.prototype.dispatchResults=function(d){if(d&&d.status){var f={type:this.SYNC_RESULTS_EVENT,target:this,data:d};this.ed.dispatchEvent(f)}else{}};c.prototype.dispatchReceiveMessage=function(d){if(d&&d.cmd){if(!d.args){d.args=[]}var f={type:this.RECEIVE_XD_MESSAGE_EVENT,target:this,data:d};this.ed.dispatchEvent(f)}else{}};c.prototype.parseResultObject=function(d){var e={};if(d&&d.length>0&&d[0]){e=d[0]}if(e){if(!e.status){e.status=""}if(!e.pref){e.pref="None"}}return e};c.prototype.receiveMessage=function(d){Log.info("xd::receiveMessage");Log.info(d);var j,g,i=(d)?d.data:"",f="none";if(typeof i==="string"){if(i.length>5&&i.substr(0,1)=="{"){try{j=JSON.parse(i)}catch(h){Log.info("xd::receiveMessage -> JSON Error");Log.info(h)}}}else{j=i}if(j&&j.cmd){f=j.cmd}if(j&&!j.args){j.args=[]}switch(f){case"syncPref_Results":Log.info("xd::syncPref_Results");g=this.parseResultObject(j.args);Log.info(g);this.dispatchResults(g);break;case"syncPref_Ready":Log.info("xd::syncPref_Ready");this.sendSyncReady();break;case"none":break;default:this.dispatchReceiveMessage(j)}};c.prototype.sendSyncReady=function(){this.setSyncStatus(this.SYNC_READY)};c.prototype.addEventListener=function(d,e){return this.ed.addEventListener(d,e)};c.prototype.removeEventListener=function(d,e){return this.ed.removeEventListener(d,e)};c.prototype.sync=function(e,d){Log.info("XD::sync =>"+e+", "+d);this.dispatchResults({status:"OK"});this.setSyncStatus(this.SYNC_SUCCESS)};c.prototype.sendXDMessage=function(d){this.callParent(d)};c.prototype.callParent=function(h){var f=window,j="*",d;if(window.JSON&&JSON.stringify){try{d=JSON.stringify(h)}catch(i){d=h}}try{f.parent.postMessage(d,j);while(f.parent!=window.top){f=f.parent;f.parent.postMessage(d,j)}}catch(g){Log.info("cannot call parent")}};c.prototype.setComStatus=function(d){Log.info("setComStatus status:"+d);this.comStatus=d;this.comReady=(this.comStatus==this.COM_CONNECTED)?true:false;this.dispatchStatus(this.COM_STATUS_EVENT,this.comStatus)};c.prototype.setSyncStatus=function(d){Log.info("setSyncStatus status:"+d);this.syncStatus=d;this.syncReady=(this.syncStatus!=this.SYNC_NOTREADY)?true:false;this.dispatchStatus(this.SYNC_STATUS_EVENT,this.syncStatus)};return c})(tmsomnixd.classes.EventDispatcher,tmsomnixd.utils.mergeObject);if(!window.tmsomnixd){window.tmsomnixd={}}if(!tmsomnixd.default_config){tmsomnixd.default_config={}}(function(c,b){var d,a;d=b(window.location.host);a=(window.top===window.self);c.default_config={isListener:a,cookie:{name:"s_vi",expire:3000,domain:d,path:"/",maxAttempts:6,pollInterval:250},fallback:{fbURL:"http://localhost/cod_3_0/js/2_0/cod.js",fbSecureURL:"http://localhost/cod_3_0/js/2_0/cod.js"},h5conn:{elmID:"__tms__div__",xconID:"omnixd",height:8,width:8,xconURL:"http://localhost/cod_3_0/sync.html",xconSecureURL:"https://localhost/cod_3_0/sync.html"},ns:"s",fireTag:{},MediaTrack:{playerName:"dev"},senderConnectionDelay:1500,listenerConnectionDelay:0}})(tmsomnixd,tmsomnixd.utils.getDomain);(function(K){var l={},y=false,j=false,d=false,g=(window.self===window.top),I,B,u,x,O,p,M,v,E,n,F,f,a,m;function k(){if(y){return}y=true;Log.info("sync");var q=t();E.sync(q,m)}function b(q){if(q&&q.status){Log.info("handleComStatus status:"+q.status);if(q.status==E.COM_CONNECTED||q.status==E.COM_FAILED){L()}}else{Log.warn("handleComStatus no status")}}function w(q){if(q&&q.status){Log.info("handleSyncStatus status:"+q.status);if(q.status==E.SYNC_READY||q.status==E.SYNC_FAILED){L()}}else{Log.warn("handleSyncStatus no status")}}function G(q){var R=q.data;Log.info("handleSyncResults status:"+R.status);if(R.status=="UPDATE"){j=false;B("s_vi",R.pref);N()}else{if(R.status=="CREATE_NEW"){j=true;P()}else{j=false;N()}}}function o(q){if(q&&q.data){var R=q.data;if(R&&R.cmd&&R.args){Log.info("handleXDMessage heard event with "+R.cmd);Q(R.cmd,R.args);L()}else{Log.info("handleXDMessage heard event with improperly formatted data")}}else{Log.info("handleXDMessage heard event with no data")}}function P(){if(g){if(!I&&F.getAmountQueued()>0){Log.info("preprocessQueued");var q=F.dequeue();c(q);H()}else{if(I){Log.info("preprocessQueued => do nothing - Already preproceesing queue")}if(F.getAmountQueued()>0){Log.info("preprocessQueued => do nothing - Nothing Queued")}}}else{Log.info("call parent")}}function C(R){var q=t();Log.info("prefCheck pref:"+q);if(q.length>0){R.target.setResult(v.SUCCESS)}else{R.target.setResult(v.CONTINUE)}}function J(R){if(R.type===v.EVENT_SUCCESS){Log.info("read new local pref = save to remote pref");var q=t();E.sync(q,m)}else{Log.info("cannot read local pref - just process the queue")}I.removeEventListener(v.EVENT_CHECK,C);I.removeEventListener(v.EVENT_SUCCESS,J);I.removeEventListener(v.EVENT_FAILED,J);I=null;N()}function H(){if(!I){I=new v(100,20);I.addEventListener(v.EVENT_CHECK,C);I.addEventListener(v.EVENT_SUCCESS,J);I.addEventListener(v.EVENT_FAILED,J);I.start()}}function c(T){var S,q;if(T&&T.cmd&&T.args){q=(typeof T.args==="string")?JSON.parse(T.args):T.args;S=l[T.cmd];if(typeof S==="function"){try{S.apply(window,q)}catch(R){}}}}function A(q){Log.info("handleQueueUpdate");if(g){Log.info("Listener::makeLocalCall");c(q.data)}else{Log.info("Sender::Send Message to Parent");E.sendXDMessage(q.data)}}function N(){if(F.getAmountQueued()>0){F.process()}}function Q(R,q){Log.info("addToQueue cmd:"+R);F.enqueue({cmd:R,args:q})}function L(){Log.info("initateQueueIfReady");if(E.comReady&&(!g||E.syncReady)){if(!g||(y)){if(!j){Log.info("Ready and Synced = > Process queue");N()}else{Log.info("Ready and Synced but needs new preference = > Pre-Process Queue");P()}}else{Log.info("Ready => Sync");k()}}else{Log.info("Not Ready Yet")}}function t(){return u(f.cookie.name)}function D(q){var R=f.cookie;B(R.name,q,R.expire,R.domain,R.path)}function r(){var R=Math.floor(Math.random()*100),q="_avail",S;B(q,R,f.cookie.domain);S=parseInt(u(q),10);return(R===S)}function s(R,q){Log.info((f.isListener)?"Listener":"Sender ft("+R+")");Q("fireTag",[R,q]);L()}function h(q,T,S,R){Q("MediaTrack",[q,T,S,R]);L()}function z(){M=K.classes.Queue;v=K.classes.Poll;O=K.classes.H5XD;B=K.utils.writeCookie;u=K.utils.readCookie;x=K.utils.HTML5Support;a=K.utils.includeScript}function i(){E.addEventListener(E.COM_STATUS_EVENT,b);if(f.isListener){E.addEventListener(E.RECEIVE_XD_MESSAGE_EVENT,o);E.addEventListener(E.SYNC_RESULTS_EVENT,G);E.addEventListener(E.SYNC_STATUS_EVENT,w)}E.init(n)}function e(){z();if(K.utils&&K.utils.mergeObject){K.config=K.utils.mergeObject(K.default_config,K.config);f=K.config}if(!x.hasRequired){if(f&&f.fallback&&f.fallback.fbSecureURL&&f.fallback.fbURL){var q=(window.self.location.protocol==="https:")?f.fallback.fbSecureURL:f.fallback.fbURL;a(q)}}else{E=new O();n=f.h5conn;i();g=f.isListener;F=new M();F.addEventListener(M.EVENT_UPDATE,A);l.fireTag=fireTag;l.MediaTrack=MediaTrack;window.fireTag=s;window.MediaTrack=h;window.readPreference=t;window.writePreference=D}}e()})(tmsomnixd);if(!window.omnixd_config){omnixd_config={}}if(!omnixd_config.dart){omnixd_config.dart={staticsrc:"1044889",type:"lexus764"}}var staticsrc="1044889";if(window.omnixd_config&&omnixd_config.dart&&omnixd_config.dart.staticsrc){staticsrc=omnixd_config.dart.staticsrc}var floodLightType="unknw123";if(window.omnixd_config&&omnixd_config.dart&&omnixd_config.dart.type){floodLightType=omnixd_config.dart.type}var floodlightSrc="http://fls.doubleclick.net/activityi;src=1044889;type="+floodLightType+";";function spotTag(id,dv){var tagvars="";var newVar=null;var url=null;var json;if(!window.taglist){baker("error: JSON file not included");return}try{json=taglist["F"+String(id).replace(".","X")];var dv=eval(dv);if(!json){baker("error: Included JSON file does not contain codeblock "+id);return}baker(json);var hasord=false;var hasnum=false;var hassrc=false;for(var p in json){newVar=json[p];for(var q in dv){if(json[p].indexOf(q)!=-1){if(newVar==json[p]){newVar=json[p].replace(q,dv[q])}else{newVar=newVar.replace(q,dv[q])}}}if(p=="src"){hassrc=true;if(newVar==null){newVar=staticsrc}}else{if(p=="num"){hasnum=true;if(newVar=="<rand>"){newVar=getRandomNum()}}else{if(p=="ord"){newVar="1";hasord=true}}}if(json[p]!=-1){tagvars+=";"+p+"="+newVar}}if(hassrc==false){tagvars=";src="+staticsrc+tagvars}if(hasord==false){tagvars+=";ord=1"}if(hasnum==false){tagvars+=";num="+getRandomNum()}tagvars+="?";if(tagvars!=null){baker("codeblock "+id+" found to contain:\n"+tagvars);fullUrl="http://adregion.doubleclick.net/activity"+tagvars;baker(fullUrl);writeToBody(fullUrl,"img")}else{var dynamics="";if(dv){dynamics=", with dynamic variables ";for(var q in dv){dynamics=dynamics+" "+q+":"+dv[q]+" "}}baker("error: codeblock "+id+" is set to fire"+dynamics+", but it does not exist within the included JSON file")}}catch(err){baker("error: Unknown Error with tag id "+id)}}function floodTag(id,dv){var tagvars="";var newVar=null;var url=null;var json;if(!window.taglist){baker("error: JSON file not included");return}try{json=taglist["F"+String(id).replace(".","X")];if(!json){baker("error: Included JSON file does not contain codeblock "+id);return}var dv=eval(dv);baker(json);var hasord=false;var hasnum=false;var hassrc=false;baker();for(var p in json){newVar=json[p];for(var q in dv){if(json[p].indexOf(q)!=-1){if(newVar==json[p]){newVar=json[p].replace(q,dv[q])}else{newVar=newVar.replace(q,dv[q])}}}if(p=="src"){hassrc=true;if(newVar==null){newVar=staticsrc}}else{if(p=="num"){hasnum=true;if(newVar=="<rand>"){newVar=getRandomNum()}}else{if(p=="ord"){newVar="1";hasord=true}}}if(json[p]!=-1){tagvars+=";"+p+"="+newVar}}if(hassrc==false){tagvars=";src="+staticsrc+tagvars}if(hasord==false){tagvars+=";ord=1"}if(hasnum==false){tagvars+=";num="+getRandomNum()}tagvars+="?";if(tagvars!=null){baker("codeblock "+id+" found to contain:\n"+tagvars);fullUrl="http://fls.doubleclick.net/activityi"+tagvars;baker(fullUrl);writeToBody(fullUrl,"iframe")}else{var dynamics="";if(dv){dynamics=", with dynamic variables ";for(var q in dv){dynamics=dynamics+" "+q+":"+dv[q]+" "}}baker("error: codeblock "+id+" is set to fire"+dynamics+", but it does not exist within the included JSON file")}}catch(err){baker("error: Unknown Error with tag id "+id)}}function writeToBody(a,c){var b=document.createElement(c);b.setAttribute("src",a);b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("frameborder","0");document.body.appendChild(b)}function getRandomNum(){var a=Math.random()+"";var b=a*10000000000000;return b};