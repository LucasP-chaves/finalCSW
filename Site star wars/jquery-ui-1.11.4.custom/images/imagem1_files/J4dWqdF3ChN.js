/*!CK:4213960709!*//*1448416559,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["iDXeR"]); }

__d('ControlledReferer',['URI','UserAgent','lowerFacebookDomain'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={useFacebookReferer:function(l,m,n){var o=false;function p(){if(o)return;var r=l.contentWindow.location.pathname;if(r!=='/intern/common/referer_frame.php'&&r!=='/common/referer_frame.php')return;o=true;l.contentWindow.document.body.style.margin=0;m();}var q;if(!j.isValidDocumentDomain()){q='/intern/common/referer_frame.php';}else if(i.isBrowser('Opera')){q='/common/referer_frame.php';}else if(new h(window.location.href).isSecure()){q='https://s-static.ak.facebook.com/common/referer_frame.php';}else q='http://static.ak.facebook.com/common/referer_frame.php';if(n)q+='?fb_source='+n;l.onload=p;l.src=q;},useFacebookRefererHtml:function(l,m,n){k.useFacebookReferer(l,function(){l.contentWindow.document.body.innerHTML=m;},n);}};f.exports=k;},null);
__d('TrackingPixel',['Arbiter','ControlledReferer','NonBlockingIFrame','WebSpeedExperiments'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={_iframe:undefined,loadWithNoReferrer:function(m){if(!l._iframe)if(k.non_blocking_logger){l._iframe=true;j.loadIFrame().then(function(o){l._iframe=o;i.useFacebookReferer(o,function(){h.inform('TrackingPixel/iframeIsLoaded',null,h.BEHAVIOR_PERSISTENT);},null);}).done();}else{var n=document.createElement('iframe');n.frameborder=0;n.width=n.height=1;n.style.position='absolute';n.style.top='-10px';i.useFacebookReferer(n,function(){h.inform('TrackingPixel/iframeIsLoaded',null,h.BEHAVIOR_PERSISTENT);},null);document.body.appendChild(n);l._iframe=n;}h.subscribe('TrackingPixel/iframeIsLoaded',function(){var o=l._iframe.contentWindow,p=new o.Image();p.src=m;});}};f.exports=l;},null);
__d('ExternalTrackingTag',['AsyncSignal','TrackingPixel','Event'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={listenForElementClick:function(l,m,n,o,p){j.listen(l,'click',function(){k.sendRequest(m,n,o,p);});},sendRequest:function(l,m,n,o){if(!l)return;new h('/ads/external_tracking_tag/',{href:l,tracking_tag_id:m,adgroup_id:n,ad_id:o}).send();i.loadWithNoReferrer(l);}};f.exports=k;},null);
__d('FeedAdsClickLogger',['Arbiter','AsyncRequest','Banzai','BanzaiODS','collectDataAttributes','DOM','ge','LitestandMessages','LitestandStream','Parent','TrackingNodes','ExternalTrackingTag','URI','isFacebookURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v='ssinfeed',w={},x=false,y=[];function z(){'use strict';}z.prototype.init=function(aa){'use strict';h.subscribe("ClickRefAction/new",this.onNewUserAction.bind(this));if(aa.append_tracking_data_to_links){this.appendTrackingDataToLinks();h.subscribe(o.STORIES_INSERTED,this.appendTrackingDataToLinks.bind(this));h.subscribe('FeedAdsClickLogger/refreshTrackingData',this.appendTrackingDataToLinks.bind(this),h.SUBSCRIBE_NEW);}};z.prototype.getStories=function(){'use strict';var aa=p.getStreamRoot();if(aa){return m.scry(aa,p.getStoriesSelector());}else{var ba=n('home_stream');if(ba)return m.scry(ba,'.uiStreamStory');}return [];};z.prototype.appendTrackingDataToLinks=function(){'use strict';var aa=this.getStories();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba];if(ca in y)continue;var da=ca.getAttribute('data-ft');if(!da||da.indexOf('ei')===-1&&da.indexOf('mei')===-1)continue;var ea=m.scry(ca,'a');for(var fa=0;fa<ea.length;fa++){var ga=ea[fa];if(ga.getAttribute('ajaxify')!=null)continue;if(ga.getAttribute('rel')!=null)continue;var ha=ga.getAttribute('href');if(!ha||ha.charAt(0)==='#')continue;var ia=new t(ga);if(u(ia)===false)continue;if(ia.isLinkshimURI()===true)continue;var ja=l(ga,['ft']).ft,ka=ia.getQueryData();ka.ft=ja;ka.__md__=0;ia.setQueryData(ka);ga.setAttribute('href',ia.toString());ga.setAttribute('onmousedown',"this.href = this.href.replace('__md__=0', '__md__=1');");}y.push(ca);}};z.prototype.getHref=function(aa){'use strict';return (aa.getAttribute&&(aa.getAttribute('ajaxify')||aa.getAttribute('data-endpoint'))||aa.action||aa.href);};z.prototype.sendLogRequest=function(aa,ba){'use strict';var ca=aa.ei||aa.ai;if(!ca&&aa.mei)ca=aa.mf_story_key;if(aa!==null&&typeof ca==="string"){var da=false;if(aa.tn){var ea=r.parseTrackingNodeString(aa.tn);for(var fa=0;fa<ea.length;fa++){var ga=ea[fa][0];switch(ga){case r.types.LIKE_LINK:case r.types.UNLIKE_LINK:case r.types.COMMENT:case r.types.COMMENT_LINK:case r.types.ADD_COMMENT_BOX:case r.types.MULTI_ATTACHMENT_VIDEO:return;case r.types.XBUTTON:case r.types.HIDE_LINK:case r.types.REPORT_SPAM_LINK:case r.types.HIDE_ALL_LINK:case r.types.DROPDOWN_BUTTON:case r.types.UNHIDE_LINK:return;case r.types.RELATED_SHARE_ARTICLE:case r.types.RELATED_SHARE_VIDEO:return;case r.types.ATTACHMENT:case r.types.USER_MESSAGE:da=true;break;}}}var ha=Date.now(),ia=500;aa.duplicate_click=!!w[ca]&&ha-w[ca]<ia;w[ca]=ha;if(j.isEnabled('ssinfeed')){j.post(v,aa,{delay:0,retry:j.isEnabled('ssinfeed_retry')});}else{var ja=new i('/ajax/ssinfeed/end/').setData(aa).setAllowCrossPageTransition(true).setMethod('POST');ja.send();}var ka=aa.href;if(new t(ka).isLinkshimURI()&&new t(ka).getQueryData())ka=new t(ka).getQueryData().u;if(da&&!aa.duplicate_click&&ba!==null&&ba.url&&ka&&u(new t(ka))===false){s.sendRequest(ba.url,ba.tag_id,ba.adgroup_id);k.bumpEntityKey('external_tracking_tags','request_sent');}}};z.prototype.onNewUserAction=function(aa,ba){'use strict';if(!ba.node)return;var ca=this.getHref(ba.node),da=q.byTag(ba.node,'input')||q.byTag(ba.node,'button');if(!ca&&da&&da.type=="submit"&&da.getAttribute&&da.getAttribute('data-ft'))ca="#";var ea,fa;if(ca&&ba.event&&(ba.event.type==='click'||ba.event.type==='contextmenu')){ea=l(ba.node,['ft']);ea.ft.href=ca;ea.ft.mouse_type=ba.event.type;fa=l(ba.node,['external-tracking-tags']);this.sendLogRequest(ea.ft,fa['external-tracking-tags']);}};f.exports.init=function(aa){if(x===false){new z().init(aa);x=true;}};},null);
__d('CalendarHomepageReminders',['Arbiter','UIPagelet','emptyFunction','ge'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l='EVENT_ACTION',m={register:function(){h.subscribe(l,function(){if(k('pagelet_reminders'))i.loadFromEndpoint('RemindersPagelet','pagelet_reminders');});m.register=j;}};f.exports=m;},null);
__d("XEventReminderImpressionLoggerAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/ajax\/reminder\/impression\/",{acontext:{type:"StringToStringMap",required:true},data:{type:"StringToStringMap"}});},null);
__d('EventReminderController',['Arbiter','AsyncRequest','DOM','DOMQuery','Event','Scroll','ScrollableArea','XEventReminderImpressionLoggerAsyncController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p={registerReminder:function(q,r){this._firstOpen=true;var s=q.getDialog(),t=n.getInstance(k.scry(s.getRoot(),'.uiScrollableArea')[0]),u=null;if(t){u=j.find(t.getElement(),'div.uiScrollableAreaWrap');t.subscribe('scroll',function(){return (h.inform('EventReminderDialog/scroll',{rect:u.getBoundingClientRect(),scrollTop:m.getTop(u)}));});}l.listen(q.getRoot(),'click',function(event){event.preventDefault();});s.subscribe('show',(function(){var v=o.getURIBuilder().setStringToStringMap('acontext',r).setStringToStringMap('data',{first_open:this._firstOpen}).getURI();new i(v).send();this._firstOpen=false;var w={};if(u)w={rect:u.getBoundingClientRect()};h.inform('EventReminderDialog/show',w);}).bind(this));s.subscribe('hide',function(){return h.inform('EventReminderDialog/hide');});}};f.exports=p;},null);
__d('FlexibleScrollableArea',['DataStore','DOM','DOMDimensions','Event','Parent','Run','Style','Vector','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=30,r=100;function s(t,u,v,w,x){'use strict';this._element=t;this._tight=u;this._measureFrom=v;this._minHeight=w;this._margin=x;h.set(this._element,'FlexibleScrollableArea',this);m.onLeave(this.cleanup.bind(this));this._listener=k.listen(window,'resize',p(this.poke,r,this));this.poke();}s.prototype.poke=function(){'use strict';var t=i.find(this._element,'.uiScrollableAreaBody'),u=o.getElementDimensions(t).y+j.measureElementBox(t,'height',true,true,true),v;if(this._tight){var w=this.getMaxHeight();if(u<w+q)w+=q;v=Math.max(Math.min(u,w),this._minHeight);}else v=Math.max(this.getMaxHeight(),this._minHeight);n.set(this._element,'height',v+'px');};s.prototype.getMaxHeight=function(){'use strict';if(this._measureFrom==='bottom'){var t=o.getViewportDimensions().y,u=o.getElementPosition(this._element,'viewport').y,v=t-u;return v-this._margin;}var w=o.getElementPosition(this._element,'viewport').y+o.getElementDimensions(this._element).y;return w-this._margin;};s.prototype.cleanup=function(){'use strict';this._listener&&this._listener.remove();};s.getInstance=function(t){'use strict';var u=l.byClass(t,'flexibleScrollableArea');return u?h.get(u,'FlexibleScrollableArea'):null;};f.exports=s;},null);
__d('LoadRecommendations',['Event','AsyncRequest'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={loadOnClick:function(k){h.listen(k,'click',function(){new i().setURI('/ajax/pages/reminder/recommendations').send();});}};f.exports=j;},null);
__d('ReminderStory',['AsyncRequest','Arbiter','DOMQuery','Event','FlexibleScrollableArea','LayerAutoFocus','ScrollableArea','SubscriptionsHandler','UIPagelet','getActiveElement'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();function r(s,t,u,v,w,x){'use strict';this.$ReminderStory1=false;this.$ReminderStory2=t;this.$ReminderStory3=s;k.listen(s,'click',(function(event){if(u&&j.contains(u,event.target))return;t.show();if(v)new h('/growth/reminder/logging.php').setData({context_data:v,first_click:!this.$ReminderStory1}).send();this.$ReminderStory1=true;}).bind(this));if(w)t.subscribeOnce('show',function(){p.loadFromEndpoint(w,t.getContent(),x);});t.disableBehavior(m);t.subscribe('aftershow',(function(){var y=t.getRoot(),z=j.scry(y,'#SuggestBelowInvite')[0];if(z)new h('/ajax/pages/reminder/recommendations').send();var aa=t.hide.bind(t);this.$ReminderStory4=new o();this.$ReminderStory4.addSubscriptions(k.listen(window,'resize',aa),k.listen(window,'scroll',aa));var ba=j.scry(y,'.inlineReplyTextArea');ba[0]&&ba[0].focus();var ca=j.scry(y,'.jewelItemNew'),da=[];ca.forEach(function(ha){var ia=ca[ha].getAttribute('id');if(ia&&ia.endsWith('_1_req'))da=da.concat(ia.replace('_1_req',''));});if(da.length>0)new h('/friends/requests/log_impressions').setData({ids:da.join(','),ref:'reminder_box'}).send();var ea=n.getInstance(j.scry(t.getRoot(),'.uiScrollableArea')[0]),fa=l.getInstance(j.scry(t.getRoot(),'.flexibleScrollableArea')[0]),ga=function(){if(fa)fa.poke();if(ea){ea.poke();k.fire(j.scry(t.getRoot(),'.scrollable')[0],'scroll');}};ga();i.subscribe('reflow',function(){var ha=j.scry(y,'.fbRemindersBirthdayList');if(ba&&ha)for(var ia=0;ia<ba.length;++ia)if(ba[ia]==q()&&j.contains(ha[0],ba[ia]))ga();});}).bind(this));t.subscribe('beforehide',(function(){if(this.$ReminderStory4){this.$ReminderStory4.release();this.$ReminderStory4=null;}}).bind(this));}r.prototype.getDialog=function(){'use strict';return this.$ReminderStory2;};r.prototype.getRoot=function(){'use strict';return this.$ReminderStory3;};f.exports=r;},null);