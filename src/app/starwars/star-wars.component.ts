import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
      <div>

          <!-- ALL CREDIT GOES TO -->
          <!-- Craig Buckler -->
          <!-- http://www.sitepoint.com/css3-starwars-scrolling-text/ -->

          <h1>{{title}}</h1>

          <div id="titles">
              <div id="titlecontent">

                  <p [innerHTML]="content" (click)="onClick()"></p>

              </div>
          </div>
      </div>
  `,
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent {
  @Input() title: string;

  @Input() content: string;

  @Output() clicked: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.clicked.emit(this.title);
  }
}
