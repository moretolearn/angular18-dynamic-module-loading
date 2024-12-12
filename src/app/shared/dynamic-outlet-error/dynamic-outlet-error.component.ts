import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-outlet-error',
  templateUrl: './dynamic-outlet-error.component.html',
  styleUrl: './dynamic-outlet-error.component.scss'
})
export class DynamicOutletErrorComponent {

  @Input() errorMessage!: string;
}
