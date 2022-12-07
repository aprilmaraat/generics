import { ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  ngOnInit() {
    let toolTipWidth = document.getElementsByClassName('tooltip-container').item(0)?.clientWidth.valueOf()
    console.log(toolTipWidth);
  }
}