import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18-dynamic-module-component-loading';
  isLoad: boolean = false;
  componentType: string = '';
  items = [
    { label: 'FirstComponent', value: 'firstComponent' },
    { label: 'SecondComponent', value: 'secondComponent' },
    { label: 'ThirdComponent', value: 'thirdComponent' },
    { label: 'FourthComponent', value: 'fourthComponent' },
    { label: 'FifthComponent', value: 'fifthComponent' }]

  loadModules(componentType: any) {
    console.log(componentType.target.value)
    this.componentType = componentType.target.value;
  }
}
