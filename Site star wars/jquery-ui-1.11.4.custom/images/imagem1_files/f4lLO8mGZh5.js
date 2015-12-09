/*!CK:11691371!*//*1448869634,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["x2he+"]); }

__d('AbstractTextFieldMixin.react',['React','ReactDOM','Keys','cx','invariant','joinClasses','cloneWithProps'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p={propTypes:{value:o.string,placeholder:o.string,tabIndex:o.string,maxLength:o.number,autoComplete:o.string,onBackspace:o.func,onBackTab:o.func,onBlur:o.func,onChange:o.func,onDownArrow:o.func,onEnter:o.func,onEscape:o.func,onFocus:o.func,onKeyDown:o.func,onLeftArrow:o.func,onNoShiftEnter:o.func,onRightArrow:o.func,onShiftEnter:o.func,onShiftDownArrow:o.func,onShiftUpArrow:o.func,onTab:o.func,onUpArrow:o.func,required:o.bool,style:o.object,type:o.string,autoCapitalize:o.string,autoCorrect:o.string},getInitialState:function(){return {focused:false,value:this.props.defaultValue||''};},getValue:function(){return this.props.value!=null?this.props.value:this.state.value;},onInputKeyDown:function(q){var r=this.props,s=q.keyCode,t=q.shiftKey;if(s===j.BACKSPACE&&!t&&r.onBackspace){r.onBackspace(q);}else if(s===j.TAB&&!t&&r.onTab){r.onTab(q);}else if(s===j.TAB&&t&&r.onBackTab){r.onBackTab(q);}else if(s===j.UP){if(t){if(r.onShiftUpArrow)r.onShiftUpArrowAttempt(q);}else if(r.onUpArrow)r.onUpArrow(q);}else if(s===j.DOWN&&r.onDownArrow){if(t){if(r.onShiftDownArrow)r.onShiftDownArrow(q);}else if(r.onDownArrow)r.onDownArrow(q);}else if(s===j.LEFT&&r.onLeftArrow){r.onLeftArrow(q);}else if(s===j.RIGHT&&r.onRightArrow){r.onRightArrow(q);}else if(s===j.RETURN){if(r.onEnter)r.onEnter(q);if(t){if(r.onShiftEnter)r.onShiftEnter(q);}else if(r.onNoShiftEnter)r.onNoShiftEnter(q);}else if(s===j.ESC&&r.onEscape)r.onEscape(q);if(r.onKeyDown)r.onKeyDown(q);},onInputChange:function(q){if(this.props.onChange)this.props.onChange(q);if(this.props.value==null)this.setState({value:q.target.value});},focusInput:function(){this.getTextFieldDOM().focus();},blurInput:function(){this.getTextFieldDOM().blur();},onInputBlur:function(event){if(this.props.onBlur)this.props.onBlur(event);if(!event.isDefaultPrevented())this.setState({focused:false});},onInputFocus:function(event){if(this.props.onFocus)this.props.onFocus(event);if(!event.isDefaultPrevented())this.setState({focused:true});},getTextFieldDOM:function(){return i.findDOMNode(this.refs[this.getTextFieldRef()]);},getTextFieldRef:function(){return 'textField';},setTextFieldPropsOn:function(q){return n(q,{'aria-activedescendant':this.props['aria-activedescendant'],'aria-autocomplete':this.props['aria-autocomplete'],'aria-label':this.props['aria-label'],'aria-expanded':this.props['aria-expanded'],'aria-owns':this.props['aria-owns'],'data-testid':this.props['data-testid'],required:this.props.required,ref:this.getTextFieldRef(),role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,onKeyDown:this.onInputKeyDown,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:this.getValue(),id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,style:this.props.style,title:this.props.title,type:this.props.type||q.props.type});},render:function(){var q=m(this.props.className,"_58ak"+(!this.getValue()?' '+"_3ct8":''));!this.renderTextField?l(0):undefined;return (h.createElement('label',{className:q},this.renderTextField()));}};f.exports=p;},null);
__d('AbstractTextInput.react',['AbstractTextFieldMixin.react','React','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.createClass({displayName:'AbstractTextInput',mixins:[h],renderTextField:function(){return this.setTextFieldPropsOn(i.createElement('input',{type:'text',className:"_58al",size:this.props.size,tabIndex:this.props.tabIndex,onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onPaste:this.props.onPaste}));}});f.exports=k;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('XUIError',['ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','Promise','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){'use strict';if(c.__markCompiled)c.__markCompiled();var x='data-xui-error-alignh',y='XUIError',z='data-xui-error',aa="_1tp7",ba='data-xui-error-position';m.listen(document.documentElement,'mouseover',function(event){if(n.byClass(r(),aa))return;var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusin',function(event){var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusout',function(event){la();});var ca=v(function(){return new o(function(oa,pa){i.loadModules(["React","ReactDOM","XUIErrorDialogImpl"],function(qa,ra,sa){oa(babelHelpers._extends({React:qa,ReactDOM:ra},sa.getNewDialog()));});});}),da=null;function ea(oa){return babelHelpers._extends({message:oa.getAttribute(z),position:oa.getAttribute(ba),alignh:oa.getAttribute(x)},k.get(oa,y));}function fa(oa,pa){k.set(oa,y,pa);}function ga(oa,pa){k.set(oa,y,babelHelpers._extends({},k.get(oa,y),pa));}function ha(oa){k.remove(oa,y);}var ia=false,ja=false;function ka(oa){ca().done(function(pa){var qa=pa.React,ra=pa.ReactDOM,sa=pa.dialog,ta=pa.dialogMessageNode,ua=ea(oa),va=ua.message;if(va==null)return;var wa=qa.isValidElement(va);if(ia&&!wa)ra.unmountComponentAtNode(ta);if(wa){ra.render(va,ta);}else{!(typeof va==='string'||u(va))?t(0):undefined;if(typeof va==='string')va=w(va);l.setContent(ta,va);}ia=wa;sa.setContext(oa).setPosition(ua.position||'right').setAlignment(ua.alignh||(ua.position==='above'||ua.position==='below'?'right':null)).show();h.notify(s(ta));da=oa;});ja=true;}function la(){if(!ja)return;ca().done(function(oa){var pa=oa.React,qa=oa.ReactDOM,ra=oa.dialog,sa=oa.dialogMessageNode;if(!da)return;if(ia){qa.unmountComponentAtNode(sa);ia=false;}ra.hide();da=null;});}function ma(oa){if(l.contains(oa,r()))ka(oa);}var na={set:function(oa){var pa=oa.target,qa=oa.message,ra=oa.position,sa=oa.alignh;!(qa!==null)?t(0):undefined;j.addClass(pa,aa);ga(pa,q({message:qa,position:ra,alignh:sa},function(ta){return ta!==undefined;}));ma(pa);},clear:function(oa){j.removeClass(oa,aa);oa.removeAttribute(z);ha(oa);if(oa===da)la();},updatePosition:function(){if(!ja)return;ca().done(function(oa){var pa=oa.dialog;if(da)pa.updatePosition();});},__setReactError:function(oa,pa){var qa=pa.message,ra=pa.position,sa=pa.alignh;!(qa!==null)?t(0):undefined;fa(oa,{message:qa,position:ra,alignh:sa});ma(oa);},__clearReactError:function(oa){ha(oa);if(oa===da)la();}};f.exports=na;},null);
__d('XUIError.react',['React','ReactDOM','XUIError','cx','joinClasses','onlyChild'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=h.PropTypes,o="_1tp7",p=h.createClass({displayName:'ReactXUIError',propTypes:{xuiError:n.any,xuiErrorPosition:n.oneOf(['above','below','left','right']),xuiErrorAlignh:n.oneOf(['left','center','right'])},componentDidMount:function(){if(this.props.xuiError!=null)j.__setReactError(i.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentDidUpdate:function(){if(this.props.xuiError==null){j.__clearReactError(i.findDOMNode(this));}else j.__setReactError(i.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentWillUnmount:function(){j.__clearReactError(i.findDOMNode(this));},render:function(){var q=m(this.props.children);if(this.props.xuiError!=null)q=h.cloneElement(q,{className:l(q.props.className,o)});return q;}});f.exports=p;},null);
__d('XUITextInput.react',['AbstractTextInput.react','React','XUIError.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.createClass({displayName:'XUITextInput',propTypes:babelHelpers._extends({},h.propTypes,j.propTypes),render:function(){var n="_55r1"+(this.props.height=='tall'?' '+"_55r2":''),o=i.createElement(h,babelHelpers._extends({},this.props,{ref:'textInput',className:l(this.props.className,n)}));return (i.createElement(j,this.props,o));},focusInput:function(){this.refs.textInput.focusInput();},blurInput:function(){this.refs.textInput.blurInput();}});f.exports=m;},null);
__d('PagesEventObserver',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='pages_client_logging',j={VITAL_WAIT:h.VITAL_WAIT,logData_DEPRECATED:function(k,l){var m={delay:l||h.VITAL_WAIT};h.post(i,k,m);},notify:function(event,k,l,m,n){var o=babelHelpers._extends({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||h.VITAL_WAIT};h.post(i,o,p);}};f.exports=j;},null);
__d('BookmarkFeedSorter',['Run'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j={init:function(k){i=k;h.onLeave(function(){i=null;});},setChecked:function(k){if(i)i.setValue(k);}};f.exports=j;},null);
__d('LitestandComposer',['Arbiter','Bootloader','ReactComposerIDGenerator','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=600;function n(p,q){i.loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(r,s,t,u,v){if(!j.isComposerID(p))s.reset(p);if(!v||!q)return;u.prependContent(v.getStreamRoot(),q);new r(q).from('opacity',0).to('opacity',1).duration(m).go();t.logCompleted(p);});}var o={initComposer:function(p){var q=new l();q.addSubscriptions(h.subscribe('LitestandComposer/publish',(function(r,s){if(s.composer_id===p)n(p,s.markup);}).bind(this)));k.onLeave(function(){q.release();});}};f.exports=o;},null);
__d('ErrorDialog',['Dialog','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={showAsyncError:function(k){try{return j.show(k.getErrorSummary(),k.getErrorDescription());}catch(l){alert(k);}},show:function(k,l,m,n){return new h().setTitle(k).setBody(l).setButtons([h.OK]).setStackable(true).setModal(true).setHandler(m||i).setButtonsMessage(n||'').show();}};f.exports=j;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null);