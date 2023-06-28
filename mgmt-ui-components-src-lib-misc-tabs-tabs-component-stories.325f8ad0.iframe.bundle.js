"use strict";(self.webpackChunkdi_saas_fe=self.webpackChunkdi_saas_fe||[]).push([[7689],{"./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>DiIconGalleryComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),di_icon_gallery_componentngResource=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(di_icon_gallery_componentngResource.Z,options);const di_icon_gallery_di_icon_gallery_componentngResource=di_icon_gallery_componentngResource.Z&&di_icon_gallery_componentngResource.Z.locals?di_icon_gallery_componentngResource.Z.locals:void 0;var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts");let DiIconGalleryComponent=((_class=class DiIconGalleryComponent{constructor(){this.allIcons=Object.keys(di_icon_component.W),this.displayIcons=Object.keys(di_icon_component.W),this.searchString="",console.log(this.displayIcons)}updateFilter($event){this.searchString=$event.target.value,console.log($event.target.value),this.displayIcons=this.allIcons.filter((icon=>icon.includes(this.searchString)))}}).ctorParameters=()=>[],_class);DiIconGalleryComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-saas-fe-di-icon-gallery",template:'<div class="icon-header">\n<h1>DI Icons</h1>\n<div class="search" style="margin-bottom: 20px">\n    <label>Icon Search:\n        <input type="text" name="input" [(ngModel)]="searchString" (input)="updateFilter($event)"ng-trim="false">\n      </label>\n</div>\n</div>\n\n<div class="icon-gallery">\n    <ng-template ngFor let-icon [ngForOf]="displayIcons" class="icon">\n        <div class="icon">\n            <di-icon [name]="icon" [size]="\'lg\'"></di-icon>\n            <span>{{icon}}</span>\n        </div>\n    </ng-template>\n</div>',styles:[di_icon_gallery_di_icon_gallery_componentngResource]}),(0,tslib_es6.w6)("design:paramtypes",[])],DiIconGalleryComponent)},"./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>MgmtIconLibModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts"),_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MgmtIconLibModule=class MgmtIconLibModule{};MgmtIconLibModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.u5],declarations:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O],exports:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O]})],MgmtIconLibModule)},"./libs/mgmt-ui-components/src/lib/misc/tabs/tabs.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Low:()=>Low,Normal:()=>Normal,Rounded:()=>Rounded,default:()=>tabs_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tabs_componentngResource=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/tabs/tabs.component.scss?ngResource"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tabs_componentngResource.Z,options);const tabs_tabs_componentngResource=tabs_componentngResource.Z&&tabs_componentngResource.Z.locals?tabs_componentngResource.Z.locals:void 0;var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),devextreme_angular_ui_tabs=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-tabs.js");let TabsComponent=((_class=class TabsComponent{constructor(){this.ariaLabel="",this.ariaLabelledBy="",this.dataSource=[],this.scrollByContent=!1,this.showNavButtons=!1,this.selectedIndex=0,this.scrollingEnabled=!1,this.styleMode="normal",this.onItemClick=new core.EventEmitter}}).propDecorators={ariaLabel:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}],dataSource:[{type:core.Input}],width:[{type:core.Input}],scrollByContent:[{type:core.Input}],showNavButtons:[{type:core.Input}],selectedIndex:[{type:core.Input}],scrollingEnabled:[{type:core.Input}],styleMode:[{type:core.Input}],onItemClick:[{type:core.Output}]},_class);TabsComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-tabs",template:'<dx-tabs \n  [attr.aria-label]="ariaLabel"\n  [attr.aria-labelledby]="ariaLabelledBy"\n  [ngClass]="styleMode"\n  [dataSource]="dataSource"\n  [width]="width"\n  [scrollByContent]="scrollByContent"\n  [showNavButtons]="showNavButtons"\n  [selectedIndex]="selectedIndex"\n  [scrollingEnabled]="scrollingEnabled"\n  (onItemClick)="onItemClick.emit($event)"\n></dx-tabs>',styles:[tabs_tabs_componentngResource]})],TabsComponent);let TabsComponentModule=class TabsComponentModule{};TabsComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,devextreme_angular_ui_tabs.i],exports:[TabsComponent],declarations:[TabsComponent]})],TabsComponentModule);var mgmt_icon_lib_module=__webpack_require__("./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts");const tabs_component_stories={title:"TabsComponent",component:TabsComponent,decorators:[(0,dist.moduleMetadata)({declarations:[],imports:[common.CommonModule,devextreme_angular_ui_tabs.i,mgmt_icon_lib_module.d]})],render:args=>({props:{...args}})},tabs=[{text:"a"},{text:"b"},{text:"c"},{text:"d"},{text:"e"},{text:"f"},{text:"g"}],Normal={args:{dataSource:tabs}},Low={args:{dataSource:tabs,styleMode:"low"}},Rounded={args:{dataSource:tabs,styleMode:"round"}}},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon-gallery{display:grid;grid-template-columns:repeat(auto-fill, 150px)}.icon-gallery>*{padding:15px 10px}.icon-gallery .icon{display:grid;grid-template-rows:35px 15px;text-align:center}","",{version:3,sources:["webpack://./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss"],names:[],mappings:"AAAA,cACI,YAAA,CACA,8CAAA,CACA,gBACI,iBAAA,CAGJ,oBACI,YAAA,CACA,4BAAA,CACA,iBAAA",sourcesContent:[".icon-gallery {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 150px);\n    & > * {\n        padding: 15px 10px;\n    }\n\n    .icon {\n        display: grid;\n        grid-template-rows: 35px 15px;\n        text-align: center;\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/tabs/tabs.component.scss?ngResource":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'::ng-deep.dx-tabs.sm svg,::ng-deep.dx-tabs.sm .dx-icon{width:12px;height:12px}::ng-deep.dx-tabs.md svg,::ng-deep.dx-tabs.md .dx-icon{width:16px;height:16px}::ng-deep.dx-tabs.lg svg,::ng-deep.dx-tabs.lg .dx-icon{width:20px;height:20px}::ng-deep.dx-tabs:focus-visible{outline:4px solid var(--cta-tertiary-base)}::ng-deep.dx-tabs .dx-icon{margin:0}::ng-deep.dx-tabs .dx-tab-text{display:flex;flex-direction:column;justify-content:center;align-items:center}::ng-deep.dx-tabs .dx-tab-selected .dx-tab-text{color:var(--typography-primary)}::ng-deep.dx-tabs .dx-tab-selected .dx-icon{color:var(--typography-primary)}::ng-deep.normal.dx-tabs{border:none}::ng-deep.normal .dx-tab{background:none;padding:1px 12px 10px;border-bottom:1px solid var(--keylines-02)}::ng-deep.normal .dx-state-hover{border-bottom:4px solid var(--states-hover-primary);padding-bottom:7px}::ng-deep.normal .dx-tab-selected{border:none;padding-bottom:7px;border-bottom:4px solid var(--states-focus-01)}::ng-deep.normal .dx-tab-selected::after{border:none}::ng-deep.normal .dx-tabs-wrapper{border:none}::ng-deep.normal .dx-tab-text{font-family:"Roboto",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:20px;display:flex;align-items:center;font-feature-settings:"pnum" on,"lnum" on;color:var(--typography-secondary)}::ng-deep.normal .dx-icon{color:var(--typography-secondary)}::ng-deep.low.dx-tabs{border:none}::ng-deep.low .dx-tab{background:none;padding:0px 12px 3px;border-bottom:1px solid var(--keylines-02)}::ng-deep.low .dx-state-hover{border:none;border-bottom:4px solid var(--states-hover-primary);padding-bottom:0px}::ng-deep.low .dx-tab-selected{border:none;border-bottom:4px solid var(--states-focus-01);padding-bottom:0px}::ng-deep.low .dx-tab-selected::after{border:none}::ng-deep.low .dx-tabs-wrapper{border:none}::ng-deep.low .dx-tab-text{font-family:"Roboto",sans-serif;font-style:normal;font-weight:500;font-size:10px;line-height:16px;display:flex;align-items:center;font-feature-settings:"pnum" on,"lnum" on;color:var(--typography-secondary)}::ng-deep.low .dx-icon{color:var(--typography-secondary)}::ng-deep.round.dx-tabs{border:1px solid var(--keylines-01);border-radius:8px}::ng-deep.round .dx-tab{background:none;padding:8px 12px}::ng-deep.round .dx-state-hover{background:var(--states-hover-bg-01);border-radius:8px;box-sizing:border-box;outline:1px solid var(--states-hover-primary)}::ng-deep.round .dx-tab-selected{background:var(--states-selected);border-radius:8px;box-sizing:border-box;outline:1px solid var(--states-focus-01)}::ng-deep.round .dx-tab-selected::after{border:none}::ng-deep.round .dx-tabs-wrapper{border:none}::ng-deep.round .dx-tab-text{font-family:"Roboto",sans-serif;font-style:normal;font-weight:500;font-size:12px;line-height:16px;display:flex;align-items:center;font-feature-settings:"pnum" on,"lnum" on;color:var(--cta-links)}::ng-deep.round .dx-icon{color:var(--cta-links)}',"",{version:3,sources:["webpack://./libs/mgmt-ui-components/src/lib/misc/tabs/tabs.component.scss"],names:[],mappings:"AACE,uDACE,UAAA,CACA,WAAA,CAGF,uDACE,UAAA,CACA,WAAA,CAGF,uDACE,UAAA,CACA,WAAA,CAGF,gCACE,0CAAA,CAGF,2BACE,QAAA,CAGF,+BACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CAGF,gDACE,+BAAA,CAGF,4CACE,+BAAA,CAKF,yBACE,WAAA,CAGF,yBACE,eAAA,CACA,qBAAA,CACA,0CAAA,CAGF,iCACE,mDAAA,CACA,kBAAA,CAGF,kCACE,WAAA,CACA,kBAAA,CACA,8CAAA,CAGF,yCACE,WAAA,CAGF,kCACE,WAAA,CAGF,8BACE,+BAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,YAAA,CACA,kBAAA,CACA,yCAAA,CAEA,iCAAA,CAGF,0BACE,iCAAA,CAKF,sBACE,WAAA,CAGF,sBACE,eAAA,CACA,oBAAA,CACA,0CAAA,CAGF,8BACE,WAAA,CACA,mDAAA,CACA,kBAAA,CAGF,+BACE,WAAA,CACA,8CAAA,CACA,kBAAA,CAGF,sCACE,WAAA,CAGF,+BACE,WAAA,CAGF,2BACE,+BAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,YAAA,CACA,kBAAA,CACA,yCAAA,CAEA,iCAAA,CAGF,uBACE,iCAAA,CAKF,wBACE,mCAAA,CACA,iBAAA,CAGF,wBACE,eAAA,CACA,gBAAA,CAGF,gCACE,oCAAA,CACA,iBAAA,CACA,qBAAA,CACA,6CAAA,CAGF,iCACE,iCAAA,CACA,iBAAA,CACA,qBAAA,CACA,wCAAA,CAEA,wCACE,WAAA,CAIJ,iCACE,WAAA,CAGF,6BACE,+BAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAGA,YAAA,CACA,kBAAA,CACA,yCAAA,CAIA,sBAAA,CAGF,yBACE,sBAAA",sourcesContent:["::ng-deep.dx-tabs {  \n  &.sm svg, &.sm .dx-icon {\n    width: 12px;\n    height: 12px;\n  }\n\n  &.md svg, &.md .dx-icon {\n    width: 16px;\n    height: 16px;\n  }\n\n  &.lg svg, &.lg .dx-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  &:focus-visible {\n    outline: 4px solid var(--cta-tertiary-base)\n  }\n\n  .dx-icon {\n    margin: 0;\n  }\n\n  .dx-tab-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .dx-tab-selected .dx-tab-text {\n    color: var(--typography-primary);\n  }\n\n  .dx-tab-selected .dx-icon {\n    color: var(--typography-primary);\n  }\n}\n\n::ng-deep.normal {\n  &.dx-tabs {\n    border: none;\n  }\n\n  .dx-tab {\n    background: none;\n    padding: 1px 12px 10px;\n    border-bottom: 1px solid var(--keylines-02);\n  }\n\n  .dx-state-hover {\n    border-bottom: 4px solid var(--states-hover-primary);\n    padding-bottom: 7px;\n  }\n\n  .dx-tab-selected {\n    border: none;\n    padding-bottom: 7px;\n    border-bottom: 4px solid var(--states-focus-01);\n  }\n\n  .dx-tab-selected::after {\n    border: none;\n  }\n\n  .dx-tabs-wrapper {\n    border: none;\n  }\n  \n  .dx-tab-text {\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    display: flex;\n    align-items: center;\n    font-feature-settings: 'pnum' on, 'lnum' on;\n\n    color: var(--typography-secondary);\n  }\n\n  .dx-icon {\n    color: var(--typography-secondary)\n  }\n}\n\n::ng-deep.low {\n  &.dx-tabs {\n    border: none; \n  }\n\n  .dx-tab {\n    background: none;\n    padding: 0px 12px 3px;\n    border-bottom: 1px solid var(--keylines-02)\n  }\n\n  .dx-state-hover {\n    border: none;\n    border-bottom: 4px solid var(--states-hover-primary);\n    padding-bottom: 0px;\n  }\n\n  .dx-tab-selected {\n    border: none;\n    border-bottom: 4px solid var(--states-focus-01);\n    padding-bottom: 0px;\n  }\n\n  .dx-tab-selected::after {\n    border: none;\n  }\n\n  .dx-tabs-wrapper {\n    border: none;\n  }\n  \n  .dx-tab-text {\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 16px;\n    display: flex;\n    align-items: center;\n    font-feature-settings: 'pnum' on, 'lnum' on;\n\n    color: var(--typography-secondary);\n  }\n\n  .dx-icon {\n    color: var(--typography-secondary)\n  }\n}\n\n::ng-deep.round {\n  &.dx-tabs {\n    border: 1px solid var(--keylines-01);\n    border-radius: 8px;\n  }\n\n  .dx-tab {\n    background: none;\n    padding: 8px 12px;\n  }\n\n  .dx-state-hover {\n    background: var(--states-hover-bg-01);\n    border-radius: 8px;\n    box-sizing: border-box;\n    outline: 1px solid var(--states-hover-primary);\n  }\n\n  .dx-tab-selected {\n    background: var(--states-selected);\n    border-radius: 8px;\n    box-sizing: border-box;\n    outline: 1px solid var(--states-focus-01);\n\n    &::after {\n      border: none;\n    }\n  }\n\n  .dx-tabs-wrapper {\n    border: none;\n  }\n  \n  .dx-tab-text {\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    /* identical to box height, or 160% */\n\n    display: flex;\n    align-items: center;\n    font-feature-settings: 'pnum' on, 'lnum' on;\n\n    /* Typography/Light mode/Secondary */\n\n    color: var(--cta-links);\n  }\n\n  .dx-icon {\n    color: var(--cta-links)\n  }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);