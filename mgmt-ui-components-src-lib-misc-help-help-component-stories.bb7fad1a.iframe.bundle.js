"use strict";(self.webpackChunkdi_saas_fe=self.webpackChunkdi_saas_fe||[]).push([[864],{"./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>DiIconGalleryComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),di_icon_gallery_componentngResource=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(di_icon_gallery_componentngResource.Z,options);const di_icon_gallery_di_icon_gallery_componentngResource=di_icon_gallery_componentngResource.Z&&di_icon_gallery_componentngResource.Z.locals?di_icon_gallery_componentngResource.Z.locals:void 0;var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts");let DiIconGalleryComponent=((_class=class DiIconGalleryComponent{constructor(){this.allIcons=Object.keys(di_icon_component.W),this.displayIcons=Object.keys(di_icon_component.W),this.searchString="",console.log(this.displayIcons)}updateFilter($event){this.searchString=$event.target.value,console.log($event.target.value),this.displayIcons=this.allIcons.filter((icon=>icon.includes(this.searchString)))}}).ctorParameters=()=>[],_class);DiIconGalleryComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-saas-fe-di-icon-gallery",template:'<div class="icon-header">\n<h1>DI Icons</h1>\n<div class="search" style="margin-bottom: 20px">\n    <label>Icon Search:\n        <input type="text" name="input" [(ngModel)]="searchString" (input)="updateFilter($event)"ng-trim="false">\n      </label>\n</div>\n</div>\n\n<div class="icon-gallery">\n    <ng-template ngFor let-icon [ngForOf]="displayIcons" class="icon">\n        <div class="icon">\n            <di-icon [name]="icon" [size]="\'lg\'"></di-icon>\n            <span>{{icon}}</span>\n        </div>\n    </ng-template>\n</div>',styles:[di_icon_gallery_di_icon_gallery_componentngResource]}),(0,tslib_es6.w6)("design:paramtypes",[])],DiIconGalleryComponent)},"./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>MgmtIconLibModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts"),_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MgmtIconLibModule=class MgmtIconLibModule{};MgmtIconLibModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.u5],declarations:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O],exports:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O]})],MgmtIconLibModule)},"./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipComponent,c:()=>TooltipComponentModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tooltip_componentngResource=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.scss?ngResource"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tooltip_componentngResource.Z,options);const tooltip_tooltip_componentngResource=tooltip_componentngResource.Z&&tooltip_componentngResource.Z.locals?tooltip_componentngResource.Z.locals:void 0;var _class,common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),devextreme_angular_ui_tooltip=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-tooltip.js"),devextreme_angular_ui_popover=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-popover.js");let TooltipComponent=((_class=class TooltipComponent{constructor(){this.position="bottom",this.styleMode="light"}}).propDecorators={target:[{type:core.Input}],position:[{type:core.Input}],styleMode:[{type:core.Input}],onShown:[{type:core.Output}],onHidden:[{type:core.Output}]},_class);TooltipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-tooltip",template:'<dx-popover\n  #popover\n  [target]="target"\n  showEvent="dxhoverstart focus"\n  hideEvent="dxhoverend blur"\n  [position]="position"\n  [wrapperAttr]="{class: \'reverse-style-mode\'}"\n>\n  <ng-container *ngTemplateOutlet="contentTpl"></ng-container>\n</dx-popover>\n<ng-template #contentTpl><ng-content></ng-content></ng-template>',styles:[tooltip_tooltip_componentngResource]})],TooltipComponent);let TooltipComponentModule=class TooltipComponentModule{};TooltipComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,devextreme_angular_ui_tooltip.S,devextreme_angular_ui_popover.w],exports:[TooltipComponent],declarations:[TooltipComponent]})],TooltipComponentModule)},"./libs/mgmt-ui-components/src/lib/misc/help/help.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>help_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),help_componentngResource=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/help/help.component.scss?ngResource"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(help_componentngResource.Z,options);const help_help_componentngResource=help_componentngResource.Z&&help_componentngResource.Z.locals?help_componentngResource.Z.locals:void 0;var _class,common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),tooltip_component=__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.ts"),mgmt_icon_lib_module=__webpack_require__("./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts");let HelpComponent=((_class=class HelpComponent{constructor(){this.ariaLabel="",this.ariaLabelledBy=""}}).propDecorators={helpTarget:[{type:core.ViewChild,args:["helpTarget"]}],ariaLabel:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}]},_class);HelpComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-help",template:'\n<div\n  [attr.aria-label]="ariaLabel"\n  [attr.aria-labelledby]="ariaLabelledBy"\n  tabindex="0"\n  class="help-button-wrapper"\n  #helpTarget\n>\n  <di-icon \n    class="help-button"\n    [name]="\'help\'" [size]="\'md\'"\n  >\n  </di-icon>\n</div>\n<di-tooltip\n  [target]="helpTarget"\n>\n  <ng-content></ng-content>\n</di-tooltip>',styles:[help_help_componentngResource]})],HelpComponent);let HelpComponentModule=class HelpComponentModule{};HelpComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,tooltip_component.c,mgmt_icon_lib_module.d],exports:[HelpComponent],declarations:[HelpComponent]})],HelpComponentModule);var di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts");const help_component_stories={title:"HelpComponent",component:HelpComponent,decorators:[(0,dist.moduleMetadata)({declarations:[di_icon_component.o]})]},Primary=args=>({props:args,template:'\n    <di-help class="light-mode">This is a helpful tip!</di-help>\n  ',args:{}})},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon-gallery{display:grid;grid-template-columns:repeat(auto-fill, 150px)}.icon-gallery>*{padding:15px 10px}.icon-gallery .icon{display:grid;grid-template-rows:35px 15px;text-align:center}","",{version:3,sources:["webpack://./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss"],names:[],mappings:"AAAA,cACI,YAAA,CACA,8CAAA,CACA,gBACI,iBAAA,CAGJ,oBACI,YAAA,CACA,4BAAA,CACA,iBAAA",sourcesContent:[".icon-gallery {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 150px);\n    & > * {\n        padding: 15px 10px;\n    }\n\n    .icon {\n        display: grid;\n        grid-template-rows: 35px 15px;\n        text-align: center;\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/help/help.component.scss?ngResource":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".help-button-wrapper{width:24px;height:24px;display:flex;border-radius:100%;justify-content:center;align-items:center;user-select:none;box-sizing:border-box}.help-button-wrapper:focus-visible{border:4px var(--cta-tertiary-base) solid;outline:none}.help-button{color:var(--typography-tertiary);display:flex}:focus-visible .help-button,:hover .help-button{color:var(--typography-primary)}","",{version:3,sources:["webpack://./libs/mgmt-ui-components/src/lib/misc/help/help.component.scss"],names:[],mappings:"AAAA,qBACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CACA,qBAAA,CAGF,mCACE,yCAAA,CACA,YAAA,CAGF,aACE,gCAAA,CACA,YAAA,CAGF,gDACE,+BAAA",sourcesContent:[".help-button-wrapper {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n.help-button-wrapper:focus-visible {\n  border: 4px var(--cta-tertiary-base) solid;\n  outline: none;\n}\n\n.help-button {\n  color: var(--typography-tertiary);\n  display: flex;\n}\n\n:focus-visible .help-button, :hover .help-button {\n  color: var(--typography-primary);\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.scss?ngResource":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'::ng-deep.dx-popover-wrapper .dx-popup-content{font-family:"Roboto",sans-serif;font-style:normal;font-weight:500;font-size:12px;line-height:16px;display:flex;align-items:center;font-feature-settings:"pnum" on,"lnum" on;padding:8px 12px}::ng-deep.dx-popover-wrapper .dx-overlay-content{border-radius:4px;background:var(--base-01);border:1px var(--base-01) solid}::ng-deep.dx-popover-wrapper .dx-popover-arrow{border-radius:1px;pointer-events:none}::ng-deep.dx-popover-wrapper .dx-popover-arrow::after{background:var(--base-01) !important;border:1px var(--base-01) solid}::ng-deep.dx-popover-wrapper .dx-popup-content{font-family:"Roboto",sans-serif;font-style:normal;font-weight:500;font-size:12px;line-height:16px;display:flex;align-items:center;font-feature-settings:"pnum" on,"lnum" on;padding:8px 12px;color:var(--typography-secondary)}',"",{version:3,sources:["webpack://./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.scss"],names:[],mappings:"AAAA,+CACE,+BAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAEA,YAAA,CACA,kBAAA,CACA,yCAAA,CAEA,gBAAA,CAIA,iDACE,iBAAA,CACA,yBAAA,CACA,+BAAA,CAEF,+CACE,iBAAA,CACA,mBAAA,CAEF,sDACE,oCAAA,CACA,+BAAA,CAEF,+CACE,+BAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAEA,YAAA,CACA,kBAAA,CACA,yCAAA,CAEA,gBAAA,CACA,iCAAA",sourcesContent:["::ng-deep.dx-popover-wrapper .dx-popup-content {\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  display: flex;\n  align-items: center;\n  font-feature-settings: 'pnum' on, 'lnum' on;\n\n  padding: 8px 12px;\n}\n\n::ng-deep.dx-popover-wrapper {\n  .dx-overlay-content {\n    border-radius: 4px;\n    background: var(--base-01);\n    border: 1px var(--base-01) solid;\n  }\n  .dx-popover-arrow {\n    border-radius: 1px;\n    pointer-events: none;\n  }\n  .dx-popover-arrow::after {\n    background: var(--base-01) !important;\n    border: 1px var(--base-01) solid;\n  }\n  .dx-popup-content {\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n\n    display: flex;\n    align-items: center;\n    font-feature-settings: 'pnum' on, 'lnum' on;\n\n    padding: 8px 12px;\n    color: var(--typography-secondary);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);