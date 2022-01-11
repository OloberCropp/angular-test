import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-btn',
  templateUrl: './tab-btn.component.html',
  styleUrls: ['./tab-btn.component.scss']
})

export class TabBtnComponent implements OnInit {
  @Input() tabTitle: string;
  @Output() tabSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(){
    this.tabSelected.emit();
  }
  
}
