/*!CK:3900060076!*//*1447162217,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["umdUf"]); }

__d('ViewportTrackingHelper',['Event','DOMDimensions','Vector'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={getScrollListener:function(l){return h.listen(window,'scroll',l);},looseIsVisible:function(l,m){if(!l.x&&!l.y&&!l.width&&!l.height)return false;var n=j.getScrollPosition().y,o=i.getViewportDimensions().height,p=o+m-n;return l.y<p;},isVisible:function(l,m){if(!l.x&&!l.y&&!l.width&&!l.height)return false;var n=i.getViewportDimensions().height,o=Math.max(l.y,0),p=Math.min(l.y+l.height,n),q=Math.min(l.height,m);return p-o>=q;},isDescendantOf:function(l,m){if(l===m)return l;while(l&&l.parentNode){if(l.parentNode===m)return l;l=l.parentNode;}return false;}};f.exports=k;},null);
__d('ViewportTracking',['Arbiter','AsyncSignal','Banzai','BanzaiScuba','CSS','cx','CurrentUser','DOM','DOMDimensions','Event','LitestandMessages','NavigationMessage','Run','SubscriptionsHandler','UserActivity','Vector','ViewportTrackingHelper','clickRefAction','collectDataAttributes','debounce','getElementPosition','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){if(c.__markCompiled)c.__markCompiled();var da=97,ea=51,fa='vpv',ga='/feed/feed_tracking/vpv_waterfall_logging',ha=3,ia=2,ja=1,ka=0,la=1,ma=2,na=3,oa=4;function pa(){'use strict';}pa.prototype.init=function(qa){'use strict';this.useBanzai=true;this.viewportHeightRatio=qa.viewport_height_ratio?qa.viewport_height_ratio:.25;this.vpvDebug=!!qa.vpv_debug;this.vpvdDebug=!!qa.vpvd_debug;this.vpvdAnalysis=!!qa.vpvd_analysis;this.useWaterfallLogging=!!qa.waterfall_logging;this.loggedStoryIDs={};this.readStoryIDs={};this.annotatedStoryIDs={};this.minSizeToBeVisible=200;this.minFractionToBeVisibleForTimetracking=.5;this.scrollThrottlingInterval=100;this.mouseThrottlingInterval=100;this.keyboardThrottlingInterval=100;this.minTimeToReportImmediately=500;this.discardVPVDIntervalThreshold=90000;this.active_state_duration=1000;this.height_diff_to_change_state=25;this.focused_state_duration=3500;this.invalidateAllStoriesCache();this.cachedViewportHeight=p.getViewportDimensions().height;this.isTimetrackingEnabled=0;this.activeStories={};this.userInactiveLock=false;this.userActivityPollerTimeoutID=-1;this._headLoadStoryCount=0;this.getDataFromConfig(qa);if(this.isTimetrackingEnabled){this.lastMouseX=-1;this.lastMouseY=-1;this.lastStreamY=-1;this.latestStreamYChangedTimeStamp=-1;this.userFocus=ma;this.latestUserFocus=ma;this.latestUserActivity='init';this.focusedStory=null;this.latestFocusedStory=null;this.latestActiveStory=null;this.totalVPVDuration={};}this.isLoose=!!qa.is_loose;this.maxScrollPosition=0;if(qa.tracking_duration_config){this.scrollThrottlingInterval=qa.tracking_duration_config.scroll_throttling_interval;this.mouseThrottlingInterval=qa.tracking_duration_config.mouse_throttling_interval;this.keyboardThrottlingInterval=qa.tracking_duration_config.keyboard_throttling_interval;this.userActivityPollingInterval=qa.tracking_duration_config.user_activity_polling_interval;this.timeToBeConsideredInactive=qa.tracking_duration_config.time_to_be_considered_inactive;this.minFractionToBeVisibleForTimetracking=qa.tracking_duration_config.min_fraction_to_be_visible;this.minTimeToReportImmediately=qa.tracking_duration_config.min_time_to_report_immediately;this.active_state_duration=qa.tracking_duration_config.active_state_duration;this.height_diff_to_change_state=qa.tracking_duration_config.story_height_diff_to_change_state;this.focused_state_duration=qa.tracking_duration_config.focused_state_duration;this.discardVPVDIntervalThreshold=qa.tracking_duration_config.discard_vpvd_interval_threshold;}var ra,sa=aa(this.fireTimer,this.getTimeout(),this);if(this.isLoose){this.minSizeToBeVisible=0;ra=ca((function(){this.maxScrollPosition=Math.max(this.maxScrollPosition,w.getScrollPosition().y);sa();}).bind(this));}else ra=sa;this.initialStories=this.getStoriesInView();this.initialStoriesLogged=false;if(this.annotatedVPVLogging)this.initialStories.forEach(this.logAnnotatedVPV,this);if(this.useWaterfallLogging)this.getStoriesInView().forEach(function(wa){this.waterfallLogStep(wa,'100_all_stories_in_view_ignore_height',true);},this);this.vpvHeartBeatInterval=qa.vpv_heartbeat_interval;this.passVPVHeartbeatGK=qa.use_vpv_heartbeat;if(this.passVPVHeartbeatGK){this.intervalCount=1;this.fireTimerCount=1;this.storiesInView=this.initialStories?this.initialStories:this.getStoriesInView();this.vpvHeartBeatIntervalSignal=setInterval((function(){this._sendSignal('interval');}).bind(this),this.vpvHeartBeatInterval);}this.subscriptions=new u();this.subscriptions.addSubscriptions(this._getScrollListener(ra),q.listen(window,'resize',(function(){this.invalidateVisibleStoriesCache();this.cachedViewportHeight=p.getViewportDimensions().height;ra();}).bind(this)),q.listen(window,'focus',(function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,'window_focus');}).bind(this)),q.listen(window,'blur',(function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(true,'window_blur');}).bind(this)),h.subscribe(s.NAVIGATION_BEGIN,this.cleanup.bind(this)),h.subscribe('Stream/totalHeadLoadedStories',(function(wa,xa){this._headLoadStoryCount=xa.count;}).bind(this)),h.subscribe(r.STORIES_INSERTED,(function(){if(!this.initialStoriesLogged){var wa=this.getStoriesInView();wa.forEach(this.logAnnotatedVPV,this);}else ra();if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,'stories_inserted');}).bind(this)));if(this.isTimetrackingEnabled){this.updateTimeTrackingData(false,'init');var ta=ca((function(event){this.invalidateVisibleStoriesCache();this.handleScroll(event);}).bind(this),this.scrollThrottlingInterval),ua=ca((function(event){this.handleKeyboard(event);}).bind(this),this.keyboardThrottlingInterval),va=ca((function(event){this.handleMouse(event);}).bind(this),this.mouseThrottlingInterval);this.subscriptions.addSubscriptions(q.listen(window,'scroll',ta),q.listen(document.documentElement,'DOMMouseScroll',ta),q.listen(document.documentElement,'mousewheel',ta));this.subscriptions.addSubscriptions(q.listen(document.documentElement,'keydown',ua));this.subscriptions.addSubscriptions(q.listen(document.documentElement,'mouseover',va),q.listen(document.documentElement,'mousemove',va));this.subscriptions.addSubscriptions(h.subscribe('Event/stop',(function(wa,xa){this.handleMouse(xa.event);}).bind(this)));this.subscriptions.addSubscriptions(q.listen(document.documentElement,'click',(function(event){this.handleMouse(event);}).bind(this)),h.subscribe('PhotoSnowlift.OPEN',(function(){this.userFocus=na;this.handleLayers();}).bind(this)),h.subscribe('PhotoSnowlift.CLOSE',(function(){this.userFocus=la;this.focusedStory=null;this.updateTimeTrackingData(false,'snowlift_close');}).bind(this)));this._userActivityPoller();}t.onLeave(this.cleanup.bind(this));t.onUnload(this.cleanup.bind(this));};pa.prototype._getScrollListener=function(qa){'use strict';return q.listen(window,'scroll',qa);};pa.prototype.cleanup=function(){'use strict';if(this.subscriptions){this.subscriptions.release();this.subscriptions=null;}if(this.isTimetrackingEnabled){clearTimeout(this.userActivityPollerTimeoutID);this.updateTimeTrackingData(true,'cleanup');}if(this.passVPVHeartbeatGK)clearInterval(this.vpvHeartBeatIntervalSignal);if(this.annotatedVPVLogging){var qa=this.getStoriesInView();qa.forEach(this.logAnnotatedVPV,this);}this.initialStories=[];this._headLoadStoryCount=0;};pa.prototype.fireTimer=function(){'use strict';if(this.useWaterfallLogging){var qa=this.getStoriesInViewIgnoreHeight();qa.forEach(function(ra){this.waterfallLogStep(ra,'100_all_stories_in_view_ignore_height');},this);}if(!this.initialStoriesLogged){this.initialStories.forEach(this.markStoryRead,this);this.initialStoriesLogged=true;}this.storiesInView=this.getStoriesInView();this.storiesInView.forEach(this.markStoryRead,this);if(this.passVPVHeartbeatGK)this._sendSignal('fireTimer');};pa.prototype.heartBeatIsEnabled=function(){'use strict';return false;};pa.prototype.getSessionID=function(){'use strict';return null;};pa.prototype._sendSignal=function(qa){'use strict';if(!this.heartBeatIsEnabled())return;var ra=-1;if(qa=='interval'){ra=this.intervalCount++;}else if(qa=='fireTimer')ra=this.fireTimerCount++;var sa=-1,ta=-1,ua=-1;if(this.storiesInView.length>0){sa=this.getStoryID(this.storiesInView[0]);ta=this.getQueryID(this.storiesInView[0]);ua=this.getFBFeedLocations(this.storiesInView[0]);}var va=new k('vpv_heartbeat_js');va.addInteger('qid',ta);va.addInteger('uid',n.getID());va.addInteger('firststoryid',sa);va.addInteger('time',Math.round(Date.now()/1000));va.addNormal('type',qa);va.addInteger('count',ra);va.addInteger('fbfeed_location',ua);va.post();};pa.prototype._userActivityPoller=function(){'use strict';if(!this.userInactiveLock&&!v.isActive(this.timeToBeConsideredInactive)){this.userInactiveLock=true;this.userFocus=ma;this.updateTimeTrackingData(false,'user_activity_inactive');v.subscribeOnce((function(){this.userFocus=la;this.updateTimeTrackingData(false,'user_activity_active');this.userInactiveLock=false;}).bind(this));}this.userActivityPollerTimeoutID=setTimeout(this._userActivityPoller.bind(this),this.userActivityPollingInterval);};pa.prototype.getQueryID=function(qa){'use strict';return -1;};pa.prototype.getFBFeedLocations=function(qa){'use strict';return -1;};pa.prototype.getFBFeedInsertionPosition=function(qa){'use strict';return -1;};pa.prototype.createVPVDTimer=function(qa){'use strict';var ra=document.createElement("Label");ra.setAttribute("for",qa);ra.setAttribute("class",'vpvd_debug_timer');return ra;};pa.prototype.updateVPVDTimer=function(qa){'use strict';var ra=this.activeStories[qa].story,sa=o.scry(ra,'.vpvd_debug_timer');if(!sa.length){sa=[this.createVPVDTimer(ra),this.createVPVDTimer(ra)];var ta=o.scry(ra,'.UFIRow');if(ta.length&&ta[ta.length-1].clientWidth>0){ta[ta.length-1].appendChild(sa[0]);}else ra.appendChild(sa[0]);ra.insertBefore(sa[1],ra.firstChild);}var ua=this.totalVPVDuration[qa],va=Math.floor(ua/1000)+'.'+Math.floor(ua%1000/100);o.setContent(sa[0],va);o.setContent(sa[1],va);};pa.prototype.updateVPVDTimers=function(){'use strict';for(var qa in this.activeStories)if(this.activeStories.hasOwnProperty(qa))this.updateVPVDTimer(qa);};pa.prototype.logVpvdAnalysis=function(qa,ra,sa,ta,ua,va){'use strict';var wa=new k('vpv_duration');wa.addDenorm('qid',this.getQueryID(this.activeStories[qa].story));wa.addDenorm('uid',n.getID());wa.addDenorm('vsid',qa);wa.addInteger('time',Math.round(Date.now()/1000));wa.addInteger('duration',ta);wa.addInteger('total_duration',ua);wa.addNormal('story_state',this.activeStories[qa].state);wa.addNormal('is_active_state',sa);wa.addNormal('num_visible_stories',this.numVisibleStories);wa.addInteger('story_height',this.activeStories[qa].story_height);wa.addInteger('story_visible_height',this.activeStories[qa].height);wa.addInteger('state_visible_height',va);wa.addInteger('total_visible_height',this.totalVisibleHeight);wa.addInteger('total_height',this.totalHeight);wa.addNormal('user_focus',this.latestUserFocus);wa.addNormal('next_user_focus',this.userFocus);wa.addInteger('vpvd',ra);wa.addInteger('accumulated_vpvd',this.activeStories[qa].vpvd);wa.addNormal('user_activity',this.latestUserActivity);wa.addNormal('next_user_activity',this.userActivity);wa.addInteger('story_position_y',this.activeStories[qa].y);wa.addInteger('feed_insertion_position',this.getFBFeedInsertionPosition(this.activeStories[qa].story));wa.addNormal('visible_position',this.activeStories[qa].visible_position);wa.addNormal('is_focused_story',this.activeStories[qa].is_focused);wa.post();};pa.prototype.shouldDiscardStory=function(qa){'use strict';return this.activeStories[qa].height!=this.activeStories[qa].story_height&&this.activeStories[qa].height<this.totalHeight/2;};pa.prototype.calculateTotalHeight=function(){'use strict';this.totalHeight=0;for(var qa in this.activeStories)if(this.activeStories.hasOwnProperty(qa))this.totalHeight+=this.activeStories[qa].height;};pa.prototype.updateVPVDurations=function(qa){'use strict';if(this.latestUserFocus===ma||qa-this.latestTimeTrackingTimestamp>this.discardVPVDIntervalThreshold)return;var ra={1:0,2:0,3:0},sa=qa-this.latestTimeTrackingTimestamp>=this.focused_state_duration;this.totalVisibleHeight=0;for(var ta in this.activeStories)if(this.activeStories.hasOwnProperty(ta))if(!(this.latestUserFocus===la&&sa&&this.shouldDiscardStory(ta))){ra[this.activeStories[ta].state]+=this.activeStories[ta].height;this.totalVisibleHeight+=this.activeStories[ta].height;}var ua=0,va=qa-this.latestTimeTrackingTimestamp;if(this.latestUserFocus===la){va=ra[ha]>0?this.focused_state_duration:this.active_state_duration;va=Math.min(va,qa-this.latestTimeTrackingTimestamp);ua=qa-this.latestTimeTrackingTimestamp-va;}var wa=0,xa=ha;for(var ya=ha;ya>=ja;ya--)if(ra[ya]>0){wa=ra[ya];xa=ya;break;}var za=ra[ha]+ra[ia]+ra[ja],ab=0;for(ta in this.activeStories)if(this.activeStories.hasOwnProperty(ta)){if(this.latestUserFocus===la&&sa&&this.shouldDiscardStory(ta))continue;if(wa>0&&this.activeStories[ta].state>=xa){ab=va*(this.activeStories[ta].height/wa);if(this.vpvdAnalysis&&va>0)this.logVpvdAnalysis(ta,ab,true,va,va+ua,wa);this.activeStories[ta].vpvd+=ab;this.totalVPVDuration[ta]+=ab;}if(za>0){ab=ua*(this.activeStories[ta].height/za);if(this.vpvdAnalysis&&ua>0)this.logVpvdAnalysis(ta,ab,false,ua,va+ua,za);this.activeStories[ta].vpvd+=ab;this.totalVPVDuration[ta]+=ab;}}};pa.prototype.updateActiveStory=function(qa,ra,sa,ta){'use strict';this.activeStories[qa].state=ra;this.activeStories[qa].ts=sa;this.activeStories[qa].height_snapshot=ta[qa].height;this.activeStories[qa].is_focused=this.focusedStory===ta[qa].story;this.activeStories[qa].story_height=ta[qa].story_height;if(this.vpvdAnalysis){this.activeStories[qa].visible_position=ta[qa].visible_position;this.activeStories[qa].y=ta[qa].y;}};pa.prototype.updateActiveStories=function(qa,ra){'use strict';for(var sa in qa)if(qa.hasOwnProperty(sa))if(sa in this.activeStories){this.activeStories[sa].height=qa[sa].height;var ta=qa[sa].height-this.activeStories[sa].height_snapshot;if(this.focusedStory===qa[sa].story){this.updateActiveStory(sa,ha,ra,qa);}else if(ta<=-this.height_diff_to_change_state){this.updateActiveStory(sa,this.shouldDiscardStory(sa)?ka:ja,ra,qa);}else if(ta>=this.height_diff_to_change_state||this.activeStories[sa].is_focused||this.activeStories[sa].height===this.activeStories[sa].story_height)this.updateActiveStory(sa,ia,ra,qa);}else{this.activeStories[sa]={evp_ts:ra,story:qa[sa].story,height:qa[sa].height,vpvd:0};if(!this.totalVPVDuration[sa])this.totalVPVDuration[sa]=0;this.updateActiveStory(sa,ia,ra,qa);}};pa.prototype.recordVPVDurations=function(qa,ra){'use strict';for(var sa in this.activeStories)if(this.activeStories.hasOwnProperty(sa))if(ra||!(sa in qa)){if(this.activeStories[sa].vpvd>this.focused_state_duration||this.activeStories[sa].vpvd===this.totalVPVDuration[sa])this.recordTimeStoryWasInView(this.activeStories[sa]);delete this.activeStories[sa];}};pa.prototype.updateTimeTrackingData=function(qa,ra){'use strict';this.userActivity=ra;if(!this.activeStories)this.activeStories={};var sa=Date.now();if(!this.latestTimeTrackingTimestamp)this.latestTimeTrackingTimestamp=sa;var ta=this.getVisibleStoriesFromCache();this.calculateTotalHeight();this.updateVPVDurations(sa);this.updateActiveStories(ta,sa);if(this.vpvdDebug)this.updateVPVDTimers();this.recordVPVDurations(ta,qa);if(qa){this.latestTimeTrackingTimestamp=0;}else this.latestTimeTrackingTimestamp=sa;this.latestUserActivity=this.userActivity;this.latestUserFocus=this.userFocus;if(this.focusedStory)this.latestActiveStory=this.focusedStory;this.latestFocusedStory=this.focusedStory;this.focusedStory=null;};pa.prototype.needsToUpdateTimeTrackingData=function(){'use strict';return !(this.latestUserFocus===this.userFocus&&(this.userFocus===ma||this.userFocus===la&&!this.latestFocusedStory&&!this.focusedStory));};pa.prototype.getfocusedStory=function(qa){'use strict';var ra=this.getVisibleStoriesFromCache();for(var sa in ra)if(ra.hasOwnProperty(sa))if(x.isDescendantOf(qa,ra[sa].story))return ra[sa].story;return null;};pa.prototype.handleLayers=function(){'use strict';if(this.userFocus===na||this.userFocus===oa){this.focusedStory=this.latestActiveStory;this.updateTimeTrackingData(false,'media_layer');return true;}return false;};pa.prototype.didInteractWithStream=function(qa){'use strict';return x.isDescendantOf(qa,this.getStream())||x.isDescendantOf(this.getStream(),qa);};pa.prototype.handleScroll=function(event){'use strict';if(this.handleLayers())return;var qa=Date.now(),ra=ba(this.getStream()).y;if(ra!=this.lastStreamY||qa-this.latestStreamYChangedTimeStamp<2.5*this.scrollThrottlingInterval||this.didInteractWithStream(event.target)){this.latestStreamYChangedTimeStamp=qa;this.userFocus=la;}else this.userFocus=ma;this.lastStreamY=ra;if(this.userFocus===la||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,'scroll');};pa.prototype.handleKeyboard=function(event){'use strict';if(this.handleLayers())return;if(this.didInteractWithStream(event.target)){this.userFocus=la;this.focusedStory=this.getfocusedStory(event.target);}else if(l.hasClass(event.target,'shareInput')){this.userFocus=la;this.focusedStory=this.latestActiveStory;}else this.userFocus=ma;if(this.userFocus===la||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,'keyboard');};pa.prototype.handleMouse=function(event){'use strict';if(this.handleLayers())return;if(event.type!='click'&&event.clientX===this.lastMouseX&&event.clientY===this.lastMouseY)return;if(event.type==='click')this.invalidateVisibleStoriesCache();if(this.didInteractWithStream(event.target)){this.userFocus=la;this.focusedStory=this.getfocusedStory(event.target);}else this.userFocus=ma;this.lastMouseX=event.clientX;this.lastMouseY=event.clientY;if(this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,event.type);};pa.prototype.getStoriesInView=function(){'use strict';var qa=this.getAllStories(),ra=[],sa=false;for(var ta=0;ta<qa.length;ta++){var ua=qa[ta],va=this.getStoryID(ua);if(this.hasBeenVisible(va))continue;if(this.isVisible(ua)){if(ua.getAttribute('data-insertion-position')===null)ua.setAttribute('data-insertion-position',ta-this._headLoadStoryCount);ra.push(ua);sa=true;}else if(sa)break;}return ra;};pa.prototype.getStoriesInViewIgnoreHeight=function(){'use strict';var qa=this.getAllStories(),ra=false,sa=[];for(var ta=0;ta<qa.length;ta++){var ua=qa[ta];if(this.isVisible(ua,false,0)){sa.push(ua);ra=true;}else if(ra)break;}return sa;};pa.prototype.getAllStoriesFromCache=function(){'use strict';if(this.cachedAllStories===null)this.cachedAllStories=this.getAllStories();return this.cachedAllStories;};pa.prototype.invalidateAllStoriesCache=function(){'use strict';this.cachedAllStories=null;this.invalidateVisibleStoriesCache();};pa.prototype.getVisibleStoriesFromCache=function(){'use strict';if(this.cachedVisibleStories===null)this.cachedVisibleStories=this.getAllStoriesInView();return this.cachedVisibleStories;};pa.prototype.invalidateVisibleStoriesCache=function(){'use strict';this.cachedVisibleStories=null;};pa.prototype.getAllStoriesInView=function(){'use strict';var qa=this.getAllStoriesFromCache(),ra={},sa=false,ta=0,ua=qa.length,va=1,wa=qa.length;if(this._indexOfLastVisibleStoryOnPreviousPass>ua/2){ta=ua-1;ua=-1;va=-va;}for(var xa=ta;xa!=ua;xa+=va){var ya=qa[xa],za=this.getHeightIfVisible(ya,false,Math.min(this.minSizeToBeVisible,this.minFractionToBeVisibleForTimetracking*p.getElementDimensions(ya).height));if(za>0||ya===this.focusedStory){if(ya.getAttribute('data-insertion-position')===null)ya.setAttribute('data-insertion-position',xa-this._headLoadStoryCount);var ab=this.getStoryID(ya);ra[ab]={story:ya,height:za,story_height:p.getElementDimensions(ya).height};sa=true;if(this.vpvdAnalysis){ra[ab].y=ba(ya).y;ra[ab].visible_position=xa;wa=Math.min(wa,xa);}}else if(sa){this._indexOfLastVisibleStoryOnPreviousPass=xa-va;break;}}if(this.vpvdAnalysis){this.numVisibleStories=0;for(ab in ra)if(ra.hasOwnProperty(ab)){ra[ab].visible_position-=wa;this.numVisibleStories++;}}return ra;};pa.prototype.getTimetrackingDataToLog=function(qa){'use strict';var ra={evt:da,vpvd_start_timestamp:qa.evp_ts,vpvd_time_delta:Math.round(qa.vpvd),story_height:p.getElementDimensions(qa.story).height,viewport_height:this.cachedViewportHeight};return {ft:ra};};pa.prototype.recordTimeStoryWasInView=function(qa){'use strict';if(this.isTimetrackingEnabled&&qa.vpvd>0){var ra=this.getTimetrackingDataToLog(qa),sa=z(qa.story,['ft']);Object.assign(ra.ft,sa.ft);var ta=!!sa.ft.ei&&ra.ft.vpvd_time_delta>this.minTimeToReportImmediately;delete ra.ei;this.sendDataToLog(qa.story,ra,ta);}};pa.prototype.hasBeenVisible=function(qa){'use strict';return qa in this.readStoryIDs;};pa.prototype.isVisible=function(qa,ra,sa){'use strict';return this.getHeightIfVisible(qa,ra,sa)>0;};pa.prototype.getHeightIfVisible=function(qa,ra,sa){'use strict';if(ra===undefined)ra=this.isLoose;if(sa===undefined)sa=this.minSizeToBeVisible;var ta=w.getScrollPosition().y,ua=p.getViewportDimensions().height,va=ba(qa),wa=p.getElementDimensions(qa),xa=ua+this.maxScrollPosition-ta;if(!va.x&&!va.y&&!wa.x&&!wa.y)return false;if(ra&&va.y<xa)return true;var ya=Math.max(va.y,0),za=Math.min(va.y+wa.height,ua),ab=Math.min(wa.height,sa);return za-ya>=ab?za-ya:0;};pa.prototype.getHeightInViewport=function(qa){'use strict';var ra=p.getViewportDimensions().height,sa=ba(qa),ta=p.getElementDimensions(qa);if(!sa.x&&!sa.y&&!ta.x&&!ta.y)return false;var ua=Math.max(sa.y,0),va=Math.min(sa.y+ta.height,ra);return va-ua;};pa.prototype.sendDataToLog=function(qa,ra,sa){'use strict';if(this.useBanzai){var ta={};if(sa)ta.delay=3000;var ua=this.getSessionID();if(ua)ra.ft.session_id=ua;if(this.useWaterfallLogging&&ra.ft.evt==ea){ra.ft.should_waterfall_logging=1;ra.ft['interface']='www';var va=!this.initialStoriesLogged;this.waterfallLogStep(qa,'200_sent_to_banzai',va);}j.post('feed_tracking',ra,ta);}else y(fa,qa,null,'FORCE',ra);};pa.prototype.waterfallLogStep=function(qa,ra,sa){'use strict';var ta=this.getStoryID(qa);if(this.loggedStoryIDs[ra]&&this.loggedStoryIDs[ra][ta])return;var ua=this.getWaterfallData(qa,ra,sa);if(!ua.qid)return;new i(ga,ua).send();if(!this.loggedStoryIDs[ra])this.loggedStoryIDs[ra]={};this.loggedStoryIDs[ra][ta]=true;};pa.prototype.getWaterfallData=function(qa,ra,sa){'use strict';var ta=this._getDataToLogImpl(qa),ua=z(qa,['ft']);Object.assign(ta.ft,ua.ft);var va=ta.ft;va.height_in_viewport=this.getHeightInViewport(qa);va.step=ra;va.is_initial_story=sa?1:0;va['interface']='www';return va;};pa.prototype.addSeenClassToStory=function(qa){'use strict';l.addClass(qa,"_50nb");l.removeClass(qa,"_50mx");l.removeClass(qa,"_2z-5");};pa.prototype.markStoryRead=function(qa){'use strict';var ra=this.getStoryID(qa);if(!ra||this.hasBeenVisible(ra))return;this.readStoryIDs[ra]=true;this.annotatedStoryIDs[ra]=true;var sa=this._getDataToLogImpl(qa),ta=z(qa,['ft']);Object.assign(sa.ft,ta.ft);delete sa.ei;this.sendDataToLog(qa,sa,false);l.addClass(qa,"_x72");if(this.vpvDebug)l.addClass(qa,"_5m7s");this.addSeenClassToStory(qa);};pa.prototype.logAnnotatedVPV=function(qa){'use strict';var ra=this.getStoryID(qa);if(!ra||ra in this.annotatedStoryIDs)return;this.annotatedStoryIDs[ra]=true;var sa=this._getDataToLogImpl(qa),ta=z(qa,['ft']);Object.assign(sa.ft,ta.ft);delete sa.ei;sa.ft.vpv_ft_only=1;this.sendDataToLog(qa,sa,false);};pa.prototype._getDataToLogImpl=function(qa){'use strict';var ra=this.getDataToLog(qa);if(!ra.ft)ra.ft={};return ra;};f.exports=pa;},null);
__d('collectSubtreeData',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k,l,m,n){if(j.offsetWidth===0&&j.offsetHeight===0)return n;var o={};if(j.getAttribute)for(s=0;s<k.length;s++){u=k[s];var p=j.getAttribute(l[u]);if(p){o[u]={};var q=JSON.parse(p);for(var r in m)if(q[r]!==undefined){o[u][r]=true;if(n[u]===undefined)n[u]={};if(n[u][r]===undefined)n[u][r]=[];if(m[r].length>0)n[u][r].push(m[r]);n[u][r].push('('+q[r]);}}}for(var s=0;s<j.childNodes.length;s++){var t=j.childNodes[s];h(t,k,l,m,n);}for(var u in o)for(var v in o[u]){var w=n[u][v][n[u][v].length-1];if(w.length>0&&w.charAt(0)=='('){n[u][v][n[u][v].length-1]=w.substr(1);}else n[u][v].push(')');}return n;}function i(j,k){var l={};for(var m=0;m<k.length;++m)l[k[m]]='data-'+k[m];var n={tn:"","tn-debug":","},o={};h(j,k,l,n,o);for(var p in o)for(var q in o[p])o[p][q]=o[p][q].join('');return o;}f.exports=i;},null);
__d('recordTNTreeData',['collectSubtreeData'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){var l={},m=h(j,['ft']);for(var n in m.ft){l[n+'_tree']=m.ft[n];if(n==='tn-debug')j.setAttribute('tn-debug_subtree',m.ft[n]);}l.evt_value=j.offsetHeight;if(k)l.offset=Math.max(0,j.offsetTop-k.offsetTop);return l;}f.exports=i;},null);
__d('StreamViewportTracking',['DOM','DOMDimensions','ViewportTracking','ge','recordTNTreeData'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n,o=51;m=babelHelpers.inherits(p,j);n=m&&m.prototype;p.prototype.init=function(q,r){'use strict';if(r)this.$StreamViewportTracking1=r;n.init.call(this,q);this.initSubscriptions();};p.prototype.initSubscriptions=function(){'use strict';};p.prototype.getDataFromConfig=function(q){'use strict';this.isTimetrackingEnabled=1;this.timeout=q.record_delay;};p.prototype.getTimeout=function(){'use strict';return this.timeout;};p.prototype.getStorySelector=function(){'use strict';return '.uiStreamStory';};p.prototype.getAllStories=function(){'use strict';var q=h.scry(this.getStream(),this.getStorySelector());return q.filter(function(r){return r.getAttribute('data-ft');});};p.prototype.getStoryID=function(q){'use strict';var r=JSON.parse(q.getAttribute('data-ft'));return r.mf_story_key;};p.prototype.getQueryID=function(q){'use strict';var r=JSON.parse(q.getAttribute('data-ft'));return r.qid;};p.prototype.getFBFeedLocations=function(q){'use strict';var r=JSON.parse(q.getAttribute('data-ft'));return r.fbfeed_location;};p.prototype.getFBFeedInsertionPosition=function(q){'use strict';var r=JSON.parse(q.getAttribute('data-ft'));return r.insertion_position;};p.prototype.getDataToLog=function(q){'use strict';var r={},s=this.getStream();r=l(q,s);var t=q.getAttribute('data-insertion-position');if(t!==null)r.inspos=t;r.evt=o;r.vpv_time=Math.round(Date.now()/1000);var u=h.scry(q,".fbStoryAttachmentImage")[0];if(u){var v=i.getElementDimensions(u);r.story_image_height=v.height;r.story_image_width=v.width;}return {ft:r};};p.prototype.getStream=function(){'use strict';if(this.$StreamViewportTracking1)return this.$StreamViewportTracking1;return k('home_stream');};p.prototype.heartBeatIsEnabled=function(){'use strict';return true;};p.init=function(q,r){'use strict';p.instance=new p();p.instance.init(q,r);};p.getInstance=function(){'use strict';return p.instance;};function p(){'use strict';m.apply(this,arguments);}f.exports=p;},null);