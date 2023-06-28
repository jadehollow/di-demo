"use strict";(self.webpackChunkdi_saas_fe=self.webpackChunkdi_saas_fe||[]).push([[883],{"./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>DiIconGalleryComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),di_icon_gallery_componentngResource=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(di_icon_gallery_componentngResource.Z,options);const di_icon_gallery_di_icon_gallery_componentngResource=di_icon_gallery_componentngResource.Z&&di_icon_gallery_componentngResource.Z.locals?di_icon_gallery_componentngResource.Z.locals:void 0;var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts");let DiIconGalleryComponent=((_class=class DiIconGalleryComponent{constructor(){this.allIcons=Object.keys(di_icon_component.W),this.displayIcons=Object.keys(di_icon_component.W),this.searchString="",console.log(this.displayIcons)}updateFilter($event){this.searchString=$event.target.value,console.log($event.target.value),this.displayIcons=this.allIcons.filter((icon=>icon.includes(this.searchString)))}}).ctorParameters=()=>[],_class);DiIconGalleryComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-saas-fe-di-icon-gallery",template:'<div class="icon-header">\n<h1>DI Icons</h1>\n<div class="search" style="margin-bottom: 20px">\n    <label>Icon Search:\n        <input type="text" name="input" [(ngModel)]="searchString" (input)="updateFilter($event)"ng-trim="false">\n      </label>\n</div>\n</div>\n\n<div class="icon-gallery">\n    <ng-template ngFor let-icon [ngForOf]="displayIcons" class="icon">\n        <div class="icon">\n            <di-icon [name]="icon" [size]="\'lg\'"></di-icon>\n            <span>{{icon}}</span>\n        </div>\n    </ng-template>\n</div>',styles:[di_icon_gallery_di_icon_gallery_componentngResource]}),(0,tslib_es6.w6)("design:paramtypes",[])],DiIconGalleryComponent)},"./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>MgmtIconLibModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts"),_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MgmtIconLibModule=class MgmtIconLibModule{};MgmtIconLibModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.u5],declarations:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O],exports:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O]})],MgmtIconLibModule)},"./libs/mgmt-ui-components/src/lib/misc/tag/tag.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,LargeWithBoth:()=>LargeWithBoth,LargeWithClose:()=>LargeWithClose,LargeWithDot:()=>LargeWithDot,Medium:()=>Medium,MediumWithBoth:()=>MediumWithBoth,MediumWithClose:()=>MediumWithClose,MediumWithDot:()=>MediumWithDot,Small:()=>Small,SmallWithBoth:()=>SmallWithBoth,SmallWithClose:()=>SmallWithClose,SmallWithDot:()=>SmallWithDot,default:()=>tag_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tag_componentngResource=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/tag/tag.component.scss?ngResource"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tag_componentngResource.Z,options);const tag_tag_componentngResource=tag_componentngResource.Z&&tag_componentngResource.Z.locals?tag_componentngResource.Z.locals:void 0;var _class,common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),mgmt_icon_lib_module=__webpack_require__("./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts");let TagComponent=((_class=class TagComponent{constructor(){this.size="sm",this.showClose=!1,this.showDot=!1,this.ariaLabelledBy="",this.ariaLabel="",this.closeEmitter=new core.EventEmitter}}).propDecorators={size:[{type:core.Input}],showClose:[{type:core.Input}],showDot:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}],ariaLabel:[{type:core.Input}],closeEmitter:[{type:core.Output}]},_class);TagComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-tag",template:'<div class="tag" [ngClass]="size">\n  <div *ngIf="showDot" class="dot"></div>\n  <div class="text">\n    <ng-content></ng-content>\n  </div>\n  <button\n    [attr.aria-labelledby]="ariaLabelledBy"\n    [attr.aria-label]="ariaLabel"\n    class="close" \n    (click)="closeEmitter.emit()"\n    *ngIf="showClose" \n  >\n    <di-icon\n      class="close-icon"\n      name="x" \n      size="sm"   \n    ></di-icon>\n  </button>\n</div>',styles:[tag_tag_componentngResource]})],TagComponent);let TagComponentModule=class TagComponentModule{};TagComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,mgmt_icon_lib_module.d],exports:[TagComponent],declarations:[TagComponent]})],TagComponentModule);var di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts");const tag_component_stories={title:"TagComponent",component:TagComponent,decorators:[(0,dist.moduleMetadata)({declarations:[TagComponent,di_icon_component.o]})]},Small=args=>({props:args,template:"\n    <di-tag>Tag</di-tag>\n  ",args:{}}),SmallWithDot=args=>({props:args,template:'\n    <di-tag [showDot]="true">Tag</di-tag>\n  ',args:{}}),SmallWithClose=args=>({props:args,template:'\n    <di-tag [showClose]="true">Tag</di-tag>\n  ',args:{}}),SmallWithBoth=args=>({props:args,template:'\n    <di-tag [showDot]="true" [showClose]="true">Tag</di-tag>\n  ',args:{}}),Medium=args=>({props:args,template:'\n    <di-tag size="md">Tag</di-tag>\n  ',args:{}}),MediumWithDot=args=>({props:args,template:'\n    <di-tag size="md" [showDot]="true">Tag</di-tag>\n  ',args:{}}),MediumWithClose=args=>({props:args,template:'\n    <di-tag size="md" [showClose]="true">Tag</di-tag>\n  ',args:{}}),MediumWithBoth=args=>({props:args,template:'\n    <di-tag size="md" [showDot]="true" [showClose]="true">Tag</di-tag>\n  ',args:{}}),Large=args=>({props:args,template:'\n    <di-tag size="lg">Tag</di-tag>\n  ',args:{}}),LargeWithDot=args=>({props:args,template:'\n    <di-tag size="lg" [showDot]="true">Tag</di-tag>\n  ',args:{}}),LargeWithClose=args=>({props:args,template:'\n    <di-tag size="lg" [showClose]="true">Tag</di-tag>\n  ',args:{}}),LargeWithBoth=args=>({props:args,template:'\n    <di-tag size="lg" [showDot]="true" [showClose]="true">Tag</di-tag>\n  ',args:{}})},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon-gallery{display:grid;grid-template-columns:repeat(auto-fill, 150px)}.icon-gallery>*{padding:15px 10px}.icon-gallery .icon{display:grid;grid-template-rows:35px 15px;text-align:center}","",{version:3,sources:["webpack://./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss"],names:[],mappings:"AAAA,cACI,YAAA,CACA,8CAAA,CACA,gBACI,iBAAA,CAGJ,oBACI,YAAA,CACA,4BAAA,CACA,iBAAA",sourcesContent:[".icon-gallery {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 150px);\n    & > * {\n        padding: 15px 10px;\n    }\n\n    .icon {\n        display: grid;\n        grid-template-rows: 35px 15px;\n        text-align: center;\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].use[3]!./libs/mgmt-ui-components/src/lib/misc/tag/tag.component.scss?ngResource":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.tag{box-sizing:border-box;display:flex;width:fit-content;flex-direction:row;justify-content:center;align-items:center;border-radius:4px;font-family:"Roboto",sans-serif;font-style:normal;font-weight:400;display:flex;align-items:center;font-feature-settings:"pnum" on,"lnum" on;border:1px solid var(--keylines-02);color:var(--typography-primary);background:var(--background);width:max-content}.tag.sm{padding:0px 8px;font-size:10px;line-height:16px;height:20px}.tag.sm .text{padding:2px 0px}.tag.md{padding:0px 8px;font-size:14px;line-height:20px;height:24px}.tag.md .text{padding:2px 0px}.tag.lg{padding:0px 8px;font-size:14px;line-height:20px;height:28px}.tag.lg .text{padding:4px 0px}.tag:has(.close){padding-right:0px}.dot{width:6px;height:6px;border-radius:100%;margin-right:4px;background:var(--rag-good)}.close{width:20px;height:20px;border-radius:100%;margin-right:-1px;display:flex;justify-content:center;cursor:pointer;box-sizing:border-box;border:none;background:none;color:var(--typography-secondary);padding:0}.close:hover{color:var(--typography-primary)}.close:focus-visible{border:4px solid var(--cta-tertiary-base);outline:none}.close svg{vertical-align:top}.close-icon{width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:0}',"",{version:3,sources:["webpack://./libs/mgmt-ui-components/src/lib/misc/tag/tag.component.scss"],names:[],mappings:"AAAA,KAEE,qBAAA,CACA,YAAA,CACA,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,+BAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,yCAAA,CACA,mCAAA,CACA,+BAAA,CACA,4BAAA,CACA,iBAAA,CAEA,QACE,eAAA,CACA,cAAA,CACA,gBAAA,CACA,WAAA,CAEA,cACE,eAAA,CAIJ,QACE,eAAA,CACA,cAAA,CACA,gBAAA,CACA,WAAA,CAEA,cACE,eAAA,CAIJ,QACE,eAAA,CACA,cAAA,CACA,gBAAA,CACA,WAAA,CAEA,cACE,eAAA,CAKN,iBACE,iBAAA,CAGF,KACE,SAAA,CACA,UAAA,CACA,kBAAA,CACA,gBAAA,CACA,0BAAA,CAGF,OACE,UAAA,CACA,WAAA,CACA,kBAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,cAAA,CACA,qBAAA,CACA,WAAA,CACA,eAAA,CACA,iCAAA,CACA,SAAA,CACA,aACE,+BAAA,CAEF,qBACE,yCAAA,CACA,YAAA,CAEF,WACE,kBAAA,CAIJ,YACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA",sourcesContent:[".tag {\n  /* Size=sm, Icon=False, Action=Text only, Mode=Light */\n  box-sizing: border-box;\n  display: flex;\n  width: fit-content;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  font-family: 'Roboto', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  font-feature-settings: 'pnum' on, 'lnum' on;\n  border: 1px solid var(--keylines-02);\n  color: var(--typography-primary);\n  background: var(--background);\n  width: max-content;\n\n  &.sm {\n    padding: 0px 8px;\n    font-size: 10px;\n    line-height: 16px;\n    height: 20px;\n\n    .text {\n      padding: 2px 0px;\n    }\n  }\n\n  &.md {\n    padding: 0px 8px;\n    font-size: 14px;\n    line-height: 20px;\n    height: 24px;\n\n    .text {\n      padding: 2px 0px;\n    }\n  }\n  \n  &.lg {\n    padding: 0px 8px;\n    font-size: 14px;\n    line-height: 20px;\n    height: 28px;\n\n    .text {\n      padding: 4px 0px;\n    }\n  }\n}\n\n.tag:has(.close) {\n  padding-right: 0px;\n}\n\n.dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 100%;\n  margin-right: 4px;\n  background: var(--rag-good);\n}\n\n.close {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  margin-right: -1px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  border: none;\n  background: none;\n  color: var(--typography-secondary);\n  padding: 0;\n  &:hover {\n    color: var(--typography-primary);\n  }\n  &:focus-visible {\n    border: 4px solid var(--cta-tertiary-base);\n    outline: none;\n  }\n  svg {\n    vertical-align: top;\n  }\n}\n\n.close-icon {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/@storybook/addon-styling/node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);