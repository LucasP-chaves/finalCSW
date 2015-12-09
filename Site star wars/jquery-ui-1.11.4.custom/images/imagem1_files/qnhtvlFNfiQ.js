/*!CK:1546369361!*//*1448491095,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YfOwR"]); }

__d('ChatFileUploader.react',['ChatFileUploaderMixin','InlineBlock.react','MercuryConfig','React','ReactDOM','cx','createCancelableFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=k.createClass({displayName:'ChatFileUploader',mixins:[h],getDefaultProps:function(){return {uploaderIsFromHigherLevel:true};},shouldComponentUpdate:function(){return false;},componentDidMount:function(){this._uploaderCallback=n(this.setUpSubscriptionsHandler);this.props.initFileUploaderFn(l.findDOMNode(this.refs.form),l.findDOMNode(this.refs.input),l.findDOMNode(this.refs.attachID)).then(this._uploaderCallback);},componentWillUnmount:function(){if(this._uploaderCallback)this._uploaderCallback.cancel();},render:function(){return (k.createElement('form',{ref:'form',action:j.upload_url,method:'post'},k.createElement('input',{type:'hidden',ref:'attachID',name:'attach_id'}),k.createElement(i,{className:"_m _4q60 itemLabel"},k.createElement('input',{type:'file',className:"_n",name:'attachment[]',multiple:'true',ref:'input'}),k.createElement('span',{className:"_4q61 itemAnchor"},o._("Adicionar arquivos...")))));}});f.exports=p;},null);
__d('NotificationSettingsDialog',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={show:function(i){e(['MercuryThreadActions'],function(j){j.get().openNotificationSettings(i);});}};f.exports=h;},null);
__d('ChatTabMenu.react',['AsyncDialog','AsyncRequest','Bootloader','ChatConfig','ChatFileUploader.react','ChatPrivacyActionController','ChatTabActions','Dialog','MercuryConfig','MercuryIDs','MercuryLogMessageType','MercuryMessengerBlockingUtils','MercuryParticipants','MercuryThreadMuter','MercuryViewer','MercurySourceType','NFXChatHeadGK','Promise','ReactComponentWithPureRenderMixin','React','PopoverMenu.react','ReactMenu','MenuSeparator.react','RTCConfig','Run','Toggler','TrackingNodes','URI','WebMessengerDeleteThreadDialog','WebMessengerThreadPermalinks','XNFXStartForMessageThreadController','WorkModeConfig','WorkFileUploadsGating','NotificationSettingsDialog','MessengerNotificationSettingsGKModule','XEventCreateDialogController','cx','fbt','goURI','MercuryMessageObject','MercuryThreadIDMap','MercuryThreadActions','MercuryThreads','MercuryMessageActions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta){'use strict';if(c.__markCompiled)c.__markCompiled();var ua=c('MercuryMessageObject').get(),va=c('MercuryThreadIDMap').get(),wa=c('MercuryThreadActions').get(),xa=c('MercuryThreads').get(),ya=c('MercuryMessageActions').get(),za=ca.Item,ab=aa.PropTypes,bb=aa.createClass({displayName:'ChatTabMenu',_privacyActionController:undefined,_fileUploaderPromise:undefined,mixins:[z],propTypes:{attachmentsShelf:ab.object,nameConversationFunc:ab.func,isGroupChat:ab.bool,isEmptyChat:ab.bool,hasMessageBlocked:ab.bool,hasSecretModeOn:ab.bool,onFileUploaderMounted:ab.func,onSubmit:ab.func,onUpdateAttachmentsShelf:ab.func,onUploadFinished:ab.func,otherUserID:ab.string,sheetController:ab.object.isRequired,showAddFriend:ab.func,threadID:ab.string.isRequired},getInitialState:function(){return {url:null,privacyText:'',muted:false};},getDefaultProps:function(){return {show:true,isMuted:false,hasSwitchToWork:false};},componentDidMount:function(){ka.getThreadURI(this.props.threadID,(function(cb){this.isMounted()&&this.setState({url:cb});}).bind(this));if(!this.props.isGroupChat)this._privacyActionController=new m(q.getUserIDFromThreadID(this.props.threadID),(function(cb){return this._updatePrivacyLink(cb);}).bind(this));},componentDidUpdate:function(cb,db){if(this.props.isMuted&&!cb.isMuted){this.props.sheetController.openThreadIsMutedTabSheet();}else if(!this.props.isMuted&&cb.isMuted)this.props.sheetController.closeThreadIsMutedTabSheet();if(this.props.hasMessageBlocked){this.props.sheetController.openMessageBlockedTabSheet();}else this.props.sheetController.closeMessageBlockedTabSheet();if(this.props.hasSecretModeOn){this.props.sheetController.openSecretModeSheet();}else this.props.sheetController.closeSecretModeSheet();},_initFileUploader:function(cb,db,eb){if(this._fileUploaderPromise){this._fileUploaderPromise.then(function(fb){fb.updateElements(cb,db,eb);});}else this._fileUploaderPromise=new y((function(fb,gb){fa.onAfterLoad((function(){j.loadModules(["MercuryFileUploader"],(function(hb){var ib=new hb(this.props.attachmentsShelf,cb,db,eb);fb(ib);}).bind(this));}).bind(this));}).bind(this));return this._fileUploaderPromise;},componentWillUnmount:function(){this._privacyActionController&&this._privacyActionController.destroy();this._fileUploaderPromise&&this._fileUploaderPromise.then(function(cb){cb.destroy();});},_unmuteThread:function(){wa.unmute(this.props.threadID);ga.hide();},_togglePrivacyFunc:function(){this._privacyActionController&&this._privacyActionController.togglePrivacy();},_renderFileUploader:function(){return (aa.createElement(za,{className:"_37_x"},aa.createElement(l,{onFileUploaderMounted:this.props.onFileUploaderMounted,attachmentsShelf:this.props.attachmentsShelf,initFileUploaderFn:this._initFileUploader,onUploadFinished:this.props.onUploadFinished,onUpdateAttachmentsShelf:this.props.onUpdateAttachmentsShelf,onSubmit:this.props.onSubmit})));},_renderOpenFullConversation:function(){if(this.state.url)return (aa.createElement(za,{onclick:(function(){return ta(this.state.url);}).bind(this)},sa._("Ver toda a conversa")));return null;},_renderAddFriend:function(){if(!this.props.showAddFriend)return null;var cb=ma.is_work_user?sa._("Adicione colegas de trabalho ao bate-papo..."):sa._("Adicionar amigos ao bate-papo...");return (aa.createElement(za,{onclick:this.props.showAddFriend},cb));},_renderTogglePrivacy:function(){if(!this.props.isGroupChat&&this.state.privacyText)return (aa.createElement(za,{onclick:this._togglePrivacyFunc},this.state.privacyText));return null;},_renderNotificationSettings:function(){if(pa.inGK){var cb=oa.show.bind(null,this.props.threadID);return (aa.createElement(za,{onclick:cb},sa._("Configura\u00e7\u00f5es de notifica\u00e7\u00e3o...")));}return null;},_renderMuteConversation:function(){if(!this.props.isMuted){var cb=u.showMuteChangeDialog.bind(null,this.props.threadID,null);return (aa.createElement(za,{onclick:cb},sa._("Silenciar a conversa...")));}else return (aa.createElement(za,{onclick:this._unmuteThread},sa._("Reativar o som da conversa")));},_renderDeleteConversation:function(){return (aa.createElement(za,{onclick:this._deleteConversation},sa._("Excluir conversa")));},_renderReportSpam:function(){if(!this.props.isGroupChat)return (aa.createElement(za,{onclick:this._reportSpamClicked},sa._("Denunciar como spam ou abuso...")));return null;},_manageMessagesItem:function(){if(p.WWWMessengerManageButtonGK&&this.props.isBusinessEnabled)return (aa.createElement(za,{onclick:this._messageBlockedClicked},sa._("Manage Messages...")));return null;},_blockMessagesItem:function(){if(this.props.isBusinessEnabled&&p.WWWMessengerManageButtonGK)return null;if(!this.props.isGroupChat&&s.gk_result&&!this.props.hasMessageBlocked)return (aa.createElement(za,{onclick:this._messageBlockedClicked},sa._("Bloquear mensagens...")));if(!this.props.isMultichat&&s.gk_result&&this.props.hasMessageBlocked)return (aa.createElement(za,{onclick:this._messageUnblockedClicked},sa._("Desbloquear mensagens...")));return null;},_renderCreateGroup:function(){if(this.props.isGroupChat)return (aa.createElement(za,{onclick:this._createGroupClicked},sa._("Create Group")));return null;},_renderCreateEvent:function(){if(this.props.isGroupChat&&k.get('events_group_chat_item_test'))return (aa.createElement(za,{onclick:this._createEventClicked},sa._("Criar evento")));return null;},_renderSwitchToWork:function(){if(this.props.hasSwitchToWork)return (aa.createElement(za,{onclick:this._switchToWorkUserClicked},sa._("Mover para a conta profissional")));return null;},_renderConversationName:function(){if(this.props.isGroupChat&&this.state.url)return (aa.createElement(za,{onclick:this.props.nameConversationFunc},sa._("Editar nome da conversa")));return null;},_renderLeaveConversation:function(){if(this.props.isGroupChat)return (aa.createElement(za,{onclick:this._unsubscribeLinkClicked},sa._("Sair da conversa...")));return null;},_renderEnableDesktopNotifications:function(){if(p.DesktopNotificationsGK&&"Notification" in window&&window.Notification.permission!=="granted")return (aa.createElement(za,{onclick:this._enableDesktopNotif},sa._("Enable Desktop Notifications")));return null;},_renderPeopleList:function(){if(this.props.isGroupChat&&this.state.url)return (aa.createElement(za,{onclick:this._showParticipants},sa._("Editar participantes...")));return null;},_renderToggleSecretMode:function(){if(!k.get('enable_secret_mode'))return null;if(this.props.hasSecretModeOn){return (aa.createElement(za,{onclick:this._secretModeTurnOff},sa._("Turn off disappearing messages")));}else return (aa.createElement(za,{onclick:this._secretModeTurnOn},sa._("Turn On Disappearing Messages")));},_renderShareScreenContent:function(){if(ea.CollaborationScreenSharingGK&&!this.props.isGroupChat)return (aa.createElement(za,{onclick:this._shareScreenContentClicked},sa._("Share Screen Content...")));return null;},_shareScreenContentClicked:function(){j.loadModules(["FBRTCScreenSharingController"],(function(cb){var db=q.getUserIDFromThreadID(this.props.threadID),eb=new cb(parseInt(db,10),null,true);eb.initializeAsSender();eb.toggleScreenSharing();}).bind(this));},render:function(){var cb=this._renderReportSpam(),db=this._blockMessagesItem(),eb=this._manageMessagesItem(),fb=this._renderCreateGroup(),gb=this._renderCreateEvent(),hb=aa.createElement(ca,{className:"chatReact"+(!this.props.show?' '+"hidden_elem":'')},this._renderOpenFullConversation(),na.canUploadFiles?this._renderFileUploader():null,this._renderToggleSecretMode(),this._renderAddFriend(),this._renderShareScreenContent(),this._renderTogglePrivacy(),this._renderConversationName(),this._renderPeopleList(),aa.createElement(da,null),this._renderNotificationSettings(),this._renderSwitchToWork(),this._renderMuteConversation(),this._renderDeleteConversation(),this._renderLeaveConversation(),cb||db||eb?aa.createElement(da,null):null,db,eb,cb,fb||gb?aa.createElement(da,null):null,fb,gb,this._renderEnableDesktopNotifications()),ib=sa._("Op\u00e7\u00f5es"),jb=ha.getTrackingInfo(ha.types.DROPDOWN_BUTTON);return (aa.createElement(ba,{menu:hb},aa.createElement('a',{'data-ft':jb,'data-hover':'tooltip','aria-label':ib,'data-tooltip-alignh':'center',className:"button"+(this.props.isEmptyChat?' '+"hidden_elem":''),tabIndex:'0'})));},getFileUploaderPromise:function(){return this._fileUploaderPromise;},_updatePrivacyLink:function(cb){var db;if(cb==m.OFFLINE){db=sa._("Fique on-line");this.setState({privacyText:db});return;}if(this.props.isGroupChat||this.props.otherUserID===undefined)return;var eb='fbid:'.concat(this.props.otherUserID);t.get(eb,(function(fb){if(!fb.is_friend){db=null;}else if(cb==m.BLOCKED){db=sa._("Ativar bate-papo para {name}",[sa.param('name',fb.short_name)]);}else db=sa._("Desativar o bate-papo para {name}",[sa.param('name',fb.short_name)]);this.setState({privacyText:db});}).bind(this));},_showParticipants:function(){va.getServerIDFromClientID(this.props.threadID,function(cb){h.send(new i(new ia('/ajax/browser/dialog/multichat_members/').addQueryData({id:cb})));});},_unsubscribeLinkClicked:function(){var cb=[];cb.push({name:'unsubscribe',label:sa._("Sair da conversa"),handler:(function(){return this._unsubscribeToThread();}).bind(this)});cb.push(o.CANCEL);new o().setTitle(sa._("Sair da conversa?")).setBody(sa._("Voc\u00ea n\u00e3o receber\u00e1 mais mensagens desta conversa e as pessoas ver\u00e3o que voc\u00ea saiu.")).setButtons(cb).show();},_unsubscribeToThread:function(){if(!xa.isEmptyLocalThread(this.props.threadID)){var cb=ua.constructLogMessageObject(w.CHAT_WEB,this.props.threadID,r.UNSUBSCRIBE,{removed_participants:[v.getID()]});ya.send(cb);}n.closeTab(this.props.threadID,'unsubscribed');return true;},_deleteConversation:function(){ja.show(this.props.threadID);},_reportSpamClicked:function(){var cb=new ia('/ajax/chat/report.php').addQueryData({id:this.props.otherUserID}).addQueryData({src:'top_report_link'});if(x.result)cb=la.getURIBuilder().setString('thread_fbid',this.props.otherUserID).setEnum('location','www_chat_head').getURI();h.send(new i(cb));},_messageBlockedClicked:function(){wa.blockMessages(this.props.threadID);},_messageUnblockedClicked:function(){wa.unblockMessages(this.props.threadID);},_secretModeTurnOff:function(){wa.turnOffSecretMode(this.props.threadID);},_secretModeTurnOn:function(){wa.turnOnSecretMode(this.props.threadID);},_createGroupClicked:function(){xa.getThreadMeta(this.props.threadID,function(cb){if(!cb.is_canonical){var db=new ia('/ajax/groups/create_get.php').addQueryData({ref:'web_messenger_dock',parent_id:'0'}),eb=cb.participants.map(function(fb){return q.getUserIDFromParticipantID(fb);}).filter(function(fb){return fb;});db.addQueryData({members:eb});if(cb.name)db.addQueryData({name:cb.name});h.send(new i(db));}});},_createEventClicked:function(){xa.getThreadMeta(this.props.threadID,function(cb){if(!cb.is_canonical){var db=cb.participants.map(function(fb){return q.getUserIDFromParticipantID(fb);}).filter(function(fb){return fb;}),eb=qa.getURIBuilder().setString('acontext',JSON.stringify({})).setIntVector('invite_ids',db).getURI();h.send(new i(eb));}});},_switchToWorkUserClicked:function(){var cb=[];cb.push({name:'move',label:sa._("Mover conversa"),handler:(function(){return this._switchToWork();}).bind(this)});cb.push(o.CANCEL);new o().setTitle(sa._("Mover conversa para a conta profissional?")).setBody(sa._("Deseja mover esta conversa para que ela seja exibida em sua conta profissional?")).setButtons(cb).show();},_switchToWork:function(){if(!xa.isEmptyLocalThread(this.props.threadID)){var cb=ua.constructLogMessageObject(w.CHAT_WEB,this.props.threadID,r.SWITCH_TO_WORK,{removed_participants:[v.getID()]});ya.send(cb);}n.closeTab(this.props.threadID,'unsubscribed');return true;},_enableDesktopNotif:function(){b.Notification.requestPermission();}});f.exports=bb;},null);