import { AfterViewInit, Component, ComponentRef, createNgModule, DoCheck, Injector, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicOutletService } from './dynamic-outlet.service';

@Component({
  selector: 'app-dynamic-outlet',
  templateUrl: './dynamic-outlet.component.html',
  styleUrl: './dynamic-outlet.component.scss'
})
export class DynamicOutletComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('ref',{read:ViewContainerRef}) ref!:ViewContainerRef;

  @Input() componentName!:string;

  componentRef!:ComponentRef<any>;

  constructor(private injector:Injector, private ds:DynamicOutletService){}

  ngOnInit(): void {
    console.log(this.componentName);
  }

  ngAfterViewInit(): void {
    // console.log(this.ref)
    // this.ds.getModule(this.ref);
    this.destroyComRef()
    this.renderComponent();
  }

  async renderComponent(){
    // this.ds.loadModulePath(this.componentName,this.ref);
    this.componentRef = await this.ds.loadModule(this.componentName,this.ref)
    this.ref.insert(this.componentRef.hostView);
  }

  ngOnDestroy(): void {
    this.destroyComRef();
  }

  destroyComRef(){
    if(this.componentRef && this.ref){
      this.componentRef.destroy();
      this.ref.clear();
    }
  }
}
