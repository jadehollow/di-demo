(self.webpackChunkdi_saas_fe=self.webpackChunkdi_saas_fe||[]).push([[4137],{"./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>TooltipComponent,c:()=>TooltipComponentModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,tooltip_componentngResource=__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.scss?ngResource"),tooltip_componentngResource_default=__webpack_require__.n(tooltip_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),devextreme_angular_ui_tooltip=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-tooltip.js"),devextreme_angular_ui_popover=__webpack_require__("./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-popover.js");let TooltipComponent=((_class=class TooltipComponent{constructor(){this.position="bottom",this.styleMode="light"}}).propDecorators={target:[{type:core.Input}],position:[{type:core.Input}],styleMode:[{type:core.Input}],onShown:[{type:core.Output}],onHidden:[{type:core.Output}]},_class);TooltipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"di-tooltip",template:'<dx-popover\n  #popover\n  [target]="target"\n  showEvent="dxhoverstart focus"\n  hideEvent="dxhoverend blur"\n  [position]="position"\n  [wrapperAttr]="{class: \'reverse-style-mode\'}"\n>\n  <ng-container *ngTemplateOutlet="contentTpl"></ng-container>\n</dx-popover>\n<ng-template #contentTpl><ng-content></ng-content></ng-template>',styles:[tooltip_componentngResource_default()]})],TooltipComponent);let TooltipComponentModule=class TooltipComponentModule{};TooltipComponentModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,devextreme_angular_ui_tooltip.S,devextreme_angular_ui_popover.w],exports:[TooltipComponent],declarations:[TooltipComponent]})],TooltipComponentModule)},"./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"TooltipComponent",component:__webpack_require__("./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.ts").K},Primary=args=>({props:args,template:'\n    <span id="target">Mouse over me!</span>\n    <di-tooltip target="#target">This is a helpful tip!</di-tooltip>\n  ',args:{}})},"./libs/mgmt-ui-components/src/lib/misc/tooltip/tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'::ng-deep.dx-popover-wrapper .dx-popup-content {\n  font-family: "Roboto", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  font-feature-settings: "pnum" on, "lnum" on;\n  padding: 8px 12px;\n}\n\n::ng-deep.dx-popover-wrapper .dx-overlay-content {\n  border-radius: 4px;\n  background: var(--base-01);\n  border: 1px var(--base-01) solid;\n}\n::ng-deep.dx-popover-wrapper .dx-popover-arrow {\n  border-radius: 1px;\n  pointer-events: none;\n}\n::ng-deep.dx-popover-wrapper .dx-popover-arrow::after {\n  background: var(--base-01) !important;\n  border: 1px var(--base-01) solid;\n}\n::ng-deep.dx-popover-wrapper .dx-popup-content {\n  font-family: "Roboto", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  font-feature-settings: "pnum" on, "lnum" on;\n  padding: 8px 12px;\n  color: var(--typography-secondary);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);