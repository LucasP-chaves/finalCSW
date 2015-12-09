/*!CK:1682368549!*//*1449139650,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["3d+1Q"]); }

__d("MachineTranslationScore",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNDEFINED:0,VERY_BAD:1,BAD:2,OK:3,GOOD:4,VERY_GOOD:5};},null);
__d("TranslationPreferenceEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK_SEE_ORIGINAL:"click_see_original",CLICK_HIDE_ORIGINAL:"click_hide_original",CLICK_TRANSLATION_PREFERENCES:"click_translation_preferences"};},null);
__d("TranslationTrigger",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEE_TRANSLATION:"see_translation",AUTO_TRANSLATION:"auto_translation",SEE_CONVERSION:"see_conversion"};},null);
__d("ULMOverrideTrigger",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={OVERRIDE_TOOL:"ULM override tool",NEVER_TRANSLATE_PREFERENCE:"never translate",UNDO_NEVER_TRANSLATE_PREFERENCE:"undo never translate",SPECIFIED_USER_LANGUAGE_MODEL:"specified user language model",UNDO_DISABLE_AUTO_TRANSLATE_PREFERENCE:"undo disable auto translate",DISABLE_AUTO_TRANSLATE_PREFERENCE:"disable auto translate"};},null);
__d("ContentTranslationStrings",["fbt"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={AUTOMATICALLY_TRANSLATED:h._("Traduzido automaticamente"),TRANSLATED_BY_BING:h._("Traduzido pelo Bing"),PARTLY_TRANSLATED_BY_BING:h._("Traduzido parcialmente pelo Bing"),HIDE_ORIGINAL:h._("Ocultar original"),SEE_ORIGINAL:h._("Ver original"),REPORT_LANGUAGE_DIALOG_TY:h._("Agradecemos por nos informar sobre este erro. Seu feedback ajuda a melhorar a tradu\u00e7\u00e3o para todos no Facebook."),UNDO:h._("Desfazer"),CANCEL:h._("Cancelar"),SUBMIT:h._("Enviar"),DONE:h._("Concluir"),CLOSE:h._("Fechar"),ENTER_TRANSLATION:h._("Insira sua tradu\u00e7\u00e3o"),EDIT_TRANSLATION_THANKS:h._("Obrigado! Estamos trabalhando continuamente para melhorar a qualidade da nossa tradu\u00e7\u00e3o. Seus coment\u00e1rios nos ajudam a treinar modelos melhores."),EDIT_TRANSLATION_DIALOG_TITLE_NORMAL:h._("Editar tradu\u00e7\u00e3o"),EDIT_TRANSLATION_DIALOG_TITLE_ERROR:h._("Falha no envio"),EDIT_TRANSLATION_ERROR:h._("Ocorreu um problema com o envio. Tente novamente mais tarde. Agradecemos o empenho."),EDIT_TRANSLATION_MENU:h._("Eu tenho uma tradu\u00e7\u00e3o melhor"),NUX_MESSAGE:h._("Esta publica\u00e7\u00e3o foi traduzida em seu idioma. Clique aqui para escolher suas prefer\u00eancias de tradu\u00e7\u00e3o."),getTranslatedFromTo:function(j,k){return h._("Traduzido de {source language} para {target language}",[h.param("source language",j),h.param("target language",k)]);},getTranslatedFrom:function(j){return h._("Traduzido de {source language}",[h.param("source language",j)]);},getReportLanguageDialogHeader:function(j){return h._("Isto n\u00e3o estava em {language}",[h.param("language",j)]);},getReportLanguage:function(j){return h._("A publica\u00e7\u00e3o n\u00e3o estava em {language}",[h.param("language",j)]);},getNeverTranslate:function(j){return h._("Nunca traduzir de {language}",[h.param("language",j)]);},getNeverTranslateDialog:function(j){return h._("As publica\u00e7\u00f5es em {language} n\u00e3o ser\u00e3o traduzidas para voc\u00ea.",[h.param("language",j)]);},getDisableAutoTranslate:function(j){return h._("Desativar a tradu\u00e7\u00e3o autom\u00e1tica para o {dialect}",[h.param("dialect",j)]);},getDisableAutoTranslateDialog:function(j){return h._("Publica\u00e7\u00f5es em {dialect} n\u00e3o ser\u00e3o traduzidas automaticamente para voc\u00ea.",[h.param("dialect",j)]);}};f.exports=i;},null);
__d("XLtgPostTranslationGenSurveyController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ltg\/see_translation\/survey\/",{survey_id:{type:"String",required:true},__asyncDialog:{type:"Int"}});},null);
__d('LtgScoreFeedbackButton.react',['AsyncRequest','BanzaiLogger','LayerFadeOnHide','MachineTranslationScore','React','ReactDOM','ReactLayeredComponentMixin','XUIContextualDialog.react','XUIContextualDialogBody.react','XUIContextualDialogTitle.react','XUIGrayText.react','XLtgPostTranslationGenSurveyController','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v=l.PropTypes,w={},x={RATED_ONE_SURVEY:'943404649071665',RATED_TWO_SURVEY:'531844646984611',RATED_THREE_SURVEY:'1503513503275612',RATED_FOUR_SURVEY:'451354448399959',RATED_FIVE_SURVEY:'319676288156137'};w[k.VERY_BAD]=u._("Muito ruim.");w[k.BAD]=u._("Ruim.");w[k.OK]=u._("OK.");w[k.GOOD]=u._("Bom.");w[k.VERY_GOOD]=u._("Muito bom.");var y={};y[k.VERY_BAD]=u._("N\u00e3o consigo entender nada.");y[k.BAD]=u._("N\u00e3o consigo entender a maior parte disso.");y[k.OK]=u._("Consigo entender o suficiente disso.");y[k.GOOD]=u._("Consigo entender a maior parte disso.");y[k.VERY_GOOD]=u._("Consigo entender tudo.");var z=[k.VERY_BAD,k.BAD,k.OK,k.GOOD,k.VERY_GOOD],aa=l.createClass({displayName:'LtgScoreFeedbackButton',mixins:[n],propTypes:{feedbackTargetID:v.string,text:v.string,translation:v.string,authorID:v.string,sourceLocale:v.string,targetLocale:v.string,originalConfidence:v.number,scaledConfidence:v.number,translationTrigger:v.string,translationID:v.string,viewerID:v.number,fbtypeEnum:v.number,systemID:v.string},getInitialState:function(){return {hoverScore:k.UNDEFINED,hasHoverState:false,hasFeedbackConfirmation:false};},_showSurvey:function(ba){new h().setURI(s.getURIBuilder().setString('survey_id',ba).getURI()).send();},renderDefaultTooltipDialogBody:function(){var ba=u._("Avalie essa tradu\u00e7\u00e3o"),ca=u._("Altere sua avalia\u00e7\u00e3o");return (l.createElement(p,null,l.createElement(r,{shade:'medium',size:'small',display:'block'},this.hasDefaultPosition()?ba:ca),l.createElement(r,{shade:'dark',size:'small',weight:'bold'},w[this.state.hoverScore]),l.createElement(r,{shade:'dark',size:'small'},' '+y[this.state.hoverScore])));},renderTooltipAfterUserFeedbackDialogBody:function(){var ba=l.createElement(r,{shade:'dark',size:'small',display:'block'},u._("Voc\u00ea avaliou isso: {Bolded score text in rating message}",[u.param('Bolded score text in rating message',l.createElement(r,{shade:'dark',size:'small',weight:'bold'},w[this.state.score]))])),ca=l.createElement(r,{shade:'dark',size:'small'},u._("Agradecemos por ajudar a melhorar as tradu\u00e7\u00f5es para todos!"));return (l.createElement(p,null,ba,ca));},onSlotClick:function(ba,event){if(ba!=this.state.score){this._selectSurvey(ba);this._logUserRating(ba);this.setState({score:ba,hasFeedbackConfirmation:true});setTimeout((function(){this.setState({hasFeedbackConfirmation:false});}).bind(this),1500);}},onSlotMouseEnter:function(ba,event){this.setState({hasHoverState:true,hoverScore:ba});},onSlotMouseLeave:function(ba,event){this.setState({hasHoverState:false});},getRefNameByScore:function(ba){return 'scores-button-slot-'+ba;},hasDefaultPosition:function(){return this.state.score==k.UNDEFINED;},renderLayers:function(){var ba=this.getRefNameByScore(this.state.hoverScore),ca=m.findDOMNode(this.refs[ba]);return {tooltipDialog:l.createElement(o,{hoverContext:ca,shown:this.state.hasHoverState&&!this.state.hasFeedbackConfirmation,contextRef:(function(){return this.refs[ba];}).bind(this),position:'below',width:250},this.state.score!==this.state.hoverScore?this.renderDefaultTooltipDialogBody():this.renderTooltipAfterUserFeedbackDialogBody()),hasFeedbackConfirmationDialog:l.createElement(o,{hoverContext:ca,contextRef:(function(){return this.refs[ba];}).bind(this),shown:this.state.hasFeedbackConfirmation,position:'below',behaviors:{LayerFadeOnHide:j}},l.createElement(p,null,l.createElement(r,{shade:'dark',size:'small',weight:'bold',display:'block'},u._("Obrigado por avaliar!")),l.createElement(r,{shade:'dark',size:'small'},u._("Voc\u00ea est\u00e1 ajudando a melhorar as tradu\u00e7\u00f5es para todos."))))};},renderSlot:function(ba,ca){var da="_5mln"+(ca<=ba?' '+"_5mlo":'');return (l.createElement('div',{ref:this.getRefNameByScore(ca),className:da,key:'slot_'+ca,onClick:this.onSlotClick.bind(this,ca),onMouseEnter:this.onSlotMouseEnter.bind(this,ca),onMouseLeave:this.onSlotMouseLeave.bind(this,ca)}));},render:function(){var ba=this.state.hasHoverState?this.state.hoverScore:this.state.score,ca="_5mlr"+(!this.hasDefaultPosition()?' '+"_5mls":'');return (l.createElement('div',{className:ca,ref:'scores-button'},z.map(this.renderSlot.bind(this,ba))));},_selectSurvey:function(ba){switch(ba){case k.VERY_BAD:this._showSurvey(x.RATED_ONE_SURVEY);break;case k.BAD:this._showSurvey(x.RATED_TWO_SURVEY);break;case k.OK:this._showSurvey(x.RATED_THREE_SURVEY);break;case k.GOOD:this._showSurvey(x.RATED_FOUR_SURVEY);break;case k.VERY_GOOD:this._showSurvey(x.RATED_FIVE_SURVEY);break;default:break;}},_logUserRating:function(ba){i.log('LtgTranslationUserFeedbackLoggerConfig',{translation_id:this.props.translationID,viewer_id:this.props.viewerID,fbid:this.props.feedbackTargetID,fbtype_enum:this.props.fbtypeEnum,author_id:this.props.authorID,translation_trigger:this.props.translationTrigger,content_locale:this.props.sourceLocale,target_locale:this.props.targetLocale,system_id:this.props.systemID,input_text:this.props.text,translated_text:this.props.translation,original_translation_confidence:this.props.originalConfidence,scaled_translation_confidence:this.props.scaledConfidence,user_rating:ba});}});f.exports=aa;},null);
__d("XLtgTranslationNUXController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/nux\/",{});},null);
__d("XLtgDisableAutoTranslatePreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/disable_auto_translate\/",{dialect:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});},null);
__d('LtgDisableAutoTranslatePreference.react',['AsyncRequest','ContentTranslationStrings','React','ULMOverrideTrigger','XLtgDisableAutoTranslatePreferenceController','Link.react','SimpleXUIDialog','XUIDialogButton.react','XUIDialogOkayButton.react','cx','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=j.PropTypes,t=j.createClass({displayName:'LtgDisableAutoTranslatePreference',propTypes:{isShown:s.bool.isRequired,onPreferenceClick:s.func.isRequired,sourceLocale:s.string.isRequired,sourceLocaleName:s.string.isRequired},render:function(){if(!this.props.isShown)return null;return (j.createElement(m,{className:"_5qpb",onClick:this._onDisableAutoTranslateClick},i.getDisableAutoTranslate(this.props.sourceLocaleName)));},_onDisableAutoTranslateClick:function(){this._sendDisableAutoTranslateRequest(k.DISABLE_AUTO_TRANSLATE_PREFERENCE,this._onConfirm);this.props.onPreferenceClick();},_sendDisableAutoTranslateRequest:function(u,v){new h().setURI(l.getURIBuilder().setString('dialect',this.props.sourceLocale).setEnum('event_trigger',u).getURI()).setHandler((function(w){if(this.isMounted()&&w.payload.success)v();}).bind(this)).send();},_onConfirm:function(){n.showEx(i.getDisableAutoTranslateDialog(this.props.sourceLocaleName),i.getDisableAutoTranslate(this.props.sourceLocaleName),j.createElement('div',null,j.createElement(o,{action:'cancel',label:i.UNDO,onClick:this._onUndoClick,use:'default'}),j.createElement(p,{action:'cancel',use:'confirm'})));},_onUndoClick:function(){this._sendDisableAutoTranslateRequest(k.UNDO_DISABLE_AUTO_TRANSLATE_PREFERENCE,r);}});f.exports=t;},null);
__d("XLtgEditTranslationPreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/edit_translation\/",{content_id:{type:"FBID",required:true},source_locale:{type:"String",required:true},target_locale:{type:"String",required:true},translation:{type:"String",required:true}});},null);
__d('LtgEditTranslationPreference.react',['AsyncRequest','ContentTranslationStrings','React','Link.react','SimpleXUIDialog','TextAreaWithLineLimit.react','TextWithEntities.react','XLtgEditTranslationPreferenceController','XUIDialogButton.react','XUIGrayText.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=j.PropTypes,t=j.createClass({displayName:'LtgEditTranslationPreference',propTypes:{contentId:s.string.isRequired,isShown:s.bool.isRequired,onPreferenceClick:s.func.isRequired,sourceLocale:s.string.isRequired,targetLocale:s.string.isRequired,text:s.string.isRequired,translation:s.string.isRequired},getInitialState:function(){return {newTranslation:this.props.translation};},render:function(){if(!this.props.isShown)return null;return (j.createElement(k,{className:"_5qpb",onClick:this._onEditTranslationClick},i.EDIT_TRANSLATION_MENU));},_onTranslationTextChange:function(u){this.setState({newTranslation:u});},_onEditTranslationClick:function(){l.showEx(j.createElement('div',null,j.createElement(q,{display:'block',size:'small',className:"_1cqx"},j.createElement(n,{text:this.props.text})),j.createElement(m,{className:"_5d_f _2pig",onChange:this._onTranslationTextChange,defaultValue:this.state.newTranslation,size:'medium'})),i.EDIT_TRANSLATION_DIALOG_TITLE_NORMAL,j.createElement('div',null,j.createElement(p,{action:'cancel',label:i.CANCEL,use:'default'}),j.createElement(p,{action:'cancel',label:i.SUBMIT,onClick:this._onSubmitClick,use:'confirm'})));},_onSubmitClick:function(){this._sendTranslationEditRequest(this.state.newTranslation,this._onEditSuccess,this._onEditFail);},_sendTranslationEditRequest:function(u,v,w){new h().setURI(o.getURIBuilder().setFBID('content_id',this.props.contentId).setString('source_locale',this.props.sourceLocale).setString('target_locale',this.props.targetLocale).setString('translation',u).getURI()).setHandler((function(x){if(this.isMounted()&&x.payload.success){v();}else w();}).bind(this)).send();},_onEditSuccess:function(){l.showEx(i.EDIT_TRANSLATION_THANKS,i.EDIT_TRANSLATION_DIALOG_TITLE_NORMAL,j.createElement('div',null,j.createElement(p,{action:'cancel',label:i.DONE,use:'confirm'})));},_onEditFail:function(){l.showEx(i.EDIT_TRANSLATION_ERROR,i.EDIT_TRANSLATION_DIALOG_TITLE_ERROR,j.createElement('div',null,j.createElement(p,{action:'cancel',label:i.CLOSE,use:'confirm'})));}});f.exports=t;},null);
__d("XLtgNeverTranslatePreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/never_translate\/",{locale:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});},null);
__d('LtgNeverTranslatePreference.react',['AsyncRequest','ContentTranslationStrings','React','ULMOverrideTrigger','XLtgNeverTranslatePreferenceController','Link.react','SimpleXUIDialog','XUIDialogButton.react','XUIDialogOkayButton.react','cx','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';if(c.__markCompiled)c.__markCompiled();var s=j.PropTypes,t=j.createClass({displayName:'LtgNeverTranslatePreference',propTypes:{onPreferenceClick:s.func.isRequired,sourceLocale:s.string.isRequired,sourceLocaleName:s.string.isRequired},render:function(){return (j.createElement(m,{className:"_5qpb",onClick:this._onNeverTranslateClick},i.getNeverTranslate(this.props.sourceLocaleName)));},_onNeverTranslateClick:function(){this._sendNeverTranslateRequest(k.NEVER_TRANSLATE_PREFERENCE,this._onConfirm);this.props.onPreferenceClick();},_sendNeverTranslateRequest:function(u,v){new h().setURI(l.getURIBuilder().setString('locale',this.props.sourceLocale).setEnum('event_trigger',u).getURI()).setHandler((function(w){if(this.isMounted()&&w.payload.success)v();}).bind(this)).send();},_onConfirm:function(){n.showEx(i.getNeverTranslateDialog(this.props.sourceLocaleName),i.getNeverTranslate(this.props.sourceLocaleName),j.createElement('div',null,j.createElement(o,{action:'cancel',label:i.UNDO,onClick:this._onUndoClick,use:'default'}),j.createElement(p,{action:'cancel',use:'confirm'})));},_onUndoClick:function(){this._sendNeverTranslateRequest(k.UNDO_NEVER_TRANSLATE_PREFERENCE,r);}});f.exports=t;},null);
__d('LtgReportLanguageTranslationPreference.react',['BanzaiLogger','ContentTranslationStrings','React','ReactComponentWithPureRenderMixin','Link.react','SimpleXUIDialog','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=j.createClass({displayName:'LtgReportLanguageTranslationPreference',mixins:[k],propTypes:{feedbackTargetID:o.string.isRequired,isShown:o.bool.isRequired,onPreferenceClick:o.func.isRequired,sourceLocale:o.string.isRequired,sourceLocaleName:o.string.isRequired,text:o.string.isRequired},render:function(){if(!this.props.isShown)return null;return (j.createElement(l,{onClick:this._handleReportLanguageClick,className:"_5qpb"},i.getReportLanguage(this.props.sourceLocaleName)));},_handleReportLanguageClick:function(){this._reportAndShowConfirmation();this.props.onPreferenceClick();},_reportAndShowConfirmation:function(){this._logReportLanguage();m.show(i.REPORT_LANGUAGE_DIALOG_TY,i.getReportLanguageDialogHeader(this.props.sourceLocaleName));},_logReportLanguage:function(){h.log('LtgLanguageFeedbackLoggerConfig',{fbid:this.props.feedbackTargetID,text:this.props.text,detected_locale:this.props.sourceLocale});}});f.exports=p;},null);
__d('LtgTranslationDropdownMenu.react',['ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','LayerHideOnBlur','LayerFadeOnHide','React','XUIContextualDialog.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=l.createClass({displayName:'LtgTranslationDropdownMenu',render:function(){var p=this.props,q=p.children,r=babelHelpers.objectWithoutProperties(p,['children']);return (l.createElement(m,babelHelpers._extends({behaviors:{ContextualLayerAutoFlip:h,ContextualLayerUpdateOnScroll:i,LayerHideOnBlur:j,LayerFadeOnHide:k}},r),l.createElement('div',{className:"_4d4g"},q)));}});f.exports=o;},null);
__d('LtgTranslationPreferencesDropdown.react',['AsyncRequest','BanzaiLogger','ContentTranslationStrings','React','ReactComponentWithPureRenderMixin','ReactDOM','ReactLayeredComponentMixin','TranslationPreferenceEvent','TranslationTrigger','UFITranslationConstants','XLtgTranslationNUXController','Link.react','LtgDisableAutoTranslatePreference.react','LtgEditTranslationPreference.react','LtgNeverTranslatePreference.react','LtgReportLanguageTranslationPreference.react','LtgTranslationDropdownMenu.react','XUIAmbientNUX.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){'use strict';if(c.__markCompiled)c.__markCompiled();var aa=k.PropTypes,ba=k.createClass({displayName:'LtgTranslationPreferencesDropdown',mixins:[n,l],getInitialState:function(){return {isShowingNux:this.props.shouldShowNux,isShown:false};},propTypes:{feedbackTargetID:aa.string.isRequired,isShowingOriginal:aa.bool.isRequired,shouldShowDisableAutoTranslate:aa.bool,shouldShowEditTranslation:aa.bool,shouldShowNux:aa.bool,showNewUI:aa.bool,sourceLocale:aa.string.isRequired,sourceLocaleName:aa.string.isRequired,targetLocaleName:aa.string.isRequired,text:aa.string.isRequired,translationApp:aa.string,translation:aa.string.isRequired,translationTrigger:aa.string.isRequired},getDefaultProps:function(){return {shouldShowEditTranslation:false,shouldShowNux:false,translationApp:q.FB_TRANSLATOR_APP};},componentDidMount:function(){this._onNUXMount();},render:function(){var ca=this._getAttributionText(this.props.sourceLocaleName);return (k.createElement(s,{ref:'translationAttributionLink',onClick:this._handleLinkClick},ca));},shouldShowDisableAutoTranslateOption:function(){return this.props.translationTrigger===p.AUTO_TRANSLATION&&this.props.shouldShowDisableAutoTranslate;},renderLayers:function(){var ca=this.shouldShowDisableAutoTranslateOption();return {contextualDialog:k.createElement(x,{context:m.findDOMNode(this.refs.translationAttributionLink),onToggle:(function(da){return this._handleToggle(da);}).bind(this),position:'below',shown:this.state.isShown},k.createElement('div',{className:"_jju"},j.getTranslatedFromTo(this.props.sourceLocaleName,this.props.targetLocaleName)),k.createElement(v,{onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName}),k.createElement(t,{isShown:ca,onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName}),k.createElement(u,{isShown:this.props.shouldShowEditTranslation,text:this.props.text,translation:this.props.translation,onPreferenceClick:this._handleLinkClick,contentId:this.props.feedbackTargetID,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName,targetLocale:this.props.targetLocale,targetLocaleName:this.props.targetLocaleName}),k.createElement(w,{feedbackTargetID:this.props.feedbackTargetID,isShown:this.props.isShowingOriginal,onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName,text:this.props.text})),preferencesNUX:k.createElement(y,{contextRef:(function(){return this.refs.translationAttributionLink;}).bind(this),onCloseButtonClick:this._onNUXClose,position:'below',shown:this.state.isShowingNux},j.NUX_MESSAGE)};},_getAttributionText:function(ca){var da=this.props.translationApp;if(da===q.BING_TRANSLATOR_APP)return j.TRANSLATED_BY_BING;if(da===q.FB_AND_BING_TRANSLATOR_APP)return j.PARTLY_TRANSLATED_BY_BING;if(this.props.showNewUI)return j.getTranslatedFrom(ca);return j.AUTOMATICALLY_TRANSLATED;},_handleToggle:function(ca){this.setState({isShown:ca});},_handleLinkClick:function(){if(!this.state.isShown)this._logTranslationPreferencesClick();this.setState({isShown:!this.state.isShown});this._onNUXClose();},_onNUXMount:function(){if(!this.state.isShowingNux)return;new h().setURI(r.getURIBuilder().getURI()).send();},_onNUXClose:function(){this.setState({isShowingNux:false});},_logTranslationPreferencesClick:function(){i.log('LtgTranslationPreferencesLoggerConfig',{translation_id:this.props.translationID,translation_app:this.props.translationApp,fbid:this.props.feedbackTargetID,content_locale:this.props.sourceLocale,target_locale:this.props.targetLocale,author_id:this.props.authorID,viewer_id:this.props.viewerID,viewer_understood_locales:this.props.viewerLocales,translation_trigger:this.props.translationTrigger,click_type:o.CLICK_TRANSLATION_PREFERENCES});}});f.exports=ba;},null);
__d('LtgAutoTranslation.react',['CSS','ContentTranslationStrings','React','BanzaiLogger','TranslationPreferenceEvent','Link.react','LtgScoreFeedbackButton.react','LtgTranslationPreferencesDropdown.react','cx','highlight'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=j.PropTypes,s=j.createClass({displayName:'LtgAutoTranslation',propTypes:{originalMessage:r.object.isRequired,translatedMessage:r.object.isRequired,shouldShowNux:r.bool,showNewUI:r.bool,shouldShowDisableAutoTranslate:r.bool,shouldShowEditTranslation:r.bool},getDefaultProps:function(){return {shouldShowNux:false,shouldShowDisableAutoTranslate:false,shouldShowEditTranslation:false};},getInitialState:function(){return {isShowingOriginal:false};},render:function(){var t=this.state.isShowingOriginal?i.HIDE_ORIGINAL:i.SEE_ORIGINAL,u=!this.props.showNewUI;return (j.createElement('div',{className:"_5pio"+(this.state.isShowingOriginal&&u?' '+"_3-9b":'')},j.createElement(o,babelHelpers._extends({isShowingOriginal:this.state.isShowingOriginal,showNewUI:this.props.showNewUI},this.props)),' ','·',' ',j.createElement(m,{onClick:this._toggle},t),j.createElement('div',{className:"_43f8"},j.createElement(n,this.props))));},_toggle:function(){this.state.isShowingOriginal?this._hideOriginal():this._showOriginal();this.setState({isShowingOriginal:!this.state.isShowingOriginal});},_showOriginal:function(){var t=this.props.originalMessage;if(!this.props.showNewUI)h.addClass(this.props.translatedMessage,"_3-9b");h.show(t);this._logShowOriginalClick(l.CLICK_SEE_ORIGINAL);q(t);},_hideOriginal:function(){if(!this.props.showNewUI)h.removeClass(this.props.translatedMessage,"_3-9b");h.hide(this.props.originalMessage);this._logShowOriginalClick(l.CLICK_HIDE_ORIGINAL);},_logShowOriginalClick:function(t){k.log('LtgTranslationPreferencesLoggerConfig',{translation_id:this.props.translationID,translation_app:this.props.translationApp,fbid:this.props.feedbackTargetID,content_locale:this.props.sourceLocale,target_locale:this.props.targetLocale,author_id:this.props.authorID,viewer_id:this.props.viewerID,viewer_understood_locales:this.props.viewerLocales,translation_trigger:this.props.translationTrigger,click_type:t});}});f.exports=s;},null);