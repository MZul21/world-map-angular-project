import { Component, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './world-map.svg',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent {
  @Output() idEmitter: EventEmitter<string> = new EventEmitter<string>;

  onEnter(id: string) {
    document.getElementById(id)?.classList.add("highlight");
    this.idEmitter.emit(id);
  }

  onLeave(id: string) {
    document.getElementById(id)?.classList.remove("highlight");
    this.idEmitter.emit();
   }
}
