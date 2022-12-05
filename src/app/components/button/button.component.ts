import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonArray: ButtonComponentFields[] = [];
  @Input() toolTip: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface ButtonComponentFields {
  materialIcon: string,
  text: string,
  iconUrl: string,
}