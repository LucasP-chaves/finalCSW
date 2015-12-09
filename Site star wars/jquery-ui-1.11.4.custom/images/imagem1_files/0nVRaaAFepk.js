/*!CK:288270078!*//*1448250608,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IoIBe"]); }

__d("MessengerView",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DETAIL:{COMPOSE:"detail\/compose",THREAD:"detail\/thread"},MASTER:{GROUPS:"master\/groups",PEOPLE:"master\/people",RECENT:"master\/recent"}};},null);
__d('MessengerURIConstants',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={COMPOSE_SUBPATH:'/new',GROUPS_PATH:'/groups',PEOPLE_PATH:'/people',THREAD_PREFIX:'/t/',GROUP_PREFIX:'group-',RESERVED_WORDS:['groups','people','new','messenger','t']};f.exports=h;},null);
__d('MessengerStateProcessor',['MercuryAPIArgsSource','MercuryIDs','MercuryParticipantTypes','MercuryParticipants','MercuryThreadIDMap','MercuryThreads','MercuryVanityIDMap','MessengerURIConstants'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p={preprocess:function(r){var s=r.activeThreadID;if(s){var t=i.getUserIDFromThreadID(s),u=t&&k.getNow(i.getParticipantIDFromUserID(t));if(u&&u.type!==j.EVENT){r.threadKey=u.vanity||t;}else if(t&&!u){var v=i.getParticipantIDFromUserID(t);r.threadKey=n.hasID(v)?n.getVanity(v):t;}else{var w=l.get(),x=w.getServerIDFromClientIDNow(s);r.threadKey=x||s;}}delete r.activeThreadID;return r;},postprocess:function(r){var s=l.get(),t=m.get(),u=q(r.threadKey),v;v=i.isValid(u)?u:s.getClientIDFromServerIDNow(u);if(!v){var w=k.getIDFromVanityOrFBID(u),x=w&&t.getCanonicalThreadToParticipant(w,null,h.MESSENGER);if(x)v=x.thread_id;}if(v){r.activeThreadID=v;r.serverThreadID=s.getServerIDFromClientIDNow(v);}delete r.threadKey;return r;}};function q(r){if(!r)return null;return r.startsWith(o.GROUP_PREFIX)?r.substr(o.GROUP_PREFIX.length):r;}f.exports=p;},null);
__d('MessengerURISerializer',['MessengerStateProcessor','MessengerURIConstants','MessengerView','URI','WWWBase'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m='/?$',n={serialize:function(w){var x=new k(l.uri);w=h.preprocess(w);switch(w.masterView){case j.MASTER.GROUPS:x.setPath(i.GROUPS_PATH);break;case j.MASTER.PEOPLE:x.setPath(i.PEOPLE_PATH);break;}if(w.detailView===j.DETAIL.COMPOSE){x.setPath(x.getPath()+i.COMPOSE_SUBPATH);}else if(w.threadKey)x.setPath(x.getPath()+i.THREAD_PREFIX+u(w.threadKey));return x;},deserialize:function(w){var x={},y=w.getPath();if(y.match('^'+i.GROUPS_PATH)){x.masterView=j.MASTER.GROUPS;}else if(y.match('^'+i.PEOPLE_PATH)){x.masterView=j.MASTER.PEOPLE;}else x.masterView=j.MASTER.RECENT;if(y.match(i.COMPOSE_SUBPATH+m)){x.detailView=j.DETAIL.COMPOSE;}else{var z=o(y);if(z&&!s(z)){x.threadKey=v(z);x.detailView=j.DETAIL.THREAD;}}return h.postprocess(x);}};function o(w){var x=w.match(i.THREAD_PREFIX+'([^/]+)'+m);return x&&x[1];}var p=i.RESERVED_WORDS.join('|'),q=new RegExp('^('+p+')$'),r=new RegExp('^\\.('+p+')$');function s(w){return !!w.match(q);}function t(w){return !!w.match(r);}function u(w){w=s(w)?'.'+w:w;return k.encodeComponent(w);}function v(w){w=k.decodeComponent(w);return t(w)?w.substr(1):w;}f.exports=n;},null);
__d('MessengerActions',['MessengerDispatcher','MessengerURISerializer','MessengerView','URI','goURI','keyMirror'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=m({CHANGE_FOLDER:null,HIDE_DIALOG:null,REPLACE_STATE:null,SHOW_DIALOG:null}),o={Types:n,changeDetailView:function(q){p(function(r){if(r.detailView!==q)return {detailView:q};});},changeMasterView:function(q){p(function(r){if(r.masterView!==q)return {masterView:q};});},selectThread:function(q){p(function(r){if(r.activeThreadID!==q)return {activeThreadID:q,detailView:j.DETAIL.THREAD};});},changeState:function(q){h.dispatch({type:n.REPLACE_STATE,nextState:q});},showDialog:function(q,r){h.dispatch({type:o.Types.SHOW_DIALOG,dialogClass:q,dialogProps:r});},hideDialog:function(q){h.dispatch({type:o.Types.HIDE_DIALOG,dialogClass:q});},changeFolder:function(q){h.dispatch({type:o.Types.CHANGE_FOLDER,folder:q});}};function p(q){var r=i.deserialize(new k(window.location.href)),s=q(r);if(s)l(i.serialize(Object.assign(r,s)));}f.exports=o;},null);
__d('P2PActions',['ChatOpenTab','MessengerActions','P2PActionConstants','P2PDispatcher','MercuryShareAttachmentRenderLocations'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m={updateCreditCards:function(n){k.dispatch({type:j.CREDIT_CARDS_UPDATED,data:n});},ignoreCreditCardChannelEvents:function(){k.dispatch({type:j.CHANNEL_EVENTS_IGNORED});},allowCreditCardChannelEvents:function(){k.dispatch({type:j.CHANNEL_EVENTS_ALLOWED});},creditCardSaving:function(){k.dispatch({type:j.CREDIT_CARD_SAVING});},addCreditCard:function(n){k.dispatch({type:j.CREDIT_CARD_ADDED,data:n});},addCreditCardError:function(n){k.dispatch({type:j.CREDIT_CARD_ADDED_ERROR,data:n});},addCreditCardErrorCleared:function(){k.dispatch({type:j.CREDIT_CARD_ADDED_ERROR_CLEARED});},updatePresetCreditCard:function(n){k.dispatch({type:j.PRESET_CREDIT_CARD_UPDATED,data:n});},updatePresetCreditCardError:function(n){k.dispatch({type:j.PRESET_CREDIT_CARD_UPDATED_ERROR,data:n});},updateCreditCard:function(n){k.dispatch({type:j.CREDIT_CARD_UPDATED,data:n});},updateCreditCardError:function(n){k.dispatch({type:j.CREDIT_CARD_UPDATED_ERROR,data:n});},deleteCreditCard:function(n){k.dispatch({type:j.CREDIT_CARD_DELETED,data:n});},deleteCreditCardError:function(n){k.dispatch({type:j.CREDIT_CARD_DELETED_ERROR,data:n});},verifyCreditCard:function(n){k.dispatch({type:j.CREDIT_CARD_VERIFIED,data:n});},verifyCreditCardError:function(n){k.dispatch({type:j.CREDIT_CARD_VERIFIED_ERROR,data:n});},updateTransfers:function(n){k.dispatch({type:j.TRANSFERS_UPDATED,data:n});},updateTransfersError:function(n){k.dispatch({type:j.TRANSFERS_UPDATED_ERROR,data:n});},updateNUXTransfers:function(n){k.dispatch({type:j.NUX_TRANSFERS_UPDATED,data:n});},transferAdded:function(n){k.dispatch({type:j.TRANSFER_ADDED,data:n});},transferAddedError:function(n){k.dispatch({type:j.TRANSFER_ADDED_ERROR,data:n});},transferUpdated:function(n){k.dispatch({type:j.TRANSFER_UPDATED,data:n});},transferUpdatedError:function(n){k.dispatch({type:j.TRANSFER_UPDATED_ERROR,data:n});},transferAccepted:function(){k.dispatch({type:j.TRANSFER_ACCEPTED});},transferDeclined:function(n){k.dispatch({type:j.TRANSFER_DECLINED,data:n});},chatSendViewOpened:function(n){function o(){k.dispatch({type:j.CHAT_SEND_VIEW_OPENED,data:n});}if(n.referrer===l.WEB_INBOX){o();}else if(h.canOpenTab()){h.openThread(n.threadID,null,null,o);}else{i.selectThread(n.threadID);o();}},chatSendViewClosed:function(n){k.dispatch({type:j.CHAT_SEND_VIEW_CLOSED,data:n});},binNumberValidated:function(n){k.dispatch({type:j.BIN_NUMBER_VALIDATED,data:n});},binNumberValidatedError:function(n){k.dispatch({type:j.BIN_NUMBER_VALIDATED_ERROR,data:n});},friendsListUpdated:function(n){k.dispatch({type:j.FRIENDS_LIST_UPDATED,data:n});},userEligibilityUpdated:function(n){k.dispatch({type:j.USER_ELIGIBILITY_UDPATED,data:n});},showDialog:function(n,o){k.dispatch({type:j.DIALOG_SHOWN,data:{dialogClass:n,dialogProps:o}});},hideDialog:function(){k.dispatch({type:j.DIALOG_CLOSED});},bannerStatesUpdated:function(n){k.dispatch({type:j.BANNER_STATES_UPDATED,data:n});},bannerDismissed:function(n){k.dispatch({type:j.BANNER_DISMISSED,data:n});},bannerCompleted:function(n){k.dispatch({type:j.BANNER_COMPLETED,data:n});},moneypennyTransferCreated:function(n){k.dispatch({type:j.MONEYPENNY_TRANSFER_CREATED,data:n});},moneypennyTransferCreatedError:function(n){k.dispatch({type:j.MONEYPENNY_TRANSFER_CREATED_ERROR,data:n});},addPlatformContext:function(n){k.dispatch({type:j.PLATFORM_CONTEXT_ADDED,data:n});},addPlatformContextError:function(n){k.dispatch({type:j.PLATFORM_CONTEXT_ADDED_ERROR,data:n});},clearPlatformContextSaveErrors:function(n){k.dispatch({type:j.PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED,data:n});},platformContextBannerDismissed:function(n){k.dispatch({type:j.PLATFORM_CONTEXT_BANNER_DISMISSED,data:n});},platformContextProductItemSold:function(n){k.dispatch({type:j.PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD,data:n});},platformContextChanged:function(n){k.dispatch({type:j.PLATFORM_CONTEXT_CHANGED,data:n});},extensiveTransferDetailsLoaded:function(n){k.dispatch({type:j.EXTENSIVE_TRANSFER_DETAILS_UPDATED,data:n});},updateAddresses:function(n){k.dispatch({type:j.ADDRESSES_UPDATED,data:n});},addressSaving:function(){k.dispatch({type:j.ADDRESS_SAVING});},addAddress:function(n){k.dispatch({type:j.ADDRESS_ADDED,data:n});},addAddressError:function(n){k.dispatch({type:j.ADDRESS_ADDED_ERROR,data:n});},addAddressErrorCleared:function(){k.dispatch({type:j.ADDRESS_ADDED_ERROR_CLEARED});},checkoutCartInitiated:function(){k.dispatch({type:j.CHECKOUT_CART_INITIATED});},checkoutCartCreated:function(n){k.dispatch({type:j.CHECKOUT_CART_CREATED,data:n});},checkoutShippingOptionSelected:function(n){k.dispatch({type:j.CHECKOUT_SHIPPING_OPTION_SELECTED,data:n});},checkoutAddressSelected:function(n){k.dispatch({type:j.CHECKOUT_ADDRESS_SELECTED,data:n});},checkoutCreditCardSelected:function(n){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_SELECTED,data:n});},checkoutAddressFormToggled:function(n){k.dispatch({type:j.CHECKOUT_ADDRESS_FORM_TOGGLED,data:n});},checkoutCreditCardFormToggled:function(n){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_FORM_TOGGLED,data:n});},checkoutAddressEditOptionsToggled:function(n){k.dispatch({type:j.CHECKOUT_ADDRESS_EDIT_OPTIONS_TOGGLED,data:n});},checkoutCreditCardEditOptionsToggled:function(n){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_EDIT_OPTIONS_TOGGLED,data:n});},checkoutCreditCardFormValidated:function(n,o){k.dispatch({type:j.CHECKOUT_CREDIT_CARD_FORM_VALIDATED,data:{isValid:n,formData:o}});},checkoutAddressFormValidated:function(n,o){k.dispatch({type:j.CHECKOUT_ADDRESS_FORM_VALIDATED,data:{isValid:n,formData:o}});},checkoutEditCompleted:function(){k.dispatch({type:j.CHECKOUT_EDIT_COMPLETED});},checkoutProcessing:function(n){k.dispatch({type:j.CHECKOUT_PROCESSING,data:n});},checkoutBuyerProfileUpdated:function(n){k.dispatch({type:j.CHECKOUT_BUYER_PROFILE_UPDATED,data:n});},paymentRequestInitiated:function(){k.dispatch({type:j.PAYMENT_REQUEST_INITIATED});},paymentRequestInitiatedComplete:function(){k.dispatch({type:j.PAYMENT_REQUEST_INITIATED_COMPLETE});},paymentRequestCreated:function(n){k.dispatch({type:j.PAYMENT_REQUEST_CREATED,data:n});},paymentRequestCreatedError:function(n){k.dispatch({type:j.PAYMENT_REQUEST_CREATED_ERROR,data:n});},paymentRequestUpdated:function(n){k.dispatch({type:j.PAYMENT_REQUEST_UPDATED,data:n});},paymentRequestDeclineInitiated:function(){k.dispatch({type:j.PAYMENT_REQUEST_DECLINE_INITIATED});},paymentRequestDeclined:function(n){k.dispatch({type:j.PAYMENT_REQUEST_DECLINED,data:n});},paymentRequestDeclineError:function(n){k.dispatch({type:j.PAYMENT_REQUEST_DECLINE_ERROR,data:n});},paymentRequestCancelInitiated:function(){k.dispatch({type:j.PAYMENT_REQUEST_CANCEL_INITIATED});},paymentRequestCanceled:function(n){k.dispatch({type:j.PAYMENT_REQUEST_CANCELED,data:n});},paymentRequestCancelError:function(n){k.dispatch({type:j.PAYMENT_REQUEST_CANCEL_ERROR,data:n});},paymentRequestsFetched:function(n){k.dispatch({type:j.PAYMENT_REQUESTS_FETCHED,data:n});}};f.exports=m;},null);
__d('P2PSendMoneyHelper',['MercuryIDs','P2PActions'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={bindProfileSendMoneyAction:function(k,l){k.subscribe('itemclick',function(m,n){if(n.item.getValue()==='send_money')i.chatSendViewOpened({referrer:'profile_action',threadID:h.getThreadIDFromUserID(l)});});}};f.exports=j;},null);