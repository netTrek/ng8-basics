import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'cis-directive-samples',
  templateUrl: './directive-samples.component.html',
  styleUrls  : ['./directive-samples.component.scss']
} )
export class DirectiveSamplesComponent implements OnInit {
  show = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }
}
