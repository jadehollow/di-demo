(self.webpackChunkdi_saas_fe=self.webpackChunkdi_saas_fe||[]).push([[8871],{"./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>DiIconGalleryComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,di_icon_gallery_componentngResource=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource"),di_icon_gallery_componentngResource_default=__webpack_require__.n(di_icon_gallery_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts");let DiIconGalleryComponent=((_class=class DiIconGalleryComponent{constructor(){this.allIcons=Object.keys(di_icon_component.W),this.displayIcons=Object.keys(di_icon_component.W),this.searchString="",console.log(this.displayIcons)}updateFilter($event){this.searchString=$event.target.value,console.log($event.target.value),this.displayIcons=this.allIcons.filter((icon=>icon.includes(this.searchString)))}}).ctorParameters=()=>[],_class);DiIconGalleryComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-saas-fe-di-icon-gallery",template:'<div class="icon-header">\n<h1>DI Icons</h1>\n<div class="search" style="margin-bottom: 20px">\n    <label>Icon Search:\n        <input type="text" name="input" [(ngModel)]="searchString" (input)="updateFilter($event)"ng-trim="false">\n      </label>\n</div>\n</div>\n\n<div class="icon-gallery">\n    <ng-template ngFor let-icon [ngForOf]="displayIcons" class="icon">\n        <div class="icon">\n            <di-icon [name]="icon" [size]="\'lg\'"></di-icon>\n            <span>{{icon}}</span>\n        </div>\n    </ng-template>\n</div>',styles:[di_icon_gallery_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],DiIconGalleryComponent)},"./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>MgmtIconLibModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts"),_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MgmtIconLibModule=class MgmtIconLibModule{};MgmtIconLibModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.u5],declarations:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O],exports:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O]})],MgmtIconLibModule)},"./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>BadgeComponent,X:()=>BadgeComponentModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,badge_componentngResource=__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.scss?ngResource"),badge_componentngResource_default=__webpack_require__.n(badge_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),mgmt_icon_lib_module=__webpack_require__("./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts");let BadgeComponent=((_class=class BadgeComponent{constructor(){this.size="sm",this.icon="False",this.iconTrailing=!1,this.risk="None",this.outline=!1,this.default="Default",this.label=""}}).propDecorators={tabindex:[{type:core.Input}],inputId:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}],size:[{type:core.Input}],icon:[{type:core.Input}],iconTrailing:[{type:core.Input}],risk:[{type:core.Input}],outline:[{type:core.Input}],default:[{type:core.Input}],label:[{type:core.Input}]},_class);BadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-badge",template:'<div class="badge"\n    [ngClass]="\'size-\' + size + \' risk-\' + risk +  \' default-\' + default + (outline ? \' outline\' : \'\')"\n>\n    <di-icon \n    *ngIf="icon !== \'False\' && !iconTrailing" \n    [name]="icon" \n    [size]="7"></di-icon>\n    <span>{{label}}</span>\n    <di-icon \n    *ngIf="icon !== \'False\' && iconTrailing" \n    [name]="icon" \n    [size]="7"></di-icon>\n</div>\n',styles:[badge_componentngResource_default()]})],BadgeComponent);let BadgeComponentModule=class BadgeComponentModule{};BadgeComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,mgmt_icon_lib_module.d],exports:[BadgeComponent],declarations:[BadgeComponent]})],BadgeComponentModule)},"./libs/mgmt-ui-components/src/lib/accordion/accordion.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>accordion_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,accordion_componentngResource=__webpack_require__("./libs/mgmt-ui-components/src/lib/accordion/accordion.component.scss?ngResource"),accordion_componentngResource_default=__webpack_require__.n(accordion_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts"),devextreme_angular_ui_accordion=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-accordion.js"),devextreme_angular_core=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-core.js"),badge_component=__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.ts");let AccordionComponent=((_class=class AccordionComponent{constructor(){this.accordionItems=[],this.collapsible=!0,this.multiple=!0,this.openInNew=new core.EventEmitter}openInNewClicked($event){this.openInNew.emit($event)}}).ctorParameters=()=>[],_class.propDecorators={tabindex:[{type:core.Input}],inputId:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}],accordionItems:[{type:core.Input}],collapsible:[{type:core.Input}],multiple:[{type:core.Input}],openInNew:[{type:core.Output}]},_class);AccordionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-accordion",template:'<div class="accordion">\n    <dx-accordion\n      #accordion\n      [items]="accordionItems"\n      [collapsible]="collapsible"\n      [multiple]="multiple"\n      [animationDuration]="300"\n    >\n      <div class="accordion-title" *dxTemplate="let item of \'title\'">\n        <div class="inner-title">\n            <div class="left">\n                <di-icon *ngIf="item.icon" [name]="item.icon" [size]="\'md\'"></di-icon>\n                <h1>{{ item.title }}</h1>\n            </div>\n            <div class="right">\n                <div class="accordion-badges" *ngIf="item.badges">\n                    <di-badge *ngFor="let badge of item.badges" \n                    [label]="badge" \n                    [size]="\'md\'"\n                    ></di-badge>\n                </div>\n                <di-icon *ngIf="item.hasOpenInNew" name="open-in-new" [size]="\'md\'" (onclick)="openInNewClicked($event)"></di-icon>\n            </div>  \n        </div>\n      </div>\n      <div class="accordion-content" *dxTemplate="let html of \'html\'">\n        {{html}}\n      </div>\n    </dx-accordion>\n  \n  </div>',styles:[accordion_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],AccordionComponent);let AppModule=class AppModule{};AppModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,devextreme_angular_ui_accordion.y,devextreme_angular_core.ie],declarations:[AccordionComponent,di_icon_component.o,badge_component.F],bootstrap:[AccordionComponent]})],AppModule);const accordion_component_stories={title:"AccordionComponent",component:AccordionComponent,decorators:[(0,dist.moduleMetadata)({declarations:[AccordionComponent],imports:[common.CommonModule,devextreme_angular_core.ie]})]},Primary={render:args=>({props:args}),args:{multiple:!0,collapsible:!0,accordionItems:[{icon:"sliders",title:"title 1",badges:["badge 1","badge 2","badge 3"],html:'<div class="asdf">hello<div>'},{icon:"analysis",hasOpenInNew:!0,title:"title 2",html:"<div>hello<div>"},{title:"title 3",html:"<div>hello<div>"}]}}},"./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".icon-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 150px);\n}\n.icon-gallery > * {\n  padding: 15px 10px;\n}\n.icon-gallery .icon {\n  display: grid;\n  grid-template-rows: 35px 15px;\n  text-align: center;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/mgmt-ui-components/src/lib/accordion/accordion.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".accordion dx-accordion ::ng-deep.dx-accordion-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.accordion dx-accordion ::ng-deep.dx-accordion-wrapper .dx-accordion-item {\n  border: 1px solid var(--keylines-01);\n  border-radius: 4px;\n}\n.accordion dx-accordion .dx-accordion-item-title::before {\n  color: var(--typography-primary);\n}\n.accordion dx-accordion .inner-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.accordion dx-accordion .inner-title .left {\n  display: flex;\n  gap: 10px;\n}\n.accordion dx-accordion .accordion-badges {\n  display: flex;\n  gap: 4px;\n}\n.accordion dx-accordion .accordion-title {\n  background: var(--base-02);\n  height: 36px;\n}\n.accordion dx-accordion .accordion-title h1 {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 12px;\n  /* identical to box height, or 120% */\n  display: flex;\n  align-items: flex-end;\n  text-transform: uppercase;\n  color: var(--typography-primary);\n}\n.accordion dx-accordion ::ng-deep .dx-accordion-item-body {\n  background: var(--base-01);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"div.badge {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 2px 8px 2px 6px;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 16px;\n  text-transform: capitalize;\n  gap: 4px;\n}\ndiv.badge span {\n  color: var(--typography-primary);\n}\ndiv.badge.size-sm {\n  font-size: 10px;\n  height: 20px;\n}\ndiv.badge.size-sm di-icon svg {\n  height: 7px;\n  width: 7px;\n}\ndiv.badge.size-md {\n  font-size: 12px;\n  padding: 2px 10px 2px 8px;\n  gap: 6px;\n  height: 20px;\n}\ndiv.badge.size-md di-icon svg {\n  height: 7px;\n  width: 7px;\n}\ndiv.badge.size-lg {\n  font-size: 12px;\n  padding: 4px 12px 4px 10px;\n  gap: 6px;\n  height: 24px;\n}\ndiv.badge.size-lg di-icon svg.lg {\n  height: 7px;\n  width: 7px;\n}\ndiv.badge.outline {\n  border: 1px solid var(--typography-primary);\n}\ndiv.badge.default-Default {\n  background-color: var(--notify-label-base);\n}\ndiv.badge.default-Selected {\n  background-color: var(--notify-label-base-02);\n}\ndiv.badge.risk-Good di-icon {\n  color: var(--rag-good);\n}\ndiv.badge.risk-Low di-icon {\n  color: var(--rag-moderate);\n}\ndiv.badge.risk-Moderate di-icon {\n  color: var(--rag-moderate-risk);\n}\ndiv.badge.risk-High di-icon {\n  color: var(--rag-very-high-risk);\n}\ndiv.badge.risk-Critical di-icon {\n  color: var(--rag-high-risk);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);