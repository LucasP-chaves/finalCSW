/*!CK:547113285!*//*1442832050,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Pj81K"]); }

__d('ChatSidebarSheetChatReconnectMsg.react',['ChannelConstants','Link.react','ReactComponentWithPureRenderMixin','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'ChatSidebarSheetChatReconnectMsg',mixins:[j],propTypes:{msecs:m.number,onManuallyConnectClick:m.func},render:function(){var o=this.props.msecs;if(o==null||false===navigator.onLine){return (k.createElement('div',null,l._("N\u00e3o foi poss\u00edvel conectar-se ao bate-papo. Verifique sua conex\u00e3o da Internet.")));}else if(o>h.WARNING_COUNTDOWN_THRESHOLD_MSEC){return (k.createElement('div',null,l._("N\u00e3o foi poss\u00edvel conectar-se ao bate-papo. {try-again-link}",[l.param('try-again-link',k.createElement(i,{className:'fbChatReconnectLink',onClick:this.props.onManuallyConnectClick},l._("Tente novamente")))])));}else if(o>1000){return (k.createElement('div',null,l._("N\u00e3o foi poss\u00edvel conectar-se ao bate-papo. Reconectando em {seconds}...",[l.param('seconds',Math.floor(o/1000))])));}else return (k.createElement('div',null,l._("N\u00e3o foi poss\u00edvel conectar-se ao bate-papo. Reconectando...")));}});f.exports=n;},null);