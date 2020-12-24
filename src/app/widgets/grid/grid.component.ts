import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input()
  content: any;

  constructor() { }

  ngOnInit(): void { }

}
