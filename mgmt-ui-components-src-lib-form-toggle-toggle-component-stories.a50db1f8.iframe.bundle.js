(self.webpackChunkdi_saas_fe=self.webpackChunkdi_saas_fe||[]).push([[4113],{"./libs/mgmt-ui-components/src/lib/form/toggle/toggle.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,StartTrue:()=>StartTrue,default:()=>toggle_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,toggle_componentngResource=__webpack_require__("./libs/mgmt-ui-components/src/lib/form/toggle/toggle.component.scss?ngResource"),toggle_componentngResource_default=__webpack_require__.n(toggle_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs"),devextreme_angular_ui_switch=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-switch.js");let ToggleComponent=((_class=class ToggleComponent{constructor(){this.styleClass="",this.onValueChanged=new core.EventEmitter,this.handle=e=>{this.onValueChanged.emit(e)}}setDisabledState(val){this.disabled=val}}).propDecorators={style:[{type:core.Input}],styleClass:[{type:core.Input}],tabindex:[{type:core.Input}],inputId:[{type:core.Input}],name:[{type:core.Input}],disabled:[{type:core.Input}],readOnly:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}],value:[{type:core.Input}],onValueChanged:[{type:core.Output}]},_class);ToggleComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-toggle",template:'\x3c!-- switched on and off text always empty based on design doc --\x3e\n\n<dx-switch\n  [id]="inputId"\n  [value]="value"\n  [disabled]="disabled"\n  [readOnly]="readOnly"\n  (onValueChanged)="handle($event)"\n  switchedOffText=""\n  switchedOnText=""\n>\n</dx-switch>\n',styles:[toggle_componentngResource_default()]})],ToggleComponent);let ToggleComponentModule=class ToggleComponentModule{};ToggleComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,platform_browser.BrowserModule,devextreme_angular_ui_switch.p],exports:[ToggleComponent],declarations:[ToggleComponent]})],ToggleComponentModule);const toggle_component_stories={title:"ToggleComponent",component:ToggleComponent,decorators:[(0,dist.moduleMetadata)({declarations:[ToggleComponent],imports:[devextreme_angular_ui_switch.p,common.CommonModule]})]},Primary={render:args=>({props:args}),args:{id:"",tabIndex:0,value:!1}},Disabled={render:args=>({props:args}),args:{id:"",tabIndex:0,value:!1,disabled:!0}},StartTrue={render:args=>({props:args}),args:{id:"",tabIndex:0,value:!0,disabled:!1}}},"./node_modules/devextreme/esm/events/gesture/swipeable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _swipe__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/devextreme/esm/events/swipe.js"),_events_core_events_engine__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/devextreme/esm/events/core/events_engine.js"),_core_dom_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/devextreme/esm/core/dom_component.js"),_core_utils_iterator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/devextreme/esm/core/utils/iterator.js"),_utils_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/devextreme/esm/events/utils/index.js"),_core_utils_extend__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/devextreme/esm/core/utils/extend.js"),_core_utils_public_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/devextreme/esm/core/utils/public_component.js"),ACTION_TO_EVENT_MAP={onStart:_swipe__WEBPACK_IMPORTED_MODULE_0__.BL,onUpdated:_swipe__WEBPACK_IMPORTED_MODULE_0__.aq,onEnd:_swipe__WEBPACK_IMPORTED_MODULE_0__.ut,onCancel:"dxswipecancel"},Swipeable=_core_dom_component__WEBPACK_IMPORTED_MODULE_2__.Z.inherit({_getDefaultOptions:function(){return(0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_4__.l)(this.callBase(),{elastic:!0,immediate:!1,immediateTimeout:180,direction:"horizontal",itemSizeFunc:null,onStart:null,onUpdated:null,onEnd:null,onCancel:null})},_render:function(){this.callBase(),this.$element().addClass("dx-swipeable"),this._attachEventHandlers()},_attachEventHandlers:function(){if(this._detachEventHandlers(),!this.option("disabled")){var NAME=this.NAME;this._createEventData(),(0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_6__.S6)(ACTION_TO_EVENT_MAP,function(actionName,eventName){var action=this._createActionByOption(actionName,{context:this});eventName=(0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.V4)(eventName,NAME),_events_core_events_engine__WEBPACK_IMPORTED_MODULE_1__.Z.on(this.$element(),eventName,this._eventData,(function(e){return action({event:e})}))}.bind(this))}},_createEventData:function(){this._eventData={elastic:this.option("elastic"),itemSizeFunc:this.option("itemSizeFunc"),direction:this.option("direction"),immediate:this.option("immediate"),immediateTimeout:this.option("immediateTimeout")}},_detachEventHandlers:function(){_events_core_events_engine__WEBPACK_IMPORTED_MODULE_1__.Z.off(this.$element(),".dxSwipeable")},_optionChanged:function(args){switch(args.name){case"disabled":case"onStart":case"onUpdated":case"onEnd":case"onCancel":case"elastic":case"immediate":case"itemSizeFunc":case"direction":this._detachEventHandlers(),this._attachEventHandlers();break;case"rtlEnabled":break;default:this.callBase(args)}},_useTemplates:function(){return!1}});(0,_core_utils_public_component__WEBPACK_IMPORTED_MODULE_5__.u2)(Swipeable,"dxSwipeable");const __WEBPACK_DEFAULT_EXPORT__=Swipeable},"./node_modules/devextreme/esm/events/swipe.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BL:()=>SWIPE_START_EVENT,aq:()=>SWIPE_EVENT,ut:()=>SWIPE_END_EVENT});var _core_utils_size__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/devextreme/esm/core/utils/size.js"),_utils_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/devextreme/esm/events/utils/index.js"),_gesture_emitter_gesture__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/devextreme/esm/events/gesture/emitter.gesture.js"),_core_emitter_registrator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/devextreme/esm/events/core/emitter_registrator.js"),SWIPE_START_EVENT="dxswipestart",SWIPE_EVENT="dxswipe",SWIPE_END_EVENT="dxswipeend",STRATEGIES={horizontal:{defaultItemSizeFunc:function(){return(0,_core_utils_size__WEBPACK_IMPORTED_MODULE_0__.dz)(this.getElement())},getBounds:function(){return[this._maxLeftOffset,this._maxRightOffset]},calcOffsetRatio:function(e){return((0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.a0)(e).x-(this._savedEventData&&this._savedEventData.x||0))/this._itemSizeFunc().call(this,e)},isFastSwipe:function(e){var endEventData=(0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.a0)(e);return this.FAST_SWIPE_SPEED_LIMIT*Math.abs(endEventData.x-this._tickData.x)>=endEventData.time-this._tickData.time}},vertical:{defaultItemSizeFunc:function(){return(0,_core_utils_size__WEBPACK_IMPORTED_MODULE_0__.Cr)(this.getElement())},getBounds:function(){return[this._maxTopOffset,this._maxBottomOffset]},calcOffsetRatio:function(e){return((0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.a0)(e).y-(this._savedEventData&&this._savedEventData.y||0))/this._itemSizeFunc().call(this,e)},isFastSwipe:function(e){var endEventData=(0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.a0)(e);return this.FAST_SWIPE_SPEED_LIMIT*Math.abs(endEventData.y-this._tickData.y)>=endEventData.time-this._tickData.time}}},SwipeEmitter=_gesture_emitter_gesture__WEBPACK_IMPORTED_MODULE_2__.Z.inherit({TICK_INTERVAL:300,FAST_SWIPE_SPEED_LIMIT:10,ctor:function(element){this.callBase(element),this.direction="horizontal",this.elastic=!0},_getStrategy:function(){return STRATEGIES[this.direction]},_defaultItemSizeFunc:function(){return this._getStrategy().defaultItemSizeFunc.call(this)},_itemSizeFunc:function(){return this.itemSizeFunc||this._defaultItemSizeFunc},_init:function(e){this._tickData=(0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.a0)(e)},_start:function(e){this._savedEventData=(0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.a0)(e),(e=this._fireEvent(SWIPE_START_EVENT,e)).cancel||(this._maxLeftOffset=e.maxLeftOffset,this._maxRightOffset=e.maxRightOffset,this._maxTopOffset=e.maxTopOffset,this._maxBottomOffset=e.maxBottomOffset)},_move:function(e){var strategy=this._getStrategy(),moveEventData=(0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.a0)(e),offset=strategy.calcOffsetRatio.call(this,e);offset=this._fitOffset(offset,this.elastic),moveEventData.time-this._tickData.time>this.TICK_INTERVAL&&(this._tickData=moveEventData),this._fireEvent(SWIPE_EVENT,e,{offset}),!1!==e.cancelable&&e.preventDefault()},_end:function(e){var strategy=this._getStrategy(),offsetRatio=strategy.calcOffsetRatio.call(this,e),isFast=strategy.isFastSwipe.call(this,e),startOffset=offsetRatio,targetOffset=this._calcTargetOffset(offsetRatio,isFast);startOffset=this._fitOffset(startOffset,this.elastic),targetOffset=this._fitOffset(targetOffset,!1),this._fireEvent(SWIPE_END_EVENT,e,{offset:startOffset,targetOffset})},_fitOffset:function(offset,elastic){var bounds=this._getStrategy().getBounds.call(this);return offset<-bounds[0]?elastic?(-2*bounds[0]+offset)/3:-bounds[0]:offset>bounds[1]?elastic?(2*bounds[1]+offset)/3:bounds[1]:offset},_calcTargetOffset:function(offsetRatio,isFast){var result;return isFast?(result=Math.ceil(Math.abs(offsetRatio)),offsetRatio<0&&(result=-result)):result=Math.round(offsetRatio),result}});(0,_core_emitter_registrator__WEBPACK_IMPORTED_MODULE_3__.Z)({emitter:SwipeEmitter,events:[SWIPE_START_EVENT,SWIPE_EVENT,SWIPE_END_EVENT]})},"./node_modules/devextreme/esm/ui/editor/editor.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _core_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/devextreme/esm/core/renderer.js"),_core_element_data__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/devextreme/esm/core/element_data.js"),_core_utils_callbacks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/devextreme/esm/core/utils/callbacks.js"),_core_utils_window__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/devextreme/esm/core/utils/window.js"),_events_utils_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/devextreme/esm/events/utils/index.js"),_core_utils_extend__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/devextreme/esm/core/utils/extend.js"),_widget_ui_widget__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/devextreme/esm/ui/widget/ui.widget.js"),_validation_engine__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/devextreme/esm/ui/validation_engine.js"),_events_core_events_engine__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/devextreme/esm/events/core/events_engine.js"),_validation_message__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/devextreme/esm/ui/validation_message.js"),_core_guid__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/devextreme/esm/core/guid.js"),_core_utils_common__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/devextreme/esm/core/utils/common.js"),_core_utils_dom__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/devextreme/esm/core/utils/dom.js"),ALLOWED_STYLING_MODES=["outlined","filled","underlined"],VALIDATION_MESSAGE_KEYS_MAP={validationMessageMode:"mode",validationMessagePosition:"positionSide",validationMessageOffset:"offset",validationBoundary:"boundary"},Editor=_widget_ui_widget__WEBPACK_IMPORTED_MODULE_6__.default.inherit({ctor:function(){this.showValidationMessageTimeout=null,this.validationRequest=(0,_core_utils_callbacks__WEBPACK_IMPORTED_MODULE_2__.Z)(),this.callBase.apply(this,arguments)},_createElement:function(element){this.callBase(element);var $element=this.$element();$element&&(0,_core_element_data__WEBPACK_IMPORTED_MODULE_1__.aT)($element[0],"dx-validation-target",this)},_initOptions:function(options){this.callBase.apply(this,arguments),this.option(_validation_engine__WEBPACK_IMPORTED_MODULE_7__.Z.initValidationOptions(options))},_init:function(){this.callBase(),this._options.cache("validationTooltipOptions",this.option("validationTooltipOptions")),this.$element().addClass("dx-show-invalid-badge")},_getDefaultOptions:function(){return(0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_5__.l)(this.callBase(),{value:null,name:"",onValueChanged:null,readOnly:!1,isValid:!0,validationError:null,validationErrors:null,validationStatus:"valid",validationMessageMode:"auto",validationMessagePosition:"bottom",validationBoundary:void 0,validationMessageOffset:{h:0,v:0},validationTooltipOptions:{}})},_attachKeyboardEvents:function(){this.option("readOnly")||this.callBase()},_setOptionsByReference:function(){this.callBase(),(0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_5__.l)(this._optionsByReference,{validationError:!0})},_createValueChangeAction:function(){this._valueChangeAction=this._createActionByOption("onValueChanged",{excludeValidators:["disabled","readOnly"]})},_suppressValueChangeAction:function(){this._valueChangeActionSuppressed=!0},_resumeValueChangeAction:function(){this._valueChangeActionSuppressed=!1},_initMarkup:function(){var _this$option;this._toggleReadOnlyState(),this._setSubmitElementName(this.option("name")),this.callBase(),this._renderValidationState(),null===(_this$option=this.option("_onMarkupRendered"))||void 0===_this$option||_this$option()},_raiseValueChangeAction:function(value,previousValue){this._valueChangeAction||this._createValueChangeAction(),this._valueChangeAction(this._valueChangeArgs(value,previousValue))},_valueChangeArgs:function(value,previousValue){return{value,previousValue,event:this._valueChangeEventInstance}},_saveValueChangeEvent:function(e){this._valueChangeEventInstance=e},_focusInHandler:function(e){var isValidationMessageShownOnFocus="auto"===this.option("validationMessageMode");if(this._canValueBeChangedByClick()&&isValidationMessageShownOnFocus){var _this$_validationMess,$validationMessageWrapper=null===(_this$_validationMess=this._validationMessage)||void 0===_this$_validationMess?void 0:_this$_validationMess.$wrapper();null==$validationMessageWrapper||$validationMessageWrapper.removeClass("dx-invalid-message-auto"),clearTimeout(this.showValidationMessageTimeout),this.showValidationMessageTimeout=setTimeout((()=>null==$validationMessageWrapper?void 0:$validationMessageWrapper.addClass("dx-invalid-message-auto")),150)}return this.callBase(e)},_canValueBeChangedByClick:function(){return!1},_getStylingModePrefix:function(){return"dx-editor-"},_renderStylingMode:function(){var optionValue=this.option("stylingMode"),prefix=this._getStylingModePrefix(),allowedStylingClasses=ALLOWED_STYLING_MODES.map((mode=>prefix+mode));allowedStylingClasses.forEach((className=>this.$element().removeClass(className)));var stylingModeClass=prefix+optionValue;if(-1===allowedStylingClasses.indexOf(stylingModeClass)){var defaultOptionValue=this._getDefaultOptions().stylingMode,platformOptionValue=this._convertRulesToOptions(this._defaultOptionsRules()).stylingMode;stylingModeClass=prefix+(platformOptionValue||defaultOptionValue)}this.$element().addClass(stylingModeClass)},_getValidationErrors:function(){var validationErrors=this.option("validationErrors");return!validationErrors&&this.option("validationError")&&(validationErrors=[this.option("validationError")]),validationErrors},_disposeValidationMessage:function(){this._$validationMessage&&(this._$validationMessage.remove(),this.setAria("describedby",null),this._$validationMessage=void 0,this._validationMessage=void 0)},_toggleValidationClasses:function(isInvalid){this.$element().toggleClass("dx-invalid",isInvalid),this.setAria("invalid",isInvalid||void 0)},_renderValidationState:function(){var isValid=this.option("isValid")&&"invalid"!==this.option("validationStatus"),validationErrors=this._getValidationErrors(),$element=this.$element();if(this._toggleValidationClasses(!isValid),(0,_core_utils_window__WEBPACK_IMPORTED_MODULE_3__.Ym)()&&(this._disposeValidationMessage(),!isValid&&validationErrors)){var{validationMessageMode,validationMessagePosition,validationMessageOffset,validationBoundary,rtlEnabled}=this.option();this._$validationMessage=(0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.Z)("<div>").appendTo($element);var validationMessageContentId="dx-".concat(new _core_guid__WEBPACK_IMPORTED_MODULE_10__.Z);this.setAria("describedby",validationMessageContentId),this._validationMessage=new _validation_message__WEBPACK_IMPORTED_MODULE_9__.Z(this._$validationMessage,(0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_5__.l)({validationErrors,rtlEnabled,target:this._getValidationMessageTarget(),visualContainer:$element,mode:validationMessageMode,positionSide:validationMessagePosition,offset:validationMessageOffset,boundary:validationBoundary,contentId:validationMessageContentId},this._options.cache("validationTooltipOptions"))),this._bindInnerWidgetOptions(this._validationMessage,"validationTooltipOptions")}},_getValidationMessageTarget:function(){return this.$element()},_toggleReadOnlyState:function(){var readOnly=this.option("readOnly");this._toggleBackspaceHandler(readOnly),this.$element().toggleClass("dx-state-readonly",!!readOnly),this.setAria("readonly",readOnly||void 0)},_toggleBackspaceHandler:function(isReadOnly){var $eventTarget=this._keyboardEventBindingTarget(),eventName=(0,_events_utils_index__WEBPACK_IMPORTED_MODULE_4__.V4)("keydown","editorReadOnly");_events_core_events_engine__WEBPACK_IMPORTED_MODULE_8__.Z.off($eventTarget,eventName),isReadOnly&&_events_core_events_engine__WEBPACK_IMPORTED_MODULE_8__.Z.on($eventTarget,eventName,(e=>{"backspace"===(0,_events_utils_index__WEBPACK_IMPORTED_MODULE_4__.EV)(e)&&e.preventDefault()}))},_dispose:function(){var element=this.$element()[0];(0,_core_element_data__WEBPACK_IMPORTED_MODULE_1__.aT)(element,"dx-validation-target",null),clearTimeout(this.showValidationMessageTimeout),this._disposeValidationMessage(),this.callBase()},_setSubmitElementName:function(name){var $submitElement=this._getSubmitElement();$submitElement&&(name.length>0?$submitElement.attr("name",name):$submitElement.removeAttr("name"))},_getSubmitElement:function(){return null},_setValidationMessageOption:function(_ref){var _this$_validationMess2,{name,value}=_ref,optionKey=VALIDATION_MESSAGE_KEYS_MAP[name]?VALIDATION_MESSAGE_KEYS_MAP[name]:name;null===(_this$_validationMess2=this._validationMessage)||void 0===_this$_validationMess2||_this$_validationMess2.option(optionKey,value)},_hasActiveElement:_core_utils_common__WEBPACK_IMPORTED_MODULE_11__.ZT,_optionChanged:function(args){var _this$_validationMess3;switch(args.name){case"onValueChanged":this._createValueChangeAction();break;case"readOnly":this._toggleReadOnlyState(),this._refreshFocusState();break;case"value":args.value!=args.previousValue&&this.validationRequest.fire({value:args.value,editor:this}),this._valueChangeActionSuppressed||(this._raiseValueChangeAction(args.value,args.previousValue),this._saveValueChangeEvent(void 0));break;case"width":this.callBase(args),null===(_this$_validationMess3=this._validationMessage)||void 0===_this$_validationMess3||_this$_validationMess3.updateMaxWidth();break;case"name":this._setSubmitElementName(args.value);break;case"isValid":case"validationError":case"validationErrors":case"validationStatus":this.option(_validation_engine__WEBPACK_IMPORTED_MODULE_7__.Z.synchronizeValidationOptions(args,this.option())),this._renderValidationState();break;case"validationBoundary":case"validationMessageMode":case"validationMessagePosition":case"validationMessageOffset":this._setValidationMessageOption(args);break;case"rtlEnabled":this._setValidationMessageOption(args),this.callBase(args);break;case"validationTooltipOptions":this._innerWidgetOptionChanged(this._validationMessage,args);break;default:this.callBase(args)}},blur:function(){this._hasActiveElement()&&(0,_core_utils_dom__WEBPACK_IMPORTED_MODULE_12__.M3)()},reset:function(){var defaultOptions=this._getDefaultOptions();this.option("value",defaultOptions.value)}});Editor.isEditor=instance=>instance instanceof Editor;const __WEBPACK_DEFAULT_EXPORT__=Editor},"./node_modules/devextreme/esm/ui/validation_message.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_core_utils_size__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/devextreme/esm/core/utils/size.js"),_core_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/devextreme/esm/core/renderer.js"),_core_component_registrator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/devextreme/esm/core/component_registrator.js"),_overlay_ui_overlay__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/devextreme/esm/ui/overlay/ui.overlay.js"),_core_utils_extend__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/devextreme/esm/core/utils/extend.js"),_core_utils_string__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/devextreme/esm/core/utils/string.js"),_core_utils_position__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/devextreme/esm/core/utils/position.js"),ValidationMessage=_overlay_ui_overlay__WEBPACK_IMPORTED_MODULE_3__.Z.inherit({_getDefaultOptions(){return(0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_4__.l)(this.callBase(),{integrationOptions:{},templatesRenderAsynchronously:!1,shading:!1,width:"auto",height:"auto",hideOnOutsideClick:!1,animation:null,visible:!0,propagateOutsideClick:!0,_checkParentVisibility:!1,rtlEnabled:!1,contentTemplate:this._renderInnerHtml,maxWidth:"100%",container:this.$element(),target:void 0,mode:"auto",validationErrors:void 0,positionSide:"top",boundary:void 0,offset:{h:0,v:0},contentId:void 0})},_init(){this.callBase(),this.updateMaxWidth(),this._updatePosition()},_initMarkup(){this.callBase(),this._ensureMessageNotEmpty(),this._updatePositionByTarget(),this._toggleModeClass(),this._updateContentId()},_updatePositionByTarget:function(){var{target}=this.option();this.option("position.of",target)},_ensureMessageNotEmpty:function(){this._textMarkup=this._getTextMarkup();var shouldShowMessage=this.option("visible")&&this._textMarkup;this._toggleVisibilityClasses(shouldShowMessage)},_toggleVisibilityClasses:function(visible){visible?(this.$element().addClass("dx-invalid-message"),this.$wrapper().addClass("dx-invalid-message")):(this.$element().removeClass("dx-invalid-message"),this.$wrapper().removeClass("dx-invalid-message"))},_updateContentId(){var{container,contentId}=this.option(),id=null!=contentId?contentId:(0,_core_renderer__WEBPACK_IMPORTED_MODULE_1__.Z)(container).attr("aria-describedby");this.$content().addClass("dx-invalid-message-content").attr("id",id)},_renderInnerHtml(element){var $element=element&&(0,_core_renderer__WEBPACK_IMPORTED_MODULE_1__.Z)(element);null==$element||$element.html(this._textMarkup)},_getTextMarkup(){var _this$option,validationErrors=null!==(_this$option=this.option("validationErrors"))&&void 0!==_this$option?_this$option:[],validationErrorMessage="";return validationErrors.forEach((err=>{var _err$message;validationErrorMessage+=(validationErrorMessage?"<br />":"")+(0,_core_utils_string__WEBPACK_IMPORTED_MODULE_5__.HZ)(null!==(_err$message=null==err?void 0:err.message)&&void 0!==_err$message?_err$message:"")})),validationErrorMessage},_toggleModeClass(){var mode=this.option("mode");this.$wrapper().toggleClass("dx-invalid-message-auto","auto"===mode).toggleClass("dx-invalid-message-always","always"===mode)},updateMaxWidth(){var target=this.option("target"),targetWidth=(0,_core_utils_size__WEBPACK_IMPORTED_MODULE_0__.Y_)(target),maxWidth="100%";targetWidth&&(maxWidth=Math.max(targetWidth,100)),this.option({maxWidth})},_getPositionsArray:function(positionSide,rtlSide){switch(positionSide){case"top":return["".concat(rtlSide," bottom"),"".concat(rtlSide," top")];case"left":return["right","left"];case"right":return["left","right"];default:return["".concat(rtlSide," top"),"".concat(rtlSide," bottom")]}},_updatePosition:function(){var{positionSide,rtlEnabled,offset:componentOffset,boundary}=this.option(),rtlSide=(0,_core_utils_position__WEBPACK_IMPORTED_MODULE_6__.q)(rtlEnabled),positions=this._getPositionsArray(positionSide,rtlSide),offset=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},componentOffset);this.$element().addClass("dx-invalid-message-".concat(positionSide)),rtlEnabled&&"left"!==positionSide&&"right"!==positionSide&&(offset.h=-offset.h),"top"===positionSide&&(offset.v=-offset.v),"left"===positionSide&&(offset.h=-offset.h),this.option("position",{offset,boundary,my:positions[0],at:positions[1],collision:"none flip"})},_optionChanged(args){var{name,value,previousValue}=args;switch(name){case"target":this._updatePositionByTarget(),this.updateMaxWidth(),this.callBase(args);break;case"boundary":this.option("position.boundary",value);break;case"mode":this._toggleModeClass(value);break;case"rtlEnabled":case"offset":case"positionSide":this.$element().removeClass("dx-invalid-message-".concat(previousValue)),this._updatePosition();break;case"container":this._updateContentId(),this.callBase(args);break;case"contentId":this._updateContentId();break;case"validationErrors":this._ensureMessageNotEmpty(),this._renderInnerHtml(this.$content());break;default:this.callBase(args)}}});(0,_core_component_registrator__WEBPACK_IMPORTED_MODULE_2__.Z)("dxValidationMessage",ValidationMessage);const __WEBPACK_DEFAULT_EXPORT__=ValidationMessage},"./libs/mgmt-ui-components/src/lib/form/toggle/toggle.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"::ng-deep dx-switch.dx-switch {\n  width: 52px;\n  height: 32px;\n  border: 2px solid transparent;\n}\n::ng-deep dx-switch.dx-switch .dx-switch-wrapper {\n  padding: 2px;\n}\n::ng-deep dx-switch.dx-switch .dx-switch-container {\n  padding: 2px;\n  width: 44px;\n  height: 24px;\n  background-color: var(--typography-secondary);\n  border-radius: 12px;\n  border: none;\n}\n::ng-deep dx-switch.dx-switch .dx-switch-handle {\n  margin-top: 0px;\n  width: 20px;\n  height: 20px;\n  flex-basis: 20px;\n  color: #FFFFFF;\n}\n::ng-deep dx-switch.dx-switch .dx-switch-handle::before {\n  border-radius: 20px;\n  background-color: #FFFFFF !important;\n}\n::ng-deep dx-switch.dx-state-hover .dx-switch-container {\n  background-color: var(--typography-tertiary) !important;\n}\n::ng-deep dx-switch.dx-switch-on-value.dx-state-hover .dx-switch-container {\n  background-color: var(--cta-primary-hover) !important;\n}\n::ng-deep dx-switch.dx-switch-on-value .dx-switch-container {\n  background-color: var(--cta-primary-base);\n}\n::ng-deep dx-switch.dx-state-disabled .dx-switch-container {\n  background-color: var(--keylines-01);\n}\n::ng-deep dx-switch.dx-switch.dx-state-focused:focus-visible {\n  border: 2px solid var(--cta-primary-base);\n  border-radius: 16px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);