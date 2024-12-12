import { ComponentRef, createNgModule, Injectable, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { FirstComponent } from '../../first/first.component';
import { SecondComponent } from '../../second/second.component';
import { ThirdComponent } from '../../third/third.component';
import { DynamicOutletErrorComponent } from '../dynamic-outlet-error/dynamic-outlet-error.component';
import { FourthComponent } from '../../fourth/fourth.component';
import { FifthComponent } from '../../fifth/fifth.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicOutletService {

  @ViewChild('ref', { read: ViewContainerRef, static: true }) ref!: ViewContainerRef;

  componentRef!: ComponentRef<any>;

  constructor(private injector: Injector) { }

  async loadModule(componentName: any, ref: any) {
    try {
      // throw new Error();
      const module = dynamicComponentMap.get(componentName);
      const moduleName = await module?.loadComponent();
      const componentType = module?.componentType;
      ref.clear();
      if (isModuleConstructor(moduleName)) {
        const moduleRef = createNgModule(moduleName, this.injector);
        this.componentRef = ref.createComponent(componentType, { ngModuleRef: moduleRef });
      } else {
        this.componentRef = ref.createComponent(moduleName);
      }
      // ref.insert(this.componentRef.hostView);
      return this.componentRef;
    } catch (error) {
      let errorMsg = `Unable to load module name ${componentName.slice(0, -9)}`
      this.componentRef = this.showErrorComponent(errorMsg, ref);
      return this.componentRef;
    }
  }

  // async loadModule(componentName:any, moduleFac:any,ref:any){
  //   const module  = dynamicComponentMap.get(componentName);
  //   const moduleName = await module?.loadComponent();
  //   const componentType = module?.componentType;
  //   const moduleRef = createNgModule(moduleName,this.injector);
  //   ref.clear();
  //   const componentRef = ref.createComponent(componentName,{ngModuleRef : moduleRef});
  //   // this.ref.insert(componentRef.hostView);
  // }

  // async loadModulePath(componentName:string, ref:any){
  //   let moduleFac;
  //   try{
  //     // throw new Error();
  //   switch(componentName){
  //     case 'firstComponent':
  //       moduleFac = await import('../../first/first.module').then(m=>m.FirstModule);
  //       this.loadModule(FirstComponent,moduleFac,ref);
  //       break;
  //     case 'secondComponent':
  //       moduleFac = await import('../../second/second.module').then(m=>m.SecondModule);
  //       this.loadModule(SecondComponent,moduleFac,ref);
  //       break;
  //      case 'thirdComponent':
  //       moduleFac = await import('../../third/third.module').then(m=>m.ThirdModule);
  //       this.loadModule(ThirdComponent,moduleFac,ref);
  //       break;   
  //   }
  // }catch(error:any){
  //   console.log(error)
  //   let errorMsg = `Unable to load module name ${componentName.slice(0,-9)}`
  //   this.showErrorComponent(errorMsg,ref);
  // }
  // }

  showErrorComponent(errorMsg: string, ref: any) {
    let comRef = ref.createComponent(DynamicOutletErrorComponent);
    comRef.instance.errorMessage = errorMsg;
    return comRef;
  }
}


type ComponentMap = {
  [name: string]: {
    loadComponent: () => Promise<any>;
    componentType: any
  };
};

const _dynamicComponentMap: ComponentMap = {
  firstComponent: {
    loadComponent: () =>
      import('../../first/first.module').then(m => m.FirstModule),
    componentType: FirstComponent
  },
  secondComponent: {
    loadComponent: () =>
      import('../../second/second.module').then(m => m.SecondModule),
    componentType: SecondComponent
  },
  thirdComponent: {
    loadComponent: () =>
      import('../../third/third.module').then(m => m.ThirdModule),
    componentType: ThirdComponent
  },
  fourthComponent: {
    loadComponent: () =>
      import('../../fourth/fourth.component').then(m => m.FourthComponent),
    componentType: FourthComponent
  },
  fifthComponent: {
    loadComponent: () =>
      import('../../fifth/fifth.component').then(m => m.FifthComponent),
    componentType: FifthComponent
  }
};

export const dynamicComponentMap = new Map(
  Object.entries(_dynamicComponentMap)
);

const NG_MOD_DEF_KEY = 'ɵmod';
const NG_COMP_DEF_KEY = 'ɵcmp';

export function isModuleConstructor(
  item: any
): item is any {
  return !!(item as any)[NG_MOD_DEF_KEY];
}

