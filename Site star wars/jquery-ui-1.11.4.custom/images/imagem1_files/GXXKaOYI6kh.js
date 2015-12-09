/*!CK:2472871735!*//*1448852995,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bQKH3"]); }

__d('XUIDialogOkayButton.react',['React','XUIDialogButton.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'XUIDialogOkayButton',propTypes:{action:m.oneOf(['confirm','cancel','button']).isRequired},render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{className:l(this.props.className,"_2z1w"),action:this.props.action,label:k._("OK")})));}});f.exports=n;},null);
__d('SelectorDeprecated',['Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Event','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction','getDocumentScrollElement'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba,ca,da=[],ea;function fa(qa){return s.byClass(qa,'uiSelector');}function ga(qa){return s.byClass(qa,'uiSelectorButton');}function ha(){if(!ca){ca=new j({position:'below'},m.create('div'));k.addClass(ca.getRoot(),'uiSelectorContextualLayer');}return ca;}function ia(qa){return m.scry(qa,'select')[0];}function ja(qa){return m.find(qa,'div.uiSelectorMenuWrapper');}var ka=function(){ka=z;r.subscribe('select',function(qa,ra){if(!ba||!ra||ra.menu!==pa.getSelectorMenu(ba))return;var sa=la(ba),ta=ma(ra.item);if(ta){var ua=ba,va=pa.isOptionSelected(ra.item),wa=pa.inform('select',{selector:ua,option:ra.item,clone:ea});if(wa===false)return;if(sa||!va){pa.setSelected(ua,pa.getOptionValue(ra.item),!va);pa.inform('toggle',{selector:ua,option:ra.item});pa.inform('change',{selector:ua});h.inform('Form/change',{node:ua});if(na(ua))l.set(ua,'dirty',true);}}if(!sa||!ta)ba&&pa.toggle(ba);});};function la(qa){return !!qa.getAttribute('data-multiple');}function ma(qa){return k.hasClass(qa,'uiSelectorOption');}function na(qa){return !!qa.getAttribute('data-autosubmit');}var oa=function(){oa=z;var qa={keydown:function(event){var ra=event.getTarget();if(m.isInputNode(ra))return;switch(n.getKeyCode(event)){case q.DOWN:case q.SPACE:case q.UP:if(ga(ra)){var sa=fa(ra);pa.toggle(sa);return false;}break;case q.ESC:if(ba){var ta=pa.getSelectorButton(ba);pa.toggle(ba);ta&&o.set(ta);return false;}break;}},mouseover:function(event){var ra=s.byAttribute(event.getTarget(),'ajaxify');if(ra&&k.hasClass(ra,'uiSelectorButton'))pa.loadMenu(fa(ra));}};n.listen(document.body,qa);};u.subscribe(['show','hide'],function(qa,ra){var sa=fa(ra.getActive());if(sa){oa();ka();var ta=pa.getSelectorButton(sa),ua=pa.getSelectorMenu(sa),va=qa==='show';ta.setAttribute('aria-expanded',va?'true':'false');if(va){ba=sa;if(k.hasClass(ta,'uiButtonDisabled')){pa.setEnabled(sa,false);return false;}ua=ua||pa.loadMenu(sa);var wa=t.getScrollParent(sa),xa=wa!==window&&wa!==aa();if(xa||k.hasClass(sa,'uiSelectorUseLayer')){if(xa)da.push(n.listen(wa,'scroll',function(){ra.hide();}));ea=m.create('div',{className:sa.className});k.addClass(ea,'invisible_elem');x.getElementDimensions(sa).setElementDimensions(ea);m.replace(sa,ea);var ya=k.hasClass(sa,'uiSelectorRight'),za=k.hasClass(sa,'uiSelectorBottomUp');ha().setContext(ea).setContent(sa).setPosition(za?'above':'below').setAlignment(ya?'right':'left').show();}r.register(ua);var ab=r.getCheckedItems(ua);if(!ab.length)ab=r.getEnabledItems(ua);if(ab.length)r.focusItem(ab[0]);}else{ba=null;if(ea){while(da.length)da.pop().remove();m.replace(ea,sa);ha().hide();ea=null;}ua&&r.unregister(ua);if(na(sa)&&l.get(sa,'dirty')){var bb=m.scry(sa,'input.submitButton')[0];bb&&bb.click();l.remove(sa,'dirty');}}k.conditionClass(pa.getSelectorButton(sa),'selected',va);pa.inform(va?'open':'close',{selector:sa,clone:ea});}});var pa=Object.assign(new h(),{attachMenu:function(qa,ra,sa){qa=fa(qa);if(qa){ba&&r.unregister(pa.getSelectorMenu(ba));m.setContent(ja(qa),ra);ba&&r.register(pa.getSelectorMenu(qa));ea&&ha().updatePosition();if(sa){var ta=qa.getAttribute('data-name');ta&&sa.setAttribute('name',ta);if(!la(qa))sa.setAttribute('multiple',false);var ua=ia(qa);if(ua){m.replace(ua,sa);}else m.insertAfter(qa.firstChild,sa);}return true;}},getOption:function(qa,ra){var sa=pa.getOptions(qa),ta=sa.length;while(ta--)if(ra===pa.getOptionValue(sa[ta]))return sa[ta];return null;},getOptions:function(qa){var ra=r.getItems(pa.getSelectorMenu(qa));return ra.filter(ma);},getEnabledOptions:function(qa){var ra=r.getEnabledItems(pa.getSelectorMenu(qa));return ra.filter(ma);},getSelectedOptions:function(qa){return r.getCheckedItems(pa.getSelectorMenu(qa));},getOptionText:function(qa){return r.getItemLabel(qa);},getOptionValue:function(qa){var ra=fa(qa),sa=ia(ra),ta=pa.getOptions(ra).indexOf(qa);return ta>=0?sa.options[ta+1].value:'';},getSelectorButton:function(qa){return m.find(qa,'a.uiSelectorButton');},getSelectorMenu:function(qa){return m.scry(qa,'div.uiSelectorMenu')[0];},getValue:function(qa){var ra=ia(qa);if(!ra)return null;if(!la(qa))return ra.value;var sa=[],ta=ra.options;for(var ua=1,va=ta.length;ua<va;ua++)if(ta[ua].selected)sa.push(ta[ua].value);return sa;},isOptionSelected:function(qa){return r.isItemChecked(qa);},listen:function(qa,ra,sa){return this.subscribe(ra,function(ta,ua){if(ua.selector===qa)return sa(ua,ta);});},loadMenu:function(qa,ra){var sa=pa.getSelectorMenu(qa);if(!sa){var ta=pa.getSelectorButton(qa),ua=ta.getAttribute('ajaxify');if(ua){e(['AsyncRequest'],(function(wa){var xa=new w(ua),ya=xa.getQueryData();xa.setQueryData({});var za=new wa(xa).setData(ya).setNectarModuleDataSafe(ta).setRelativeTo(ta);ra&&za.setFinallyHandler(function(){setTimeout(ra,0);});za.send();}).bind(this));var va=p('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');m.appendContent(ta.parentNode,va);sa=pa.getSelectorMenu(qa);ta.removeAttribute('onmouseover');}}else ra&&ra();return sa;},setButtonLabel:function(qa,ra){var sa=pa.getSelectorButton(qa),ta=parseInt(sa.getAttribute('data-length'),10);ra=ra||sa.getAttribute('data-label')||'';i.setLabel(sa,ra);if(typeof ra==='string')if(ta&&ra.length>ta){sa.setAttribute('title',ra);}else sa.removeAttribute('title');},setButtonTooltip:function(qa,ra){var sa=pa.getSelectorButton(qa),ta=s.byTag(sa,'a');ta&&v.set(ta,ra||sa.getAttribute('data-tooltip')||'');},setEnabled:function(qa,ra){if(!ra&&ba&&fa(qa)===ba)pa.toggle(qa);i.setEnabled(pa.getSelectorButton(qa),ra);},setOptionEnabled:function(qa,ra){r.setItemEnabled(qa,ra);},setSelected:function(qa,ra,sa){sa=sa!==false;var ta=pa.getOption(qa,ra);if(!ta)return;var ua=pa.isOptionSelected(ta);if(sa!==ua){if(!la(qa)&&!ua){var va=pa.getSelectedOptions(qa)[0];va&&r.toggleItem(va);}r.toggleItem(ta);}pa.updateSelector(qa);},toggle:function(qa){u.toggle(m.scry(fa(qa),'div.wrap')[0]);},updateSelector:function(qa){var ra=pa.getOptions(qa),sa=pa.getSelectedOptions(qa),ta=ia(qa).options,ua=[],va=[];for(var wa=0,xa=ra.length;wa<xa;wa++){var ya=y(sa,ra[wa]);ta[wa+1].selected=ya;if(ya){var za=pa.getOptionText(ra[wa]);ua.push(za);va.push(ra[wa].getAttribute('data-tooltip')||za);}}ta[0].selected=!sa.length;var ab=k.hasClass(qa,'uiSelectorDynamicLabel'),bb=k.hasClass(qa,'uiSelectorDynamicTooltip');if(ab||bb){var cb='';if(la(qa)){var db=pa.getSelectorButton(qa);cb=db.getAttribute('data-delimiter')||', ';}ua=ua.join(cb);va=va.join(cb);ab&&pa.setButtonLabel(qa,ua);bb&&pa.setButtonTooltip(qa,va);}}});f.exports=pa;},null);