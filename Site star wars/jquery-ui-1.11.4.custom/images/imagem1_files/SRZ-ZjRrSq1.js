/*!CK:824276592!*//*1442832050,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XOgYL"]); }

__d('ChatSidebarSheetChatShutdownMsg.react',['ChannelConstants','ReactComponentWithPureRenderMixin','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.PropTypes,m=j.createClass({displayName:'ChatSidebarSheetChatShutdownMsg',mixins:[i],propTypes:{hint:l.string},render:function(){var n=this.props.hint;switch(n){case h.HINT_AUTH:return (j.createElement('div',null,k._("Sua sess\u00e3o expirou. Fa\u00e7a o login novamente.")));case h.HINT_MAINT:return (j.createElement('div',null,k._("No momento, o {Chat} do Facebook est\u00e1 fora do ar para manuten\u00e7\u00e3o.",[k.param('Chat',k._("Bate-papo"))])));case h.HINT_CONN:return (j.createElement('div',null,k._("No momento, o {Chat} do Facebook est\u00e1 indispon\u00edvel.",[k.param('Chat',k._("Bate-papo"))])));default:return (j.createElement('div',null,k._("No momento, o {Chat} do Facebook est\u00e1 indispon\u00edvel.",[k.param('Chat',k._("Bate-papo"))])));}}});f.exports=m;},null);