(self.webpackChunkdi_saas_fe=self.webpackChunkdi_saas_fe||[]).push([[7506],{"./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>DiIconGalleryComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,di_icon_gallery_componentngResource=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource"),di_icon_gallery_componentngResource_default=__webpack_require__.n(di_icon_gallery_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),di_icon_component=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts");let DiIconGalleryComponent=((_class=class DiIconGalleryComponent{constructor(){this.allIcons=Object.keys(di_icon_component.W),this.displayIcons=Object.keys(di_icon_component.W),this.searchString="",console.log(this.displayIcons)}updateFilter($event){this.searchString=$event.target.value,console.log($event.target.value),this.displayIcons=this.allIcons.filter((icon=>icon.includes(this.searchString)))}}).ctorParameters=()=>[],_class);DiIconGalleryComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-saas-fe-di-icon-gallery",template:'<div class="icon-header">\n<h1>DI Icons</h1>\n<div class="search" style="margin-bottom: 20px">\n    <label>Icon Search:\n        <input type="text" name="input" [(ngModel)]="searchString" (input)="updateFilter($event)"ng-trim="false">\n      </label>\n</div>\n</div>\n\n<div class="icon-gallery">\n    <ng-template ngFor let-icon [ngForOf]="displayIcons" class="icon">\n        <div class="icon">\n            <di-icon [name]="icon" [size]="\'lg\'"></di-icon>\n            <span>{{icon}}</span>\n        </div>\n    </ng-template>\n</div>',styles:[di_icon_gallery_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],DiIconGalleryComponent)},"./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>MgmtIconLibModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon/di-icon.component.ts"),_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MgmtIconLibModule=class MgmtIconLibModule{};MgmtIconLibModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.u5],declarations:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O],exports:[_di_icon_di_icon_component__WEBPACK_IMPORTED_MODULE_4__.o,_di_icon_gallery_di_icon_gallery_component__WEBPACK_IMPORTED_MODULE_5__.O]})],MgmtIconLibModule)},"./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>BadgeComponent,X:()=>BadgeComponentModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,badge_componentngResource=__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.scss?ngResource"),badge_componentngResource_default=__webpack_require__.n(badge_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),mgmt_icon_lib_module=__webpack_require__("./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts");let BadgeComponent=((_class=class BadgeComponent{constructor(){this.size="sm",this.icon="False",this.iconTrailing=!1,this.risk="None",this.outline=!1,this.default="Default",this.label=""}}).propDecorators={tabindex:[{type:core.Input}],inputId:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}],size:[{type:core.Input}],icon:[{type:core.Input}],iconTrailing:[{type:core.Input}],risk:[{type:core.Input}],outline:[{type:core.Input}],default:[{type:core.Input}],label:[{type:core.Input}]},_class);BadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-badge",template:'<div class="badge"\n    [ngClass]="\'size-\' + size + \' risk-\' + risk +  \' default-\' + default + (outline ? \' outline\' : \'\')"\n>\n    <di-icon \n    *ngIf="icon !== \'False\' && !iconTrailing" \n    [name]="icon" \n    [size]="7"></di-icon>\n    <span>{{label}}</span>\n    <di-icon \n    *ngIf="icon !== \'False\' && iconTrailing" \n    [name]="icon" \n    [size]="7"></di-icon>\n</div>\n',styles:[badge_componentngResource_default()]})],BadgeComponent);let BadgeComponentModule=class BadgeComponentModule{};BadgeComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,mgmt_icon_lib_module.d],exports:[BadgeComponent],declarations:[BadgeComponent]})],BadgeComponentModule)},"./libs/mgmt-ui-components/src/lib/misc/tree-view/tree-view.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BigTree:()=>BigTree,Dropdown:()=>Dropdown,Icons:()=>Icons,Primary:()=>Primary,default:()=>tree_view_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,ControlMode,tree_view_componentngResource=__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/tree-view/tree-view.component.scss?ngResource"),tree_view_componentngResource_default=__webpack_require__.n(tree_view_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),mgmt_icon_lib_module=__webpack_require__("./libs/mgmt-icon-lib/src/lib/mgmt-icon-lib.module.ts"),devextreme_angular_ui_tree_view=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-tree-view.js"),devextreme_angular_ui_tree_list=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-tree-list.js"),badge_component=__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.ts");!function(ControlMode){ControlMode.ACCESS="access",ControlMode.DROPDOWN="dropdown",ControlMode.MINIMAL="minimal"}(ControlMode||(ControlMode={}));let TreeViewItemSumPipe=class TreeViewItemSumPipe{getSum(item){let sum=0;return item.items?item.items?.forEach((subItem=>{sum+=this.getSum(subItem)})):sum=item.tableItems,sum||1}transform(item){return this.getSum(item)}};TreeViewItemSumPipe=(0,tslib_es6.gn)([(0,core.Pipe)({name:"treeViewItemSum"})],TreeViewItemSumPipe);let TreeViewComponent=((_class=class TreeViewComponent{constructor(){this.items=[],this.width="300px",this.height="100vh",this.title="",this.collapsed=!1,this.controlMode=ControlMode.ACCESS,this.onItemClick=new core.EventEmitter,this.ControlMode=ControlMode}toggleNode(item){item.expanded?this.treeView.instance.collapseItem(item.id):this.treeView.instance.expandItem(item.id)}toggleTreeControl(){this.collapsed=!this.collapsed}expandAll(){this.treeView.instance.expandAll()}collapseAll(){this.treeView.instance.collapseAll()}}).propDecorators={treeView:[{type:core.ViewChild,args:[devextreme_angular_ui_tree_view.u,{static:!1}]}],items:[{type:core.Input}],width:[{type:core.Input}],height:[{type:core.Input}],title:[{type:core.Input}],collapsed:[{type:core.Input}],controlMode:[{type:core.Input}],onItemClick:[{type:core.Output}]},_class);TreeViewComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-tree-view",template:'<div *ngIf="!collapsed" [ngStyle]="{ \'height\': height }" class="tree-wrapper">\n  <div class="tree-header" [ngStyle]="{ \'width\': width }">\n    <div class="title">\n      <span class="title-text">{{ title }}</span>\n      <button (click)="toggleTreeControl()">\n        <di-icon name="arrow-chevrons-left"></di-icon>\n      </button>\n    </div>\n    <div class="access-buttons" *ngIf="controlMode == ControlMode.ACCESS">\n      <button (click)="expandAll()">\n        <di-icon name="node-expand"></di-icon>\n      </button>\n      <button (click)="collapseAll()">\n        <di-icon name="node-collapse"></di-icon>\n      </button>\n    </div>\n    <div *ngIf="controlMode == ControlMode.DROPDOWN">\n      \x3c!-- add dropdown here once its ready! --\x3e\n    </div>\n  </div>\n  \n  <dx-tree-view\n    [items]="items"\n    [width]="width"\n    (onItemClick)="onItemClick.emit($event)"\n    itemTemplate="productTemplate"\n    class="tree-view"\n  >\n    <dxo-scrolling\n      [useNative]="true"\n    >\n    </dxo-scrolling>\n    <div *dxTemplate="let item of \'productTemplate\'">\n      <div class="content-wrapper">\n        <div class="tree-left-content">\n          <di-icon class="tree-icon" *ngIf="item.icon" [name]="item.icon"></di-icon>\n          <span class="tree-view-text">{{ item.text }}</span>       \n        </div>\n        <div class="tree-right-content">\n          <di-badge\n            *ngIf="item.items || item.tableItems"\n            [label]="(item | treeViewItemSum) || item.tableItems?.length || \'\'"\n          >\n          </di-badge>\n          <button *ngIf="item.items" (click)="toggleNode(item)" class="expand-button">\n            <di-icon *ngIf="item.expanded" name="chevron-up"></di-icon>\n            <di-icon *ngIf="!item.expanded" name="chevron-down"></di-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </dx-tree-view>\n</div>\n<div *ngIf="collapsed" [ngStyle]="{ \'height\': height }" class="collapsed-tree">\n  <button (click)="toggleTreeControl()">\n    <di-icon name="arrow-chevrons-right"></di-icon>\n  </button>\n  <span class="collapsed-title">{{ title }}</span>\n</div>',styles:[tree_view_componentngResource_default()]})],TreeViewComponent);let TreeViewComponentModule=class TreeViewComponentModule{};TreeViewComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,devextreme_angular_ui_tree_view.V,mgmt_icon_lib_module.d,badge_component.X,devextreme_angular_ui_tree_list.g],exports:[TreeViewComponent],declarations:[TreeViewComponent,TreeViewItemSumPipe]})],TreeViewComponentModule);const bigTree=[{id:"1",text:"Stores",expanded:!0,icon:"add",items:[{id:"1_1",text:"Super Mart of the West",expanded:!0,items:[{id:"1_1_1",text:"Video Players",items:[{id:"1_1_1_1",text:"HD Video Player",badge:220,image:"images/products/1.png"},{id:"1_1_1_2",text:"SuperHD Video Player",image:"images/products/2.png",badge:270,icon:"add"}]},{id:"1_1_2",text:"Televisions",expanded:!0,items:[{id:"1_1_2_1",text:"SuperLCD 42",image:"images/products/7.png",badge:1200},{id:"1_1_2_2",text:"SuperLED 42",image:"images/products/5.png",badge:1450},{id:"1_1_2_3",text:"SuperLED 50",image:"images/products/4.png",badge:1600},{id:"1_1_2_4",text:"SuperLCD 55",image:"images/products/6.png",badge:1350},{id:"1_1_2_5",text:"SuperLCD 70",image:"images/products/9.png",badge:4e3}]},{id:"1_1_3",text:"Monitors",expanded:!0,badge:2e3,items:[{id:"1_1_3_1",text:'19"',expanded:!0,items:[{id:"1_1_3_1_1",text:"DesktopLCD 19",image:"images/products/10.png",badge:160}]},{id:"1_1_3_2",text:'21"',items:[{id:"1_1_3_2_1",text:"DesktopLCD 21",image:"images/products/12.png",badge:170},{id:"1_1_3_2_2",text:"DesktopLED 21",image:"images/products/13.png",badge:175}]}]},{id:"1_1_4",text:"Projectors",items:[{id:"1_1_4_1",text:"Projector Plus",image:"images/products/14.png",badge:550},{id:"1_1_4_2",text:"Projector PlusHD",image:"images/products/15.png",badge:750}]}]},{id:"1_2",text:"Braeburn",items:[{id:"1_2_1",text:"Video Players",items:[{id:"1_2_1_1",text:"HD Video Player",image:"images/products/1.png",badge:240},{id:"1_2_1_2",text:"SuperHD Video Player",image:"images/products/2.png",badge:300}]},{id:"1_2_2",text:"Televisions",items:[{id:"1_2_2_1",text:"SuperPlasma 50",image:"images/products/3.png",badge:1800},{id:"1_2_2_2",text:"SuperPlasma 65",image:"images/products/8.png",badge:3500}]},{id:"1_2_3",text:"Monitors",items:[{id:"1_2_3_1",text:'19"',items:[{id:"1_2_3_1_1",text:"DesktopLCD 19",image:"images/products/10.png",badge:170}]},{id:"1_2_3_2",text:'21"',items:[{id:"1_2_3_2_1",text:"DesktopLCD 21",image:"images/products/12.png",badge:180},{id:"1_2_3_2_2",text:"DesktopLED 21",image:"images/products/13.png",badge:190}]}]}]},{id:"1_3",text:"E-Mart",items:[{id:"1_3_1",text:"Video Players",items:[{id:"1_3_1_1",text:"HD Video Player",image:"images/products/1.png",badge:220},{id:"1_3_1_2",text:"SuperHD Video Player",image:"images/products/2.png",badge:275}]},{id:"1_3_3",text:"Monitors",items:[{id:"1_3_3_1",text:'19"',items:[{id:"1_3_3_1_1",text:"DesktopLCD 19",image:"images/products/10.png",badge:165}]},{id:"1_3_3_2",text:'21"',items:[{id:"1_3_3_2_1",text:"DesktopLCD 21",image:"images/products/12.png",badge:175}]}]}]},{id:"1_4",text:"Walters",items:[{id:"1_4_1",text:"Video Players",items:[{id:"1_4_1_1",text:"HD Video Player",image:"images/products/1.png",badge:210},{id:"1_4_1_2",text:"SuperHD Video Player",image:"images/products/2.png",badge:250}]},{id:"1_4_2",text:"Televisions",items:[{id:"1_4_2_1",text:"SuperLCD 42",image:"images/products/7.png",badge:1100},{id:"1_4_2_2",text:"SuperLED 42",image:"images/products/5.png",badge:1400},{id:"1_4_2_3",text:"SuperLED 50",image:"images/products/4.png",badge:1500},{id:"1_4_2_4",text:"SuperLCD 55",image:"images/products/6.png",badge:1300},{id:"1_4_2_5",text:"SuperLCD 70",image:"images/products/9.png",badge:4e3},{id:"1_4_2_6",text:"SuperPlasma 50",image:"images/products/3.png",badge:1700}]},{id:"1_4_3",text:"Monitors",items:[{id:"1_4_3_1",text:'19"',items:[{id:"1_4_3_1_1",text:"DesktopLCD 19",image:"images/products/10.png",badge:160}]},{id:"1_4_3_2",text:'21"',items:[{id:"1_4_3_2_1",text:"DesktopLCD 21",image:"images/products/12.png",badge:170},{id:"1_4_3_2_2",text:"DesktopLED 21",image:"images/products/13.png",badge:180}]}]},{id:"1_4_4",text:"Projectors",items:[{id:"1_4_4_1",text:"Projector Plus",image:"images/products/14.png",badge:550},{id:"1_4_4_2",text:"Projector PlusHD",image:"images/products/15.png",badge:750}]}]}]}],tree_view_component_stories={title:"TreeViewComponent",component:TreeViewComponent,decorators:[(0,dist.moduleMetadata)({declarations:[TreeViewComponent,TreeViewItemSumPipe],imports:[common.CommonModule,devextreme_angular_ui_tree_view.V,mgmt_icon_lib_module.d,badge_component.X]})],args:{items:[{id:"1",text:"Level 1",expanded:!0,items:[{id:"2",text:"Level 2",expanded:!0,items:[{id:"3",text:"Level 3",items:[{id:"4",text:"Level 4",items:[{id:"5",text:"Level 5",items:[{id:"6",text:"Level 6",items:[{id:"7",text:"Level 7"}]}]}]}]}]}]}],width:"300px",height:"300px"}},Primary={args:{title:"Simple example",controlMode:ControlMode.ACCESS}},Icons={args:{title:"Icons example",controlMode:ControlMode.ACCESS,items:[{id:"1",text:"Level 1",expanded:!0,icon:"add",items:[{id:"2",text:"Level 2",expanded:!0,icon:"add",items:[{id:"3",text:"Level 3",icon:"add",items:[{id:"4",text:"Level 4",icon:"add",items:[{id:"5",text:"Level 5",icon:"add",items:[{id:"6",text:"Level 6",icon:"add",items:[{id:"7",text:"Level 7",icon:"add"}]}]}]}]}]}]}]}},BigTree={args:{title:"Really big tree example",controlMode:ControlMode.MINIMAL,items:bigTree}},Dropdown={args:{title:"Dropdown example",controlMode:ControlMode.DROPDOWN,items:bigTree}}},"./libs/mgmt-icon-lib/src/lib/di-icon-gallery/di-icon-gallery.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".icon-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 150px);\n}\n.icon-gallery > * {\n  padding: 15px 10px;\n}\n.icon-gallery .icon {\n  display: grid;\n  grid-template-rows: 35px 15px;\n  text-align: center;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/mgmt-ui-components/src/lib/misc/badge/badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"div.badge {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 2px 8px 2px 6px;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 16px;\n  text-transform: capitalize;\n  gap: 4px;\n}\ndiv.badge span {\n  color: var(--typography-primary);\n}\ndiv.badge.size-sm {\n  font-size: 10px;\n  height: 20px;\n}\ndiv.badge.size-sm di-icon svg {\n  height: 7px;\n  width: 7px;\n}\ndiv.badge.size-md {\n  font-size: 12px;\n  padding: 2px 10px 2px 8px;\n  gap: 6px;\n  height: 20px;\n}\ndiv.badge.size-md di-icon svg {\n  height: 7px;\n  width: 7px;\n}\ndiv.badge.size-lg {\n  font-size: 12px;\n  padding: 4px 12px 4px 10px;\n  gap: 6px;\n  height: 24px;\n}\ndiv.badge.size-lg di-icon svg.lg {\n  height: 7px;\n  width: 7px;\n}\ndiv.badge.outline {\n  border: 1px solid var(--typography-primary);\n}\ndiv.badge.default-Default {\n  background-color: var(--notify-label-base);\n}\ndiv.badge.default-Selected {\n  background-color: var(--notify-label-base-02);\n}\ndiv.badge.risk-Good di-icon {\n  color: var(--rag-good);\n}\ndiv.badge.risk-Low di-icon {\n  color: var(--rag-moderate);\n}\ndiv.badge.risk-Moderate di-icon {\n  color: var(--rag-moderate-risk);\n}\ndiv.badge.risk-High di-icon {\n  color: var(--rag-very-high-risk);\n}\ndiv.badge.risk-Critical di-icon {\n  color: var(--rag-high-risk);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/mgmt-ui-components/src/lib/misc/tree-view/tree-view.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.tree-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\ndx-tree-view ::ng-deep.dx-item {\n  background: var(--base-02);\n  font-family: "Roboto", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--typography-primary);\n  display: flex;\n  align-items: center;\n  font-feature-settings: "pnum" on, "lnum" on;\n  border-left: 1px solid var(--keylines-02);\n  padding-left: 15px;\n  padding-right: 16px;\n}\ndx-tree-view ::ng-deep.dx-item.dx-state-hover {\n  background: var(--states-hover-bg-01);\n  border-left: 4px solid var(--states-hover-primary) !important;\n  padding-left: 12px !important;\n}\ndx-tree-view ::ng-deep.dx-item:focus-visible {\n  outline: 4px solid var(--states-focus-01);\n}\ndx-tree-view ::ng-deep.dx-state-focused > .dx-treeview-item {\n  background-color: var(--states-selected) !important;\n  border-left: 4px solid var(--states-focus-01) !important;\n  color: var(--typography-primary) !important;\n  padding-left: 12px !important;\n}\ndx-tree-view ::ng-deep.dx-treeview-toggle-item-visibility {\n  display: none;\n}\ndx-tree-view ::ng-deep.dx-state-hover {\n  background: var();\n}\ndx-tree-view ::ng-deep.dx-scrollable-content > .dx-treeview-node-container > .dx-treeview-node {\n  padding-left: 0px;\n}\ndx-tree-view ::ng-deep.dx-scrollable-content > .dx-treeview-node-container > .dx-treeview-node > .dx-item {\n  border-left: none;\n  padding-left: 16px;\n}\ndx-tree-view ::ng-deep.dx-item-content {\n  width: 100%;\n}\n\n.content-wrapper {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.tree-view {\n  background: var(--base-02);\n  flex-grow: 1;\n  overflow: hidden;\n}\n\n.tree-icon {\n  padding-right: 12px;\n}\n\n.tree-left-content {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tree-right-content {\n  display: flex;\n  gap: 12px;\n}\n\n.expand-button {\n  background: none;\n  border: none;\n  padding: 0px;\n  color: var(--typography-primary);\n}\n\n.tree-view-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.tree-header {\n  flex-shrink: 0;\n  width: 100%;\n  border-bottom: 1px solid var(--keylines-01);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 16px;\n  gap: 12px;\n  background: var(--base-02);\n  box-sizing: border-box;\n}\n\nbutton {\n  background: none;\n  border: none;\n  padding: 0;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.title-text {\n  font-family: "Roboto", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  font-feature-settings: "pnum" on, "lnum" on;\n  color: var(--typography-primary);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.access-buttons {\n  gap: 4px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.collapsed-tree {\n  width: 36px;\n  background: var(--base-02);\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 50%;\n  box-sizing: border-box;\n}\n\n.collapsed-title {\n  color: var(--typography-tertiary);\n  font-family: "Roboto", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  /* identical to box height, or 133% */\n  display: flex;\n  align-items: center;\n  font-feature-settings: "pnum" on, "lnum" on;\n  transform: rotate(-90deg);\n  white-space: nowrap;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);