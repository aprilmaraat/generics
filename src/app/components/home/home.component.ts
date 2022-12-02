import { Component } from '@angular/core';
import { ButtonComponentFields } from '../button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  buttonArray: ButtonComponentFields[] = [
    {
      materialIcon: 'schedule',
      text: '',
      iconUrl: '',
    } as ButtonComponentFields,
  ];
}
