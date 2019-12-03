import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-directive-samples',
  templateUrl: './directive-samples.component.html',
  styleUrls: ['./directive-samples.component.scss']
})
export class DirectiveSamplesComponent implements OnInit {
  showDesc = true;

  constructor() { }

  ngOnInit() {
  }

}
