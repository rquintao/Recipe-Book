import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toRecipes: boolean;
  @Output() headerEvent = new EventEmitter<boolean>();


  constructor() {
    this.toRecipes = true;
    this.emitEvent();
    console.log('emitiu');
  }


  headerSelection(selection: string) {
    selection === 'recipe' ? this.toRecipes = true : this.toRecipes = false;
    this.emitEvent();
  }

  emitEvent() {
    this.headerEvent.emit(this.toRecipes);
    console.log('emitiu da função');
  }

  ngOnInit() {
  }

}
